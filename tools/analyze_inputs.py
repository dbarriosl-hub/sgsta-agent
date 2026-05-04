from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INPUTS = ROOT / "insumos"
SQL_PATH = INPUTS / "bdensql.sql"
XLSX_PATH = INPUTS / "documentacion_sistema_sgs_iso21101.xlsx"
PDF_PATH = INPUTS / "NTC-ISO-21101-2020-TURISMO-DE-AVENTURA-SISTEMAS-DE-GESTION-DE-SEGURIDAD-REQUISITOS.pdf"
OUT_PATH = ROOT / "analysis" / "input_summary.json"


def parse_sql() -> dict:
    text = SQL_PATH.read_text(encoding="utf-8", errors="replace")
    table_pattern = re.compile(
        r"CREATE TABLE IF NOT EXISTS\s+`(?P<schema>[^`]+)`\.`(?P<table>[^`]+)`\s*\((?P<body>.*?)\)\s*ENGINE",
        re.S,
    )
    tables = []
    for match in table_pattern.finditer(text):
        body = match.group("body")
        columns = []
        foreign_keys = []
        for raw_line in body.splitlines():
            line = raw_line.strip().rstrip(",")
            col = re.match(r"`([^`]+)`\s+(.+)", line)
            if col:
                columns.append({"name": col.group(1), "definition": col.group(2)})
            if "FOREIGN KEY" in line or line.startswith("REFERENCES"):
                foreign_keys.append(line)
        tables.append(
            {
                "name": match.group("table"),
                "columns": columns,
                "foreign_keys": foreign_keys,
            }
        )
    return {
        "table_count": len(tables),
        "tables": tables,
        "insert_count": len(re.findall(r"^INSERT INTO", text, flags=re.M)),
    }


def xlsx_shared_strings(zip_file: zipfile.ZipFile) -> list[str]:
    try:
        data = zip_file.read("xl/sharedStrings.xml")
    except KeyError:
        return []
    root = ET.fromstring(data)
    ns = {"x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    strings = []
    for item in root.findall("x:si", ns):
        parts = [node.text or "" for node in item.findall(".//x:t", ns)]
        strings.append("".join(parts))
    return strings


def cell_value(cell: ET.Element, shared: list[str], ns: dict[str, str]) -> str:
    value = cell.find("x:v", ns)
    if value is None or value.text is None:
        inline = cell.find("x:is/x:t", ns)
        return inline.text if inline is not None and inline.text else ""
    if cell.attrib.get("t") == "s":
        idx = int(value.text)
        return shared[idx] if idx < len(shared) else ""
    return value.text


def parse_xlsx() -> dict:
    ns = {
        "x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
        "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
    }
    with zipfile.ZipFile(XLSX_PATH) as zf:
        shared = xlsx_shared_strings(zf)
        workbook = ET.fromstring(zf.read("xl/workbook.xml"))
        rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
        rel_map = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels.findall("rel:Relationship", ns)}
        sheets = []
        for sheet in workbook.findall("x:sheets/x:sheet", ns):
            name = sheet.attrib["name"]
            rel_id = sheet.attrib[f"{{{ns['r']}}}id"]
            target = rel_map[rel_id].lstrip("/")
            path = "xl/" + target if not target.startswith("xl/") else target
            root = ET.fromstring(zf.read(path))
            rows = []
            for row in root.findall("x:sheetData/x:row", ns)[:8]:
                values = [cell_value(cell, shared, ns) for cell in row.findall("x:c", ns)]
                rows.append(values)
            sheets.append({"name": name, "preview_rows": rows})
    return {"sheet_count": len(sheets), "sheets": sheets}


def parse_pdf() -> dict:
    result = {"path": str(PDF_PATH), "text_available": False, "page_count": None, "sample": ""}
    try:
        from pypdf import PdfReader
    except Exception as exc:
        result["error"] = f"pypdf unavailable: {exc}"
        return result
    try:
        reader = PdfReader(str(PDF_PATH))
        result["page_count"] = len(reader.pages)
        text = "\n".join((page.extract_text() or "") for page in reader.pages[:5])
        result["text_available"] = bool(text.strip())
        result["sample"] = text[:2500]
    except Exception as exc:
        result["error"] = str(exc)
    return result


def main() -> None:
    OUT_PATH.parent.mkdir(exist_ok=True)
    summary = {"sql": parse_sql(), "xlsx": parse_xlsx(), "pdf": parse_pdf()}
    OUT_PATH.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

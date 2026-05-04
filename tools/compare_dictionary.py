from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SUMMARY = ROOT / "analysis" / "input_summary.json"
XLSX_PATH = ROOT / "insumos" / "documentacion_sistema_sgs_iso21101.xlsx"


NS = {
    "x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}


def shared_strings(zf: zipfile.ZipFile) -> list[str]:
    try:
        root = ET.fromstring(zf.read("xl/sharedStrings.xml"))
    except KeyError:
        return []
    return ["".join(t.text or "" for t in si.findall(".//x:t", NS)) for si in root.findall("x:si", NS)]


def value(cell: ET.Element, shared: list[str]) -> str:
    node = cell.find("x:v", NS)
    if node is None or node.text is None:
        inline = cell.find("x:is/x:t", NS)
        return inline.text if inline is not None and inline.text else ""
    if cell.attrib.get("t") == "s":
        index = int(node.text)
        return shared[index] if index < len(shared) else ""
    return node.text


def read_sheet_rows(sheet_name: str) -> list[list[str]]:
    with zipfile.ZipFile(XLSX_PATH) as zf:
        shared = shared_strings(zf)
        workbook = ET.fromstring(zf.read("xl/workbook.xml"))
        rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
        rel_map = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels.findall("rel:Relationship", NS)}
        for sheet in workbook.findall("x:sheets/x:sheet", NS):
            if sheet.attrib["name"] != sheet_name:
                continue
            rel_id = sheet.attrib[f"{{{NS['r']}}}id"]
            target = rel_map[rel_id].lstrip("/")
            path = "xl/" + target if not target.startswith("xl/") else target
            root = ET.fromstring(zf.read(path))
            rows = []
            for row in root.findall("x:sheetData/x:row", NS):
                cells = [value(cell, shared).strip() for cell in row.findall("x:c", NS)]
                rows.append(cells)
            return rows
    return []


def main() -> None:
    summary = json.loads(SUMMARY.read_text(encoding="utf-8"))
    sql_tables = {table["name"] for table in summary["sql"]["tables"]}
    table_rows = read_sheet_rows("Tablas")[1:]
    field_rows = read_sheet_rows("Campos")[1:]
    documented_tables = {row[0] for row in table_rows if row and row[0]}
    field_tables = {row[0] for row in field_rows if row and row[0]}
    all_documented = documented_tables | field_tables

    result = {
        "sql_table_count": len(sql_tables),
        "documented_table_count": len(all_documented),
        "documented_not_in_sql": sorted(all_documented - sql_tables),
        "sql_not_documented": sorted(sql_tables - all_documented),
        "documented_tables": sorted(all_documented),
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

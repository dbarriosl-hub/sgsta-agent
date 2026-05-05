const http = require("http");
const fs = require("fs");
const path = require("path");
const { createStorage } = require("./storage");

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "state.json");
const staticTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};
const internalFormTables = new Set(["organizaciones"]);

const requirements = [
  { code: "4.1", chapter: "4", title: "Comprension de la organizacion y de su contexto", evidence: "Analisis de contexto interno y externo" },
  { code: "4.2", chapter: "4", title: "Partes interesadas", evidence: "Matriz de partes interesadas" },
  { code: "4.3", chapter: "4", title: "Alcance del SGSTA", evidence: "Declaracion de alcance" },
  { code: "4.4", chapter: "4", title: "Sistema de gestion de seguridad", evidence: "Mapa general del sistema" },
  { code: "5.1", chapter: "5", title: "Liderazgo y compromiso", evidence: "Compromiso de la direccion" },
  { code: "5.2", chapter: "5", title: "Politica", evidence: "Politica de seguridad aprobada" },
  { code: "5.3", chapter: "5", title: "Roles, responsabilidades y autoridades", evidence: "Matriz de roles" },
  { code: "6.1", chapter: "6", title: "Riesgos y oportunidades", evidence: "Plan de riesgos y oportunidades" },
  { code: "6.1.2", chapter: "6", title: "Proceso de gestion del riesgo", evidence: "Mapa de riesgos por actividad" },
  { code: "6.1.3", chapter: "6", title: "Requisitos legales", evidence: "Normograma" },
  { code: "6.2", chapter: "6", title: "Objetivos de seguridad", evidence: "Objetivos y plan de accion" },
  { code: "7.1", chapter: "7", title: "Recursos", evidence: "Listado de recursos criticos" },
  { code: "7.2", chapter: "7", title: "Competencia", evidence: "Matriz de competencias" },
  { code: "7.3", chapter: "7", title: "Toma de conciencia", evidence: "Registros de capacitacion" },
  { code: "7.4", chapter: "7", title: "Comunicacion", evidence: "Plan de comunicaciones" },
  { code: "7.5", chapter: "7", title: "Informacion documentada", evidence: "Listado maestro de documentos" },
  { code: "8.1", chapter: "8", title: "Planificacion y control operacional", evidence: "Procedimientos operacionales" },
  { code: "8.2", chapter: "8", title: "Preparacion y respuesta ante emergencias", evidence: "Plan de emergencias" },
  { code: "8.3", chapter: "8", title: "Gestion de incidentes", evidence: "Registro de incidentes" },
  { code: "9.1", chapter: "9", title: "Seguimiento, medicion, analisis y evaluacion", evidence: "Indicadores de desempeno" },
  { code: "9.2", chapter: "9", title: "Auditoria interna", evidence: "Programa e informe de auditoria" },
  { code: "9.3", chapter: "9", title: "Revision por la direccion", evidence: "Acta de revision por direccion" },
  { code: "10.1", chapter: "10", title: "No conformidad y accion correctiva", evidence: "Registro de acciones correctivas" },
  { code: "10.2", chapter: "10", title: "Mejora continua", evidence: "Plan de mejora" }
];

const defaultState = {
  organizations: [{ id: "org-demo", name: "Mi empresa de turismo", activeSystem: "iso21101", plan: "profesional" }],
  formResponses: [],
  actions: [
    { id: "act-1", title: "Definir alcance del SGSTA", code: "4.3", status: "abierta", type: "tarea", origin: "agente" },
    { id: "act-2", title: "Crear politica de seguridad", code: "5.2", status: "abierta", type: "tarea", origin: "agente" }
  ],
  evidence: [],
  closurePackages: [],
  auditEvents: []
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function serializeError(error) {
  if (!error) return null;
  const details = {
    name: error.name || "Error",
    message: error.message || String(error)
  };
  if (error.code) details.code = error.code;
  if (error.errno) details.errno = error.errno;
  if (error.address) details.address = error.address;
  if (error.port) details.port = error.port;
  if (Array.isArray(error.errors)) {
    details.errors = error.errors.map((item) => ({
      name: item.name || "Error",
      message: item.message || String(item),
      code: item.code,
      address: item.address,
      port: item.port
    }));
  }
  return details;
}

function saveState() {
  if (!storageReady) {
    console.warn("Estado aun no persistido: almacenamiento no esta listo.");
    return;
  }
  storage.save(state).catch((error) => {
    console.error(`No se pudo guardar estado en ${storage.name}:`, error.message);
  });
}

function normalizeState(savedState) {
  return {
    ...clone(defaultState),
    ...savedState,
    organizations: savedState.organizations || clone(defaultState.organizations),
    formResponses: savedState.formResponses || [],
    actions: savedState.actions || clone(defaultState.actions),
    evidence: savedState.evidence || [],
    closurePackages: savedState.closurePackages || [],
    auditEvents: savedState.auditEvents || []
  };
}

let storage;
let state = clone(defaultState);
let storageReady = false;
let storageError = null;

function readWindowPayload(file, globalName) {
  const text = fs.readFileSync(path.join(ROOT, "app", file), "utf8").trim();
  const prefix = `window.${globalName} = `;
  return JSON.parse(text.slice(prefix.length).replace(/;$/, ""));
}

function formCatalog() {
  return readWindowPayload("form_catalog.js", "formCatalog");
}

function visibleFormCatalog() {
  return formCatalog().filter((form) => !internalFormTables.has(form.table));
}

function formMatrix() {
  return readWindowPayload("form_matrix.js", "formMatrix");
}

function send(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(payload, null, 2));
}

function notFound(res) {
  send(res, 404, { error: "not_found" });
}

function serveStaticApp(url, res) {
  let requestedPath = decodeURIComponent(url.pathname);
  if (requestedPath === "/" || requestedPath === "/app" || requestedPath === "/app/") {
    requestedPath = "/index.html";
  }
  if (requestedPath.startsWith("/app/")) requestedPath = requestedPath.slice(4);

  const filePath = path.normalize(path.join(APP_DIR, requestedPath));
  if (!filePath.startsWith(APP_DIR) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return false;
  }

  const extension = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": staticTypes[extension] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) req.destroy();
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function recordEvent(event) {
  state.auditEvents.unshift({
    id: `evt-${Date.now()}`,
    date: new Date().toISOString(),
    ...event
  });
  saveState();
}

function parseFlexibleDate(value) {
  if (!value || String(value).toLowerCase().includes("por ")) return null;
  const text = String(value).trim();
  const iso = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
  const local = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (local) {
    const year = Number(local[3].length === 2 ? `20${local[3]}` : local[3]);
    return new Date(year, Number(local[2]) - 1, Number(local[1]));
  }
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function dueSeverity(value, warningDays = 30) {
  const date = parseFlexibleDate(value);
  if (!date) return { severity: "media", label: "sin fecha programada", days: null };
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  const days = Math.ceil((date - todayDate) / 86400000);
  if (days < 0) return { severity: "alta", label: `vencido hace ${Math.abs(days)} dia(s)`, days };
  if (days <= warningDays) return { severity: "alta", label: `vence en ${days} dia(s)`, days };
  return { severity: "baja", label: `vigente por ${days} dia(s)`, days };
}

function buildAlerts() {
  const alerts = [];
  const pendingForms = visibleFormCatalog().length - state.formResponses.filter((item) => !internalFormTables.has(item.table)).length;
  if (pendingForms > 0) {
    alerts.push({
      title: "Formularios pendientes",
      detail: `${pendingForms} formularios aun no tienen respuesta.`,
      code: "7.5",
      severity: pendingForms > 10 ? "alta" : "media",
      origin: "formularios"
    });
  }
  const openActions = state.actions.filter((action) => action.status !== "cerrada");
  if (openActions.length) {
    alerts.push({
      title: "Acciones abiertas",
      detail: `${openActions.length} accion(es) requieren seguimiento.`,
      code: "10.1",
      severity: openActions.length > 5 ? "alta" : "media",
      origin: "acciones"
    });
  }
  list(state.policies).forEach((policy) => {
    const due = dueSeverity(policy.due, 30);
    if (policy.status === "vigente" && due.severity === "baja") return;
    alerts.push({
      title: due.days !== null && due.days < 0 ? "Poliza vencida" : "Poliza requiere validacion",
      detail: `${policy.number} para ${policy.activity} esta ${policy.status}. Vigencia: ${policy.due || "Por definir"} (${due.label}).`,
      code: "6.1.3",
      severity: policy.status !== "vigente" || due.severity === "alta" ? "alta" : "media",
      origin: "seguros",
      actionTitle: `Validar vigencia y cobertura de poliza ${policy.number}`,
      dueDate: policy.due
    });
  });
  list(state.equipment).forEach((equipment) => {
    const due = dueSeverity(equipment.nextCheck, 15);
    if (equipment.status === "operativo" && due.severity === "baja") return;
    alerts.push({
      title: due.days !== null && due.days < 0 ? "Revision de equipo vencida" : "Equipo requiere control",
      detail: `${equipment.name} esta ${equipment.status}. Revision: ${equipment.nextCheck || "Por programar"} (${due.label}).`,
      code: "7.1",
      severity: equipment.status !== "operativo" || due.severity === "alta" ? "alta" : "media",
      origin: "equipos",
      actionTitle: `Programar inspeccion o mantenimiento de ${equipment.name}`,
      dueDate: equipment.nextCheck
    });
  });
  list(state.trainingNeeds).filter((item) => item.status !== "cerrada").forEach((training) => {
    const date = training.dueDate || training.programmedDate || training.date;
    const due = dueSeverity(date, 20);
    alerts.push({
      title: "Capacitacion pendiente",
      detail: `${training.topic} sigue ${training.status}. ${due.label}.`,
      code: training.code || "7.2",
      severity: training.priority === "alta" || training.priority === "critica" || due.severity === "alta" ? "alta" : "media",
      origin: "capacitacion",
      actionTitle: `Programar y evaluar capacitacion: ${training.topic}`,
      dueDate: date
    });
  });
  list(state.documents).filter((doc) => doc.status !== "aprobado").forEach((doc) => {
    const date = doc.reviewDate || doc.dueDate || doc.validUntil;
    const due = dueSeverity(date, 30);
    alerts.push({
      title: "Documento pendiente de aprobacion",
      detail: `${doc.title} esta ${doc.status}. Revision: ${date || "Por programar"} (${due.label}).`,
      code: doc.code || "7.5",
      severity: due.severity === "alta" ? "alta" : "media",
      origin: "documentos",
      actionTitle: `Revisar y aprobar documento: ${doc.title}`,
      dueDate: date
    });
  });
  return alerts;
}

function buildAgenda() {
  return [
    ...state.actions
      .filter((action) => action.status !== "cerrada")
      .map((action) => ({
        title: action.title,
        code: action.code,
        priority: action.type === "correctiva" ? "alta" : "media",
        date: action.dueDate || action.deadline || action.fechaLimite || action.due || "Por programar",
        origin: action.origin || "acciones"
      })),
    ...buildAlerts().map((alert) => ({
      title: alert.title,
      code: alert.code,
      priority: alert.severity,
      date: alert.dueDate || "Por programar",
      origin: alert.origin
    }))
  ];
}

function buildExecutiveReport() {
  const catalog = visibleFormCatalog();
  const operationalResponses = state.formResponses.filter((item) => !internalFormTables.has(item.table));
  const approvedForms = operationalResponses.filter((item) => item.status === "aprobado").length;
  const pendingForms = catalog.length - operationalResponses.length;
  const openActions = state.actions.filter((item) => item.status !== "cerrada").length;
  const compliance = Math.round((requirements.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0) / requirements.length) * 100);
  return {
    title: "Reporte ejecutivo SGSTA",
    code: "9.1",
    generatedAt: new Date().toISOString(),
    summary: { requirements: requirements.length, compliance, forms: catalog.length, approvedForms, pendingForms, openActions, evidence: state.evidence.length },
    content: [
      "REPORTE EJECUTIVO DEL SISTEMA DE GESTION",
      "",
      `Requisitos ISO 21101: ${requirements.length}`,
      `Cumplimiento estimado por evidencias: ${compliance}%`,
      `Formularios del catalogo: ${catalog.length}`,
      `Formularios aprobados: ${approvedForms}`,
      `Formularios pendientes: ${pendingForms}`,
      `Acciones abiertas: ${openActions}`,
      `Evidencias registradas/sugeridas: ${state.evidence.length}`,
      "",
      "Este reporte es un borrador generado por el agente y requiere revision/aprobacion humana."
    ].join("\n")
  };
}

function buildAuditReport() {
  const rows = requirements.map((requirement) => {
    const stats = requirementEvidenceStats(requirement.code);
    const score = Math.round(requirementCompletionScore(requirement.code) * 100);
    const actions = list(state.actions).filter((item) => item.code === requirement.code && item.status !== "cerrada");
    const gap = buildRequirementGap(requirement.code);
    return {
      code: requirement.code,
      title: requirement.title,
      expectedEvidence: requirement.evidence,
      score,
      status: score >= 100 ? "cumple" : score > 0 ? "en_proceso" : "pendiente",
      forms: {
        total: stats.formsTotal,
        approved: stats.formsApproved,
        draft: stats.formsDraft,
        pending: stats.formsPending
      },
      evidence: {
        registered: stats.registeredEvidence,
        suggested: stats.suggestedEvidence
      },
      openActions: actions.length,
      gap: {
        title: gap.title,
        detail: gap.detail,
        priority: gap.priority
      }
    };
  });
  const complete = rows.filter((row) => row.score >= 100).length;
  const partial = rows.filter((row) => row.score > 0 && row.score < 100).length;
  return {
    title: "Reporte de auditoria por requisito",
    code: "9.2",
    generatedAt: new Date().toISOString(),
    summary: {
      requirements: rows.length,
      complete,
      partial,
      pending: rows.length - complete - partial,
      openActions: rows.reduce((sum, row) => sum + row.openActions, 0)
    },
    rows
  };
}

function list(value) {
  return Array.isArray(value) ? value : [];
}

function riskLevel(risk) {
  return Number(risk.probability || 0) * Number(risk.impact || 0);
}

function statusScore(value) {
  return { cumple: 1, parcial: 0.5, en_proceso: 0.35, no_aplica: 1, pendiente: 0, no_cumple: 0 }[value || "pendiente"] || 0;
}

function formCoverageByRequirement() {
  const responses = list(state.formResponses);
  const groups = new Map();
  visibleFormCatalog().forEach((form) => {
    const requirement = getFormRequirement(form);
    const relation = findFormMatrixItem(form.table);
    const current = groups.get(requirement.code) || { code: requirement.code, total: 0, draft: 0, complete: 0, pending: 0, phva: relation?.phva || "planear" };
    const response = responses.find((item) => item.table === form.table || item.form === form.title);
    current.total += 1;
    if (!response) current.pending += 1;
    else if (response.status === "aprobado" || response.status === "completo") current.complete += 1;
    else current.draft += 1;
    groups.set(requirement.code, current);
  });
  return [...groups.values()];
}

function requirementEvidenceStats(code) {
  const coverage = formCoverageByRequirement().find((group) => group.code === code);
  const evidences = list(state.evidence).filter((item) => item.code === code);
  return {
    formsTotal: coverage?.total || 0,
    formsDraft: coverage?.draft || 0,
    formsApproved: coverage?.complete || 0,
    registeredEvidence: evidences.filter((item) => item.status !== "sugerida").length,
    suggestedEvidence: evidences.filter((item) => item.status === "sugerida").length
  };
}

function requirementCompletionScore(code) {
  const stats = requirementEvidenceStats(code);
  const formScore = stats.formsTotal ? Math.min(1, (stats.formsApproved + stats.formsDraft * 0.4) / stats.formsTotal) : 0;
  const evidenceScore = stats.registeredEvidence > 0 ? 1 : stats.suggestedEvidence > 0 ? 0.35 : 0;
  return Math.max(statusScore(state.compliance?.[code]), formScore, evidenceScore);
}

function formCoverageFindings() {
  return formCoverageByRequirement()
    .filter((group) => group.pending > 0)
    .slice(0, 6)
    .map((group) => {
      const gap = buildRequirementGap(group.code);
      return {
        title: gap.title,
        detail: gap.detail,
        priority: gap.priority,
        code: group.code,
        actionType: gap.type,
        origin: gap.origin,
        actionTitle: gap.title
      };
    });
}

function buildRequirementGap(code) {
  const req = requirements.find((item) => item.code === code);
  const group = formCoverageByRequirement().find((item) => item.code === code);
  const stats = requirementEvidenceStats(code);
  const openActions = list(state.actions).filter((action) => action.code === code && action.status !== "cerrada");
  const titleBase = req ? `${code} ${req.title}` : `requisito ${code}`;

  if (group?.pending > 0) {
    return {
      title: `Completar ${group.pending} formulario(s) pendientes de ${titleBase}`,
      detail: `El requisito tiene ${group.pending} formulario(s) sin borrador. Sin esos registros no hay evidencia suficiente.`,
      type: "tarea",
      origin: "matriz evidencias",
      priority: group.pending >= 3 ? "alta" : "media"
    };
  }
  if (group && group.draft > 0 && group.complete < group.total) {
    return {
      title: `Revisar y aprobar formularios de ${titleBase}`,
      detail: `Hay ${group.draft} formulario(s) en borrador/revision que todavia no cuentan como evidencia completa.`,
      type: "tarea",
      origin: "aprobacion",
      priority: "media"
    };
  }
  if (stats.registeredEvidence === 0 && stats.suggestedEvidence > 0) {
    return {
      title: `Validar evidencia sugerida de ${titleBase}`,
      detail: `El requisito solo tiene evidencia sugerida. Debe asociarse soporte real o aprobacion humana.`,
      type: "tarea",
      origin: "evidencia sugerida",
      priority: "media"
    };
  }
  if (openActions.length > 0) {
    return {
      title: `Cerrar ${openActions.length} accion(es) abiertas de ${titleBase}`,
      detail: `El requisito tiene evidencia, pero aun conserva acciones abiertas que deben cerrarse o verificar eficacia.`,
      type: "mejora",
      origin: "seguimiento",
      priority: "media"
    };
  }
  return {
    title: `Verificar eficacia y vigencia de evidencias de ${titleBase}`,
    detail: `El requisito no muestra brecha critica. Conviene revisar vigencia, eficacia y trazabilidad.`,
    type: "mejora",
    origin: "verificacion eficacia",
    priority: "baja"
  };
}

function buildAgentFindings() {
  const findings = [];
  const highRisks = list(state.risks).filter((risk) => riskLevel(risk) >= 12);
  if (highRisks.length) {
    findings.push({ title: "Riesgos altos sin cierre preventivo", detail: `${highRisks.length} riesgo(s) alto(s) requieren tratamiento y verificacion.`, priority: "alta", code: "6.1.2", actionType: "preventiva", origin: "riesgo", actionTitle: "Definir tratamiento para riesgos altos" });
  }

  const peoplePending = list(state.people).filter((person) => person.competence !== "cumple");
  if (peoplePending.length) {
    findings.push({ title: "Personal con competencia pendiente", detail: `${peoplePending.length} persona(s) requieren evaluacion, capacitacion o certificado.`, priority: "alta", code: "7.2", actionType: "preventiva", origin: "competencia", actionTitle: "Cerrar brechas de competencia del personal" });
  }

  const trainingOpen = list(state.trainingNeeds).filter((item) => item.status !== "cerrada");
  if (trainingOpen.length) {
    findings.push({ title: "Necesidades de capacitacion abiertas", detail: `${trainingOpen.length} necesidad(es) deben programarse, ejecutarse y evaluarse.`, priority: "media", code: "7.3", actionType: "tarea", origin: "capacitacion", actionTitle: "Programar y evaluar capacitaciones pendientes" });
  }

  const equipmentPending = list(state.equipment).filter((item) => item.status !== "operativo" || item.nextCheck === "Por programar");
  if (equipmentPending.length) {
    findings.push({ title: "Equipos sin control operacional completo", detail: `${equipmentPending.length} equipo(s) requieren inspeccion, mantenimiento o fecha de revision.`, priority: "alta", code: "8.1", actionType: "preventiva", origin: "equipo", actionTitle: "Completar inspeccion y mantenimiento de equipos" });
  }

  const policiesPending = list(state.policies).filter((item) => item.status !== "vigente");
  if (policiesPending.length) {
    findings.push({ title: "Polizas pendientes o por vencer", detail: `${policiesPending.length} poliza(s) deben validarse por actividad.`, priority: "alta", code: "6.1.3", actionType: "preventiva", origin: "seguro", actionTitle: "Validar polizas y coberturas por actividad" });
  }

  const participantPending = list(state.participantEvidence).filter((item) => item.status !== "recibida");
  if (participantPending.length) {
    findings.push({ title: "Evidencias externas de participantes pendientes", detail: `${participantPending.length} evidencia(s) o consentimiento(s) externos faltan por recibir.`, priority: "media", code: "7.4", actionType: "tarea", origin: "participantes", actionTitle: "Recibir evidencia externa de participantes" });
  }

  const drafts = list(state.documents).filter((doc) => doc.status !== "aprobado");
  if (drafts.length) {
    findings.push({ title: "Documentos sin aprobacion", detail: `${drafts.length} documento(s) siguen en borrador o revision.`, priority: "media", code: "7.5", actionType: "tarea", origin: "documento vencido", actionTitle: "Revisar y aprobar documentos controlados" });
  }

  findings.push(...formCoverageFindings());

  if (!list(state.managementReviews).length) {
    findings.push({ title: "Revision por la direccion no preparada", detail: "Falta consolidar entradas de 9.3: acciones, auditorias, incidentes, capacitaciones y oportunidades.", priority: "media", code: "9.3", actionType: "mejora", origin: "revision direccion", actionTitle: "Preparar revision por la direccion" });
  }

  return findings;
}

function createActionFromAgent(input) {
  const finding = input.finding || input;
  const title = finding.actionTitle || finding.title || "Accion sugerida por agente";
  const code = finding.code || "4.4";
  const existing = list(state.actions).find((action) => action.code === code && action.title === title && action.status !== "cerrada");
  if (existing) {
    existing.priority = finding.priority || existing.priority || "media";
    existing.cause = finding.detail || existing.cause || "";
    existing.updatedAt = new Date().toISOString();
    recordEvent({ actor: "agente", type: "agent_action_reused", title: "Accion existente reutilizada", detail: existing.title, code: existing.code });
    return existing;
  }
  const action = {
    id: `act-${Date.now()}`,
    title,
    code,
    status: "abierta",
    type: finding.actionType || "tarea",
    origin: finding.origin || "agente",
    priority: finding.priority || "media",
    cause: finding.detail || "",
    immediateCorrection: "",
    followUp: "",
    efficacyVerification: "",
    efficacyStatus: "pendiente",
    responsible: finding.responsible || "",
    dueDate: finding.dueDate || "",
    createdAt: new Date().toISOString(),
    createdBy: "agente"
  };
  state.actions.unshift(action);
  state.agentFindings = list(state.agentFindings).filter((item) => {
    return !(item.title === finding.title && item.code === finding.code && item.origin === finding.origin);
  });
  recordEvent({ actor: "agente", type: "agent_action_created", title: "Accion creada desde brecha", detail: action.title, code: action.code });
  return action;
}

function today() {
  return new Date().toLocaleDateString("es-CO");
}

function getFormRequirement(form) {
  const code = form?.requirement || "4.4";
  const baseCode = String(code).split(/[/-]/)[0];
  const requirement = requirements.find((item) => item.code === code) || requirements.find((item) => item.code === baseCode);
  return { code, title: requirement?.title || "Requisito del sistema de gestion" };
}

function findFormMatrixItem(table) {
  return formMatrix().find((item) => item.table === table);
}

function aiConfig() {
  const provider = process.env.AI_PROVIDER || (process.env.DEEPSEEK_API_KEY ? "deepseek" : "none");
  if (provider !== "deepseek") return { enabled: false, provider };
  return {
    enabled: Boolean(process.env.DEEPSEEK_API_KEY),
    provider,
    model: process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
    baseUrl: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com"
  };
}

function extractJsonObject(text) {
  const cleaned = String(text || "").trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1));
    throw new Error("La respuesta de IA no tuvo JSON valido.");
  }
}

function compactSystemContext() {
  const company = state.company || {};
  const registeredActivities = list(state.activities).slice(0, 8);
  return {
    organizationProfile: {
      legalName: company.legalName || state.orgName || state.organizations?.[0]?.name || "",
      nit: company.nit || "",
      country: company.country || "",
      region: company.region || "",
      city: company.city || "",
      phone: company.phone || "",
      operatingArea: company.operatingArea || "",
      activityDescription: company.activityDescription || "",
      localContext: company.localContext || "",
      scope: company.scope || "",
      stakeholders: company.stakeholders || ""
    },
    activities: registeredActivities,
    activityNames: registeredActivities.map((activity) => activity.name || activity.activity).filter(Boolean),
    locations: [
      company.country,
      company.region,
      company.city,
      company.operatingArea,
      ...registeredActivities.map((activity) => activity.place)
    ].filter(Boolean),
    risks: list(state.risks).slice(0, 5),
    people: list(state.people).slice(0, 5),
    equipment: list(state.equipment).slice(0, 5),
    policies: list(state.policies).slice(0, 5),
    actions: list(state.actions).filter((item) => item.status !== "cerrada").slice(0, 8),
    evidence: list(state.evidence).slice(0, 8)
  };
}

function buildAiFormPrompt(form, currentValues = {}) {
  const requirement = getFormRequirement(form);
  const relation = findFormMatrixItem(form.table);
  const baseline = generateFormDraftValues(form);
  return {
    form: {
      table: form.table,
      title: form.title,
      module: relation?.module || form.table,
      phva: relation?.phva || "",
      requirement,
      fields: list(form.fields).map((field) => ({
        name: field.name,
        type: field.type || "text",
        label: field.label || field.name
      }))
    },
    currentValues,
    baseline,
    systemContext: compactSystemContext()
  };
}

async function generateAiFormValues(form, currentValues = {}) {
  const config = aiConfig();
  if (!config.enabled) return null;
  const payload = buildAiFormPrompt(form, currentValues);
  const response = await fetch(`${config.baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: "system",
          content: [
            "Eres un agente experto en sistemas de gestion NTC ISO 21101 para turismo de aventura.",
            "Tu tarea es diligenciar borradores auditables de formularios, no aprobar cumplimiento.",
            "Antes de redactar, considera siempre el perfil empresarial: ubicacion, zona de operacion, actividades principales, entorno local, alcance y partes interesadas.",
            "Adapta los campos al tipo de actividad de turismo de aventura, al territorio donde opera la empresa y a los riesgos/recursos registrados.",
            "Usa solo datos del contexto. Si falta informacion, escribe un valor profesional con 'Por definir' o 'Pendiente de evidencia'.",
            "Devuelve unicamente JSON valido con esta forma: {\"values\": {\"campo\": \"valor\"}, \"notes\": \"resumen breve\"}."
          ].join(" ")
        },
        {
          role: "user",
          content: JSON.stringify(payload)
        }
      ],
      temperature: 0.2,
      max_tokens: 1800,
      stream: false
    })
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`DeepSeek respondio ${response.status}: ${detail.slice(0, 240)}`);
  }
  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || "";
  const parsed = extractJsonObject(content);
  const allowedFields = new Set(list(form.fields).map((field) => field.name));
  const values = {};
  Object.entries(parsed.values || {}).forEach(([key, value]) => {
    if (allowedFields.has(key)) values[key] = String(value ?? "");
  });
  return {
    values,
    notes: parsed.notes || "",
    provider: config.provider,
    model: config.model
  };
}

function suggestedValueForField(name, context) {
  const company = state.company || {};
  const org = company.legalName || state.orgName || state.organizations?.[0]?.name || "Organizacion por definir";
  const lower = String(name || "").toLowerCase();
  if (lower === "id") return "pendiente";
  if (lower.includes("organizacion") || lower.includes("empresa")) return org;
  if (lower.includes("usuario") || lower.includes("responsable") || lower.includes("representante")) return state.ownerName || "Responsable por definir";
  if (lower.includes("nit")) return company.nit || "NIT por definir";
  if (lower.includes("correo")) return "correo@organizacion.com";
  if (lower.includes("telefono")) return company.phone || "Telefono por definir";
  if (lower.includes("direccion") || lower.includes("ubicacion") || lower.includes("lugar")) return company.city || "Ubicacion por definir";
  if (lower.includes("actividad")) return context.activity.name || context.activity.activity || "Actividad por definir";
  if (lower.includes("persona") || lower.includes("nombre_completo")) return context.person.name || "Persona por definir";
  if (lower.includes("cargo") || lower.includes("rol")) return context.person.role || "Rol por definir";
  if (lower.includes("competencia")) return context.person.training || "Competencia por verificar";
  if (lower.includes("equipo")) return context.equipment.name || "Equipo por definir";
  if (lower.includes("poliza")) return context.policy.number || "Poliza por definir";
  if (lower.includes("aseguradora")) return context.policy.insurer || "Aseguradora por definir";
  if (lower.includes("cobertura")) return context.policy.coverage || "Cobertura por definir";
  if (lower.includes("riesgo") || lower.includes("peligro")) return context.risk.title || "Riesgo por evaluar";
  if (lower.includes("control")) return context.risk.control || "Control por definir";
  if (lower.includes("impacto")) return context.risk.impact || "Por evaluar";
  if (lower.includes("probabilidad")) return context.risk.probability || "Por evaluar";
  if (lower.includes("estado")) return "borrador";
  if (lower.includes("fecha")) return today();
  if (lower.includes("archivo") || lower.includes("evidencia") || lower.includes("adjunto")) return "Evidencia pendiente de asociar";
  if (lower.includes("objetivo")) return "Objetivo por definir y aprobar";
  if (lower.includes("descripcion") || lower.includes("observaciones") || lower.includes("contenido")) return `Borrador sugerido por el agente para ${context.form.title}. Requiere revision humana.`;
  if (lower.includes("requisito") || lower.includes("numeral")) return context.requirement.code;
  if (lower.includes("modulo")) return context.relation?.module || "sistema";
  return "Por definir";
}

function generateFormDraftValues(form) {
  const context = {
    form,
    relation: findFormMatrixItem(form.table),
    requirement: getFormRequirement(form),
    activity: list(state.activities)[0] || {},
    person: list(state.people)[0] || {},
    equipment: list(state.equipment)[0] || {},
    policy: list(state.policies)[0] || {},
    risk: list(state.risks)[0] || {}
  };
  const values = {};
  list(form.fields).forEach((field) => {
    values[field.name] = suggestedValueForField(field.name, context);
  });
  return values;
}

function mergeAgentDraftValues(form, currentValues = {}) {
  const suggestedValues = generateFormDraftValues(form);
  const merged = { ...(currentValues || {}) };
  list(form.fields).forEach((field) => {
    if (!String(merged[field.name] || "").trim()) merged[field.name] = suggestedValues[field.name];
  });
  return merged;
}

function mergeAiDraftValues(form, currentValues = {}, aiValues = {}) {
  const merged = mergeAgentDraftValues(form, currentValues);
  list(form.fields).forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(aiValues, field.name) && String(aiValues[field.name] || "").trim()) {
      merged[field.name] = aiValues[field.name];
    }
  });
  return merged;
}

function upsertFormDraft(form, aiDraft = null) {
  const relation = findFormMatrixItem(form.table);
  const requirement = getFormRequirement(form);
  const existing = list(state.formResponses).find((item) => item.table === form.table);
  if (existing) {
    existing.status = existing.status === "aprobado" ? "revision" : "borrador";
    existing.values = aiDraft ? mergeAiDraftValues(form, existing.values, aiDraft.values) : mergeAgentDraftValues(form, existing.values);
    existing.source = aiDraft ? "agente_ia_deepseek" : existing.source || "agente_backend";
    existing.aiNotes = aiDraft?.notes || existing.aiNotes || "";
    existing.aiModel = aiDraft?.model || existing.aiModel || "";
    existing.requiresApproval = true;
    existing.updatedAt = today();
    return existing;
  }

  const response = {
    id: `fr-${Date.now()}-${form.table}`,
    table: form.table,
    form: form.title,
    module: relation?.module || form.table,
    status: "borrador",
    code: requirement.code,
    fields: list(form.fields).map((field) => field.name),
    values: aiDraft ? mergeAiDraftValues(form, {}, aiDraft.values) : generateFormDraftValues(form),
    source: aiDraft ? "agente_ia_deepseek" : "agente_backend",
    aiNotes: aiDraft?.notes || "",
    aiModel: aiDraft?.model || "",
    requiresApproval: true,
    approvedBy: "",
    approvedAt: "",
    updatedAt: today()
  };
  state.formResponses.unshift(response);
  return response;
}

function formTargetsFromInput(input) {
  const catalog = visibleFormCatalog();
  const tables = [];
  if (input.table) tables.push(input.table);
  if (input.requirement) {
    catalog
      .filter((form) => getFormRequirement(form).code === input.requirement)
      .forEach((form) => tables.push(form.table));
  }
  return [...new Set(tables)]
    .map((table) => catalog.find((form) => form.table === table))
    .filter(Boolean);
}

function draftForms(input) {
  const responses = formTargetsFromInput(input).map((form) => upsertFormDraft(form));

  if (responses.length) {
    recordEvent({
      actor: "agente",
      type: "form_draft_created",
      title: "Borrador(es) de formulario generados",
      detail: `${responses.length} formulario(s) quedaron en borrador pendiente de aprobacion humana.`,
      code: input.requirement || responses[0].code
    });
  }
  return responses;
}

async function draftFormsWithAi(input) {
  const forms = formTargetsFromInput(input);
  const ai = {
    enabled: aiConfig().enabled,
    used: false,
    provider: aiConfig().provider,
    errors: []
  };
  const responses = [];
  for (const form of forms) {
    let aiDraft = null;
    const existing = list(state.formResponses).find((item) => item.table === form.table);
    try {
      aiDraft = await generateAiFormValues(form, existing?.values || {});
      if (aiDraft) ai.used = true;
    } catch (error) {
      ai.errors.push({ table: form.table, error: serializeError(error) });
    }
    responses.push(upsertFormDraft(form, aiDraft));
  }
  if (responses.length) {
    recordEvent({
      actor: ai.used ? "agente_ia" : "agente",
      type: ai.used ? "ai_form_draft_created" : "form_draft_created",
      title: ai.used ? "Borrador(es) de formulario generados con IA" : "Borrador(es) de formulario generados",
      detail: `${responses.length} formulario(s) quedaron en borrador pendiente de aprobacion humana.`,
      code: input.requirement || responses[0].code
    });
  }
  return { responses, ai };
}

function upsertEvidenceFromApprovedForm(response) {
  state.evidence = list(state.evidence);
  const linkedDocument = response.table;
  const existing = state.evidence.find((item) => item.linkedDocument === linkedDocument && item.source === "formulario aprobado");
  const evidence = {
    id: existing?.id || `ev-${Date.now()}-${response.table}`,
    title: `Formulario aprobado: ${response.form}`,
    code: response.code,
    status: "registrada",
    source: "formulario aprobado",
    linkedDocument,
    approvedBy: response.approvedBy,
    approvedAt: response.approvedAt,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  if (existing) Object.assign(existing, evidence);
  else state.evidence.unshift(evidence);
  return evidence;
}

function upsertSuggestedEvidenceForRequirement(code) {
  state.evidence = list(state.evidence);
  const req = requirements.find((item) => item.code === code);
  const existing = state.evidence.find((item) => item.code === code && item.source === "paquete cierre agente");
  const evidence = {
    id: existing?.id || `ev-${Date.now()}-${code}`,
    title: req?.evidence || `Evidencia requerida ${code}`,
    code,
    status: "sugerida",
    source: "paquete cierre agente",
    linkedDocument: "",
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  if (existing) Object.assign(existing, evidence);
  else state.evidence.unshift(evidence);
  return evidence;
}

function rememberClosurePackage(code, { responses, action, evidence, summary }) {
  state.closurePackages = list(state.closurePackages);
  const req = requirements.find((item) => item.code === code);
  const closurePackage = {
    id: `pkg-${Date.now()}-${code}`,
    code,
    requirementTitle: req?.title || code,
    summary,
    forms: list(responses).map((response) => response.form || response.title || response.table).filter(Boolean),
    formsCount: list(responses).length,
    actionTitle: action?.title || "",
    actionStatus: action?.status || "abierta",
    evidenceTitle: evidence?.title || "",
    createdAt: new Date().toISOString()
  };
  state.closurePackages.unshift(closurePackage);
  state.closurePackages = state.closurePackages.slice(0, 24);
  return closurePackage;
}

function closeRequirementGap(code) {
  const beforeForms = list(state.formResponses).length;
  const responses = draftForms({ requirement: code });
  const gap = buildRequirementGap(code);
  const action = createActionFromAgent({
    finding: {
      title: gap.title,
      actionTitle: gap.title,
      code,
      actionType: gap.type,
      origin: gap.origin,
      priority: gap.priority,
      detail: gap.detail
    }
  });
  const stats = requirementEvidenceStats(code);
  const evidence = stats.registeredEvidence === 0 && stats.suggestedEvidence === 0
    ? upsertSuggestedEvidenceForRequirement(code)
    : null;
  const createdForms = Math.max(0, list(state.formResponses).length - beforeForms);
  const summary = `${createdForms} formulario(s) generados/actualizados, 1 accion creada${evidence ? ", 1 evidencia sugerida" : ""}.`;
  recordEvent({
    actor: "agente",
    type: "requirement_gap_package",
    title: "Paquete de cierre de brecha preparado",
    detail: `Requisito ${code}: ${summary}`,
    code
  });
  const closurePackage = rememberClosurePackage(code, { responses, action, evidence, summary });
  return { responses, action, evidence, summary, closurePackage };
}

function lowestRequirementCodes(limit = 5) {
  return requirements
    .map((item) => ({ code: item.code, score: requirementCompletionScore(item.code) }))
    .filter((item) => item.score < 1)
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map((item) => item.code);
}

function closeCriticalGaps(limit = 5) {
  const codes = lowestRequirementCodes(limit);
  const packages = codes.map((code) => ({ code, ...closeRequirementGap(code) }));
  const summary = `${packages.length} requisito(s) priorizados, ${packages.reduce((sum, item) => sum + item.responses.length, 0)} formulario(s) generados/actualizados, ${packages.length} accion(es) preparadas.`;
  recordEvent({
    actor: "agente",
    type: "critical_gap_plan",
    title: "Plan de cierre de brechas criticas preparado",
    detail: summary,
    code: "4.4"
  });
  return { codes, packages, summary };
}

function canApprove(role) {
  return ["direccion", "admin"].includes(role || "direccion");
}

function roleLabel(role) {
  return {
    direccion: "Direccion",
    responsable_sgsta: "Responsable SGSTA",
    consultor: "Consultor",
    guia: "Guia",
    admin: "Admin"
  }[role || "direccion"] || role;
}

function updateFormWorkflow(input) {
  const response = list(state.formResponses).find((item) => item.table === input.table);
  if (!response) {
    return { status: 404, payload: { error: "form_response_not_found" } };
  }

  const role = input.role || state.currentUserRole || "direccion";
  if (input.status === "aprobado" && !canApprove(role)) {
    recordEvent({
      actor: "sistema",
      type: "form_approval_blocked",
      title: "Aprobacion bloqueada",
      detail: `${response.form} no fue aprobado porque el rol ${role} no tiene permiso.`,
      code: response.code
    });
    return { status: 403, payload: { error: "approval_forbidden", message: "Solo Direccion o Admin pueden aprobar formularios." } };
  }

  if (input.status === "aprobado") {
    response.status = "aprobado";
    response.requiresApproval = false;
    response.approvedBy = `${input.actor || state.ownerName || "Responsable"} (${roleLabel(role)})`;
    response.approvedAt = today();
    response.updatedAt = today();
    state.compliance = { ...(state.compliance || {}), [response.code]: "en_proceso" };
    const evidence = upsertEvidenceFromApprovedForm(response);
    recordEvent({
      actor: "humano",
      type: "form_approved",
      title: "Formulario aprobado",
      detail: `${response.form} fue aprobado por ${response.approvedBy}.`,
      code: response.code
    });
    recordEvent({
      actor: "sistema",
      type: "evidence_from_form",
      title: "Evidencia creada desde formulario aprobado",
      detail: evidence.title,
      code: evidence.code
    });
    return { status: 200, payload: { response, evidence, state } };
  }

  response.status = response.status === "revision" ? "borrador" : "revision";
  response.requiresApproval = true;
  response.updatedAt = today();
  recordEvent({
    actor: input.actorType || "agente",
    type: "form_review_status",
    title: "Formulario enviado a revision",
    detail: `${response.form} cambio a estado ${response.status}.`,
    code: response.code
  });
  return { status: 200, payload: { response, state } };
}

async function handle(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === "OPTIONS") return send(res, 200, {});
  if (req.method === "GET" && url.pathname === "/health") {
    return send(res, 200, {
      ok: true,
      service: "sgsta-agent-api",
      storage: storage ? storage.name : "starting",
      ready: storageReady,
      storageError: serializeError(storageError)
    });
  }
  if (req.method === "GET" && url.pathname === "/api/organizations") return send(res, 200, state.organizations);
  if (req.method === "GET" && url.pathname === "/api/requirements") return send(res, 200, requirements);
  if (req.method === "GET" && url.pathname === "/api/forms/catalog") return send(res, 200, visibleFormCatalog());
  if (req.method === "GET" && url.pathname === "/api/forms/matrix") return send(res, 200, formMatrix().filter((form) => !internalFormTables.has(form.table)));
  if (req.method === "GET" && url.pathname === "/api/forms/responses") return send(res, 200, state.formResponses);
  if (req.method === "GET" && url.pathname === "/api/actions") return send(res, 200, state.actions);
  if (req.method === "GET" && url.pathname === "/api/evidence") return send(res, 200, state.evidence);
  if (req.method === "GET" && url.pathname === "/api/alerts") return send(res, 200, buildAlerts());
  if (req.method === "GET" && url.pathname === "/api/agenda") return send(res, 200, buildAgenda());
  if (req.method === "GET" && url.pathname === "/api/reports/executive") return send(res, 200, buildExecutiveReport());
  if (req.method === "GET" && url.pathname === "/api/reports/audit") return send(res, 200, buildAuditReport());
  if (req.method === "GET" && url.pathname === "/api/audit-events") return send(res, 200, state.auditEvents);
  if (req.method === "GET" && url.pathname === "/api/state") return send(res, 200, state);
  if (req.method === "GET" && url.pathname === "/api/agent/ai-status") {
    const config = aiConfig();
    return send(res, 200, {
      provider: config.provider,
      enabled: config.enabled,
      model: config.model || null,
      baseUrl: config.baseUrl || null
    });
  }

  if (req.method === "POST" && url.pathname === "/api/agent/monitor") {
    const body = await parseBody(req);
    if (Object.keys(body).length) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state || body));
    }
    state.planUsage = { ...(state.planUsage || {}), agentRuns: Number(state.planUsage?.agentRuns || 0) + 1 };
    state.agentFindings = buildAgentFindings();
    recordEvent({ actor: "agente", type: "agent_monitor", title: "Monitor del agente ejecutado", detail: `Se detectaron ${state.agentFindings.length} brecha(s).`, code: "4.4" });
    return send(res, 200, { findings: state.agentFindings, state });
  }

  if (req.method === "POST" && url.pathname === "/api/agent/actions") {
    const body = await parseBody(req);
    if (body.state) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state));
    }
    const action = createActionFromAgent(body);
    return send(res, 201, { action, state });
  }

  if (req.method === "POST" && url.pathname === "/api/agent/forms/draft") {
    const body = await parseBody(req);
    if (body.state) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state));
    }
    const result = await draftFormsWithAi(body);
    return send(res, 201, { ...result, state });
  }

  if (req.method === "POST" && url.pathname === "/api/agent/requirements/close-gap") {
    const body = await parseBody(req);
    if (body.state) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state));
    }
    const result = closeRequirementGap(body.code || body.requirement || "4.4");
    return send(res, 201, { ...result, state });
  }

  if (req.method === "POST" && url.pathname === "/api/agent/requirements/close-critical") {
    const body = await parseBody(req);
    if (body.state) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state));
    }
    const result = closeCriticalGaps(Number(body.limit || 5));
    return send(res, 201, { ...result, state });
  }

  if (req.method === "POST" && url.pathname === "/api/forms/workflow") {
    const body = await parseBody(req);
    if (body.state) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, mergeSavedState(body.state));
    }
    const result = updateFormWorkflow(body);
    return send(res, result.status, result.payload);
  }

  if ((req.method === "POST" || req.method === "PUT") && url.pathname === "/api/state") {
    const body = await parseBody(req);
    const nextState = body.state || body;
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, mergeSavedState(nextState));
    recordEvent({ actor: "sistema", type: "state_synced", title: "Estado sincronizado", detail: "La interfaz guardo el estado en backend local" });
    return send(res, 200, state);
  }

  if (req.method === "POST" && url.pathname === "/api/state/reset") {
    const resetState = clone(defaultState);
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, resetState);
    recordEvent({ actor: "sistema", type: "state_reset", title: "Estado reiniciado", detail: "Se restauro el estado inicial del MVP" });
    return send(res, 200, state);
  }

  if (req.method === "POST" && url.pathname === "/api/forms/responses") {
    const body = await parseBody(req);
    const response = {
      id: `fr-${Date.now()}`,
      status: "borrador",
      source: "api",
      createdAt: new Date().toISOString(),
      ...body
    };
    state.formResponses.unshift(response);
    recordEvent({ actor: "agente", type: "form_response_created", title: "Respuesta de formulario creada", detail: response.form || response.table || response.id, code: response.code });
    return send(res, 201, response);
  }

  if (req.method === "POST" && url.pathname === "/api/actions") {
    const body = await parseBody(req);
    const action = {
      id: `act-${Date.now()}`,
      status: "abierta",
      type: "tarea",
      origin: "api",
      priority: "media",
      cause: "",
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      responsible: "",
      dueDate: "",
      createdAt: new Date().toISOString(),
      ...body
    };
    state.actions.unshift(action);
    recordEvent({ actor: "agente", type: "action_created", title: "Accion creada", detail: action.title, code: action.code });
    return send(res, 201, action);
  }

  if (req.method === "POST" && url.pathname === "/api/evidence") {
    const body = await parseBody(req);
    const evidence = {
      id: `ev-${Date.now()}`,
      status: "sugerida",
      source: "api",
      createdAt: new Date().toISOString(),
      ...body
    };
    state.evidence.unshift(evidence);
    recordEvent({ actor: "agente", type: "evidence_created", title: "Evidencia registrada", detail: evidence.title, code: evidence.code });
    return send(res, 201, evidence);
  }

  if (req.method === "GET" && !url.pathname.startsWith("/api/") && serveStaticApp(url, res)) return;

  return notFound(res);
}

function mergeSavedState(savedState) {
  return normalizeState(savedState || {});
}

const server = http.createServer((req, res) => {
  handle(req, res).catch((error) => send(res, 400, { error: "bad_request", detail: error.message }));
});

async function start() {
  storage = createStorage({ defaultState, mergeState: normalizeState, dataFile: DATA_FILE });
  server.listen(PORT, HOST, () => {
    console.log(`SGSTA Agent API listening on http://${HOST}:${PORT} using ${storage.name} storage`);
  });
  try {
    state = await storage.load();
    storageReady = true;
    storageError = null;
    console.log(`SGSTA Agent storage ready: ${storage.name}`);
  } catch (error) {
    storageReady = false;
    storageError = error;
    console.error("SGSTA Agent storage failed:", serializeError(error));
  }
}

start().catch((error) => {
  console.error("No se pudo iniciar SGSTA Agent API:", error.message);
  process.exit(1);
});

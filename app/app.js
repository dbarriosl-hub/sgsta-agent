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

const formRequirementMap = {
  organizaciones: "4.1",
  usuarios: "5.3",
  capitulos_iso: "4.4",
  compromiso_liderazgo: "5.1",
  contexto_interno_externo: "4.1",
  contexto_actividades: "4.3",
  impacto_riesgo: "6.1.2",
  probabilidad_riesgo: "6.1.2",
  mapa_riesgos: "6.1.2",
  plantillas_documentos: "7.5",
  procedimientos_sgs: "4.4",
  politica_seguridad: "5.2",
  roles_responsabilidades: "5.3",
  normograma: "6.1.3",
  politica_sgs: "5.2",
  objetivos_sgs: "6.2",
  plan_objetivos_sgs: "6.2",
  cargos: "5.3",
  competencias_minimas: "7.2",
  personas: "7.2",
  compromiso_personal: "7.3",
  plan_comunicaciones: "7.4",
  registro_comunicaciones_seguridad: "7.4",
  documentos_controlados: "7.5",
  documentacion_minima: "7.5",
  politica_datos_personales: "7.4",
  bitacora_actividades: "8.1",
  procedimientos_servicio: "8.1",
  equipos: "7.1",
  plan_emergencia: "8.2",
  simulacros: "8.2",
  simulacro_evidencias: "8.2",
  registro_participantes_evidencia: "7.4",
  registro_incidentes: "8.3",
  acciones_sugeridas: "10.2",
  seguimiento_medicion: "9.1",
  programa_auditorias: "9.2",
  plan_auditoria: "9.2",
  informe_auditoria_detalle: "9.2",
  referencia_norma_iso21101: "4.4",
  acciones_correctivas: "10.1",
  informe_auditoria: "9.2",
  seguimiento_acciones_correctivas: "10.1",
  revision_direccion: "9.3",
  procedimientos_obligatorios: "4.4",
  procedimientos_implementados: "8.1"
};

const internalFormTables = new Set(["organizaciones"]);

const phvaStages = [
  { id: "planear", label: "Planear", codes: ["4", "5", "6"], focus: "Contexto, liderazgo, riesgos, requisitos legales, objetivos y necesidades de capacitacion." },
  { id: "hacer", label: "Hacer", codes: ["7", "8"], focus: "Recursos, competencia, capacitacion, documentos, operacion, emergencias, incidentes y participantes." },
  { id: "verificar", label: "Verificar", codes: ["9"], focus: "Seguimiento, indicadores, auditorias, evaluacion de competencias y revision por la direccion." },
  { id: "actuar", label: "Actuar", codes: ["10"], focus: "No conformidades, acciones correctivas, preventivas, mejora y verificacion de eficacia." }
];

const managementSystems = {
  iso21101: {
    name: "ISO 21101 Turismo aventura",
    shortName: "Turismo de aventura",
    code: "NTC-ISO-21101:2020",
    status: "activo",
    requirements: "24 requisitos operativos",
    forms: 46,
    focus: "Seguridad en actividades de turismo de aventura."
  },
  iso9001: {
    name: "ISO 9001 Calidad",
    shortName: "Calidad",
    code: "ISO-9001",
    status: "plantilla",
    requirements: "Por parametrizar",
    forms: 0,
    focus: "Calidad, procesos, clientes y mejora."
  },
  sst: {
    name: "SG-SST",
    shortName: "Seguridad y salud",
    code: "SG-SST",
    status: "plantilla",
    requirements: "Por parametrizar",
    forms: 0,
    focus: "Peligros laborales, controles, capacitacion e incidentes."
  },
  sostenibilidad: {
    name: "Sostenibilidad turistica",
    shortName: "Sostenibilidad",
    code: "SOST-TUR",
    status: "plantilla",
    requirements: "Por parametrizar",
    forms: 0,
    focus: "Impactos ambientales, socioculturales y economicos."
  }
};

const subscriptionPlans = {
  basico: {
    name: "Basico",
    price: "1 sistema",
    limits: { systems: 1, organizations: 1, forms: 12, agentRuns: 10, norms: 1 },
    text: "Diagnostico, documentos basicos, acciones y agente limitado.",
    fit: "Empresa pequena que inicia ISO 21101."
  },
  profesional: {
    name: "Profesional",
    price: "Gestion completa",
    limits: { systems: 1, organizations: 1, forms: 60, agentRuns: 80, norms: 1 },
    text: "Riesgos, personal, capacitacion, equipos, seguros, incidentes, auditorias y PHVA.",
    fit: "Operador turistico con varias actividades."
  },
  consultor: {
    name: "Consultor",
    price: "Multi-cliente",
    limits: { systems: 20, organizations: 20, forms: 800, agentRuns: 500, norms: 3 },
    text: "Gestion de varias organizaciones, plantillas, reportes y seguimiento de cartera.",
    fit: "Consultores que implementan sistemas de gestion."
  },
  empresarial: {
    name: "Empresarial",
    price: "Multi-norma",
    limits: { systems: 999, organizations: 999, forms: 5000, agentRuns: 5000, norms: 20 },
    text: "Multiples sistemas de gestion, permisos avanzados, integraciones y auditoria de cambios.",
    fit: "Organizaciones con calidad, turismo, SST o sostenibilidad."
  }
};

const implementationSteps = [
  { id: "alcance", view: "empresa", stage: "Planear", title: "Definir empresa, alcance y partes interesadas", code: "4.1-4.3", outcome: "Que todos sepan que actividades cubre el sistema y donde opera.", check: (s) => Boolean(s.company.scope && s.company.stakeholders), action: "Completar alcance y partes interesadas" },
  { id: "actividades", view: "actividades", stage: "Planear", title: "Registrar actividades de turismo", code: "8.1", outcome: "Separar rafting, senderismo, cuatrimotos u otras actividades reales.", check: (s) => s.activities.length > 0, action: "Registrar actividades y responsables" },
  { id: "riesgos", view: "riesgos", stage: "Planear", title: "Construir mapa de riesgos", code: "6.1.2", outcome: "Saber que puede salir mal en cada actividad y que control aplica.", check: (s) => s.risks.length > 0, action: "Construir o completar mapa de riesgos" },
  { id: "seguros", view: "seguros", stage: "Planear", title: "Validar seguros por actividad", code: "6.1.3", outcome: "Evitar operar una actividad sin cobertura vigente.", check: (s) => s.policies.some((p) => p.status === "vigente"), action: "Validar polizas y cobertura" },
  { id: "personal", view: "personal", stage: "Hacer", title: "Verificar personal y competencias", code: "5.3/7.2", outcome: "Confirmar que cada actividad tiene guia/persona competente.", check: (s) => s.people.length > 0 && s.people.every((p) => p.competence === "cumple"), action: "Evaluar competencias del personal" },
  { id: "capacitacion", view: "capacitacion", stage: "Hacer", title: "Programar y cerrar capacitaciones", code: "7.2-7.3", outcome: "Cerrar brechas de entrenamiento antes de operar.", check: (s) => s.trainingNeeds.length > 0 && s.trainingNeeds.every((t) => t.status === "cerrada"), action: "Programar capacitaciones pendientes" },
  { id: "equipos", view: "equipos", stage: "Hacer", title: "Controlar equipos, inspecciones y mantenimiento", code: "7.1/8.1", outcome: "Tener equipos listos, revisados y con soporte.", check: (s) => s.equipment.length > 0 && s.equipment.every((e) => e.status === "operativo"), action: "Completar inspeccion de equipos" },
  { id: "documentos", view: "documentos", stage: "Hacer", title: "Aprobar documentos controlados", code: "7.5", outcome: "Convertir borradores en documentos usados por la empresa.", check: (s) => s.documents.length > 0 && s.documents.every((d) => d.status === "aprobado"), action: "Revisar y aprobar documentos" },
  { id: "participantes", view: "participantes", stage: "Hacer", title: "Recibir evidencias externas de participantes", code: "7.4.3", outcome: "Comprobar informacion y consentimiento sin guardar datos sensibles.", check: (s) => s.activities.length > 0 && s.activities.every((activity) => participantActivityInformationIsComplete(activity.name)), action: "Recibir consentimientos/evidencias externas" },
  { id: "auditoria", view: "auditorias", stage: "Verificar", title: "Preparar auditoria interna", code: "9.2", outcome: "Revisar si lo planeado se esta cumpliendo.", check: (s) => s.audits.length > 0, action: "Programar auditoria interna" },
  { id: "revision", view: "revision", stage: "Verificar", title: "Preparar revision por la direccion", code: "9.3", outcome: "Que la direccion tome decisiones con datos reales.", check: (s) => s.managementReviews.length > 0, action: "Preparar revision por la direccion" },
  { id: "mejora", view: "acciones", stage: "Actuar", title: "Gestionar acciones correctivas, preventivas y mejora", code: "10.1-10.2", outcome: "Cerrar problemas con evidencia y verificar que funciono.", check: (s) => s.actions.length > 0, action: "Crear y dar seguimiento a acciones" }
];

const stateKey = "sgsta-agent-demo-v3";
const apiBaseUrl = window.location.protocol.startsWith("http") ? window.location.origin : "http://localhost:8080";
let backendOnline = false;
let backendSyncTimer = null;

const defaultState = {
  orgName: "Mi empresa de turismo",
  ownerName: "Responsable SGSTA",
  currentUserRole: "direccion",
  activeSystem: "iso21101",
  currentPlan: "profesional",
  planUsage: { agentRuns: 0, systems: 1, organizations: 1, norms: 1 },
  company: {
    legalName: "Mi empresa de turismo",
    nit: "",
    country: "Colombia",
    region: "",
    city: "",
    phone: "",
    operatingArea: "",
    activityDescription: "Caminatas ecologicas y actividades guiadas de turismo de aventura.",
    localContext: "",
    scope: "Actividades de turismo de aventura ofrecidas por la organizacion.",
    stakeholders: "Clientes, guias, proveedores, autoridades, comunidad local."
  },
  compliance: {},
  activities: [
    { name: "Senderismo", place: "Sendero local", leader: "Guia principal", status: "activa", conditions: "Recorrido terrestre con cambios de clima y terreno.", participantRequirements: "Condicion fisica basica, calzado adecuado y aceptacion de instrucciones de seguridad." },
    { name: "Rafting", place: "Rio por definir", leader: "Guia rafting", status: "activa", conditions: "Actividad acuatica sujeta a caudal, clima y nivel tecnico.", participantRequirements: "Saber nadar o aceptar chaleco, edad minima definida y consentimiento informado." },
    { name: "Paseo en cuatrimotos", place: "Ruta por definir", leader: "Guia cuatrimotos", status: "activa", conditions: "Ruta motorizada con control de velocidad, casco y briefing obligatorio.", participantRequirements: "Edad/licencia cuando aplique, casco, briefing y aceptacion de normas de conduccion." }
  ],
  people: [
    { name: "Guia principal", role: "Guia senderismo", activity: "Senderismo", competence: "pendiente", training: "Primeros auxilios y manejo de grupos pendiente" }
  ],
  trainingNeeds: [
    { topic: "Primeros auxilios y respuesta a emergencias", activity: "Senderismo", origin: "competencia", priority: "alta", status: "pendiente", code: "7.2" }
  ],
  equipment: [
    { name: "Botiquin principal", type: "Emergencia", activity: "Senderismo", status: "operativo", nextCheck: "Por programar" },
    { name: "Radios de comunicacion", type: "Comunicacion", activity: "Senderismo", status: "revision", nextCheck: "Por programar" },
    { name: "Chalecos salvavidas", type: "Seguridad acuatica", activity: "Rafting", status: "revision", nextCheck: "Por programar" },
    { name: "Cascos para cuatrimoto", type: "Proteccion personal", activity: "Paseo en cuatrimotos", status: "revision", nextCheck: "Por programar" }
  ],
  policies: [
    { number: "POL-001", insurer: "Aseguradora ejemplo", coverage: "Responsabilidad civil para senderismo", activity: "Senderismo", due: "Por definir", status: "pendiente" }
  ],
  participantEvidence: [
    { activity: "Senderismo", kind: "Formulario externo", consent: "pendiente", status: "pendiente" }
  ],
  risks: [
    { title: "Caida durante recorrido", activity: "Senderismo", probability: 3, impact: 4, control: "Charla de seguridad y verificacion de calzado" },
    { title: "Caida al agua o golpe con roca", activity: "Rafting", probability: 3, impact: 5, control: "Chaleco, casco, guia especializado y verificacion de caudal" },
    { title: "Colision o volcamiento", activity: "Paseo en cuatrimotos", probability: 3, impact: 5, control: "Casco, induccion, velocidad controlada y ruta definida" }
  ],
  documents: [
    { title: "Politica de seguridad", code: "5.2", status: "borrador", content: "" },
    { title: "Procedimiento operacional de caminatas", code: "8.1", status: "borrador", content: "" }
  ],
  selectedDocumentIndex: 0,
  incidents: [],
  audits: [],
  managementReviews: [],
  executiveReport: null,
  agentFindings: [],
  closurePackages: [],
  selectedActivityName: "Senderismo",
  actionFilterActivity: "",
  selectedFormActivity: "Senderismo",
  selectedFormTable: "contexto_interno_externo",
  formFilters: { search: "", phva: "todos", status: "todos" },
  formResponses: [
    { form: "Evaluacion de competencia", module: "personal", status: "borrador", code: "7.2" },
    { form: "Inspeccion de equipos", module: "equipos", status: "borrador", code: "7.1" },
    { form: "Accion de mejora", module: "mejora", status: "borrador", code: "10.2" }
  ],
  actions: [
    { title: "Definir alcance del SGSTA", code: "4.3", status: "abierta", type: "tarea", origin: "agente" },
    { title: "Crear politica de seguridad", code: "5.2", status: "abierta", type: "tarea", origin: "agente" },
    { title: "Levantar mapa de riesgos por actividad", code: "6.1.2", status: "abierta", type: "preventiva", origin: "riesgo" }
  ],
  pilotObservations: [],
  evidence: [],
  auditLog: []
};

let state = loadState();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const stored = localStorage.getItem(stateKey);
  if (!stored) return clone(defaultState);
  try {
    return mergeState(clone(defaultState), JSON.parse(stored));
  } catch {
    return clone(defaultState);
  }
}

function persistLocalState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function mergeState(base, current) {
  return {
    ...base,
    ...current,
    company: { ...base.company, ...(current.company || {}) },
    compliance: current.compliance || base.compliance,
    activities: current.activities || base.activities,
    people: current.people || base.people,
    trainingNeeds: current.trainingNeeds || base.trainingNeeds,
    equipment: current.equipment || base.equipment,
    policies: current.policies || base.policies,
    participantEvidence: current.participantEvidence || base.participantEvidence,
    risks: current.risks || base.risks,
    documents: current.documents || base.documents,
    selectedDocumentIndex: current.selectedDocumentIndex ?? base.selectedDocumentIndex,
    incidents: current.incidents || base.incidents,
    audits: current.audits || base.audits,
    managementReviews: current.managementReviews || base.managementReviews,
    executiveReport: current.executiveReport || base.executiveReport,
    agentFindings: current.agentFindings || base.agentFindings,
    closurePackages: current.closurePackages || base.closurePackages,
    actionFilterActivity: current.actionFilterActivity || base.actionFilterActivity,
    selectedFormActivity: current.selectedFormActivity || current.selectedActivityName || base.selectedFormActivity,
    selectedFormTable: current.selectedFormTable || base.selectedFormTable,
    formFilters: { ...base.formFilters, ...(current.formFilters || {}) },
    formResponses: current.formResponses || base.formResponses,
    actions: current.actions || base.actions,
    pilotObservations: current.pilotObservations || base.pilotObservations,
    evidence: current.evidence || base.evidence,
    auditLog: current.auditLog || base.auditLog,
    planUsage: { ...base.planUsage, ...(current.planUsage || {}) }
  };
}

function saveState() {
  persistLocalState();
  queueBackendSync();
}

function apiStateToAppState(apiState) {
  const organization = apiState.organizations?.[0];
  const normalized = {
    ...apiState,
    auditLog: apiState.auditLog || apiState.auditEvents || []
  };
  if (organization) {
    normalized.orgName = apiState.orgName || organization.name;
    normalized.company = {
      ...(apiState.company || {}),
      legalName: apiState.company?.legalName || organization.name
    };
    normalized.activeSystem = apiState.activeSystem || organization.activeSystem || "iso21101";
    normalized.currentPlan = apiState.currentPlan || organization.plan || "profesional";
  }
  return normalized;
}

function appStateToApiState() {
  return {
    ...state,
    syncVersion: 1,
    syncedAt: new Date().toISOString(),
    organizations: [
      {
        id: "org-demo",
        name: state.orgName || state.company.legalName || "Mi empresa de turismo",
        activeSystem: state.activeSystem || "iso21101",
        plan: state.currentPlan || "profesional"
      }
    ],
    auditEvents: state.auditLog || []
  };
}

function hasFrontendState(apiState) {
  return Boolean(
    apiState.syncVersion ||
    apiState.orgName ||
    apiState.company ||
    apiState.people ||
    apiState.trainingNeeds ||
    apiState.currentPlan
  );
}

function updateBackendStatus(message, online = backendOnline) {
  const status = document.querySelector("#backendStatus");
  if (!status) return;
  status.textContent = message;
  status.className = `backend-status ${online ? "online" : "offline"}`;
}

async function fetchBackendState() {
  const response = await fetch(`${apiBaseUrl}/api/state`);
  if (!response.ok) throw new Error("No se pudo leer el backend");
  return response.json();
}

async function hydrateFromBackend() {
  updateBackendStatus("Conectando backend...", false);
  try {
    const apiState = await fetchBackendState();
    backendOnline = true;
    if (hasFrontendState(apiState)) {
      state = mergeState(clone(defaultState), apiStateToAppState(apiState));
      persistLocalState();
      updateBackendStatus("Backend conectado: datos cargados", true);
      renderAll();
    } else {
      updateBackendStatus("Backend conectado: subiendo datos locales", true);
      syncStateToBackend();
    }
  } catch {
    backendOnline = false;
    updateBackendStatus("Modo local: abre backend para guardar en archivo", false);
  }
}

function queueBackendSync() {
  clearTimeout(backendSyncTimer);
  backendSyncTimer = setTimeout(syncStateToBackend, 500);
}

async function syncStateToBackend() {
  try {
    const response = await fetch(`${apiBaseUrl}/api/state`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appStateToApiState())
    });
    if (!response.ok) throw new Error("No se pudo guardar en backend");
    backendOnline = true;
    updateBackendStatus("Backend conectado: cambios guardados", true);
  } catch {
    backendOnline = false;
    updateBackendStatus("Modo local: cambios guardados solo en navegador", false);
  }
}

function labelStatus(value) {
  return {
    pendiente: "Pendiente",
    en_proceso: "En proceso",
    cumple: "Cumple",
    parcial: "Parcial",
    no_cumple: "No cumple",
    no_aplica: "No aplica"
  }[value || "pendiente"];
}

function statusScore(value) {
  return { cumple: 1, parcial: 0.5, en_proceso: 0.35, no_aplica: 1, pendiente: 0, no_cumple: 0 }[value || "pendiente"];
}

function requirementEvidenceStats(code) {
  const coverage = formCoverageByRequirement().find((group) => group.code === code);
  const evidences = state.evidence.filter((item) => item.code === code);
  const activityScopedForms = activityScopedFormsForRequirement(code);
  const activityDraft = activityScopedForms.filter((item) => ["borrador", "revision"].includes(normalizedFormStatus(item.status))).length;
  const activityApproved = activityScopedForms.filter((item) => normalizedFormStatus(item.status) === "aprobado" || normalizedFormStatus(item.status) === "completo").length;
  const registeredEvidence = evidences.filter((item) => item.status !== "sugerida").length;
  const suggestedEvidence = evidences.filter((item) => item.status === "sugerida").length;
  return {
    formsTotal: coverage?.total || 0,
    formsDraft: coverage?.draft || 0,
    formsApproved: coverage?.complete || 0,
    formsPending: coverage?.pending || 0,
    activityFormsTotal: activityScopedForms.length,
    activityFormsDraft: activityDraft,
    activityFormsApproved: activityApproved,
    registeredEvidence,
    suggestedEvidence
  };
}

function formEvidenceScore(stats) {
  const catalogScore = stats.formsTotal ? (stats.formsApproved + stats.formsDraft * 0.4) / stats.formsTotal : 0;
  const activityTarget = activityFormTargetForRequirement(stats);
  const activityScore = activityTarget ? (stats.activityFormsApproved + stats.activityFormsDraft * 0.4) / activityTarget : 0;
  return Math.min(1, Math.max(catalogScore, activityScore));
}

function activityFormTargetForRequirement(stats) {
  if (!stats.activityFormsTotal) return 0;
  return Math.max(1, Math.min(stats.activityFormsTotal, state.activities.length || stats.activityFormsTotal));
}

function activityScopedFormsForRequirement(code) {
  const activityTables = new Set(activityPackageTables);
  return state.formResponses.filter((response) => {
    if (!response.activity || response.code !== code) return false;
    return activityTables.has(response.table);
  });
}

function explicitEvidenceScore(stats) {
  if (stats.registeredEvidence > 0) return 1;
  if (stats.suggestedEvidence > 0) return 0.35;
  return 0;
}

function requirementCompletionScore(code) {
  const stats = requirementEvidenceStats(code);
  return Math.max(
    statusScore(state.compliance[code]),
    formEvidenceScore(stats),
    explicitEvidenceScore(stats)
  );
}

function requirementCompletionStatus(code) {
  const score = requirementCompletionScore(code);
  if (score >= 1) return "cumple";
  if (score >= 0.5) return "parcial";
  if (score > 0) return "en_proceso";
  return state.compliance[code] || "pendiente";
}

function riskLevel(risk) {
  return Number(risk.probability || 0) * Number(risk.impact || 0);
}

function riskLabel(level) {
  if (level >= 12) return "Alto";
  if (level >= 6) return "Medio";
  return "Bajo";
}

function today() {
  return new Date().toLocaleDateString("es-CO");
}

function renderAll() {
  document.querySelector("#orgName").value = state.orgName;
  document.querySelector("#ownerName").value = state.ownerName;
  document.querySelector("#currentUserRole").value = state.currentUserRole || "direccion";
  document.querySelector("#activeSystem").value = state.activeSystem || "iso21101";
  document.querySelector(".topbar h1").textContent = activeSystem().shortName;
  const planSelect = document.querySelector("#currentPlan");
  if (planSelect) planSelect.value = state.currentPlan || "profesional";
  fillCompanyForm();
  renderMetrics();
  renderSystemHealthSummary();
  renderDemoReadiness();
  renderOperationReadinessSummary();
  renderTodayWork();
  renderRequirements();
  renderClosurePackages();
  renderImplementation();
  renderActions();
  renderAlerts();
  renderAgenda();
  renderEvidence();
  renderChapterProgress();
  renderPhvaBoard();
  renderActivities();
  renderActivityGaps();
  renderPeople();
  renderTraining();
  renderEquipment();
  renderPolicies();
  renderParticipantEvidence();
  renderRisks();
  renderDocuments();
  renderIncidents();
  renderAudits();
  renderManagementReviews();
  renderExecutiveReport();
  renderAuditReport();
  renderAgentWorkQueue();
  renderAgentFindings();
  renderReviewInbox();
  renderAuditLog();
  renderSubscriptionPlans();
  renderForms();
  renderCompanyIntakeGuide();
  renderCompanyImplementationProfile();
}

function renderMetrics() {
  const totalScore = requirements.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
  const evaluated = requirements.filter((item) => requirementCompletionScore(item.code) > 0).length;
  const compliance = Math.round((totalScore / requirements.length) * 100);
  const highRisks = state.risks.filter((risk) => riskLevel(risk) >= 12).length;
  const peoplePending = state.people.filter((person) => person.competence !== "cumple").length;
  const trainingOpen = state.trainingNeeds.filter((item) => item.status !== "cerrada").length;
  const policiesDue = state.policies.filter((item) => item.status !== "vigente").length;
  document.querySelector("#metricCompliance").textContent = `${compliance}%`;
  document.querySelector("#metricEvaluated").textContent = `${evaluated}/${requirements.length}`;
  document.querySelector("#metricActions").textContent = state.actions.filter((item) => item.status !== "cerrada").length;
  document.querySelector("#metricEvidence").textContent = state.evidence.length;
  document.querySelector("#metricHighRisks").textContent = highRisks;
  document.querySelector("#metricPeoplePending").textContent = peoplePending;
  document.querySelector("#metricTraining").textContent = trainingOpen;
  document.querySelector("#metricPoliciesDue").textContent = policiesDue;
}

function demoReadinessStatus() {
  const progress = implementationProgress();
  const profileGaps = companyProfileGaps();
  const activityReadinessItems = state.activities.map((activity) => {
    const status = activityReadiness(activity.name);
    return { activity, status, decision: activityOperationDecision(status) };
  });
  const activitiesWithAnyControl = activityReadinessItems.filter((item) => item.status.gaps.length < 7).length;
  const documentsWithContent = state.documents.filter((doc) => doc.content).length;
  const evidencePackages = requirements.map(evidencePackageForRequirement);
  const requirementsWithSupport = evidencePackages.filter((item) => item.score > 0).length;
  const hasManagementReview = state.managementReviews.length > 0;
  const hasActions = state.actions.length > 0;
  const checks = [
    { key: "empresa", label: "Perfil de empresa", done: profileGaps.length <= 2, action: "Completar perfil de empresa", view: "empresa" },
    { key: "actividades", label: "Actividades cargadas", done: state.activities.length > 0 && activitiesWithAnyControl > 0, action: "Registrar actividades y controles", view: "actividades" },
    { key: "evidencias", label: "Evidencias iniciales", done: requirementsWithSupport >= 6, action: "Preparar paquetes de evidencia", view: "evidencias" },
    { key: "documentos", label: "Documentos generados", done: documentsWithContent >= 3, action: "Generar documentos base", view: "documentos" },
    { key: "acciones", label: "Acciones trazables", done: hasActions, action: "Crear acciones del plan", view: "acciones" },
    { key: "direccion", label: "Revision direccion", done: hasManagementReview, action: "Preparar revision 9.3", view: "revision" }
  ];
  const completed = checks.filter((item) => item.done).length;
  const score = Math.round((completed / checks.length) * 100);
  const blockedActivities = activityReadinessItems.filter((item) => item.decision.badge === "no_cumple").length;
  const label = score >= 80 ? "Demo lista" : score >= 50 ? "Demo con explicacion" : "Preparar antes";
  return { progress, checks, completed, total: checks.length, score, blockedActivities, label };
}

function renderDemoReadiness() {
  const container = document.querySelector("#demoReadiness");
  if (!container) return;
  const demo = demoReadinessStatus();
  const next = demo.checks.find((item) => !item.done) || demo.checks[0];
  container.innerHTML = `
    <div class="demo-readiness-card">
      <div class="demo-score ${demo.score >= 80 ? "ready" : demo.score >= 50 ? "review" : "blocked"}">
        <strong>${demo.score}%</strong>
        <span>${demo.label}</span>
      </div>
      <div class="demo-readiness-main">
        <div>
          <span class="badge ${demo.score >= 80 ? "cumple" : demo.score >= 50 ? "en_proceso" : "no_cumple"}">${demo.completed}/${demo.total}</span>
          <h3>${demo.score >= 80 ? "Se puede mostrar a un cliente piloto" : "Faltan piezas para una demo solida"}</h3>
          <p>Implementacion PHVA: ${demo.progress.pct}%. Actividades bloqueadas: ${demo.blockedActivities}. Siguiente ajuste: ${next.action}.</p>
        </div>
        <div class="row-actions">
          <button class="secondary-button" data-demo-open="${next.view}" type="button">Abrir pendiente</button>
          <button class="secondary-button" data-demo-seed type="button">Cargar piloto ejemplo</button>
          <button class="secondary-button" data-demo-guide type="button">Descargar guia piloto</button>
          <button data-demo-prepare type="button">Preparar demo</button>
        </div>
      </div>
    </div>
    <div class="demo-check-grid">
      ${demo.checks.map((item) => `
        <div class="demo-check ${item.done ? "done" : ""}">
          <span class="badge ${item.done ? "cumple" : "pendiente"}">${item.done ? "ok" : "falta"}</span>
          <strong>${item.label}</strong>
        </div>`).join("")}
    </div>
    ${renderDemoScript(demo)}
    ${renderPilotObservationPanel()}`;
  container.querySelector("[data-demo-open]")?.addEventListener("click", (event) => showView(event.currentTarget.dataset.demoOpen));
  container.querySelector("[data-demo-seed]")?.addEventListener("click", loadPilotExampleData);
  container.querySelector("[data-demo-guide]")?.addEventListener("click", downloadPilotTestGuide);
  container.querySelector("[data-demo-prepare]")?.addEventListener("click", prepareDemoPackage);
  container.querySelectorAll("[data-demo-step]").forEach((button) => {
    button.addEventListener("click", (event) => showView(event.currentTarget.dataset.demoStep));
  });
  bindPilotObservationControls(container);
}

function renderDemoScript(demo) {
  const steps = [
    { view: "empresa", title: "1. Perfil real", detail: "Mostrar ubicacion, alcance, actividades y faltantes que usa el agente.", ready: companyProfileGaps().length <= 2 },
    { view: "brechas_actividad", title: "2. Brechas por actividad", detail: "Ensenar que rafting, senderismo o cuatrimotos se revisan por separado.", ready: state.activities.some((activity) => activityReadiness(activity.name).gaps.length > 0), review: state.activities.length > 0 },
    { view: "evidencias", title: "3. Paquetes de evidencia", detail: "Mostrar como formularios, documentos y acciones cuentan para cada requisito.", ready: requirements.map(evidencePackageForRequirement).filter((item) => item.score > 0).length >= 6 },
    { view: "documentos", title: "4. Documentos generados", detail: "Abrir alcance, politica, procedimiento o emergencia y descargar/imprimir.", ready: state.documents.filter((doc) => doc.content).length >= 3 },
    { view: "revision", title: "5. Direccion decide", detail: "Mostrar revision 9.3 con decisiones: operar, no ofertar, recursos y acciones.", ready: state.managementReviews.length > 0 },
    { view: "acciones", title: "6. Mejora controlada", detail: "Cerrar acciones solo con seguimiento, evidencia y eficacia.", ready: state.actions.length > 0, review: state.actions.some((action) => action.status === "pendiente_eficacia") }
  ].map((step) => ({
    ...step,
    status: step.ready ? "listo" : step.review ? "revisar" : "preparar"
  }));
  return `
    <div class="demo-script">
      <div class="demo-script-head">
        <div>
          <p class="eyebrow">Guion de demo</p>
          <h3>Como mostrar valor en 10 minutos</h3>
        </div>
        <span class="badge ${demo.score >= 80 ? "cumple" : "en_proceso"}">${demo.label}</span>
      </div>
      <div class="demo-script-grid">
        ${steps.map((step) => `
          <article class="demo-script-step ${step.status}">
            <div>
              <strong>${step.title}</strong>
              <span class="badge ${step.status === "listo" ? "cumple" : step.status === "revisar" ? "en_proceso" : "pendiente"}">${step.status}</span>
            </div>
            <p>${step.detail}</p>
            <button class="secondary-button" data-demo-step="${step.view}" type="button">Abrir</button>
          </article>`).join("")}
      </div>
    </div>`;
}

function pilotObservationSummary() {
  const items = state.pilotObservations || [];
  return {
    total: items.length,
    open: items.filter((item) => item.status === "abierta").length,
    high: items.filter((item) => item.priority === "alta" && item.status !== "cerrada").length,
    converted: items.filter((item) => item.status === "convertida").length,
    closed: items.filter((item) => item.status === "cerrada").length
  };
}

function openPilotObservations() {
  return (state.pilotObservations || []).filter((item) => item.status !== "cerrada" && item.status !== "convertida");
}

function priorityPilotObservations(limit = 4) {
  const priorityOrder = { alta: 0, media: 1, baja: 2 };
  return [...(state.pilotObservations || [])]
    .filter((item) => item.status !== "cerrada")
    .sort((a, b) => (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1))
    .slice(0, limit);
}

function renderPilotObservationPanel() {
  const items = state.pilotObservations || [];
  const summary = pilotObservationSummary();
  const activityOptions = ["General", ...state.activities.map((activity) => activity.name || activity.activity).filter(Boolean)]
    .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
    .join("");
  const recent = items.slice(0, 6);
  return `
    <div class="pilot-observation-panel">
      <div class="pilot-observation-head">
        <div>
          <p class="eyebrow">Prueba piloto</p>
          <h3>Observaciones para convertir en mejoras</h3>
          <p>Registra comentarios de operadores, guias, direccion o cliente piloto y conviertelos en acciones 10.1/10.2.</p>
        </div>
        <div class="pilot-observation-metrics">
          <span><strong>${summary.total}</strong> total</span>
          <span><strong>${summary.open}</strong> abiertas</span>
          <span><strong>${summary.high}</strong> altas</span>
          <span><strong>${summary.converted}</strong> convertidas</span>
          <span><strong>${summary.closed}</strong> cerradas</span>
        </div>
      </div>
      <div class="pilot-observation-form">
        <label>Area
          <select id="pilotObservationArea">
            <option value="operacion">Operacion</option>
            <option value="formularios">Formularios</option>
            <option value="evidencias">Evidencias</option>
            <option value="agente">Agente</option>
            <option value="comercial">Comercial</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <label>Actividad
          <select id="pilotObservationActivity">${activityOptions}</select>
        </label>
        <label>Quien observa
          <input id="pilotObservationSource" type="text" placeholder="Guia, direccion, responsable SGSTA">
        </label>
        <label>Prioridad
          <select id="pilotObservationPriority">
            <option value="media">Media</option>
            <option value="alta">Alta</option>
            <option value="baja">Baja</option>
          </select>
        </label>
        <label class="wide">Observacion
          <textarea id="pilotObservationText" rows="3" placeholder="Ejemplo: el guia no entiende que evidencia debe subir despues de la actividad"></textarea>
        </label>
        <div class="row-actions wide">
          <button class="secondary-button" data-pilot-observation-report type="button">Descargar observaciones</button>
          <button class="secondary-button" data-pilot-observation-actions type="button">Convertir abiertas en acciones</button>
          <button data-pilot-observation-add type="button">Registrar observacion</button>
        </div>
      </div>
      <div class="pilot-observation-list">
        ${recent.length ? recent.map((item, index) => `
          <article class="pilot-observation-card ${item.priority || "media"}">
            <div>
              <span class="badge ${item.status === "convertida" ? "cumple" : item.priority === "alta" ? "no_cumple" : "en_proceso"}">${escapeHtml(item.status || "abierta")}</span>
              <strong>${escapeHtml(item.text || "Observacion sin detalle")}</strong>
              <p>${escapeHtml(item.area || "general")} - ${escapeHtml(item.activity || "General")} - ${escapeHtml(item.source || "sin fuente")} - ${escapeHtml(item.createdAt || "")}</p>
            </div>
            <div class="pilot-observation-actions">
              <button class="secondary-button" data-pilot-observation-action="${index}" type="button" ${item.status === "convertida" || item.status === "cerrada" ? "disabled" : ""}>Crear accion</button>
              <button class="secondary-button" data-pilot-observation-close="${index}" type="button" ${item.status === "cerrada" ? "disabled" : ""}>Cerrar</button>
            </div>
          </article>`).join("") : `
          <div class="empty-state">Todavia no hay observaciones del piloto. Este sera el cuaderno de ajustes reales del MVP.</div>`}
      </div>
    </div>`;
}

function bindPilotObservationControls(container) {
  container.querySelector("[data-pilot-observation-add]")?.addEventListener("click", addPilotObservation);
  container.querySelector("[data-pilot-observation-actions]")?.addEventListener("click", createPilotObservationActions);
  container.querySelector("[data-pilot-observation-report]")?.addEventListener("click", downloadPilotObservationReport);
  container.querySelectorAll("[data-pilot-observation-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const created = createPilotObservationAction(Number(button.dataset.pilotObservationAction));
      addMessage("agent", created ? "Converti la observacion del piloto en una accion de mejora." : "Esa observacion ya tenia una accion asociada.");
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-pilot-observation-close]").forEach((button) => {
    button.addEventListener("click", () => closePilotObservation(Number(button.dataset.pilotObservationClose)));
  });
}

function addPilotObservation() {
  const text = document.querySelector("#pilotObservationText")?.value.trim();
  if (!text) {
    addMessage("agent", "Escribe la observacion del piloto antes de registrarla.");
    return;
  }
  const observation = {
    text,
    area: document.querySelector("#pilotObservationArea")?.value || "operacion",
    activity: document.querySelector("#pilotObservationActivity")?.value || "General",
    source: document.querySelector("#pilotObservationSource")?.value.trim() || state.ownerName || "Responsable SGSTA",
    priority: document.querySelector("#pilotObservationPriority")?.value || "media",
    status: "abierta",
    createdAt: today()
  };
  state.pilotObservations.unshift(observation);
  recordAuditEvent({
    title: "Observacion de piloto registrada",
    detail: `${observation.area} - ${observation.activity}: ${observation.text}`,
    code: "10.1",
    type: "piloto",
    actor: "humano"
  });
  addMessage("agent", "Registre la observacion del piloto. Cuando quieras, puedo convertirla en accion de mejora.");
  saveState();
  renderAll();
}

function createPilotObservationAction(index) {
  const observation = state.pilotObservations?.[index];
  if (!observation || observation.status === "convertida") return false;
  const title = `Piloto: ${observation.text.slice(0, 80)}${observation.text.length > 80 ? "..." : ""}`;
  if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
    observation.status = "convertida";
    observation.convertedAt = today();
    return false;
  }
  state.actions.unshift({
    title,
    code: "10.2",
    status: "abierta",
    type: "mejora",
    origin: "observacion piloto",
    priority: observation.priority || "media",
    responsible: state.ownerName || "Responsable SGSTA",
    dueDate: "",
    cause: `Observacion piloto (${observation.area || "general"} / ${observation.activity || "General"} / ${observation.source || "sin fuente"}): ${observation.text}`,
    immediateCorrection: "",
    followUp: "",
    evidence: "",
    efficacyVerification: "Verificar en una nueva prueba piloto que el ajuste resolvio la observacion.",
    efficacyStatus: "pendiente",
    relatedActivity: observation.activity === "General" ? "" : observation.activity,
    createdAt: today()
  });
  observation.status = "convertida";
  observation.convertedAt = today();
  recordAuditEvent({
    title: "Observacion piloto convertida en accion",
    detail: title,
    code: "10.2",
    type: "accion_mejora",
    actor: "agente"
  });
  return true;
}

function createPilotObservationActions() {
  const openIndexes = (state.pilotObservations || [])
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.status === "abierta")
    .map(({ index }) => index);
  const created = openIndexes.filter((index) => createPilotObservationAction(index)).length;
  addMessage("agent", created ? `Converti ${created} observacion(es) del piloto en acciones de mejora.` : "No habia observaciones abiertas nuevas para convertir.");
  saveState();
  renderAll();
}

function closePilotObservation(index) {
  const observation = state.pilotObservations?.[index];
  if (!observation || observation.status === "cerrada") return;
  const reason = window.prompt("Justificacion humana para cerrar/aplazar esta observacion:", observation.decisionNote || "");
  if (reason === null) return;
  const note = reason.trim();
  if (!note) {
    addMessage("agent", "Para cerrar una observacion del piloto necesito una justificacion humana.");
    return;
  }
  observation.status = "cerrada";
  observation.closedAt = today();
  observation.closedBy = state.ownerName || "Responsable SGSTA";
  observation.decisionNote = note;
  recordAuditEvent({
    title: "Observacion piloto cerrada por humano",
    detail: `${observation.text}. Justificacion: ${note}`,
    code: "10.2",
    type: "piloto",
    actor: "humano"
  });
  addMessage("agent", "Cerre la observacion del piloto con justificacion humana. Queda registrada para trazabilidad.");
  saveState();
  renderAll();
}

function pilotObservationRelatedActions(observation) {
  const text = String(observation.text || "");
  return state.actions.filter((action) => {
    if (action.origin !== "observacion piloto") return false;
    return String(action.title || "").includes(text.slice(0, 40)) || String(action.cause || "").includes(text);
  });
}

function pilotObservationReportText() {
  const summary = pilotObservationSummary();
  const observations = state.pilotObservations || [];
  const open = openPilotObservations();
  const converted = observations.filter((item) => item.status === "convertida");
  const closed = observations.filter((item) => item.status === "cerrada");
  const relatedActions = state.actions.filter((action) => action.origin === "observacion piloto");
  return [
    "REPORTE DE OBSERVACIONES DEL PILOTO - SGSTA AGENT",
    "",
    `Organizacion: ${state.company.legalName || state.orgName}`,
    `Sistema: ${activeSystem().name} (${activeSystem().code})`,
    `Fecha: ${today()}`,
    `Responsable: ${state.ownerName}`,
    "",
    "Resumen",
    `- Observaciones registradas: ${summary.total}`,
    `- Abiertas: ${summary.open}`,
    `- Prioridad alta: ${summary.high}`,
    `- Convertidas en acciones: ${summary.converted}`,
    `- Cerradas con decision humana: ${summary.closed}`,
    `- Acciones de mejora asociadas: ${relatedActions.length}`,
    "",
    "Observaciones abiertas",
    ...(open.length ? open.map((item, index) => [
      `${index + 1}. ${item.priority || "media"} | ${item.area || "general"} | ${item.activity || "General"}`,
      `   Fuente: ${item.source || "sin fuente"} | Fecha: ${item.createdAt || ""}`,
      `   Observacion: ${item.text || ""}`,
      "   Decision requerida: convertir en accion de mejora, aplazar o cerrar con justificacion humana."
    ].join("\n")) : ["- No hay observaciones abiertas."]),
    "",
    "Observaciones convertidas",
    ...(converted.length ? converted.map((item, index) => {
      const actions = pilotObservationRelatedActions(item);
      return [
        `${index + 1}. ${item.priority || "media"} | ${item.area || "general"} | ${item.activity || "General"}`,
        `   Observacion: ${item.text || ""}`,
        `   Convertida: ${item.convertedAt || "sin fecha"}`,
        `   Accion asociada: ${actions[0]?.title || "por verificar en acciones"}`
      ].join("\n");
    }) : ["- No hay observaciones convertidas."]),
    "",
    "Observaciones cerradas o aplazadas",
    ...(closed.length ? closed.map((item, index) => [
      `${index + 1}. ${item.priority || "media"} | ${item.area || "general"} | ${item.activity || "General"}`,
      `   Observacion: ${item.text || ""}`,
      `   Cerrada: ${item.closedAt || "sin fecha"} | Por: ${item.closedBy || "Responsable SGSTA"}`,
      `   Justificacion: ${item.decisionNote || "sin justificacion registrada"}`
    ].join("\n")) : ["- No hay observaciones cerradas o aplazadas."]),
    "",
    "Acciones generadas desde piloto",
    ...(relatedActions.length ? relatedActions.map((action, index) => [
      `${index + 1}. ${action.title}`,
      `   Estado: ${action.status || "abierta"} | Prioridad: ${action.priority || "media"} | Requisito: ${action.code || "10.2"}`,
      `   Responsable: ${action.responsible || "por asignar"} | Actividad: ${action.relatedActivity || "General"}`,
      `   Verificacion de eficacia: ${action.efficacyVerification || "por definir"}`
    ].join("\n")) : ["- Todavia no hay acciones generadas desde observaciones piloto."]),
    "",
    "Uso en PHVA",
    "- Planear: ajustar alcance, riesgos o recursos segun aprendizaje del piloto.",
    "- Hacer: modificar formularios, evidencias, actividades o capacitaciones.",
    "- Verificar: revisar en direccion y confirmar si el ajuste funciono.",
    "- Actuar: cerrar como mejora solo con evidencia y eficacia humana.",
    "",
    "Regla de gobierno",
    "Este reporte es trazabilidad de aprendizaje. El agente puede proponer acciones, pero la empresa decide aprobacion, cierre y eficacia."
  ].join("\n");
}

function downloadPilotObservationReport() {
  const blob = new Blob([pilotObservationReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "reporte_observaciones_piloto_sgsta_agent.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Reporte de observaciones piloto descargado",
    detail: "Se descargo trazabilidad de observaciones, aprendizajes y acciones derivadas del piloto.",
    code: "10.2",
    type: "piloto",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function pilotTestGuideText() {
  const demo = demoReadinessStatus();
  const health = systemHealthStatus();
  const rows = phvaMaturityRows();
  return [
    "GUIA DE PRUEBA PILOTO - SGSTA AGENT",
    "",
    `Empresa sugerida: ${state.company.legalName || state.orgName || "EcoAventura Andina SAS"}`,
    `Fecha: ${today()}`,
    `Demo: ${demo.score}% - ${demo.label}`,
    `Semaforo: ${health.label}`,
    "",
    "Objetivo de la prueba",
    "Validar que el MVP conecta empresa, actividades, riesgos, equipos, personal, seguros, participantes, evidencias, acciones, revision por direccion y mejora.",
    "",
    "Preparacion",
    "1. En Panel, usar 'Cargar piloto ejemplo' si no hay datos cargados.",
    "2. Revisar Semaforo SGSTA y plan de 7 dias.",
    "3. Confirmar que hay al menos una actividad lista, una en revision y una con brechas.",
    "",
    "Recorrido recomendado",
    "1. Empresa: verificar alcance, ubicacion, partes interesadas y contexto local.",
    "2. Actividades: abrir Rafting Rio Claro y revisar ficha operativa.",
    "3. Brechas por actividad: confirmar cuatrimotos con brecha de guia, seguro o equipo.",
    "4. Participantes: verificar evidencia externa sin datos sensibles.",
    "5. Equipos: revisar balsa/chalecos operativos y cuatrimoto en revision.",
    "6. Seguros: confirmar poliza vigente para rafting/caminata y pendiente para cuatrimotos.",
    "7. Acciones: usar Avanzar cierre y verificar que no cierre sin eficacia humana.",
    "8. Revision direccion 9.3: actualizar datos y revisar decisiones.",
    "9. PHVA: revisar madurez y fase mas debil.",
    "10. Monitor: descargar bitacora auditable.",
    "",
    "Criterios de aceptacion",
    `- Cumplimiento estimado visible: ${health.compliance}%.`,
    `- Madurez PHVA: ${rows.map((row) => `${row.label} ${row.pct}%`).join(", ")}.`,
    "- El agente crea acciones, pero no aprueba documentos ni cierra acciones criticas sin humano.",
    "- Los participantes se manejan con evidencia externa y datos minimos.",
    "- La direccion puede ver decisiones operativas antes de autorizar.",
    "",
    "Preguntas para el piloto",
    "- El operador entiende que actividad puede o no puede ofertar?",
    "- El responsable SGSTA entiende que evidencia falta?",
    "- La direccion entiende que debe aprobar?",
    "- El agente reduce trabajo de oficina sin perder control?",
    "",
    "Siguiente paso",
    "Registrar observaciones del piloto y ajustar formularios/reportes antes de vender suscripcion."
  ].join("\n");
}

function downloadPilotTestGuide() {
  const blob = new Blob([pilotTestGuideText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "guia_prueba_piloto_sgsta_agent.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Guia de prueba piloto descargada",
    detail: "Se descargo el recorrido recomendado para validar el MVP piloto.",
    code: "4.4",
    type: "demo",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function prepareDemoPackage() {
  const beforeDocs = state.documents.filter((doc) => doc.content).length;
  const beforeReviews = state.managementReviews.length;
  const profile = generateCompanyImplementationProfile({ silent: true });
  if (state.documents.filter((doc) => doc.content).length < 3) {
    generateDocumentDraft({ silent: true });
    generateDocumentDraft({ silent: true });
    generateDocumentDraft({ silent: true });
  }
  if (!state.managementReviews.length) addManagementReview({ silent: true });
  const createdActions = createImplementationWorkPlanActions({ silent: true });
  const afterDocs = state.documents.filter((doc) => doc.content).length;
  const createdDocs = Math.max(0, afterDocs - beforeDocs);
  const createdReview = state.managementReviews.length > beforeReviews;
  recordAuditEvent({
    title: "Paquete de demo preparado",
    detail: `Perfil actualizado: ${profile ? "si" : "no"}. Documentos nuevos: ${createdDocs}. Revision direccion creada: ${createdReview ? "si" : "no"}. Acciones nuevas: ${createdActions}.`,
    code: "4.4",
    type: "demo",
    actor: "agente"
  });
  addMessage("agent", `Prepare paquete minimo de demo: perfil actualizado, ${createdDocs} documento(s) generado(s), ${createdReview ? "revision 9.3 creada" : "revision 9.3 ya existente"} y ${createdActions} accion(es) nuevas del plan.`);
  saveState();
  renderAll();
}

function loadPilotExampleData() {
  state.orgName = "EcoAventura Andina SAS";
  state.ownerName = "Laura Gomez - Responsable SGSTA";
  state.currentUserRole = "direccion";
  state.company = {
    legalName: "EcoAventura Andina SAS",
    nit: "900000000-1",
    country: "Colombia",
    region: "Santander",
    city: "San Gil",
    phone: "300 000 0000",
    operatingArea: "Rio Claro, Sendero Bosque Alto y Ruta Mirador",
    activityDescription: "Rafting recreativo, caminata ecologica y paseo guiado en cuatrimotos.",
    localContext: "Operacion rural con cambios de clima, rios con variacion de caudal, vias destapadas y guias locales.",
    scope: "Prestacion de actividades guiadas de turismo de aventura: rafting, caminata ecologica y paseo en cuatrimotos.",
    stakeholders: "Participantes, guias, proveedores de equipos, aseguradora, autoridades locales, comunidad y direccion."
  };
  state.activities = [
    { name: "Rafting Rio Claro", place: "Rio Claro - tramo recreativo", leader: "Carlos Rios", status: "activa", conditions: "Actividad acuatica sujeta a caudal, clima y nivel del grupo.", participantRequirements: "Edad minima definida, chaleco, briefing obligatorio y consentimiento externo." },
    { name: "Caminata Bosque Alto", place: "Sendero Bosque Alto", leader: "Ana Torres", status: "activa", conditions: "Recorrido de dificultad media con pendientes y cambios de clima.", participantRequirements: "Condicion fisica basica, calzado cerrado, hidratacion y consentimiento externo." },
    { name: "Ruta Cuatrimotos Mirador", place: "Ruta rural al mirador", leader: "Miguel Perez", status: "revision", conditions: "Ruta motorizada con control de velocidad, casco y verificacion de terreno.", participantRequirements: "Edad minima, casco, briefing y aceptacion de normas de conduccion." }
  ];
  state.selectedActivityName = "Rafting Rio Claro";
  state.selectedFormActivity = "Rafting Rio Claro";
  state.people = [
    { name: "Carlos Rios", role: "Guia lider rafting", activity: "Rafting Rio Claro", competence: "cumple", training: "Rescate acuatico y primeros auxilios", evidence: "certificado_rescate_carlos.pdf", certificateDue: "30/11/2026" },
    { name: "Ana Torres", role: "Guia senderismo", activity: "Caminata Bosque Alto", competence: "cumple", training: "Primeros auxilios y orientacion", evidence: "certificado_ana.pdf", certificateDue: "15/10/2026" },
    { name: "Miguel Perez", role: "Guia cuatrimotos", activity: "Ruta Cuatrimotos Mirador", competence: "pendiente", training: "Conduccion segura pendiente", evidence: "", certificateDue: "" }
  ];
  state.trainingNeeds = [
    { topic: "Conduccion segura y control de velocidad", activity: "Ruta Cuatrimotos Mirador", origin: "brecha competencia", priority: "alta", status: "pendiente", code: "7.2", person: "Miguel Perez" },
    { topic: "Simulacro de rescate acuatico", activity: "Rafting Rio Claro", origin: "emergencias", priority: "media", status: "realizada", code: "8.2", evaluation: "aprobada", certificate: "acta_simulacro_rescate.pdf", evidence: "registro_simulacro.pdf" }
  ];
  state.equipment = [
    { name: "Balsa 6 personas", type: "Rafting", activity: "Rafting Rio Claro", status: "operativo", nextCheck: "30/06/2026", inspectionDate: "01/05/2026", maintenanceDate: "20/04/2026", evidence: "inspeccion_balsa_mayo.pdf" },
    { name: "Chalecos salvavidas", type: "EPP acuatico", activity: "Rafting Rio Claro", status: "operativo", nextCheck: "30/06/2026", inspectionDate: "01/05/2026", maintenanceDate: "20/04/2026", evidence: "checklist_chalecos.pdf" },
    { name: "Radios VHF", type: "Comunicacion", activity: "Caminata Bosque Alto", status: "operativo", nextCheck: "20/06/2026", inspectionDate: "05/05/2026", maintenanceDate: "05/05/2026", evidence: "prueba_radios.pdf" },
    { name: "Cuatrimoto 01", type: "Vehiculo recreativo", activity: "Ruta Cuatrimotos Mirador", status: "revision", nextCheck: "Por programar", inspectionDate: "", maintenanceDate: "", evidence: "" }
  ];
  state.policies = [
    { number: "RC-2026-001", insurer: "Aseguradora Andina", coverage: "Responsabilidad civil y accidentes", activity: "Rafting Rio Claro", due: "31/12/2026", status: "vigente", document: "poliza_rc_2026.pdf" },
    { number: "RC-2026-001", insurer: "Aseguradora Andina", coverage: "Responsabilidad civil y accidentes", activity: "Caminata Bosque Alto", due: "31/12/2026", status: "vigente", document: "poliza_rc_2026.pdf" },
    { number: "RC-MOTO-PEND", insurer: "Por confirmar", coverage: "Cobertura para cuatrimotos pendiente", activity: "Ruta Cuatrimotos Mirador", due: "Por definir", status: "pendiente", document: "" }
  ];
  state.risks = [
    { title: "Caida al agua o golpe con roca", activity: "Rafting Rio Claro", probability: 3, impact: 5, control: "Chaleco, casco, briefing, guia lider y verificacion de caudal" },
    { title: "Caida en sendero", activity: "Caminata Bosque Alto", probability: 3, impact: 3, control: "Briefing, calzado adecuado, ritmo guiado y botiquin" },
    { title: "Colision o volcamiento", activity: "Ruta Cuatrimotos Mirador", probability: 3, impact: 5, control: "Casco, velocidad controlada, induccion y revision mecanica" }
  ];
  state.participantEvidence = [
    { activity: "Rafting Rio Claro", phase: "antes", kind: "Formulario externo", consent: "recibido", status: "recibida", date: "10/05/2026", link: "https://forms.example/rafting", evidence: "consentimientos_rafting_mayo.pdf", infoProvided: "Riesgos, condiciones de participacion y equipo.", participantInfoRequested: "Consentimiento externo minimo.", communicationNotes: "Datos sensibles fuera de la plataforma." },
    { activity: "Rafting Rio Claro", phase: "durante", kind: "Briefing firmado", consent: "recibido", status: "recibida", date: "10/05/2026", link: "https://drive.example/briefing-rafting", evidence: "briefing_rafting.pdf", infoProvided: "Senales y comportamiento en balsa.", participantInfoRequested: "Confirmacion de briefing.", communicationNotes: "Registro externo." },
    { activity: "Rafting Rio Claro", phase: "despues", kind: "Encuesta externa", consent: "recibido", status: "recibida", date: "10/05/2026", link: "https://forms.example/post-rafting", evidence: "encuesta_post_rafting.pdf", infoProvided: "Canal de reporte posterior.", participantInfoRequested: "Observaciones.", communicationNotes: "Sin datos sensibles." },
    { activity: "Ruta Cuatrimotos Mirador", phase: "antes", kind: "Formulario externo", consent: "pendiente", status: "pendiente", date: "", link: "", evidence: "", infoProvided: "Normas de conduccion y requisitos.", participantInfoRequested: "Consentimiento externo.", communicationNotes: "Pendiente antes de ofertar." }
  ];
  state.documents = [
    { title: "Alcance del SGSTA", code: "4.3", status: "aprobado", content: "Alcance: rafting, caminata ecologica y cuatrimotos operadas por EcoAventura Andina SAS." },
    { title: "Politica de seguridad", code: "5.2", status: "aprobado", content: "Compromiso con seguridad de participantes, guias y comunidad mediante gestion de riesgos, competencias, equipos, emergencias y mejora continua." },
    { title: "Procedimiento operacional", code: "8.1", status: "revision", content: "Verificar guia competente, equipo, seguro, participantes, briefing, emergencia y bitacora antes de operar." },
    { title: "Plan de emergencia", code: "8.2", status: "borrador", content: "Plan preliminar: rescate acuatico, evacuacion en sendero, incidente con cuatrimoto, comunicacion y simulacros." }
  ];
  state.formResponses = [
    { table: "contexto_actividades", form: "Contexto de actividad", module: "operacion", status: "aprobado", code: "4.1", activity: "Rafting Rio Claro", source: "piloto", values: { actividad: "Rafting Rio Claro" } },
    { table: "mapa_riesgos", form: "Mapa de riesgos", module: "riesgos", status: "aprobado", code: "6.1.2", activity: "Rafting Rio Claro", source: "piloto", values: { actividad: "Rafting Rio Claro" } },
    { table: "equipos", form: "Inspeccion de equipos", module: "equipos", status: "aprobado", code: "7.1", activity: "Rafting Rio Claro", source: "piloto", values: { actividad: "Rafting Rio Claro" } },
    { table: "plan_emergencia", form: "Plan de emergencia", module: "emergencias", status: "revision", code: "8.2", activity: "Rafting Rio Claro", source: "agente", values: { actividad: "Rafting Rio Claro" } },
    { table: "registro_participantes_evidencia", form: "Participantes evidencia externa", module: "participantes", status: "aprobado", code: "7.4.3", activity: "Rafting Rio Claro", source: "piloto", values: { actividad: "Rafting Rio Claro" } }
  ];
  state.evidence = [
    { title: "Alcance aprobado SGSTA", code: "4.3", source: "documento aprobado", status: "registrada", linkedDocument: "Alcance del SGSTA" },
    { title: "Politica de seguridad aprobada", code: "5.2", source: "documento aprobado", status: "registrada", linkedDocument: "Politica de seguridad" },
    { title: "Matriz de riesgos rafting", code: "6.1.2", source: "formulario aprobado", status: "registrada", activity: "Rafting Rio Claro", linkedActivity: "Rafting Rio Claro" },
    { title: "Inspeccion de balsa y chalecos", code: "7.1", source: "formulario aprobado", status: "registrada", activity: "Rafting Rio Claro", linkedActivity: "Rafting Rio Claro" },
    { title: "Consentimientos externos rafting", code: "7.4.3", source: "evidencia externa", status: "registrada", activity: "Rafting Rio Claro", linkedActivity: "Rafting Rio Claro" },
    { title: "Plan de emergencia rafting", code: "8.2", source: "borrador agente", status: "sugerida", activity: "Rafting Rio Claro", linkedActivity: "Rafting Rio Claro" }
  ];
  state.incidents = [{ title: "Casi incidente: participante sin calzado adecuado", activity: "Caminata Bosque Alto", date: "08/05/2026", status: "abierto" }];
  state.audits = [{ title: "Auditoria interna piloto SGSTA", scope: "Rafting Rio Claro y controles transversales", date: "25/05/2026", status: "programada" }];
  state.actions = [
    { title: "Validar cobertura de seguro para cuatrimotos", code: "6.1.3", status: "abierta", type: "preventiva", origin: "semaforo SGSTA", priority: "alta", responsible: "Laura Gomez - Responsable SGSTA", dueDate: "22/05/2026", cause: "La actividad Ruta Cuatrimotos Mirador no tiene poliza vigente validada.", followUp: "", evidence: "", efficacyVerification: "", efficacyStatus: "pendiente", relatedActivity: "Ruta Cuatrimotos Mirador", createdAt: today() },
    { title: "Completar competencia de guia cuatrimotos", code: "7.2", status: "abierta", type: "preventiva", origin: "competencia", priority: "alta", responsible: "Laura Gomez - Responsable SGSTA", dueDate: "24/05/2026", cause: "Miguel Perez no tiene certificado/evidencia vigente para operacion de cuatrimotos.", followUp: "", evidence: "", efficacyVerification: "", efficacyStatus: "pendiente", relatedActivity: "Ruta Cuatrimotos Mirador", createdAt: today() },
    { title: "Cerrar plan de emergencia rafting", code: "8.2", status: "pendiente_eficacia", type: "mejora", origin: "revision direccion", priority: "media", responsible: "Laura Gomez - Responsable SGSTA", dueDate: "26/05/2026", cause: "Plan de emergencia en revision requiere simulacro y verificacion.", followUp: "Simulacro ejecutado con observaciones menores.", evidence: "acta_simulacro_rescate.pdf", efficacyVerification: "Verificar tiempos de respuesta y comunicacion posterior al simulacro.", efficacyStatus: "pendiente", relatedActivity: "Rafting Rio Claro", createdAt: today() }
  ];
  state.pilotObservations = [
    { text: "El responsable SGSTA quiere ver mas claro que evidencia falta antes de operar cuatrimotos.", area: "evidencias", activity: "Ruta Cuatrimotos Mirador", source: "Responsable SGSTA", priority: "alta", status: "abierta", createdAt: today() },
    { text: "La direccion entiende el semaforo, pero pide un resumen mas corto para decidir recursos.", area: "comercial", activity: "General", source: "Direccion", priority: "media", status: "abierta", createdAt: today() }
  ];
  state.compliance = { "4.1": "en_proceso", "4.3": "cumple", "5.2": "cumple", "6.1.2": "en_proceso", "6.1.3": "en_proceso", "7.1": "en_proceso", "7.2": "en_proceso", "7.4.3": "en_proceso", "8.1": "en_proceso", "8.2": "en_proceso", "9.2": "en_proceso", "9.3": "en_proceso", "10.1": "en_proceso" };
  state.auditLog = [];
  state.managementReviews = [buildManagementReviewDraft()];
  recordAuditEvent({
    title: "Empresa piloto ejemplo cargada",
    detail: "El agente preparo un flujo de demo con actividades, riesgos, equipos, personal, seguros, participantes, evidencias, acciones y revision por direccion.",
    code: "4.4",
    type: "demo",
    actor: "agente"
  });
  addMessage("agent", "Cargue EcoAventura Andina SAS como empresa piloto. Ya puedes probar el flujo completo del MVP.");
  saveState();
  renderAll();
}

function todayWorkItems() {
  const activityIntake = companyActivityIntakeRows()
    .filter((row) => row.pct < 100)
    .sort((a, b) => a.pct - b.pct || b.missing.length - a.missing.length)[0];
  const closure = requirements
    .map((item) => closurePathForRequirement(item.code))
    .filter((item) => item.score < 100)
    .sort((a, b) => a.score - b.score)[0];
  const activity = state.activities
    .map((item) => ({ activity: item, readiness: activityReadiness(item.name) }))
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score)[0];
  const reviewForms = state.formResponses.filter((item) => ["borrador", "revision"].includes(normalizedFormStatus(item.status))).length;
  const openActions = state.actions.filter((item) => item.status !== "cerrada").length;
  const reviewDecisions = managementReviewOperationalDecisions().filter((decision) => decision.priority !== "baja");
  return { activityIntake, closure, activity, reviewForms, openActions, reviewDecisions };
}

function renderTodayWork() {
  const container = document.querySelector("#todayWork");
  if (!container) return;
  const work = todayWorkItems();
  const activityGap = work.activity?.readiness.gaps[0];
  const primaryTitle = work.activityIntake
    ? `Completar ${work.activityIntake.name}`
    : work.activity
      ? `Asegurar ${work.activity.activity.name}`
      : "Crear actividades reales";
  const primaryDetail = work.activityIntake
    ? `Dato minimo faltante: ${work.activityIntake.missing[0]}. ${work.activityIntake.nextQuestion}`
    : work.activity
      ? `${activityGap?.label || "Brecha"}: ${activityGap?.detail || "Revisar controles de la actividad."}`
      : "Registra rafting, senderismo, cuatrimotos u otras actividades para empezar el control operativo.";
  container.innerHTML = `
    <div class="today-grid">
      <article class="today-card primary">
        <span class="badge en_proceso">Primero</span>
        <h3>${escapeHtml(primaryTitle)}</h3>
        <p>${escapeHtml(primaryDetail)}</p>
        <div class="row-actions">
          <button data-today-action="activity" type="button">${work.activityIntake || work.activity ? "Ver actividad" : "Crear actividad"}</button>
          ${work.activityIntake ? `<button class="secondary-button" data-today-action="activity-intake-action" type="button">Crear acciones</button>` : work.activity ? `<button class="secondary-button" data-today-action="activity-action" type="button">Crear accion</button>` : ""}
        </div>
      </article>
      <article class="today-card">
        <span class="badge requisito">${work.closure?.code || "SG"}</span>
        <h3>${work.closure ? "Cerrar requisito" : "Requisitos al dia"}</h3>
        <p>${work.closure ? `${work.closure.title}: ${work.closure.steps[0]}` : "No hay brechas de requisito visibles en este momento."}</p>
        <div class="row-actions">
          ${work.closure ? `<button class="secondary-button" data-today-action="requirement" type="button">Preparar</button>` : `<button class="secondary-button" data-today-action="diagnostic" type="button">Ver diagnostico</button>`}
        </div>
      </article>
      <article class="today-card">
        <span class="badge requisito">9.3</span>
        <h3>${work.reviewDecisions.length ? `${work.reviewDecisions.length} decision(es)` : `${work.reviewForms} borrador(es)`}</h3>
        <p>${work.reviewDecisions.length ? `${work.reviewDecisions[0].title}: ${work.reviewDecisions[0].detail}` : work.reviewForms ? "Revise/apruebe formularios para que cuenten como evidencia." : "No hay decisiones criticas de direccion en este momento."}</p>
        <div class="row-actions">
          <button class="secondary-button" data-today-action="management-review" type="button">Preparar 9.3</button>
          <button class="secondary-button" data-today-action="review" type="button">Revision humana</button>
        </div>
      </article>
    </div>`;
  container.querySelector("[data-today-action='activity']")?.addEventListener("click", () => {
    if (work.activityIntake) {
      state.selectedActivityName = work.activityIntake.name;
      showView("actividades");
    } else if (work.activity) {
      state.selectedActivityName = work.activity.activity.name;
      showView("actividades");
    } else {
      addActivity();
      showView("actividades");
    }
    renderAll();
  });
  container.querySelector("[data-today-action='activity-intake-action']")?.addEventListener("click", () => {
    if (!work.activityIntake) return;
    createActivityIntakeActions(work.activityIntake.name);
  });
  container.querySelector("[data-today-action='activity-action']")?.addEventListener("click", () => {
    if (!work.activity || !activityGap) return;
    createActivityGapAction(work.activity.activity.name, activityGap.key);
  });
  container.querySelector("[data-today-action='requirement']")?.addEventListener("click", () => {
    if (work.closure) closeRequirementGap(work.closure.code);
  });
  container.querySelector("[data-today-action='diagnostic']")?.addEventListener("click", () => showView("diagnostico"));
  container.querySelector("[data-today-action='review']")?.addEventListener("click", () => showView("revision_humana"));
  container.querySelector("[data-today-action='management-review']")?.addEventListener("click", () => {
    addManagementReview();
    showView("revision");
  });
}

function systemHealthStatus() {
  const totalScore = requirements.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
  const compliance = Math.round((totalScore / requirements.length) * 100);
  const activityStatuses = state.activities.map((activity) => {
    const readiness = activityReadiness(activity.name);
    return { activity, readiness, decision: activityOperationDecision(readiness) };
  });
  const blocked = activityStatuses.filter((item) => item.decision.badge === "no_cumple");
  const review = activityStatuses.filter((item) => item.decision.badge === "en_proceso");
  const highRisks = state.risks.filter((risk) => riskLevel(risk) >= 12);
  const openActions = state.actions.filter((item) => item.status !== "cerrada");
  const humanPending = buildReviewItems();
  const criticalAlerts = buildSystemAlerts().filter((item) => item.severity === "alta");
  const directionNeeded = blocked.length || criticalAlerts.length || !state.managementReviews.length;
  if (blocked.length || criticalAlerts.length) {
    return {
      label: "No ofertar todavia",
      badge: "no_cumple",
      tone: "blocked",
      summary: "Hay brechas criticas. El agente puede crear acciones y preparar soportes, pero la autorizacion debe ser humana.",
      next: blocked[0] ? `Cerrar brechas de ${blocked[0].activity.name}` : criticalAlerts[0]?.title || "Revisar alertas criticas",
      compliance,
      blocked: blocked.length,
      review: review.length,
      highRisks: highRisks.length,
      openActions: openActions.length,
      humanPending: humanPending.length,
      directionNeeded
    };
  }
  if (review.length || humanPending.length || compliance < 70) {
    return {
      label: "Preparar antes de operar",
      badge: "en_proceso",
      tone: "review",
      summary: "El sistema avanza, pero quedan aprobaciones, evidencias o formularios por cerrar antes de confiar en la operacion.",
      next: review[0] ? `Completar soportes de ${review[0].activity.name}` : humanPending[0]?.title || "Revisar evidencias pendientes",
      compliance,
      blocked: blocked.length,
      review: review.length,
      highRisks: highRisks.length,
      openActions: openActions.length,
      humanPending: humanPending.length,
      directionNeeded
    };
  }
  return {
    label: "Operar con vigilancia",
    badge: "cumple",
    tone: "ready",
    summary: "No hay bloqueos criticos visibles. Mantener seguimiento del agente, vigencias y revision periodica.",
    next: "Mantener vigilancia y actualizar evidencias",
    compliance,
    blocked: blocked.length,
    review: review.length,
    highRisks: highRisks.length,
    openActions: openActions.length,
    humanPending: humanPending.length,
    directionNeeded
  };
}

function renderSystemHealthSummary() {
  const container = document.querySelector("#systemHealthSummary");
  if (!container) return;
  const health = systemHealthStatus();
  const weekPlan = systemHealthWeekPlan(health).slice(0, 3);
  container.innerHTML = `
    <div class="system-health-card ${health.tone}">
      <div>
        <p class="eyebrow">Semaforo SGSTA</p>
        <h2>${health.label}</h2>
        <p>${health.summary}</p>
      </div>
      <div class="system-health-decision">
        <span class="badge ${health.badge}">${health.directionNeeded ? "direccion" : "operacion"}</span>
        <strong>${health.compliance}%</strong>
        <span>cumplimiento estimado</span>
      </div>
      <div class="system-health-grid">
        <span><strong>${health.blocked}</strong> bloqueadas</span>
        <span><strong>${health.review}</strong> en revision</span>
        <span><strong>${health.highRisks}</strong> riesgos altos</span>
        <span><strong>${health.humanPending}</strong> aprobaciones</span>
      </div>
      <div class="system-health-next">
        <span>Siguiente paso</span>
        <strong>${escapeHtml(health.next)}</strong>
        <ul>
          ${weekPlan.map((item) => `<li>${escapeHtml(item.title)}</li>`).join("")}
        </ul>
        <div class="row-actions">
          <button data-health-agent type="button">Usar agente</button>
          <button data-health-actions type="button">Crear acciones 7 dias</button>
          <button class="secondary-button" data-health-direction type="button">Ver direccion</button>
          <button class="secondary-button" data-health-plan type="button">Descargar plan 7 dias</button>
        </div>
      </div>
    </div>`;
  container.querySelector("[data-health-agent]")?.addEventListener("click", () => showView("agente"));
  container.querySelector("[data-health-actions]")?.addEventListener("click", createSystemHealthWeekActions);
  container.querySelector("[data-health-direction]")?.addEventListener("click", () => showView(health.directionNeeded ? "revision" : "monitor"));
  container.querySelector("[data-health-plan]")?.addEventListener("click", downloadSystemHealthWeekPlan);
}

function systemHealthWeekPlan(health = systemHealthStatus()) {
  const activities = state.activities
    .map((activity) => ({ activity, readiness: activityReadiness(activity.name) }))
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score);
  const alerts = buildSystemAlerts().sort((a, b) => priorityWeight(b.severity) - priorityWeight(a.severity));
  const reviewItems = buildReviewItems();
  const plan = [];
  if (activities[0]) {
    plan.push({
      day: "Dia 1",
      title: `Cerrar brechas criticas de ${activities[0].activity.name}`,
      detail: activities[0].readiness.gaps.slice(0, 3).map((gap) => `${gap.code} ${gap.label}: ${gap.detail}`).join(" | "),
      code: "8.1"
    });
  }
  if (alerts[0]) {
    plan.push({
      day: "Dia 2",
      title: `Convertir alerta en accion: ${alerts[0].title}`,
      detail: alerts[0].detail,
      code: alerts[0].code
    });
  }
  if (reviewItems[0]) {
    plan.push({
      day: "Dia 3",
      title: `Resolver aprobacion humana: ${reviewItems[0].title}`,
      detail: reviewItems[0].detail,
      code: reviewItems[0].code
    });
  }
  if (state.trainingNeeds.some((item) => item.status !== "cerrada" && item.status !== "realizada")) {
    plan.push({
      day: "Dia 4",
      title: "Cerrar plan de capacitacion y competencia",
      detail: "Validar necesidades abiertas, asistencia, evaluacion, certificados y vencimientos.",
      code: "7.2"
    });
  }
  if (!state.managementReviews.length || health.directionNeeded) {
    plan.push({
      day: "Dia 5",
      title: "Preparar revision por la direccion",
      detail: "Consolidar actividades bloqueadas, recursos requeridos, riesgos, acciones y decisiones.",
      code: "9.3"
    });
  }
  plan.push({
    day: "Dia 6",
    title: "Actualizar bitacora y evidencias",
    detail: "Descargar bitacora, asociar soportes reales y verificar que formularios aprobados cuenten como evidencia.",
    code: "7.5"
  });
  plan.push({
    day: "Dia 7",
    title: "Revisar semaforo SGSTA nuevamente",
    detail: `Meta: pasar de '${health.label}' a un estado menos critico o sostener operacion con vigilancia.`,
    code: "10.1"
  });
  return plan.slice(0, 7);
}

function systemHealthWeekPlanText() {
  const health = systemHealthStatus();
  const plan = systemHealthWeekPlan(health);
  return [
    "PLAN DE 7 DIAS DESDE SEMAFORO SGSTA",
    "",
    `Organizacion: ${state.organizationName || state.orgName || "Mi empresa"}`,
    `Sistema: ${activeSystem().name}`,
    `Fecha: ${today()}`,
    `Estado actual: ${health.label}`,
    `Cumplimiento estimado: ${health.compliance}%`,
    "",
    "Lectura del agente",
    health.summary,
    "",
    "Plan semanal",
    ...plan.map((item) => `${item.day} | Requisito ${item.code}\n- ${item.title}\n- ${item.detail}`),
    "",
    "Regla",
    "El agente prepara y prioriza. La organizacion aprueba documentos, autorizaciones de operacion y cierre de acciones criticas."
  ].join("\n");
}

function downloadSystemHealthWeekPlan() {
  const blob = new Blob([systemHealthWeekPlanText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plan_7_dias_semaforo_sgsta.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Plan 7 dias descargado",
    detail: "Se descargo el plan semanal generado desde el semaforo SGSTA.",
    code: "10.1",
    type: "plan_semaforo",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createSystemHealthWeekActions() {
  const health = systemHealthStatus();
  const plan = systemHealthWeekPlan(health);
  let created = 0;
  plan.forEach((item) => {
    const title = `Plan 7 dias: ${item.title}`;
    const exists = state.actions.some((action) => action.title === title && action.status !== "cerrada");
    if (exists) return;
    state.actions.unshift({
      title,
      code: item.code,
      status: "abierta",
      type: item.code === "10.1" ? "mejora" : item.code === "7.5" ? "tarea" : "preventiva",
      origin: "semaforo SGSTA",
      priority: health.tone === "blocked" || item.day === "Dia 1" ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: item.detail,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      sourceDetail: item.day,
      createdAt: today()
    });
    created += 1;
  });
  recordAuditEvent({
    title: "Plan 7 dias convertido en acciones",
    detail: `El agente creo ${created} accion(es) desde el semaforo SGSTA.`,
    code: "10.1",
    type: "plan_semaforo",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) desde el plan de 7 dias del semaforo.` : "El plan de 7 dias ya tenia sus acciones abiertas.");
  saveState();
  renderAll();
}

function renderOperationReadinessSummary() {
  const container = document.querySelector("#operationReadinessSummary");
  if (!container) return;
  const readiness = state.activities.map((activity) => {
    const status = activityReadiness(activity.name);
    const decision = activityOperationDecision(status);
    const checklist = activityDepartureChecklist(activity.name);
    const nextGap = status.gaps[0];
    return { activity, status, decision, checklist, nextGap };
  });
  const ready = readiness.filter((item) => item.decision.badge === "cumple").length;
  const blocked = readiness.filter((item) => item.decision.badge === "no_cumple").length;
  const review = readiness.filter((item) => item.decision.badge === "en_proceso").length;
  const priority = readiness
    .filter((item) => item.decision.badge !== "cumple")
    .sort((a, b) => b.status.high - a.status.high || a.status.score - b.status.score)[0];
  container.innerHTML = `
    <div class="operation-readiness-grid">
      <div class="operation-score-card ready"><span>Listas para ofertar</span><strong>${ready}</strong></div>
      <div class="operation-score-card review"><span>Con revision</span><strong>${review}</strong></div>
      <div class="operation-score-card blocked"><span>No ofertar todavia</span><strong>${blocked}</strong></div>
      <div class="operation-priority-card">
        <span class="badge ${priority ? priority.decision.badge : "cumple"}">${priority ? priority.decision.label : "Sin bloqueos"}</span>
        <strong>${priority ? priority.activity.name : "Actividades en buen estado"}</strong>
        <p>${priority ? priority.decision.summary : "Mantener vigencias, evidencias y revision periodica."}</p>
        <div class="row-actions">
          <button class="secondary-button" data-operation-open type="button">${priority ? "Ver actividad" : "Ver actividades"}</button>
          ${priority ? `<button data-operation-actions type="button">Crear acciones</button>` : ""}
        </div>
      </div>
    </div>
    <div class="operation-activity-list">
      ${readiness.length ? readiness.map((item) => `
        <article class="operation-activity-card ${item.decision.badge}">
          <div>
            <span class="badge ${item.decision.badge}">${item.decision.label}</span>
            <h3>${item.activity.name}</h3>
            <p>${item.nextGap ? `${item.nextGap.label}: ${item.nextGap.detail}` : "Controles minimos completos. Mantener evidencias y vigencias."}</p>
          </div>
          <div class="operation-card-metrics">
            <span><strong>${item.status.score}%</strong> preparacion</span>
            <span><strong>${item.checklist.filter((check) => check.ok).length}/${item.checklist.length}</strong> antes de salir</span>
            <span><strong>${item.status.high}</strong> criticas</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-operation-card-open="${item.activity.name}" type="button">Ver ficha</button>
            <button class="secondary-button" data-operation-card-export="${item.activity.name}" type="button">Ficha operativa</button>
            ${item.status.gaps.length ? `<button data-operation-card-actions="${item.activity.name}" type="button">Crear acciones</button>` : ""}
          </div>
        </article>`).join("") : `<div class="muted">No hay actividades registradas. Crea la primera actividad para que el agente pueda verificar riesgos, guias, equipos, seguros y participantes.</div>`}
    </div>`;
  container.querySelector("[data-operation-open]")?.addEventListener("click", () => {
    if (priority) state.selectedActivityName = priority.activity.name;
    showView("actividades");
  });
  container.querySelector("[data-operation-actions]")?.addEventListener("click", () => {
    if (priority) createDepartureChecklistActions(priority.activity.name);
  });
  container.querySelectorAll("[data-operation-card-open]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedActivityName = button.dataset.operationCardOpen;
      showView("actividades");
    });
  });
  container.querySelectorAll("[data-operation-card-export]").forEach((button) => {
    button.addEventListener("click", () => downloadActivityOperationalPackage(button.dataset.operationCardExport));
  });
  container.querySelectorAll("[data-operation-card-actions]").forEach((button) => {
    button.addEventListener("click", () => createDepartureChecklistActions(button.dataset.operationCardActions));
  });
}

function renderChapterProgress() {
  const chapters = ["4", "5", "6", "7", "8", "9", "10"];
  document.querySelector("#chapterProgress").innerHTML = chapters.map((chapter) => {
    const items = requirements.filter((item) => item.chapter === chapter);
    const score = items.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
    const pct = Math.round((score / items.length) * 100);
    return `
      <div class="chapter-row">
        <div><strong>Capitulo ${chapter}</strong><div class="muted">${items.length} requisitos evaluables</div></div>
        <div><div class="progress"><span style="width:${pct}%"></span></div><div class="muted">${pct}%</div></div>
      </div>`;
  }).join("");

  const openActions = state.actions.filter((item) => item.status !== "cerrada").slice(0, 5);
  const nextActions = document.querySelector("#nextActions");
  nextActions.innerHTML = openActions.length
    ? openActions.map((item, index) => `
      <div class="action-card action-card-link">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <div class="muted">Requisito ${escapeHtml(item.code || "N/A")}${item.relatedActivity ? ` - ${escapeHtml(item.relatedActivity)}` : ""}</div>
        </div>
        <button class="secondary-button" data-next-action-open="${index}" type="button">Abrir</button>
      </div>`).join("")
    : `<div class="muted">No hay acciones abiertas.</div>`;
  nextActions.querySelectorAll("[data-next-action-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = openActions[Number(button.dataset.nextActionOpen)];
      if (action?.relatedActivity) {
        state.selectedActivityName = action.relatedActivity;
        state.actionFilterActivity = action.relatedActivity;
      }
      showView("acciones");
      renderAll();
    });
  });
}

function renderPhvaBoard() {
  const container = document.querySelector("#phvaBoard");
  renderPhvaMaturity();
  container.innerHTML = phvaStages.map((stage) => {
    const items = requirements.filter((item) => stage.codes.includes(item.chapter));
    const score = items.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
    const pct = Math.round((score / items.length) * 100);
    const openActions = state.actions.filter((action) => stage.codes.includes((action.code || "").split(".")[0]) && action.status !== "cerrada").length;
    return `
      <article class="phva-card">
        <div class="phva-letter">${stage.label[0]}</div>
        <h3>${stage.label}</h3>
        <p>${stage.focus}</p>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <div class="muted">${pct}% de avance - ${openActions} acciones abiertas</div>
      </article>`;
  }).join("");
}

function phvaMaturityRows() {
  return phvaStages.map((stage) => {
    const items = requirements.filter((item) => stage.codes.includes(item.chapter));
    const score = items.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
    const pct = Math.round((score / items.length) * 100);
    const openActions = state.actions.filter((action) => stage.codes.includes((action.code || "").split(".")[0]) && action.status !== "cerrada");
    const pendingEvidence = items.filter((item) => evidencePackageForRequirement(item).score < 100).length;
    return {
      ...stage,
      pct,
      openActions: openActions.length,
      pendingEvidence,
      status: pct >= 75 ? "maduro" : pct >= 40 ? "en desarrollo" : "debil"
    };
  });
}

function renderPhvaMaturity() {
  const container = document.querySelector("#phvaMaturity");
  if (!container) return;
  const rows = phvaMaturityRows();
  const weakest = [...rows].sort((a, b) => a.pct - b.pct || b.openActions - a.openActions)[0];
  const average = Math.round(rows.reduce((sum, row) => sum + row.pct, 0) / rows.length);
  container.innerHTML = `
    <article class="phva-maturity-card">
      <div>
        <p class="eyebrow">Madurez PHVA</p>
        <h3>${average}% balance general</h3>
        <p>Fase mas debil: <strong>${weakest.label}</strong>. ${weakest.focus}</p>
      </div>
      <div class="phva-maturity-grid">
        ${rows.map((row) => `
          <div class="phva-maturity-item ${row.status === "debil" ? "weak" : row.status === "en desarrollo" ? "middle" : "ready"}">
            <span>${row.label}</span>
            <strong>${row.pct}%</strong>
            <small>${row.openActions} acciones - ${row.pendingEvidence} evidencias</small>
          </div>`).join("")}
      </div>
      <div class="row-actions">
        <button data-phva-weak-action type="button">Crear accion fase debil</button>
        <button class="secondary-button" data-phva-open-weak type="button">Abrir fase</button>
        <button class="secondary-button" data-phva-download type="button">Descargar madurez</button>
      </div>
    </article>`;
  container.querySelector("[data-phva-weak-action]")?.addEventListener("click", () => createPhvaWeakPhaseAction(weakest));
  container.querySelector("[data-phva-open-weak]")?.addEventListener("click", () => showView(weakest.id === "planear" ? "implementacion" : weakest.id === "hacer" ? "actividades" : weakest.id === "verificar" ? "revision" : "acciones"));
  container.querySelector("[data-phva-download]")?.addEventListener("click", downloadPhvaMaturityReport);
}

function phvaMaturityReportText() {
  const rows = phvaMaturityRows();
  const weakest = [...rows].sort((a, b) => a.pct - b.pct || b.openActions - a.openActions)[0];
  const average = Math.round(rows.reduce((sum, row) => sum + row.pct, 0) / rows.length);
  return [
    "REPORTE DE MADUREZ PHVA - SGSTA AGENT",
    "",
    `Organizacion: ${state.organizationName || state.orgName || "Mi empresa"}`,
    `Sistema: ${activeSystem().name}`,
    `Fecha: ${today()}`,
    `Balance general: ${average}%`,
    "",
    "Lectura del agente",
    `La fase mas debil es ${weakest.label} con ${weakest.pct}%. ${weakest.focus}`,
    "",
    "Detalle PHVA",
    ...rows.map((row) => [
      `${row.label} (${row.pct}% - ${row.status})`,
      `- Acciones abiertas: ${row.openActions}`,
      `- Evidencias pendientes: ${row.pendingEvidence}`,
      `- Requisitos/capitulos: ${row.codes.join(", ")}`
    ].join("\n")),
    "",
    "Recomendacion",
    `Crear o ejecutar acciones para fortalecer ${weakest.label}, cerrar evidencias pendientes y revisar eficacia antes de declarar cumplimiento.`,
    "",
    "Regla",
    "El agente puede diagnosticar y crear acciones de mejora. La direccion o responsable SGSTA debe aprobar cierres y cumplimiento."
  ].join("\n");
}

function downloadPhvaMaturityReport() {
  const blob = new Blob([phvaMaturityReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "reporte_madurez_phva_sgsta.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Reporte PHVA descargado",
    detail: "Se descargo el reporte de madurez PHVA del sistema.",
    code: "4.4",
    type: "madurez_phva",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createPhvaWeakPhaseAction(stage) {
  const title = `Fortalecer PHVA ${stage.label}`;
  if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
    addMessage("agent", `La accion para fortalecer ${stage.label} ya estaba abierta.`);
    return;
  }
  state.actions.unshift({
    title,
    code: stage.codes[0],
    status: "abierta",
    type: "mejora",
    origin: "madurez PHVA",
    priority: stage.pct < 40 ? "alta" : "media",
    responsible: state.ownerName || "Responsable SGSTA",
    dueDate: "",
    cause: `La fase ${stage.label} tiene ${stage.pct}% de madurez, ${stage.openActions} accion(es) abiertas y ${stage.pendingEvidence} evidencia(s) pendientes.`,
    immediateCorrection: "",
    followUp: "",
    efficacyVerification: "",
    efficacyStatus: "pendiente",
    createdAt: today()
  });
  recordAuditEvent({
    title: "Accion PHVA creada",
    detail: `Se creo accion para fortalecer la fase ${stage.label}.`,
    code: stage.codes[0],
    type: "madurez_phva",
    actor: "agente"
  });
  addMessage("agent", `Cree una accion para fortalecer ${stage.label}.`);
  saveState();
  renderAll();
}

function implementationStatus(step) {
  return step.check(state) ? "completo" : "pendiente";
}

function implementationProgress() {
  const completed = implementationSteps.filter((step) => step.check(state)).length;
  return {
    completed,
    total: implementationSteps.length,
    pct: Math.round((completed / implementationSteps.length) * 100)
  };
}

const implementationPhases = [
  { id: "base", label: "Arranque", steps: ["alcance", "actividades"], promise: "La empresa queda ubicada, con alcance y actividades reales." },
  { id: "operacion", label: "Operacion", steps: ["riesgos", "seguros", "personal", "capacitacion", "equipos", "participantes"], promise: "Cada actividad tiene riesgos, guias, equipos, seguros y condiciones." },
  { id: "evidencia", label: "Evidencia", steps: ["documentos", "auditoria", "revision"], promise: "El sistema deja soportes defendibles para auditoria y direccion." },
  { id: "mejora", label: "Mejora", steps: ["mejora"], promise: "Las brechas se cierran con acciones, evidencia y eficacia." }
];

function nextImplementationStep() {
  return implementationSteps.find((step) => !step.check(state)) || implementationSteps[implementationSteps.length - 1];
}

function implementationPhaseProgress(phase) {
  const steps = implementationSteps.filter((step) => phase.steps.includes(step.id));
  const completed = steps.filter((step) => step.check(state)).length;
  return {
    ...phase,
    completed,
    total: steps.length,
    pct: steps.length ? Math.round((completed / steps.length) * 100) : 0,
    next: steps.find((step) => !step.check(state)) || steps[steps.length - 1]
  };
}

function implementationWorkPlan() {
  const pendingSteps = implementationSteps.filter((step) => !step.check(state));
  const weeks = [
    {
      label: "Semana 1",
      title: "Base de la empresa",
      focus: ["alcance", "actividades", "riesgos"],
      objective: "Dejar claro donde opera la empresa, que actividades ofrece y cuales son sus riesgos iniciales."
    },
    {
      label: "Semana 2",
      title: "Controles operativos",
      focus: ["seguros", "personal", "capacitacion", "equipos", "participantes"],
      objective: "Verificar que cada actividad tenga guia, equipo, seguro y condiciones de participacion."
    },
    {
      label: "Semana 3",
      title: "Evidencias y documentos",
      focus: ["documentos", "auditoria"],
      objective: "Preparar documentos, formularios y evidencias que soportan los requisitos."
    },
    {
      label: "Semana 4",
      title: "Direccion y mejora",
      focus: ["revision", "mejora"],
      objective: "Revisar resultados con direccion y cerrar acciones con evidencia y eficacia."
    }
  ];
  return weeks.map((week) => {
    const steps = implementationSteps.filter((step) => week.focus.includes(step.id));
    const pending = steps.filter((step) => !step.check(state));
    return {
      ...week,
      steps,
      pending,
      pct: steps.length ? Math.round(((steps.length - pending.length) / steps.length) * 100) : 100,
      next: pending[0] || steps[0]
    };
  }).map((week) => ({
    ...week,
    isCurrent: week.pending.some((step) => pendingSteps[0]?.id === step.id)
  }));
}

function renderImplementationWorkPlan() {
  const weeks = implementationWorkPlan();
  return `
    <div class="work-plan-card">
      <div class="work-plan-head">
        <div>
          <p class="eyebrow">Plan 30 dias</p>
          <h3>Ruta para demostrar valor rapido</h3>
        </div>
        <button class="secondary-button" id="workPlanActions" type="button">Crear acciones</button>
      </div>
      <div class="work-plan-list">
        ${weeks.map((week) => `
          <article class="work-week ${week.isCurrent ? "active" : ""}">
            <div>
              <span class="badge ${week.pct >= 100 ? "cumple" : week.isCurrent ? "en_proceso" : "pendiente"}">${week.label}</span>
              <strong>${week.title}</strong>
            </div>
            <p>${week.objective}</p>
            <div class="progress"><span style="width:${week.pct}%"></span></div>
            <small>${week.pending.length ? `Pendiente: ${week.pending.map((step) => step.title).join(", ")}` : "Semana cubierta por los datos actuales."}</small>
          </article>`).join("")}
      </div>
    </div>`;
}

function renderImplementationRoadmap() {
  const container = document.querySelector("#implementationRoadmap");
  if (!container) return;
  const progress = implementationProgress();
  const next = nextImplementationStep();
  const phases = implementationPhases.map(implementationPhaseProgress);
  const currentPhase = phases.find((phase) => phase.pct < 100) || phases[phases.length - 1];
  container.innerHTML = `
    <div class="onboarding-card">
      <div>
        <p class="eyebrow">Hito MVP demostrable</p>
        <h3>Implementar una empresa real sin perderse en la norma</h3>
        <p>Avance general: ${progress.completed}/${progress.total} pasos. Ahora conviene trabajar: ${next.title}.</p>
      </div>
      <div class="onboarding-score">
        <strong>${progress.pct}%</strong>
        <span>${currentPhase.label}</span>
      </div>
      <div class="row-actions">
        <button class="secondary-button" id="roadmapOpenNext" type="button">Abrir paso</button>
        <button id="roadmapRunNext" type="button">Hacer con agente</button>
      </div>
    </div>
    <div class="phase-grid">
      ${phases.map((phase) => `
        <article class="phase-card ${phase.id === currentPhase.id ? "active" : ""}">
          <div class="phase-card-head">
            <strong>${phase.label}</strong>
            <span class="badge ${phase.pct >= 100 ? "cumple" : phase.id === currentPhase.id ? "en_proceso" : "pendiente"}">${phase.pct}%</span>
          </div>
          <div class="progress"><span style="width:${phase.pct}%"></span></div>
          <p>${phase.promise}</p>
          <small>${phase.completed}/${phase.total} pasos</small>
        </article>`).join("")}
    </div>`;
  document.querySelector("#roadmapOpenNext")?.addEventListener("click", () => showView(next.view));
  document.querySelector("#roadmapRunNext")?.addEventListener("click", () => handleImplementationStep(next));
}

function renderImplementation() {
  const container = document.querySelector("#implementationSteps");
  const progress = implementationProgress();
  renderImplementationRoadmap();
  container.innerHTML = `
    <div class="implementation-summary">
      <strong>${progress.pct}%</strong>
      <span>${progress.completed}/${progress.total} pasos completados</span>
      <div class="progress"><span style="width:${progress.pct}%"></span></div>
    </div>
    ${implementationSteps.map((step, index) => {
      const status = implementationStatus(step);
      return `
        <div class="step-row ${status}">
          <div class="step-index">${index + 1}</div>
          <div>
            <strong>${step.title}</strong>
            <div class="muted">${step.stage} - Requisito ${step.code}</div>
            <p>${step.outcome}</p>
          </div>
          <span class="badge ${status === "completo" ? "cumple" : "pendiente"}">${status}</span>
          <div class="row-actions">
            <button class="secondary-button" data-step-open="${step.id}" type="button">Abrir</button>
            <button data-step-action="${step.id}" type="button">Avanzar</button>
          </div>
        </div>`;
    }).join("")}`;

  container.querySelectorAll("[data-step-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = implementationSteps.find((item) => item.id === button.dataset.stepOpen);
      if (step?.view) showView(step.view);
    });
  });
  container.querySelectorAll("[data-step-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = implementationSteps.find((item) => item.id === button.dataset.stepAction);
      handleImplementationStep(step);
    });
  });

  const next = nextImplementationStep();
  document.querySelector("#implementationGuide").innerHTML = `
    <div class="guide-callout">
      <span class="badge en_proceso">${next.stage}</span>
      <h3>${next.title}</h3>
      <p>${next.outcome}</p>
      <p>Requisito relacionado: ${next.code}. El agente recomienda: ${next.action}.</p>
      <div class="row-actions">
        <button class="secondary-button" id="guideOpenModule" type="button">Abrir modulo</button>
        <button id="guidePrimaryAction" type="button">Avanzar con agente</button>
      </div>
    </div>
    ${renderImplementationWorkPlan()}`;
  document.querySelector("#guideOpenModule").addEventListener("click", () => showView(next.view));
  document.querySelector("#guidePrimaryAction").addEventListener("click", () => handleImplementationStep(next));
  document.querySelector("#workPlanActions")?.addEventListener("click", createImplementationWorkPlanActions);
}

function renderRequirements() {
  const container = document.querySelector("#requirementsTable");
  const summary = document.querySelector("#evidenceMatrixSummary");
  if (summary) {
    const totalScore = requirements.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
    const full = requirements.filter((item) => requirementCompletionScore(item.code) >= 1).length;
    const partial = requirements.filter((item) => {
      const score = requirementCompletionScore(item.code);
      return score > 0 && score < 1;
    }).length;
    const pending = requirements.length - full - partial;
    summary.innerHTML = `
      <div class="report-card"><span>Cumplimiento por evidencias</span><strong>${Math.round((totalScore / requirements.length) * 100)}%</strong></div>
      <div class="report-card"><span>Requisitos completos</span><strong>${full}</strong></div>
      <div class="report-card"><span>Requisitos parciales</span><strong>${partial}</strong></div>
      <div class="report-card"><span>Requisitos pendientes</span><strong>${pending}</strong></div>`;
  }
  renderGapClosureGuide();
  container.innerHTML = requirements.map((item) => {
    const manualValue = state.compliance[item.code] || "pendiente";
    const value = requirementCompletionStatus(item.code);
    const stats = requirementEvidenceStats(item.code);
    const score = Math.round(requirementCompletionScore(item.code) * 100);
    const openActions = state.actions.filter((action) => action.code === item.code && action.status !== "cerrada").length;
    return `
      <div class="requirement-row evidence-matrix-row">
        <div class="code">${item.code}</div>
        <div>
          <strong>${item.title}</strong>
          <div class="muted">Evidencia esperada: ${item.evidence}</div>
          <div class="matrix-metrics">
            <span>Formularios ${stats.formsApproved}/${stats.formsTotal}</span>
            <span>Por actividad ${stats.activityFormsApproved}/${stats.activityFormsTotal}</span>
            <span>Borradores ${stats.formsDraft}</span>
            <span>Evidencias ${stats.registeredEvidence}</span>
            <span>Sugeridas ${stats.suggestedEvidence}</span>
            <span>Acciones ${openActions}</span>
          </div>
        </div>
        <div class="coverage-progress">
          <div class="progress"><span style="width:${score}%"></span></div>
          <small>${score}% por formularios/evidencias</small>
        </div>
        <span class="badge ${value}">${labelStatus(value)}</span>
        <div class="row-actions">
          <button class="secondary-button" data-matrix-forms="${item.code}" type="button">Borradores</button>
          <button class="secondary-button" data-matrix-action="${item.code}" type="button">Accion</button>
          <button data-matrix-close-gap="${item.code}" type="button">Cerrar brecha</button>
        </div>
        <select data-code="${item.code}">${["pendiente", "en_proceso", "cumple", "parcial", "no_cumple", "no_aplica"].map((status) => `<option value="${status}" ${status === manualValue ? "selected" : ""}>${labelStatus(status)}</option>`).join("")}</select>
      </div>`;
  }).join("");
  container.querySelectorAll("[data-matrix-forms]").forEach((button) => {
    button.addEventListener("click", async () => {
      await fillRequirementForms(button.dataset.matrixForms);
    });
  });
  container.querySelectorAll("[data-matrix-action]").forEach((button) => {
    button.addEventListener("click", () => {
      createFormCoverageAction(button.dataset.matrixAction);
    });
  });
  container.querySelectorAll("[data-matrix-close-gap]").forEach((button) => {
    button.addEventListener("click", async () => {
      await closeRequirementGap(button.dataset.matrixCloseGap);
    });
  });
  container.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      state.compliance[select.dataset.code] = select.value;
      saveState();
      renderAll();
    });
  });
}

function closurePathForRequirement(code) {
  const req = requirements.find((item) => item.code === code);
  const stats = requirementEvidenceStats(code);
  const gap = buildRequirementGap(code);
  const actions = state.actions.filter((action) => action.code === code && action.status !== "cerrada");
  const score = Math.round(requirementCompletionScore(code) * 100);
  const steps = [];
  if (stats.formsPending > 0) steps.push(`Crear ${stats.formsPending} borrador(es) de formulario.`);
  if (stats.formsDraft > 0 || stats.activityFormsDraft > 0) steps.push("Revisar y aprobar los borradores preparados por el agente.");
  if (stats.registeredEvidence === 0) steps.push(stats.suggestedEvidence > 0 ? "Validar evidencia sugerida o adjuntar soporte real." : "Asociar evidencia del requisito.");
  if (actions.length > 0) steps.push(`Cerrar o actualizar ${actions.length} accion(es) abierta(s).`);
  if (!steps.length) steps.push("Verificar vigencia y mantener seguimiento.");
  return {
    code,
    title: req?.title || code,
    evidence: req?.evidence || "Evidencia por definir",
    score,
    gap,
    stats,
    actions,
    steps
  };
}

function renderGapClosureGuide() {
  const container = document.querySelector("#gapClosureGuide");
  if (!container) return;
  const items = requirements
    .map((item) => closurePathForRequirement(item.code))
    .filter((item) => item.score < 100)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);
  if (!items.length) {
    container.innerHTML = `
      <div class="gap-guide-card">
        <div>
          <p class="eyebrow">Ruta de cierre</p>
          <h3>Sistema sin brechas evidentes</h3>
          <p class="muted">Mantener revision periodica, vigencias y eficacia de acciones.</p>
        </div>
      </div>`;
    return;
  }
  container.innerHTML = `
    <div class="gap-guide-head">
      <div>
        <p class="eyebrow">Ruta de cierre guiada</p>
        <h3>Proximas brechas que debe cerrar el agente</h3>
      </div>
      <button id="prepareNextGap" type="button">Preparar primera brecha</button>
    </div>
    <div class="gap-guide-grid">
      ${items.map((item, index) => `
        <article class="gap-guide-card">
          <div class="gap-guide-title">
            <span class="code">${item.code}</span>
            <span class="badge ${item.score >= 50 ? "en_proceso" : "pendiente"}">${item.score}%</span>
          </div>
          <strong>${item.title}</strong>
          <p>${item.gap.title}</p>
          <div class="closure-detail">
            <strong>Camino sugerido:</strong>
            <ul>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ul>
          </div>
          <div class="matrix-metrics">
            <span>Formularios ${item.stats.formsApproved}/${item.stats.formsTotal}</span>
            <span>Actividad ${item.stats.activityFormsApproved}/${item.stats.activityFormsTotal}</span>
            <span>Acciones ${item.actions.length}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-gap-view="${item.code}" type="button">Ver</button>
            <button ${index === 0 ? "" : "class=\"secondary-button\""} data-gap-prepare="${item.code}" type="button">Preparar</button>
          </div>
        </article>`).join("")}
    </div>`;
  container.querySelector("#prepareNextGap")?.addEventListener("click", () => closeRequirementGap(items[0].code));
  container.querySelectorAll("[data-gap-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.formFilters.search = button.dataset.gapView;
      state.formFilters.status = "todos";
      showView("formularios");
      renderAll();
    });
  });
  container.querySelectorAll("[data-gap-prepare]").forEach((button) => {
    button.addEventListener("click", () => closeRequirementGap(button.dataset.gapPrepare));
  });
}

function nextStepsForClosurePackage(item) {
  const steps = [];
  if (item.formsCount > 0) steps.push("Revisar y aprobar formularios");
  if (item.actionTitle) steps.push("Asignar responsable y fecha limite");
  if (item.evidenceTitle) steps.push("Adjuntar soporte real o validar evidencia");
  if (!steps.length) steps.push("Verificar eficacia y vigencia");
  return steps;
}

function rememberClosurePackages(packages, summary = "") {
  const normalized = packages.map((item) => {
    const req = requirements.find((requirement) => requirement.code === item.code);
    const responses = item.responses || [];
    const forms = responses.map((response) => response.form || response.title || response.table).filter(Boolean);
    const evidenceTitle = item.evidence?.title || "";
    const actionTitle = item.action?.title || item.action?.actionTitle || "";
    const packageItem = {
      id: `pkg-${Date.now()}-${item.code}`,
      code: item.code,
      requirementTitle: req?.title || item.code,
      summary: item.summary || summary,
      forms,
      formsCount: forms.length,
      actionTitle,
      actionStatus: item.action?.status || "abierta",
      evidenceTitle,
      createdAt: new Date().toISOString()
    };
    packageItem.nextSteps = nextStepsForClosurePackage(packageItem);
    return packageItem;
  });
  state.closurePackages = [...normalized, ...(state.closurePackages || [])].slice(0, 12);
}

function renderClosurePackages() {
  const container = document.querySelector("#closurePackagesPanel");
  if (!container) return;
  const items = state.closurePackages || [];
  if (!items.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <div class="closure-heading">
      <div>
        <p class="eyebrow">Paquetes del agente</p>
        <h3>Ultimos cierres preparados</h3>
      </div>
      <span class="badge phva">${items.length}</span>
    </div>
    <div class="closure-grid">
      ${items.slice(0, 5).map((item) => `
        <article class="closure-card">
          <div class="closure-card-head">
            <span class="code">${item.code}</span>
            <strong>${item.requirementTitle}</strong>
          </div>
          <p class="muted">${item.summary}</p>
          <div class="matrix-metrics">
            <span>Formularios ${item.formsCount}</span>
            <span>Accion ${item.actionTitle ? item.actionStatus : "sin accion"}</span>
            <span>Evidencia ${item.evidenceTitle ? "sugerida" : "existente"}</span>
          </div>
          <div class="closure-detail">
            <strong>Debe revisar:</strong>
            <ul>
              ${item.nextSteps.map((step) => `<li>${step}</li>`).join("")}
            </ul>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-package-forms="${item.code}" type="button">Ver formularios</button>
            <button data-package-gap="${item.code}" type="button">Actualizar paquete</button>
          </div>
        </article>`).join("")}
    </div>`;
  container.querySelectorAll("[data-package-forms]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedFormTable = formCatalog.find((form) => getFormRequirement(form)?.code === button.dataset.packageForms)?.table || state.selectedFormTable;
      showView("formularios");
      renderAll();
    });
  });
  container.querySelectorAll("[data-package-gap]").forEach((button) => {
    button.addEventListener("click", async () => {
      await closeRequirementGap(button.dataset.packageGap);
    });
  });
}

function fillCompanyForm() {
  const fields = {
    companyLegalName: "legalName",
    companyNit: "nit",
    companyCountry: "country",
    companyRegion: "region",
    companyCity: "city",
    companyPhone: "phone",
    companyOperatingArea: "operatingArea",
    companyActivityDescription: "activityDescription",
    companyLocalContext: "localContext",
    companyScope: "scope",
    companyStakeholders: "stakeholders"
  };
  Object.entries(fields).forEach(([id, key]) => {
    const element = document.querySelector(`#${id}`);
    if (element && document.activeElement !== element) element.value = state.company[key] || "";
  });
}

function companyProfileGaps() {
  const gaps = [];
  if (!state.company.legalName) gaps.push("nombre legal");
  if (!state.company.city && !state.company.operatingArea) gaps.push("ubicacion/zona de operacion");
  if (!state.company.scope) gaps.push("alcance");
  if (!state.company.stakeholders) gaps.push("partes interesadas");
  if (!state.company.localContext) gaps.push("condiciones locales");
  if (!state.activities.length) gaps.push("actividades");
  const activitiesWithoutRisk = state.activities.filter((activity) => !state.risks.some((risk) => risk.activity === activity.name));
  const activitiesWithoutEquipment = state.activities.filter((activity) => !state.equipment.some((equipment) => equipment.activity === activity.name));
  const activitiesWithoutPolicy = state.activities.filter((activity) => !state.policies.some((policy) => policy.activity === activity.name || String(policy.coverage || "").toLowerCase().includes(String(activity.name).toLowerCase())));
  if (activitiesWithoutRisk.length) gaps.push(`riesgos por actividad: ${activitiesWithoutRisk.map((item) => item.name).join(", ")}`);
  if (activitiesWithoutEquipment.length) gaps.push(`equipos por actividad: ${activitiesWithoutEquipment.map((item) => item.name).join(", ")}`);
  if (activitiesWithoutPolicy.length) gaps.push(`seguros por actividad: ${activitiesWithoutPolicy.map((item) => item.name).join(", ")}`);
  return gaps;
}

function companyIntakeItems() {
  return [
    {
      id: "identidad",
      label: "Identidad",
      question: "Como se llama legalmente la empresa y quien responde por el SGSTA?",
      done: Boolean(state.company.legalName && state.ownerName),
      action: "Completar nombre legal y responsable SGSTA",
      view: "empresa",
      code: "4.1"
    },
    {
      id: "ubicacion",
      label: "Ubicacion",
      question: "En que municipio, zona o ruta opera y que condiciones locales afectan la seguridad?",
      done: Boolean((state.company.city || state.company.operatingArea) && state.company.localContext),
      action: "Completar ubicacion, zona de operacion y contexto local",
      view: "empresa",
      code: "4.1"
    },
    {
      id: "actividades",
      label: "Actividades",
      question: "Que actividades vende realmente: senderismo, rafting, cuatrimotos u otras?",
      done: state.activities.length > 0,
      action: "Registrar actividades reales del cliente",
      view: "actividades",
      code: "8.1"
    },
    {
      id: "alcance",
      label: "Alcance",
      question: "Que actividades, sedes, rutas y servicios quedan dentro del sistema de gestion?",
      done: Boolean(state.company.scope),
      action: "Definir alcance del SGSTA",
      view: "empresa",
      code: "4.3"
    },
    {
      id: "partes",
      label: "Interesados",
      question: "Quienes se afectan o participan: clientes, guias, proveedores, autoridades y comunidad?",
      done: Boolean(state.company.stakeholders),
      action: "Definir partes interesadas",
      view: "empresa",
      code: "4.2"
    },
    {
      id: "controles",
      label: "Controles",
      question: "Cada actividad tiene riesgos, guia, equipo, seguro y condiciones para participantes?",
      done: state.activities.length > 0 && companyProfileGaps().filter((gap) => gap.includes("por actividad")).length === 0,
      action: "Completar controles por actividad",
      view: "brechas_actividad",
      code: "8.1"
    }
  ];
}

function companyIntakeText() {
  const items = companyIntakeItems();
  const completed = items.filter((item) => item.done).length;
  const activityRows = companyActivityIntakeRows();
  return [
    "Guia de entrevista inicial - SGSTA Agent",
    "",
    `Empresa: ${state.company.legalName || state.orgName || "Por definir"}`,
    `Responsable: ${state.ownerName || "Por definir"}`,
    `Estado: ${completed}/${items.length} bloques completos.`,
    "",
    "Preguntas para levantar informacion:",
    ...items.map((item) => `- ${item.done ? "[listo]" : "[preguntar]"} ${item.label}: ${item.question}`),
    "",
    "Datos minimos por actividad:",
    ...(activityRows.length ? activityRows.flatMap((row) => [
      `- ${row.name}: ${row.completed}/${row.total} datos (${row.pct}%).`,
      `  Faltan: ${row.missing.length ? row.missing.join(", ") : "sin faltantes principales"}.`,
      `  Acciones abiertas relacionadas: ${row.openActions}, altas: ${row.highActions}.`,
      `  Preguntar: ${row.nextQuestion}`
    ]) : ["- Registrar al menos una actividad real para evaluar datos minimos."]),
    "",
    "Notas para el consultor/agente:",
    "Usar respuestas simples, con lenguaje del operador. Luego el agente convierte la informacion en alcance, contexto, riesgos, actividades, evidencias y acciones PHVA."
  ].join("\n");
}

function companyActivityIntakeRows() {
  return state.activities.map((activity) => {
    const name = activity.name || activity.activity || "Actividad sin nombre";
    const openActions = state.actions.filter((action) => action.status !== "cerrada" && action.relatedActivity === name);
    const checks = [
      { key: "ruta/lugar", ok: Boolean(activity.place), question: "Donde se realiza la actividad y cual es la ruta/zona exacta?" },
      { key: "guia responsable", ok: Boolean(activity.leader) && state.people.some((person) => person.activity === name || person.name === activity.leader), question: "Quien es el guia responsable y que competencia/certificado tiene?" },
      { key: "riesgos", ok: state.risks.some((risk) => risk.activity === name), question: "Que peligros principales tiene esta actividad y que controles usa la empresa?" },
      { key: "equipos", ok: state.equipment.some((equipment) => equipment.activity === name), question: "Que equipos se usan y como se inspeccionan/mantienen?" },
      { key: "seguro", ok: state.policies.some((policy) => policy.activity === name || String(policy.coverage || "").toLowerCase().includes(name.toLowerCase())), question: "La poliza cubre esta actividad especificamente?" },
      { key: "participantes", ok: state.participantEvidence.some((item) => item.activity === name), question: "Que consentimiento, condiciones de participacion o formulario externo se usa?" },
      { key: "condiciones", ok: Boolean(activity.conditions && activity.participantRequirements), question: "Que condiciones de operacion y participacion deben comunicarse?" }
    ];
    const missing = checks.filter((item) => !item.ok);
    const completed = checks.length - missing.length;
    return {
      name,
      status: activity.status || "activa",
      completed,
      total: checks.length,
      pct: Math.round((completed / checks.length) * 100),
      missing: missing.map((item) => item.key),
      openActions: openActions.length,
      highActions: openActions.filter((action) => action.priority === "alta").length,
      nextQuestion: missing[0]?.question || "Validar evidencias y mantener datos actualizados antes de operar.",
      badge: completed === checks.length ? "cumple" : missing.length >= 3 ? "no_cumple" : "en_proceso"
    };
  });
}

function downloadCompanyIntakeGuide() {
  const blob = new Blob([companyIntakeText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "guia_entrevista_inicial_sgsta.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Guia de entrevista descargada",
    detail: "Se descargo la guia de levantamiento inicial de empresa.",
    code: "4.1",
    type: "perfil_empresa",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function companyImplementationPackageText() {
  const activityRows = companyActivityIntakeRows();
  const openActions = state.actions.filter((action) => action.status !== "cerrada");
  return [
    "PAQUETE INICIAL DE IMPLEMENTACION SGSTA",
    "",
    `Organizacion: ${state.company.legalName || state.orgName || "Por definir"}`,
    `Sistema: ${activeSystem().name} (${activeSystem().code})`,
    `Fecha: ${today()}`,
    `Responsable: ${state.ownerName || "Por definir"}`,
    "",
    "1. Perfil de implementacion",
    buildCompanyImplementationProfile(),
    "",
    "2. Entrevista inicial",
    companyIntakeText(),
    "",
    "3. Estado por actividad",
    ...(activityRows.length ? activityRows.flatMap((row) => [
      `${row.name}`,
      `- Avance datos minimos: ${row.completed}/${row.total} (${row.pct}%).`,
      `- Faltantes: ${row.missing.length ? row.missing.join(", ") : "sin faltantes principales"}.`,
      `- Acciones abiertas: ${row.openActions}; altas: ${row.highActions}.`,
      `- Proxima pregunta: ${row.nextQuestion}`
    ]) : ["- Sin actividades registradas."]),
    "",
    "4. Acciones abiertas relacionadas",
    ...(openActions.length ? openActions.slice(0, 20).map((action, index) => [
      `${index + 1}. ${action.title}`,
      `   Requisito: ${action.code || "N/A"} | Tipo: ${action.type || "tarea"} | Prioridad: ${action.priority || "media"}`,
      `   Actividad: ${action.relatedActivity || "General"} | Responsable: ${action.responsible || "por asignar"}`,
      `   Origen: ${action.origin || "agente"}`
    ].join("\n")) : ["- No hay acciones abiertas."]),
    "",
    "5. Proximo hito recomendado",
    "- Completar datos minimos por actividad.",
    "- Generar o aprobar formularios/evidencias para requisitos 4 a 10.",
    "- Preparar revision por direccion 9.3 con brechas, acciones, riesgos y recursos.",
    "- Probar el flujo con una empresa piloto real y registrar observaciones.",
    "",
    "Regla de gobierno",
    "Este paquete es un borrador operativo. El agente ayuda a implementar y mantener, pero la empresa aprueba documentos, decisiones, cierres y cumplimiento."
  ].join("\n");
}

function downloadCompanyImplementationPackage() {
  const blob = new Blob([companyImplementationPackageText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "paquete_inicial_implementacion_sgsta.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Paquete inicial de implementacion descargado",
    detail: "Se descargo perfil, entrevista, datos por actividad y acciones abiertas para iniciar implementacion SGSTA.",
    code: "4.4",
    type: "perfil_empresa",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createCompanyIntakeActions() {
  const pending = companyIntakeItems().filter((item) => !item.done);
  let created = 0;
  pending.forEach((item) => {
    const title = `Entrevista inicial: ${item.action}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: item.code,
      status: "abierta",
      type: "tarea",
      origin: "perfil empresa",
      priority: item.id === "identidad" || item.id === "actividades" ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: item.question,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      createdAt: today()
    });
    created += 1;
  });
  recordAuditEvent({
    title: "Acciones de entrevista creadas",
    detail: `Se crearon ${created} accion(es) para completar la informacion inicial de empresa.`,
    code: "4.1",
    type: "perfil_empresa",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) para completar la entrevista inicial.` : "La entrevista inicial ya tenia acciones abiertas para sus pendientes.");
  saveState();
  renderAll();
}

function renderCompanyIntakeGuide() {
  const container = document.querySelector("#companyIntakeGuide");
  if (!container) return;
  const items = companyIntakeItems();
  const activityRows = companyActivityIntakeRows();
  const completed = items.filter((item) => item.done).length;
  const pct = Math.round((completed / items.length) * 100);
  const next = items.find((item) => !item.done) || items[items.length - 1];
  container.innerHTML = `
    <article class="company-intake-card">
      <div class="company-intake-head">
        <div>
          <p class="eyebrow">Entrevista inicial</p>
          <h3>Levantar datos sin volverlo tramite</h3>
          <p>El agente necesita esta base para generar documentos, formularios, riesgos y evidencias con contexto real.</p>
        </div>
        <div class="pilot-score">
          <strong>${pct}%</strong>
          <span>${completed}/${items.length} listo</span>
        </div>
      </div>
      <div class="company-intake-next">
        <span class="badge ${next.done ? "cumple" : "pendiente"}">${next.done ? "listo" : "siguiente"}</span>
        <strong>${next.label}</strong>
        <p>${next.question}</p>
      </div>
      <div class="company-intake-grid">
        ${items.map((item) => `
          <button class="intake-chip ${item.done ? "done" : ""}" data-intake-open="${item.view}" type="button">
            <span>${item.done ? "ok" : "falta"}</span>
            ${item.label}
          </button>`).join("")}
      </div>
      <div class="activity-intake-panel">
        <div class="activity-intake-head">
          <div>
            <p class="eyebrow">Datos por actividad</p>
            <strong>Minimo para que el agente gestione riesgos, guias, equipos, seguros y participantes</strong>
          </div>
          <span class="badge ${activityRows.every((row) => row.pct === 100) ? "cumple" : "en_proceso"}">${activityRows.filter((row) => row.pct === 100).length}/${activityRows.length || 0} completas</span>
        </div>
        <div class="activity-intake-list">
          ${activityRows.length ? activityRows.map((row) => `
            <article class="activity-intake-item ${row.badge}">
              <div>
                <span class="badge ${row.badge}">${row.pct}%</span>
                <strong>${escapeHtml(row.name)}</strong>
                <p>Faltan: ${escapeHtml(row.missing.length ? row.missing.join(", ") : "sin faltantes principales")}</p>
                <p>Acciones abiertas: ${row.openActions}${row.highActions ? ` (${row.highActions} alta)` : ""}</p>
                <small>${escapeHtml(row.nextQuestion)}</small>
              </div>
              <div class="activity-intake-actions">
                <button class="secondary-button" data-intake-open="actividades" type="button">Abrir</button>
                <button class="secondary-button" data-intake-activity-actions="${escapeHtml(row.name)}" type="button" ${row.pct === 100 ? "disabled" : ""}>Crear acciones</button>
              </div>
            </article>`).join("") : `<div class="empty-state">Registra actividades reales para ver el checklist por actividad.</div>`}
        </div>
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-intake-download type="button">Descargar entrevista</button>
        <button class="secondary-button" data-intake-package type="button">Descargar paquete inicial</button>
        <button data-intake-actions type="button">Crear acciones</button>
      </div>
    </article>`;
  container.querySelectorAll("[data-intake-open]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.intakeOpen));
  });
  container.querySelector("[data-intake-download]")?.addEventListener("click", downloadCompanyIntakeGuide);
  container.querySelector("[data-intake-package]")?.addEventListener("click", downloadCompanyImplementationPackage);
  container.querySelector("[data-intake-actions]")?.addEventListener("click", createCompanyIntakeActions);
  container.querySelectorAll("[data-intake-activity-actions]").forEach((button) => {
    button.addEventListener("click", () => createActivityIntakeActions(button.dataset.intakeActivityActions));
  });
}

function buildCompanyImplementationProfile() {
  const org = state.company.legalName || state.orgName || "Organizacion por definir";
  const location = [state.company.city, state.company.region, state.company.country].filter(Boolean).join(", ") || state.company.operatingArea || "Ubicacion por definir";
  const activities = state.activities.map((activity) => {
    const related = activityRelatedItems(activity.name);
    const highRisks = related.risks.filter((risk) => riskLevel(risk) >= 12).map((risk) => risk.title);
    return `- ${activity.name}: ${activity.place || "lugar por definir"}. Lider: ${activity.leader || "por definir"}. Riesgos: ${related.risks.length}; equipos: ${related.equipment.length}; guias/personas: ${related.people.length}; seguros: ${related.policies.length}; participantes/evidencias: ${related.participants.length}. ${highRisks.length ? `Riesgos altos: ${highRisks.join(", ")}.` : ""}`;
  }).join("\n") || "- Actividades por definir.";
  const gaps = companyProfileGaps();
  return `PERFIL DE IMPLEMENTACION SGSTA\n\nOrganizacion: ${org}\nUbicacion/zona: ${location}\nAlcance: ${state.company.scope || "Pendiente de definir"}\nPartes interesadas: ${state.company.stakeholders || "Pendientes de definir"}\nContexto local: ${state.company.localContext || "Pendiente de documentar"}\nActividades declaradas: ${state.company.activityDescription || "Pendientes de describir"}\n\nActividades operativas:\n${activities}\n\nDatos faltantes para que el agente trabaje mejor:\n${gaps.length ? gaps.map((gap) => `- ${gap}`).join("\n") : "- No hay faltantes principales visibles."}\n\nUso del agente:\nEste perfil debe alimentar borradores, formularios, matriz de riesgos, plan de capacitacion, revision por direccion y paquetes de evidencia. La aprobacion final siempre es humana.`;
}

function renderCompanyImplementationProfile() {
  const container = document.querySelector("#companyImplementationProfile");
  if (!container) return;
  const profile = state.company.profileSummary || buildCompanyImplementationProfile();
  const gaps = companyProfileGaps();
  container.innerHTML = `
    <div class="company-profile-head">
      <div>
        <p class="eyebrow">Contexto del agente</p>
        <h3>Perfil de implementacion</h3>
      </div>
      <span class="badge ${gaps.length ? "en_proceso" : "cumple"}">${gaps.length ? `${gaps.length} dato(s) faltan` : "completo"}</span>
    </div>
    <pre>${escapeHtml(profile)}</pre>
    <div class="row-actions">
      <button class="secondary-button" data-company-profile-action="evidence" type="button">Enviar a evidencias</button>
      <button data-company-profile-action="forms" type="button">Usar en formularios</button>
    </div>`;
  container.querySelector("[data-company-profile-action='evidence']")?.addEventListener("click", () => {
    addEvidenceRecord({
      title: "Perfil de implementacion SGSTA",
      code: "4.1",
      source: "perfil agente",
      status: "sugerida",
      content: state.company.profileSummary || profile
    });
    addMessage("agent", "Asocie el perfil de implementacion como evidencia sugerida del contexto de la organizacion.");
  });
  container.querySelector("[data-company-profile-action='forms']")?.addEventListener("click", async () => {
    await fillRequirementForms("4.1");
    await fillRequirementForms("4.2");
    await fillRequirementForms("4.3");
    showView("formularios");
  });
}

function generateCompanyImplementationProfile(options = {}) {
  state.company.profileSummary = buildCompanyImplementationProfile();
  state.compliance["4.1"] = "en_proceso";
  state.compliance["4.2"] = state.company.stakeholders ? "en_proceso" : "pendiente";
  state.compliance["4.3"] = state.company.scope ? "en_proceso" : "pendiente";
  recordAuditEvent({
    title: "Perfil de implementacion actualizado",
    detail: "El agente consolido empresa, ubicacion, actividades, riesgos y faltantes para alimentar el SGSTA.",
    code: "4.1",
    type: "perfil_empresa",
    actor: "agente"
  });
  if (!options.silent) {
    addMessage("agent", "Actualice el perfil de implementacion. Lo usare como contexto para formularios, documentos, riesgos y revision por direccion.");
    saveState();
    renderAll();
  }
  return state.company.profileSummary;
}

function primaryActivityName() {
  return state.selectedActivityName || state.activities[0]?.name || "Actividad por definir";
}

function itemActivityName(item) {
  return item?.activity || item?.activityName || item?.actividad || "General";
}

function activityRelatedItems(activityName) {
  const match = (item) => itemActivityName(item) === activityName;
  return {
    risks: state.risks.filter(match),
    equipment: state.equipment.filter(match),
    people: state.people.filter(match),
    training: state.trainingNeeds.filter(match),
    policies: state.policies.filter(match),
    participants: state.participantEvidence.filter(match)
  };
}

function activityControlStatus(activityName) {
  const related = activityRelatedItems(activityName);
  return {
    guide: related.people.some((person) => person.competence === "cumple"),
    risks: related.risks.length > 0,
    equipment: related.equipment.length > 0 && related.equipment.every((item) => item.status === "operativo"),
    participants: participantActivityInformationIsComplete(activityName),
    insurance: related.policies.some(policyIsComplete),
    training: related.training.length > 0
  };
}

function participantActivityInformationCoverage(activityName) {
  const evidences = state.participantEvidence.filter((item) => itemActivityName(item) === activityName && participantEvidenceIsComplete(item));
  return {
    before: evidences.some((item) => (item.phase || "antes") === "antes"),
    during: evidences.some((item) => item.phase === "durante"),
    after: evidences.some((item) => item.phase === "despues")
  };
}

function participantActivityInformationIsComplete(activityName) {
  const coverage = participantActivityInformationCoverage(activityName);
  return coverage.before && coverage.during && coverage.after;
}

function participantActivityGapReason(activityName, evidences) {
  const coverage = participantActivityInformationCoverage(activityName);
  const missingPhases = [];
  if (!coverage.before) missingPhases.push("informacion antes de la actividad");
  if (!coverage.during) missingPhases.push("informacion durante la actividad");
  if (!coverage.after) missingPhases.push("informacion despues de la actividad");
  const incomplete = evidences.filter((item) => !participantEvidenceIsComplete(item)).map(participantGapReason);
  const messages = [];
  if (missingPhases.length) messages.push(`Falta evidencia de ${missingPhases.join(", ")} segun ISO 21103.`);
  if (incomplete.length) messages.push(incomplete.join(" "));
  return messages.length ? messages.join(" ") : "Informacion al participante completa para antes, durante y despues.";
}

function participantEvidenceIsComplete(item) {
  const consentOk = ["recibido", "aprobado"].includes(String(item.consent || "").toLowerCase());
  const statusOk = ["recibida", "aprobada"].includes(String(item.status || "").toLowerCase());
  const supportOk = item.link || item.evidence || item.document;
  const communicationOk = item.infoProvided || item.communicationNotes || item.participantInfoRequested;
  return consentOk && statusOk && supportOk && communicationOk;
}

function participantGapReason(item) {
  const missing = [];
  const consent = String(item.consent || "").toLowerCase();
  const status = String(item.status || "").toLowerCase();
  if (!["recibido", "aprobado"].includes(consent)) missing.push("consentimiento");
  if (!["recibida", "aprobada"].includes(status)) missing.push("estado recibido/aprobado");
  if (!item.link && !item.evidence && !item.document) missing.push("enlace o soporte externo");
  if (!item.kind) missing.push("tipo de soporte");
  if (!item.infoProvided && !item.communicationNotes && !item.participantInfoRequested) missing.push("informacion comunicada ISO 21103");
  return missing.length ? `Falta ${missing.join(", ")}.` : "Evidencia externa completa.";
}

function policyIsComplete(policy) {
  const dueOk = policy.due && !String(policy.due).toLowerCase().includes("por ");
  const coverageOk = policy.coverage && !String(policy.coverage).toLowerCase().includes("por definir");
  const supportOk = policy.document || policy.evidence;
  return policy.status === "vigente" && dueOk && coverageOk && supportOk;
}

function policyGapReason(policy) {
  const missing = [];
  if (policy.status !== "vigente") missing.push("estado vigente");
  if (!policy.due || String(policy.due).toLowerCase().includes("por ")) missing.push("vigencia");
  if (!policy.coverage || String(policy.coverage).toLowerCase().includes("por definir")) missing.push("cobertura");
  if (!policy.document && !policy.evidence) missing.push("documento soporte");
  return missing.length ? `Falta ${missing.join(", ")}.` : "Cobertura completa.";
}

function controlBadge(ok, label) {
  return `<span class="badge ${ok ? "cumple" : "no_cumple"}">${label}</span>`;
}

function activityOperationDecision(readiness) {
  if (readiness.status === "lista") {
    return {
      label: "Lista para ofertar",
      badge: "cumple",
      summary: "La actividad tiene los controles minimos para operar. Mantener vigencias y evidencias al dia."
    };
  }
  if (readiness.high > 0) {
    return {
      label: "No ofertar todavia",
      badge: "no_cumple",
      summary: "Hay brechas criticas. Cierre riesgos, guia, equipos o seguro antes de vender u operar."
    };
  }
  return {
    label: "Operar con revision",
    badge: "en_proceso",
    summary: "Puede avanzar en preparacion, pero faltan soportes o aprobaciones antes de dejarla cerrada."
  };
}

function activityOperatingPackage(activityName) {
  const stats = activityFormStats(activityName);
  const forms = activityPackageTables.map((table) => {
    const form = visibleCatalogForms(window.formCatalog || []).find((item) => item.table === table);
    const response = formResponseForActivity(table, activityName);
    const status = normalizedFormStatus(response?.status);
    return {
      table,
      title: form?.title || table,
      status,
      ready: status === "aprobado"
    };
  });
  const evidence = state.evidence.filter((item) => item.activity === activityName || item.linkedActivity === activityName);
  return {
    forms,
    evidence,
    approved: stats.approved,
    total: stats.total,
    ready: stats.approved === stats.total && evidence.some((item) => item.status === "registrada")
  };
}

function activityDepartureChecklist(activityName) {
  const related = activityRelatedItems(activityName);
  const controls = activityControlStatus(activityName);
  const stats = activityFormStats(activityName);
  const hasEmergencyPlan = Boolean(formResponseForActivity("plan_emergencia", activityName));
  const hasHighRiskOpen = related.risks.some((risk) => riskLevel(risk) >= 12);
  return [
    {
      key: "guide",
      label: "Guia competente asignado",
      ok: controls.guide,
      detail: controls.guide ? "Guia/persona competente asociado a la actividad." : "Falta guia competente o evidencia de competencia."
    },
    {
      key: "risk",
      label: "Riesgos revisados",
      ok: controls.risks && !hasHighRiskOpen,
      detail: !controls.risks ? "Falta matriz de riesgos de la actividad." : hasHighRiskOpen ? "Hay riesgo alto que requiere tratamiento." : "Riesgos registrados sin alerta alta."
    },
    {
      key: "equipment",
      label: "Equipos listos",
      ok: controls.equipment,
      detail: controls.equipment ? "Equipos operativos asociados." : "Falta equipo operativo, inspeccion o mantenimiento."
    },
    {
      key: "insurance",
      label: "Seguro vigente",
      ok: controls.insurance,
      detail: controls.insurance ? "Poliza vigente con soporte." : "Falta cobertura vigente o documento soporte."
    },
    {
      key: "participants",
      label: "Participantes informados",
      ok: controls.participants,
      detail: controls.participants ? "Informacion/consentimiento externo cubre antes, durante y despues." : "Falta evidencia ISO 21103 de informacion o consentimiento."
    },
    {
      key: "emergency",
      label: "Plan de emergencia",
      ok: hasEmergencyPlan,
      detail: hasEmergencyPlan ? "Plan de emergencia preparado para la actividad." : "Falta formulario/plan de emergencia de la actividad."
    },
    {
      key: "forms",
      label: "Paquete documental",
      ok: stats.approved === stats.total,
      detail: stats.approved === stats.total ? "Formularios operativos aprobados." : `${stats.pending + stats.draft} formulario(s) pendientes de aprobar o preparar.`
    }
  ];
}

function activityOperationalPackageText(activityName) {
  const activity = state.activities.find((item) => item.name === activityName) || { name: activityName };
  const related = activityRelatedItems(activityName);
  const readiness = activityReadiness(activityName);
  const decision = activityOperationDecision(readiness);
  const checklist = activityDepartureChecklist(activityName);
  const packageData = activityOperatingPackage(activityName);
  const openActions = state.actions.filter((item) => item.status !== "cerrada" && item.relatedActivity === activityName);
  return [
    `FICHA OPERATIVA DE ACTIVIDAD - ${activity.name}`,
    "",
    `Organizacion: ${state.organizationName || "Mi empresa"}`,
    `Sistema: ISO 21101 Turismo aventura`,
    `Fecha: ${today()}`,
    `Responsable SGSTA: ${state.ownerName || "Responsable SGSTA"}`,
    "",
    "1. Datos de la actividad",
    `Lugar/ruta: ${activity.place || "por definir"}`,
    `Guia responsable: ${activity.leader || "por definir"}`,
    `Estado: ${activity.status || "revision"}`,
    `Condiciones de operacion: ${activity.conditions || "por definir"}`,
    `Condiciones de participacion: ${activity.participantRequirements || "por definir"}`,
    "",
    "2. Decision operativa",
    `Resultado: ${decision.label}`,
    `Preparacion: ${readiness.score}%`,
    `Brechas: ${readiness.gaps.length}; criticas: ${readiness.high}`,
    `Criterio: ${decision.summary}`,
    "",
    "3. Lista antes de salir",
    ...checklist.map((item) => `- ${item.ok ? "OK" : "FALTA"} | ${item.label} | Requisito ${departureRequirementByKey(item.key)} | ${item.detail}`),
    "",
    "4. Paquete documental",
    ...packageData.forms.map((item) => `- ${item.ready ? "OK" : "PENDIENTE"} | ${item.title} | Estado: ${item.status}`),
    "",
    "5. Soportes por actividad",
    `Riesgos: ${related.risks.map((item) => item.title).join(", ") || "sin riesgos especificos"}`,
    `Equipos: ${related.equipment.map((item) => `${item.name} (${item.status})`).join(", ") || "sin equipos asociados"}`,
    `Guias/personal: ${related.people.map((item) => `${item.name} (${item.competence})`).join(", ") || "sin personal asociado"}`,
    `Seguros: ${related.policies.map((item) => `${item.number || item.insurer} (${item.status})`).join(", ") || "sin poliza asociada"}`,
    `Participantes/evidencias externas: ${related.participants.length || 0}`,
    "",
    "6. Acciones abiertas",
    ...(openActions.length ? openActions.map((item) => `- ${item.priority || "media"} | ${item.code || "sin requisito"} | ${item.title}`) : ["- Sin acciones abiertas asociadas a esta actividad."]),
    "",
    "7. Regla del agente",
    "El agente puede preparar borradores, detectar brechas y crear acciones. La aprobacion final, la autorizacion para operar y el cierre de acciones criticas son humanos."
  ].join("\n");
}

function departureRequirementByKey(key) {
  return {
    guide: "7.2",
    risk: "6.1.2",
    equipment: "7.1/8.1",
    insurance: "6.1.3",
    participants: "7.4.3 / ISO 21103",
    emergency: "8.2",
    forms: "7.5"
  }[key] || "8.1";
}

function downloadActivityOperationalPackage(activityName) {
  const blob = new Blob([activityOperationalPackageText(activityName)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = String(activityName || "actividad").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  link.href = url;
  link.download = `ficha_operativa_${safeName || "actividad"}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Ficha operativa descargada",
    detail: `Se descargo la ficha operativa de ${activityName}.`,
    code: "8.1",
    type: "actividad",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function departureChecklistActionPayload(activityName, item) {
  const codeByKey = {
    guide: "7.2",
    risk: "6.1.2",
    equipment: "7.1",
    insurance: "6.1.3",
    participants: "7.4.3",
    emergency: "8.2",
    forms: "7.5"
  };
  return {
    title: `Resolver antes de salir: ${item.label} - ${activityName}`,
    code: codeByKey[item.key] || "8.1",
    status: "abierta",
    type: item.key === "risk" || item.key === "insurance" || item.key === "equipment" ? "preventiva" : "tarea",
    origin: "lista antes de salir",
    priority: ["risk", "equipment", "insurance", "guide"].includes(item.key) ? "alta" : "media",
    responsible: state.ownerName || "Responsable SGSTA",
    dueDate: "",
    cause: item.detail,
    immediateCorrection: "",
    followUp: "",
    evidence: "",
    efficacyVerification: "",
    efficacyStatus: "pendiente",
    relatedActivity: activityName,
    sourceDetail: `Antes de salir: ${item.label}`,
    departureKey: item.key,
    createdAt: today()
  };
}

function createDepartureChecklistActions(activityName) {
  let created = 0;
  activityDepartureChecklist(activityName).filter((item) => !item.ok).forEach((item) => {
    const exists = state.actions.some((action) => action.status !== "cerrada" && action.relatedActivity === activityName && action.departureKey === item.key);
    if (!exists) {
      state.actions.unshift(departureChecklistActionPayload(activityName, item));
      created += 1;
    }
  });
  addMessage("agent", created ? `Cree ${created} accion(es) desde la lista antes de salir de ${activityName}.` : `No cree acciones nuevas: la lista antes de salir de ${activityName} ya tenia acciones abiertas.`);
  saveState();
  renderAll();
}

const activityPackageTables = [
  "contexto_actividades",
  "mapa_riesgos",
  "procedimientos_servicio",
  "equipos",
  "plan_emergencia",
  "registro_participantes_evidencia"
];

function formResponseForActivity(table, activityName) {
  return state.formResponses.find((item) => item.table === table && (item.activity === activityName || item.values?.actividad === activityName || item.values?.nombre_actividad === activityName || item.values?.id_actividad === activityName));
}

function activityFormStats(activityName) {
  const responses = activityPackageTables.map((table) => formResponseForActivity(table, activityName)).filter(Boolean);
  return {
    total: activityPackageTables.length,
    responses,
    draft: responses.filter((item) => ["borrador", "revision"].includes(normalizedFormStatus(item.status))).length,
    approved: responses.filter((item) => normalizedFormStatus(item.status) === "aprobado").length,
    pending: activityPackageTables.length - responses.length,
    evidence: state.evidence.filter((item) => item.activity === activityName || item.linkedActivity === activityName)
  };
}

function activityGapItems(activityName) {
  const related = activityRelatedItems(activityName);
  const stats = activityFormStats(activityName);
  const controls = activityControlStatus(activityName);
  const highRisks = related.risks.filter((risk) => riskLevel(risk) >= 12);
  const equipmentPending = related.equipment.filter((item) => item.status !== "operativo" || !item.nextCheck || String(item.nextCheck).toLowerCase().includes("por "));
  const peoplePending = related.people.filter((person) => person.competence !== "cumple" || !person.training || String(person.training).toLowerCase().includes("pendiente") || !person.evidence || !person.certificateDue);
  const trainingPending = related.training.filter((item) => item.status !== "cerrada" && item.status !== "realizada");
  const policiesPending = related.policies.filter((policy) => !policyIsComplete(policy));
  const participantsPending = related.participants.filter((item) => !participantEvidenceIsComplete(item));
  const gaps = [];
  if (!controls.risks) gaps.push({ key: "risks", code: "6.1.2", severity: "alta", label: "Riesgos", detail: "No hay matriz de riesgos especifica para la actividad.", action: `Completar matriz de riesgos de ${activityName}` });
  if (highRisks.length) gaps.push({ key: "high_risks", code: "6.1.2", severity: "alta", label: "Riesgos altos", detail: `${highRisks.length} riesgo(s) alto(s) requieren tratamiento preventivo.`, action: `Definir tratamiento de riesgos altos de ${activityName}` });
  if (!controls.equipment) gaps.push({ key: "equipment", code: "7.1", severity: "alta", label: "Equipos", detail: equipmentPending.length ? `${equipmentPending.length} equipo(s) sin estado operativo, revision o evidencia completa.` : "No hay equipos especificos asociados a la actividad.", action: `Cerrar control de equipos de ${activityName}` });
  if (!controls.guide) gaps.push({ key: "guide", code: "7.2", severity: "alta", label: "Guia competente", detail: peoplePending.length ? `${peoplePending.length} persona(s) sin competencia, certificado o evidencia vigente.` : "No hay guia competente asociado a la actividad.", action: `Cerrar competencia de guias de ${activityName}` });
  if (!controls.training) gaps.push({ key: "training", code: "7.2", severity: "media", label: "Capacitacion", detail: trainingPending.length ? `${trainingPending.length} necesidad(es) de capacitacion siguen abiertas.` : "No hay capacitaciones o necesidades asociadas a la actividad.", action: `Programar capacitacion para ${activityName}` });
  if (!controls.insurance) gaps.push({ key: "insurance", code: "6.1.3", severity: "alta", label: "Seguro", detail: policiesPending.length ? `${policiesPending.length} poliza(s) sin cobertura completa.` : "No hay poliza vigente con soporte para la actividad.", action: `Validar cobertura de seguro de ${activityName}` });
  if (!controls.participants) gaps.push({ key: "participants", code: "7.4.3", severity: "media", label: "Participantes", detail: participantActivityGapReason(activityName, related.participants), action: `Completar informacion ISO 21103 de participantes de ${activityName}` });
  if (stats.pending > 0) gaps.push({ key: "forms", code: "7.5", severity: "media", label: "Formularios", detail: `${stats.pending} formulario(s) de la actividad siguen pendientes.`, action: `Diligenciar formularios operacionales de ${activityName}` });
  return gaps;
}

function activityReadiness(activityName) {
  const gaps = activityGapItems(activityName);
  const high = gaps.filter((gap) => gap.severity === "alta").length;
  const controlKeys = ["risks", "equipment", "guide", "training", "insurance", "participants", "forms"];
  const missingControls = new Set(gaps.filter((gap) => controlKeys.includes(gap.key)).map((gap) => gap.key));
  return {
    gaps,
    high,
    score: Math.round(((controlKeys.length - missingControls.size) / controlKeys.length) * 100),
    status: high ? "critica" : gaps.length ? "en_revision" : "lista"
  };
}

function activityGapActionExists(gap) {
  return state.actions.some((action) => action.title === gap.action && action.status !== "cerrada");
}

function activityGapActionPayload(activityName, gap) {
  return {
    title: gap.action,
    code: gap.code,
    status: "abierta",
    type: gap.severity === "alta" ? "preventiva" : "tarea",
    origin: "brecha_actividad",
    priority: gap.severity === "alta" ? "alta" : "media",
    responsible: state.ownerName || "Responsable SGSTA",
    dueDate: "",
    cause: gap.detail,
    immediateCorrection: "",
    followUp: "",
    efficacyVerification: "",
    efficacyStatus: "pendiente",
    relatedActivity: activityName,
    gapKey: gap.key,
    sourceDetail: `${gap.label} - ${gap.code}`,
    createdAt: today()
  };
}

function renderActivityGaps() {
  const summary = document.querySelector("#activityGapsSummary");
  const table = document.querySelector("#activityGapsTable");
  if (!summary || !table) return;
  const readiness = state.activities.map((activity) => ({ activity, readiness: activityReadiness(activity.name) }));
  const totalGaps = readiness.reduce((sum, item) => sum + item.readiness.gaps.length, 0);
  const highGaps = readiness.reduce((sum, item) => sum + item.readiness.high, 0);
  const readyActivities = readiness.filter((item) => item.readiness.status === "lista").length;
  const allGaps = readiness.flatMap((item) => item.readiness.gaps);
  const openGapActions = allGaps.filter(activityGapActionExists).length;
  summary.innerHTML = `
    <article><span>Actividades listas</span><strong>${readyActivities}/${state.activities.length}</strong></article>
    <article><span>Brechas totales</span><strong>${totalGaps}</strong></article>
    <article><span>Brechas criticas</span><strong>${highGaps}</strong></article>
    <article><span>Acciones abiertas</span><strong>${openGapActions}</strong></article>
    <article><span>Accion del agente</span><strong>${highGaps ? "Priorizar" : totalGaps ? "Completar" : "Mantener"}</strong></article>`;
  table.innerHTML = readiness.length
    ? readiness.map(({ activity, readiness: item }) => {
      const badge = item.status === "lista" ? "cumple" : item.status === "critica" ? "no_cumple" : "en_proceso";
      return `
        <article class="activity-gap-card">
          <div class="activity-gap-head">
            <div>
              <p class="eyebrow">Actividad</p>
              <h3>${escapeHtml(activity.name)}</h3>
              <div class="muted">${escapeHtml(activity.place || "Lugar por definir")} - Lider: ${escapeHtml(activity.leader || "por definir")}</div>
            </div>
            <span class="badge ${badge}">${item.score}% ${item.status}</span>
          </div>
          <div class="gap-pill-row">
            ${item.gaps.length ? item.gaps.map((gap) => `<span class="gap-pill ${gap.severity}">${gap.label} ${gap.code}</span>`).join("") : `<span class="gap-pill lista">Sin brechas abiertas</span>`}
          </div>
          <div class="simple-table compact-gap-table">
            ${item.gaps.length ? item.gaps.map((gap) => {
              const actionOpen = activityGapActionExists(gap);
              return `
              <div class="simple-row activity-gap-row">
                <div><strong>${gap.label}</strong><div class="muted">${gap.detail}</div></div>
                <span class="badge ${gap.severity === "alta" ? "no_cumple" : "en_proceso"}">${gap.severity}</span>
                <button class="secondary-button ${actionOpen ? "button-done" : ""}" data-create-activity-gap="${escapeHtml(activity.name)}:${gap.key}" type="button" ${actionOpen ? "disabled" : ""}>${actionOpen ? "Accion abierta" : "Crear accion"}</button>
              </div>`;
            }).join("") : `<div class="muted">La actividad tiene controles minimos completos para operar con evidencia.</div>`}
          </div>
        </article>`;
    }).join("")
    : `<div class="muted">No hay actividades registradas.</div>`;
  document.querySelector("#createActivityGapActions")?.addEventListener("click", createAllActivityGapActions);
  table.querySelectorAll("[data-create-activity-gap]").forEach((button) => {
    button.addEventListener("click", () => {
      const [activityName, key] = button.dataset.createActivityGap.split(":");
      createActivityGapAction(activityName, key);
    });
  });
}

function createActivityGapAction(activityName, key) {
  const gap = activityGapItems(activityName).find((item) => item.key === key);
  if (!gap) return;
  if (!activityGapActionExists(gap)) {
    state.actions.unshift(activityGapActionPayload(activityName, gap));
    recordAuditEvent({
      title: "Accion creada desde brecha",
      detail: `${gap.action}. Actividad: ${activityName}.`,
      code: gap.code,
      type: "accion_preventiva",
      actor: "agente"
    });
    addMessage("agent", `Cree la accion: ${gap.action}. Queda abierta hasta que cierres la brecha con evidencia.`);
  } else {
    addMessage("agent", `La accion ya estaba abierta: ${gap.action}.`);
  }
  saveState();
  renderAll();
}

function createAllActivityGapActions() {
  let created = 0;
  state.activities.forEach((activity) => {
    activityGapItems(activity.name).forEach((gap) => {
      if (!activityGapActionExists(gap)) {
        state.actions.unshift(activityGapActionPayload(activity.name, gap));
        created += 1;
      }
    });
  });
  recordAuditEvent({
    title: "Acciones de brechas por actividad",
    detail: `El agente creo ${created} accion(es) nuevas para brechas operacionales por actividad.`,
    code: "8.1",
    type: "agente",
    actor: "agente"
  });
  addMessage("agent", created
    ? `Cree ${created} accion(es) nuevas. Los botones del tablero ahora muestran "Accion abierta" donde ya hay seguimiento.`
    : `No cree acciones nuevas porque las brechas ya tienen acciones abiertas.`);
  saveState();
  renderAll();
  return created;
}

function activityGapsAgentSummary() {
  const readiness = state.activities.map((activity) => ({ activity, readiness: activityReadiness(activity.name) }));
  if (!readiness.length) return "No hay actividades registradas. Primero crea las actividades reales: rafting, senderismo, cuatrimotos u otras.";
  const high = readiness.filter((item) => item.readiness.status === "critica");
  const review = readiness.filter((item) => item.readiness.status === "en_revision");
  const ready = readiness.filter((item) => item.readiness.status === "lista");
  const priority = readiness
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score)
    .slice(0, 3);
  const priorityText = priority.length
    ? priority.map((item) => {
      const topGaps = item.readiness.gaps.slice(0, 4).map((gap) => `${gap.label} (${gap.code})`).join(", ");
      return `${item.activity.name}: ${item.readiness.score}% listo, faltan ${topGaps}`;
    }).join("; ")
    : "Todas las actividades tienen controles minimos completos.";
  return `Revise brechas por actividad: ${ready.length}/${readiness.length} actividad(es) listas, ${high.length} critica(s), ${review.length} en revision. Prioridad: ${priorityText}. Regla del agente: una actividad critica no deberia operarse sin validacion humana y plan de cierre.`;
}

function createActivityClosurePlan() {
  const created = createAllActivityGapActions();
  const readiness = state.activities.map((activity) => ({ activity, readiness: activityReadiness(activity.name) }))
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score);
  const top = readiness.slice(0, 3).map((item) => `${item.activity.name}: ${item.readiness.gaps.length} brecha(s), ${item.readiness.high} critica(s)`).join("; ");
  addMessage("agent", created
    ? `Cree ${created} accion(es) para cerrar brechas por actividad. Prioridad de cierre: ${top || "sin brechas activas"}.`
    : `No cree acciones nuevas porque ya existian acciones abiertas para esas brechas. Prioridad actual: ${top || "sin brechas activas"}.`);
}

function activityContext(activityName) {
  const activity = state.activities.find((item) => item.name === activityName) || {};
  const related = activityRelatedItems(activityName);
  return {
    activity,
    related,
    risk: related.risks[0] || {},
    person: related.people[0] || {},
    equipment: related.equipment[0] || {},
    policy: related.policies[0] || {},
    participant: related.participants[0] || {}
  };
}

function addRiskForActivity(activityName) {
  state.risks.unshift({ title: `Riesgo por evaluar en ${activityName}`, activity: activityName, probability: 3, impact: 3, control: "Control especifico por definir" });
  state.compliance["6.1.2"] = "en_proceso";
  createAction(`Completar matriz de riesgos de ${activityName}`, "6.1.2", "preventiva", "actividad");
}

function addEquipmentForActivity(activityName) {
  const count = state.equipment.length + 1;
  state.equipment.unshift({ name: `Equipo ${count} para ${activityName}`, type: "Operacion", activity: activityName, status: "revision", nextCheck: "Por programar", inspectionDate: "", maintenanceDate: "", evidence: "" });
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  createAction(`Programar inspeccion de equipos de ${activityName}`, "7.1", "preventiva", "actividad");
}

function addGuideForActivity(activityName) {
  const count = state.people.length + 1;
  state.people.unshift({ name: `Guia ${count}`, role: `Guia especializado en ${activityName}`, activity: activityName, competence: "pendiente", training: "Competencia especifica por verificar" });
  state.compliance["7.2"] = "en_proceso";
  createAction(`Verificar guia competente para ${activityName}`, "7.2", "preventiva", "actividad");
}

function addParticipantConditionForActivity(activityName) {
  state.participantEvidence.unshift({ activity: activityName, kind: "Condiciones de participacion y consentimiento", consent: "pendiente", status: "pendiente", link: "", evidence: "" });
  state.compliance["7.4.3"] = "en_proceso";
  createAction(`Definir condiciones de participacion para ${activityName}`, "7.4.3", "tarea", "actividad");
}

function addPolicyForActivity(activityName) {
  const count = state.policies.length + 1;
  state.policies.unshift({ number: `POL-${String(count).padStart(3, "0")}`, insurer: "Aseguradora por definir", coverage: `Cobertura por definir para ${activityName}`, activity: activityName, due: "Por definir", status: "pendiente", document: "" });
  state.compliance["6.1.3"] = "en_proceso";
  createAction(`Validar poliza para ${activityName}`, "6.1.3", "preventiva", "actividad");
}

function generateFormDraftValuesForActivity(form, activityName) {
  const relation = getFormMatrixItem(form.table);
  const requirement = getFormRequirement(form);
  const context = activityContext(activityName);
  const values = {};
  form.fields.forEach((field) => {
    const name = field.name.toLowerCase();
    values[field.name] = suggestedValueForField(name, {
      form,
      relation,
      requirement,
      activity: context.activity,
      person: context.person,
      equipment: context.equipment,
      policy: context.policy,
      risk: context.risk,
      participant: context.participant
    });
  });
  return values;
}

function mergeActivityDraftValues(form, currentValues = {}, activityName) {
  const suggestedValues = generateFormDraftValuesForActivity(form, activityName);
  const merged = { ...(currentValues || {}) };
  form.fields.forEach((field) => {
    if (!String(merged[field.name] || "").trim()) merged[field.name] = suggestedValues[field.name];
  });
  return merged;
}

function upsertActivityFormDraft(table, activityName) {
  const form = visibleCatalogForms(window.formCatalog || []).find((item) => item.table === table);
  if (!form) return null;
  const relation = getFormMatrixItem(form.table);
  const requirement = getFormRequirement(form);
  const existing = formResponseForActivity(table, activityName);
  const values = generateFormDraftValuesForActivity(form, activityName);
  if (existing) {
    existing.status = existing.status === "aprobado" ? "revision" : "borrador";
    existing.values = mergeActivityDraftValues(form, existing.values, activityName);
    existing.activity = activityName;
    existing.source = existing.source || "agente_actividad";
    existing.requiresApproval = true;
    existing.updatedAt = today();
    return existing;
  }
  const response = {
    table: form.table,
    form: `${form.title} - ${activityName}`,
    module: relation?.module || form.table,
    activity: activityName,
    status: "borrador",
    code: requirement.code,
    fields: form.fields.map((field) => field.name),
    values,
    source: "agente_actividad",
    requiresApproval: true,
    approvedBy: "",
    approvedAt: "",
    updatedAt: today()
  };
  state.formResponses.unshift(response);
  return response;
}

function suggestActivityEvidence(activityName) {
  activityPackageTables.forEach((table) => {
    const response = formResponseForActivity(table, activityName);
    if (!response) return;
    const existing = state.evidence.find((item) => item.linkedDocument === `${table}:${activityName}` && item.source === "paquete actividad");
    const evidence = {
      title: `Evidencia sugerida: ${response.form}`,
      code: response.code,
      activity: activityName,
      linkedActivity: activityName,
      linkedDocument: `${table}:${activityName}`,
      source: "paquete actividad",
      status: normalizedFormStatus(response.status) === "aprobado" ? "registrada" : "sugerida",
      date: today()
    };
    if (existing) Object.assign(existing, evidence);
    else state.evidence.unshift(evidence);
  });
}

function prepareActivityPackage(activityName) {
  const created = activityPackageTables.map((table) => upsertActivityFormDraft(table, activityName)).filter(Boolean);
  suggestActivityEvidence(activityName);
  createAction(`Revisar paquete operativo de ${activityName}`, "8.1", "tarea", "actividad");
  state.selectedActivityName = activityName;
  state.selectedFormActivity = activityName;
  state.formFilters.search = activityName;
  saveState();
  addMessage("agent", `Prepare ${created.length} formulario(s) y evidencias sugeridas para ${activityName}. Quedan pendientes de revision humana.`);
  renderAll();
}

function updateActivityReferences(oldName, newName) {
  if (!oldName || oldName === newName) return;
  [state.risks, state.equipment, state.people, state.trainingNeeds, state.policies, state.participantEvidence].forEach((collection) => {
    collection.forEach((item) => {
      if (item.activity === oldName) item.activity = newName;
      if (item.activityName === oldName) item.activityName = newName;
      if (item.actividad === oldName) item.actividad = newName;
    });
  });
  state.formResponses.forEach((response) => {
    if (response.activity === oldName) response.activity = newName;
    if (response.values?.actividad === oldName) response.values.actividad = newName;
    if (response.values?.nombre_actividad === oldName) response.values.nombre_actividad = newName;
    if (response.values?.id_actividad === oldName) response.values.id_actividad = newName;
    if (typeof response.form === "string" && response.form.includes(oldName)) response.form = response.form.replace(oldName, newName);
  });
  state.evidence.forEach((evidence) => {
    if (evidence.activity === oldName) evidence.activity = newName;
    if (evidence.linkedActivity === oldName) evidence.linkedActivity = newName;
    if (typeof evidence.linkedDocument === "string") evidence.linkedDocument = evidence.linkedDocument.replace(`:${oldName}`, `:${newName}`);
    if (typeof evidence.title === "string") evidence.title = evidence.title.replace(oldName, newName);
  });
}

function saveSelectedActivity() {
  const activity = state.activities.find((item) => item.name === state.selectedActivityName);
  if (!activity) return;
  const oldName = activity.name;
  const nextName = document.querySelector("#activityName").value.trim() || oldName;
  activity.name = nextName;
  activity.place = document.querySelector("#activityPlace").value.trim();
  activity.leader = document.querySelector("#activityLeader").value.trim();
  activity.status = document.querySelector("#activityStatus").value;
  activity.difficulty = document.querySelector("#activityDifficulty").value.trim();
  activity.conditions = document.querySelector("#activityConditions").value.trim();
  activity.participantRequirements = document.querySelector("#activityParticipantRequirements").value.trim();
  updateActivityReferences(oldName, nextName);
  state.selectedActivityName = nextName;
  state.compliance["8.1"] = "en_proceso";
  saveState();
  addMessage("agent", `Actualice la ficha de actividad ${nextName}. El agente usara estos datos para formularios, riesgos, equipos y participantes.`);
  renderAll();
}

function activityRiskRows(activityName) {
  const risks = state.risks
    .map((risk, index) => ({ risk, index }))
    .filter((item) => item.risk.activity === activityName);
  if (!risks.length) return `<div class="muted">No hay riesgos especificos para esta actividad.</div>`;
  return risks.map(({ risk, index }) => {
    const level = riskLevel(risk);
    const badge = level >= 12 ? "no_cumple" : level >= 6 ? "en_proceso" : "cumple";
    return `
      <div class="risk-edit-row">
        <label>Riesgo / peligro<input data-risk-field="${index}:title" type="text" value="${escapeHtml(risk.title || "")}"></label>
        <label>Probabilidad
          <select data-risk-field="${index}:probability">
            ${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(risk.probability) === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Impacto
          <select data-risk-field="${index}:impact">
            ${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(risk.impact) === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Control<textarea data-risk-field="${index}:control">${escapeHtml(risk.control || "")}</textarea></label>
        <label>Responsable<input data-risk-field="${index}:responsible" type="text" value="${escapeHtml(risk.responsible || "")}"></label>
        <label>Estado control
          <select data-risk-field="${index}:controlStatus">
            ${["pendiente", "implementado", "verificacion", "eficaz"].map((value) => `<option value="${value}" ${(risk.controlStatus || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <span class="badge ${badge}">nivel ${level}</span>
        <button class="secondary-button" data-remove="risks:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function updateActivityRiskField(field) {
  const [rawIndex, key] = field.dataset.riskField.split(":");
  const risk = state.risks[Number(rawIndex)];
  if (!risk) return;
  const previousLevel = riskLevel(risk);
  risk[key] = ["probability", "impact"].includes(key) ? Number(field.value) : field.value;
  risk.updatedAt = today();
  state.compliance["6.1.2"] = "en_proceso";
  const nextLevel = riskLevel(risk);
  if (nextLevel >= 12 && previousLevel < 12) {
    const title = `Definir tratamiento para riesgo alto: ${risk.title}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "6.1.2",
        status: "abierta",
        type: "preventiva",
        origin: "riesgo",
        priority: "alta",
        responsible: risk.responsible || "",
        dueDate: "",
        cause: `Riesgo alto en ${risk.activity}: nivel ${nextLevel}`,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        relatedActivity: item.activity || state.selectedActivityName,
        sourceDetail: "Participantes 7.4.3",
        createdAt: today()
      });
    }
  }
  saveState();
  renderAll();
}

function activityEquipmentRows(activityName) {
  const equipmentItems = state.equipment
    .map((equipment, index) => ({ equipment, index }))
    .filter((item) => item.equipment.activity === activityName);
  if (!equipmentItems.length) return `<div class="muted">No hay equipos especificos para esta actividad.</div>`;
  return equipmentItems.map(({ equipment, index }) => {
    const complete = equipmentIsComplete(equipment);
    return `
      <div class="equipment-edit-row">
        <label>Equipo<input data-equipment-field="${index}:name" type="text" value="${escapeHtml(equipment.name || "")}"></label>
        <label>Tipo<input data-equipment-field="${index}:type" type="text" value="${escapeHtml(equipment.type || "")}"></label>
        <label>Estado
          <select data-equipment-field="${index}:status">
            ${["operativo", "revision", "mantenimiento", "fuera_servicio"].map((value) => `<option value="${value}" ${(equipment.status || "revision") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Proxima revision<input data-equipment-field="${index}:nextCheck" type="text" value="${escapeHtml(equipment.nextCheck || "")}"></label>
        <label>Responsable<input data-equipment-field="${index}:responsible" type="text" value="${escapeHtml(equipment.responsible || "")}"></label>
        <label>Inspeccion<input data-equipment-field="${index}:inspectionDate" type="text" value="${escapeHtml(equipment.inspectionDate || "")}"></label>
        <label>Mantenimiento<input data-equipment-field="${index}:maintenanceDate" type="text" value="${escapeHtml(equipment.maintenanceDate || "")}"></label>
        <label>Evidencia<input data-equipment-field="${index}:evidence" type="text" value="${escapeHtml(equipment.evidence || "")}"></label>
        <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "listo" : "pendiente"}</span>
        <button class="secondary-button" data-remove="equipment:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function equipmentIsComplete(equipment) {
  const nextOk = equipment.nextCheck && !String(equipment.nextCheck).toLowerCase().includes("por ");
  return equipment.status === "operativo" && nextOk && equipment.inspectionDate && equipment.maintenanceDate && equipment.evidence;
}

function updateActivityEquipmentField(field) {
  const [rawIndex, key] = field.dataset.equipmentField.split(":");
  const equipment = state.equipment[Number(rawIndex)];
  if (!equipment) return;
  equipment[key] = field.value;
  equipment.updatedAt = today();
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  const incomplete = !equipmentIsComplete(equipment);
  if (incomplete) {
    const title = `Completar control de equipo: ${equipment.name}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "7.1",
        status: "abierta",
        type: "preventiva",
        origin: "equipo",
        priority: "alta",
        responsible: equipment.responsible || "",
        dueDate: "",
        cause: `Equipo ${equipment.name} de ${equipment.activity} requiere inspeccion, mantenimiento o evidencia.`,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        createdAt: today()
      });
    }
  }
  saveState();
  renderAll();
}

function activityPeopleRows(activityName) {
  const people = state.people
    .map((person, index) => ({ person, index }))
    .filter((item) => item.person.activity === activityName || String(item.person.role || "").toLowerCase().includes(String(activityName).toLowerCase()));
  if (!people.length) return `<div class="muted">No hay guias o personal asignado para esta actividad.</div>`;
  return people.map(({ person, index }) => {
    const trainingOk = person.training && !String(person.training).toLowerCase().includes("pendiente");
    const evidenceOk = person.evidence && !String(person.evidence).toLowerCase().includes("por ");
    const dueOk = person.certificateDue && !String(person.certificateDue).toLowerCase().includes("por ");
    const complete = person.competence === "cumple" && trainingOk && evidenceOk && dueOk;
    return `
      <div class="people-edit-row">
        <label>Nombre<input data-person-field="${index}:name" type="text" value="${escapeHtml(person.name || "")}"></label>
        <label>Rol<input data-person-field="${index}:role" type="text" value="${escapeHtml(person.role || "")}"></label>
        <label>Competencia
          <select data-person-field="${index}:competence">
            ${["pendiente", "cumple", "no_cumple", "vencida"].map((value) => `<option value="${value}" ${(person.competence || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Capacitacion / certificado<input data-person-field="${index}:training" type="text" value="${escapeHtml(person.training || "")}"></label>
        <label>Vencimiento<input data-person-field="${index}:certificateDue" type="text" value="${escapeHtml(person.certificateDue || "")}"></label>
        <label>Evidencia<input data-person-field="${index}:evidence" type="text" value="${escapeHtml(person.evidence || "")}"></label>
        <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "competente" : "brecha"}</span>
        <button class="secondary-button" data-remove="people:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function updateActivityPersonField(field) {
  const [rawIndex, key] = field.dataset.personField.split(":");
  const person = state.people[Number(rawIndex)];
  if (!person) return;
  person[key] = field.value;
  person.updatedAt = today();
  state.compliance["7.2"] = "en_proceso";
  state.compliance["7.3"] = "en_proceso";
  const trainingIncomplete = !person.training || String(person.training).toLowerCase().includes("pendiente");
  const evidenceIncomplete = !person.evidence || String(person.evidence).toLowerCase().includes("por ");
  const dueIncomplete = !person.certificateDue || String(person.certificateDue).toLowerCase().includes("por ");
  const incomplete = person.competence !== "cumple" || trainingIncomplete || evidenceIncomplete || dueIncomplete;
  if (incomplete) {
    const title = `Cerrar competencia de guia: ${person.name}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "7.2",
        status: "abierta",
        type: "preventiva",
        origin: "competencia",
        priority: "alta",
        responsible: person.name || "",
        dueDate: person.certificateDue || "",
        cause: `${person.name || "Persona"} asignada a ${person.activity || state.selectedActivityName} requiere competencia, capacitacion y evidencia vigente.`,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        createdAt: today()
      });
    }
  }
  saveState();
  renderAll();
}

function activityPolicyRows(activityName) {
  const policies = state.policies
    .map((policy, index) => ({ policy, index }))
    .filter((item) => item.policy.activity === activityName || String(item.policy.coverage || "").toLowerCase().includes(String(activityName).toLowerCase()));
  if (!policies.length) return `<div class="muted">No hay polizas asociadas a esta actividad.</div>`;
  return policies.map(({ policy, index }) => {
    const complete = policyIsComplete(policy);
    return `
      <div class="policy-edit-row">
        <label>Poliza<input data-policy-field="${index}:number" type="text" value="${escapeHtml(policy.number || "")}"></label>
        <label>Aseguradora<input data-policy-field="${index}:insurer" type="text" value="${escapeHtml(policy.insurer || "")}"></label>
        <label>Estado
          <select data-policy-field="${index}:status">
            ${["pendiente", "vigente", "vencida", "revision"].map((value) => `<option value="${value}" ${(policy.status || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Vencimiento<input data-policy-field="${index}:due" type="text" value="${escapeHtml(policy.due || "")}"></label>
        <label class="wideish">Cobertura<input data-policy-field="${index}:coverage" type="text" value="${escapeHtml(policy.coverage || "")}"></label>
        <label>Documento soporte<input data-policy-field="${index}:document" type="text" value="${escapeHtml(policy.document || policy.evidence || "")}"></label>
        <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "cubierta" : "brecha"}</span>
        <button class="secondary-button" data-remove="policies:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function updateActivityPolicyField(field) {
  const [rawIndex, key] = field.dataset.policyField.split(":");
  const policy = state.policies[Number(rawIndex)];
  if (!policy) return;
  policy[key] = field.value;
  policy.updatedAt = today();
  state.compliance["6.1.3"] = "en_proceso";
  if (!policyIsComplete(policy)) {
    const title = `Cerrar cobertura de seguro: ${policy.activity || state.selectedActivityName}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "6.1.3",
        status: "abierta",
        type: "preventiva",
        origin: "poliza",
        priority: "alta",
        responsible: policy.responsible || "",
        dueDate: policy.due || "",
        cause: `La actividad ${policy.activity || state.selectedActivityName} requiere poliza vigente con cobertura, vencimiento y documento soporte.`,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        createdAt: today()
      });
    }
  }
  saveState();
  renderAll();
}

function activityParticipantRows(activityName) {
  const participants = state.participantEvidence
    .map((item, index) => ({ item, index }))
    .filter((entry) => entry.item.activity === activityName);
  if (!participants.length) return `<div class="muted">No hay evidencias externas de participantes para esta actividad.</div>`;
  return participants.map(({ item, index }) => {
    const complete = participantEvidenceIsComplete(item);
    return `
      <div class="participant-edit-row">
        <label>Etapa ISO 21103
          <select data-participant-field="${index}:phase">
            ${["antes", "durante", "despues"].map((value) => `<option value="${value}" ${(item.phase || "antes") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Soporte requerido<input data-participant-field="${index}:kind" type="text" value="${escapeHtml(item.kind || "")}"></label>
        <label>Formulario / enlace externo<input data-participant-field="${index}:link" type="text" value="${escapeHtml(item.link || "")}"></label>
        <label>Consentimiento
          <select data-participant-field="${index}:consent">
            ${["pendiente", "recibido", "aprobado", "rechazado"].map((value) => `<option value="${value}" ${(item.consent || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Estado
          <select data-participant-field="${index}:status">
            ${["pendiente", "recibida", "aprobada", "rechazada"].map((value) => `<option value="${value}" ${(item.status || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>Fecha<input data-participant-field="${index}:date" type="text" value="${escapeHtml(item.date || "")}"></label>
        <label>Evidencia<input data-participant-field="${index}:evidence" type="text" value="${escapeHtml(item.evidence || item.document || "")}"></label>
        <label class="wideish">Informacion comunicada<input data-participant-field="${index}:infoProvided" type="text" value="${escapeHtml(item.infoProvided || "")}"></label>
        <label class="wideish">Datos solicitados<input data-participant-field="${index}:participantInfoRequested" type="text" value="${escapeHtml(item.participantInfoRequested || "")}"></label>
        <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "recibida" : "brecha"}</span>
        <button class="secondary-button" data-remove="participantEvidence:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function updateActivityParticipantField(field) {
  const [rawIndex, key] = field.dataset.participantField.split(":");
  const item = state.participantEvidence[Number(rawIndex)];
  if (!item) return;
  item[key] = field.value;
  item.updatedAt = today();
  state.compliance["7.4.3"] = "en_proceso";
  if (!participantEvidenceIsComplete(item)) {
    const title = `Completar evidencia externa de participantes: ${item.activity || state.selectedActivityName}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "7.4.3",
        status: "abierta",
        type: "preventiva",
        origin: "participantes",
        priority: "media",
        responsible: "",
        dueDate: item.date || "",
        cause: participantGapReason(item),
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        relatedActivity: item.activity || state.selectedActivityName,
        sourceDetail: "Participantes 7.4.3 / ISO 21103",
        createdAt: today()
      });
    }
  }
  saveState();
  renderAll();
}

function activityIntakeItems(activityName) {
  const activity = state.activities.find((item) => item.name === activityName) || {};
  const related = activityRelatedItems(activityName);
  return [
    {
      id: "ruta",
      label: "Ruta/lugar",
      question: "Donde inicia, por donde pasa, donde termina y que restricciones tiene la ruta?",
      done: Boolean(activity.place && activity.place !== "Lugar por definir"),
      action: `Definir ruta y lugar de ${activityName}`,
      code: "8.1"
    },
    {
      id: "condiciones",
      label: "Condiciones",
      question: "Que clima, terreno, caudal, trafico, altura, duracion o dificultad cambia la seguridad?",
      done: Boolean(activity.conditions && !String(activity.conditions).toLowerCase().includes("por definir")),
      action: `Documentar condiciones de operacion de ${activityName}`,
      code: "8.1"
    },
    {
      id: "participantes",
      label: "Participantes",
      question: "Quien puede participar, que debe saber antes y que consentimiento/evidencia externa queda?",
      done: Boolean(activity.participantRequirements && participantActivityInformationIsComplete(activityName)),
      action: `Completar condiciones y evidencias de participantes para ${activityName}`,
      code: "7.4.3"
    },
    {
      id: "riesgos",
      label: "Riesgos",
      question: "Que puede salir mal en esta actividad y que control evita o reduce el dano?",
      done: related.risks.length > 0,
      action: `Levantar riesgos especificos de ${activityName}`,
      code: "6.1.2"
    },
    {
      id: "guia",
      label: "Guia",
      question: "Quien lidera la actividad y que competencia/certificado vigente demuestra?",
      done: related.people.some((person) => person.competence === "cumple"),
      action: `Asignar guia competente para ${activityName}`,
      code: "7.2"
    },
    {
      id: "equipos",
      label: "Equipos",
      question: "Que equipos se usan, quien los revisa y que mantenimiento/evidencia tienen?",
      done: related.equipment.length > 0 && related.equipment.every((item) => item.status === "operativo"),
      action: `Completar equipos e inspecciones de ${activityName}`,
      code: "7.1"
    },
    {
      id: "seguro",
      label: "Seguro",
      question: "La poliza cubre esta actividad, lugar, participantes y fecha de operacion?",
      done: related.policies.some(policyIsComplete),
      action: `Validar seguro de ${activityName}`,
      code: "6.1.3"
    },
    {
      id: "emergencia",
      label: "Emergencia",
      question: "Que se hace si hay lesion, cambio de clima, perdida, falla de equipo o comunicacion?",
      done: activityOperatingPackage(activityName).forms.some((item) => item.code === "8.2" && item.ready),
      action: `Preparar plan de emergencia de ${activityName}`,
      code: "8.2"
    }
  ];
}

function activityIntakeText(activityName) {
  const items = activityIntakeItems(activityName);
  const activity = state.activities.find((item) => item.name === activityName) || {};
  const completed = items.filter((item) => item.done).length;
  return [
    `Guia de entrevista de actividad - ${activityName}`,
    "",
    `Lugar/ruta: ${activity.place || "Por definir"}`,
    `Guia responsable: ${activity.leader || "Por definir"}`,
    `Estado: ${completed}/${items.length} bloques completos.`,
    "",
    "Preguntas para levantar la actividad:",
    ...items.map((item) => `- ${item.done ? "[listo]" : "[preguntar]"} ${item.label}: ${item.question}`),
    "",
    "Uso del agente:",
    "Con estas respuestas el agente alimenta riesgos, controles operacionales, equipos, personal, seguros, emergencias, participantes, formularios y acciones de mejora."
  ].join("\n");
}

function downloadActivityIntakeGuide(activityName) {
  const blob = new Blob([activityIntakeText(activityName)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `guia_actividad_${activityName.toLowerCase().replaceAll(" ", "_")}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Guia de actividad descargada",
    detail: `Se descargo la guia de entrevista para ${activityName}.`,
    code: "8.1",
    type: "actividad",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createActivityIntakeActions(activityName) {
  const pending = activityIntakeItems(activityName).filter((item) => !item.done);
  let created = 0;
  pending.forEach((item) => {
    const title = `Entrevista actividad: ${item.action}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: item.code,
      status: "abierta",
      type: item.code === "6.1.2" || item.code === "8.2" ? "preventiva" : "tarea",
      origin: "actividad",
      priority: ["riesgos", "guia", "equipos", "seguro", "emergencia"].includes(item.id) ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: item.question,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      relatedActivity: activityName,
      sourceDetail: "Entrevista de actividad",
      createdAt: today()
    });
    created += 1;
  });
  recordAuditEvent({
    title: "Acciones de entrevista de actividad creadas",
    detail: `Se crearon ${created} accion(es) para completar ${activityName}.`,
    code: "8.1",
    type: "actividad",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) para completar la entrevista de ${activityName}.` : `La entrevista de ${activityName} ya tenia acciones abiertas para sus pendientes.`);
  saveState();
  renderAll();
}

function renderActivityIntakeGuide(activity) {
  const items = activityIntakeItems(activity.name);
  const completed = items.filter((item) => item.done).length;
  const pct = Math.round((completed / items.length) * 100);
  const next = items.find((item) => !item.done) || items[items.length - 1];
  return `
    <div class="activity-intake-card">
      <div class="activity-intake-head">
        <div>
          <p class="eyebrow">Entrevista de actividad</p>
          <h3>Levantar ${activity.name} con preguntas de campo</h3>
          <p>La informacion se cruza con riesgos, guias, equipos, seguros, participantes, emergencia y formularios.</p>
        </div>
        <div class="pilot-score">
          <strong>${pct}%</strong>
          <span>${completed}/${items.length} listo</span>
        </div>
      </div>
      <div class="company-intake-next">
        <span class="badge ${next.done ? "cumple" : "pendiente"}">${next.done ? "listo" : "siguiente"}</span>
        <strong>${next.label}</strong>
        <p>${next.question}</p>
      </div>
      <div class="activity-intake-grid">
        ${items.map((item) => `
          <span class="intake-chip ${item.done ? "done" : ""}">
            <span>${item.done ? "ok" : "falta"}</span>
            ${item.label}
          </span>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-activity-intake-download="${activity.name}" type="button">Descargar entrevista</button>
        <button data-activity-intake-actions="${activity.name}" type="button">Crear acciones</button>
      </div>
    </div>`;
}

function renderActivities() {
  const container = document.querySelector("#activitiesTable");
  if (!state.activities.length) {
    container.innerHTML = `<div class="muted">No hay actividades registradas.</div>`;
    return;
  }
  if (!state.activities.some((item) => item.name === state.selectedActivityName)) {
    state.selectedActivityName = state.activities[0].name;
  }
  const selectedActivity = state.activities.find((item) => item.name === state.selectedActivityName) || state.activities[0];
  const selectedRelated = activityRelatedItems(selectedActivity.name);
  const selectedStats = activityFormStats(selectedActivity.name);
  const selectedReadiness = activityReadiness(selectedActivity.name);
  const selectedDecision = activityOperationDecision(selectedReadiness);
  const selectedPackage = activityOperatingPackage(selectedActivity.name);
  const selectedChecklist = activityDepartureChecklist(selectedActivity.name);
  container.innerHTML = `
    <div class="simple-table">
      ${state.activities.map((item, index) => {
      const related = activityRelatedItems(item.name);
      const controls = activityControlStatus(item.name);
      const readiness = activityReadiness(item.name);
      const decision = activityOperationDecision(readiness);
      return `
      <div class="simple-row module-row ${state.selectedActivityName === item.name ? "selected-row" : ""}">
        <div>
          <strong>${item.name}</strong>
          <div class="muted">${item.place} - Lider: ${item.leader}</div>
          <div class="muted">${item.conditions || "Condiciones por definir"}</div>
          <div class="matrix-metrics">
            <span>Riesgos ${related.risks.length}</span>
            <span>Equipos ${related.equipment.length}</span>
            <span>Guias ${related.people.length}</span>
            <span>Participantes ${related.participants.length}</span>
          </div>
          <div class="matrix-metrics">
            ${controlBadge(controls.guide, "guia")}
            ${controlBadge(controls.risks, "riesgos")}
            ${controlBadge(controls.equipment, "equipos")}
            ${controlBadge(controls.participants, "participantes")}
            ${controlBadge(controls.insurance, "seguro")}
          </div>
        </div>
        <div class="activity-decision-mini">
          <span class="badge ${decision.badge}">${decision.label}</span>
          <small>${readiness.score}% listo</small>
        </div>
        <button class="secondary-button" data-select-activity="${item.name}" type="button">Ver ficha</button>
        <button class="secondary-button" data-remove="activities:${index}" type="button">Quitar</button>
      </div>`;
    }).join("")}
    </div>
    <div class="panel activity-profile">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Ficha de actividad</p>
          <h2>${selectedActivity.name}</h2>
        </div>
        <span class="badge ${selectedDecision.badge}">${selectedDecision.label}</span>
      </div>
      <div class="activity-operational-status">
        <div>
          <p class="eyebrow">Decision operativa</p>
          <h3>${selectedDecision.label}</h3>
          <p>${selectedDecision.summary}</p>
        </div>
        <div class="activity-readiness-meter">
          <strong>${selectedReadiness.score}%</strong>
          <span>${selectedReadiness.gaps.length} brecha(s), ${selectedReadiness.high} critica(s)</span>
          <div class="progress"><span style="width:${selectedReadiness.score}%"></span></div>
        </div>
        <div class="row-actions">
          <button class="secondary-button" data-open-selected-gaps="${selectedActivity.name}" type="button">Ver brechas</button>
          <button class="secondary-button" data-download-operational-package="${selectedActivity.name}" type="button">Descargar ficha operativa</button>
          <button data-create-selected-gap-actions="${selectedActivity.name}" type="button">Crear acciones</button>
        </div>
      </div>
      ${renderActivityIntakeGuide(selectedActivity)}
      <div class="activity-package-status">
        <div class="package-status-head">
          <div>
            <p class="eyebrow">Paquete para operar/ofertar</p>
            <h3>${selectedPackage.approved}/${selectedPackage.total} formularios aprobados</h3>
            <p class="muted">${selectedPackage.ready ? "Paquete documental listo. Mantener vigencias." : "El agente puede preparar borradores, pero falta revision/aprobacion humana."}</p>
          </div>
          <span class="badge ${selectedPackage.ready ? "cumple" : "en_proceso"}">${selectedPackage.ready ? "listo" : "en preparacion"}</span>
        </div>
        <div class="package-checklist">
          ${selectedPackage.forms.map((item) => `
            <div class="package-check ${item.ready ? "ready" : "pending"}">
              <span>${item.ready ? "OK" : "Pendiente"}</span>
              <strong>${item.title}</strong>
              <small>${item.status}</small>
            </div>`).join("")}
        </div>
        <div class="row-actions">
          <button data-prepare-activity-package="${selectedActivity.name}" type="button">Preparar paquete</button>
          <button class="secondary-button" data-open-activity-forms="${selectedActivity.name}" type="button">Ver formularios</button>
        </div>
      </div>
      <div class="departure-checklist">
        <div class="package-status-head">
          <div>
            <p class="eyebrow">Antes de salir</p>
            <h3>Lista rapida de operacion</h3>
            <p class="muted">Lectura practica para decidir si la actividad puede ejecutarse sin improvisar controles.</p>
          </div>
          <span class="badge ${selectedChecklist.every((item) => item.ok) ? "cumple" : "en_proceso"}">${selectedChecklist.filter((item) => item.ok).length}/${selectedChecklist.length}</span>
        </div>
        <div class="departure-grid">
          ${selectedChecklist.map((item) => `
            <div class="departure-item ${item.ok ? "ready" : "pending"}">
              <span>${item.ok ? "OK" : "Falta"}</span>
              <strong>${item.label}</strong>
              <small>${item.detail}</small>
            </div>`).join("")}
        </div>
        <div class="row-actions">
          <button data-create-departure-actions="${selectedActivity.name}" type="button">Crear acciones de lo que falta</button>
          <button class="secondary-button" data-open-departure-actions type="button">Ver acciones</button>
        </div>
      </div>
      <div class="report-summary">
        <div class="report-card"><span>Riesgos</span><strong>${selectedRelated.risks.length}</strong></div>
        <div class="report-card"><span>Equipos</span><strong>${selectedRelated.equipment.length}</strong></div>
        <div class="report-card"><span>Guias</span><strong>${selectedRelated.people.length}</strong></div>
        <div class="report-card"><span>Seguro</span><strong>${selectedRelated.policies.length}</strong></div>
        <div class="report-card"><span>Formularios</span><strong>${selectedStats.approved}/${selectedStats.total}</strong></div>
        <div class="report-card"><span>Evidencias</span><strong>${selectedStats.evidence.length}</strong></div>
      </div>
      <form id="activityEditForm" class="form-grid activity-edit-form">
        <label>Nombre<input id="activityName" type="text" value="${escapeHtml(selectedActivity.name)}"></label>
        <label>Lugar / ruta<input id="activityPlace" type="text" value="${escapeHtml(selectedActivity.place || "")}"></label>
        <label>Guia responsable<input id="activityLeader" type="text" value="${escapeHtml(selectedActivity.leader || "")}"></label>
        <label>Estado
          <select id="activityStatus">
            <option value="activa" ${selectedActivity.status === "activa" ? "selected" : ""}>Activa</option>
            <option value="inactiva" ${selectedActivity.status === "inactiva" ? "selected" : ""}>Inactiva</option>
            <option value="revision" ${selectedActivity.status === "revision" ? "selected" : ""}>Revision</option>
          </select>
        </label>
        <label>Dificultad / nivel<input id="activityDifficulty" type="text" value="${escapeHtml(selectedActivity.difficulty || "")}"></label>
        <label class="wide">Condiciones de operacion<textarea id="activityConditions">${escapeHtml(selectedActivity.conditions || "")}</textarea></label>
        <label class="wide">Condiciones de participacion<textarea id="activityParticipantRequirements">${escapeHtml(selectedActivity.participantRequirements || "")}</textarea></label>
        <div class="wide button-row">
          <button id="saveActivityProfile" type="submit">Guardar actividad</button>
        </div>
      </form>
      <div class="activity-risk-editor">
        <div class="panel-heading compact-heading">
          <div>
            <p class="eyebrow">Riesgos de la actividad</p>
            <h2>Mapa editable</h2>
          </div>
          <span class="badge ${selectedRelated.risks.some((risk) => riskLevel(risk) >= 12) ? "no_cumple" : "cumple"}">${selectedRelated.risks.length}</span>
        </div>
        ${activityRiskRows(selectedActivity.name)}
      </div>
      <div class="activity-equipment-editor">
        <div class="panel-heading compact-heading">
          <div>
            <p class="eyebrow">Equipos de la actividad</p>
            <h2>Inventario editable</h2>
          </div>
          <span class="badge ${selectedRelated.equipment.every((item) => item.status === "operativo") && selectedRelated.equipment.length ? "cumple" : "no_cumple"}">${selectedRelated.equipment.length}</span>
        </div>
        ${activityEquipmentRows(selectedActivity.name)}
      </div>
      <div class="activity-people-editor">
        <div class="panel-heading compact-heading">
          <div>
            <p class="eyebrow">Guias y personal de la actividad</p>
            <h2>Competencia editable</h2>
          </div>
          <span class="badge ${selectedRelated.people.some((item) => item.competence === "cumple") ? "cumple" : "no_cumple"}">${selectedRelated.people.length}</span>
        </div>
        ${activityPeopleRows(selectedActivity.name)}
      </div>
      <div class="activity-policy-editor">
        <div class="panel-heading compact-heading">
          <div>
            <p class="eyebrow">Seguro de la actividad</p>
            <h2>Cobertura editable</h2>
          </div>
          <span class="badge ${selectedRelated.policies.some(policyIsComplete) ? "cumple" : "no_cumple"}">${selectedRelated.policies.length}</span>
        </div>
        ${activityPolicyRows(selectedActivity.name)}
      </div>
      <div class="activity-participant-editor">
        <div class="panel-heading compact-heading">
          <div>
            <p class="eyebrow">Participantes de la actividad</p>
            <h2>Evidencia externa</h2>
          </div>
          <span class="badge ${selectedRelated.participants.some(participantEvidenceIsComplete) ? "cumple" : "no_cumple"}">${selectedRelated.participants.length}</span>
        </div>
        ${activityParticipantRows(selectedActivity.name)}
      </div>
      <div class="simple-table">
        <div class="simple-row"><strong>Condiciones</strong><span>${selectedActivity.conditions || "Por definir"}</span></div>
        <div class="simple-row"><strong>Participacion</strong><span>${selectedActivity.participantRequirements || "Por definir"}</span></div>
        <div class="simple-row"><strong>Riesgos</strong><span>${selectedRelated.risks.map((item) => item.title).join(", ") || "Sin riesgos especificos"}</span></div>
        <div class="simple-row"><strong>Equipos</strong><span>${selectedRelated.equipment.map((item) => `${item.name} (${item.status})`).join(", ") || "Sin equipos especificos"}</span></div>
        <div class="simple-row"><strong>Guias</strong><span>${selectedRelated.people.map((item) => `${item.name} (${item.competence})`).join(", ") || "Sin guia asignado"}</span></div>
        <div class="simple-row"><strong>Seguro</strong><span>${selectedRelated.policies.map((item) => `${item.number} (${item.status})`).join(", ") || "Sin poliza por actividad"}</span></div>
        <div class="simple-row"><strong>Formularios actividad</strong><span>${selectedStats.approved} aprobados, ${selectedStats.draft} borrador/revision, ${selectedStats.pending} pendientes</span></div>
      </div>
      <div class="button-row">
        <button data-prepare-activity="${selectedActivity.name}" type="button">Preparar actividad con agente</button>
        <button class="secondary-button" data-add-risk-activity="${selectedActivity.name}" type="button">Riesgo</button>
        <button class="secondary-button" data-add-equipment-activity="${selectedActivity.name}" type="button">Equipo</button>
        <button class="secondary-button" data-add-guide-activity="${selectedActivity.name}" type="button">Guia</button>
        <button class="secondary-button" data-add-participant-activity="${selectedActivity.name}" type="button">Participacion</button>
        <button class="secondary-button" data-add-policy-activity="${selectedActivity.name}" type="button">Seguro</button>
      </div>
    </div>`;
  bindRemoveButtons(container);
  container.querySelectorAll("[data-select-activity]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedActivityName = button.dataset.selectActivity;
      saveState();
      renderAll();
    });
  });
  container.querySelector("[data-add-risk-activity]")?.addEventListener("click", (event) => addRiskForActivity(event.currentTarget.dataset.addRiskActivity));
  container.querySelector("[data-add-equipment-activity]")?.addEventListener("click", (event) => addEquipmentForActivity(event.currentTarget.dataset.addEquipmentActivity));
  container.querySelector("[data-add-guide-activity]")?.addEventListener("click", (event) => addGuideForActivity(event.currentTarget.dataset.addGuideActivity));
  container.querySelector("[data-add-participant-activity]")?.addEventListener("click", (event) => addParticipantConditionForActivity(event.currentTarget.dataset.addParticipantActivity));
  container.querySelector("[data-add-policy-activity]")?.addEventListener("click", (event) => addPolicyForActivity(event.currentTarget.dataset.addPolicyActivity));
  container.querySelector("[data-prepare-activity]")?.addEventListener("click", (event) => prepareActivityPackage(event.currentTarget.dataset.prepareActivity));
  container.querySelector("[data-prepare-activity-package]")?.addEventListener("click", (event) => prepareActivityPackage(event.currentTarget.dataset.prepareActivityPackage));
  container.querySelector("[data-open-activity-forms]")?.addEventListener("click", (event) => {
    state.selectedFormActivity = event.currentTarget.dataset.openActivityForms;
    state.formFilters.search = event.currentTarget.dataset.openActivityForms;
    state.formFilters.status = "todos";
    showView("formularios");
  });
  container.querySelector("[data-create-departure-actions]")?.addEventListener("click", (event) => createDepartureChecklistActions(event.currentTarget.dataset.createDepartureActions));
  container.querySelector("[data-open-departure-actions]")?.addEventListener("click", () => showView("acciones"));
  container.querySelector("[data-open-selected-gaps]")?.addEventListener("click", () => showView("brechas_actividad"));
  container.querySelector("[data-download-operational-package]")?.addEventListener("click", (event) => {
    downloadActivityOperationalPackage(event.currentTarget.dataset.downloadOperationalPackage);
  });
  container.querySelector("[data-activity-intake-download]")?.addEventListener("click", (event) => {
    downloadActivityIntakeGuide(event.currentTarget.dataset.activityIntakeDownload);
  });
  container.querySelector("[data-activity-intake-actions]")?.addEventListener("click", (event) => {
    createActivityIntakeActions(event.currentTarget.dataset.activityIntakeActions);
  });
  container.querySelector("[data-create-selected-gap-actions]")?.addEventListener("click", (event) => {
    const activityName = event.currentTarget.dataset.createSelectedGapActions;
    let created = 0;
    activityGapItems(activityName).forEach((gap) => {
      if (!activityGapActionExists(gap)) {
        state.actions.unshift(activityGapActionPayload(activityName, gap));
        created += 1;
      }
    });
    addMessage("agent", created ? `Cree ${created} accion(es) para preparar ${activityName} antes de operar.` : `Ya existen acciones abiertas para las brechas de ${activityName}.`);
    saveState();
    renderAll();
  });
  container.querySelector("#activityEditForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveSelectedActivity();
  });
  container.querySelectorAll("[data-risk-field]").forEach((field) => {
    field.addEventListener("change", () => updateActivityRiskField(field));
  });
  container.querySelectorAll("[data-equipment-field]").forEach((field) => {
    field.addEventListener("change", () => updateActivityEquipmentField(field));
  });
  container.querySelectorAll("[data-person-field]").forEach((field) => {
    field.addEventListener("change", () => updateActivityPersonField(field));
  });
  container.querySelectorAll("[data-policy-field]").forEach((field) => {
    field.addEventListener("change", () => updateActivityPolicyField(field));
  });
  container.querySelectorAll("[data-participant-field]").forEach((field) => {
    field.addEventListener("change", () => updateActivityParticipantField(field));
  });
}

function renderPeople() {
  const container = document.querySelector("#peopleTable");
  container.innerHTML = state.people.length
    ? state.people.map((person, index) => `
      <div class="simple-row module-row">
        <div><strong>${person.name}</strong><div class="muted">${person.role} - Actividad: ${itemActivityName(person)} - ${person.training}</div></div>
        <span class="badge ${person.competence === "cumple" ? "cumple" : "no_cumple"}">${person.competence}</span>
        <button class="secondary-button" data-toggle-person="${index}" type="button">${person.competence === "cumple" ? "Pendiente" : "Cumple"}</button>
      </div>`).join("")
    : `<div class="muted">No hay personal registrado.</div>`;
  container.querySelectorAll("[data-toggle-person]").forEach((button) => {
    button.addEventListener("click", () => {
      const person = state.people[Number(button.dataset.togglePerson)];
      person.competence = person.competence === "cumple" ? "pendiente" : "cumple";
      if (person.competence === "cumple") state.compliance["7.2"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
}

function trainingNeedComplete(item) {
  return ["cerrada", "realizada"].includes(item.status) && item.evaluation && item.certificate && item.evidence;
}

function competencyRequirementsForActivity(activityName) {
  const lower = String(activityName || "").toLowerCase();
  const topics = [
    "Primeros auxilios y respuesta a emergencias",
    "Gestion de riesgos y briefing de seguridad",
    "Comunicacion con participantes antes, durante y despues"
  ];
  if (lower.includes("rafting") || lower.includes("rio") || lower.includes("agua")) {
    topics.push("Rescate acuatico y lectura de caudal");
  } else if (lower.includes("cuatrimoto") || lower.includes("moto")) {
    topics.push("Conduccion segura, control de velocidad y ruta motorizada");
  } else if (lower.includes("sender") || lower.includes("caminata") || lower.includes("trek")) {
    topics.push("Orientacion, terreno, clima y manejo de grupos");
  } else {
    topics.push("Operacion segura especifica de la actividad");
  }
  return topics;
}

function competencyMatrixRows() {
  return state.activities.map((activity) => {
    const related = activityRelatedItems(activity.name);
    const guides = related.people;
    const competentGuides = guides.filter((person) => person.competence === "cumple");
    const openTraining = state.trainingNeeds.filter((item) => itemActivityName(item) === activity.name && !trainingNeedComplete(item));
    const requirements = competencyRequirementsForActivity(activity.name);
    const highRisks = related.risks.filter((risk) => riskLevel(risk) >= 12).length;
    const missing = [];
    if (!guides.length) missing.push("asignar guia");
    if (!competentGuides.length) missing.push("competencia vigente");
    if (!openTraining.length && competentGuides.length < guides.length) missing.push("necesidad de capacitacion");
    if (highRisks && !openTraining.some((item) => String(item.topic || "").toLowerCase().includes("riesgo"))) missing.push("capacitacion por riesgo alto");
    const scoreParts = [
      guides.length > 0,
      competentGuides.length > 0,
      openTraining.length > 0 || competentGuides.length === guides.length,
      highRisks === 0 || openTraining.length > 0
    ];
    const score = Math.round((scoreParts.filter(Boolean).length / scoreParts.length) * 100);
    return { activity, guides, competentGuides, openTraining, requirements, highRisks, missing, score };
  });
}

function competencyMatrixText() {
  const rows = competencyMatrixRows();
  return [
    "Matriz de competencia por actividad - SGSTA Agent",
    "",
    "Criterio:",
    "Cada actividad debe tener guia/persona competente, necesidades de capacitacion identificadas, evidencias y certificados vigentes segun los riesgos de la operacion.",
    "",
    ...rows.flatMap((row) => [
      `${row.activity.name} (${row.score}%):`,
      `- Guias/personas: ${row.guides.map((person) => `${person.name} (${person.competence || "pendiente"})`).join(", ") || "sin guia"}`,
      `- Requisitos sugeridos: ${row.requirements.join("; ")}`,
      `- Capacitaciones abiertas: ${row.openTraining.map((item) => item.topic).join(", ") || "ninguna"}`,
      `- Brechas: ${row.missing.join(", ") || "sin brechas visibles"}`,
      ""
    ])
  ].join("\n");
}

function downloadCompetencyMatrix() {
  const blob = new Blob([competencyMatrixText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "matriz_competencia_por_actividad.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Matriz de competencia descargada",
    detail: "Se descargo la matriz de competencia por actividad.",
    code: "7.2",
    type: "capacitacion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createCompetencyTrainingNeeds() {
  let created = 0;
  competencyMatrixRows().forEach((row) => {
    if (!row.missing.length) return;
    const topic = `Competencia operacional para ${row.activity.name}`;
    if (!state.trainingNeeds.some((item) => item.topic === topic && itemActivityName(item) === row.activity.name && !trainingNeedComplete(item))) {
      state.trainingNeeds.unshift({
        topic,
        activity: row.activity.name,
        person: row.guides[0]?.name || row.activity.leader || "Guia por definir",
        objective: `Cerrar brechas: ${row.missing.join(", ")}. Requisitos: ${row.requirements.join("; ")}.`,
        origin: row.highRisks ? "riesgo alto/competencia" : "competencia",
        priority: row.missing.some((item) => ["competencia vigente", "asignar guia"].includes(item)) ? "alta" : "media",
        status: "pendiente",
        code: "7.2",
        date: "",
        evaluation: "",
        certificate: "",
        evidence: ""
      });
      created += 1;
    }
  });
  state.compliance["7.2"] = "en_proceso";
  state.compliance["7.3"] = "en_proceso";
  recordAuditEvent({
    title: "Necesidades de competencia creadas",
    detail: `Se crearon ${created} necesidad(es) desde la matriz por actividad.`,
    code: "7.2",
    type: "capacitacion",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} necesidad(es) de capacitacion desde la matriz de competencia.` : "La matriz no encontro nuevas necesidades o ya estaban abiertas.");
  saveState();
  renderAll();
}

function renderCompetencyMatrix() {
  const container = document.querySelector("#competencyMatrix");
  if (!container) return;
  const rows = competencyMatrixRows();
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length) : 0;
  const blocked = rows.filter((row) => row.missing.length).length;
  container.innerHTML = `
    <article class="competency-card">
      <div class="competency-head">
        <div>
          <p class="eyebrow">Matriz por actividad</p>
          <h3>Competencia antes de operar</h3>
          <p>Relaciona actividades, guias, riesgos y capacitaciones para evidenciar 7.2 y 7.3.</p>
        </div>
        <div class="pilot-score">
          <strong>${average}%</strong>
          <span>${blocked} con brecha</span>
        </div>
      </div>
      <div class="competency-grid">
        ${rows.map((row) => `
          <article class="competency-row ${row.missing.length ? "pending" : "ready"}">
            <div>
              <span class="badge requisito">7.2</span>
              <span class="badge ${row.missing.length ? "no_cumple" : "cumple"}">${row.score}%</span>
            </div>
            <strong>${row.activity.name}</strong>
            <p>Guias competentes: ${row.competentGuides.length}/${row.guides.length || 1}. Capacitaciones abiertas: ${row.openTraining.length}.</p>
            <small>${row.missing.length ? `Falta: ${row.missing.join(", ")}` : "Competencia sin brechas visibles."}</small>
          </article>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-competency-download type="button">Descargar matriz</button>
        <button data-competency-create type="button">Crear necesidades</button>
      </div>
    </article>`;
  container.querySelector("[data-competency-download]")?.addEventListener("click", downloadCompetencyMatrix);
  container.querySelector("[data-competency-create]")?.addEventListener("click", createCompetencyTrainingNeeds);
}

function detectTrainingNeeds() {
  let created = 0;
  state.people.forEach((person) => {
    const incomplete = person.competence !== "cumple" || !person.training || String(person.training).toLowerCase().includes("pendiente") || !person.evidence || !person.certificateDue;
    if (!incomplete) return;
    const topic = `Cerrar competencia de ${person.name} para ${itemActivityName(person)}`;
    if (!state.trainingNeeds.some((item) => item.topic === topic && item.status !== "cerrada")) {
      state.trainingNeeds.unshift({
        topic,
        activity: itemActivityName(person),
        person: person.name,
        origin: "competencia",
        priority: person.competence === "vencida" || person.competence === "no_cumple" ? "alta" : "media",
        status: "pendiente",
        code: "7.2",
        objective: "Verificar competencia, conciencia y evidencia vigente para operar la actividad.",
        evaluation: "",
        certificate: "",
        evidence: ""
      });
      created += 1;
    }
  });
  state.activities.forEach((activity) => {
    const highRisks = state.risks.filter((risk) => itemActivityName(risk) === activity.name && riskLevel(risk) >= 12);
    if (!highRisks.length) return;
    const topic = `Capacitacion en controles criticos para ${activity.name}`;
    if (!state.trainingNeeds.some((item) => item.topic === topic && item.status !== "cerrada")) {
      state.trainingNeeds.unshift({
        topic,
        activity: activity.name,
        person: activity.leader || "",
        origin: "riesgo alto",
        priority: "alta",
        status: "pendiente",
        code: "7.2",
        objective: `Reforzar controles de ${highRisks.map((risk) => risk.title).join(", ")}.`,
        evaluation: "",
        certificate: "",
        evidence: ""
      });
      created += 1;
    }
  });
  state.compliance["7.2"] = "en_proceso";
  state.compliance["7.3"] = "en_proceso";
  addMessage("agent", created ? `Detecte ${created} necesidad(es) de capacitacion por competencia, actividad o riesgo.` : "No detecte nuevas necesidades de capacitacion; las brechas ya estaban registradas.");
  saveState();
  renderAll();
}

function renderTraining() {
  const container = document.querySelector("#trainingTable");
  const summary = document.querySelector("#trainingSummary");
  renderCompetencyMatrix();
  if (summary) {
    const open = state.trainingNeeds.filter((item) => !trainingNeedComplete(item)).length;
    const high = state.trainingNeeds.filter((item) => item.priority === "alta" || item.priority === "critica").length;
    const complete = state.trainingNeeds.filter(trainingNeedComplete).length;
    const peopleGap = state.people.filter((person) => person.competence !== "cumple").length;
    summary.innerHTML = `
      <div class="report-card"><span>Abiertas</span><strong>${open}</strong></div>
      <div class="report-card"><span>Alta prioridad</span><strong>${high}</strong></div>
      <div class="report-card"><span>Completas</span><strong>${complete}</strong></div>
      <div class="report-card"><span>Personas brecha</span><strong>${peopleGap}</strong></div>`;
  }
  container.innerHTML = state.trainingNeeds.length
    ? state.trainingNeeds.map((item, index) => {
      const complete = trainingNeedComplete(item);
      return `
      <div class="training-card">
        <div class="action-card-head">
          <div>
            <span class="badge requisito">${item.code || "7.2"}</span>
            <span class="badge ${complete ? "cumple" : item.priority === "alta" || item.priority === "critica" ? "no_cumple" : "en_proceso"}">${complete ? "completa" : item.priority}</span>
            <span class="badge phva">${item.status || "pendiente"}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-training-action="${index}" type="button">Crear accion</button>
            <button class="secondary-button" data-close-training="${index}" type="button">${item.status === "cerrada" ? "Reabrir" : "Cerrar"}</button>
          </div>
        </div>
        <strong>${item.topic}</strong>
        <div class="muted">Actividad: ${itemActivityName(item)} - Persona: ${item.person || "por definir"} - Origen: ${item.origin}</div>
        <div class="training-edit-grid">
          <label>Objetivo<input data-training-field="${index}:objective" type="text" value="${escapeHtml(item.objective || "")}"></label>
          <label>Fecha<input data-training-field="${index}:date" type="text" value="${escapeHtml(item.date || "")}"></label>
          <label>Evaluacion<input data-training-field="${index}:evaluation" type="text" value="${escapeHtml(item.evaluation || "")}"></label>
          <label>Certificado<input data-training-field="${index}:certificate" type="text" value="${escapeHtml(item.certificate || "")}"></label>
          <label>Evidencia<input data-training-field="${index}:evidence" type="text" value="${escapeHtml(item.evidence || "")}"></label>
        </div>
      </div>`;
    }).join("")
    : `<div class="muted">No hay necesidades de capacitacion registradas.</div>`;
  container.querySelectorAll("[data-training-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const [index, key] = field.dataset.trainingField.split(":");
      const item = state.trainingNeeds[Number(index)];
      if (!item) return;
      item[key] = field.value;
      item.updatedAt = today();
      if (trainingNeedComplete(item)) {
        state.compliance["7.2"] = "en_proceso";
        state.compliance["7.3"] = "en_proceso";
      }
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-training-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.trainingNeeds[Number(button.dataset.trainingAction)];
      if (!item) return;
      createAction(`Ejecutar capacitacion: ${item.topic}`, item.code || "7.2", "preventiva", "capacitacion");
      const action = state.actions[0];
      action.relatedActivity = itemActivityName(item);
      action.responsible = item.person || state.ownerName || "";
      action.cause = item.objective || `Necesidad de capacitacion originada en ${item.origin}.`;
    });
  });
  container.querySelectorAll("[data-close-training]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.trainingNeeds[Number(button.dataset.closeTraining)];
      if (item.status !== "cerrada" && !trainingNeedComplete(item)) {
        item.status = "pendiente_evidencia";
        addMessage("agent", `No cerre la capacitacion "${item.topic}" porque falta evaluacion, certificado o evidencia.`);
      } else {
        item.status = item.status === "cerrada" ? "pendiente" : "cerrada";
      }
      if (item.status === "cerrada") {
        state.compliance["7.2"] = "en_proceso";
        state.compliance["7.3"] = "en_proceso";
      }
      saveState();
      renderAll();
    });
  });
}

function detectEquipmentGaps() {
  let created = 0;
  state.equipment.forEach((equipment) => {
    if (equipmentIsComplete(equipment)) return;
    const title = `Completar inspeccion/mantenimiento de ${equipment.name}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "7.1",
        status: "abierta",
        type: "preventiva",
        origin: "equipo",
        priority: equipment.status === "fuera_servicio" || equipment.status === "mantenimiento" ? "alta" : "media",
        responsible: equipment.responsible || state.ownerName || "",
        dueDate: equipment.nextCheck || "",
        cause: `Equipo de ${itemActivityName(equipment)} requiere estado operativo, inspeccion, mantenimiento y evidencia.`,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        relatedActivity: itemActivityName(equipment),
        sourceDetail: "Control de equipo 7.1/8.1",
        createdAt: today()
      });
      created += 1;
    }
  });
  addMessage("agent", created ? `Detecte ${created} brecha(s) de equipos y cree acciones preventivas.` : "No detecte nuevas brechas de equipos; las acciones ya existen o los equipos estan completos.");
  saveState();
  renderAll();
}

function expectedEquipmentForActivity(activityName) {
  const lower = String(activityName || "").toLowerCase();
  const base = ["Botiquin", "Comunicacion", "Lista de inspeccion"];
  if (lower.includes("rafting") || lower.includes("rio") || lower.includes("agua")) {
    return [...base, "Chaleco salvavidas", "Casco", "Cuerda/rescate acuatico"];
  }
  if (lower.includes("cuatrimoto") || lower.includes("moto")) {
    return [...base, "Casco", "Vehiculo revisado", "Kit de herramientas"];
  }
  if (lower.includes("sender") || lower.includes("caminata") || lower.includes("trek")) {
    return [...base, "Equipo de orientacion", "Linterna", "Equipo clima/terreno"];
  }
  return [...base, "Equipo especifico de la actividad"];
}

function equipmentReadinessRows() {
  return state.activities.map((activity) => {
    const items = state.equipment.filter((equipment) => itemActivityName(equipment) === activity.name);
    const completeItems = items.filter(equipmentIsComplete);
    const expected = expectedEquipmentForActivity(activity.name);
    const expectedMatched = expected.filter((expectedItem) => {
      const lower = expectedItem.toLowerCase();
      return items.some((equipment) => `${equipment.name || ""} ${equipment.type || ""}`.toLowerCase().includes(lower.split(" ")[0]));
    });
    const critical = items.filter((equipment) => ["mantenimiento", "fuera_servicio"].includes(equipment.status)).length;
    const missing = [];
    if (!items.length) missing.push("inventario por actividad");
    if (items.length && completeItems.length < items.length) missing.push("inspeccion/mantenimiento/evidencia");
    if (critical) missing.push("equipo fuera de operacion");
    if (expectedMatched.length < Math.min(3, expected.length)) missing.push("equipo minimo esperado");
    const scoreParts = [
      items.length > 0,
      completeItems.length > 0,
      completeItems.length === items.length && items.length > 0,
      critical === 0,
      expectedMatched.length >= Math.min(3, expected.length)
    ];
    const score = Math.round((scoreParts.filter(Boolean).length / scoreParts.length) * 100);
    return { activity, items, completeItems, expected, expectedMatched, critical, missing, score };
  });
}

function equipmentReadinessText() {
  return [
    "Matriz de equipos por actividad - SGSTA Agent",
    "",
    "Criterio:",
    "Cada actividad debe tener inventario asociado, estado operativo, inspeccion, mantenimiento, responsable y evidencia antes de ofertar u operar.",
    "",
    ...equipmentReadinessRows().flatMap((row) => [
      `${row.activity.name} (${row.score}%):`,
      `- Equipos registrados: ${row.items.map((item) => `${item.name} (${item.status || "revision"})`).join(", ") || "ninguno"}`,
      `- Equipos completos: ${row.completeItems.length}/${row.items.length}`,
      `- Equipo esperado: ${row.expected.join("; ")}`,
      `- Brechas: ${row.missing.join(", ") || "sin brechas visibles"}`,
      ""
    ])
  ].join("\n");
}

function downloadEquipmentReadinessMatrix() {
  const blob = new Blob([equipmentReadinessText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "matriz_equipos_por_actividad.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Matriz de equipos descargada",
    detail: "Se descargo la matriz de equipos por actividad.",
    code: "7.1",
    type: "equipo",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createEquipmentReadinessActions() {
  let created = 0;
  equipmentReadinessRows().forEach((row) => {
    if (!row.missing.length) return;
    const title = `Equipos por actividad: cerrar brechas de ${row.activity.name}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: "7.1",
      status: "abierta",
      type: "preventiva",
      origin: "equipo",
      priority: row.critical || row.missing.includes("inventario por actividad") ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: `La actividad ${row.activity.name} presenta brechas de equipo: ${row.missing.join(", ")}. Equipo esperado: ${row.expected.join("; ")}.`,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      relatedActivity: row.activity.name,
      sourceDetail: "Matriz de equipos por actividad",
      createdAt: today()
    });
    created += 1;
  });
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  recordAuditEvent({
    title: "Acciones de equipos por actividad creadas",
    detail: `Se crearon ${created} accion(es) desde la matriz de equipos.`,
    code: "7.1",
    type: "equipo",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) preventivas desde la matriz de equipos por actividad.` : "La matriz de equipos no encontro nuevas acciones o ya estaban abiertas.");
  saveState();
  renderAll();
}

function renderEquipmentReadinessMatrix() {
  const container = document.querySelector("#equipmentReadinessMatrix");
  if (!container) return;
  const rows = equipmentReadinessRows();
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length) : 0;
  const blocked = rows.filter((row) => row.missing.length).length;
  container.innerHTML = `
    <article class="equipment-matrix-card">
      <div class="competency-head">
        <div>
          <p class="eyebrow">Matriz por actividad</p>
          <h3>Equipos listos antes de operar</h3>
          <p>Relaciona inventario, inspeccion, mantenimiento, evidencia y equipo minimo esperado por actividad.</p>
        </div>
        <div class="pilot-score">
          <strong>${average}%</strong>
          <span>${blocked} con brecha</span>
        </div>
      </div>
      <div class="competency-grid">
        ${rows.map((row) => `
          <article class="competency-row ${row.missing.length ? "pending" : "ready"}">
            <div>
              <span class="badge requisito">7.1/8.1</span>
              <span class="badge ${row.missing.length ? "no_cumple" : "cumple"}">${row.score}%</span>
            </div>
            <strong>${row.activity.name}</strong>
            <p>Equipos completos: ${row.completeItems.length}/${row.items.length}. Criticos: ${row.critical}.</p>
            <small>${row.missing.length ? `Falta: ${row.missing.join(", ")}` : "Equipos sin brechas visibles."}</small>
          </article>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-equipment-matrix-download type="button">Descargar matriz</button>
        <button data-equipment-matrix-actions type="button">Crear acciones</button>
      </div>
    </article>`;
  container.querySelector("[data-equipment-matrix-download]")?.addEventListener("click", downloadEquipmentReadinessMatrix);
  container.querySelector("[data-equipment-matrix-actions]")?.addEventListener("click", createEquipmentReadinessActions);
}

function renderEquipment() {
  const container = document.querySelector("#equipmentTable");
  const summary = document.querySelector("#equipmentSummary");
  renderEquipmentReadinessMatrix();
  if (summary) {
    const complete = state.equipment.filter(equipmentIsComplete).length;
    const pending = state.equipment.length - complete;
    const out = state.equipment.filter((item) => ["mantenimiento", "fuera_servicio"].includes(item.status)).length;
    const evidenceMissing = state.equipment.filter((item) => !item.evidence).length;
    summary.innerHTML = `
      <div class="report-card"><span>Listos</span><strong>${complete}/${state.equipment.length}</strong></div>
      <div class="report-card"><span>Pendientes</span><strong>${pending}</strong></div>
      <div class="report-card"><span>Criticos</span><strong>${out}</strong></div>
      <div class="report-card"><span>Sin evidencia</span><strong>${evidenceMissing}</strong></div>`;
  }
  container.innerHTML = state.equipment.length
    ? state.equipment.map((item, index) => {
      const complete = equipmentIsComplete(item);
      return `
      <div class="equipment-card">
        <div class="action-card-head">
          <div>
            <span class="badge requisito">7.1/8.1</span>
            <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "listo" : item.status}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-equipment-action="${index}" type="button">Crear accion</button>
            <button class="secondary-button" data-toggle-equipment="${index}" type="button">${item.status === "operativo" ? "Revision" : "Operativo"}</button>
          </div>
        </div>
        <strong>${item.name}</strong>
        <div class="muted">${item.type} - Actividad: ${itemActivityName(item)} - Proxima revision: ${item.nextCheck || "Por programar"}</div>
        <div class="training-edit-grid">
          <label>Estado
            <select data-equipment-main-field="${index}:status">
              ${["operativo", "revision", "mantenimiento", "fuera_servicio"].map((value) => `<option value="${value}" ${(item.status || "revision") === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          <label>Proxima revision<input data-equipment-main-field="${index}:nextCheck" type="text" value="${escapeHtml(item.nextCheck || "")}"></label>
          <label>Inspeccion<input data-equipment-main-field="${index}:inspectionDate" type="text" value="${escapeHtml(item.inspectionDate || "")}"></label>
          <label>Mantenimiento<input data-equipment-main-field="${index}:maintenanceDate" type="text" value="${escapeHtml(item.maintenanceDate || "")}"></label>
          <label>Responsable<input data-equipment-main-field="${index}:responsible" type="text" value="${escapeHtml(item.responsible || "")}"></label>
          <label>Evidencia<input data-equipment-main-field="${index}:evidence" type="text" value="${escapeHtml(item.evidence || "")}"></label>
        </div>
      </div>`;
    }).join("")
    : `<div class="muted">No hay equipos registrados.</div>`;
  container.querySelectorAll("[data-equipment-main-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const [index, key] = field.dataset.equipmentMainField.split(":");
      const item = state.equipment[Number(index)];
      if (!item) return;
      item[key] = field.value;
      item.updatedAt = today();
      state.compliance["7.1"] = "en_proceso";
      state.compliance["8.1"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-equipment-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.equipment[Number(button.dataset.equipmentAction)];
      if (!item) return;
      detectEquipmentGaps();
    });
  });
  container.querySelectorAll("[data-toggle-equipment]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.equipment[Number(button.dataset.toggleEquipment)];
      item.status = item.status === "operativo" ? "revision" : "operativo";
      state.compliance["7.1"] = "en_proceso";
      state.compliance["8.1"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
}

function detectPolicyGaps() {
  let created = 0;
  state.activities.forEach((activity) => {
    const policies = state.policies.filter((policy) => itemActivityName(policy) === activity.name);
    const hasComplete = policies.some(policyIsComplete);
    if (hasComplete) return;
    const title = `Validar cobertura de seguro para ${activity.name}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "6.1.3",
        status: "abierta",
        type: "preventiva",
        origin: "seguro",
        priority: "alta",
        responsible: state.ownerName || "Responsable SGSTA",
        dueDate: "",
        cause: policies.length ? policies.map(policyGapReason).join(" ") : "La actividad no tiene poliza asociada.",
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        relatedActivity: activity.name,
        sourceDetail: "Cobertura de seguro 6.1.3",
        createdAt: today()
      });
      created += 1;
    }
  });
  addMessage("agent", created ? `Detecte ${created} brecha(s) de seguro por actividad y cree acciones preventivas.` : "No detecte nuevas brechas de seguro; las actividades ya tienen acciones o cobertura completa.");
  state.compliance["6.1.3"] = "en_proceso";
  saveState();
  renderAll();
}

function policyCoverageRows() {
  return state.activities.map((activity) => {
    const policies = state.policies.filter((policy) => itemActivityName(policy) === activity.name);
    const complete = policies.filter(policyIsComplete);
    const pending = policies.filter((policy) => !policyIsComplete(policy));
    const highRisks = state.risks.filter((risk) => itemActivityName(risk) === activity.name && riskLevel(risk) >= 12);
    const missing = [];
    if (!policies.length) missing.push("poliza por actividad");
    if (policies.length && !complete.length) missing.push("cobertura completa");
    if (pending.some((policy) => policy.status === "vencida")) missing.push("poliza vencida");
    if (pending.some((policy) => !policy.document && !policy.evidence)) missing.push("documento soporte");
    if (highRisks.length && !complete.length) missing.push("validar cobertura frente a riesgo alto");
    const scoreParts = [
      policies.length > 0,
      complete.length > 0,
      pending.every((policy) => policy.status !== "vencida"),
      policies.some((policy) => policy.document || policy.evidence),
      !highRisks.length || complete.length > 0
    ];
    const score = Math.round((scoreParts.filter(Boolean).length / scoreParts.length) * 100);
    return { activity, policies, complete, pending, highRisks, missing, score };
  });
}

function policyCoverageMatrixText() {
  return [
    "Matriz de seguros por actividad - SGSTA Agent",
    "",
    "Criterio:",
    "Cada actividad debe tener poliza vigente, cobertura clara, vigencia, documento soporte y relacion con riesgos antes de ofertar u operar.",
    "",
    ...policyCoverageRows().flatMap((row) => [
      `${row.activity.name} (${row.score}%):`,
      `- Polizas: ${row.policies.map((policy) => `${policy.number || "sin numero"} (${policy.status || "pendiente"})`).join(", ") || "ninguna"}`,
      `- Coberturas completas: ${row.complete.length}/${row.policies.length}`,
      `- Riesgos altos asociados: ${row.highRisks.length}`,
      `- Brechas: ${row.missing.join(", ") || "sin brechas visibles"}`,
      ""
    ])
  ].join("\n");
}

function downloadPolicyCoverageMatrix() {
  const blob = new Blob([policyCoverageMatrixText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "matriz_seguros_por_actividad.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Matriz de seguros descargada",
    detail: "Se descargo la matriz de cobertura por actividad.",
    code: "6.1.3",
    type: "seguro",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createPolicyCoverageActions() {
  let created = 0;
  policyCoverageRows().forEach((row) => {
    if (!row.missing.length) return;
    const title = `Seguros por actividad: validar cobertura de ${row.activity.name}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: "6.1.3",
      status: "abierta",
      type: "preventiva",
      origin: "seguro",
      priority: row.missing.includes("poliza vencida") || row.highRisks.length ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: `La actividad ${row.activity.name} presenta brechas de seguro: ${row.missing.join(", ")}.`,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      relatedActivity: row.activity.name,
      sourceDetail: "Matriz de seguros por actividad",
      createdAt: today()
    });
    created += 1;
  });
  state.compliance["6.1.3"] = "en_proceso";
  recordAuditEvent({
    title: "Acciones de seguros por actividad creadas",
    detail: `Se crearon ${created} accion(es) desde la matriz de seguros.`,
    code: "6.1.3",
    type: "seguro",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) preventivas desde la matriz de seguros por actividad.` : "La matriz de seguros no encontro nuevas acciones o ya estaban abiertas.");
  saveState();
  renderAll();
}

function renderPolicyCoverageMatrix() {
  const container = document.querySelector("#policyCoverageMatrix");
  if (!container) return;
  const rows = policyCoverageRows();
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length) : 0;
  const blocked = rows.filter((row) => row.missing.length).length;
  container.innerHTML = `
    <article class="policy-matrix-card">
      <div class="competency-head">
        <div>
          <p class="eyebrow">Matriz por actividad</p>
          <h3>Seguro vigente antes de ofertar</h3>
          <p>Relaciona polizas, vigencia, cobertura, soporte documental y riesgos altos por actividad.</p>
        </div>
        <div class="pilot-score">
          <strong>${average}%</strong>
          <span>${blocked} con brecha</span>
        </div>
      </div>
      <div class="competency-grid">
        ${rows.map((row) => `
          <article class="competency-row ${row.missing.length ? "pending" : "ready"}">
            <div>
              <span class="badge requisito">6.1.3</span>
              <span class="badge ${row.missing.length ? "no_cumple" : "cumple"}">${row.score}%</span>
            </div>
            <strong>${row.activity.name}</strong>
            <p>Coberturas completas: ${row.complete.length}/${row.policies.length}. Riesgos altos: ${row.highRisks.length}.</p>
            <small>${row.missing.length ? `Falta: ${row.missing.join(", ")}` : "Cobertura sin brechas visibles."}</small>
          </article>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-policy-matrix-download type="button">Descargar matriz</button>
        <button data-policy-matrix-actions type="button">Crear acciones</button>
      </div>
    </article>`;
  container.querySelector("[data-policy-matrix-download]")?.addEventListener("click", downloadPolicyCoverageMatrix);
  container.querySelector("[data-policy-matrix-actions]")?.addEventListener("click", createPolicyCoverageActions);
}

function renderPolicies() {
  const container = document.querySelector("#policiesTable");
  const summary = document.querySelector("#policiesSummary");
  renderPolicyCoverageMatrix();
  if (summary) {
    const coveredActivities = state.activities.filter((activity) => state.policies.some((policy) => itemActivityName(policy) === activity.name && policyIsComplete(policy))).length;
    const complete = state.policies.filter(policyIsComplete).length;
    const pending = state.policies.length - complete;
    const missingActivities = Math.max(0, state.activities.length - coveredActivities);
    summary.innerHTML = `
      <div class="report-card"><span>Actividades cubiertas</span><strong>${coveredActivities}/${state.activities.length}</strong></div>
      <div class="report-card"><span>Polizas completas</span><strong>${complete}</strong></div>
      <div class="report-card"><span>Polizas pendientes</span><strong>${pending}</strong></div>
      <div class="report-card"><span>Actividades sin cobertura</span><strong>${missingActivities}</strong></div>`;
  }
  container.innerHTML = state.policies.length
    ? state.policies.map((item, index) => {
      const complete = policyIsComplete(item);
      return `
      <div class="policy-card">
        <div class="action-card-head">
          <div>
            <span class="badge requisito">6.1.3</span>
            <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "cubierta" : item.status}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-policy-action="${index}" type="button">Crear accion</button>
            <button class="secondary-button" data-toggle-policy="${index}" type="button">${item.status === "vigente" ? "Pendiente" : "Vigente"}</button>
          </div>
        </div>
        <strong>${item.number} - ${item.insurer}</strong>
        <div class="muted">${item.coverage} - Actividad: ${item.activity} - Vence: ${item.due || "Por definir"}</div>
        <div class="action-close-readiness ${complete ? "ready" : "pending"}"><strong>${complete ? "Cobertura lista" : "Brecha de cobertura"}</strong><span>${policyGapReason(item)}</span></div>
        <div class="training-edit-grid">
          <label>Poliza<input data-policy-main-field="${index}:number" type="text" value="${escapeHtml(item.number || "")}"></label>
          <label>Aseguradora<input data-policy-main-field="${index}:insurer" type="text" value="${escapeHtml(item.insurer || "")}"></label>
          <label>Actividad<input data-policy-main-field="${index}:activity" type="text" value="${escapeHtml(item.activity || "")}"></label>
          <label>Vence<input data-policy-main-field="${index}:due" type="text" value="${escapeHtml(item.due || "")}"></label>
          <label>Cobertura<input data-policy-main-field="${index}:coverage" type="text" value="${escapeHtml(item.coverage || "")}"></label>
          <label>Documento<input data-policy-main-field="${index}:document" type="text" value="${escapeHtml(item.document || item.evidence || "")}"></label>
        </div>
      </div>`;
    }).join("")
    : `<div class="muted">No hay polizas registradas.</div>`;
  container.querySelectorAll("[data-policy-main-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const [index, key] = field.dataset.policyMainField.split(":");
      const item = state.policies[Number(index)];
      if (!item) return;
      item[key] = field.value;
      item.updatedAt = today();
      state.compliance["6.1.3"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-policy-action]").forEach((button) => {
    button.addEventListener("click", () => detectPolicyGaps());
  });
  container.querySelectorAll("[data-toggle-policy]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.policies[Number(button.dataset.togglePolicy)];
      item.status = item.status === "vigente" ? "pendiente" : "vigente";
      if (item.status === "vigente") state.compliance["6.1.3"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
}

function renderParticipantEvidence() {
  const container = document.querySelector("#participantsTable");
  const summary = document.querySelector("#participantsSummary");
  renderParticipantJourneyMatrix();
  if (summary) {
    const coveredActivities = state.activities.filter((activity) => participantActivityInformationIsComplete(activity.name)).length;
    const complete = state.participantEvidence.filter(participantEvidenceIsComplete).length;
    const pending = state.participantEvidence.length - complete;
    const missingActivities = Math.max(0, state.activities.length - coveredActivities);
    summary.innerHTML = `
      <div class="report-card"><span>Actividades ISO 21103</span><strong>${coveredActivities}/${state.activities.length}</strong></div>
      <div class="report-card"><span>Evidencias completas</span><strong>${complete}</strong></div>
      <div class="report-card"><span>Evidencias pendientes</span><strong>${pending}</strong></div>
      <div class="report-card"><span>Actividades incompletas</span><strong>${missingActivities}</strong></div>`;
  }
  container.innerHTML = state.participantEvidence.length
    ? state.participantEvidence.map((item, index) => {
      const complete = participantEvidenceIsComplete(item);
      return `
      <div class="participant-card">
        <div class="action-card-head">
          <div>
            <span class="badge requisito">7.4.3 / ISO 21103</span>
            <span class="badge ${complete ? "cumple" : "en_proceso"}">${complete ? "recibida" : item.status}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-participant-action="${index}" type="button">Crear accion</button>
            <button class="secondary-button" data-toggle-participant="${index}" type="button">${item.status === "recibida" ? "Pendiente" : "Recibida"}</button>
          </div>
        </div>
        <strong>${item.activity || "Actividad por definir"}</strong>
        <div class="muted">${item.kind || "Soporte externo"} - Etapa: ${item.phase || "antes"} - Consentimiento: ${item.consent || "pendiente"} - Enlace: ${item.link || "por definir"}</div>
        <div class="action-close-readiness ${complete ? "ready" : "pending"}"><strong>${complete ? "Evidencia lista" : "Brecha de participantes"}</strong><span>${participantGapReason(item)}</span></div>
        <div class="training-edit-grid">
          <label>Actividad<input data-participant-main-field="${index}:activity" type="text" value="${escapeHtml(item.activity || "")}"></label>
          <label>Etapa ISO 21103
            <select data-participant-main-field="${index}:phase">
              ${["antes", "durante", "despues"].map((value) => `<option value="${value}" ${(item.phase || "antes") === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          <label>Soporte requerido<input data-participant-main-field="${index}:kind" type="text" value="${escapeHtml(item.kind || "")}"></label>
          <label>Consentimiento
            <select data-participant-main-field="${index}:consent">
              ${["pendiente", "recibido", "aprobado"].map((value) => `<option value="${value}" ${(item.consent || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          <label>Estado
            <select data-participant-main-field="${index}:status">
              ${["pendiente", "recibida", "aprobada"].map((value) => `<option value="${value}" ${(item.status || "pendiente") === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </label>
          <label>Fecha<input data-participant-main-field="${index}:date" type="text" value="${escapeHtml(item.date || "")}"></label>
          <label>Enlace externo<input data-participant-main-field="${index}:link" type="text" value="${escapeHtml(item.link || "")}"></label>
          <label>Evidencia<input data-participant-main-field="${index}:evidence" type="text" value="${escapeHtml(item.evidence || item.document || "")}"></label>
          <label>Informacion comunicada<input data-participant-main-field="${index}:infoProvided" type="text" value="${escapeHtml(item.infoProvided || "")}"></label>
          <label>Datos solicitados al participante<input data-participant-main-field="${index}:participantInfoRequested" type="text" value="${escapeHtml(item.participantInfoRequested || "")}"></label>
          <label>Notas de comunicacion<input data-participant-main-field="${index}:communicationNotes" type="text" value="${escapeHtml(item.communicationNotes || "")}"></label>
        </div>
      </div>`;
    }).join("")
    : `<div class="muted">No hay evidencias externas de participantes.</div>`;
  container.querySelectorAll("[data-participant-main-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const [index, key] = field.dataset.participantMainField.split(":");
      const item = state.participantEvidence[Number(index)];
      if (!item) return;
      item[key] = field.value;
      item.updatedAt = today();
      state.compliance["7.4.3"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-participant-action]").forEach((button) => {
    button.addEventListener("click", () => detectParticipantGaps());
  });
  container.querySelectorAll("[data-toggle-participant]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.participantEvidence[Number(button.dataset.toggleParticipant)];
      item.status = item.status === "recibida" ? "pendiente" : "recibida";
      item.consent = item.status === "recibida" ? "recibido" : "pendiente";
      state.compliance["7.4.3"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
}

function participantJourneyRows() {
  return state.activities.map((activity) => {
    const evidences = state.participantEvidence.filter((item) => itemActivityName(item) === activity.name);
    const completeEvidences = evidences.filter(participantEvidenceIsComplete);
    const coverage = participantActivityInformationCoverage(activity.name);
    const missing = [];
    if (!coverage.before) missing.push("antes");
    if (!coverage.during) missing.push("durante");
    if (!coverage.after) missing.push("despues");
    const incomplete = evidences.filter((item) => !participantEvidenceIsComplete(item));
    if (incomplete.length) missing.push("soportes incompletos");
    const scoreParts = [
      coverage.before,
      coverage.during,
      coverage.after,
      evidences.length > 0,
      evidences.length === completeEvidences.length && evidences.length > 0
    ];
    const score = Math.round((scoreParts.filter(Boolean).length / scoreParts.length) * 100);
    return { activity, evidences, completeEvidences, coverage, incomplete, missing, score };
  });
}

function participantJourneyText() {
  return [
    "Matriz de participantes ISO 21103 - SGSTA Agent",
    "",
    "Criterio:",
    "La plataforma no guarda datos sensibles del participante en el MVP. Conserva evidencia externa/enlace y verifica informacion comunicada antes, durante y despues de la actividad.",
    "",
    ...participantJourneyRows().flatMap((row) => [
      `${row.activity.name} (${row.score}%):`,
      `- Antes: ${row.coverage.before ? "cubierto" : "pendiente"}`,
      `- Durante: ${row.coverage.during ? "cubierto" : "pendiente"}`,
      `- Despues: ${row.coverage.after ? "cubierto" : "pendiente"}`,
      `- Evidencias completas: ${row.completeEvidences.length}/${row.evidences.length}`,
      `- Brechas: ${row.missing.join(", ") || "sin brechas visibles"}`,
      ""
    ])
  ].join("\n");
}

function downloadParticipantJourneyMatrix() {
  const blob = new Blob([participantJourneyText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "matriz_participantes_iso21103.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Matriz de participantes descargada",
    detail: "Se descargo la matriz ISO 21103 de participantes por actividad.",
    code: "7.4.3",
    type: "participantes",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createParticipantJourneyActions() {
  let created = 0;
  participantJourneyRows().forEach((row) => {
    if (!row.missing.length) return;
    const title = `Participantes ISO 21103: completar ${row.activity.name}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: "7.4.3",
      status: "abierta",
      type: "preventiva",
      origin: "participantes",
      priority: row.missing.includes("antes") ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: `La actividad ${row.activity.name} presenta brechas ISO 21103: ${row.missing.join(", ")}. Mantener datos sensibles fuera de la plataforma y enlazar evidencia externa.`,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      relatedActivity: row.activity.name,
      sourceDetail: "Matriz participantes ISO 21103",
      createdAt: today()
    });
    created += 1;
  });
  state.compliance["7.4.3"] = "en_proceso";
  recordAuditEvent({
    title: "Acciones ISO 21103 creadas",
    detail: `Se crearon ${created} accion(es) desde la matriz de participantes.`,
    code: "7.4.3",
    type: "participantes",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) preventivas desde la matriz de participantes ISO 21103.` : "La matriz ISO 21103 no encontro nuevas acciones o ya estaban abiertas.");
  saveState();
  renderAll();
}

function renderParticipantJourneyMatrix() {
  const container = document.querySelector("#participantJourneyMatrix");
  if (!container) return;
  const rows = participantJourneyRows();
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length) : 0;
  const blocked = rows.filter((row) => row.missing.length).length;
  container.innerHTML = `
    <article class="participant-matrix-card">
      <div class="competency-head">
        <div>
          <p class="eyebrow">Matriz ISO 21103</p>
          <h3>Informacion del participante sin datos sensibles</h3>
          <p>Verifica evidencia externa antes, durante y despues de la actividad.</p>
        </div>
        <div class="pilot-score">
          <strong>${average}%</strong>
          <span>${blocked} con brecha</span>
        </div>
      </div>
      <div class="competency-grid">
        ${rows.map((row) => `
          <article class="competency-row ${row.missing.length ? "pending" : "ready"}">
            <div>
              <span class="badge requisito">7.4.3</span>
              <span class="badge ${row.missing.length ? "no_cumple" : "cumple"}">${row.score}%</span>
            </div>
            <strong>${row.activity.name}</strong>
            <p>Antes ${row.coverage.before ? "OK" : "falta"} - Durante ${row.coverage.during ? "OK" : "falta"} - Despues ${row.coverage.after ? "OK" : "falta"}</p>
            <small>${row.missing.length ? `Falta: ${row.missing.join(", ")}` : "Trayecto del participante cubierto."}</small>
          </article>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-participant-matrix-download type="button">Descargar matriz</button>
        <button data-participant-matrix-actions type="button">Crear acciones</button>
      </div>
    </article>`;
  container.querySelector("[data-participant-matrix-download]")?.addEventListener("click", downloadParticipantJourneyMatrix);
  container.querySelector("[data-participant-matrix-actions]")?.addEventListener("click", createParticipantJourneyActions);
}

function detectParticipantGaps() {
  let created = 0;
  state.activities.forEach((activity) => {
    const evidences = state.participantEvidence.filter((item) => itemActivityName(item) === activity.name);
    const hasComplete = participantActivityInformationIsComplete(activity.name);
    if (hasComplete) return;
    const title = `Completar informacion ISO 21103 de participantes para ${activity.name}`;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: "7.4.3",
        status: "abierta",
        type: "preventiva",
        origin: "participantes",
        priority: "media",
        responsible: state.ownerName || "Responsable SGSTA",
        dueDate: "",
        cause: participantActivityGapReason(activity.name, evidences),
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        relatedActivity: activity.name,
        sourceDetail: "Participantes 7.4.3 / ISO 21103",
        createdAt: today()
      });
      created += 1;
    }
  });
  addMessage("agent", created ? `Detecte ${created} brecha(s) ISO 21103 de participantes por actividad y cree acciones preventivas.` : "No detecte nuevas brechas ISO 21103 de participantes; las actividades ya tienen acciones abiertas o evidencia completa.");
  state.compliance["7.4.3"] = "en_proceso";
  saveState();
  renderAll();
}

function renderRisks() {
  const container = document.querySelector("#risksTable");
  container.innerHTML = state.risks.length
    ? state.risks.map((risk, index) => {
      const level = riskLevel(risk);
      const badge = level >= 12 ? "no_cumple" : level >= 6 ? "en_proceso" : "cumple";
      return `
        <div class="simple-row module-row">
          <div><strong>${risk.title}</strong><div class="muted">${risk.activity} - Control: ${risk.control}</div></div>
          <span class="badge ${badge}">${riskLabel(level)} (${level})</span>
          <button class="secondary-button" data-remove="risks:${index}" type="button">Quitar</button>
        </div>`;
    }).join("")
    : `<div class="muted">No hay riesgos registrados.</div>`;
  bindRemoveButtons(container);
}

function renderDocuments() {
  const container = document.querySelector("#documentsTable");
  container.innerHTML = state.documents.length
    ? state.documents.map((doc, index) => `
      <div class="simple-row module-row">
        <div><strong>${doc.title}</strong><div class="muted">Requisito ${doc.code} - ${doc.content ? "con borrador IA" : "sin contenido"}</div></div>
        <span class="badge ${doc.status === "aprobado" ? "cumple" : "en_proceso"}">${doc.status}</span>
        <div class="row-actions">
          <button class="secondary-button" data-preview-doc="${index}" type="button">Ver</button>
          <button class="secondary-button" data-toggle-doc="${index}" type="button">${doc.status === "aprobado" ? "Borrador" : "Aprobar"}</button>
        </div>
      </div>`).join("")
    : `<div class="muted">No hay documentos registrados.</div>`;
  container.querySelectorAll("[data-preview-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDocumentIndex = Number(button.dataset.previewDoc);
      saveState();
      renderDocumentPreview();
    });
  });
  container.querySelectorAll("[data-toggle-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      const doc = state.documents[Number(button.dataset.toggleDoc)];
      doc.status = doc.status === "aprobado" ? "borrador" : "aprobado";
      if (doc.status === "aprobado") state.compliance[doc.code] = "en_proceso";
      saveState();
      renderAll();
    });
  });
  renderDocumentPreview();
}

function renderDocumentPreview() {
  const preview = document.querySelector("#documentPreview");
  const doc = state.documents[state.selectedDocumentIndex] || state.documents[0];
  if (!doc) {
    preview.innerHTML = `<p class="muted">Selecciona o genera un documento para ver la vista previa.</p>`;
    return;
  }
  const content = doc.content || "Este documento aun no tiene borrador generado por el agente.";
  preview.innerHTML = `
    <div class="document-meta">
      <span class="badge en_proceso">${doc.code}</span>
      <span class="badge ${doc.status === "aprobado" ? "cumple" : "en_proceso"}">${doc.status}</span>
    </div>
    <h3>${doc.title}</h3>
    <pre>${escapeHtml(content)}</pre>`;
}

function selectedDocument() {
  return state.documents[state.selectedDocumentIndex] || state.documents[0] || null;
}

function documentFilename(doc) {
  return `${(doc?.title || "documento_sgsta").toLowerCase().replaceAll(" ", "_").replaceAll("/", "-")}.txt`;
}

function downloadSelectedDocument() {
  const doc = selectedDocument();
  if (!doc) return;
  const content = doc.content || "Documento sin borrador generado.";
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = documentFilename(doc);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Documento descargado",
    detail: `${doc.title} fue descargado en formato TXT.`,
    code: doc.code,
    type: "documento",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function printSelectedDocument() {
  const doc = selectedDocument();
  if (!doc) return;
  const content = doc.content || "Documento sin borrador generado.";
  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) {
    addMessage("agent", "No pude abrir la ventana de impresion. Revisa si el navegador bloqueo ventanas emergentes.");
    return;
  }
  printWindow.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(doc.title)}</title>
        <style>
          body { font-family: Segoe UI, Arial, sans-serif; margin: 32px; color: #17202a; }
          h1 { font-size: 22px; margin-bottom: 8px; }
          .meta { color: #52637a; margin-bottom: 20px; }
          pre { white-space: pre-wrap; line-height: 1.5; font-family: Segoe UI, Arial, sans-serif; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(doc.title)}</h1>
        <div class="meta">Requisito ${escapeHtml(doc.code || "")} - Estado ${escapeHtml(doc.status || "borrador")}</div>
        <pre>${escapeHtml(content)}</pre>
      </body>
    </html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  recordAuditEvent({
    title: "Documento enviado a impresion",
    detail: `${doc.title} fue preparado para impresion.`,
    code: doc.code,
    type: "documento",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function renderIncidents() {
  const container = document.querySelector("#incidentsTable");
  container.innerHTML = state.incidents.length
    ? state.incidents.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.title}</strong><div class="muted">${item.activity} - ${item.date}</div></div>
        <span class="badge ${item.status === "cerrado" ? "cumple" : "no_cumple"}">${item.status}</span>
        <button class="secondary-button" data-remove="incidents:${index}" type="button">Quitar</button>
      </div>`).join("")
    : `<div class="muted">No hay incidentes registrados.</div>`;
  bindRemoveButtons(container);
}

function renderAudits() {
  const container = document.querySelector("#auditsTable");
  container.innerHTML = state.audits.length
    ? state.audits.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.title}</strong><div class="muted">${item.scope} - ${item.date}</div></div>
        <span class="badge en_proceso">${item.status}</span>
        <button class="secondary-button" data-remove="audits:${index}" type="button">Quitar</button>
      </div>`).join("")
    : `<div class="muted">No hay auditorias programadas.</div>`;
  bindRemoveButtons(container);
}

function managementReviewOperationalDecisions() {
  const readiness = state.activities.map((activity) => {
    const status = activityReadiness(activity.name);
    const decision = activityOperationDecision(status);
    return { activity, status, decision };
  });
  const blocked = readiness.filter((item) => item.decision.badge === "no_cumple");
  const review = readiness.filter((item) => item.decision.badge === "en_proceso");
  const highRisks = state.risks.filter((risk) => riskLevel(risk) >= 12);
  const equipmentPending = state.equipment.filter((item) => item.status !== "operativo");
  const peoplePending = state.people.filter((person) => person.competence !== "cumple");
  const trainingOpen = state.trainingNeeds.filter((item) => item.status !== "cerrada" && item.status !== "realizada");
  const policiesPending = state.policies.filter((policy) => !policyIsComplete(policy));
  const formsPending = formCoverageByRequirement().reduce((sum, group) => sum + group.pending, 0);
  const decisions = [];
  if (blocked.length) {
    decisions.push({
      title: "No ofertar actividades bloqueadas",
      detail: `${blocked.map((item) => item.activity.name).join(", ")} tienen brechas criticas antes de operar.`,
      requirement: "8.1",
      priority: "alta",
      type: "preventiva",
      origin: "revision direccion",
      actionTitle: "Bloquear oferta de actividades con brechas criticas hasta cierre validado"
    });
  }
  if (review.length) {
    decisions.push({
      title: "Operar solo con revision documentada",
      detail: `${review.map((item) => item.activity.name).join(", ")} requieren soportes o aprobaciones pendientes.`,
      requirement: "8.1",
      priority: "media",
      type: "mejora",
      origin: "revision direccion",
      actionTitle: "Definir condiciones de operacion para actividades en revision"
    });
  }
  if (highRisks.length) {
    decisions.push({
      title: "Aprobar tratamiento de riesgos altos",
      detail: `${highRisks.length} riesgo(s) alto(s) necesitan controles preventivos y responsable.`,
      requirement: "6.1.2",
      priority: "alta",
      type: "preventiva",
      origin: "riesgo",
      actionTitle: "Aprobar y ejecutar tratamiento de riesgos altos"
    });
  }
  if (equipmentPending.length) {
    decisions.push({
      title: "Asignar recursos para equipos",
      detail: `${equipmentPending.length} equipo(s) no estan operativos o requieren revision/mantenimiento.`,
      requirement: "7.1",
      priority: "alta",
      type: "preventiva",
      origin: "equipo vencido",
      actionTitle: "Aprobar inspeccion, mantenimiento o reposicion de equipos"
    });
  }
  if (peoplePending.length || trainingOpen.length) {
    decisions.push({
      title: "Cerrar competencia y capacitacion",
      detail: `${peoplePending.length} persona(s) sin competencia vigente y ${trainingOpen.length} necesidad(es) de capacitacion abiertas.`,
      requirement: "7.2",
      priority: peoplePending.length ? "alta" : "media",
      type: "mejora",
      origin: "capacitacion vencida",
      actionTitle: "Aprobar plan de capacitacion y evaluacion de competencia"
    });
  }
  if (policiesPending.length) {
    decisions.push({
      title: "Validar seguros antes de vender",
      detail: `${policiesPending.length} poliza(s) no tienen cobertura completa, vigencia o soporte.`,
      requirement: "6.1.3",
      priority: "alta",
      type: "preventiva",
      origin: "documento vencido",
      actionTitle: "Validar cobertura de polizas por actividad"
    });
  }
  if (formsPending) {
    decisions.push({
      title: "Aprobar evidencias y formularios",
      detail: `${formsPending} formulario(s) siguen sin diligenciar y no cuentan para completitud.`,
      requirement: "7.5",
      priority: "media",
      type: "tarea",
      origin: "documento vencido",
      actionTitle: "Revisar, completar y aprobar formularios pendientes"
    });
  }
  if (!decisions.length) {
    decisions.push({
      title: "Mantener seguimiento del SGSTA",
      detail: "No hay bloqueos criticos. Mantener revision periodica, vigencias y eficacia de acciones.",
      requirement: "9.3",
      priority: "baja",
      type: "mejora",
      origin: "revision direccion",
      actionTitle: "Mantener seguimiento periodico del SGSTA"
    });
  }
  return decisions;
}

function managementReviewActivityRows() {
  return state.activities.map((activity) => {
    const status = activityReadiness(activity.name);
    const decision = activityOperationDecision(status);
    const checklist = activityDepartureChecklist(activity.name);
    return {
      name: activity.name,
      decision: decision.label,
      badge: decision.badge,
      score: status.score,
      high: status.high,
      checklistReady: checklist.filter((item) => item.ok).length,
      checklistTotal: checklist.length,
      nextGap: status.gaps[0]?.label || "Sin brecha visible"
    };
  });
}

function renderManagementReviews() {
  const container = document.querySelector("#managementReviewTable");
  const inputs = managementReviewInputs();
  container.innerHTML = state.managementReviews.length
    ? state.managementReviews.map((item, index) => `
      <article class="management-review-card">
        <div class="action-card-head">
          <div>
            <span class="badge requisito">9.3</span>
            <span class="badge ${item.status === "aprobada" ? "cumple" : "en_proceso"}">${item.status}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-refresh-review="${index}" type="button">Actualizar datos</button>
            <button class="secondary-button" data-review-actions="${index}" type="button">Crear acciones</button>
            <button class="secondary-button" data-toggle-review="${index}" type="button">${item.status === "aprobada" ? "Borrador" : "Aprobar"}</button>
          </div>
        </div>
        <h3>${item.period}</h3>
        <p class="muted">${item.summary}</p>
        <div class="review-input-grid">
          <div><span>Acciones abiertas</span><strong>${item.inputs?.openActions ?? inputs.openActions}</strong></div>
          <div><span>Brechas actividad</span><strong>${item.inputs?.activityGaps ?? inputs.activityGaps}</strong></div>
          <div><span>No ofertar todavia</span><strong>${item.inputs?.activitiesBlocked ?? inputs.activitiesBlocked}</strong></div>
          <div><span>Con revision</span><strong>${item.inputs?.activitiesInReview ?? inputs.activitiesInReview}</strong></div>
          <div><span>Pend. eficacia</span><strong>${item.inputs?.pendingEfficacy ?? inputs.pendingEfficacy}</strong></div>
          <div><span>Riesgos altos</span><strong>${item.inputs?.highRisks ?? inputs.highRisks}</strong></div>
          <div><span>Capacitacion</span><strong>${item.inputs?.trainingOpen ?? inputs.trainingOpen}</strong></div>
          <div><span>Equipos no listos</span><strong>${item.inputs?.equipmentPending ?? inputs.equipmentPending}</strong></div>
          <div><span>Polizas pendientes</span><strong>${item.inputs?.policiesPending ?? inputs.policiesPending}</strong></div>
          <div><span>Obs. piloto abiertas</span><strong>${item.inputs?.pilotObservationsOpen ?? inputs.pilotObservationsOpen}</strong></div>
        </div>
        <div class="review-decision-panel">
          <div>
            <p class="eyebrow">Agenda de decisiones</p>
            <strong>Lo que la direccion debe resolver</strong>
          </div>
          <div class="review-decision-grid">
            ${(item.operationalDecisions?.length ? item.operationalDecisions : managementReviewOperationalDecisions()).map((decision) => `
              <article class="review-decision-card">
                <div>
                  <span class="badge requisito">${decision.requirement}</span>
                  <span class="badge ${decision.priority === "alta" ? "no_cumple" : decision.priority === "media" ? "en_proceso" : "cumple"}">${decision.priority}</span>
                </div>
                <strong>${escapeHtml(decision.title)}</strong>
                <p>${escapeHtml(decision.detail)}</p>
              </article>`).join("")}
          </div>
        </div>
        <div class="review-activity-panel">
          <div>
            <p class="eyebrow">Actividades para decision</p>
            <strong>Operacion resumida para direccion</strong>
          </div>
          <div class="review-activity-grid">
            ${(item.activityRows?.length ? item.activityRows : managementReviewActivityRows()).map((row) => `
              <article class="review-activity-card ${row.badge}">
                <span class="badge ${row.badge}">${escapeHtml(row.decision)}</span>
                <strong>${escapeHtml(row.name)}</strong>
                <p>${row.score}% preparada - ${row.checklistReady}/${row.checklistTotal} antes de salir - ${row.high} critica(s)</p>
                <small>${escapeHtml(row.nextGap)}</small>
              </article>`).join("") || `<div class="muted">No hay actividades registradas para presentar a direccion.</div>`}
          </div>
        </div>
        <div class="review-detail-grid">
          <div>
            <strong>Entradas principales</strong>
            <ul>${(item.entries || []).map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
          </div>
          <div>
            <strong>Decisiones sugeridas</strong>
            <ul>${(item.decisions || []).map((decision) => `<li>${escapeHtml(decision)}</li>`).join("")}</ul>
          </div>
          <div>
            <strong>Recursos requeridos</strong>
            <ul>${(item.resources || []).map((resource) => `<li>${escapeHtml(resource)}</li>`).join("")}</ul>
          </div>
          <div>
            <strong>Salidas / acciones</strong>
            <ul>${(item.outputs || []).map((output) => `<li>${escapeHtml(output)}</li>`).join("")}</ul>
          </div>
        </div>
      </article>`).join("")
    : `<div class="muted">No hay revisiones por la direccion preparadas.</div>`;
  container.querySelectorAll("[data-toggle-review]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.managementReviews[Number(button.dataset.toggleReview)];
      item.status = item.status === "aprobada" ? "borrador" : "aprobada";
      if (item.status === "aprobada") state.compliance["9.3"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-review-actions]").forEach((button) => {
    button.addEventListener("click", () => createManagementReviewActions(Number(button.dataset.reviewActions)));
  });
  container.querySelectorAll("[data-refresh-review]").forEach((button) => {
    button.addEventListener("click", () => refreshManagementReview(Number(button.dataset.refreshReview)));
  });
}

function managementReviewInputs() {
  const activityGaps = state.activities.reduce((sum, activity) => sum + activityGapItems(activity.name).length, 0);
  const activityStatuses = state.activities.map((activity) => {
    const readiness = activityReadiness(activity.name);
    return activityOperationDecision(readiness).badge;
  });
  const pilotSummary = pilotObservationSummary();
  return {
    openActions: state.actions.filter((item) => item.status !== "cerrada").length,
    pendingEfficacy: state.actions.filter((item) => item.status === "pendiente_eficacia").length,
    highRisks: state.risks.filter((risk) => riskLevel(risk) >= 12).length,
    activityGaps,
    activitiesReady: activityStatuses.filter((status) => status === "cumple").length,
    activitiesInReview: activityStatuses.filter((status) => status === "en_proceso").length,
    activitiesBlocked: activityStatuses.filter((status) => status === "no_cumple").length,
    audits: state.audits.length,
    incidents: state.incidents.length,
    trainingOpen: state.trainingNeeds.filter((item) => item.status !== "cerrada" && item.status !== "realizada").length,
    equipmentPending: state.equipment.filter((item) => item.status !== "operativo").length,
    policiesPending: state.policies.filter((policy) => !policyIsComplete(policy)).length,
    formsPending: formCoverageByRequirement().reduce((sum, group) => sum + group.pending, 0),
    pilotObservations: pilotSummary.total,
    pilotObservationsOpen: pilotSummary.open,
    pilotObservationsHigh: pilotSummary.high,
    pilotObservationsConverted: pilotSummary.converted
  };
}

function buildManagementReviewDraft() {
  const inputs = managementReviewInputs();
  const operationalDecisions = managementReviewOperationalDecisions();
  const activityRows = managementReviewActivityRows();
  const priorityActivities = state.activities
    .map((activity) => ({ name: activity.name, readiness: activityReadiness(activity.name) }))
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score)
    .slice(0, 3);
  const entries = [
    `Acciones abiertas: ${inputs.openActions}, con ${inputs.pendingEfficacy} pendiente(s) de eficacia.`,
    `Brechas operacionales por actividad: ${inputs.activityGaps}.`,
    `Actividades listas: ${inputs.activitiesReady}; con revision: ${inputs.activitiesInReview}; no ofertar todavia: ${inputs.activitiesBlocked}.`,
    `Riesgos altos: ${inputs.highRisks}; incidentes registrados: ${inputs.incidents}.`,
    `Capacitaciones abiertas: ${inputs.trainingOpen}; equipos no operativos: ${inputs.equipmentPending}.`,
    `Polizas sin cobertura completa: ${inputs.policiesPending}; formularios pendientes: ${inputs.formsPending}.`,
    `Observaciones de piloto: ${inputs.pilotObservations}, abiertas: ${inputs.pilotObservationsOpen}, altas: ${inputs.pilotObservationsHigh}, convertidas en acciones: ${inputs.pilotObservationsConverted}.`,
    ...priorityPilotObservations(3).map((item) => `Observacion prioritaria piloto (${item.priority || "media"}): ${item.text}`)
  ];
  const decisions = [
    inputs.activityGaps ? `Priorizar cierre de brechas en actividades: ${priorityActivities.map((item) => item.name).join(", ") || "por definir"}.` : "Mantener controles operacionales actuales.",
    inputs.activitiesBlocked ? "La direccion debe decidir no ofertar actividades bloqueadas hasta cerrar brechas criticas." : "No hay actividades bloqueadas por brechas criticas.",
    inputs.highRisks ? "Aprobar tratamiento inmediato para riesgos altos antes de operar actividades criticas." : "Mantener seguimiento preventivo de riesgos.",
    inputs.pendingEfficacy ? "La direccion debe revisar acciones pendientes de eficacia antes de considerar controles como cerrados." : "No hay acciones pendientes de eficacia.",
    inputs.trainingOpen ? "Aprobar plan de capacitacion y competencia por actividad." : "Mantener vigilancia de competencias vigentes.",
    inputs.policiesPending ? "Exigir validacion documental de polizas antes de ofertar actividades no cubiertas." : "Mantener control de vigencias de polizas.",
    inputs.pilotObservationsOpen ? "Decidir cuales observaciones del piloto se convierten en mejora antes de la siguiente demo." : "Mantener registro de aprendizajes del piloto."
  ];
  const resources = [
    inputs.equipmentPending ? "Presupuesto/tiempo para inspeccion, mantenimiento o reposicion de equipos." : "Recursos actuales de equipos sin solicitud critica.",
    inputs.trainingOpen ? "Horas de instructor, evaluacion de competencia y emision de certificados." : "Recursos de capacitacion bajo demanda.",
    inputs.formsPending ? "Tiempo del responsable SGSTA para revisar formularios y evidencias." : "Tiempo de seguimiento documental normal.",
    inputs.pilotObservationsOpen ? "Tiempo de producto/implementacion para ajustar pantallas, reportes o formularios observados en piloto." : "Sin recursos adicionales por observaciones del piloto."
  ];
  const outputs = [
    "Asignar responsables y fechas a acciones abiertas prioritarias.",
    "Validar evidencias antes de cerrar acciones.",
    "Verificar eficacia de acciones implementadas antes de cerrar mejora.",
    "Actualizar tablero de brechas por actividad despues de cada cierre.",
    "Registrar decisiones aprobadas por direccion y recursos autorizados.",
    inputs.pilotObservationsOpen ? "Convertir observaciones abiertas de piloto en acciones de mejora 10.2." : "Mantener observaciones de piloto cerradas o trazadas."
  ];
  return {
    period: `Revision ${today()}`,
    summary: `Entradas 9.3 preparadas por el agente: ${inputs.openActions} acciones, ${inputs.activityGaps} brechas por actividad, ${inputs.highRisks} riesgos altos, ${inputs.trainingOpen} capacitaciones abiertas y ${inputs.pilotObservationsOpen} observaciones piloto abiertas.`,
    status: "borrador",
    inputs,
    entries,
    decisions,
    resources,
    outputs,
    operationalDecisions,
    activityRows,
    preparedBy: "agente",
    createdAt: today()
  };
}

function refreshManagementReview(index = 0) {
  if (!state.managementReviews.length) {
    addManagementReview({ silent: true });
    addMessage("agent", "Prepare una revision por la direccion con los datos operativos actuales.");
    saveState();
    renderAll();
    return;
  }
  const current = state.managementReviews[index] || state.managementReviews[0];
  const updated = buildManagementReviewDraft();
  Object.assign(current, {
    summary: updated.summary,
    inputs: updated.inputs,
    entries: updated.entries,
    decisions: updated.decisions,
    resources: updated.resources,
    outputs: updated.outputs,
    operationalDecisions: updated.operationalDecisions,
    activityRows: updated.activityRows,
    updatedAt: today()
  });
  if (current.status === "aprobada") current.status = "borrador";
  state.compliance["9.3"] = "en_proceso";
  recordAuditEvent({
    title: "Revision por direccion actualizada",
    detail: "El agente actualizo entradas, decisiones y actividades operativas para 9.3.",
    code: "9.3",
    type: "revision_direccion",
    actor: "agente"
  });
  addMessage("agent", "Actualice la revision por la direccion con el estado actual de actividades, riesgos, equipos, seguros, capacitacion y formularios.");
  saveState();
  renderAll();
}

function createManagementReviewActions(index) {
  const review = state.managementReviews[index];
  if (!review) return;
  const outputActions = (review.outputs || []).map((output) => ({
    title: `Revision direccion: ${output}`,
    code: "9.3",
    type: "mejora",
    origin: "revision direccion",
    priority: "media",
    cause: review.summary
  }));
  const decisionActions = (review.operationalDecisions?.length ? review.operationalDecisions : managementReviewOperationalDecisions()).map((decision) => ({
    title: `Decision direccion: ${decision.actionTitle}`,
    code: decision.requirement || "9.3",
    type: decision.type || "mejora",
    origin: decision.origin || "revision direccion",
    priority: decision.priority || "media",
    cause: `${decision.title}: ${decision.detail}`
  }));
  [...decisionActions, ...outputActions].forEach((payload) => {
    const title = payload.title;
    if (!state.actions.some((action) => action.title === title && action.status !== "cerrada")) {
      state.actions.unshift({
        title,
        code: payload.code,
        status: "abierta",
        type: payload.type,
        origin: payload.origin,
        priority: payload.priority,
        responsible: state.ownerName || "Responsable SGSTA",
        dueDate: "",
        cause: payload.cause,
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        evidence: "",
        createdAt: today()
      });
    }
  });
  addMessage("agent", "Cree acciones de seguimiento para las salidas de la revision por la direccion.");
  saveState();
  renderAll();
}

function reportStats() {
  const totalScore = requirements.reduce((sum, item) => sum + requirementCompletionScore(item.code), 0);
  const compliance = Math.round((totalScore / requirements.length) * 100);
  const coverage = formCoverageByRequirement();
  const pendingForms = coverage.reduce((sum, item) => sum + item.pending, 0);
  const approvedForms = coverage.reduce((sum, item) => sum + item.complete, 0);
  const openActions = state.actions.filter((item) => item.status !== "cerrada");
  const highRisks = state.risks.filter((risk) => riskLevel(risk) >= 12);
  const pendingEvidence = state.evidence.filter((item) => item.status === "sugerida");
  return { compliance, coverage, pendingForms, approvedForms, openActions, highRisks, pendingEvidence };
}

function renderExecutiveReport() {
  const summary = document.querySelector("#reportSummary");
  const findings = document.querySelector("#reportFindings");
  const preview = document.querySelector("#reportPreview");
  if (!summary || !findings || !preview) return;
  const stats = reportStats();
  summary.innerHTML = `
    <div class="report-card"><span>Cumplimiento</span><strong>${stats.compliance}%</strong></div>
    <div class="report-card"><span>Acciones abiertas</span><strong>${stats.openActions.length}</strong></div>
    <div class="report-card"><span>Formularios pendientes</span><strong>${stats.pendingForms}</strong></div>
    <div class="report-card"><span>Formularios aprobados</span><strong>${stats.approvedForms}</strong></div>
    <div class="report-card"><span>Riesgos altos</span><strong>${stats.highRisks.length}</strong></div>
    <div class="report-card"><span>Evidencias sugeridas</span><strong>${stats.pendingEvidence.length}</strong></div>`;
  const gaps = executiveReportFindings(stats);
  findings.innerHTML = gaps.length
    ? gaps.map((gap) => `
      <div class="simple-row finding-row">
        <div><strong>${gap.title}</strong><div class="muted">${gap.detail}</div></div>
        <span class="badge ${gap.priority === "alta" ? "no_cumple" : "en_proceso"}">${gap.priority}</span>
        <button class="secondary-button" data-report-action="${gap.code}:${gap.title}" type="button">Crear accion</button>
      </div>`).join("")
    : `<div class="muted">No hay brechas ejecutivas nuevas en este momento.</div>`;
  findings.querySelectorAll("[data-report-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const [code, title] = button.dataset.reportAction.split(":");
      createAction(title, code, "mejora", "reporte ejecutivo");
    });
  });
  const report = state.executiveReport || generateExecutiveReport(false);
  preview.innerHTML = `<pre>${escapeHtml(report.content)}</pre>`;
}

function buildAuditRequirementRows() {
  return requirements.map((requirement) => {
    const stats = requirementEvidenceStats(requirement.code);
    const score = Math.round(requirementCompletionScore(requirement.code) * 100);
    const status = requirementCompletionStatus(requirement.code);
    const forms = visibleCatalogForms(window.formCatalog || [])
      .filter((form) => getFormRequirement(form).code === requirement.code)
      .map((form) => {
        const response = state.formResponses.find((item) => item.table === form.table || item.form === form.title);
        return { title: form.title, status: normalizedFormStatus(response?.status) };
      });
    const evidences = state.evidence.filter((item) => item.code === requirement.code);
    const actions = state.actions.filter((item) => item.code === requirement.code && item.status !== "cerrada");
    const gap = buildRequirementGap(requirement.code);
    return {
      ...requirement,
      score,
      status,
      stats,
      forms,
      evidences,
      actions,
      gap
    };
  });
}

function renderAuditReport() {
  const summary = document.querySelector("#auditReportSummary");
  const table = document.querySelector("#auditReportTable");
  if (!summary || !table) return;
  const rows = buildAuditRequirementRows();
  const complete = rows.filter((row) => row.score >= 100).length;
  const partial = rows.filter((row) => row.score > 0 && row.score < 100).length;
  const pending = rows.length - complete - partial;
  const openActions = rows.reduce((sum, row) => sum + row.actions.length, 0);
  summary.innerHTML = `
    <div class="report-card"><span>Requisitos</span><strong>${rows.length}</strong></div>
    <div class="report-card"><span>Completos</span><strong>${complete}</strong></div>
    <div class="report-card"><span>Parciales</span><strong>${partial}</strong></div>
    <div class="report-card"><span>Pendientes</span><strong>${pending}</strong></div>
    <div class="report-card"><span>Acciones abiertas</span><strong>${openActions}</strong></div>`;
  table.innerHTML = rows.map((row) => `
    <article class="audit-requirement-card">
      <div class="audit-requirement-head">
        <div>
          <span class="badge requisito">${row.code}</span>
          <span class="badge ${row.status}">${labelStatus(row.status)}</span>
        </div>
        <div class="coverage-progress">
          <div class="progress"><span style="width:${row.score}%"></span></div>
          <small>${row.score}% completitud</small>
        </div>
      </div>
      <h3>${row.title}</h3>
      <p class="muted"><strong>Evidencia esperada:</strong> ${row.evidence}</p>
      <div class="audit-grid">
        <div>
          <strong>Formularios</strong>
          <p>${row.stats.formsApproved}/${row.stats.formsTotal} aprobados generales; ${row.stats.activityFormsApproved}/${row.stats.activityFormsTotal} por actividad.</p>
        </div>
        <div>
          <strong>Evidencias</strong>
          <p>${row.stats.registeredEvidence} registrada(s), ${row.stats.suggestedEvidence} sugerida(s)</p>
        </div>
        <div>
          <strong>Acciones</strong>
          <p>${row.actions.length} abierta(s)</p>
        </div>
      </div>
      <div class="audit-detail">
        <strong>Lectura del agente</strong>
        <p>${row.gap.title}. ${row.gap.detail}</p>
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-audit-forms="${row.code}" type="button">Ver formularios</button>
        <button class="secondary-button" data-audit-action="${row.code}" type="button">Crear accion</button>
        <button data-audit-gap="${row.code}" type="button">Cerrar brecha</button>
      </div>
    </article>`).join("");
  table.querySelectorAll("[data-audit-forms]").forEach((button) => {
    button.addEventListener("click", () => {
      state.formFilters.search = button.dataset.auditForms;
      state.formFilters.status = "todos";
      showView("formularios");
      renderAll();
    });
  });
  table.querySelectorAll("[data-audit-action]").forEach((button) => {
    button.addEventListener("click", () => createFormCoverageAction(button.dataset.auditAction));
  });
  table.querySelectorAll("[data-audit-gap]").forEach((button) => {
    button.addEventListener("click", async () => closeRequirementGap(button.dataset.auditGap));
  });
}

function generateAuditReport() {
  const rows = buildAuditRequirementRows();
  const content = [
    "REPORTE DE AUDITORIA POR REQUISITO",
    "",
    `Organizacion: ${state.orgName}`,
    `Sistema: ${activeSystem().name}`,
    `Fecha: ${today()}`,
    "",
    ...rows.flatMap((row) => [
      `${row.code} ${row.title}`,
      `Estado: ${labelStatus(row.status)} - ${row.score}%`,
      `Evidencia esperada: ${row.evidence}`,
      `Formularios: ${row.stats.formsApproved}/${row.stats.formsTotal} aprobados generales; ${row.stats.activityFormsApproved}/${row.stats.activityFormsTotal} por actividad.`,
      `Evidencias: ${row.stats.registeredEvidence} registrada(s); ${row.stats.suggestedEvidence} sugerida(s).`,
      `Acciones abiertas: ${row.actions.length}.`,
      `Brecha/lectura agente: ${row.gap.title}. ${row.gap.detail}`,
      ""
    ]),
    "Nota: este reporte es un borrador generado por el agente y requiere validacion humana."
  ].join("\n");
  state.executiveReport = {
    title: `Reporte auditoria ${today()}`,
    code: "9.2",
    content,
    generatedAt: today(),
    status: "borrador"
  };
  recordAuditEvent({
    title: "Reporte de auditoria generado",
    detail: "El agente preparo una matriz de auditoria requisito por requisito.",
    code: "9.2",
    type: "reporte",
    actor: "agente"
  });
  saveState();
  renderAll();
}

function executiveReportFindings(stats = reportStats()) {
  const gaps = [];
  const pilot = pilotObservationSummary();
  if (stats.compliance < 70) gaps.push({ code: "4.4", title: "Cumplimiento general bajo", detail: `El sistema esta en ${stats.compliance}%. Priorizar cierre PHVA.`, priority: "alta" });
  if (stats.openActions.length > 5) gaps.push({ code: "10.1", title: "Acciones abiertas acumuladas", detail: `${stats.openActions.length} acciones abiertas requieren priorizacion.`, priority: "media" });
  if (stats.pendingForms > 0) gaps.push({ code: "7.5", title: "Formularios pendientes de diligenciar", detail: `${stats.pendingForms} formularios aun no tienen borrador.`, priority: "media" });
  if (stats.highRisks.length > 0) gaps.push({ code: "6.1.2", title: "Riesgos altos activos", detail: `${stats.highRisks.length} riesgos altos requieren tratamiento y verificacion.`, priority: "alta" });
  if (!state.managementReviews.length) gaps.push({ code: "9.3", title: "Revision por direccion pendiente", detail: "No hay revision por direccion preparada.", priority: "media" });
  if (pilot.open > 0) gaps.push({ code: "10.2", title: "Observaciones piloto abiertas", detail: `${pilot.open} observacion(es) del piloto requieren decision o accion de mejora.`, priority: pilot.high > 0 ? "alta" : "media" });
  return gaps;
}

function generateExecutiveReport(save = true) {
  const stats = reportStats();
  const system = activeSystem();
  const gaps = executiveReportFindings(stats);
  const pilot = pilotObservationSummary();
  const pilotRows = priorityPilotObservations(5);
  const content = `REPORTE EJECUTIVO DEL SISTEMA DE GESTION

Organizacion: ${state.orgName}
Sistema: ${system.name} (${system.code})
Fecha: ${today()}
Responsable: ${state.ownerName}

Resumen:
- Cumplimiento estimado: ${stats.compliance}%
- Acciones abiertas: ${stats.openActions.length}
- Evidencias registradas/sugeridas: ${state.evidence.length}
- Formularios aprobados: ${stats.approvedForms}
- Formularios pendientes: ${stats.pendingForms}
- Riesgos altos: ${stats.highRisks.length}
- Ejecuciones del agente usadas: ${state.planUsage.agentRuns}
- Observaciones piloto: ${pilot.total} total, ${pilot.open} abiertas, ${pilot.high} altas, ${pilot.converted} convertidas en acciones

Lectura PHVA:
- Planear: contexto, liderazgo, riesgos, requisitos legales y objetivos deben mantenerse actualizados.
- Hacer: personal, capacitacion, equipos, participantes, documentos y operacion sostienen la evidencia diaria.
- Verificar: auditorias, indicadores y revision por direccion deben cerrar el ciclo.
- Actuar: acciones correctivas, preventivas y de mejora deben tener seguimiento y eficacia.

Brechas priorizadas:
${gaps.length ? gaps.map((gap) => `- ${gap.code}: ${gap.title}. ${gap.detail}`).join("\n") : "- No se identifican brechas ejecutivas nuevas."}

Aprendizajes del piloto:
${pilotRows.length ? pilotRows.map((item) => `- ${item.priority || "media"}: ${item.text} (${item.area || "general"} / ${item.activity || "General"})`).join("\n") : "- No hay observaciones piloto registradas."}

Recomendacion del agente:
Priorizar formularios y evidencias pendientes, cerrar acciones abiertas de alto impacto y preparar revision por la direccion con datos de auditoria, incidentes, capacitacion, riesgos, oportunidades y observaciones reales del piloto.

Nota: este reporte es un borrador generado por el agente y requiere revision/aprobacion humana.`;
  const report = { title: `Reporte ejecutivo ${today()}`, code: "9.1", content, generatedAt: today(), status: "borrador" };
  if (save) {
    state.executiveReport = report;
    recordAuditEvent({
      title: "Reporte ejecutivo generado",
      detail: "El agente preparo un borrador de reporte ejecutivo.",
      code: "9.1",
      type: "reporte",
      actor: "agente"
    });
    saveState();
    renderAll();
  }
  return report;
}

function convertReportToEvidence() {
  const report = state.executiveReport || generateExecutiveReport(false);
  addEvidenceRecord({
    title: report.title,
    code: report.code,
    source: "reporte agente",
    linkedDocument: report.title,
    status: "sugerida"
  });
}

function downloadExecutiveReport() {
  const report = state.executiveReport || generateExecutiveReport(false);
  const filename = `${report.title.toLowerCase().replaceAll(" ", "_").replaceAll("/", "-")}.txt`;
  const blob = new Blob([report.content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Reporte descargado",
    detail: `${report.title} fue descargado en formato TXT.`,
    code: report.code,
    type: "reporte",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function printExecutiveReport() {
  const report = state.executiveReport || generateExecutiveReport(false);
  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) {
    addMessage("agent", "No pude abrir la ventana de impresion. Revisa si el navegador bloqueo ventanas emergentes.");
    return;
  }
  printWindow.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(report.title)}</title>
        <style>
          body { font-family: Segoe UI, Arial, sans-serif; margin: 32px; color: #17202a; }
          pre { white-space: pre-wrap; line-height: 1.5; font-family: Segoe UI, Arial, sans-serif; }
        </style>
      </head>
      <body><pre>${escapeHtml(report.content)}</pre></body>
    </html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  recordAuditEvent({
    title: "Reporte enviado a impresion",
    detail: `${report.title} fue preparado para impresion.`,
    code: report.code,
    type: "reporte",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function renderForms() {
  const catalog = visibleCatalogForms(window.formCatalog || []);
  const matrix = window.formMatrix || [];
  const container = document.querySelector("#formsTable");
  ensureSelectedFormActivity();
  const totalFields = catalog.reduce((sum, form) => sum + form.fields.length, 0);
  const relatedTables = new Set(matrix.flatMap((item) => item.relatedTables || []));
  const filledTables = new Set(state.formResponses.map((item) => item.table).filter((table) => table && !internalFormTables.has(table)));
  const completedForms = state.formResponses.filter((item) => !internalFormTables.has(item.table) && (item.status === "aprobado" || item.status === "completo")).length;
  const visibleForms = filteredCatalogForms(catalog);
  const summary = document.querySelector("#formCatalogSummary");
  summary.innerHTML = `
    <div class="catalog-card">
      <strong>${catalog.length}</strong>
      <span>formularios operativos SGSTA</span>
    </div>
    <div class="catalog-card">
      <strong>${totalFields}</strong>
      <span>campos desde la hoja Campos</span>
    </div>
    <div class="catalog-card">
      <strong>${filledTables.size}</strong>
      <span>formularios con borrador</span>
    </div>
    <div class="catalog-card">
      <strong>${completedForms}</strong>
      <span>formularios aprobados</span>
    </div>
    <div class="catalog-card">
      <strong>${catalog.length - filledTables.size}</strong>
      <span>formularios pendientes</span>
    </div>`;

  bindFormFilters();
  bindFormActivityTools();
  renderFormRequirementCoverage();

  container.innerHTML = visibleForms.length
    ? visibleForms.map((form) => {
      const response = selectedFormResponse(form);
      const status = normalizedFormStatus(response?.status);
      const requirement = getFormRequirement(form);
      const relation = getFormMatrixItem(form.table);
      return `
        <div class="simple-row form-row ${state.selectedFormTable === form.table ? "selected" : ""}">
          <div>
            <strong>${form.title}</strong>
            <div class="muted">${form.table} - ${form.fields.length} campos - ${relation?.module || "sistema"}</div>
          </div>
          <span class="badge requisito">${requirement.code}</span>
          <span class="badge phva">${relation?.phva || getPhvaForRequirement(requirement.code)}</span>
          ${response?.activity ? `<span class="badge cumple">${response.activity}</span>` : ""}
          <span class="badge ${formStatusBadge(status)}">${status}</span>
          <div class="row-actions">
            <button class="secondary-button" data-view-form="${form.table}" type="button">Ver</button>
            <button class="secondary-button" data-fill-form="${form.table}" type="button">Diligenciar</button>
            <button class="secondary-button" data-fill-activity-form="${form.table}" type="button">Actividad</button>
          </div>
        </div>`;
    }).join("")
    : `<div class="muted">No hay formularios con esos filtros.</div>`;

  container.querySelectorAll("[data-view-form]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedFormTable = button.dataset.viewForm;
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-fill-form]").forEach((button) => {
    button.addEventListener("click", async () => {
      await fillCatalogForm(button.dataset.fillForm);
    });
  });
  container.querySelectorAll("[data-fill-activity-form]").forEach((button) => {
    button.addEventListener("click", () => fillActivityCatalogForm(button.dataset.fillActivityForm));
  });
  renderFormPreview();
}

function ensureSelectedFormActivity() {
  if (!state.activities.some((activity) => activity.name === state.selectedFormActivity)) {
    state.selectedFormActivity = state.selectedActivityName || state.activities[0]?.name || "";
  }
}

function selectedFormResponse(form) {
  return getFormResponse(form.table, state.selectedFormActivity, form.title);
}

function getFormResponse(table, activity = "", formTitle = "") {
  if (activity) {
    const activityResponse = formResponseForActivity(table, activity);
    if (activityResponse) return activityResponse;
  }
  return state.formResponses.find((item) => item.table === table && !item.activity)
    || (formTitle ? state.formResponses.find((item) => item.form === formTitle && !item.activity) : null)
    || state.formResponses.find((item) => item.table === table);
}

function formCoverageByRequirement() {
  const catalog = visibleCatalogForms(window.formCatalog || []);
  const groups = new Map();
  catalog.forEach((form) => {
    const requirement = getFormRequirement(form);
    if (!groups.has(requirement.code)) {
      groups.set(requirement.code, {
        code: requirement.code,
        title: requirement.title,
        phva: getFormMatrixItem(form.table)?.phva || getPhvaForRequirement(requirement.code),
        total: 0,
        draft: 0,
        complete: 0,
        pending: 0,
        forms: []
      });
    }
    const group = groups.get(requirement.code);
    const response = state.formResponses.find((item) => item.table === form.table || item.form === form.title);
    const status = response?.status || "sin llenar";
    group.total += 1;
    if (status === "aprobado" || status === "completo") group.complete += 1;
    else if (status === "borrador" || status === "revision") group.draft += 1;
    else group.pending += 1;
    group.forms.push({ table: form.table, title: form.title, status });
  });
  return Array.from(groups.values()).sort((a, b) => a.code.localeCompare(b.code, "es", { numeric: true }));
}

function renderFormRequirementCoverage() {
  const container = document.querySelector("#formRequirementCoverage");
  if (!container) return;
  const groups = formCoverageByRequirement();
  container.innerHTML = groups.map((group) => {
    const done = group.draft + group.complete;
    const pct = Math.round((done / group.total) * 100);
    return `
      <div class="coverage-item">
        <div>
          <strong>${group.code}</strong>
          <span>${group.title}</span>
        </div>
        <div class="coverage-progress">
          <div class="progress"><span style="width:${pct}%"></span></div>
          <small>${done}/${group.total} con borrador - ${group.complete} aprobados</small>
        </div>
        <span class="badge phva">${group.phva}</span>
        <div class="row-actions">
          <button class="secondary-button" data-coverage-filter="${group.code}" type="button">Ver</button>
          <button class="secondary-button" data-coverage-fill="${group.code}" type="button">Borradores</button>
          <button class="secondary-button" data-coverage-action="${group.code}" type="button">Accion</button>
        </div>
      </div>`;
  }).join("");
  container.querySelectorAll("[data-coverage-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.formFilters.search = button.dataset.coverageFilter;
      state.formFilters.phva = "todos";
      state.formFilters.status = "todos";
      saveState();
      renderForms();
    });
  });
  container.querySelectorAll("[data-coverage-fill]").forEach((button) => {
    button.addEventListener("click", () => fillRequirementForms(button.dataset.coverageFill));
  });
  container.querySelectorAll("[data-coverage-action]").forEach((button) => {
    button.addEventListener("click", () => createFormCoverageAction(button.dataset.coverageAction));
  });
}

function filteredCatalogForms(catalog) {
  const search = (state.formFilters.search || "").trim().toLowerCase();
  return visibleCatalogForms(catalog).filter((form) => {
    const relation = getFormMatrixItem(form.table);
    const requirement = getFormRequirement(form);
    const response = state.formResponses.find((item) => item.table === form.table || item.form === form.title);
    const status = normalizedFormStatus(response?.status);
    const haystack = [
      form.title,
      form.table,
      relation?.module,
      requirement.code,
      requirement.title,
      ...(relation?.relatedTables || [])
    ].join(" ").toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesPhva = state.formFilters.phva === "todos" || (relation?.phva || getPhvaForRequirement(requirement.code)) === state.formFilters.phva;
    const matchesStatus = state.formFilters.status === "todos" || normalizedFormStatus(status) === state.formFilters.status;
    return matchesSearch && matchesPhva && matchesStatus;
  });
}

function bindFormFilters() {
  const search = document.querySelector("#formSearch");
  const phva = document.querySelector("#formPhvaFilter");
  const status = document.querySelector("#formStatusFilter");
  if (!search || !phva || !status) return;
  if (document.activeElement !== search) search.value = state.formFilters.search || "";
  phva.value = state.formFilters.phva || "todos";
  status.value = state.formFilters.status || "todos";
  search.oninput = () => {
    state.formFilters.search = search.value;
    saveState();
    renderForms();
  };
  phva.onchange = () => {
    state.formFilters.phva = phva.value;
    saveState();
    renderForms();
  };
  status.onchange = () => {
    state.formFilters.status = status.value;
    saveState();
    renderForms();
  };
}

function bindFormActivityTools() {
  const select = document.querySelector("#formActivitySelect");
  const button = document.querySelector("#fillActivityFormPackage");
  if (!select || !button) return;
  ensureSelectedFormActivity();
  const options = state.activities.map((activity) => `<option value="${escapeHtml(activity.name)}" ${activity.name === state.selectedFormActivity ? "selected" : ""}>${activity.name}</option>`).join("");
  select.innerHTML = options || `<option value="">Sin actividades</option>`;
  select.onchange = () => {
    state.selectedFormActivity = select.value;
    state.selectedActivityName = select.value || state.selectedActivityName;
    state.formFilters.search = select.value || state.formFilters.search;
    saveState();
    renderForms();
  };
  button.onclick = () => fillSelectedActivityPackage();
}

function selectedCatalogForm() {
  const catalog = visibleCatalogForms(window.formCatalog || []);
  return catalog.find((form) => form.table === state.selectedFormTable) || catalog[0];
}

function visibleCatalogForms(catalog) {
  return catalog.filter((form) => !internalFormTables.has(form.table));
}

function formFillStats(form, response) {
  const total = form.fields.length || 0;
  const values = response?.values || {};
  const filled = form.fields.filter((field) => String(values[field.name] || "").trim()).length;
  return {
    total,
    filled,
    pct: total ? Math.round((filled / total) * 100) : 0
  };
}

function renderFormPreview() {
  const preview = document.querySelector("#formPreview");
  const form = selectedCatalogForm();
  if (!form) {
    preview.innerHTML = `<p class="muted">No hay formulario seleccionado.</p>`;
    return;
  }
  ensureSelectedFormActivity();
  const response = selectedFormResponse(form);
  const requirement = getFormRequirement(form);
  const relation = getFormMatrixItem(form.table);
  const canApprove = canCurrentUserApprove();
  const fillStats = formFillStats(form, response);
  preview.innerHTML = `
    <div class="document-meta">
      <span class="badge en_proceso">${form.table}</span>
      <span class="badge requisito">${requirement.code}</span>
      <span class="badge phva">${relation?.phva || getPhvaForRequirement(requirement.code)}</span>
      <span class="badge cumple">${response?.activity || state.selectedFormActivity || "general"}</span>
      <span class="badge ${formStatusBadge(normalizedFormStatus(response?.status))}">${normalizedFormStatus(response?.status)}</span>
    </div>
    <h3>${form.title}</h3>
    <p class="muted"><strong>Requisito asociado:</strong> ${requirement.code} - ${requirement.title}</p>
    <div class="draft-summary">
      <div>
        <span class="muted">Diligenciamiento</span>
        <strong>${response ? `${fillStats.filled}/${fillStats.total} campos` : "Sin borrador"}</strong>
      </div>
      <div class="draft-meter">
        <div class="progress"><span style="width:${fillStats.pct}%"></span></div>
        <small>${fillStats.pct}% sugerido por el agente</small>
      </div>
      <div>
        <span class="muted">Decision humana</span>
        <strong>${response?.requiresApproval === false ? "Aprobado" : "Pendiente"}</strong>
      </div>
    </div>
    ${response ? `
      <div class="approval-strip">
        <div>
          <span class="muted">Fuente</span>
          <strong>${response.source || "manual"}</strong>
        </div>
        <div>
          <span class="muted">Aprobacion humana</span>
          <strong>${response.requiresApproval === false ? `Aprobado por ${response.approvedBy || "responsable"}` : "Pendiente"}</strong>
        </div>
        <div>
          <span class="muted">Fecha</span>
          <strong>${response.approvedAt || response.updatedAt || "Sin fecha"}</strong>
        </div>
      </div>
    ` : ""}
    ${relation ? `
      <div class="relation-box">
        <div>
          <span class="muted">Tabla principal</span>
          <strong>${relation.table}</strong>
        </div>
        <div>
          <span class="muted">Modulo</span>
          <strong>${relation.module}</strong>
        </div>
        <div>
          <span class="muted">Evidencia generada</span>
          <strong>${relation.evidence}</strong>
        </div>
      </div>
      <div class="relation-section">
        <span class="muted">Tablas relacionadas</span>
        <div class="relation-chips">
          ${(relation.relatedTables || []).map((table) => `<span>${table}</span>`).join("")}
        </div>
      </div>
      <p class="agent-note"><strong>Accion del agente:</strong> ${relation.agentAction}</p>
      <div class="button-row">
        <button data-fill-form-preview="${form.table}" type="button">Diligenciar con agente</button>
        <button class="secondary-button" data-fill-activity-form-preview="${form.table}" type="button">Diligenciar para ${state.selectedFormActivity || "actividad"}</button>
        <button class="secondary-button" data-fill-activity-package-preview="${state.selectedFormActivity || ""}" type="button">Paquete actividad</button>
        <button class="secondary-button" data-fill-requirement="${requirement.code}" type="button">Crear borradores de ${requirement.code}</button>
        <button class="secondary-button" data-filter-requirement="${requirement.code}" type="button">Filtrar este requisito</button>
        ${response ? `<button class="secondary-button" data-form-review="${form.table}" data-form-activity="${escapeHtml(response.activity || "")}" type="button">${response.status === "revision" ? "Volver a borrador" : "Enviar a revision"}</button>` : ""}
        ${response ? `<button class="secondary-button" data-form-approve="${form.table}" data-form-activity="${escapeHtml(response.activity || "")}" type="button" ${canApprove ? "" : "disabled"}>Aprobar humano</button>` : ""}
        ${response ? `<button class="secondary-button" data-form-evidence="${form.table}" data-form-activity="${escapeHtml(response.activity || "")}" type="button">Enviar a evidencias</button>` : ""}
      </div>
      ${!canApprove && response ? `<p class="muted">Tu rol actual puede preparar y revisar, pero no aprobar. Cambia a Direccion para aprobar.</p>` : ""}
    ` : ""}
    <p>${form.description || "Sin descripcion en la hoja Tablas."}</p>
    ${form.notes ? `<p class="muted">${form.notes}</p>` : ""}
    <div class="field-list">
      ${form.fields.map((field) => `
        <label class="field-preview">
          <span>${field.label}</span>
          <small>${field.name} - ${field.type}</small>
          <input type="text" value="${escapeHtml(response?.values?.[field.name] || "")}" placeholder="${field.description || "Campo del formulario"}" disabled>
        </label>`).join("")}
    </div>`;
  preview.querySelector("[data-fill-form-preview]")?.addEventListener("click", async (event) => {
    await fillCatalogForm(event.currentTarget.dataset.fillFormPreview);
  });
  preview.querySelector("[data-fill-activity-form-preview]")?.addEventListener("click", (event) => {
    fillActivityCatalogForm(event.currentTarget.dataset.fillActivityFormPreview);
  });
  preview.querySelector("[data-fill-activity-package-preview]")?.addEventListener("click", () => {
    fillSelectedActivityPackage();
  });
  preview.querySelector("[data-fill-requirement]")?.addEventListener("click", async (event) => {
    await fillRequirementForms(event.currentTarget.dataset.fillRequirement);
  });
  preview.querySelector("[data-filter-requirement]")?.addEventListener("click", (event) => {
    state.formFilters.search = event.currentTarget.dataset.filterRequirement;
    state.formFilters.phva = "todos";
    state.formFilters.status = "todos";
    saveState();
    renderForms();
  });
  preview.querySelector("[data-form-evidence]")?.addEventListener("click", (event) => {
    convertFormResponseToEvidence(event.currentTarget.dataset.formEvidence, event.currentTarget.dataset.formActivity || "");
  });
  preview.querySelector("[data-form-review]")?.addEventListener("click", async (event) => {
    await setFormReviewStatus(event.currentTarget.dataset.formReview, event.currentTarget.dataset.formActivity || "");
  });
  preview.querySelector("[data-form-approve]")?.addEventListener("click", async (event) => {
    await approveFormResponse(event.currentTarget.dataset.formApprove, event.currentTarget.dataset.formActivity || "");
  });
}

async function fillCatalogForm(table) {
  if (internalFormTables.has(table)) return;
  const handledByBackend = await createFormDraftsInBackend({ table });
  if (handledByBackend) return;

  const catalog = visibleCatalogForms(window.formCatalog || []);
  const form = catalog.find((item) => item.table === table);
  if (!form) return;
  const existing = state.formResponses.find((item) => item.table === table);
  if (!existing && !canCreateMoreForms()) return;
  if (existing) {
    existing.status = existing.status === "aprobado" ? "revision" : "borrador";
    existing.values = mergeAgentDraftValues(form, existing.values);
    existing.source = existing.source || "agente";
    existing.requiresApproval = true;
    existing.updatedAt = today();
    recordAuditEvent({
      title: "Borrador de formulario actualizado",
      detail: `${form.title} fue actualizado por el agente y queda pendiente de revision.`,
      code: getFormRequirement(form).code,
      type: "formulario",
      actor: "agente"
    });
  } else {
    const relation = getFormMatrixItem(form.table);
    state.formResponses.unshift({
      table: form.table,
      form: form.title,
      module: relation?.module || form.table,
      status: "borrador",
      code: getFormRequirement(form).code,
      fields: form.fields.map((field) => field.name),
      values: generateFormDraftValues(form),
      source: "agente",
      requiresApproval: true,
      approvedBy: "",
      approvedAt: "",
      updatedAt: today()
    });
    recordAuditEvent({
      title: "Borrador de formulario creado",
      detail: `${form.title} fue llenado con valores sugeridos por el agente.`,
      code: getFormRequirement(form).code,
      type: "formulario",
      actor: "agente"
    });
  }
  state.selectedFormTable = table;
  saveState();
  renderAll();
}

async function fillActivityCatalogForm(table) {
  if (internalFormTables.has(table)) return;
  ensureSelectedFormActivity();
  const activityName = state.selectedFormActivity || state.selectedActivityName || primaryActivityName();
  if (!activityName) return;
  const handledByBackend = await createFormDraftsInBackend({ table, activity: activityName });
  if (handledByBackend) return;
  fillActivityCatalogFormLocal(table, activityName);
}

function fillActivityCatalogFormLocal(table, activityName) {
  const response = upsertActivityFormDraft(table, activityName);
  if (!response) return;
  state.selectedFormTable = table;
  state.selectedActivityName = activityName;
  state.formFilters.search = activityName;
  recordAuditEvent({
    title: "Borrador por actividad creado",
    detail: `${response.form} fue diligenciado por el agente con contexto de ${activityName}.`,
    code: response.code,
    type: "formulario",
    actor: "agente"
  });
  saveState();
  renderAll();
}

function fillSelectedActivityPackage() {
  ensureSelectedFormActivity();
  const activityName = state.selectedFormActivity || state.selectedActivityName || primaryActivityName();
  if (!activityName) return;
  prepareActivityPackage(activityName);
  showView("formularios");
}

async function fillRequirementForms(code) {
  const handledByBackend = await createFormDraftsInBackend({ requirement: code });
  if (handledByBackend) return;

  const catalog = visibleCatalogForms(window.formCatalog || []);
  const forms = catalog.filter((form) => getFormRequirement(form).code === code);
  forms.forEach((form) => {
    const existing = state.formResponses.find((item) => item.table === form.table);
    if (existing) {
      existing.status = existing.status === "aprobado" ? "revision" : "borrador";
      existing.values = mergeAgentDraftValues(form, existing.values);
      existing.source = existing.source || "agente";
      existing.requiresApproval = true;
      existing.updatedAt = today();
      recordAuditEvent({
        title: "Borrador de formulario actualizado",
        detail: `${form.title} fue completado por el agente como parte del requisito ${code}.`,
        code,
        type: "formulario",
        actor: "agente"
      });
    } else {
      if (!canCreateMoreForms()) return;
      const relation = getFormMatrixItem(form.table);
      state.formResponses.unshift({
        table: form.table,
        form: form.title,
        module: relation?.module || form.table,
        status: "borrador",
        code,
        fields: form.fields.map((field) => field.name),
        values: generateFormDraftValues(form),
        source: "agente",
        requiresApproval: true,
        approvedBy: "",
        approvedAt: "",
        updatedAt: today()
      });
      recordAuditEvent({
        title: "Borrador de formulario creado",
        detail: `${form.title} fue llenado como parte del requisito ${code}.`,
        code,
        type: "formulario",
        actor: "agente"
      });
    }
  });
  state.formFilters.search = code;
  state.formFilters.status = "todos";
  saveState();
  renderAll();
}

async function createFormDraftsInBackend(payload) {
  if (!backendOnline) return false;
  try {
    updateBackendStatus("Backend conectado: generando borrador", true);
    const response = await fetch(`${apiBaseUrl}/api/agent/forms/draft`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, state: appStateToApiState() })
    });
    if (!response.ok) throw new Error("No se pudo generar el borrador");
    const result = await response.json();
    state = mergeState(clone(defaultState), apiStateToAppState(result.state));
    if (payload.table) state.selectedFormTable = payload.table;
    if (payload.activity) {
      state.selectedFormActivity = payload.activity;
      state.selectedActivityName = payload.activity;
      state.formFilters.search = payload.activity;
      state.formFilters.status = "todos";
    }
    if (payload.requirement) {
      state.formFilters.search = payload.requirement;
      state.formFilters.status = "todos";
    }
    persistLocalState();
    updateBackendStatus("Backend conectado: borrador guardado", true);
    const aiText = result.ai?.used
      ? ` con IA (${result.ai.provider})`
      : result.ai?.enabled
        ? " con reglas porque la IA no respondio"
        : " con reglas";
    addMessage("agent", `Genere ${result.responses.length} borrador(es) de formulario${aiText}. Quedan pendientes de aprobacion humana.`);
    renderAll();
    return true;
  } catch {
    backendOnline = false;
    updateBackendStatus("Modo local: borrador sin backend", false);
    return false;
  }
}

function normalizedFormStatus(status) {
  if (status === "completo") return "aprobado";
  return status || "sin llenar";
}

function formStatusBadge(status) {
  if (status === "aprobado") return "cumple";
  if (status === "sin llenar") return "pendiente";
  return "en_proceso";
}

async function updateFormWorkflowInBackend(payload) {
  if (!backendOnline) return false;
  try {
    updateBackendStatus("Backend conectado: actualizando formulario", true);
    const response = await fetch(`${apiBaseUrl}/api/forms/workflow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        role: state.currentUserRole,
        actor: state.ownerName || "Responsable SGSTA",
        state: appStateToApiState()
      })
    });
    if (response.status === 403) {
      const result = await response.json();
      addMessage("agent", result.message || "No se aprobo el formulario: el rol actual no tiene permiso.");
      backendOnline = true;
      updateBackendStatus("Backend conectado: aprobacion bloqueada", true);
      hydrateFromBackend();
      return true;
    }
    if (!response.ok) throw new Error("No se pudo actualizar el formulario");
    const result = await response.json();
    state = mergeState(clone(defaultState), apiStateToAppState(result.state));
    persistLocalState();
    updateBackendStatus("Backend conectado: formulario actualizado", true);
    addMessage("agent", payload.status === "aprobado"
      ? `Formulario aprobado por ${state.ownerName || "Responsable SGSTA"}.`
      : `Formulario enviado a revision desde backend.`);
    renderAll();
    return true;
  } catch {
    backendOnline = false;
    updateBackendStatus("Modo local: flujo de formulario sin backend", false);
    return false;
  }
}

async function setFormReviewStatus(table, activity = "") {
  const handledByBackend = await updateFormWorkflowInBackend({ table, activity, status: "revision" });
  if (handledByBackend) return;

  const response = getFormResponse(table, activity);
  if (!response) return;
  response.status = response.status === "revision" ? "borrador" : "revision";
  response.requiresApproval = true;
  response.updatedAt = today();
  recordAuditEvent({
    title: "Formulario enviado a revision",
    detail: `${response.form} cambio a estado ${response.status}.`,
    code: response.code,
    type: "revision_formulario",
    actor: "agente"
  });
  saveState();
  renderAll();
}

async function approveFormResponse(table, activity = "") {
  const handledByBackend = await updateFormWorkflowInBackend({ table, activity, status: "aprobado" });
  if (handledByBackend) return;

  const response = getFormResponse(table, activity);
  if (!response) return;
  if (!canCurrentUserApprove()) {
    addMessage("agent", "No aprobe el formulario: el rol actual no tiene permiso de aprobacion. Usa Direccion o Admin.");
    recordAuditEvent({
      title: "Aprobacion bloqueada",
      detail: `${response.form} no fue aprobado porque el rol ${state.currentUserRole} no tiene permiso.`,
      code: response.code,
      type: "permiso",
      actor: "sistema"
    });
    saveState();
    renderAll();
    return;
  }
  response.status = "aprobado";
  response.requiresApproval = false;
  response.approvedBy = `${state.ownerName || "Responsable"} (${roleLabel(state.currentUserRole)})`;
  response.approvedAt = today();
  response.updatedAt = today();
  state.compliance[response.code] = "en_proceso";
  upsertEvidenceFromApprovedForm(response);
  recordAuditEvent({
    title: "Formulario aprobado",
    detail: `${response.form} fue aprobado por ${response.approvedBy}.`,
    code: response.code,
    type: "aprobacion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createFormCoverageAction(code) {
  const gap = buildRequirementGap(code);
  createAction(gap.title, code, gap.type, gap.origin);
  const action = state.actions[0];
  action.priority = gap.priority;
  action.cause = gap.detail;
  addMessage("agent", `Cree una accion especifica para ${code}: ${gap.title}`);
  saveState();
  renderAll();
}

function lowestRequirementCodes(limit = 5) {
  return requirements
    .map((item) => ({ code: item.code, score: requirementCompletionScore(item.code) }))
    .filter((item) => item.score < 1)
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map((item) => item.code);
}

function buildRequirementGap(code) {
  const req = requirements.find((item) => item.code === code);
  const group = formCoverageByRequirement().find((item) => item.code === code);
  const stats = requirementEvidenceStats(code);
  const openActions = state.actions.filter((action) => action.code === code && action.status !== "cerrada");
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

async function closeRequirementGap(code) {
  if (backendOnline) {
    try {
      updateBackendStatus("Backend conectado: cerrando brecha", true);
      const response = await fetch(`${apiBaseUrl}/api/agent/requirements/close-gap`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, state: appStateToApiState() })
      });
      if (!response.ok) throw new Error("No se pudo cerrar la brecha");
      const result = await response.json();
      state = mergeState(clone(defaultState), apiStateToAppState(result.state));
      rememberClosurePackages([{ code, ...result }], result.summary);
      persistLocalState();
      updateBackendStatus("Backend conectado: paquete de cierre creado", true);
      addMessage("agent", `Prepare cierre de brecha para ${code}: ${result.summary}`);
      renderAll();
      return;
    } catch {
      backendOnline = false;
      updateBackendStatus("Modo local: cierre de brecha sin backend", false);
    }
  }

  const beforeForms = state.formResponses.length;
  await fillRequirementForms(code);
  const gap = buildRequirementGap(code);
  createAction(gap.title, code, gap.type, gap.origin);
  const action = state.actions[0];
  action.priority = gap.priority;
  action.cause = gap.detail;
  const stats = requirementEvidenceStats(code);
  if (stats.registeredEvidence === 0 && stats.suggestedEvidence === 0) {
    const req = requirements.find((item) => item.code === code);
    addEvidenceRecord({ title: req?.evidence || `Evidencia requerida ${code}`, code, source: "paquete cierre agente", status: "sugerida" });
  }
  const createdForms = Math.max(0, state.formResponses.length - beforeForms);
  recordAuditEvent({
    title: "Paquete de cierre preparado",
    detail: `Requisito ${code}: ${createdForms} formulario(s), accion y evidencia sugerida segun necesidad.`,
    code,
    type: "cierre_brecha",
    actor: "agente"
  });
  rememberClosurePackages([{
    code,
    responses: state.formResponses.slice(0, createdForms),
    action,
    evidence: stats.registeredEvidence === 0 && stats.suggestedEvidence === 0 ? state.evidence[0] : null,
    summary: `${createdForms} formulario(s), accion y evidencia sugerida segun necesidad.`
  }]);
  saveState();
  renderAll();
}

async function closeCriticalGaps() {
  if (backendOnline) {
    try {
      updateBackendStatus("Backend conectado: cerrando brechas criticas", true);
      const response = await fetch(`${apiBaseUrl}/api/agent/requirements/close-critical`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 5, state: appStateToApiState() })
      });
      if (!response.ok) throw new Error("No se pudo preparar el plan de cierre");
      const result = await response.json();
      state = mergeState(clone(defaultState), apiStateToAppState(result.state));
      rememberClosurePackages(result.packages || [], result.summary);
      persistLocalState();
      updateBackendStatus("Backend conectado: plan de cierre creado", true);
      addMessage("agent", `Prepare plan de cierre: ${result.summary}`);
      renderAll();
      return;
    } catch {
      backendOnline = false;
      updateBackendStatus("Modo local: cierre critico sin backend", false);
    }
  }

  const codes = lowestRequirementCodes(5);
  for (const code of codes) {
    await closeRequirementGap(code);
  }
  addMessage("agent", `Prepare cierre local para ${codes.length} requisito(s) con menor completitud.`);
}

function generateFormDraftValues(form) {
  const relation = getFormMatrixItem(form.table);
  const requirement = getFormRequirement(form);
  const activity = state.activities[0] || {};
  const person = state.people[0] || {};
  const equipment = state.equipment[0] || {};
  const policy = state.policies[0] || {};
  const risk = state.risks[0] || {};
  const participant = state.participantEvidence[0] || {};
  const values = {};
  form.fields.forEach((field) => {
    const name = field.name.toLowerCase();
    values[field.name] = suggestedValueForField(name, {
      form,
      relation,
      requirement,
      activity,
      person,
      equipment,
      policy,
      risk,
      participant
    });
  });
  return values;
}

function mergeAgentDraftValues(form, currentValues = {}) {
  const suggestedValues = generateFormDraftValues(form);
  const merged = { ...(currentValues || {}) };
  form.fields.forEach((field) => {
    if (!String(merged[field.name] || "").trim()) merged[field.name] = suggestedValues[field.name];
  });
  return merged;
}

function suggestedValueForField(name, context) {
  const org = state.company.legalName || state.orgName || "Organizacion por definir";
  if (name === "id") return "pendiente";
  if (name.includes("organizacion") || name.includes("empresa")) return org;
  if (name.includes("usuario") || name.includes("responsable") || name.includes("representante")) return state.ownerName || "Responsable por definir";
  if (name.includes("nit")) return state.company.nit || "NIT por definir";
  if (name.includes("correo")) return "correo@organizacion.com";
  if (name.includes("telefono")) return state.company.phone || "Telefono por definir";
  if (name.includes("direccion") || name.includes("ubicacion") || name.includes("lugar")) return state.company.city || "Ubicacion por definir";
  if (name.includes("actividad")) return context.activity.name || context.activity.activity || "Actividad por definir";
  if (name.includes("condicion")) return context.activity.participantRequirements || context.activity.conditions || context.participant.infoProvided || "Condiciones de participacion por definir";
  if (name.includes("participante") || name.includes("cliente")) return context.participant.participantInfoRequested || "Datos minimos y consentimiento en formulario externo";
  if (name.includes("consentimiento")) return context.participant.consent || "pendiente";
  if (name.includes("informacion")) return context.participant.infoProvided || context.activity.participantRequirements || "Informacion al participante por completar segun ISO 21103";
  if (name.includes("persona") || name.includes("nombre_completo")) return context.person.name || "Persona por definir";
  if (name.includes("cargo") || name.includes("rol")) return context.person.role || "Rol por definir";
  if (name.includes("competencia")) return context.person.training || "Competencia por verificar";
  if (name.includes("equipo")) return context.equipment.name || "Equipo por definir";
  if (name.includes("poliza")) return context.policy.number || "Poliza por definir";
  if (name.includes("aseguradora")) return context.policy.insurer || "Aseguradora por definir";
  if (name.includes("cobertura")) return context.policy.coverage || "Cobertura por definir";
  if (name.includes("riesgo") || name.includes("peligro")) return context.risk.title || "Riesgo por evaluar";
  if (name.includes("control")) return context.risk.control || "Control por definir";
  if (name.includes("impacto")) return context.risk.impact || "Por evaluar";
  if (name.includes("probabilidad")) return context.risk.probability || "Por evaluar";
  if (name.includes("estado")) return "borrador";
  if (name.includes("fecha")) return today();
  if (name.includes("archivo") || name.includes("evidencia") || name.includes("adjunto")) return "Evidencia pendiente de asociar";
  if (name.includes("objetivo")) return "Objetivo por definir y aprobar";
  if (name.includes("descripcion") || name.includes("observaciones") || name.includes("contenido")) return `Borrador sugerido por el agente para ${context.form.title}. Requiere revision humana.`;
  if (name.includes("requisito") || name.includes("numeral")) return context.requirement.code;
  if (name.includes("modulo")) return context.relation?.module || "sistema";
  return "Por definir";
}

function convertFormResponseToEvidence(table, activity = "") {
  const response = getFormResponse(table, activity);
  if (!response) return;
  const approved = normalizedFormStatus(response.status) === "aprobado";
  addEvidenceRecord({
    title: `Formulario: ${response.form}`,
    code: response.code,
    source: "formulario agente",
    activity: response.activity || "",
    linkedActivity: response.activity || "",
    linkedDocument: response.activity ? `${response.table}:${response.activity}` : response.table,
    status: approved ? "registrada" : "sugerida"
  });
  addMessage("agent", `Asocie el formulario "${response.form}" como evidencia del requisito ${response.code}. ${approved ? "Ya cuenta como evidencia registrada." : "Queda sugerida porque falta aprobacion humana."}`);
}

function upsertEvidenceFromApprovedForm(response) {
  const linkedDocument = response.activity ? `${response.table}:${response.activity}` : response.table;
  const existing = state.evidence.find((item) => item.linkedDocument === linkedDocument && item.source === "formulario aprobado");
  const evidence = {
    title: `Formulario aprobado: ${response.form}`,
    code: response.code,
    source: "formulario aprobado",
    activity: response.activity || "",
    linkedActivity: response.activity || "",
    linkedDocument,
    status: "registrada",
    approvedBy: response.approvedBy,
    approvedAt: response.approvedAt,
    date: today()
  };
  if (existing) Object.assign(existing, evidence);
  else state.evidence.unshift(evidence);
}

function inferRequirementForForm(table) {
  if (formRequirementMap[table]) return formRequirementMap[table];
  const map = [
    [["contexto", "organizaciones"], "4.1"],
    [["politica", "compromiso_liderazgo"], "5.2"],
    [["roles", "cargos"], "5.3"],
    [["riesgo", "probabilidad", "impacto"], "6.1.2"],
    [["normograma"], "6.1.3"],
    [["objetivos"], "6.2"],
    [["competencias", "personas", "compromiso_personal"], "7.2"],
    [["comunicaciones"], "7.4"],
    [["document"], "7.5"],
    [["procedimientos", "bitacora", "equipos"], "8.1"],
    [["emergencia", "simulacro"], "8.2"],
    [["incidentes"], "8.3"],
    [["seguimiento_medicion"], "9.1"],
    [["auditoria"], "9.2"],
    [["revision_direccion"], "9.3"],
    [["acciones_correctivas", "acciones_sugeridas", "mejora"], "10.1"]
  ];
  const normalized = table.toLowerCase();
  const match = map.find(([keys]) => keys.some((key) => normalized.includes(key)));
  return match ? match[1] : "4.4";
}

function getFormRequirement(form) {
  const code = form?.requirement || inferRequirementForForm(form?.table || "");
  const baseCode = code.split(/[/-]/)[0];
  const requirement = requirements.find((item) => item.code === code) || requirements.find((item) => item.code === baseCode);
  return {
    code,
    title: requirement?.title || "Requisito del sistema de gestion"
  };
}

function getFormMatrixItem(table) {
  const matrix = window.formMatrix || [];
  return matrix.find((item) => item.table === table);
}

function getPhvaForRequirement(code) {
  const chapter = String(code || "4").split(".")[0];
  if (chapter === "9") return "verificar";
  if (chapter === "10") return "actuar";
  if (chapter === "7" || chapter === "8") return "hacer";
  return "planear";
}

function canCurrentUserApprove() {
  return ["direccion", "admin"].includes(state.currentUserRole || "direccion");
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

function activeSystem() {
  return managementSystems[state.activeSystem] || managementSystems.iso21101;
}

function renderAgentFindings() {
  const container = document.querySelector("#agentFindings");
  container.innerHTML = state.agentFindings.length
    ? state.agentFindings.map((item, index) => `
      <div class="simple-row finding-row">
        <div><strong>${item.title}</strong><div class="muted">${item.detail}</div></div>
        <span class="badge ${item.priority === "critica" || item.priority === "alta" ? "no_cumple" : "en_proceso"}">${item.priority}</span>
        <div class="row-actions">
          ${item.origin === "formularios" ? `<button class="secondary-button" data-finding-forms="${index}" type="button">Borradores</button>` : ""}
          <button class="secondary-button" data-finding-action="${index}" type="button">Crear accion</button>
        </div>
      </div>`).join("")
    : `<div class="muted">Ejecuta el monitor para que el agente detecte brechas y sugiera acciones.</div>`;
  container.querySelectorAll("[data-finding-forms]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.agentFindings[Number(button.dataset.findingForms)];
      fillRequirementForms(item.code);
      state.agentFindings.splice(Number(button.dataset.findingForms), 1);
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-finding-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const item = state.agentFindings[Number(button.dataset.findingAction)];
      const handledByBackend = await createAgentActionFromFinding(item);
      if (!handledByBackend) {
        state.agentFindings.splice(Number(button.dataset.findingAction), 1);
        saveState();
        renderAll();
      }
    });
  });
}

function buildReviewItems() {
  const items = [];
  state.formResponses.forEach((form, index) => {
    if (["borrador", "revision"].includes(normalizedFormStatus(form.status))) {
      items.push({
        kind: "form",
        index,
        title: form.form || form.table,
        detail: `Formulario diligenciado por ${form.source || "agente"} pendiente de revision/aprobacion.`,
        code: form.code || "7.5",
        priority: form.status === "revision" ? "alta" : "media",
        status: normalizedFormStatus(form.status)
      });
    }
  });
  state.evidence.forEach((evidence, index) => {
    if (evidence.status === "sugerida") {
      items.push({
        kind: "evidence",
        index,
        title: evidence.title,
        detail: `Evidencia sugerida desde ${evidence.source || "agente"}. Requiere soporte real o validacion humana.`,
        code: evidence.code || "7.5",
        priority: "media",
        status: "sugerida"
      });
    }
  });
  state.actions.forEach((action, index) => {
    const missingOwner = !action.responsible && !action.owner;
    const missingDue = !action.dueDate && !action.deadline && !action.fechaLimite;
    if (action.status === "pendiente_eficacia" || (action.status !== "cerrada" && action.efficacyVerification && action.efficacyStatus !== "eficaz")) {
      items.push({
        kind: "efficacy",
        index,
        title: action.title,
        detail: `Requiere verificacion humana de eficacia antes de cerrar. ${action.efficacyVerification || "Sin criterio de eficacia documentado."}`,
        code: action.code || "10.1",
        priority: "alta",
        status: action.efficacyStatus || "pendiente"
      });
      return;
    }
    if (action.status !== "cerrada" && (missingOwner || missingDue)) {
      items.push({
        kind: "action",
        index,
        title: action.title,
        detail: `${missingOwner ? "Falta responsable. " : ""}${missingDue ? "Falta fecha limite." : ""}`.trim(),
        code: action.code || "10.1",
        priority: action.priority || "media",
        status: action.status || "abierta"
      });
    }
  });
  (state.closurePackages || []).forEach((item, index) => {
    if (item.reviewStatus !== "revisado") {
      items.push({
        kind: "package",
        index,
        title: `Paquete ${item.code}: ${item.requirementTitle}`,
        detail: item.summary || "Paquete preparado por el agente pendiente de revision humana.",
        code: item.code,
        priority: "media",
        status: "pendiente"
      });
    }
  });
  return items.sort((a, b) => priorityRank(b.priority) - priorityRank(a.priority));
}

function priorityRank(priority) {
  return { alta: 3, media: 2, baja: 1 }[priority] || 2;
}

function renderReviewInbox() {
  const container = document.querySelector("#reviewInbox");
  const summary = document.querySelector("#reviewInboxSummary");
  if (!container || !summary) return;
  const items = buildReviewItems();
  const forms = items.filter((item) => item.kind === "form").length;
  const evidence = items.filter((item) => item.kind === "evidence").length;
  const actions = items.filter((item) => item.kind === "action").length;
  const efficacy = items.filter((item) => item.kind === "efficacy").length;
  const packages = items.filter((item) => item.kind === "package").length;
  summary.innerHTML = `
    <div class="report-card"><span>Total pendiente</span><strong>${items.length}</strong></div>
    <div class="report-card"><span>Formularios</span><strong>${forms}</strong></div>
    <div class="report-card"><span>Evidencias</span><strong>${evidence}</strong></div>
    <div class="report-card"><span>Acciones</span><strong>${actions}</strong></div>
    <div class="report-card"><span>Eficacia</span><strong>${efficacy}</strong></div>
    <div class="report-card"><span>Paquetes</span><strong>${packages}</strong></div>`;
  container.innerHTML = items.length
    ? items.map((item) => `
      <div class="simple-row review-row">
        <div>
          <strong>${item.title}</strong>
          <div class="muted">${item.detail}</div>
          <div class="matrix-metrics">
            <span>Requisito ${item.code}</span>
            <span>${reviewKindLabel(item.kind)}</span>
          </div>
        </div>
        <span class="badge ${item.priority === "alta" ? "no_cumple" : "en_proceso"}">${item.priority}</span>
        <span class="badge ${formStatusBadge(item.status)}">${item.status}</span>
        <div class="row-actions">
          ${reviewButtons(item)}
        </div>
      </div>`).join("")
    : `<div class="muted">No hay elementos pendientes de revision humana.</div>`;
  bindReviewInboxButtons(container);
}

function reviewKindLabel(kind) {
  return {
    form: "Formulario",
    evidence: "Evidencia",
    action: "Accion",
    efficacy: "Eficacia",
    package: "Paquete"
  }[kind] || kind;
}

function reviewButtons(item) {
  if (item.kind === "form") {
    return `
      <button class="secondary-button" data-review-open-form="${item.index}" type="button">Ver</button>
      <button class="secondary-button" data-review-form="${item.index}" type="button">A revision</button>
      <button data-review-approve-form="${item.index}" type="button" ${canCurrentUserApprove() ? "" : "disabled"}>Aprobar</button>`;
  }
  if (item.kind === "evidence") {
    return `
      <button data-review-evidence="${item.index}" type="button">Validar</button>
      <button class="secondary-button" data-review-evidence-action="${item.index}" type="button">Accion</button>`;
  }
  if (item.kind === "action") {
    return `<button data-review-assign-action="${item.index}" type="button">Asignar</button>`;
  }
  if (item.kind === "efficacy") {
    return `
      <button class="secondary-button" data-review-open-action="${item.index}" type="button">Ver accion</button>
      <button data-review-efficacy-action="${item.index}" type="button">Marcar eficaz</button>`;
  }
  if (item.kind === "package") {
    return `
      <button class="secondary-button" data-review-package-open="${item.index}" type="button">Ver formularios</button>
      <button data-review-package="${item.index}" type="button">Marcar revisado</button>`;
  }
  return "";
}

function bindReviewInboxButtons(container) {
  container.querySelectorAll("[data-review-open-form]").forEach((button) => {
    button.addEventListener("click", () => {
      const response = state.formResponses[Number(button.dataset.reviewOpenForm)];
      if (!response) return;
      state.selectedFormTable = response.table;
      if (response.activity) {
        state.selectedFormActivity = response.activity;
        state.selectedActivityName = response.activity;
      }
      showView("formularios");
      renderAll();
    });
  });
  container.querySelectorAll("[data-review-form]").forEach((button) => {
    button.addEventListener("click", async () => {
      const response = state.formResponses[Number(button.dataset.reviewForm)];
      if (response) await setFormReviewStatus(response.table, response.activity || "");
    });
  });
  container.querySelectorAll("[data-review-approve-form]").forEach((button) => {
    button.addEventListener("click", async () => {
      const response = state.formResponses[Number(button.dataset.reviewApproveForm)];
      if (response) await approveFormResponse(response.table, response.activity || "");
    });
  });
  container.querySelectorAll("[data-review-evidence]").forEach((button) => {
    button.addEventListener("click", () => validateSuggestedEvidence(Number(button.dataset.reviewEvidence)));
  });
  container.querySelectorAll("[data-review-evidence-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const evidence = state.evidence[Number(button.dataset.reviewEvidenceAction)];
      if (!evidence) return;
      createAction(`Validar soporte de evidencia: ${evidence.title}`, evidence.code || "7.5", "tarea", "revision humana");
    });
  });
  container.querySelectorAll("[data-review-assign-action]").forEach((button) => {
    button.addEventListener("click", () => assignReviewAction(Number(button.dataset.reviewAssignAction)));
  });
  container.querySelectorAll("[data-review-open-action]").forEach((button) => {
    button.addEventListener("click", () => focusActionCard(Number(button.dataset.reviewOpenAction)));
  });
  container.querySelectorAll("[data-review-efficacy-action]").forEach((button) => {
    button.addEventListener("click", () => markActionEfficacyReviewed(Number(button.dataset.reviewEfficacyAction)));
  });
  container.querySelectorAll("[data-review-package-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = (state.closurePackages || [])[Number(button.dataset.reviewPackageOpen)];
      if (!item) return;
      state.formFilters.search = item.code;
      state.formFilters.status = "todos";
      showView("formularios");
      renderAll();
    });
  });
  container.querySelectorAll("[data-review-package]").forEach((button) => {
    button.addEventListener("click", () => markClosurePackageReviewed(Number(button.dataset.reviewPackage)));
  });
}

function validateSuggestedEvidence(index) {
  const evidence = state.evidence[index];
  if (!evidence) return;
  evidence.status = "registrada";
  evidence.validatedBy = `${state.ownerName || "Responsable"} (${roleLabel(state.currentUserRole)})`;
  evidence.validatedAt = today();
  recordAuditEvent({
    title: "Evidencia validada",
    detail: `${evidence.title} fue validada por ${evidence.validatedBy}.`,
    code: evidence.code,
    type: "validacion_evidencia",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function assignReviewAction(index) {
  const action = state.actions[index];
  if (!action) return;
  assignActionDefaults(action);
  action.status = action.status || "abierta";
  recordAuditEvent({
    title: "Accion asignada",
    detail: `${action.title} queda a cargo de ${action.responsible} con fecha limite ${action.dueDate}.`,
    code: action.code,
    type: "asignacion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function markActionEfficacyReviewed(index) {
  const action = state.actions[index];
  if (!action) return;
  action.efficacyStatus = "eficaz";
  action.efficacyReviewedBy = `${state.ownerName || "Responsable"} (${roleLabel(state.currentUserRole)})`;
  action.efficacyReviewedAt = today();
  action.status = actionReadyToClose(action) ? "abierta" : action.status;
  recordAuditEvent({
    title: "Eficacia de accion revisada",
    detail: `${action.title} fue marcada como eficaz por ${action.efficacyReviewedBy}. Aun requiere cierre humano si sigue abierta.`,
    code: action.code,
    type: "revision_eficacia",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function assignActionDefaults(action) {
  action.responsible = action.responsible || action.owner || state.ownerName || "Responsable SGSTA";
  action.dueDate = action.dueDate || action.deadline || action.fechaLimite || futureDate(15);
  action.priority = action.priority || "media";
}

function markClosurePackageReviewed(index) {
  const item = (state.closurePackages || [])[index];
  if (!item) return;
  item.reviewStatus = "revisado";
  item.reviewedBy = `${state.ownerName || "Responsable"} (${roleLabel(state.currentUserRole)})`;
  item.reviewedAt = today();
  recordAuditEvent({
    title: "Paquete revisado",
    detail: `${item.requirementTitle || item.code} fue revisado por ${item.reviewedBy}.`,
    code: item.code,
    type: "revision_paquete",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function futureDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("es-CO");
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

function daysUntil(value) {
  const date = parseFlexibleDate(value);
  if (!date) return null;
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return Math.ceil((date - todayDate) / 86400000);
}

function dueSeverity(value, warningDays = 30) {
  const days = daysUntil(value);
  if (days === null) return { severity: "media", label: "sin fecha programada", days: null };
  if (days < 0) return { severity: "alta", label: `vencido hace ${Math.abs(days)} dia(s)`, days };
  if (days <= warningDays) return { severity: "alta", label: `vence en ${days} dia(s)`, days };
  return { severity: "baja", label: `vigente por ${days} dia(s)`, days };
}

async function createAgentActionFromFinding(finding) {
  if (backendOnline) {
    try {
      const response = await fetch(`${apiBaseUrl}/api/agent/actions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: appStateToApiState(), finding })
      });
      if (!response.ok) throw new Error("No se pudo crear la accion en backend");
      const result = await response.json();
      state = mergeState(clone(defaultState), apiStateToAppState(result.state));
      persistLocalState();
      updateBackendStatus("Backend conectado: accion creada", true);
      addMessage("agent", `Cree una accion auditable desde la brecha: ${result.action.title}.`);
      renderAll();
      return true;
    } catch {
      backendOnline = false;
      updateBackendStatus("Modo local: accion creada sin backend", false);
    }
  }
  createAction(finding.actionTitle, finding.code, finding.actionType, finding.origin);
  return false;
}

function renderAuditLog() {
  const container = document.querySelector("#auditLog");
  if (!container) return;
  const events = state.auditLog.slice(0, 12);
  container.innerHTML = events.length
    ? events.map((event) => `
      <div class="audit-event">
        <div>
          <strong>${event.title}</strong>
          <span>${event.actor} - ${event.date}</span>
        </div>
        <span class="badge ${event.type === "ejecucion_agente" ? "en_proceso" : event.actor === "agente" ? "phva" : "cumple"}">${event.type === "ejecucion_agente" ? "ejecucion" : event.actor}</span>
        <p>${event.detail}</p>
        <small>Requisito ${event.code || "N/A"} - ${event.type}</small>
      </div>`).join("")
    : `<div class="muted">La bitacora se llenara con acciones del agente, revisiones humanas y evidencias.</div>`;
}

function auditLogReportText() {
  const events = state.auditLog || [];
  const agentRuns = events.filter((event) => event.type === "ejecucion_agente");
  const humanEvents = events.filter((event) => event.actor === "humano");
  const byRequirement = events.reduce((acc, event) => {
    const code = event.code || "N/A";
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {});
  return [
    "BITACORA AUDITABLE SGSTA AGENT",
    "",
    `Organizacion: ${state.organizationName || state.orgName || "Mi empresa"}`,
    `Sistema: ${activeSystem().name}`,
    `Fecha de descarga: ${today()}`,
    "",
    "Resumen",
    `- Eventos registrados: ${events.length}`,
    `- Ejecuciones del agente: ${agentRuns.length}`,
    `- Eventos humanos: ${humanEvents.length}`,
    `- Uso acumulado del agente: ${state.planUsage.agentRuns}`,
    "",
    "Eventos por requisito",
    ...Object.entries(byRequirement).map(([code, count]) => `- ${code}: ${count}`),
    "",
    "Detalle cronologico",
    ...(events.length ? events.map((event, index) => [
      `${index + 1}. ${event.date} | ${event.actor} | ${event.type} | Requisito ${event.code || "N/A"}`,
      `   ${event.title}`,
      `   ${event.detail}`
    ].join("\n")) : ["- Sin eventos registrados."]),
    "",
    "Regla de gobierno",
    "El agente puede preparar borradores, generar acciones y priorizar trabajos. La aprobacion de documentos, cierre de acciones criticas y validacion de cumplimiento requieren decision humana."
  ].join("\n");
}

function downloadAuditLogReport() {
  const blob = new Blob([auditLogReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bitacora_auditable_sgsta_agent.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Bitacora auditable descargada",
    detail: "Se descargo el reporte de trazabilidad del agente y revision humana.",
    code: "7.5",
    type: "bitacora",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function recordAuditEvent({ title, detail, code = "", type = "evento", actor = "agente" }) {
  state.auditLog.unshift({
    title,
    detail,
    code,
    type,
    actor,
    date: today()
  });
  state.auditLog = state.auditLog.slice(0, 80);
}

function recordAgentExecution(item, result) {
  if (!item) return;
  recordAuditEvent({
    title: `Agente ejecuto: ${item.title}`,
    detail: `${result} Prioridad: ${item.priority || "media"}. Tipo: ${item.kind || "tarea"}.`,
    code: item.code || "",
    type: "ejecucion_agente",
    actor: "agente"
  });
  state.planUsage.agentRuns += 1;
}

function renderSubscriptionPlans() {
  const current = subscriptionPlans[state.currentPlan] || subscriptionPlans.profesional;
  const usage = currentPlanUsage();
  renderCommercialSummary();
  renderPilotSalesPackage();
  const planUsage = document.querySelector("#planUsage");
  if (planUsage) {
    planUsage.innerHTML = Object.entries(usage).map(([key, item]) => `
      <div class="usage-card ${item.over ? "over" : ""}">
        <span>${item.label}</span>
        <strong>${item.used}/${item.limit}</strong>
        <div class="progress"><span style="width:${Math.min(item.pct, 100)}%"></span></div>
      </div>`).join("");
  }
  const systemsMatrix = document.querySelector("#systemsMatrix");
  if (systemsMatrix) {
    systemsMatrix.innerHTML = Object.entries(managementSystems).map(([id, system]) => `
      <div class="system-card ${id === state.activeSystem ? "selected" : ""}">
        <div>
          <strong>${system.name}</strong>
          <span>${system.code} - ${system.status}</span>
        </div>
        <p>${system.focus}</p>
        <small>${system.requirements} - ${system.forms} formularios</small>
        <button class="secondary-button" data-system="${id}" type="button">${id === state.activeSystem ? "Activo" : "Activar"}</button>
      </div>`).join("");
    systemsMatrix.querySelectorAll("[data-system]").forEach((button) => {
      button.addEventListener("click", () => activateManagementSystem(button.dataset.system));
    });
  }
  document.querySelector("#subscriptionPlans").innerHTML = Object.entries(subscriptionPlans).map(([id, plan]) => `
    <article class="plan-card ${id === state.currentPlan ? "selected" : ""}">
      <h3>${plan.name}</h3>
      <strong>${plan.price}</strong>
      <p>${plan.text}</p>
      <span class="muted">${plan.fit}</span>
      <button class="secondary-button" data-plan="${id}" type="button">${id === state.currentPlan ? "Plan actual" : "Usar plan"}</button>
    </article>`).join("");
  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentPlan = button.dataset.plan;
      recordAuditEvent({
        title: "Plan actualizado",
        detail: `La organizacion cambio al plan ${subscriptionPlans[state.currentPlan].name}.`,
        type: "suscripcion",
        actor: "humano"
      });
      saveState();
      renderAll();
    });
  });
}

function activateManagementSystem(systemId) {
  if (!canActivateSystem(systemId)) return;
  state.activeSystem = systemId;
  state.planUsage.norms = systemId === "iso21101" ? 1 : Math.max(state.planUsage.norms, 2);
  recordAuditEvent({
    title: "Sistema de gestion activado",
    detail: `Se selecciono ${managementSystems[systemId].name}.`,
    type: "multi_norma",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function canActivateSystem(systemId) {
  if (systemId === "iso21101") return true;
  const plan = subscriptionPlans[state.currentPlan] || subscriptionPlans.profesional;
  if (plan.limits.norms > 1) return true;
  addMessage("agent", `El plan ${plan.name} permite una sola norma activa. Para activar ${managementSystems[systemId].name}, usa Consultor o Empresarial.`);
  recordAuditEvent({
    title: "Activacion multi-norma bloqueada",
    detail: `El plan ${plan.name} no permite activar ${managementSystems[systemId].name}.`,
    type: "suscripcion",
    actor: "sistema"
  });
  saveState();
  renderAll();
  return false;
}

function currentPlanUsage() {
  const plan = subscriptionPlans[state.currentPlan] || subscriptionPlans.profesional;
  const used = {
    systems: state.planUsage.systems,
    organizations: state.planUsage.organizations,
    forms: state.formResponses.length,
    agentRuns: state.planUsage.agentRuns,
    norms: state.planUsage.norms
  };
  const labels = {
    systems: "Sistemas",
    organizations: "Organizaciones",
    forms: "Formularios",
    agentRuns: "Ejecuciones agente",
    norms: "Normas"
  };
  return Object.fromEntries(Object.entries(plan.limits).map(([key, limit]) => {
    const count = used[key] || 0;
    return [key, { label: labels[key], used: count, limit, pct: Math.round((count / limit) * 100), over: count > limit }];
  }));
}

function commercialSummaryData() {
  const plan = subscriptionPlans[state.currentPlan] || subscriptionPlans.profesional;
  const progress = implementationProgress();
  const demo = demoReadinessStatus();
  const evidencePackages = requirements.map(evidencePackageForRequirement);
  const evidenceWithSupport = evidencePackages.filter((item) => item.score > 0).length;
  const completeEvidence = evidencePackages.filter((item) => item.score >= 100).length;
  const blockedActivities = state.activities
    .map((activity) => activityOperationDecision(activityReadiness(activity.name)))
    .filter((decision) => decision.badge === "no_cumple").length;
  const pendingActions = state.actions.filter((action) => action.status !== "cerrada").length;
  const aiDocuments = state.documents.filter((doc) => doc.content).length;
  const openTraining = state.trainingNeeds.filter((item) => item.status !== "cerrada").length;
  const companyName = state.company.legalName || state.orgName || "la empresa";
  const pilot = pilotObservationSummary();
  return {
    plan,
    progress,
    demo,
    companyName,
    activities: state.activities.length,
    blockedActivities,
    evidenceWithSupport,
    completeEvidence,
    pendingActions,
    aiDocuments,
    openTraining,
    pilot
  };
}

function commercialSummaryText() {
  const data = commercialSummaryData();
  return [
    `Resumen comercial SGSTA Agent - ${data.companyName}`,
    "",
    "Promesa:",
    "SGSTA Agent ayuda a operadores de turismo de aventura a implementar, mantener y evidenciar su sistema de gestion ISO 21101 sin depender de formatos sueltos.",
    "",
    "Valor actual demostrado:",
    `- Avance PHVA: ${data.progress.completed}/${data.progress.total} pasos (${data.progress.pct}%).`,
    `- Preparacion para demo: ${data.demo.completed}/${data.demo.total} controles (${data.demo.score}%, ${data.demo.label}).`,
    `- Actividades controladas: ${data.activities}; actividades bloqueadas para operar: ${data.blockedActivities}.`,
    `- Evidencias por requisito: ${data.evidenceWithSupport}/${requirements.length} con soporte inicial; ${data.completeEvidence} completas.`,
    `- Documentos con borrador IA: ${data.aiDocuments}.`,
    `- Acciones abiertas trazables: ${data.pendingActions}.`,
    `- Necesidades de capacitacion abiertas: ${data.openTraining}.`,
    `- Observaciones del piloto: ${data.pilot.total} registradas, ${data.pilot.open} abiertas, ${data.pilot.converted} convertidas en mejora.`,
    "",
    "Como se vende:",
    `Plan recomendado: ${data.plan.name} (${data.plan.price}). ${data.plan.text}`,
    `Cliente ideal: ${data.plan.fit}`,
    "",
    "Diferenciador:",
    "El agente no solo llena documentos; cruza actividades, riesgos, personal, capacitacion, equipos, seguros, participantes, evidencias y acciones para sostener el ciclo PHVA.",
    "",
    "Regla de control:",
    "El agente propone, diligencia borradores y crea acciones. La empresa aprueba documentos, cierre de acciones criticas y cumplimiento.",
    "",
    "Aprendizajes reales del piloto:",
    ...(priorityPilotObservations(5).length ? priorityPilotObservations(5).map((item) => `- ${item.priority || "media"}: ${item.text}`) : ["- Registrar observaciones del primer piloto para ajustar producto, implementacion y venta."])
  ].join("\n");
}

function downloadCommercialSummary() {
  const blob = new Blob([commercialSummaryText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "resumen_comercial_sgsta_agent.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Resumen comercial descargado",
    detail: "Se descargo el resumen comercial del valor de la plataforma.",
    type: "suscripcion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function renderCommercialSummary() {
  const container = document.querySelector("#commercialSummary");
  if (!container) return;
  const data = commercialSummaryData();
  container.innerHTML = `
    <article class="commercial-card">
      <div class="commercial-copy">
        <p class="eyebrow">Propuesta de valor</p>
        <h3>Vender gestion asistida, no formatos sueltos</h3>
        <p>El agente convierte actividades reales en controles PHVA: riesgos, guias, equipos, seguros, participantes, evidencias y acciones.</p>
        <div class="commercial-proof">
          <span>${data.progress.pct}% PHVA</span>
          <span>${data.demo.score}% demo</span>
          <span>${data.evidenceWithSupport}/${requirements.length} evidencias</span>
          <span>${data.activities} actividades</span>
        </div>
      </div>
      <div class="commercial-side">
        <span class="badge ${data.demo.score >= 80 ? "cumple" : data.demo.score >= 50 ? "en_proceso" : "pendiente"}">${data.demo.label}</span>
        <strong>${data.plan.name}</strong>
        <p>${data.plan.fit}</p>
        <div class="row-actions">
          <button class="secondary-button" data-commercial-open-demo type="button">Ver demo</button>
          <button data-commercial-download type="button">Descargar resumen</button>
        </div>
      </div>
    </article>`;
  container.querySelector("[data-commercial-open-demo]")?.addEventListener("click", () => showView("panel"));
  container.querySelector("[data-commercial-download]")?.addEventListener("click", downloadCommercialSummary);
}

function pilotSalesPlan() {
  const demo = demoReadinessStatus();
  const progress = implementationProgress();
  const pilot = pilotObservationSummary();
  const companyReady = companyProfileGaps().length <= 2;
  const hasActivities = state.activities.length > 0;
  const hasEvidence = requirements.map(evidencePackageForRequirement).filter((item) => item.score > 0).length >= 6;
  const hasDocuments = state.documents.filter((doc) => doc.content).length >= 3;
  const hasReview = state.managementReviews.length > 0;
  const steps = [
    {
      id: "perfil_cliente",
      label: "Perfil del cliente piloto",
      detail: "Empresa, ubicacion, alcance, actividades y responsables cargados.",
      done: companyReady && hasActivities,
      action: "Completar perfil de cliente piloto",
      code: "4.1"
    },
    {
      id: "demo_operativa",
      label: "Demo operativa",
      detail: "Mostrar brechas por actividad, evidencias, documentos y revision por direccion.",
      done: demo.score >= 50,
      action: "Preparar demo operativa de SGSTA Agent",
      code: "4.4"
    },
    {
      id: "evidencia_minima",
      label: "Evidencia minima",
      detail: "Tener documentos y paquetes de evidencia suficientes para explicar cumplimiento.",
      done: hasEvidence && hasDocuments,
      action: "Preparar evidencia minima para piloto",
      code: "7.5"
    },
    {
      id: "gobierno_humano",
      label: "Aprobacion humana",
      detail: "Definir quien aprueba documentos, acciones criticas y cierre de cumplimiento.",
      done: hasReview,
      action: "Definir aprobaciones humanas del piloto",
      code: "9.3"
    },
    {
      id: "suscripcion",
      label: "Oferta de suscripcion",
      detail: "Definir plan, limites, alcance de soporte y siguiente reunion.",
      done: Boolean(state.currentPlan),
      action: "Definir propuesta de suscripcion para cliente piloto",
      code: "4.4"
    },
    {
      id: "aprendizaje_piloto",
      label: "Aprendizajes del piloto",
      detail: "Registrar observaciones reales y convertir las abiertas en acciones de mejora.",
      done: pilot.total > 0 && pilot.open === 0,
      action: "Convertir observaciones piloto en mejoras trazables",
      code: "10.2"
    }
  ];
  const completed = steps.filter((step) => step.done).length;
  return {
    progress,
    demo,
    steps,
    completed,
    total: steps.length,
    pct: Math.round((completed / steps.length) * 100),
    pilot,
    next: steps.find((step) => !step.done) || steps[steps.length - 1]
  };
}

function pilotSalesPlanText() {
  const plan = pilotSalesPlan();
  return [
    "Plan piloto comercial - SGSTA Agent",
    "",
    `Estado: ${plan.completed}/${plan.total} pasos (${plan.pct}%).`,
    `Avance PHVA del sistema: ${plan.progress.pct}%.`,
    `Demo: ${plan.demo.score}% - ${plan.demo.label}.`,
    `Observaciones piloto: ${plan.pilot.total} total, ${plan.pilot.open} abiertas, ${plan.pilot.converted} convertidas.`,
    "",
    "Objetivo:",
    "Conseguir una primera empresa piloto que pruebe la plataforma con actividades reales de turismo de aventura y valide el valor del agente.",
    "",
    "Pasos:",
    ...plan.steps.map((step) => `- ${step.done ? "[listo]" : "[pendiente]"} ${step.label}: ${step.detail}`),
    "",
    "Siguiente paso recomendado:",
    `${plan.next.action} (requisito ${plan.next.code}).`,
    "",
    "Condicion importante:",
    "El piloto debe usar datos reales de actividades, pero participantes/clientes se manejan con evidencia externa y datos minimos no sensibles."
  ].join("\n");
}

function downloadPilotSalesPlan() {
  const blob = new Blob([pilotSalesPlanText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plan_piloto_comercial_sgsta_agent.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Plan piloto descargado",
    detail: "Se descargo el plan piloto comercial de SGSTA Agent.",
    type: "suscripcion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function createPilotSalesActions() {
  const plan = pilotSalesPlan();
  let created = 0;
  plan.steps.filter((step) => !step.done).forEach((step) => {
    const title = `Piloto comercial: ${step.action}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: step.code,
      status: "abierta",
      type: "tarea",
      origin: "suscripcion",
      priority: step.id === "perfil_cliente" || step.id === "demo_operativa" ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: step.detail,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      createdAt: today()
    });
    created += 1;
  });
  recordAuditEvent({
    title: "Acciones de piloto creadas",
    detail: `Se crearon ${created} accion(es) para preparar el piloto comercial.`,
    code: "4.4",
    type: "suscripcion",
    actor: "agente"
  });
  addMessage("agent", created ? `Cree ${created} accion(es) para preparar el piloto comercial.` : "El piloto comercial ya tenia acciones abiertas para sus pendientes.");
  saveState();
  renderAll();
}

function renderPilotSalesPackage() {
  const container = document.querySelector("#pilotSalesPackage");
  if (!container) return;
  const plan = pilotSalesPlan();
  container.innerHTML = `
    <article class="pilot-card">
      <div class="pilot-head">
        <div>
          <p class="eyebrow">Primer cliente piloto</p>
          <h3>Paquete para validar la suscripcion</h3>
        </div>
        <div class="pilot-score">
          <strong>${plan.pct}%</strong>
          <span>${plan.completed}/${plan.total} listo</span>
        </div>
      </div>
      <div class="pilot-steps">
        ${plan.steps.map((step) => `
          <div class="pilot-step ${step.done ? "done" : ""}">
            <span class="badge ${step.done ? "cumple" : "pendiente"}">${step.done ? "listo" : "pendiente"}</span>
            <div>
              <strong>${step.label}</strong>
              <p>${step.detail}</p>
            </div>
          </div>`).join("")}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-pilot-download type="button">Descargar plan piloto</button>
        <button data-pilot-actions type="button">Crear acciones piloto</button>
      </div>
    </article>`;
  container.querySelector("[data-pilot-download]")?.addEventListener("click", downloadPilotSalesPlan);
  container.querySelector("[data-pilot-actions]")?.addEventListener("click", createPilotSalesActions);
}

function planAllows(feature) {
  const usage = currentPlanUsage();
  return !usage[feature] || !usage[feature].over;
}

function canCreateMoreForms() {
  const usage = currentPlanUsage().forms;
  if (!usage || usage.used < usage.limit) return true;
  addMessage("agent", `Tu plan ${subscriptionPlans[state.currentPlan].name} llego al limite de formularios (${usage.limit}). Cambia de plan para crear mas borradores.`);
  recordAuditEvent({
    title: "Limite de plan alcanzado",
    detail: `Se bloqueo la creacion de formularios por limite del plan ${subscriptionPlans[state.currentPlan].name}.`,
    type: "suscripcion",
    actor: "sistema"
  });
  saveState();
  renderAll();
  return false;
}

function canRunAgent() {
  const usage = currentPlanUsage().agentRuns;
  if (!usage || usage.used < usage.limit) return true;
  addMessage("agent", `Tu plan ${subscriptionPlans[state.currentPlan].name} llego al limite de ejecuciones del agente (${usage.limit}).`);
  recordAuditEvent({
    title: "Limite de agente alcanzado",
    detail: `Se bloqueo una ejecucion del monitor por limite del plan ${subscriptionPlans[state.currentPlan].name}.`,
    type: "suscripcion",
    actor: "sistema"
  });
  saveState();
  renderAll();
  return false;
}

function renderActions() {
  const container = document.querySelector("#actionsTable");
  const summary = document.querySelector("#actionsSummary");
  const selectedActivity = state.selectedActivityName || state.activities[0]?.name || "";
  const activityActions = selectedActivity
    ? state.actions.filter((item) => item.status !== "cerrada" && item.relatedActivity === selectedActivity)
    : [];
  if (summary) {
    const open = state.actions.filter((item) => item.status !== "cerrada").length;
    const assigned = state.actions.filter((item) => item.responsible && item.dueDate).length;
    const efficacy = state.actions.filter((item) => item.efficacyStatus === "eficaz").length;
    const corrective = state.actions.filter((item) => item.type === "correctiva").length;
    const pendingEfficacy = state.actions.filter((item) => item.status === "pendiente_eficacia" || (item.status === "cerrada" && item.efficacyStatus !== "eficaz")).length;
    summary.innerHTML = `
      <div class="report-card"><span>Abiertas</span><strong>${open}</strong></div>
      <div class="report-card"><span>Asignadas</span><strong>${assigned}</strong></div>
      <div class="report-card"><span>Correctivas</span><strong>${corrective}</strong></div>
      <div class="report-card"><span>Eficaces</span><strong>${efficacy}</strong></div>
      <div class="report-card"><span>Pend. eficacia</span><strong>${pendingEfficacy}</strong></div>
      <div class="report-card"><span>${escapeHtml(selectedActivity || "Actividad")}</span><strong>${activityActions.length}</strong></div>`;
  }
  renderActionClosureBoard();
  renderActionWorkQueue();
  const activeActivityFilter = state.actionFilterActivity || "";
  const rows = state.actions
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !activeActivityFilter || item.relatedActivity === activeActivityFilter);
  container.innerHTML = `
    ${renderActionFilterBar(selectedActivity, activeActivityFilter, activityActions.length)}
    ${rows.length
      ? rows.map(({ item, index }) => actionCardTemplate(item, index)).join("")
      : `<div class="muted">No hay acciones para el filtro seleccionado.</div>`}`;
  bindActionFilterControls(container);
  bindActionControls(container);
}

function renderActionFilterBar(selectedActivity, activeActivityFilter, activityActionCount) {
  return `
    <div class="action-filter-bar">
      <div>
        <p class="eyebrow">Contexto</p>
        <strong>${activeActivityFilter ? `Filtrando: ${escapeHtml(activeActivityFilter)}` : "Todas las acciones"}</strong>
        <span>${selectedActivity ? `Actividad seleccionada: ${escapeHtml(selectedActivity)} (${activityActionCount} abierta(s))` : "Sin actividad seleccionada"}</span>
      </div>
      <div class="row-actions">
        <button class="secondary-button ${!activeActivityFilter ? "button-done" : ""}" data-action-filter="all" type="button">Todas</button>
        <button class="secondary-button ${activeActivityFilter ? "button-done" : ""}" data-action-filter="activity" type="button" ${selectedActivity ? "" : "disabled"}>Solo actividad</button>
        <button class="secondary-button" data-action-filter="download" type="button">Descargar</button>
        <button class="secondary-button" data-action-filter="evidence" type="button">Enviar a evidencias</button>
        <button data-action-filter="open-activity" type="button" ${selectedActivity ? "" : "disabled"}>Ver actividad</button>
      </div>
    </div>`;
}

function bindActionFilterControls(container) {
  container.querySelector("[data-action-filter='all']")?.addEventListener("click", () => {
    state.actionFilterActivity = "";
    saveState();
    renderAll();
  });
  container.querySelector("[data-action-filter='activity']")?.addEventListener("click", () => {
    state.actionFilterActivity = state.selectedActivityName || "";
    saveState();
    renderAll();
  });
  container.querySelector("[data-action-filter='open-activity']")?.addEventListener("click", () => {
    showView("actividades");
  });
  container.querySelector("[data-action-filter='download']")?.addEventListener("click", downloadActionsReport);
  container.querySelector("[data-action-filter='evidence']")?.addEventListener("click", convertActionsReportToEvidence);
}

function actionsReportRows() {
  const activeActivityFilter = state.actionFilterActivity || "";
  return state.actions.filter((action) => !activeActivityFilter || action.relatedActivity === activeActivityFilter);
}

function actionsReportText() {
  const activeActivityFilter = state.actionFilterActivity || "";
  const rows = actionsReportRows();
  const open = rows.filter((action) => action.status !== "cerrada");
  const high = open.filter((action) => action.priority === "alta");
  const pendingEfficacy = rows.filter((action) => action.status === "pendiente_eficacia" || (action.status === "cerrada" && action.efficacyStatus !== "eficaz"));
  return [
    activeActivityFilter ? `REPORTE DE ACCIONES - ${activeActivityFilter}` : "REPORTE DE ACCIONES DE GESTION",
    "",
    `Organizacion: ${state.company.legalName || state.orgName || "Por definir"}`,
    `Sistema: ${activeSystem().name} (${activeSystem().code})`,
    `Fecha: ${today()}`,
    `Responsable: ${state.ownerName || "Por definir"}`,
    `Filtro: ${activeActivityFilter || "Todas las acciones"}`,
    "",
    "Resumen",
    `- Acciones incluidas: ${rows.length}`,
    `- Abiertas: ${open.length}`,
    `- Prioridad alta abiertas: ${high.length}`,
    `- Pendientes de eficacia: ${pendingEfficacy.length}`,
    "",
    "Detalle",
    ...(rows.length ? rows.map((action, index) => [
      `${index + 1}. ${action.title || "Accion sin titulo"}`,
      `   Requisito: ${action.code || "N/A"} | Tipo: ${action.type || "tarea"} | Prioridad: ${action.priority || "media"} | Estado: ${action.status || "abierta"}`,
      `   Actividad: ${action.relatedActivity || action.activity || "General"} | Responsable: ${action.responsible || "por asignar"} | Fecha limite: ${action.dueDate || "por definir"}`,
      `   Origen: ${action.origin || "agente"}${action.sourceDetail ? ` | Fuente: ${action.sourceDetail}` : ""}`,
      `   Causa/razon: ${action.cause || "por documentar"}`,
      `   Seguimiento: ${action.followUp || "pendiente"}`,
      `   Evidencia: ${action.evidence || "pendiente"}`,
      `   Eficacia: ${action.efficacyStatus || "pendiente"} - ${action.efficacyVerification || "por verificar"}`
    ].join("\n")) : ["- No hay acciones para el filtro seleccionado."]),
    "",
    "Regla de gobierno",
    "El agente puede preparar y priorizar acciones. La aprobacion, evidencia real, cierre y verificacion de eficacia requieren validacion humana."
  ].join("\n");
}

function downloadActionsReport() {
  const activeActivityFilter = state.actionFilterActivity || "todas";
  const filename = `reporte_acciones_${activeActivityFilter.toLowerCase().replaceAll(" ", "_").replaceAll("/", "-")}.txt`;
  const blob = new Blob([actionsReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordAuditEvent({
    title: "Reporte de acciones descargado",
    detail: `Se descargo reporte de acciones con filtro: ${state.actionFilterActivity || "todas"}.`,
    code: "10.1",
    type: "accion_gestion",
    actor: "humano"
  });
  saveState();
  renderAll();
}

function convertActionsReportToEvidence() {
  const activeActivityFilter = state.actionFilterActivity || "";
  const title = activeActivityFilter
    ? `Reporte de acciones - ${activeActivityFilter}`
    : "Reporte general de acciones de gestion";
  const rows = actionsReportRows();
  const codes = rows.some((action) => action.type === "mejora" || action.code === "10.2") ? ["10.1", "10.2"] : ["10.1"];
  const content = actionsReportText();
  let created = 0;
  let updated = 0;
  codes.forEach((code) => {
    const linkedDocument = `${title} (${code})`;
    const existing = state.evidence.find((item) => item.linkedDocument === linkedDocument && item.source === "reporte acciones");
    const evidence = {
      title: `${title} - requisito ${code}`,
      code,
      source: "reporte acciones",
      status: "sugerida",
      linkedDocument,
      activity: activeActivityFilter,
      linkedActivity: activeActivityFilter,
      content
    };
    if (existing) {
      Object.assign(existing, evidence, { date: today() });
      updated += 1;
    } else {
      state.evidence.unshift({ date: today(), ...evidence });
      created += 1;
    }
    state.compliance[code] = state.compliance[code] === "cumple" ? "cumple" : "en_proceso";
  });
  recordAuditEvent({
    title: "Reporte de acciones enviado a evidencias",
    detail: `${title}: ${created} evidencia(s) creada(s), ${updated} actualizada(s), requisitos ${codes.join(", ")}.`,
    code: codes.join("/"),
    type: "evidencia",
    actor: "humano"
  });
  saveState();
  renderAll();
  addMessage("agent", `Asocie "${title}" como evidencia sugerida para ${codes.join(" y ")}. Requiere validacion humana.`);
}

function actionClosureStage(action) {
  if (action.status === "cerrada") return { key: "closed", label: "Cerrada", priority: 0 };
  if (!action.responsible || !action.dueDate) return { key: "assign", label: "Asignar", priority: 4 };
  if (!action.followUp) return { key: "follow", label: "Seguimiento", priority: 3 };
  if (!action.evidence) return { key: "evidence", label: "Evidencia", priority: 3 };
  if (!action.efficacyVerification || action.efficacyStatus !== "eficaz") return { key: "efficacy", label: "Eficacia", priority: 2 };
  return { key: "ready", label: "Lista cierre", priority: 1 };
}

function renderActionClosureBoard() {
  const container = document.querySelector("#actionClosureBoard");
  if (!container) return;
  const open = state.actions
    .map((action, index) => ({ action, index, stage: actionClosureStage(action) }))
    .filter((item) => item.action.status !== "cerrada");
  if (!open.length) {
    container.innerHTML = "";
    return;
  }
  const stageCounts = {
    assign: open.filter((item) => item.stage.key === "assign").length,
    follow: open.filter((item) => item.stage.key === "follow").length,
    evidence: open.filter((item) => item.stage.key === "evidence").length,
    efficacy: open.filter((item) => item.stage.key === "efficacy").length,
    ready: open.filter((item) => item.stage.key === "ready").length
  };
  const nextItems = open
    .filter((item) => item.stage.key !== "ready")
    .sort((a, b) => b.stage.priority - a.stage.priority || actionPriorityScore(b.action) - actionPriorityScore(a.action))
    .slice(0, 3);
  container.innerHTML = `
    <div class="closure-board-head">
      <div>
        <p class="eyebrow">Ruta de cierre 10.1-10.2</p>
        <h3>Que falta para cerrar acciones</h3>
      </div>
      <span class="badge requisito">${open.length} abiertas</span>
    </div>
    <div class="closure-stage-grid">
      <div><span>Asignar</span><strong>${stageCounts.assign}</strong></div>
      <div><span>Seguimiento</span><strong>${stageCounts.follow}</strong></div>
      <div><span>Evidencia real</span><strong>${stageCounts.evidence}</strong></div>
      <div><span>Eficacia</span><strong>${stageCounts.efficacy}</strong></div>
      <div><span>Listas cierre</span><strong>${stageCounts.ready}</strong></div>
    </div>
    ${nextItems.length ? `
      <div class="closure-next-grid">
        ${nextItems.map(({ action, index, stage }) => `
          <article class="closure-next-card">
            <div>
              <span class="badge requisito">${action.code || "10.1"}</span>
              <span class="badge ${action.priority === "alta" ? "no_cumple" : "en_proceso"}">${stage.label}</span>
            </div>
            <strong>${escapeHtml(action.title || "Accion sin titulo")}</strong>
            <p>${simpleActionNextStep(action)}</p>
            <div class="row-actions">
              <button class="secondary-button" data-action-advance-closure="${index}" type="button">Avanzar cierre</button>
              <button class="secondary-button" data-action-prepare-followup="${index}" type="button">Preparar seguimiento</button>
              <button data-action-focus="${index}" type="button">Ver accion</button>
            </div>
          </article>`).join("")}
      </div>` : `<p class="muted">Las acciones abiertas estan listas para cierre humano.</p>`}`;
  container.querySelectorAll("[data-action-prepare-followup]").forEach((button) => {
    button.addEventListener("click", () => prepareActionFollowUp(Number(button.dataset.actionPrepareFollowup)));
  });
  container.querySelectorAll("[data-action-advance-closure]").forEach((button) => {
    button.addEventListener("click", () => advanceActionClosure(Number(button.dataset.actionAdvanceClosure)));
  });
  container.querySelectorAll("[data-action-focus]").forEach((button) => {
    button.addEventListener("click", () => focusActionCard(Number(button.dataset.actionFocus)));
  });
}

function advanceActionClosure(index) {
  const action = state.actions[index];
  if (!action) return;
  assignActionDefaults(action);
  let step = "asignacion";
  if (!action.followUp) {
    action.followUp = "Seguimiento sugerido por el agente: validar avance, responsable, fecha y obstaculos antes del cierre.";
    step = "seguimiento";
  } else if (!action.evidence) {
    action.evidence = "Pendiente adjuntar enlace, archivo o referencia real de evidencia.";
    step = "evidencia";
  } else if (!action.efficacyVerification) {
    action.efficacyVerification = "Pendiente verificar eficacia con evidencia posterior a la implementacion.";
    step = "verificacion de eficacia";
  } else if (action.efficacyStatus !== "eficaz") {
    action.efficacyStatus = "pendiente";
    action.status = "pendiente_eficacia";
    step = "eficacia pendiente";
  }
  action.updatedAt = today();
  recordAuditEvent({
    title: "Cierre de accion avanzado",
    detail: `${action.title}: el agente completo el paso ${step}. No cerro la accion automaticamente.`,
    code: action.code,
    type: "accion_gestion",
    actor: "agente"
  });
  addMessage("agent", `Avance el cierre de "${action.title}" hasta ${step}. Falta validacion humana para cerrar.`);
  saveState();
  renderAll();
}

function prepareActionFollowUp(index) {
  const action = state.actions[index];
  if (!action) return;
  assignActionDefaults(action);
  if (!action.followUp) action.followUp = "Seguimiento iniciado por el agente. Validar avance real y adjuntar evidencia soporte.";
  if (!action.efficacyVerification) action.efficacyVerification = "Pendiente de verificacion humana despues de implementar la accion.";
  if (!action.efficacyStatus) action.efficacyStatus = "pendiente";
  action.updatedAt = today();
  recordAuditEvent({
    title: "Seguimiento de accion preparado",
    detail: `${action.title} quedo con responsable, fecha y seguimiento inicial. Falta evidencia real y aprobacion humana.`,
    code: action.code,
    type: "accion_gestion",
    actor: "agente"
  });
  addMessage("agent", `Prepare seguimiento para "${action.title}". No adjunte evidencia ni cerre la accion; eso requiere validacion humana.`);
  saveState();
  renderAll();
}

function focusActionCard(index) {
  showView("acciones");
  const card = document.querySelector(`[data-action-card="${index}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function actionPriorityScore(action) {
  const priority = { alta: 30, media: 20, baja: 10 }[action.priority || "media"] || 20;
  const type = { correctiva: 20, preventiva: 16, mejora: 10, tarea: 8 }[action.type || "tarea"] || 8;
  const status = action.status === "pendiente_eficacia" ? 18 : action.status === "cerrada" ? -100 : 10;
  const evidenceGap = actionReadyToClose(action) ? 0 : 8;
  return priority + type + status + evidenceGap;
}

function simpleActionNextStep(action) {
  if (!action.responsible || !action.dueDate) return "Asignar responsable y fecha.";
  if (!action.followUp) return "Registrar seguimiento corto.";
  if (!action.evidence) return "Adjuntar o enlazar evidencia.";
  if (!action.efficacyVerification) return "Escribir como se verifico que funciono.";
  if (action.efficacyStatus !== "eficaz") return "Marcar eficacia cuando este comprobada.";
  return "Cerrar accion.";
}

function renderActionWorkQueue() {
  const container = document.querySelector("#actionWorkQueue");
  if (!container) return;
  const items = state.actions
    .map((action, index) => ({ action, index, score: actionPriorityScore(action) }))
    .filter((item) => item.action.status !== "cerrada")
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  if (!items.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <div class="queue-head">
      <div>
        <p class="eyebrow">Cola operativa</p>
        <h3>Acciones que conviene atender primero</h3>
      </div>
      <span class="badge phva">${items.length}</span>
    </div>
    <div class="queue-grid">
      ${items.map(({ action, index }, position) => `
        <article class="queue-card ${position === 0 ? "primary" : ""}">
          <div class="gap-guide-title">
            <span class="badge requisito">${action.code || "10.1"}</span>
            <span class="badge ${action.priority === "alta" ? "no_cumple" : "en_proceso"}">${action.priority || "media"}</span>
          </div>
          <strong>${escapeHtml(action.title || "Accion sin titulo")}</strong>
          <p>${simpleActionNextStep(action)}</p>
          <div class="matrix-metrics">
            <span>${action.relatedActivity || action.activity || "general"}</span>
            <span>${action.type || "tarea"}</span>
            <span>${action.status || "abierta"}</span>
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-queue-assign="${index}" type="button">Asignar</button>
            <button data-queue-focus="${index}" type="button">Ver accion</button>
          </div>
        </article>`).join("")}
    </div>`;
  container.querySelectorAll("[data-queue-assign]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = state.actions[Number(button.dataset.queueAssign)];
      if (!action) return;
      assignActionDefaults(action);
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-queue-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = state.actions[Number(button.dataset.queueFocus)];
      if (action?.relatedActivity) state.selectedActivityName = action.relatedActivity;
      focusActionCard(Number(button.dataset.queueFocus));
    });
  });
}

function agentWorkQueueItems() {
  const alerts = buildSystemAlerts();
  const reviewItems = buildReviewItems();
  const agendaItems = buildAgendaItems();
  const activityPriority = state.activities
    .map((activity) => ({ activity, readiness: activityReadiness(activity.name) }))
    .filter((item) => item.readiness.gaps.length)
    .sort((a, b) => b.readiness.high - a.readiness.high || a.readiness.score - b.readiness.score)[0];
  const items = [];
  if (activityPriority) {
    items.push({
      title: `Revisar actividad: ${activityPriority.activity.name}`,
      detail: `${activityPriority.readiness.gaps.length} brecha(s), ${activityPriority.readiness.high} critica(s).`,
      code: "8.1",
      kind: "puedo ejecutar",
      priority: activityPriority.readiness.high ? "alta" : "media",
      action: "activity",
      activity: activityPriority.activity.name
    });
  }
  const criticalAlert = alerts.find((item) => item.severity === "alta") || alerts[0];
  if (criticalAlert) {
    items.push({
      title: criticalAlert.title,
      detail: criticalAlert.detail,
      code: criticalAlert.code,
      kind: "puedo ejecutar",
      priority: criticalAlert.severity === "alta" ? "alta" : "media",
      action: "alert"
    });
  }
  const humanReview = reviewItems[0];
  if (humanReview) {
    items.push({
      title: humanReview.title,
      detail: humanReview.detail,
      code: humanReview.code,
      kind: "requiere humano",
      priority: humanReview.priority || "media",
      action: "human"
    });
  }
  const agendaItem = agendaItems[0];
  if (agendaItem) {
    items.push({
      title: agendaItem.title,
      detail: agendaItem.detail,
      code: agendaItem.code,
      kind: "programar",
      priority: agendaItem.priority || "media",
      action: "agenda"
    });
  }
  if (!state.managementReviews.length) {
    items.push({
      title: "Preparar revision por la direccion",
      detail: "El agente puede consolidar entradas 9.3, pero la direccion debe aprobar.",
      code: "9.3",
      kind: "puedo ejecutar",
      priority: "media",
      action: "review"
    });
  }
  return items
    .filter((item, index, list) => list.findIndex((other) => other.title === item.title && other.code === item.code) === index)
    .sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority))
    .slice(0, 4);
}

function runAgentQueueItem(action, itemIndex = 0) {
  const queueItem = agentWorkQueueItems()[itemIndex] || agentWorkQueueItems().find((item) => item.action === action);
  if (action === "activity") {
    if (queueItem?.activity) state.selectedActivityName = queueItem.activity;
    recordAgentExecution(queueItem, "Abri la ficha operativa para revisar brechas por actividad.");
    showView("actividades");
    return;
  }
  if (action === "alert") {
    const alert = buildSystemAlerts().find((item) => item.severity === "alta") || buildSystemAlerts()[0];
    if (alert) createActionFromAlert(alert);
    recordAgentExecution(queueItem, "Converti o actualice una alerta como accion auditable.");
    return;
  }
  if (action === "human") {
    recordAgentExecution(queueItem, "Dirigi el pendiente a revision humana; no aprobe ni cerre automaticamente.");
    saveState();
    showView("revision_humana");
    return;
  }
  if (action === "agenda") {
    recordAgentExecution(queueItem, "Abri la agenda para programar el pendiente priorizado.");
    saveState();
    showView("agenda");
    return;
  }
  if (action === "review") {
    recordAgentExecution(queueItem, "Actualice o prepare entradas para revision por la direccion 9.3.");
    refreshManagementReview(0);
  }
}

function renderAgentWorkQueue() {
  const container = document.querySelector("#agentWorkQueue");
  if (!container) return;
  const items = agentWorkQueueItems();
  container.innerHTML = `
    <div class="queue-head agent-queue-head">
      <div>
        <p class="eyebrow">Cola del agente</p>
        <h3>Que puede hacer ahora</h3>
      </div>
      <span class="badge phva">${items.length}</span>
    </div>
    <div class="agent-queue-grid">
      ${items.length ? items.map((item, index) => `
        <article class="agent-queue-card ${item.kind === "requiere humano" ? "human" : ""}">
          <div class="gap-guide-title">
            <span class="badge requisito">${item.code || "SG"}</span>
            <span class="badge ${item.priority === "alta" ? "no_cumple" : "en_proceso"}">${item.priority}</span>
          </div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.detail)}</p>
          <small>${item.kind}</small>
          <button data-agent-queue-run="${item.action}" data-agent-queue-index="${index}" type="button">${item.kind === "requiere humano" ? "Revisar" : "Ejecutar"}</button>
        </article>`).join("") : `<div class="muted">No hay trabajos urgentes. El agente queda en vigilancia.</div>`}
    </div>`;
  container.querySelectorAll("[data-agent-queue-run]").forEach((button) => {
    button.addEventListener("click", () => runAgentQueueItem(button.dataset.agentQueueRun, Number(button.dataset.agentQueueIndex)));
  });
}

function actionCardTemplate(item, index) {
  const related = item.relatedActivity || item.activity || "";
  const sourceDetail = item.sourceDetail || item.gapKey || "";
  const canClose = actionReadyToClose(item);
  const statusClass = item.status === "cerrada" ? "cumple" : item.status === "pendiente_eficacia" ? "no_cumple" : "en_proceso";
  return `
    <article class="action-management-card" data-action-card="${index}">
      <div class="action-card-head">
        <div>
          <span class="badge requisito">${item.code || "10.1"}</span>
          <span class="badge phva">${item.type || "tarea"}</span>
          <span class="badge ${statusClass}">${item.status || "abierta"}</span>
        </div>
        <div class="row-actions">
          <button class="secondary-button" data-action-assign="${index}" type="button">Asignar</button>
          <button class="secondary-button" data-action-advance="${index}" type="button">Avanzar cierre</button>
          <button data-close-action="${index}" type="button">${item.status === "cerrada" ? "Reabrir" : "Cerrar"}</button>
        </div>
      </div>
      ${item.status !== "cerrada" ? `
        <div class="action-close-readiness ${canClose ? "ready" : "pending"}">
          <strong>${canClose ? "Lista para cierre" : "Falta para cerrar"}</strong>
          <span>${actionClosureMessage(item)}</span>
        </div>` : ""}
      ${related || sourceDetail ? `
        <div class="action-trace">
          <span>Actividad: <strong>${escapeHtml(related || "general")}</strong></span>
          <span>Fuente: <strong>${escapeHtml(sourceDetail || item.origin || "accion")}</strong></span>
          ${item.origin === "brecha_actividad" ? `<button class="secondary-button" data-open-activity-gaps type="button">Ver brechas</button>` : ""}
        </div>` : ""}
      <label class="wide">
        Accion propuesta
        <input data-action-field="${index}:title" type="text" value="${escapeHtml(item.title || "")}">
      </label>
      <div class="action-form-grid">
        <label>
          Tipo
          <select data-action-field="${index}:type">
            ${["tarea", "correctiva", "preventiva", "mejora"].map((value) => `<option value="${value}" ${value === (item.type || "tarea") ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>
          Prioridad
          <select data-action-field="${index}:priority">
            ${["alta", "media", "baja"].map((value) => `<option value="${value}" ${value === (item.priority || "media") ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>
          Responsable
          <input data-action-field="${index}:responsible" type="text" value="${escapeHtml(item.responsible || item.owner || "")}" placeholder="Responsable">
        </label>
        <label>
          Fecha limite
          <input data-action-field="${index}:dueDate" type="text" value="${escapeHtml(item.dueDate || item.deadline || item.fechaLimite || "")}" placeholder="dd/mm/aaaa">
        </label>
      </div>
      <div class="action-form-grid">
        <label>
          Origen
          <input data-action-field="${index}:origin" type="text" value="${escapeHtml(item.origin || "")}" placeholder="auditoria, riesgo, incidente, agente">
        </label>
        <label>
          Estado eficacia
          <select data-action-field="${index}:efficacyStatus">
            ${["pendiente", "eficaz", "no_eficaz"].map((value) => `<option value="${value}" ${value === (item.efficacyStatus || "pendiente") ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label>
          Evidencia
          <input data-action-field="${index}:evidence" type="text" value="${escapeHtml(item.evidence || "")}" placeholder="enlace, archivo o soporte">
        </label>
      </div>
      <div class="action-form-grid">
        <label>
          Causa
          <textarea data-action-field="${index}:cause" rows="2" placeholder="Causa raiz o razon de la accion">${escapeHtml(item.cause || "")}</textarea>
        </label>
        <label>
          Correccion inmediata
          <textarea data-action-field="${index}:immediateCorrection" rows="2" placeholder="Contencion o correccion inmediata">${escapeHtml(item.immediateCorrection || "")}</textarea>
        </label>
      </div>
      <div class="action-form-grid">
        <label>
          Seguimiento
          <textarea data-action-field="${index}:followUp" rows="2" placeholder="Avances, evidencias, observaciones">${escapeHtml(item.followUp || "")}</textarea>
        </label>
        <label>
          Verificacion de eficacia
          <textarea data-action-field="${index}:efficacyVerification" rows="2" placeholder="Como se verifico que funciono">${escapeHtml(item.efficacyVerification || "")}</textarea>
        </label>
      </div>
    </article>`;
}

function actionReadyToClose(action) {
  return Boolean(action.followUp && action.evidence && action.efficacyVerification && action.efficacyStatus === "eficaz");
}

function actionClosureMessage(action) {
  const missing = [];
  if (!action.followUp) missing.push("seguimiento");
  if (!action.evidence) missing.push("evidencia");
  if (!action.efficacyVerification) missing.push("verificacion de eficacia");
  if (action.efficacyStatus !== "eficaz") missing.push("estado eficaz");
  return missing.length ? `Completa: ${missing.join(", ")}.` : "Tiene seguimiento, evidencia y eficacia verificada.";
}

function bindActionControls(container) {
  container.querySelectorAll("[data-open-activity-gaps]").forEach((button) => {
    button.addEventListener("click", () => showView("brechas_actividad"));
  });
  container.querySelectorAll("[data-action-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const [index, key] = field.dataset.actionField.split(":");
      const action = state.actions[Number(index)];
      if (!action) return;
      action[key] = field.value;
      action.updatedAt = today();
      saveState();
      renderMetrics();
      renderReviewInbox();
      renderAgenda();
    });
  });
  container.querySelectorAll("[data-action-assign]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = state.actions[Number(button.dataset.actionAssign)];
      if (!action) return;
      assignActionDefaults(action);
      recordAuditEvent({
        title: "Accion asignada",
        detail: `${action.title} queda a cargo de ${action.responsible} con fecha limite ${action.dueDate}.`,
        code: action.code,
        type: "asignacion",
        actor: "humano"
      });
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-action-advance]").forEach((button) => {
    button.addEventListener("click", () => advanceActionClosure(Number(button.dataset.actionAdvance)));
  });
  container.querySelectorAll("[data-close-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = state.actions[Number(button.dataset.closeAction)];
      if (!action) return;
      const closing = action.status !== "cerrada";
      if (closing && !actionReadyToClose(action)) {
        action.status = "pendiente_eficacia";
        action.closedAt = "";
        action.efficacyStatus = action.efficacyStatus || "pendiente";
        addMessage("agent", `No cerre la accion "${action.title}" porque falta seguimiento, evidencia o eficacia. La deje como pendiente_eficacia.`);
        recordAuditEvent({
          title: "Cierre de accion bloqueado",
          detail: `${action.title}: ${actionClosureMessage(action)}`,
          code: action.code,
          type: "accion_gestion",
          actor: "agente"
        });
        saveState();
        renderAll();
        return;
      }
      action.status = closing ? "cerrada" : "abierta";
      action.closedAt = closing ? today() : "";
      if (closing) action.efficacyStatus = "eficaz";
      recordAuditEvent({
        title: closing ? "Accion cerrada" : "Accion reabierta",
        detail: `${action.title} cambio a estado ${action.status}.`,
        code: action.code,
        type: "accion_gestion",
        actor: "humano"
      });
      saveState();
      renderAll();
    });
  });
}

function buildSystemAlerts() {
  const alerts = [];
  const openActions = state.actions.filter((item) => item.status !== "cerrada");
  if (openActions.length) {
    alerts.push({
      title: "Acciones abiertas sin cierre",
      detail: `${openActions.length} accion(es) requieren seguimiento o cierre.`,
      code: "10.1",
      severity: openActions.length > 5 ? "alta" : "media",
      origin: "acciones",
      actionTitle: "Priorizar y cerrar acciones abiertas"
    });
  }
  state.policies.forEach((policy) => {
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
  state.equipment.forEach((equipment) => {
    const due = dueSeverity(equipment.nextCheck, 15);
    if (equipment.status === "operativo" && due.severity === "baja") return;
    alerts.push({
      title: due.days !== null && due.days < 0 ? "Revision de equipo vencida" : "Equipo requiere control",
      detail: `${equipment.name} esta ${equipment.status} y su proxima revision es ${equipment.nextCheck}. ${due.label}.`,
      code: "7.1",
      severity: equipment.status !== "operativo" || due.severity === "alta" ? "alta" : "media",
      origin: "equipos",
      actionTitle: `Programar inspeccion o mantenimiento de ${equipment.name}`,
      dueDate: equipment.nextCheck
    });
  });
  state.trainingNeeds.filter((item) => item.status !== "cerrada").forEach((training) => {
    const due = dueSeverity(training.dueDate || training.programmedDate || training.date, 20);
    alerts.push({
      title: "Capacitacion pendiente",
      detail: `${training.topic} sigue ${training.status}. ${due.label}.`,
      code: training.code || "7.2",
      severity: training.priority === "alta" || training.priority === "critica" || due.severity === "alta" ? "alta" : "media",
      origin: "capacitacion",
      actionTitle: `Programar y evaluar capacitacion: ${training.topic}`,
      dueDate: training.dueDate || training.programmedDate || training.date
    });
  });
  state.documents.filter((doc) => doc.status !== "aprobado").forEach((doc) => {
    const due = dueSeverity(doc.reviewDate || doc.dueDate || doc.validUntil, 30);
    alerts.push({
      title: "Documento pendiente de aprobacion",
      detail: `${doc.title} esta ${doc.status}. Revision: ${doc.reviewDate || doc.dueDate || "Por programar"} (${due.label}).`,
      code: doc.code || "7.5",
      severity: due.severity === "alta" ? "alta" : "media",
      origin: "documentos",
      actionTitle: `Revisar y aprobar documento: ${doc.title}`,
      dueDate: doc.reviewDate || doc.dueDate || doc.validUntil
    });
  });
  formCoverageByRequirement().filter((group) => group.pending > 0).slice(0, 5).forEach((group) => {
    alerts.push({
      title: `Formularios pendientes ${group.code}`,
      detail: `${group.pending} de ${group.total} formularios del requisito no tienen borrador.`,
      code: group.code,
      severity: group.pending >= 3 ? "alta" : "media",
      origin: "formularios",
      actionTitle: `Crear borradores de formularios del requisito ${group.code}`
    });
  });
  const formsForApproval = state.formResponses.filter((item) => ["borrador", "revision"].includes(item.status));
  if (formsForApproval.length) {
    alerts.push({
      title: "Formularios sin aprobacion humana",
      detail: `${formsForApproval.length} formulario(s) requieren revision o aprobacion.`,
      code: "7.5",
      severity: "media",
      origin: "aprobacion",
      actionTitle: "Revisar y aprobar formularios pendientes"
    });
  }
  const suggestedEvidence = state.evidence.filter((item) => item.status === "sugerida");
  if (suggestedEvidence.length) {
    alerts.push({
      title: "Evidencias sugeridas sin validar",
      detail: `${suggestedEvidence.length} evidencia(s) deben ser revisadas por un humano.`,
      code: "7.5",
      severity: "media",
      origin: "evidencias",
      actionTitle: "Validar evidencias sugeridas por el agente"
    });
  }
  if (!state.managementReviews.length) {
    alerts.push({
      title: "Revision por direccion pendiente",
      detail: "No existe una revision por direccion preparada para el periodo.",
      code: "9.3",
      severity: "media",
      origin: "revision direccion",
      actionTitle: "Preparar revision por la direccion"
    });
  }
  return alerts;
}

function renderAlerts() {
  const table = document.querySelector("#alertsTable");
  const summary = document.querySelector("#alertsSummary");
  if (!table || !summary) return;
  const alerts = buildSystemAlerts();
  const high = alerts.filter((item) => item.severity === "alta").length;
  const medium = alerts.filter((item) => item.severity === "media").length;
  summary.innerHTML = `
    <div class="report-card"><span>Total alertas</span><strong>${alerts.length}</strong></div>
    <div class="report-card"><span>Alta prioridad</span><strong>${high}</strong></div>
    <div class="report-card"><span>Prioridad media</span><strong>${medium}</strong></div>`;
  table.innerHTML = alerts.length
    ? alerts.map((alert, index) => `
      <div class="simple-row alert-row">
        <div><strong>${alert.title}</strong><div class="muted">${alert.detail}</div></div>
        <span class="badge ${alert.severity === "alta" ? "no_cumple" : "en_proceso"}">${alert.severity}</span>
        <span class="badge requisito">${alert.code}</span>
        <div class="row-actions">
          ${alert.origin === "formularios" ? `<button class="secondary-button" data-alert-forms="${index}" type="button">Borradores</button>` : ""}
          <button class="secondary-button" data-alert-action="${index}" type="button">Crear accion</button>
        </div>
      </div>`).join("")
    : `<div class="muted">No hay alertas activas. El sistema queda bajo vigilancia del agente.</div>`;
  table.querySelectorAll("[data-alert-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const alert = alerts[Number(button.dataset.alertAction)];
      createActionFromAlert(alert);
    });
  });
  table.querySelectorAll("[data-alert-forms]").forEach((button) => {
    button.addEventListener("click", () => {
      const alert = alerts[Number(button.dataset.alertForms)];
      fillRequirementForms(alert.code);
    });
  });
}

function createActionFromAlert(alert) {
  const existing = state.actions.find((action) => action.status !== "cerrada" && action.code === alert.code && action.title === alert.actionTitle);
  if (existing) {
    assignActionDefaults(existing);
    existing.priority = alert.severity === "alta" ? "alta" : existing.priority || "media";
    existing.dueDate = existing.dueDate || alert.dueDate || futureDate(alert.severity === "alta" ? 7 : 15);
    addMessage("agent", `Ya existia la accion: ${existing.title}. La actualice con responsable/fecha si faltaba.`);
    saveState();
    renderAll();
    return existing;
  }
  createAction(alert.actionTitle, alert.code, alert.severity === "alta" ? "preventiva" : "tarea", alert.origin);
  const action = state.actions[0];
  action.priority = alert.severity === "alta" ? "alta" : "media";
  action.cause = alert.detail;
  action.dueDate = alert.dueDate && parseFlexibleDate(alert.dueDate) ? alert.dueDate : futureDate(alert.severity === "alta" ? 7 : 15);
  action.responsible = state.ownerName || "Responsable SGSTA";
  saveState();
  renderAll();
  return action;
}

function createCriticalAlertActions() {
  const alerts = buildSystemAlerts().filter((alert) => alert.severity === "alta");
  alerts.forEach(createActionFromAlert);
  recordAuditEvent({
    title: "Acciones criticas creadas",
    detail: `${alerts.length} alerta(s) de alta prioridad fueron convertidas o actualizadas como acciones preventivas.`,
    type: "alertas",
    actor: "agente"
  });
  addMessage("agent", `Converti ${alerts.length} alerta(s) criticas en acciones preventivas o actualice acciones existentes.`);
  saveState();
  renderAll();
}

function refreshAlerts() {
  const alerts = buildSystemAlerts();
  recordAuditEvent({
    title: "Alertas actualizadas",
    detail: `El agente detecto ${alerts.length} alerta(s), ${alerts.filter((item) => item.severity === "alta").length} de alta prioridad.`,
    type: "alertas",
    actor: "agente"
  });
  addMessage("agent", `Actualice alertas: ${alerts.length} activa(s). Revisa la vista Alertas para convertirlas en acciones.`);
  saveState();
  renderAll();
}

function buildAgendaItems() {
  const items = [];
  state.actions.filter((item) => item.status !== "cerrada").forEach((action) => {
    items.push({
      title: action.title,
      detail: `Accion ${action.type || "tarea"} abierta. Origen: ${action.origin || "manual"}.`,
      code: action.code,
      date: action.dueDate || action.deadline || action.fechaLimite || action.due || "Por programar",
      priority: action.type === "correctiva" || action.type === "preventiva" ? "alta" : "media",
      origin: "acciones",
      actionTitle: `Programar seguimiento: ${action.title}`
    });
  });
  state.equipment.forEach((equipment) => {
    const due = dueSeverity(equipment.nextCheck, 15);
    if (due.severity !== "baja" || equipment.status !== "operativo") {
      items.push({
        title: `Revision de equipo: ${equipment.name}`,
        detail: `${equipment.type} - estado ${equipment.status}. ${due.label}.`,
        code: "7.1",
        date: equipment.nextCheck || "Por programar",
        priority: equipment.status !== "operativo" || due.severity === "alta" ? "alta" : "media",
        origin: "equipos",
        actionTitle: `Programar revision de ${equipment.name}`
      });
    }
  });
  state.policies.forEach((policy) => {
    const due = dueSeverity(policy.due, 30);
    if (policy.status === "vigente" && due.severity === "baja") return;
    items.push({
      title: `Validar poliza ${policy.number}`,
      detail: `${policy.insurer} - ${policy.coverage}. ${due.label}.`,
      code: "6.1.3",
      date: policy.due || "Por definir",
      priority: policy.status !== "vigente" || due.severity === "alta" ? "alta" : "media",
      origin: "seguros",
      actionTitle: `Definir vigencia y cobertura de ${policy.number}`
    });
  });
  state.trainingNeeds.filter((item) => item.status !== "cerrada").forEach((training) => {
    const date = training.dueDate || training.programmedDate || training.date || "Por programar";
    items.push({
      title: `Capacitacion: ${training.topic}`,
      detail: `Prioridad ${training.priority}. Origen: ${training.origin}.`,
      code: training.code || "7.2",
      date,
      priority: training.priority === "alta" || training.priority === "critica" ? "alta" : "media",
      origin: "capacitacion",
      actionTitle: `Agendar capacitacion: ${training.topic}`
    });
  });
  state.audits.forEach((audit) => {
    items.push({
      title: audit.title,
      detail: audit.scope,
      code: "9.2",
      date: audit.date,
      priority: "media",
      origin: "auditoria",
      actionTitle: "Preparar ejecucion de auditoria interna"
    });
  });
  if (!state.managementReviews.length) {
    items.push({
      title: "Preparar revision por la direccion",
      detail: "Debe consolidar entradas, decisiones, recursos y oportunidades.",
      code: "9.3",
      date: "Por programar",
      priority: "media",
      origin: "revision direccion",
      actionTitle: "Agendar revision por la direccion"
    });
  }
  const unapprovedForms = state.formResponses.filter((form) => ["borrador", "revision"].includes(form.status));
  if (unapprovedForms.length) {
    items.push({
      title: "Aprobar formularios pendientes",
      detail: `${unapprovedForms.length} formulario(s) necesitan revision/aprobacion humana.`,
      code: "7.5",
      date: "Por programar",
      priority: "media",
      origin: "formularios",
      actionTitle: "Agendar revision de formularios"
    });
  }
  return items.sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority));
}

function priorityWeight(priority) {
  return { critica: 4, alta: 3, media: 2, baja: 1 }[priority] || 1;
}

function renderAgenda() {
  const table = document.querySelector("#agendaTable");
  const summary = document.querySelector("#agendaSummary");
  if (!table || !summary) return;
  const items = buildAgendaItems();
  const high = items.filter((item) => item.priority === "alta" || item.priority === "critica").length;
  const unscheduled = items.filter((item) => String(item.date).toLowerCase().includes("por")).length;
  summary.innerHTML = `
    <div class="report-card"><span>Total pendientes</span><strong>${items.length}</strong></div>
    <div class="report-card"><span>Alta prioridad</span><strong>${high}</strong></div>
    <div class="report-card"><span>Sin fecha</span><strong>${unscheduled}</strong></div>`;
  table.innerHTML = items.length
    ? items.map((item, index) => `
      <div class="simple-row agenda-row">
        <div><strong>${item.title}</strong><div class="muted">${item.detail}</div></div>
        <span class="badge ${item.priority === "alta" ? "no_cumple" : "en_proceso"}">${item.priority}</span>
        <span class="badge requisito">${item.code}</span>
        <div><strong>${item.date}</strong><div class="muted">${item.origin}</div></div>
        <button class="secondary-button" data-agenda-action="${index}" type="button">Crear accion</button>
      </div>`).join("")
    : `<div class="muted">No hay pendientes en agenda.</div>`;
  table.querySelectorAll("[data-agenda-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items[Number(button.dataset.agendaAction)];
      createAction(item.actionTitle, item.code, item.priority === "alta" ? "preventiva" : "tarea", item.origin);
    });
  });
}

function refreshAgenda() {
  const items = buildAgendaItems();
  recordAuditEvent({
    title: "Agenda actualizada",
    detail: `El agente organizo ${items.length} pendiente(s), ${items.filter((item) => item.priority === "alta").length} de alta prioridad.`,
    type: "agenda",
    actor: "agente"
  });
  addMessage("agent", `Agenda actualizada: ${items.length} pendiente(s) ordenados por prioridad.`);
  saveState();
  renderAll();
}

function renderEvidence() {
  const container = document.querySelector("#evidenceTable");
  const summary = document.querySelector("#evidenceSummary");
  const packages = document.querySelector("#evidencePackages");
  if (summary) renderEvidenceSummary(summary);
  if (packages) renderEvidencePackages(packages);
  container.innerHTML = state.evidence.length
    ? state.evidence.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.title}</strong><div class="muted">Requisito ${item.code} - Origen: ${item.source || "manual"} ${item.linkedDocument ? "- Documento vinculado" : ""}</div></div>
        <span class="badge ${item.status === "sugerida" ? "en_proceso" : "cumple"}">${item.status || "registrada"}</span>
        <button class="secondary-button" data-remove="evidence:${index}" type="button">Quitar</button>
      </div>`).join("")
    : `<div class="muted">Todavia no hay evidencias. Puedes registrar ejemplos para probar el flujo.</div>`;
  bindRemoveButtons(container);
}

function evidencePackageForRequirement(req) {
  const stats = requirementEvidenceStats(req.code);
  const forms = visibleCatalogForms(window.formCatalog || [])
    .filter((form) => getFormRequirement(form).code === req.code)
    .map((form) => {
      const response = state.formResponses.find((item) => item.table === form.table || item.form === form.title);
      return { title: form.title, status: normalizedFormStatus(response?.status), activity: response?.activity || "" };
    });
  const activityForms = activityScopedFormsForRequirement(req.code).map((response) => ({
    title: response.form || response.table,
    status: normalizedFormStatus(response.status),
    activity: response.activity || ""
  }));
  const evidences = state.evidence.filter((item) => item.code === req.code);
  const documents = state.documents.filter((doc) => doc.code === req.code);
  const actions = state.actions.filter((action) => action.code === req.code && action.status !== "cerrada");
  const score = Math.round(requirementCompletionScore(req.code) * 100);
  const status = requirementCompletionStatus(req.code);
  const missing = [];
  if (!stats.registeredEvidence) missing.push("evidencia real");
  if (stats.formsPending) missing.push("formularios");
  if (stats.activityFormsTotal && stats.activityFormsApproved < activityFormTargetForRequirement(stats)) missing.push("formularios por actividad");
  if (actions.length) missing.push("acciones abiertas");
  return { req, stats, forms, activityForms, evidences, documents, actions, score, status, missing };
}

function renderEvidenceSummary(container) {
  const packages = requirements.map(evidencePackageForRequirement);
  const complete = packages.filter((item) => item.score >= 100).length;
  const partial = packages.filter((item) => item.score > 0 && item.score < 100).length;
  const suggested = state.evidence.filter((item) => item.status === "sugerida").length;
  const real = state.evidence.filter((item) => item.status !== "sugerida").length;
  const activityDrafts = state.formResponses.filter((item) => item.activity && ["borrador", "revision"].includes(normalizedFormStatus(item.status))).length;
  container.innerHTML = `
    <div class="report-card"><span>Requisitos completos</span><strong>${complete}</strong></div>
    <div class="report-card"><span>Parciales</span><strong>${partial}</strong></div>
    <div class="report-card"><span>Evidencias reales</span><strong>${real}</strong></div>
    <div class="report-card"><span>Sugeridas</span><strong>${suggested}</strong></div>
    <div class="report-card"><span>Borradores actividad</span><strong>${activityDrafts}</strong></div>`;
}

function renderEvidencePackages(container) {
  const packages = requirements
    .map(evidencePackageForRequirement)
    .sort((a, b) => a.score - b.score || b.actions.length - a.actions.length)
    .slice(0, 6);
  container.innerHTML = `
    <div class="evidence-package-head">
      <div>
        <p class="eyebrow">Paquetes de evidencia</p>
        <h3>Requisitos que mas necesitan soporte</h3>
      </div>
      <span class="badge phva">${packages.length}</span>
    </div>
    <div class="evidence-package-grid">
      ${packages.map((item) => `
        <article class="evidence-package-card">
          <div class="evidence-package-title">
            <span class="badge requisito">${item.req.code}</span>
            <span class="badge ${item.status === "cumple" ? "cumple" : item.status === "pendiente" ? "no_cumple" : "en_proceso"}">${item.score}%</span>
          </div>
          <strong>${escapeHtml(item.req.title)}</strong>
          <p>${item.missing.length ? `Falta: ${item.missing.join(", ")}.` : "Paquete sin brechas visibles."}</p>
          <div class="matrix-metrics">
            <span>Formularios ${item.stats.formsApproved}/${item.stats.formsTotal}</span>
            <span>Actividad ${item.stats.activityFormsApproved}/${activityFormTargetForRequirement(item.stats) || item.stats.activityFormsTotal}</span>
            <span>Evidencias ${item.stats.registeredEvidence}</span>
            <span>Acciones ${item.actions.length}</span>
          </div>
          <div class="evidence-linked-list">
            ${evidencePackageLinkedItems(item).map((linked) => `<span>${escapeHtml(linked)}</span>`).join("")}
          </div>
          <div class="row-actions">
            <button class="secondary-button" data-evidence-open="${item.req.code}" type="button">Ver requisito</button>
            <button data-evidence-prepare="${item.req.code}" type="button">Preparar paquete</button>
          </div>
        </article>`).join("")}
    </div>`;
  container.querySelectorAll("[data-evidence-open]").forEach((button) => {
    button.addEventListener("click", () => {
      state.formFilters.search = button.dataset.evidenceOpen;
      showView("diagnostico");
      saveState();
      renderAll();
    });
  });
  container.querySelectorAll("[data-evidence-prepare]").forEach((button) => {
    button.addEventListener("click", () => prepareEvidencePackage(button.dataset.evidencePrepare));
  });
}

function evidencePackageLinkedItems(item) {
  const linked = [];
  item.forms.slice(0, 2).forEach((form) => linked.push(`${form.title}: ${form.status}`));
  item.activityForms.slice(0, 2).forEach((form) => linked.push(`${form.activity}: ${form.status}`));
  item.documents.slice(0, 1).forEach((doc) => linked.push(`Documento: ${doc.status || "borrador"}`));
  item.evidences.slice(0, 1).forEach((evidence) => linked.push(`Evidencia: ${evidence.status || "registrada"}`));
  if (!linked.length) linked.push("Sin soportes enlazados todavia");
  return linked;
}

async function prepareEvidencePackage(code) {
  await closeRequirementGap(code);
  showView("evidencias");
}

function addEvidenceRecord(record) {
  state.evidence.unshift({
    date: today(),
    status: "registrada",
    source: "manual",
    ...record
  });
  state.compliance[record.code] = state.compliance[record.code] === "cumple" ? "cumple" : "en_proceso";
  recordAuditEvent({
    title: "Evidencia registrada",
    detail: `${record.title} fue asociada como ${record.status || "registrada"} desde ${record.source || "manual"}.`,
    code: record.code,
    type: "evidencia",
    actor: record.source?.includes("agente") ? "agente" : "humano"
  });
  saveState();
  renderAll();
}

function convertSelectedDocumentToEvidence() {
  const doc = state.documents[state.selectedDocumentIndex];
  if (!doc) return;
  addEvidenceRecord({
    title: doc.title,
    code: doc.code,
    source: "documento IA",
    linkedDocument: doc.title,
    status: doc.status === "aprobado" ? "registrada" : "sugerida"
  });
  addMessage("agent", `Asocie "${doc.title}" como evidencia del requisito ${doc.code}. Si el documento no esta aprobado, queda como evidencia sugerida.`);
}

function suggestNextEvidence() {
  const missing = requirements.find((req) => !state.evidence.some((evidence) => evidence.code === req.code)) || requirements[0];
  addEvidenceRecord({
    title: missing.evidence,
    code: missing.code,
    source: "sugerencia agente",
    status: "sugerida"
  });
  addMessage("agent", `Sugeri evidencia para ${missing.code}: ${missing.evidence}. Puedes reemplazarla luego por documento, archivo o enlace real.`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindRemoveButtons(container) {
  container.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const [collection, rawIndex] = button.dataset.remove.split(":");
      state[collection].splice(Number(rawIndex), 1);
      saveState();
      renderAll();
    });
  });
}

function addMessage(role, text) {
  const log = document.querySelector("#chatLog");
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function createAction(title, code, type = "tarea", origin = "agente") {
  state.actions.unshift({
    title,
    code,
    status: "abierta",
    type,
    origin,
    priority: type === "correctiva" || type === "preventiva" ? "alta" : "media",
    responsible: "",
    dueDate: "",
    cause: "",
    immediateCorrection: "",
    followUp: "",
    efficacyVerification: "",
    efficacyStatus: "pendiente",
    createdAt: today()
  });
  recordAuditEvent({
    title: "Accion creada",
    detail: `${title}. Origen: ${origin}.`,
    code,
    type: `accion_${type}`,
    actor: origin === "manual" ? "humano" : "agente"
  });
  saveState();
  renderAll();
}

function buildAgentFindings() {
  const findings = [];
  state.activities.forEach((activity) => {
    const name = activity.name || activity.activity;
    if (!name) return;
    const hasRisk = state.risks.some((item) => item.activity === name);
    const hasEquipment = state.equipment.some((item) => item.activity === name);
    const hasGuide = state.people.some((item) => item.activity === name || String(item.role || "").toLowerCase().includes(String(name).toLowerCase()));
    const hasParticipants = state.participantEvidence.some((item) => item.activity === name);
    if (!hasRisk || !hasEquipment || !hasGuide || !hasParticipants) {
      const missing = [
        !hasRisk ? "riesgos" : "",
        !hasEquipment ? "equipos" : "",
        !hasGuide ? "guias/personal competente" : "",
        !hasParticipants ? "condiciones/evidencias de participantes" : ""
      ].filter(Boolean).join(", ");
      findings.push({
        title: `Actividad sin controles completos: ${name}`,
        detail: `Faltan registros especificos de ${missing}.`,
        priority: "alta",
        code: "8.1",
        actionType: "preventiva",
        origin: "actividad",
        actionTitle: `Completar controles operacionales de ${name}`
      });
    }
  });

  const highRisks = state.risks.filter((risk) => riskLevel(risk) >= 12);
  if (highRisks.length) {
    findings.push({
      title: "Riesgos altos sin cierre preventivo",
      detail: `${highRisks.length} riesgo(s) alto(s) requieren tratamiento y verificacion.`,
      priority: "alta",
      code: "6.1.2",
      actionType: "preventiva",
      origin: "riesgo",
      actionTitle: "Definir tratamiento para riesgos altos"
    });
  }
  const peoplePending = state.people.filter((person) => person.competence !== "cumple");
  if (peoplePending.length) {
    findings.push({
      title: "Personal con competencia pendiente",
      detail: `${peoplePending.length} persona(s) requieren evaluacion, capacitacion o certificado.`,
      priority: "alta",
      code: "7.2",
      actionType: "preventiva",
      origin: "competencia",
      actionTitle: "Cerrar brechas de competencia del personal"
    });
  }
  const trainingOpen = state.trainingNeeds.filter((item) => item.status !== "cerrada");
  if (trainingOpen.length) {
    findings.push({
      title: "Necesidades de capacitacion abiertas",
      detail: `${trainingOpen.length} necesidad(es) deben programarse, ejecutarse y evaluarse.`,
      priority: "media",
      code: "7.3",
      actionType: "tarea",
      origin: "capacitacion",
      actionTitle: "Programar y evaluar capacitaciones pendientes"
    });
  }
  const equipmentPending = state.equipment.filter((item) => item.status !== "operativo" || item.nextCheck === "Por programar");
  if (equipmentPending.length) {
    findings.push({
      title: "Equipos sin control operacional completo",
      detail: `${equipmentPending.length} equipo(s) requieren inspeccion, mantenimiento o fecha de revision.`,
      priority: "alta",
      code: "8.1",
      actionType: "preventiva",
      origin: "equipo",
      actionTitle: "Completar inspeccion y mantenimiento de equipos"
    });
  }
  const policiesPending = state.policies.filter((item) => item.status !== "vigente");
  if (policiesPending.length) {
    findings.push({
      title: "Polizas pendientes o por vencer",
      detail: `${policiesPending.length} poliza(s) deben validarse por actividad.`,
      priority: "alta",
      code: "6.1.3",
      actionType: "preventiva",
      origin: "seguro",
      actionTitle: "Validar polizas y coberturas por actividad"
    });
  }
  const participantPending = state.participantEvidence.filter((item) => item.status !== "recibida");
  if (participantPending.length) {
    findings.push({
      title: "Evidencias externas de participantes pendientes",
      detail: `${participantPending.length} evidencia(s) o consentimiento(s) externos faltan por recibir.`,
      priority: "media",
      code: "7.4.3",
      actionType: "tarea",
      origin: "participantes",
      actionTitle: "Recibir evidencia externa de participantes"
    });
  }
  const drafts = state.documents.filter((doc) => doc.status !== "aprobado");
  if (drafts.length) {
    findings.push({
      title: "Documentos sin aprobacion",
      detail: `${drafts.length} documento(s) siguen en borrador o revision.`,
      priority: "media",
      code: "7.5",
      actionType: "tarea",
      origin: "documento vencido",
      actionTitle: "Revisar y aprobar documentos controlados"
    });
  }
  formCoverageByRequirement()
    .filter((group) => group.pending > 0)
    .slice(0, 6)
    .forEach((group) => {
      findings.push({
        title: `Formularios pendientes del requisito ${group.code}`,
        detail: `${group.pending} de ${group.total} formulario(s) no tienen borrador. PHVA: ${group.phva}.`,
        priority: group.pending >= 3 ? "alta" : "media",
        code: group.code,
        actionType: "tarea",
        origin: "formularios",
        actionTitle: `Completar formularios pendientes del requisito ${group.code}`
      });
    });
  if (!state.managementReviews.length) {
    findings.push({
      title: "Revision por la direccion no preparada",
      detail: "Falta consolidar entradas de 9.3: acciones, auditorias, incidentes, capacitaciones y oportunidades.",
      priority: "media",
      code: "9.3",
      actionType: "mejora",
      origin: "revision direccion",
      actionTitle: "Preparar revision por la direccion"
    });
  } else {
    const decisions = managementReviewOperationalDecisions().filter((decision) => decision.priority !== "baja");
    if (decisions.length) {
      const high = decisions.filter((decision) => decision.priority === "alta").length;
      findings.push({
        title: "Decisiones de direccion pendientes",
        detail: `${decisions.length} decision(es) operativas siguen abiertas para direccion; ${high} de alta prioridad.`,
        priority: high ? "alta" : "media",
        code: "9.3",
        actionType: "mejora",
        origin: "revision direccion",
        actionTitle: "Actualizar revision por direccion y convertir decisiones en acciones"
      });
    }
  }
  return findings;
}

async function runAgentMonitor() {
  if (!canRunAgent()) return;
  if (backendOnline) {
    try {
      updateBackendStatus("Backend conectado: ejecutando monitor", true);
      const response = await fetch(`${apiBaseUrl}/api/agent/monitor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appStateToApiState())
      });
      if (!response.ok) throw new Error("No se pudo ejecutar el monitor");
      const result = await response.json();
      state = mergeState(clone(defaultState), apiStateToAppState(result.state));
      persistLocalState();
      updateBackendStatus("Backend conectado: monitor guardado", true);
      addMessage("agent", `Ejecute el monitor en backend: encontre ${state.agentFindings.length} brecha(s) priorizadas y quedaron guardadas.`);
      renderAll();
      return;
    } catch {
      backendOnline = false;
      updateBackendStatus("Modo local: monitor sin backend", false);
    }
  }
  state.planUsage.agentRuns += 1;
  state.agentFindings = buildAgentFindings();
  addMessage("agent", `Ejecute el monitor local: encontre ${state.agentFindings.length} brecha(s) priorizadas. Puedes revisarlas en Monitor agente y convertirlas en acciones.`);
  saveState();
  renderAll();
}

function agentReply(text) {
  const lower = text.toLowerCase();
  const found = requirements.find((item) => lower.includes(item.code.toLowerCase()) || lower.includes(item.title.toLowerCase().split(" ")[0]));
  if (found) {
    const status = state.compliance[found.code] || "pendiente";
    const coverage = formCoverageByRequirement().find((group) => group.code === found.code);
    const formText = coverage ? ` Tiene ${coverage.total} formulario(s) asociados: ${coverage.pending} pendientes, ${coverage.draft} en borrador/revision y ${coverage.complete} aprobados.` : "";
    return `Para el requisito ${found.code} (${found.title}), el estado actual es "${labelStatus(status)}". La evidencia esperada es: ${found.evidence}.${formText}`;
  }
  if (lower.includes("formulario") || lower.includes("formato") || lower.includes("registro")) {
    const groups = formCoverageByRequirement();
    const pending = groups.filter((group) => group.pending > 0);
    const totalForms = groups.reduce((sum, group) => sum + group.total, 0);
    const totalPending = groups.reduce((sum, group) => sum + group.pending, 0);
    const next = pending[0];
    return next
      ? `Hay ${totalForms} formularios mapeados y ${totalPending} pendientes. El siguiente requisito con brecha es ${next.code}: faltan ${next.pending} de ${next.total}.`
      : `Hay ${totalForms} formularios mapeados y todos tienen al menos borrador. El siguiente paso es revisar completitud y evidencia.`;
  }
  if (lower.includes("riesgo")) {
    const high = state.risks.filter((risk) => riskLevel(risk) >= 12);
    return `Tienes ${state.risks.length} riesgos registrados y ${high.length} en nivel alto. Para ISO 21101 conviene que cada actividad tenga peligros, controles, responsable y seguimiento.`;
  }
  if (lower.includes("personal") || lower.includes("guia") || lower.includes("competencia")) {
    const pending = state.people.filter((person) => person.competence !== "cumple");
    return `Tienes ${state.people.length} personas registradas y ${pending.length} con competencia pendiente. Para ISO 21101 el agente debe verificar cargo, competencia minima, capacitacion, experiencia, conciencia y evidencias.`;
  }
  if (lower.includes("capacitacion") || lower.includes("capacitar") || lower.includes("certificado")) {
    const open = state.trainingNeeds.filter((item) => item.status !== "cerrada");
    return `Tienes ${open.length} necesidades de capacitacion abiertas. El agente debe cruzar cargo, actividad, riesgo, competencia minima, asistencia, evaluacion y certificado vigente.`;
  }
  if (lower.includes("equipo") || lower.includes("recurso") || lower.includes("mantenimiento")) {
    const revision = state.equipment.filter((item) => item.status !== "operativo");
    return `Tienes ${state.equipment.length} equipos registrados y ${revision.length} en revision. El agente debe controlar inventario, estado, inspecciones, mantenimientos, responsable y evidencia.`;
  }
  if (lower.includes("seguro") || lower.includes("poliza")) {
    const pending = state.policies.filter((item) => item.status !== "vigente");
    return `Tienes ${state.policies.length} polizas registradas y ${pending.length} pendientes o por vencer. En el MVP se controlan por empresa y actividad, no por cliente individual.`;
  }
  if (lower.includes("participante") || lower.includes("cliente")) {
    const pending = state.participantEvidence.filter((item) => item.status !== "recibida");
    return `Tienes ${state.participantEvidence.length} evidencias externas de participantes y ${pending.length} pendientes. El MVP evita guardar datos sensibles y solo enlaza formularios o soportes externos.`;
  }
  if (lower.includes("revision") || lower.includes("direccion")) {
    return `La revision por la direccion debe resumir acciones previas, cambios de contexto, auditorias, incidentes, mediciones, capacitaciones, competencias, recursos y oportunidades. El agente prepara el borrador; la direccion aprueba.`;
  }
  if (lower.includes("phva")) {
    return "El modelo PHVA queda asi: Planear cubre 4, 5 y 6; Hacer cubre 7 y 8; Verificar cubre 9; Actuar cubre 10. Las acciones conectan hallazgos con mejora.";
  }
  if ((lower.includes("actividad") && (lower.includes("brecha") || lower.includes("lista") || lower.includes("operar"))) || lower.includes("brechas por actividad")) {
    return activityGapsAgentSummary();
  }
  if (lower.includes("monitor") || lower.includes("brecha")) {
    const findings = buildAgentFindings();
    return `El monitor encuentra ${findings.length} brechas potenciales. Ahora tambien revisa formularios pendientes por requisito, ademas de riesgos altos, competencia, equipos, seguros, documentos y revision por la direccion.`;
  }
  if (lower.includes("suscripcion") || lower.includes("vender") || lower.includes("plan")) {
    return "La suscripcion debe vender gestion asistida, no formatos: Basico para iniciar, Profesional para operar, Consultor para multiples clientes y Empresarial para multi-norma.";
  }
  if (lower.includes("document")) {
    const drafts = state.documents.filter((doc) => doc.status !== "aprobado");
    const generated = state.documents.filter((doc) => doc.content).length;
    return `Tienes ${state.documents.length} documentos, ${generated} con borrador IA y ${drafts.length} sin aprobar. Puedo generar alcance, politica, procedimiento operacional, plan de emergencias y resumen para revision por direccion.`;
  }
  if (lower.includes("evidencia")) {
    const suggested = state.evidence.filter((item) => item.status === "sugerida").length;
    return `Tienes ${state.evidence.length} evidencias y ${suggested} sugeridas pendientes de soporte real o aprobacion. El flujo ideal es requisito -> documento/formulario -> evidencia -> accion si falta algo.`;
  }
  if (lower.includes("incidente")) {
    return `Hay ${state.incidents.length} incidentes registrados. Cada incidente debe tener descripcion, respuesta, causa probable, accion correctiva y evidencia.`;
  }
  if (lower.includes("auditoria")) {
    return `Hay ${state.audits.length} auditorias programadas. La auditoria interna debe revisar requisitos, evidencias, hallazgos y acciones.`;
  }
  if (lower.includes("falta") || lower.includes("pendiente") || lower.includes("diagnostico")) {
    const pending = requirements.filter((item) => (state.compliance[item.code] || "pendiente") === "pendiente").slice(0, 5);
    return `Veo estos primeros pendientes: ${pending.map((item) => `${item.code} ${item.title}`).join("; ")}. Yo empezaria por alcance, politica, actividades y mapa de riesgos.`;
  }
  return "Puedo ayudarte con diagnostico ISO 21101, actividades, riesgos, documentos, incidentes, auditorias, evidencias y acciones.";
}

function addActivity() {
  const count = state.activities.length + 1;
  state.activities.unshift({
    name: `Actividad ${count}`,
    place: "Lugar por definir",
    leader: state.ownerName,
    status: "activa",
    conditions: "Condiciones operacionales por definir.",
    participantRequirements: "Condiciones de participacion por definir."
  });
  state.compliance["8.1"] = state.compliance["8.1"] || "en_proceso";
  saveState();
  renderAll();
}

function addPerson() {
  const count = state.people.length + 1;
  const activity = primaryActivityName();
  state.people.unshift({ name: `Persona ${count}`, role: `Guia ${activity}`, activity, competence: "pendiente", training: "Competencia especifica por verificar" });
  state.compliance["7.2"] = "en_proceso";
  createAction("Verificar competencia y evidencias del personal", "7.2", "preventiva", "competencia");
}

function addTrainingNeed() {
  const person = state.people[0]?.name || "Personal por definir";
  const activity = state.people[0]?.activity || primaryActivityName();
  state.trainingNeeds.unshift({ topic: `Capacitacion pendiente para ${person}`, activity, origin: "competencia", priority: "alta", status: "pendiente", code: "7.2" });
  state.compliance["7.2"] = "en_proceso";
  state.compliance["7.3"] = "en_proceso";
  createAction("Programar capacitacion y evaluar competencia", "7.2", "preventiva", "capacitacion vencida");
}

function addEquipment() {
  const count = state.equipment.length + 1;
  state.equipment.unshift({ name: `Equipo ${count}`, type: "Operacion", activity: primaryActivityName(), status: "revision", nextCheck: "Por programar", inspectionDate: "", maintenanceDate: "", evidence: "" });
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  createAction("Programar inspeccion y mantenimiento de equipo", "7.1", "preventiva", "equipo vencido");
}

function addPolicy() {
  const activity = primaryActivityName();
  const count = state.policies.length + 1;
  state.policies.unshift({ number: `POL-${String(count).padStart(3, "0")}`, insurer: "Aseguradora por definir", coverage: "Cobertura por definir", activity, due: "Por definir", status: "pendiente", document: "" });
  state.compliance["6.1.3"] = "en_proceso";
  createAction("Validar cobertura y vigencia de poliza", "6.1.3", "preventiva", "seguro");
}

function addParticipantEvidence() {
  const activity = primaryActivityName();
  state.participantEvidence.unshift({
    activity,
    phase: "antes",
    kind: "Formulario externo de condiciones, riesgos y consentimiento",
    consent: "pendiente",
    status: "pendiente",
    date: "",
    link: "",
    evidence: "",
    infoProvided: "Descripcion de actividad, requisitos de participacion, riesgos, equipo requerido, seguro y conducta esperada.",
    participantInfoRequested: "Confirmacion de lectura, consentimiento y datos minimos en formulario externo.",
    communicationNotes: "No guardar datos sensibles en la plataforma; conservar solo enlace o evidencia externa."
  });
  state.compliance["7.4.3"] = "en_proceso";
  createAction("Verificar evidencia externa y consentimiento de participantes", "7.4.3", "tarea", "participantes");
}

function addRisk() {
  const activity = primaryActivityName();
  state.risks.unshift({ title: "Riesgo por evaluar", activity, probability: 3, impact: 3, control: "Control por definir" });
  state.compliance["6.1.2"] = "en_proceso";
  createAction("Completar tratamiento del nuevo riesgo", "6.1.2", "preventiva", "riesgo");
}

function addDocument() {
  const missing = requirements.find((req) => !state.documents.some((doc) => doc.code === req.code)) || requirements[0];
  state.documents.unshift({ title: missing.evidence, code: missing.code, status: "borrador", content: "" });
  state.selectedDocumentIndex = 0;
  saveState();
  renderAll();
}

function documentDraftTemplates() {
  const org = state.company.legalName || state.orgName;
  const scope = state.company.scope || "Alcance pendiente de definir.";
  const stakeholders = state.company.stakeholders || "Partes interesadas pendientes de definir.";
  const location = [state.company.city, state.company.region, state.company.country].filter(Boolean).join(", ") || state.company.operatingArea || "Ubicacion por definir";
  const profile = state.company.profileSummary || buildCompanyImplementationProfile();
  const activity = state.activities[0]?.name || "Actividad por definir";
  const activityLines = state.activities.map((item) => `- ${item.name}: ${item.place || "lugar por definir"}. Lider: ${item.leader || "por definir"}. Condiciones: ${item.conditions || "por definir"}.`).join("\n") || "- Actividades por definir.";
  const riskLines = state.risks.map((item) => `- ${item.activity || "General"}: ${item.title}. Nivel ${riskLevel(item)}. Control: ${item.control || "por definir"}.`).join("\n") || "- Riesgos por identificar.";
  const equipmentLines = state.equipment.map((item) => `- ${item.activity || "General"}: ${item.name} (${item.type || "equipo"}), estado ${item.status || "por definir"}, proxima revision ${item.nextCheck || "por programar"}.`).join("\n") || "- Equipos por inventariar.";
  const trainingLines = state.trainingNeeds.map((item) => `- ${item.activity || "General"}: ${item.topic}. Prioridad ${item.priority || "media"}, estado ${item.status || "pendiente"}.`).join("\n") || "- Capacitaciones por definir.";
  const policyLines = state.policies.map((item) => `- ${item.activity || "General"}: ${item.number || "poliza por definir"} - ${item.coverage || "cobertura por definir"} (${item.status || "pendiente"}).`).join("\n") || "- Polizas por validar.";
  const participantLines = state.activities.map((item) => `- ${item.name}: ${item.participantRequirements || "condiciones de participacion por definir"}.`).join("\n") || "- Condiciones de participantes por definir.";
  const emergencyScenarios = state.risks.filter((risk) => riskLevel(risk) >= 9).map((risk) => `- ${risk.activity || "General"}: ${risk.title}. Control base: ${risk.control || "por definir"}.`).join("\n") || "- Lesion, perdida de comunicacion, cambio climatico, falla de equipo o incidente durante la actividad.";
  return [
    {
      title: "Alcance del SGSTA",
      code: "4.3",
      content: `ALCANCE DEL SGSTA\n\nOrganizacion: ${org}\nUbicacion/zona de operacion: ${location}\n\nEl Sistema de Gestion de Seguridad de Turismo de Aventura aplica a:\n${scope}\n\nActividades incluidas:\n${activityLines}\n\nPartes interesadas consideradas:\n${stakeholders}\n\nContexto local considerado:\n${state.company.localContext || "Pendiente de documentar por la organizacion."}\n\nLimites del sistema:\n- Actividades ofertadas y controladas por la organizacion.\n- Personal, guias, proveedores, equipos, seguros, procedimientos, emergencias, participantes y evidencias relacionadas.\n- No reemplaza permisos legales, seguros ni aprobaciones humanas requeridas.\n\nEste borrador debe ser revisado y aprobado por la direccion.`
    },
    {
      title: "Politica de seguridad",
      code: "5.2",
      content: `POLITICA DE SEGURIDAD\n\n${org} se compromete a planificar, operar y mejorar sus actividades de turismo de aventura en ${location}, bajo criterios de seguridad, prevencion de incidentes, cumplimiento de requisitos aplicables y mejora continua.\n\nActividades cubiertas por esta politica:\n${activityLines}\n\nLa organizacion se compromete a:\n- Identificar y tratar riesgos por actividad.\n- Mantener personal competente, capacitado y consciente de sus responsabilidades.\n- Conservar equipos operativos, inspeccionados y mantenidos.\n- Validar seguros y condiciones antes de ofertar u operar actividades.\n- Comunicar informacion clara de seguridad a participantes antes, durante y despues de la actividad.\n- Investigar incidentes y ejecutar acciones correctivas, preventivas y de mejora.\n- Revisar el desempeno del SGSTA con informacion real y decisiones de direccion.\n\nEste documento es un borrador generado por el agente y requiere aprobacion formal.`
    },
    {
      title: "Procedimiento operacional de servicio",
      code: "8.1",
      content: `PROCEDIMIENTO OPERACIONAL\n\nOrganizacion: ${org}\nActividad base: ${activity}\n\nObjetivo:\nEstablecer controles para planificar, ofertar y ejecutar actividades de turismo de aventura de forma segura y trazable.\n\nActividades y condiciones:\n${activityLines}\n\nControles minimos antes de operar:\n- Verificar condiciones del entorno y restricciones locales.\n- Confirmar guia/persona competente asignada.\n- Revisar equipos requeridos y estado operativo.\n- Validar cobertura de seguro para la actividad.\n- Comunicar instrucciones, requisitos y condiciones de participacion.\n- Confirmar evidencia externa/consentimiento sin almacenar datos sensibles en la plataforma.\n\nRiesgos y controles considerados:\n${riskLines}\n\nEquipos asociados:\n${equipmentLines}\n\nCondiciones de participacion:\n${participantLines}\n\nRegistros asociados:\nBitacora de actividad, matriz de riesgos, inspeccion de equipos, evidencia externa de participantes, incidentes, acciones y formularios aprobados.`
    },
    {
      title: "Plan de emergencia",
      code: "8.2",
      content: `PLAN DE EMERGENCIA\n\nOrganizacion: ${org}\nUbicacion/zona: ${location}\nActividad base: ${activity}\n\nEscenarios de emergencia derivados del perfil:\n${emergencyScenarios}\n\nRecursos y equipos disponibles:\n${equipmentLines}\n\nPersonal y capacitacion requerida:\n${trainingLines}\n\nSeguros/coberturas por validar:\n${policyLines}\n\nRequisitos minimos:\n- Definir responsable de respuesta y comunicaciones.\n- Confirmar rutas, puntos de encuentro y medios de contacto.\n- Verificar botiquin/equipos de emergencia antes de operar.\n- Registrar simulacros, incidentes, aprendizajes y acciones de mejora.\n\nEl plan debe probarse mediante simulacros, registrar resultados y generar acciones de mejora cuando se detecten fallas.`
    },
    {
      title: "Resumen para revision por la direccion",
      code: "9.3",
      content: `RESUMEN PARA REVISION POR LA DIRECCION\n\nPeriodo: ${today()}\n\nPerfil usado por el agente:\n${profile}\n\nEntradas preparadas por el agente:\n- Acciones abiertas: ${state.actions.filter((item) => item.status !== "cerrada").length}\n- Riesgos registrados: ${state.risks.length}\n- Incidentes registrados: ${state.incidents.length}\n- Necesidades de capacitacion abiertas: ${state.trainingNeeds.filter((item) => item.status !== "cerrada").length}\n- Equipos en revision: ${state.equipment.filter((item) => item.status !== "operativo").length}\n- Polizas pendientes: ${state.policies.filter((item) => item.status !== "vigente").length}\n\nDecisiones sugeridas:\n${managementReviewOperationalDecisions().map((decision) => `- ${decision.title}: ${decision.detail}`).join("\n")}\n\nSalidas sugeridas:\n- Priorizar cierre de acciones vencidas o criticas.\n- Aprobar recursos para capacitacion, mantenimiento, seguros y evidencias.\n- Definir si alguna actividad no debe ofertarse hasta cerrar brechas criticas.\n- Revisar oportunidades de mejora del SGSTA.\n\nEste borrador debe ser validado por la direccion.`
    }
  ];
}

function generateDocumentDraft(options = {}) {
  const templates = documentDraftTemplates();
  const next = templates.find((template) => !state.documents.some((doc) => doc.title === template.title && doc.content)) || templates[0];
  const existingIndex = state.documents.findIndex((doc) => doc.title === next.title);
  if (existingIndex >= 0) {
    state.documents[existingIndex] = { ...state.documents[existingIndex], ...next, status: "borrador" };
    state.selectedDocumentIndex = existingIndex;
  } else {
    state.documents.unshift({ ...next, status: "borrador" });
    state.selectedDocumentIndex = 0;
  }
  state.compliance[next.code] = "en_proceso";
  if (!options.silent) {
    addMessage("agent", `Genere un borrador de documento: ${next.title}. Queda pendiente de revision y aprobacion humana.`);
    saveState();
    renderAll();
  }
  return next;
}

function addIncident() {
  const activity = state.activities[0]?.name || "Actividad por definir";
  state.incidents.unshift({ title: "Incidente de prueba", activity, date: today(), status: "abierto" });
  state.compliance["8.3"] = "en_proceso";
  createAction("Analizar incidente y definir accion correctiva", "8.3", "correctiva", "incidente");
}

function addAudit() {
  state.audits.unshift({ title: "Auditoria interna SGSTA", scope: "Capitulos 4 a 10", date: today(), status: "programada" });
  state.compliance["9.2"] = "en_proceso";
  createAction("Preparar lista de verificacion de auditoria", "9.2", "tarea", "auditoria");
}

function addManagementReview(options = {}) {
  state.managementReviews.unshift(buildManagementReviewDraft());
  state.compliance["9.3"] = "en_proceso";
  if (options.silent) {
    if (!state.actions.some((action) => action.title === "Aprobar salidas de revision por la direccion" && action.status !== "cerrada")) {
      state.actions.unshift({
        title: "Aprobar salidas de revision por la direccion",
        code: "9.3",
        status: "abierta",
        type: "mejora",
        origin: "revision direccion",
        priority: "media",
        responsible: state.ownerName || "Responsable SGSTA",
        dueDate: "",
        cause: "Revision por la direccion preparada por el agente.",
        immediateCorrection: "",
        followUp: "",
        efficacyVerification: "",
        efficacyStatus: "pendiente",
        createdAt: today()
      });
    }
  } else {
    createAction("Aprobar salidas de revision por la direccion", "9.3", "mejora", "revision direccion");
  }
}

function addFormResponse() {
  const catalog = visibleCatalogForms(window.formCatalog || []);
  const next = catalog.find((form) => !state.formResponses.some((response) => response.table === form.table)) || selectedCatalogForm();
  if (next) fillCatalogForm(next.table);
}

function handleImplementationStep(step) {
  if (!step) return;
  if (step.view) showView(step.view);
  if (step.id === "actividades") addActivity();
  if (step.id === "riesgos") addRisk();
  if (step.id === "seguros") addPolicy();
  if (step.id === "personal") addPerson();
  if (step.id === "capacitacion") addTrainingNeed();
  if (step.id === "equipos") addEquipment();
  if (step.id === "documentos") addDocument();
  if (step.id === "participantes") addParticipantEvidence();
  if (step.id === "auditoria") addAudit();
  if (step.id === "revision") addManagementReview();
  if (step.id === "alcance") createAction(step.action, "4.3", "tarea", "implementacion");
  if (step.id === "mejora") createAction(step.action, "10.1", "mejora", "implementacion");
  addMessage("agent", `Paso PHVA: ${step.title}. Cree o sugeri la accion necesaria para avanzar.`);
  saveState();
  renderAll();
}

function createImplementationWorkPlanActions(options = {}) {
  const pending = implementationSteps.filter((step) => !step.check(state)).slice(0, 6);
  let created = 0;
  pending.forEach((step) => {
    const title = `Plan 30 dias: ${step.action}`;
    if (state.actions.some((action) => action.title === title && action.status !== "cerrada")) return;
    state.actions.unshift({
      title,
      code: step.code.split("/")[0].split("-")[0],
      status: "abierta",
      type: step.stage === "Actuar" ? "mejora" : "tarea",
      origin: "plan 30 dias",
      priority: step.stage === "Planear" || step.stage === "Hacer" ? "alta" : "media",
      responsible: state.ownerName || "Responsable SGSTA",
      dueDate: "",
      cause: step.outcome,
      immediateCorrection: "",
      followUp: "",
      efficacyVerification: "",
      efficacyStatus: "pendiente",
      createdAt: today()
    });
    created += 1;
  });
  recordAuditEvent({
    title: "Plan 30 dias convertido en acciones",
    detail: `El agente creo ${created} accion(es) desde la ruta de implementacion.`,
    code: "4.4",
    type: "implementacion",
    actor: "agente"
  });
  if (!options.silent) {
    addMessage("agent", created ? `Cree ${created} accion(es) desde el plan de 30 dias.` : "El plan de 30 dias ya tenia acciones abiertas para los primeros pendientes.");
    saveState();
    renderAll();
  }
  return created;
}

function runImplementationReview() {
  const progress = implementationProgress();
  const next = nextImplementationStep();
  state.agentFindings = buildAgentFindings();
  addMessage("agent", `Revision de implementacion: ${progress.completed}/${progress.total} pasos completos (${progress.pct}%). Siguiente paso recomendado: ${next.title}.`);
  saveState();
  renderAll();
}

function showView(viewId) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  const activeButton = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  activeButton?.closest(".nav-section")?.classList.remove("collapsed");
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

document.querySelectorAll(".nav-label").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.closest(".nav-section");
    const collapsed = section.classList.toggle("collapsed");
    button.setAttribute("aria-expanded", String(!collapsed));
  });
});

document.querySelector("#orgForm").addEventListener("input", () => {
  state.orgName = document.querySelector("#orgName").value;
  state.ownerName = document.querySelector("#ownerName").value;
  state.currentUserRole = document.querySelector("#currentUserRole").value;
  saveState();
});

document.querySelector("#activeSystem").addEventListener("change", () => {
  activateManagementSystem(document.querySelector("#activeSystem").value);
});

document.querySelector("#currentPlan").addEventListener("change", () => {
  state.currentPlan = document.querySelector("#currentPlan").value;
  recordAuditEvent({
    title: "Plan actualizado",
    detail: `La organizacion selecciono el plan ${subscriptionPlans[state.currentPlan].name}.`,
    type: "suscripcion",
    actor: "humano"
  });
  saveState();
  renderAll();
});

document.querySelector("#companyForm").addEventListener("input", () => {
  state.company.legalName = document.querySelector("#companyLegalName").value;
  state.company.nit = document.querySelector("#companyNit").value;
  state.company.country = document.querySelector("#companyCountry").value;
  state.company.region = document.querySelector("#companyRegion").value;
  state.company.city = document.querySelector("#companyCity").value;
  state.company.phone = document.querySelector("#companyPhone").value;
  state.company.operatingArea = document.querySelector("#companyOperatingArea").value;
  state.company.activityDescription = document.querySelector("#companyActivityDescription").value;
  state.company.localContext = document.querySelector("#companyLocalContext").value;
  state.company.scope = document.querySelector("#companyScope").value;
  state.company.stakeholders = document.querySelector("#companyStakeholders").value;
  state.compliance["4.3"] = state.company.scope ? "en_proceso" : "pendiente";
  state.compliance["4.2"] = state.company.stakeholders ? "en_proceso" : "pendiente";
  saveState();
  renderMetrics();
  renderChapterProgress();
  renderCompanyImplementationProfile();
});

document.querySelector("#generateCompanyProfile").addEventListener("click", generateCompanyImplementationProfile);

document.querySelector("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  addMessage("user", text);
  addMessage("agent", agentReply(text));
  input.value = "";
});

document.querySelectorAll("[data-agent-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.agentAction;
    if (action === "diagnostico") addMessage("agent", "Empecemos por empresa, alcance, actividades, politica y mapa de riesgos. Eso crea la columna vertebral del SGSTA.");
    if (action === "politica") {
      createAction("Redactar y aprobar politica de seguridad", "5.2");
      addMessage("agent", "Cree una accion para redactar y aprobar la politica de seguridad.");
    }
    if (action === "riesgos") {
      addRisk();
      addMessage("agent", "Registre un riesgo inicial y una accion para completar su tratamiento.");
    }
    if (action === "personal") {
      addPerson();
      addMessage("agent", "Agregue una persona pendiente de verificacion y cree una accion de competencia.");
    }
    if (action === "capacitacion") {
      detectTrainingNeeds();
      addMessage("agent", "Revise competencias, actividades y riesgos para detectar necesidades de capacitacion.");
    }
    if (action === "equipos") {
      detectEquipmentGaps();
      addMessage("agent", "Revise equipos, inspecciones, mantenimientos, estados y evidencias.");
    }
    if (action === "seguros") {
      detectPolicyGaps();
      addMessage("agent", "Revise cobertura por actividad, vigencias y documentos soporte.");
    }
    if (action === "participantes") {
      detectParticipantGaps();
      addMessage("agent", "Revise evidencia externa de condiciones y consentimiento por actividad, sin guardar datos sensibles.");
    }
    if (action === "brechas_actividad") {
      if (!canRunAgent()) return;
      state.planUsage.agentRuns += 1;
      addMessage("agent", activityGapsAgentSummary());
      saveState();
      renderAll();
    }
    if (action === "plan_cierre_actividad") {
      if (!canRunAgent()) return;
      state.planUsage.agentRuns += 1;
      createActivityClosurePlan();
      saveState();
      renderAll();
    }
    if (action === "documentos") {
      generateDocumentDraft();
      addMessage("agent", "Genere un borrador documental asociado al sistema.");
    }
    if (action === "auditoria") {
      addAudit();
      addMessage("agent", "Programe una auditoria interna y cree la accion de lista de verificacion.");
    }
    if (action === "revision") {
      addManagementReview();
      addMessage("agent", "Prepare un borrador de revision por la direccion con entradas clave del sistema.");
    }
  });
});

document.querySelector("#addActivity").addEventListener("click", addActivity);
document.querySelector("#addPerson").addEventListener("click", addPerson);
document.querySelector("#addTrainingNeed").addEventListener("click", addTrainingNeed);
document.querySelector("#detectTrainingNeeds").addEventListener("click", detectTrainingNeeds);
document.querySelector("#addEquipment").addEventListener("click", addEquipment);
document.querySelector("#detectEquipmentGaps").addEventListener("click", detectEquipmentGaps);
document.querySelector("#addPolicy").addEventListener("click", addPolicy);
document.querySelector("#detectPolicyGaps").addEventListener("click", detectPolicyGaps);
document.querySelector("#addParticipantEvidence").addEventListener("click", addParticipantEvidence);
document.querySelector("#detectParticipantGaps").addEventListener("click", detectParticipantGaps);
document.querySelector("#addRisk").addEventListener("click", addRisk);
document.querySelector("#addDocument").addEventListener("click", addDocument);
document.querySelector("#generateDocumentDraft").addEventListener("click", generateDocumentDraft);
document.querySelector("#addIncident").addEventListener("click", addIncident);
document.querySelector("#addAudit").addEventListener("click", addAudit);
document.querySelector("#addManagementReview").addEventListener("click", addManagementReview);
document.querySelector("#refreshManagementReview").addEventListener("click", () => refreshManagementReview(0));
document.querySelector("#generateReport").addEventListener("click", () => generateExecutiveReport(true));
document.querySelector("#generateAuditReport").addEventListener("click", generateAuditReport);
document.querySelector("#reportToEvidence").addEventListener("click", convertReportToEvidence);
document.querySelector("#printReport").addEventListener("click", printExecutiveReport);
document.querySelector("#downloadReport").addEventListener("click", downloadExecutiveReport);
document.querySelector("#runImplementationReview").addEventListener("click", runImplementationReview);
document.querySelector("#runAgentMonitor").addEventListener("click", runAgentMonitor);
document.querySelector("#downloadAuditLog").addEventListener("click", downloadAuditLogReport);
document.querySelector("#refreshReviewInbox").addEventListener("click", () => {
  renderReviewInbox();
  addMessage("agent", "Actualice la bandeja de revision humana con los pendientes actuales.");
});
document.querySelector("#closeCriticalGaps").addEventListener("click", closeCriticalGaps);
document.querySelector("#refreshAlerts").addEventListener("click", refreshAlerts);
document.querySelector("#createCriticalAlertActions").addEventListener("click", createCriticalAlertActions);
document.querySelector("#refreshAgenda").addEventListener("click", refreshAgenda);
document.querySelector("#addFormResponse").addEventListener("click", () => {
  addFormResponse();
  saveState();
  renderAll();
});
document.querySelector("#addAction").addEventListener("click", () => createAction("Nueva accion de implementacion", "4.4", "tarea", "manual"));

document.querySelector("#documentToEvidence").addEventListener("click", convertSelectedDocumentToEvidence);
document.querySelector("#printDocument").addEventListener("click", printSelectedDocument);
document.querySelector("#downloadDocument").addEventListener("click", downloadSelectedDocument);
document.querySelector("#suggestEvidence").addEventListener("click", suggestNextEvidence);
document.querySelector("#addEvidence").addEventListener("click", () => {
  const pending = requirements.find((item) => !state.evidence.some((evidence) => evidence.code === item.code)) || requirements[0];
  addEvidenceRecord({ title: pending.evidence, code: pending.code, source: "manual" });
});

document.querySelector("#resetData").addEventListener("click", () => {
  state = clone(defaultState);
  saveState();
  document.querySelector("#chatLog").innerHTML = "";
  addMessage("agent", "Reinicie el prototipo. Podemos empezar el diagnostico otra vez.");
  renderAll();
});

addMessage("agent", "Hola. Soy el agente SGSTA. Ahora puedo ayudarte con PHVA, monitor de brechas, capacitacion, seguros, participantes, acciones y revision por la direccion.");
renderAll();
hydrateFromBackend();

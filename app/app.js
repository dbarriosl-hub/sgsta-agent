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
  { id: "alcance", stage: "Planear", title: "Definir empresa, alcance y partes interesadas", code: "4.1-4.3", check: (s) => Boolean(s.company.scope && s.company.stakeholders), action: "Completar alcance y partes interesadas" },
  { id: "actividades", stage: "Planear", title: "Registrar actividades de turismo", code: "8.1", check: (s) => s.activities.length > 0, action: "Registrar actividades y responsables" },
  { id: "riesgos", stage: "Planear", title: "Construir mapa de riesgos", code: "6.1.2", check: (s) => s.risks.length > 0, action: "Construir o completar mapa de riesgos" },
  { id: "seguros", stage: "Planear", title: "Validar seguros por actividad", code: "6.1.3", check: (s) => s.policies.some((p) => p.status === "vigente"), action: "Validar polizas y cobertura" },
  { id: "personal", stage: "Hacer", title: "Verificar personal y competencias", code: "5.3/7.2", check: (s) => s.people.length > 0 && s.people.every((p) => p.competence === "cumple"), action: "Evaluar competencias del personal" },
  { id: "capacitacion", stage: "Hacer", title: "Programar y cerrar capacitaciones", code: "7.2-7.3", check: (s) => s.trainingNeeds.length > 0 && s.trainingNeeds.every((t) => t.status === "cerrada"), action: "Programar capacitaciones pendientes" },
  { id: "equipos", stage: "Hacer", title: "Controlar equipos, inspecciones y mantenimiento", code: "7.1/8.1", check: (s) => s.equipment.length > 0 && s.equipment.every((e) => e.status === "operativo"), action: "Completar inspeccion de equipos" },
  { id: "documentos", stage: "Hacer", title: "Aprobar documentos controlados", code: "7.5", check: (s) => s.documents.length > 0 && s.documents.every((d) => d.status === "aprobado"), action: "Revisar y aprobar documentos" },
  { id: "participantes", stage: "Hacer", title: "Recibir evidencias externas de participantes", code: "7.4.3", check: (s) => s.participantEvidence.length > 0 && s.participantEvidence.every((p) => p.status === "recibida"), action: "Recibir consentimientos/evidencias externas" },
  { id: "auditoria", stage: "Verificar", title: "Preparar auditoria interna", code: "9.2", check: (s) => s.audits.length > 0, action: "Programar auditoria interna" },
  { id: "revision", stage: "Verificar", title: "Preparar revision por la direccion", code: "9.3", check: (s) => s.managementReviews.length > 0, action: "Preparar revision por la direccion" },
  { id: "mejora", stage: "Actuar", title: "Gestionar acciones correctivas, preventivas y mejora", code: "10.1-10.2", check: (s) => s.actions.length > 0, action: "Crear y dar seguimiento a acciones" }
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
    selectedFormTable: current.selectedFormTable || base.selectedFormTable,
    formFilters: { ...base.formFilters, ...(current.formFilters || {}) },
    formResponses: current.formResponses || base.formResponses,
    actions: current.actions || base.actions,
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
  const registeredEvidence = evidences.filter((item) => item.status !== "sugerida").length;
  const suggestedEvidence = evidences.filter((item) => item.status === "sugerida").length;
  return {
    formsTotal: coverage?.total || 0,
    formsDraft: coverage?.draft || 0,
    formsApproved: coverage?.complete || 0,
    formsPending: coverage?.pending || 0,
    registeredEvidence,
    suggestedEvidence
  };
}

function formEvidenceScore(stats) {
  if (!stats.formsTotal) return 0;
  return Math.min(1, (stats.formsApproved + stats.formsDraft * 0.4) / stats.formsTotal);
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
  renderAgentFindings();
  renderReviewInbox();
  renderAuditLog();
  renderSubscriptionPlans();
  renderForms();
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
  document.querySelector("#nextActions").innerHTML = openActions.length
    ? openActions.map((item) => `<div class="action-card"><strong>${item.title}</strong><div class="muted">Requisito ${item.code}</div></div>`).join("")
    : `<div class="muted">No hay acciones abiertas.</div>`;
}

function renderPhvaBoard() {
  const container = document.querySelector("#phvaBoard");
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

function nextImplementationStep() {
  return implementationSteps.find((step) => !step.check(state)) || implementationSteps[implementationSteps.length - 1];
}

function renderImplementation() {
  const container = document.querySelector("#implementationSteps");
  const progress = implementationProgress();
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
          </div>
          <span class="badge ${status === "completo" ? "cumple" : "pendiente"}">${status}</span>
          <button class="secondary-button" data-step-action="${step.id}" type="button">Accion</button>
        </div>`;
    }).join("")}`;

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
      <p>Requisito relacionado: ${next.code}. El agente recomienda: ${next.action}.</p>
      <button id="guidePrimaryAction" type="button">Crear accion sugerida</button>
    </div>`;
  document.querySelector("#guidePrimaryAction").addEventListener("click", () => handleImplementationStep(next));
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
    participants: related.participants.length > 0,
    insurance: related.policies.some(policyIsComplete),
    training: related.training.length > 0
  };
}

function policyIsComplete(policy) {
  const dueOk = policy.due && !String(policy.due).toLowerCase().includes("por ");
  const coverageOk = policy.coverage && !String(policy.coverage).toLowerCase().includes("por definir");
  const supportOk = policy.document || policy.evidence;
  return policy.status === "vigente" && dueOk && coverageOk && supportOk;
}

function controlBadge(ok, label) {
  return `<span class="badge ${ok ? "cumple" : "no_cumple"}">${label}</span>`;
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

function activityContext(activityName) {
  const activity = state.activities.find((item) => item.name === activityName) || {};
  const related = activityRelatedItems(activityName);
  return {
    activity,
    related,
    risk: related.risks[0] || {},
    person: related.people[0] || {},
    equipment: related.equipment[0] || {},
    policy: related.policies[0] || {}
  };
}

function addRiskForActivity(activityName) {
  state.risks.unshift({ title: `Riesgo por evaluar en ${activityName}`, activity: activityName, probability: 3, impact: 3, control: "Control especifico por definir" });
  state.compliance["6.1.2"] = "en_proceso";
  createAction(`Completar matriz de riesgos de ${activityName}`, "6.1.2", "preventiva", "actividad");
}

function addEquipmentForActivity(activityName) {
  const count = state.equipment.length + 1;
  state.equipment.unshift({ name: `Equipo ${count} para ${activityName}`, type: "Operacion", activity: activityName, status: "revision", nextCheck: "Por programar" });
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
  state.participantEvidence.unshift({ activity: activityName, kind: "Condiciones de participacion y consentimiento", consent: "pendiente", status: "pendiente" });
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
      risk: context.risk
    });
  });
  return values;
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
    existing.values = { ...(existing.values || {}), ...values };
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
    const complete = equipment.status === "operativo" && equipment.nextCheck && !String(equipment.nextCheck).toLowerCase().includes("por ");
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
        <label>Evidencia<input data-equipment-field="${index}:evidence" type="text" value="${escapeHtml(equipment.evidence || "")}"></label>
        <span class="badge ${complete ? "cumple" : "no_cumple"}">${complete ? "listo" : "pendiente"}</span>
        <button class="secondary-button" data-remove="equipment:${index}" type="button">Quitar</button>
      </div>`;
  }).join("");
}

function updateActivityEquipmentField(field) {
  const [rawIndex, key] = field.dataset.equipmentField.split(":");
  const equipment = state.equipment[Number(rawIndex)];
  if (!equipment) return;
  equipment[key] = field.value;
  equipment.updatedAt = today();
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  const incomplete = equipment.status !== "operativo" || !equipment.nextCheck || String(equipment.nextCheck).toLowerCase().includes("por ");
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
  container.innerHTML = `
    <div class="simple-table">
      ${state.activities.map((item, index) => {
      const related = activityRelatedItems(item.name);
      const controls = activityControlStatus(item.name);
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
        <span class="badge cumple">${item.status}</span>
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
        <span class="badge phva">8.1</span>
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

function renderTraining() {
  const container = document.querySelector("#trainingTable");
  container.innerHTML = state.trainingNeeds.length
    ? state.trainingNeeds.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.topic}</strong><div class="muted">Actividad: ${itemActivityName(item)} - Origen: ${item.origin} - Requisito ${item.code}</div></div>
        <span class="badge ${item.priority === "alta" || item.priority === "critica" ? "no_cumple" : "en_proceso"}">${item.priority}</span>
        <button class="secondary-button" data-close-training="${index}" type="button">${item.status === "cerrada" ? "Reabrir" : "Cerrar"}</button>
      </div>`).join("")
    : `<div class="muted">No hay necesidades de capacitacion registradas.</div>`;
  container.querySelectorAll("[data-close-training]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.trainingNeeds[Number(button.dataset.closeTraining)];
      item.status = item.status === "cerrada" ? "pendiente" : "cerrada";
      if (item.status === "cerrada") state.compliance["7.2"] = "en_proceso";
      saveState();
      renderAll();
    });
  });
}

function renderEquipment() {
  const container = document.querySelector("#equipmentTable");
  container.innerHTML = state.equipment.length
    ? state.equipment.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.name}</strong><div class="muted">${item.type} - Actividad: ${itemActivityName(item)} - Proxima revision: ${item.nextCheck}</div></div>
        <span class="badge ${item.status === "operativo" ? "cumple" : "en_proceso"}">${item.status}</span>
        <button class="secondary-button" data-toggle-equipment="${index}" type="button">${item.status === "operativo" ? "Revision" : "Operativo"}</button>
      </div>`).join("")
    : `<div class="muted">No hay equipos registrados.</div>`;
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

function renderPolicies() {
  const container = document.querySelector("#policiesTable");
  container.innerHTML = state.policies.length
    ? state.policies.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.number} - ${item.insurer}</strong><div class="muted">${item.coverage} - Actividad: ${item.activity} - Vence: ${item.due || "Por definir"}</div></div>
        <span class="badge ${policyIsComplete(item) ? "cumple" : "no_cumple"}">${policyIsComplete(item) ? "cubierta" : item.status}</span>
        <button class="secondary-button" data-toggle-policy="${index}" type="button">${item.status === "vigente" ? "Pendiente" : "Vigente"}</button>
      </div>`).join("")
    : `<div class="muted">No hay polizas registradas.</div>`;
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
  container.innerHTML = state.participantEvidence.length
    ? state.participantEvidence.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.activity}</strong><div class="muted">${item.kind} - Consentimiento: ${item.consent}</div></div>
        <span class="badge ${item.status === "recibida" ? "cumple" : "en_proceso"}">${item.status}</span>
        <button class="secondary-button" data-toggle-participant="${index}" type="button">${item.status === "recibida" ? "Pendiente" : "Recibida"}</button>
      </div>`).join("")
    : `<div class="muted">No hay evidencias externas de participantes.</div>`;
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

function renderManagementReviews() {
  const container = document.querySelector("#managementReviewTable");
  container.innerHTML = state.managementReviews.length
    ? state.managementReviews.map((item, index) => `
      <div class="simple-row module-row">
        <div><strong>${item.period}</strong><div class="muted">${item.summary}</div></div>
        <span class="badge ${item.status === "aprobada" ? "cumple" : "en_proceso"}">${item.status}</span>
        <button class="secondary-button" data-toggle-review="${index}" type="button">${item.status === "aprobada" ? "Borrador" : "Aprobar"}</button>
      </div>`).join("")
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
          <p>${row.stats.formsApproved}/${row.stats.formsTotal} aprobados, ${row.stats.formsDraft} borrador(es), ${row.stats.formsPending} pendiente(s)</p>
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
      `Formularios: ${row.stats.formsApproved}/${row.stats.formsTotal} aprobados; ${row.stats.formsDraft} borrador(es); ${row.stats.formsPending} pendiente(s).`,
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
  if (stats.compliance < 70) gaps.push({ code: "4.4", title: "Cumplimiento general bajo", detail: `El sistema esta en ${stats.compliance}%. Priorizar cierre PHVA.`, priority: "alta" });
  if (stats.openActions.length > 5) gaps.push({ code: "10.1", title: "Acciones abiertas acumuladas", detail: `${stats.openActions.length} acciones abiertas requieren priorizacion.`, priority: "media" });
  if (stats.pendingForms > 0) gaps.push({ code: "7.5", title: "Formularios pendientes de diligenciar", detail: `${stats.pendingForms} formularios aun no tienen borrador.`, priority: "media" });
  if (stats.highRisks.length > 0) gaps.push({ code: "6.1.2", title: "Riesgos altos activos", detail: `${stats.highRisks.length} riesgos altos requieren tratamiento y verificacion.`, priority: "alta" });
  if (!state.managementReviews.length) gaps.push({ code: "9.3", title: "Revision por direccion pendiente", detail: "No hay revision por direccion preparada.", priority: "media" });
  return gaps;
}

function generateExecutiveReport(save = true) {
  const stats = reportStats();
  const system = activeSystem();
  const gaps = executiveReportFindings(stats);
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

Lectura PHVA:
- Planear: contexto, liderazgo, riesgos, requisitos legales y objetivos deben mantenerse actualizados.
- Hacer: personal, capacitacion, equipos, participantes, documentos y operacion sostienen la evidencia diaria.
- Verificar: auditorias, indicadores y revision por direccion deben cerrar el ciclo.
- Actuar: acciones correctivas, preventivas y de mejora deben tener seguimiento y eficacia.

Brechas priorizadas:
${gaps.length ? gaps.map((gap) => `- ${gap.code}: ${gap.title}. ${gap.detail}`).join("\n") : "- No se identifican brechas ejecutivas nuevas."}

Recomendacion del agente:
Priorizar formularios y evidencias pendientes, cerrar acciones abiertas de alto impacto y preparar revision por la direccion con datos de auditoria, incidentes, capacitacion, riesgos y oportunidades.

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
  renderFormRequirementCoverage();

  container.innerHTML = visibleForms.length
    ? visibleForms.map((form) => {
      const response = state.formResponses.find((item) => item.table === form.table || item.form === form.title);
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
          <span class="badge ${formStatusBadge(status)}">${status}</span>
          <div class="row-actions">
            <button class="secondary-button" data-view-form="${form.table}" type="button">Ver</button>
            <button class="secondary-button" data-fill-form="${form.table}" type="button">Diligenciar</button>
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
  renderFormPreview();
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
  const response = state.formResponses.find((item) => item.table === form.table);
  const requirement = getFormRequirement(form);
  const relation = getFormMatrixItem(form.table);
  const canApprove = canCurrentUserApprove();
  const fillStats = formFillStats(form, response);
  preview.innerHTML = `
    <div class="document-meta">
      <span class="badge en_proceso">${form.table}</span>
      <span class="badge requisito">${requirement.code}</span>
      <span class="badge phva">${relation?.phva || getPhvaForRequirement(requirement.code)}</span>
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
        <button class="secondary-button" data-fill-requirement="${requirement.code}" type="button">Crear borradores de ${requirement.code}</button>
        <button class="secondary-button" data-filter-requirement="${requirement.code}" type="button">Filtrar este requisito</button>
        ${response ? `<button class="secondary-button" data-form-review="${form.table}" type="button">${response.status === "revision" ? "Volver a borrador" : "Enviar a revision"}</button>` : ""}
        ${response ? `<button class="secondary-button" data-form-approve="${form.table}" type="button" ${canApprove ? "" : "disabled"}>Aprobar humano</button>` : ""}
        ${response ? `<button class="secondary-button" data-form-evidence="${form.table}" type="button">Enviar a evidencias</button>` : ""}
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
    convertFormResponseToEvidence(event.currentTarget.dataset.formEvidence);
  });
  preview.querySelector("[data-form-review]")?.addEventListener("click", async (event) => {
    await setFormReviewStatus(event.currentTarget.dataset.formReview);
  });
  preview.querySelector("[data-form-approve]")?.addEventListener("click", async (event) => {
    await approveFormResponse(event.currentTarget.dataset.formApprove);
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

async function setFormReviewStatus(table) {
  const handledByBackend = await updateFormWorkflowInBackend({ table, status: "revision" });
  if (handledByBackend) return;

  const response = state.formResponses.find((item) => item.table === table);
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

async function approveFormResponse(table) {
  const handledByBackend = await updateFormWorkflowInBackend({ table, status: "aprobado" });
  if (handledByBackend) return;

  const response = state.formResponses.find((item) => item.table === table);
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
      risk
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

function convertFormResponseToEvidence(table) {
  const response = state.formResponses.find((item) => item.table === table);
  if (!response) return;
  const approved = normalizedFormStatus(response.status) === "aprobado";
  addEvidenceRecord({
    title: `Formulario: ${response.form}`,
    code: response.code,
    source: "formulario agente",
    linkedDocument: response.table,
    status: approved ? "registrada" : "sugerida"
  });
  addMessage("agent", `Asocie el formulario "${response.form}" como evidencia del requisito ${response.code}. ${approved ? "Ya cuenta como evidencia registrada." : "Queda sugerida porque falta aprobacion humana."}`);
}

function upsertEvidenceFromApprovedForm(response) {
  const linkedDocument = response.table;
  const existing = state.evidence.find((item) => item.linkedDocument === linkedDocument && item.source === "formulario aprobado");
  const evidence = {
    title: `Formulario aprobado: ${response.form}`,
    code: response.code,
    source: "formulario aprobado",
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
  const packages = items.filter((item) => item.kind === "package").length;
  summary.innerHTML = `
    <div class="report-card"><span>Total pendiente</span><strong>${items.length}</strong></div>
    <div class="report-card"><span>Formularios</span><strong>${forms}</strong></div>
    <div class="report-card"><span>Evidencias</span><strong>${evidence}</strong></div>
    <div class="report-card"><span>Acciones</span><strong>${actions}</strong></div>
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
      showView("formularios");
      renderAll();
    });
  });
  container.querySelectorAll("[data-review-form]").forEach((button) => {
    button.addEventListener("click", async () => {
      const response = state.formResponses[Number(button.dataset.reviewForm)];
      if (response) await setFormReviewStatus(response.table);
    });
  });
  container.querySelectorAll("[data-review-approve-form]").forEach((button) => {
    button.addEventListener("click", async () => {
      const response = state.formResponses[Number(button.dataset.reviewApproveForm)];
      if (response) await approveFormResponse(response.table);
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
        <span class="badge ${event.actor === "agente" ? "phva" : "cumple"}">${event.actor}</span>
        <p>${event.detail}</p>
        <small>Requisito ${event.code || "N/A"} - ${event.type}</small>
      </div>`).join("")
    : `<div class="muted">La bitacora se llenara con acciones del agente, revisiones humanas y evidencias.</div>`;
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

function renderSubscriptionPlans() {
  const current = subscriptionPlans[state.currentPlan] || subscriptionPlans.profesional;
  const usage = currentPlanUsage();
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
  if (summary) {
    const open = state.actions.filter((item) => item.status !== "cerrada").length;
    const assigned = state.actions.filter((item) => item.responsible && item.dueDate).length;
    const efficacy = state.actions.filter((item) => item.efficacyStatus === "eficaz").length;
    const corrective = state.actions.filter((item) => item.type === "correctiva").length;
    summary.innerHTML = `
      <div class="report-card"><span>Abiertas</span><strong>${open}</strong></div>
      <div class="report-card"><span>Asignadas</span><strong>${assigned}</strong></div>
      <div class="report-card"><span>Correctivas</span><strong>${corrective}</strong></div>
      <div class="report-card"><span>Eficaces</span><strong>${efficacy}</strong></div>`;
  }
  container.innerHTML = state.actions.length
    ? state.actions.map((item, index) => actionCardTemplate(item, index)).join("")
    : `<div class="muted">No hay acciones registradas.</div>`;
  bindActionControls(container);
}

function actionCardTemplate(item, index) {
  return `
    <article class="action-management-card">
      <div class="action-card-head">
        <div>
          <span class="badge requisito">${item.code || "10.1"}</span>
          <span class="badge phva">${item.type || "tarea"}</span>
          <span class="badge ${item.status === "cerrada" ? "cumple" : "en_proceso"}">${item.status || "abierta"}</span>
        </div>
        <div class="row-actions">
          <button class="secondary-button" data-action-assign="${index}" type="button">Asignar</button>
          <button data-close-action="${index}" type="button">${item.status === "cerrada" ? "Reabrir" : "Cerrar"}</button>
        </div>
      </div>
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

function bindActionControls(container) {
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
  container.querySelectorAll("[data-close-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = state.actions[Number(button.dataset.closeAction)];
      if (!action) return;
      const closing = action.status !== "cerrada";
      action.status = closing ? "cerrada" : "abierta";
      action.closedAt = closing ? today() : "";
      if (closing && !action.efficacyStatus) action.efficacyStatus = "pendiente";
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
  state.equipment.unshift({ name: `Equipo ${count}`, type: "Operacion", activity: primaryActivityName(), status: "revision", nextCheck: "Por programar" });
  state.compliance["7.1"] = "en_proceso";
  state.compliance["8.1"] = "en_proceso";
  createAction("Programar inspeccion y mantenimiento de equipo", "7.1", "preventiva", "equipo vencido");
}

function addPolicy() {
  const activity = primaryActivityName();
  const count = state.policies.length + 1;
  state.policies.unshift({ number: `POL-${String(count).padStart(3, "0")}`, insurer: "Aseguradora por definir", coverage: "Cobertura por definir", activity, due: "Por definir", status: "pendiente" });
  state.compliance["6.1.3"] = "en_proceso";
  createAction("Validar cobertura y vigencia de poliza", "6.1.3", "preventiva", "seguro");
}

function addParticipantEvidence() {
  const activity = primaryActivityName();
  state.participantEvidence.unshift({ activity, kind: "Formulario externo", consent: "pendiente", status: "pendiente" });
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
  const activity = state.activities[0]?.name || "Actividad por definir";
  const risk = state.risks[0]?.title || "Riesgos por identificar";
  const equipment = state.equipment.map((item) => item.name).join(", ") || "Equipos por inventariar";
  const training = state.trainingNeeds.map((item) => item.topic).join(", ") || "Capacitaciones por definir";
  return [
    {
      title: "Alcance del SGSTA",
      code: "4.3",
      content: `ALCANCE DEL SGSTA\n\nOrganizacion: ${org}\n\nEl Sistema de Gestion de Seguridad de Turismo de Aventura aplica a: ${scope}\n\nPartes interesadas consideradas:\n${stakeholders}\n\nLimites del sistema:\n- Actividades ofertadas por la organizacion.\n- Personal, equipos, procedimientos, emergencias, comunicaciones y evidencias relacionadas.\n\nEste borrador debe ser revisado y aprobado por la direccion.`
    },
    {
      title: "Politica de seguridad",
      code: "5.2",
      content: `POLITICA DE SEGURIDAD\n\n${org} se compromete a planificar, operar y mejorar sus actividades de turismo de aventura bajo criterios de seguridad, prevencion de incidentes y cumplimiento de requisitos aplicables.\n\nLa organizacion se compromete a:\n- Identificar y controlar riesgos de sus actividades.\n- Mantener personal competente y consciente de sus responsabilidades.\n- Conservar equipos operativos y mantenidos.\n- Comunicar informacion de seguridad a participantes y partes interesadas.\n- Investigar incidentes y ejecutar acciones correctivas, preventivas y de mejora.\n\nEste documento es un borrador generado por el agente y requiere aprobacion formal.`
    },
    {
      title: "Procedimiento operacional de servicio",
      code: "8.1",
      content: `PROCEDIMIENTO OPERACIONAL\n\nActividad: ${activity}\n\nObjetivo:\nEstablecer controles para ejecutar la actividad de forma planificada y segura.\n\nControles minimos:\n- Verificar condiciones del entorno antes de iniciar.\n- Confirmar personal competente asignado.\n- Revisar equipos requeridos: ${equipment}.\n- Comunicar instrucciones de seguridad a participantes.\n- Registrar observaciones, incidentes y acciones tomadas.\n\nRiesgo principal considerado:\n${risk}\n\nRegistros asociados:\nBitacora de actividad, evidencia externa de participantes, inspeccion de equipos e incidentes.`
    },
    {
      title: "Plan de emergencia",
      code: "8.2",
      content: `PLAN DE EMERGENCIA\n\nOrganizacion: ${org}\nActividad base: ${activity}\n\nEscenarios de emergencia:\n- Lesion o enfermedad de participante.\n- Perdida de comunicacion.\n- Condiciones climaticas adversas.\n- Falla de equipo critico.\n\nRecursos y equipos disponibles:\n${equipment}\n\nPersonal y capacitacion requerida:\n${training}\n\nEl plan debe probarse mediante simulacros, registrar resultados y generar acciones de mejora cuando se detecten fallas.`
    },
    {
      title: "Resumen para revision por la direccion",
      code: "9.3",
      content: `RESUMEN PARA REVISION POR LA DIRECCION\n\nPeriodo: ${today()}\n\nEntradas preparadas por el agente:\n- Acciones abiertas: ${state.actions.filter((item) => item.status !== "cerrada").length}\n- Riesgos registrados: ${state.risks.length}\n- Incidentes registrados: ${state.incidents.length}\n- Necesidades de capacitacion abiertas: ${state.trainingNeeds.filter((item) => item.status !== "cerrada").length}\n- Equipos en revision: ${state.equipment.filter((item) => item.status !== "operativo").length}\n- Polizas pendientes: ${state.policies.filter((item) => item.status !== "vigente").length}\n\nSalidas sugeridas:\n- Priorizar cierre de acciones vencidas o criticas.\n- Aprobar recursos para capacitacion y mantenimiento.\n- Revisar oportunidades de mejora del SGSTA.\n\nEste borrador debe ser validado por la direccion.`
    }
  ];
}

function generateDocumentDraft() {
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
  addMessage("agent", `Genere un borrador de documento: ${next.title}. Queda pendiente de revision y aprobacion humana.`);
  saveState();
  renderAll();
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

function addManagementReview() {
  state.managementReviews.unshift({
    period: `Revision ${today()}`,
    summary: `${state.actions.length} acciones, ${state.incidents.length} incidentes, ${state.trainingNeeds.length} necesidades de capacitacion, ${state.risks.length} riesgos.`,
    status: "borrador"
  });
  state.compliance["9.3"] = "en_proceso";
  createAction("Aprobar salidas de revision por la direccion", "9.3", "mejora", "revision direccion");
}

function addFormResponse() {
  const catalog = visibleCatalogForms(window.formCatalog || []);
  const next = catalog.find((form) => !state.formResponses.some((response) => response.table === form.table)) || selectedCatalogForm();
  if (next) fillCatalogForm(next.table);
}

function handleImplementationStep(step) {
  if (!step) return;
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
});

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
      addTrainingNeed();
      addMessage("agent", "Detecte una necesidad de capacitacion y cree una accion preventiva.");
    }
    if (action === "equipos") {
      addEquipment();
      addMessage("agent", "Agregue un equipo en revision y cree una accion de inspeccion.");
    }
    if (action === "seguros") {
      addPolicy();
      addMessage("agent", "Agregue una poliza pendiente para controlar cobertura por actividad.");
    }
    if (action === "participantes") {
      addParticipantEvidence();
      addMessage("agent", "Agregue evidencia externa de participantes sin guardar datos sensibles.");
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
document.querySelector("#addEquipment").addEventListener("click", addEquipment);
document.querySelector("#addPolicy").addEventListener("click", addPolicy);
document.querySelector("#addParticipantEvidence").addEventListener("click", addParticipantEvidence);
document.querySelector("#addRisk").addEventListener("click", addRisk);
document.querySelector("#addDocument").addEventListener("click", addDocument);
document.querySelector("#generateDocumentDraft").addEventListener("click", generateDocumentDraft);
document.querySelector("#addIncident").addEventListener("click", addIncident);
document.querySelector("#addAudit").addEventListener("click", addAudit);
document.querySelector("#addManagementReview").addEventListener("click", addManagementReview);
document.querySelector("#generateReport").addEventListener("click", () => generateExecutiveReport(true));
document.querySelector("#generateAuditReport").addEventListener("click", generateAuditReport);
document.querySelector("#reportToEvidence").addEventListener("click", convertReportToEvidence);
document.querySelector("#printReport").addEventListener("click", printExecutiveReport);
document.querySelector("#downloadReport").addEventListener("click", downloadExecutiveReport);
document.querySelector("#runImplementationReview").addEventListener("click", runImplementationReview);
document.querySelector("#runAgentMonitor").addEventListener("click", runAgentMonitor);
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

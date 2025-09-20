// =======================================================
// 🔧 CONFIGURACIÓN GLOBAL
// =======================================================
// URL de tu WebApp de Google Apps Script (ya puesta con tu despliegue)
const SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbz1LySTEGGaxI5O6yQqcvMit1h3Ap90BY3dBupDErklFTBRUlJiOuWlyXO38oyxMAmFjA/exec';

const FIREBASE_CONFIG = {
  // Configuración de tu proyecto de Firebase (opcional)
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  databaseURL: "YOUR_DATABASE_URL_IF_USING_RTDB"
};

// =======================================================
// 🌍 INTERNACIONALIZACIÓN (I18N)
// =======================================================
const I18N = {
  es: {
    header_subtitle: 'Flujo de perfilación y captura',
    welcome_title: 'Bienvenido',
    welcome_subtitle: 'Elige cómo quieres empezar.',
    start_survey_btn: 'Comenzar encuesta',
    go_capture_btn: 'Ir directo a captura',
    survey_title: 'Diagnóstico rápido',
    survey_subtitle: 'Selecciona la compañía y responde 3–4 preguntas.',
    telcel_note: 'Cliente Telcel actual: derivar a upsell/recargas. No aplica diagnóstico.',
    current_company_label: 'Compañía objetivo',
    score_severity_label: 'Score de severidad',
    suggested_pitch_label: 'Pitch sugerido',
    plan_recommendation_label: 'Recomendación de plan',
    accept_change_btn: 'Aceptó cambio',
    not_accept_btn: 'No aceptó',
    go_to_capture_btn: 'Ir a ficha',
    capture_title: 'Ficha de captura',
    capture_subtitle: 'Valida los campos antes de crear la ficha.',
    plaza_label: 'Plaza',
    carrier_label: 'Compañía actual (Carrier)',
    promoter_label: 'Promotor (opcional)',
    promoter_placeholder: 'Nombre del promotor',
    full_name_label: 'Nombre completo',
    full_name_placeholder: 'Nombre y apellidos',
    phone_label: 'Teléfono (10 dígitos)',
    phone_placeholder: 'Ej. 8112345678',
    dob_label: 'Fecha de nacimiento',
    pob_label: 'Estado de nacimiento',
    curp_label: 'CURP (opcional)',
    curp_placeholder: 'En mayúsculas',
    icc_label: 'ICC (20 dígitos)',
    icc_placeholder: 'Escanéalo o escríbelo',
    nip_label: 'NIP (4 dígitos)',
    nip_placeholder: 'Ej. 1234',
    create_ticket_btn: 'Crear ficha',
    back_home_btn: 'Volver a portada',
    local_leads_title: 'Leads capturados (local)',
    local_leads_subtitle: 'Últimos 12 registros',
    no_leads: 'Sin registros todavía.',
    clear_leads_btn: 'Limpiar lista local',
    ticket_title: 'Ficha creada',
    ticket_subtitle: 'Guarda un screenshot si lo requieres.',
    phone_nip_label: 'Teléfono • NIP',
    plaza_carrier_label: 'Plaza • Carrier',
    birth_label: 'Nacimiento',
    ready_btn: 'Listo',
    scan_icc_title: 'Escanear ICC',
    close_btn: 'Cerrar',
    scan_tip: 'Apunta al código de barras (Code128/EAN). Si no aparece, escribe el ICC manualmente.',
    stop_btn: 'Detener',
    select_option: 'Selecciona',
    scan_btn: 'Escanear',
    // Mensajes de Toast
    toast_success: 'Ficha creada y enviada a la nube. ID:',
    toast_dup_lead: 'ALERTA: Este teléfono/ICC ya existe en el sistema. Captura rechazada.',
    toast_offline_save: 'Guardado localmente. Sincroniza más tarde.',
    toast_validation_error: 'Error de validación: ',
    toast_curp_invalid: 'CURP inválido.',
    toast_help_tip: 'Tip: Al ingresar el CURP, el Estado de Nacimiento se autocompleta.',
    // Opciones de respuestas de encuesta
    ans_yes: 'Sí',
    ans_sometimes: 'A veces',
    ans_no: 'No',
    // Estados de México (como arreglo)
    STATES_MX: [
      'Aguascalientes','Baja California','Baja California Sur','Campeche','Coahuila','Colima',
      'Chiapas','Chihuahua','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo',
      'Jalisco','México','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla',
      'Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas',
      'Tlaxcala','Veracruz','Yucatán','Zacatecas','EXTRANJERO'
    ]
  },
  en: {
    header_subtitle: 'Profiling and Capture Flow',
    welcome_title: 'Welcome',
    welcome_subtitle: 'Choose how you want to start.',
    start_survey_btn: 'Start Survey',
    go_capture_btn: 'Go Directly to Capture',
    survey_title: 'Quick Diagnosis',
    survey_subtitle: 'Select company and answer 3–4 questions.',
    telcel_note: 'Current Telcel client: refer to upsell/recharges. Diagnosis does not apply.',
    current_company_label: 'Target Company',
    score_severity_label: 'Severity Score',
    suggested_pitch_label: 'Suggested Pitch',
    plan_recommendation_label: 'Plan Recommendation',
    accept_change_btn: 'Accepted Change',
    not_accept_btn: 'Did Not Accept',
    go_to_capture_btn: 'Go to Ticket',
    capture_title: 'Capture Form',
    capture_subtitle: 'Validate fields before creating the ticket.',
    plaza_label: 'Plaza',
    carrier_label: 'Current Company (Carrier)',
    promoter_label: 'Promoter (optional)',
    promoter_placeholder: 'Promoter Name',
    full_name_label: 'Full Name',
    full_name_placeholder: 'First and Last Names',
    phone_label: 'Phone (10 digits)',
    phone_placeholder: 'E.g., 8112345678',
    dob_label: 'Date of Birth',
    pob_label: 'Place of Birth (State)',
    curp_label: 'CURP (optional)',
    curp_placeholder: 'In capital letters',
    icc_label: 'ICC (20 digits)',
    icc_placeholder: 'Scan or type it',
    nip_label: 'NIP (4 digits)',
    nip_placeholder: 'E.g., 1234',
    create_ticket_btn: 'Create Ticket',
    back_home_btn: 'Back to Home',
    local_leads_title: 'Captured Leads (local)',
    local_leads_subtitle: 'Last 12 records',
    no_leads: 'No records yet.',
    clear_leads_btn: 'Clear Local List',
    ticket_title: 'Ticket Created',
    ticket_subtitle: 'Take a screenshot if required.',
    phone_nip_label: 'Phone • NIP',
    plaza_carrier_label: 'Plaza • Carrier',
    birth_label: 'Birth',
    ready_btn: 'Ready',
    scan_icc_title: 'Scan ICC',
    close_btn: 'Close',
    scan_tip: 'Point to the barcode (Code128/EAN). If it does not appear, enter the ICC manually.',
    stop_btn: 'Stop',
    select_option: 'Select',
    scan_btn: 'Scan',
    // Toast
    toast_success: 'Ticket created and sent to the cloud. ID:',
    toast_dup_lead: 'ALERT: This phone/ICC already exists in the system. Capture rejected.',
    toast_offline_save: 'Saved locally. Sync later.',
    toast_validation_error: 'Validation Error: ',
    toast_curp_invalid: 'Invalid CURP.',
    toast_help_tip: 'Tip: Upon entering CURP, the Place of Birth auto-fills.',
    // Encuesta answers
    ans_yes: 'Yes',
    ans_sometimes: 'Sometimes',
    ans_no: 'No',
    // States array
    STATES_MX: [
      'Aguascalientes','Baja California','Baja California Sur','Campeche','Coahuila','Colima',
      'Chiapas','Chihuahua','Mexico City','Durango','Guanajuato','Guerrero','Hidalgo',
      'Jalisco','México (State)','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla',
      'Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas',
      'Tlaxcala','Veracruz','Yucatán','Zacatecas','FOREIGNER'
    ]
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
let surveyConfig = null; // se carga desde GAS

// =======================================================
// 📚 UTILS Y AYUDAS
// =======================================================
const $ = (id) => document.getElementById(id);
const show = (id) => { $(id).classList.remove('hidden'); $(id).classList.add('fade-in'); };
const hide = (id) => { $(id).classList.remove('fade-in'); $(id).classList.add('hidden'); };
const onlyDigits = (str) => (str || '').replace(/\D+/g, '');
const last6 = (str) => { const s = String(str||''); return s.slice(-6).padStart(6,'•'); };
const getCurrentI18n = () => I18N[currentLang];
const t = (key) => {
  const keys = key.split('.');
  let value = getCurrentI18n();
  for (const k of keys) {
    if (!value || typeof value[k] === 'undefined') return `[[${key}]]`;
    value = value[k];
  }
  return value;
};

const showToast = (message, type = 'info') => {
  let backgroundColor;
  switch (type) {
    case 'success': backgroundColor = 'linear-gradient(to right, #00b09b, #96c93d)'; break;
    case 'error': backgroundColor = 'linear-gradient(to right, #ff5f6d, #ffc371)'; break;
    case 'warning': backgroundColor = 'linear-gradient(to right, #f7b731, #fad05d)'; break;
    default: backgroundColor = 'linear-gradient(to right, #003b8f, #0a2f6b)';
  }
  Toastify({
    text: message,
    duration: 4000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: { background: backgroundColor, borderRadius: '10px' }
  }).showToast();
};

// =======================================================
// 🌐 I18N y TEMA
// =======================================================
const applyI18n = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  $('btnToggleLang').textContent = lang === 'es' ? 'EN' : 'ES';
  $('btnToggleLang').setAttribute('data-lang-current', lang);
  loadStatesToSelect(lang);
};

const loadStatesToSelect = (lang) => {
  const select = $('estadoNacimiento');
  select.innerHTML = `<option value="">${t('select_option')}</option>`;
  const states = I18N[lang].STATES_MX;
  states.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
};

const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
};

const updateThemeIcon = (theme) => {
  const iconPath = $('themeIcon');
  if (theme === 'dark') {
    iconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
  } else {
    iconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707');
  }
};

// =======================================================
// 🚀 BACKEND / API GAS
// =======================================================
async function sendToBackend(record) {
  if (SHEETS_WEBAPP_URL.includes('REEMPLAZAR_CON_TU_URL_DE_GAS')) {
    showToast('ERROR: Configura la URL de Apps Script en app.js', 'error');
    throw new Error('URL de GAS no configurada.');
  }
  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // GAS por plaza espera un JSON con { payload: "<objeto stringificado>" }
      body: JSON.stringify({ payload: JSON.stringify(record) })
    });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json().catch(() => ({ status: 'error', message: 'Respuesta inválida de GAS.' }));
    return data;
  } catch (error) {
    console.error("Error al comunicarse con GAS:", error);
    if (record.type === 'capture') {
      saveOffline(record);
      showToast(t('toast_offline_save'), 'warning');
      return { status: 'success', message: 'Guardado offline.' };
    }
    throw error;
  }
}

async function getSurveyConfig() {
  try {
    const res = await fetch(`${SHEETS_WEBAPP_URL}?action=getSurveyConfig`);
    if (!res.ok) throw new Error('Error al cargar configuración de encuesta.');
    return await res.json();
  } catch (e) {
    console.error("No se pudo cargar la configuración dinámica:", e);
    return {
      status: 'error',
      message: 'No se pudo cargar la configuración de la encuesta. Usando configuración interna.',
      data: null
    };
  }
}

// =======================================================
// 🧠 ENCUESTA Y LÓGICA DE NEGOCIO
// =======================================================
let currentCompany = null, currentAnswers = [];

function getRecommendation(score) {
  let plan = 'Amigo Sin Límite 80';
  let pitchKey = 'baja';
  if (score >= 2.4) { plan = 'Amigo Sin Límite 150'; pitchKey = 'alta'; }
  else if (score >= 1.6) { plan = 'Amigo Sin Límite 100'; pitchKey = 'media'; }

  const pitches = {
    alta: 'Veo varios puntos de dolor. Con Telcel mejoras cobertura en interiores y estabilidad en horas pico.',
    media: 'Hay áreas de mejora. Con Telcel ganas estabilidad y mejor rendimiento en apps.',
    baja: 'Tu experiencia es decente, pero con Telcel puedes asegurar señal donde hoy te falla.'
  };
  return { plan, pitch: `${pitches[pitchKey]} (${currentCompany})` };
}

function renderCompanyButtons() {
  const companies = surveyConfig?.companies || ['Movistar', 'AT&T', 'Unefon', 'Telcel'];
  const companyButtons = $('companyButtons');
  companyButtons.innerHTML = '';
  companies.forEach(c => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'rounded-xl border border-slate-200 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 text-sm hover:bg-slate-50 transition duration-150';
    b.textContent = c;
    b.addEventListener('click', () => selectCompany(c));
    companyButtons.appendChild(b);
  });
}

function selectCompany(company) {
  currentCompany = company;
  currentAnswers = [];
  const questionsContainer = $('surveyQuestions');
  questionsContainer.innerHTML = '';
  $('scoreValue').textContent = '0.00';
  $('pitchValue').textContent = '—';
  $('planValue').textContent = '—';

  [...$('companyButtons').children].forEach(ch => ch.classList.remove('ring-2', 'ring-[#00aeef]'));
  [...$('companyButtons').children].find(ch => ch.textContent === company)?.classList.add('ring-2', 'ring-[#00aeef]');

  hide('surveyResult');
  $('btnAceptaCambio').classList.add('hidden');
  $('btnNoAcepta').classList.add('hidden');
  $('btnIrFicha').classList.add('hidden');

  const qs = surveyConfig?.questions?.[company] || [];

  if (company === 'Telcel') {
    show('notaTelcel');
    hide('surveyQuestions');
    return;
  }
  hide('notaTelcel');

  if (!qs.length) {
    hide('surveyQuestions');
    return;
  }

  show('surveyQuestions');

  qs.forEach((item, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 p-4 transition-all duration-300';
    const title = document.createElement('div');
    title.className = 'font-medium text-slate-900 dark:text-white';
    title.textContent = `${idx + 1}. ${item.q}`;
    const options = document.createElement('div');
    options.className = 'mt-3 flex flex-wrap gap-2';

    item.options.forEach(opt => {
      const ob = document.createElement('button');
      ob.type = 'button';
      ob.className = 'rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition duration-150';
      ob.textContent = (opt.t_key ? t(opt.t_key) : opt.t) || opt.t;
      ob.addEventListener('click', () => {
        currentAnswers[idx] = opt.w;
        [...options.children].forEach(ch => ch.classList.remove('ring-2', 'ring-[#00aeef]', 'ring-offset-2'));
        ob.classList.add('ring-2', 'ring-[#00aeef]', 'ring-offset-2');

        const sum = currentAnswers.filter(x => typeof x === 'number').reduce((a, b) => a + b, 0);
        const count = currentAnswers.filter(x => typeof x === 'number').length;

        if (count === qs.length) {
          const score = sum;
          const { plan, pitch } = getRecommendation(score);
          $('scoreValue').textContent = score.toFixed(2);
          $('pitchValue').textContent = pitch;
          $('planValue').textContent = plan;
          show('surveyResult');

          // Mostrar botones de acción al terminar
          $('btnAceptaCambio').classList.remove('hidden');
          $('btnNoAcepta').classList.remove('hidden');
          $('btnIrFicha').classList.remove('hidden');

          // Guardar resultado (background)
          const surveyRecord = {
            type: 'survey',
            timestamp: new Date().toISOString(),
            company: currentCompany,
            score: score.toFixed(2),
            plan,
            pitch,
            answers: currentAnswers
          };
          sendToBackend(surveyRecord).catch(e => console.warn('Error al guardar encuesta en Sheets:', e));
        }
      });
      options.appendChild(ob);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(options);
    questionsContainer.appendChild(wrapper);
  });
}

// =======================================================
// 📝 FICHA DE CAPTURA Y VALIDACIONES
// =======================================================
const VALIDATION_RULES = {
  telefono: { regex: /^\d{10}$/, msg: 'El teléfono debe ser de 10 dígitos.' },
  icc:      { regex: /^\d{20}$/, msg: 'El ICC debe ser de 20 dígitos.' },
  nip:      { regex: /^\d{4}$/,  msg: 'El NIP debe ser de 4 dígitos.' },
  curp:     { regex: /^[A-Z]{4}\d{6}[HM][A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}[A-Z0-9]\d{1}$/, msg: 'El CURP no es válido (ej. XXXX990101HXXXRRL01).', required: false }
};

function validateField(el, rule) {
  const value = el.value.toUpperCase().trim();
  if (!value && !rule.required) return true;
  if (!rule.regex.test(value)) {
    showToast(t('toast_validation_error') + rule.msg, 'error');
    el.focus();
    return false;
  }
  return true;
}

function attemptAutoFillPob() {
  const curpEl = $('curp');
  const pobEl = $('estadoNacimiento');
  const curp = curpEl.value.toUpperCase().trim();

  if (curp.length >= 13) {
    const pobCode = curp.substring(11, 13);
    const codeToState = {
      'AS': 'Aguascalientes','BC': 'Baja California','BS': 'Baja California Sur','CC': 'Campeche',
      'CS': 'Chiapas','CH': 'Chihuahua','DF': 'Ciudad de México','CM': 'Colima',
      'CL': 'Coahuila','DG': 'Durango','GT': 'Guanajuato','GR': 'Guerrero',
      'HG': 'Hidalgo','JC': 'Jalisco','MC': 'México','MN': 'Michoacán',
      'MS': 'Morelos','NT': 'Nayarit','NL': 'Nuevo León','OC': 'Oaxaca',
      'PL': 'Puebla','QT': 'Querétaro','QR': 'Quintana Roo','SP': 'San Luis Potosí',
      'SL': 'Sinaloa','SR': 'Sonora','TC': 'Tabasco','TS': 'Tamaulipas',
      'TL': 'Tlaxcala','VZ': 'Veracruz','YN': 'Yucatán','ZS': 'Zacatecas',
      'NE': 'EXTRANJERO'
    };
    const stateName = codeToState[pobCode];
    if (stateName) {
      // si existe en el select, lo seleccionamos
      for (let i = 0; i < pobEl.options.length; i++) {
        if (pobEl.options[i].value === stateName) { pobEl.value = stateName; return; }
      }
      pobEl.value = stateName; // fallback
    }
  }
}

function validateCaptureForm() {
  normalizeInputs();
  const plaza = $('plaza');
  const carrier = $('carrier');
  const nombreCompleto = $('nombreCompleto');
  const fechaNacimiento = $('fechaNacimiento');
  const estadoNacimiento = $('estadoNacimiento');
  const curp = $('curp');

  if (!plaza.value) { showToast(t('toast_validation_error') + 'Selecciona una plaza.', 'error'); plaza.focus(); return false; }
  if (!carrier.value) { showToast(t('toast_validation_error') + 'Selecciona la compañía actual.', 'error'); carrier.focus(); return false; }
  if (!nombreCompleto.value.trim()) { showToast(t('toast_validation_error') + 'Escribe el nombre completo.', 'error'); nombreCompleto.focus(); return false; }
  if (!fechaNacimiento.value) { showToast(t('toast_validation_error') + 'Selecciona la fecha de nacimiento.', 'error'); fechaNacimiento.focus(); return false; }
  if (!estadoNacimiento.value) { showToast(t('toast_validation_error') + 'Selecciona el estado de nacimiento.', 'error'); estadoNacimiento.focus(); return false; }

  if (!validateField($('telefono'), VALIDATION_RULES.telefono)) return false;
  if (!validateField($('icc'), VALIDATION_RULES.icc)) return false;
  if (!validateField($('nip'), VALIDATION_RULES.nip)) return false;
  if (curp.value && !validateField(curp, VALIDATION_RULES.curp)) return false;

  return true;
}

function normalizeInputs() {
  const telEl = $('telefono'), iccEl = $('icc'), nipEl = $('nip'), curpEl = $('curp');
  telEl.value = onlyDigits(telEl.value).slice(0, 10);
  iccEl.value = onlyDigits(iccEl.value).slice(0, 20);
  nipEl.value = onlyDigits(nipEl.value).slice(0, 4);
  if (curpEl.value) curpEl.value = curpEl.value.toUpperCase().trim();
}

function resetForm() {
  $('captureForm').reset();
  $('estatus').value = 'Portabilidad iniciada';
  currentCompany = null;
  currentAnswers = [];
  if ($('companyButtons')) renderCompanyButtons();
  if ($('surveyQuestions')) $('surveyQuestions').innerHTML = '';
  hide('surveyResult');
  $('btnAceptaCambio').classList.add('hidden');
  $('btnNoAcepta').classList.add('hidden');
  $('btnIrFicha').classList.add('hidden');
}

$('captureForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateCaptureForm()) return;

  const record = {
    type: 'capture',
    timestamp: new Date().toISOString(),
    plaza: $('plaza').value,
    carrier: $('carrier').value,
    nombreCompleto: $('nombreCompleto').value.trim(),
    telefono: onlyDigits($('telefono').value),
    fechaNacimiento: $('fechaNacimiento').value,
    estadoNacimiento: $('estadoNacimiento').value,
    curp: ($('curp').value || '').toUpperCase().trim(),
    icc: onlyDigits($('icc').value).slice(0, 20),
    nip: onlyDigits($('nip').value).slice(0, 4),
    promotor: $('promotor').value.trim() || 'N/A',
    estatus: $('estatus').value || 'Portabilidad iniciada'
  };

  const isDuplicateLocal = getLeads().some(lead => lead.telefono === record.telefono || lead.icc6 === last6(record.icc));
  if (isDuplicateLocal) {
    showToast(`El teléfono ${record.telefono} o ICC (***${last6(record.icc)}) ya fue capturado localmente.`, 'warning');
  }

  try {
    const response = await sendToBackend(record);
    if (response.status === 'success') {
      addLeadLocal(record);
      openTicket(record);
      showToast(t('toast_success') + (response.leadId || ''), 'success');
    } else if (response.status === 'duplicate') {
      showToast(t('toast_dup_lead'), 'error');
    } else {
      showToast(`Error de backend: ${response.message}`, 'error');
    }
  } catch (err) {
    if (err.message.includes('URL de GAS no configurada')) return;
    if (!err.message.includes('offline')) {
      showToast('Error de red o servidor. Intenta de nuevo.', 'error');
    }
  }
});

// =======================================================
// 💾 LOCALSTORAGE, OFFLINE Y PWA
// =======================================================
const LEADS_KEY = 'mada_porta_leads';
const OFFLINE_KEY = 'mada_porta_offline';

function getLeads() {
  try { return JSON.parse(localStorage.getItem(LEADS_KEY)) || []; } catch { return []; }
}
function getOfflineLeads() {
  try { return JSON.parse(localStorage.getItem(OFFLINE_KEY)) || []; } catch { return []; }
}
function setOfflineLeads(arr) {
  localStorage.setItem(OFFLINE_KEY, JSON.stringify(arr));
}

function addLeadLocal(rec) {
  const resumen = {
    ts: new Date().toLocaleString(),
    nombre: rec.nombreCompleto,
    telefono: rec.telefono,
    carrier: rec.carrier,
    plaza: rec.plaza,
    icc6: last6(rec.icc),
    estatus: rec.estatus || 'Portabilidad iniciada'
  };
  const list = getLeads();
  list.unshift(resumen);
  localStorage.setItem(LEADS_KEY, JSON.stringify(list.slice(0, 12)));
  renderLeads();
}

function saveOffline(record) {
  const offlineLeads = getOfflineLeads();
  offlineLeads.push(record);
  setOfflineLeads(offlineLeads);
}

async function syncOfflineLeads() {
  const offlineLeads = getOfflineLeads();
  if (offlineLeads.length === 0) { showToast('No hay leads pendientes por sincronizar.', 'info'); return; }
  showToast(`Sincronizando ${offlineLeads.length} leads pendientes...`, 'info');

  const successfulSyncs = [];
  for (const record of offlineLeads) {
    try {
      const response = await sendToBackend(record);
      if (response.status === 'success') successfulSyncs.push(record);
      else console.warn(`Lead offline fallido (${record.telefono}): ${response.message}`);
    } catch (e) {
      showToast('Sincronización interrumpida por error de red.', 'error');
      break;
    }
  }
  const remainingLeads = offlineLeads.filter(lead => !successfulSyncs.includes(lead));
  setOfflineLeads(remainingLeads);

  if (successfulSyncs.length > 0) showToast(`Sincronización completa: ${successfulSyncs.length} leads enviados.`, 'success');
}

function renderLeads() {
  const listEl = $('leadsList');
  const leads = getLeads();
  listEl.innerHTML = '';
  if (leads.length === 0) {
    listEl.innerHTML = `<div class="text-slate-500 dark:text-slate-400 text-sm p-2">${t('no_leads')}</div>`;
    return;
  }
  leads.forEach(lead => {
    const badgeClass = {
      'Portabilidad iniciada': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Enviada a Telcel': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Confirmada': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Rechazada': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }[lead.estatus] || 'bg-slate-100 text-slate-800 dark:bg-slate-600 dark:text-slate-200';

    const item = document.createElement('div');
    item.className = 'py-3 flex justify-between items-center';
    item.innerHTML = `
      <div>
        <div class="font-medium text-slate-900 dark:text-white">${lead.nombre}</div>
        <div class="text-sm text-slate-600 dark:text-slate-400 mono">${lead.telefono} / ICC: ***${lead.icc6}</div>
        <div class="text-xs text-slate-500 dark:text-slate-400">${lead.plaza} (${lead.carrier})</div>
      </div>
      <span class="text-xs font-medium px-2.5 py-0.5 rounded-full ${badgeClass}">
        ${lead.estatus}
      </span>
    `;
    listEl.appendChild(item);
  });
}

// =======================================================
// 📷 ESCANEO DE ICC
// =======================================================
const scanOverlay = $('scanOverlay'), scanVideo = $('scanVideo'), btnStopScan = $('btnStopScan');
const btnScanICC = $('btnScanICC');
let stream = null;
let barcodeDetector = null;
let scanInterval = null;

if ('BarcodeDetector' in window) {
  barcodeDetector = new BarcodeDetector({ formats: ['code_128', 'ean_13'] });
  $('scanSupport').textContent = 'Detector de códigos de barras soportado.';
} else {
  $('scanSupport').textContent = 'Detector de códigos no soportado. Entrada manual recomendada.';
  if (btnScanICC) btnScanICC.disabled = false; // permitimos usar sin detector, solo aviso
}

async function startScan() {
  show('scanOverlay');
  showModal('scanModal');
  $('scanResultText').textContent = '';
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    scanVideo.srcObject = stream;
    await scanVideo.play();
    startDetectionLoop();
  } catch (err) {
    showToast('No se pudo acceder a la cámara. Revisa permisos.', 'error');
    console.error("Error al acceder a la cámara:", err);
    closeScan();
  }
}

function closeScan() {
  hide('scanOverlay');
  hideModal('scanModal');
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  if (scanInterval) {
    clearInterval(scanInterval);
    scanInterval = null;
  }
}

function startDetectionLoop() {
  if (!barcodeDetector) return;
  const detect = async () => {
    try {
      const barcodes = await barcodeDetector.detect(scanVideo);
      if (barcodes.length > 0) {
        const iccValue = onlyDigits(barcodes[0].rawValue);
        if (iccValue.length >= 20) {
          $('icc').value = iccValue.slice(0, 20);
          $('scanResultText').textContent = 'ICC detectado: ' + iccValue.slice(0, 20);
          showToast('ICC escaneado con éxito.', 'success');
          closeScan();
        }
      }
    } catch (_) {}
  };
  scanInterval = setInterval(detect, 500);
}

// =======================================================
// 🍿 MODALES Y UX
// =======================================================
function showModal(id) {
  const modalEl = $(id);
  modalEl.classList.remove('modal-exit-active');
  modalEl.classList.add('modal-enter-active');
}
function hideModal(id) {
  const modalEl = $(id);
  modalEl.classList.remove('modal-enter-active');
  modalEl.classList.add('modal-exit-active');
  setTimeout(() => {
    if (id === 'ticketModal') hide('ticketOverlay');
    if (id === 'scanModal') hide('scanOverlay');
  }, 300);
}

function openTicket(rec) {
  $('tkn_tel_nip').textContent = `${rec.telefono} • ${rec.nip}`;
  $('tkn_icc').textContent = rec.icc;
  $('tkn_nombre').textContent = rec.nombreCompleto || '—';
  $('tkn_plaza_carrier').textContent = `${rec.plaza} • ${rec.carrier}`;
  $('tkn_nacimiento').textContent = `${rec.fechaNacimiento} • ${rec.estadoNacimiento}`;
  $('tkn_promotor').textContent = rec.promotor || '—';
  show('ticketOverlay');
  showModal('ticketModal');
}

// =======================================================
// 📅 INICIALIZACIÓN Y EVENTOS
// =======================================================
document.addEventListener('DOMContentLoaded', async () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  applyI18n(currentLang);

  const config = await getSurveyConfig();
  if (config.status === 'success' && config.data) {
    surveyConfig = config.data;
  } else {
    surveyConfig = {
      companies: ['Movistar', 'AT&T', 'Unefon', 'Telcel'],
      questions: {
        'Movistar': [
          { q: '¿Se te corta la señal en interiores?', options: [{ t_key:'ans_yes', w:1.0 },{ t_key:'ans_sometimes', w:0.6 },{ t_key:'ans_no', w:0.2 }] },
          { q: '¿Tus datos rinden menos de lo esperado?', options: [{ t_key:'ans_yes', w:1.0 },{ t_key:'ans_sometimes', w:0.6 },{ t_key:'ans_no', w:0.2 }] }
        ],
        'AT&T': [
          { q: '¿Llamadas con eco o retraso?', options: [{ t_key:'ans_yes', w:0.9 },{ t_key:'ans_sometimes', w:0.5 },{ t_key:'ans_no', w:0.2 }] }
        ],
        'Unefon': [
          { q: '¿Pierdes señal al moverte?', options: [{ t_key:'ans_yes', w:1.0 },{ t_key:'ans_sometimes', w:0.6 },{ t_key:'ans_no', w:0.2 }] }
        ]
      }
    };
    showToast('Advertencia: Encuesta no pudo cargar de la nube. Usando datos internos.', 'warning');
  }

  renderLeads();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // Navegación
  $('btnStartSurvey').addEventListener('click', () => { hide('portada'); show('encuestaCard'); hide('fichaCard'); renderCompanyButtons(); resetForm(); });
  $('btnGoCapture').addEventListener('click', () => { hide('portada'); show('fichaCard'); hide('encuestaCard'); resetForm(); });
  $('btnAceptaCambio').addEventListener('click', () => {
    hide('encuestaCard'); show('fichaCard');
    if (currentCompany && currentCompany !== 'Telcel') { $('carrier').value = currentCompany; }
    $('estatus').value = 'Portabilidad iniciada';
  });
  $('btnNoAcepta').addEventListener('click', () => {
    showToast('Gracias por tu tiempo. Volviendo a la portada.', 'info');
    setTimeout(() => { show('portada'); hide('encuestaCard'); hide('fichaCard'); resetForm(); }, 800);
  });
  $('btnIrFicha').addEventListener('click', () => { hide('encuestaCard'); show('fichaCard'); });
  $('btnBackHome').addEventListener('click', () => { show('portada'); hide('encuestaCard'); hide('fichaCard'); resetForm(); });

  // Ticket
  $('btnCloseTicket').addEventListener('click', () => { hideModal('ticketModal'); setTimeout(() => { hide('ticketOverlay'); resetForm(); show('portada'); }, 300); });

  // Scan
  $('btnScanICC').addEventListener('click', startScan);
  $('btnCloseScan').addEventListener('click', closeScan);
  $('btnStopScan').addEventListener('click', closeScan);

  // Local Storage
  $('btnClearLeads').addEventListener('click', () => {
    localStorage.removeItem(LEADS_KEY);
    renderLeads();
    showToast('Lista local limpiada.', 'info');
  });

  // UX / CURP Autocompletar
  $('curp').addEventListener('input', attemptAutoFillPob);
  $('helpButton').addEventListener('click', () => { showToast(t('toast_help_tip'), 'info'); });

  // Tema y Lenguaje
  $('btnToggleTheme').addEventListener('click', toggleTheme);
  $('btnToggleLang').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    applyI18n(currentLang);
  });
});

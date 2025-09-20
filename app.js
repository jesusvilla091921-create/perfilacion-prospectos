// =======================================================
// 🔧 CONFIGURACIÓN GLOBAL
// =======================================================
// **IMPORTANTE**: Reemplaza esta URL con la tuya una vez que despliegues GAS.
const SHEETS_WEBAPP_URL = 'REEMPLAZAR_CON_TU_URL_DE_GAS';
const FIREBASE_CONFIG = {
    // Configuración de tu proyecto de Firebase
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // ... otros campos
    databaseURL: "YOUR_DATABASE_URL_IF_USING_RTDB" // Requerido si usas Realtime Database
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
        // Mensajes de Toast
        toast_success: 'Ficha creada y enviada a la nube. ID:',
        toast_dup_lead: 'ALERTA: Este teléfono/ICC ya existe en el sistema. Captura rechazada.',
        toast_offline_save: 'Guardado localmente. Sincroniza más tarde.',
        toast_validation_error: 'Error de validación: ',
        toast_curp_invalid: 'CURP inválido.',
        toast_help_tip: 'Tip: Al ingresar el CURP, el Estado de Nacimiento se autocompleta.',

        // Estados de México (para autocompletar CURP)
        STATES_MX: {
            AGUASCALIENTES: 'Aguascalientes', B. C. S.: 'Baja California Sur', BAJA CALIFORNIA: 'Baja California',
            CAMPECHE: 'Campeche', CHIAPAS: 'Chiapas', CHIHUAHUA: 'Chihuahua', CIUDAD DE MÉXICO: 'Ciudad de México',
            COAHUILA: 'Coahuila', COLIMA: 'Colima', DURANGO: 'Durango', GUANAJUATO: 'Guanajuato',
            GUERRERO: 'Guerrero', HIDALGO: 'Hidalgo', JALISCO: 'Jalisco', MÉXICO: 'México',
            MICHOACÁN: 'Michoacán', MORELOS: 'Morelos', NAYARIT: 'Nayarit', NUEVO LEÓN: 'Nuevo León',
            OAXACA: 'Oaxaca', PUEBLA: 'Puebla', QUERÉTARO: 'Querétaro', QUINTANA ROO: 'Quintana Roo',
            S. L. P.: 'San Luis Potosí', SINALOA: 'Sinaloa', SONORA: 'Sonora', TABASCO: 'Tabasco',
            TAMAULIPAS: 'Tamaulipas', TLAXCALA: 'Tlaxcala', VERACRUZ: 'Veracruz', YUCATÁN: 'Yucatán', ZACATECAS: 'Zacatecas',
            EXTRANJERO: 'EXTRANJERO'
        }
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
        // Mensajes de Toast
        toast_success: 'Ticket created and sent to the cloud. ID:',
        toast_dup_lead: 'ALERT: This phone/ICC already exists in the system. Capture rejected.',
        toast_offline_save: 'Saved locally. Sync later.',
        toast_validation_error: 'Validation Error: ',
        toast_curp_invalid: 'Invalid CURP.',
        toast_help_tip: 'Tip: Upon entering CURP, the Place of Birth auto-fills.',

        // States (CURP) - This mapping is specific to the Mexican CURP structure
        STATES_MX: {
            AGUASCALIENTES: 'Aguascalientes', B. C. S.: 'Baja California Sur', BAJA CALIFORNIA: 'Baja California',
            CAMPECHE: 'Campeche', CHIAPAS: 'Chiapas', CHIHUAHUA: 'Chihuahua', CIUDAD DE MÉXICO: 'Mexico City',
            COAHUILA: 'Coahuila', COLIMA: 'Colima', DURANGO: 'Durango', GUANAJUATO: 'Guanajuato',
            GUERRERO: 'Guerrero', HIDALGO: 'Hidalgo', JALISCO: 'Jalisco', MÉXICO: 'México (State)',
            MICHOACÁN: 'Michoacán', MORELOS: 'Morelos', NAYARIT: 'Nayarit', NUEVO LEÓN: 'Nuevo León',
            OAXACA: 'Oaxaca', PUEBLA: 'Puebla', QUERÉTARO: 'Querétaro', QUINTANA ROO: 'Quintana Roo',
            S. L. P.: 'San Luis Potosí', SINALOA: 'Sinaloa', SONORA: 'Sonora', TABASCO: 'Tabasco',
            TAMAULIPAS: 'Tamaulipas', TLAXCALA: 'Tlaxcala', VERACRUZ: 'Veracruz', YUCATÁN: 'Yucatán', ZACATECAS: 'Zacatecas',
            EXTRANJERO: 'FOREIGNER'
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'es';
let surveyConfig = null; // Se cargará dinámicamente desde GAS

// =======================================================
// 📚 UTILS Y AYUDAS
// =======================================================
const $ = (id) => document.getElementById(id);
const show = (id) => { $(id).classList.remove('hidden'); $(id).classList.add('fade-in'); };
const hide = (id) => { $(id).classList.remove('fade-in'); $(id).classList.add('hidden'); };
const onlyDigits = (str) => (str || '').replace(/\D+/g, '');
const last6 = (str) => { const s = String(str||''); return s.slice(-6).padStart(6,'•'); };
const getCurrentI18n = () => I18N[currentLang];
const t = (key) => { // Función de traducción
    const keys = key.split('.');
    let value = getCurrentI18n();
    for (const k of keys) {
        if (!value || !value[k]) return `[[${key}]]`;
        value = value[k];
    }
    return value;
};

/**
 * Muestra una notificación Toast.
 * @param {string} message Mensaje a mostrar.
 * @param {string} type 'success', 'error', 'info', 'warning'
 */
const showToast = (message, type = 'info') => {
    let backgroundColor;
    switch (type) {
        case 'success': backgroundColor = 'linear-gradient(to right, #00b09b, #96c93d)'; break;
        case 'error': backgroundColor = 'linear-gradient(to right, #ff5f6d, #ffc371)'; break;
        case 'warning': backgroundColor = 'linear-gradient(to right, #f7b731, #fad05d)'; break;
        default: backgroundColor = 'linear-gradient(to right, #003b8f, #0a2f6b)'; // info / default
    }

    Toastify({
        text: message,
        duration: 4000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: backgroundColor,
            borderRadius: '10px'
        }
    }).showToast();
};

// =======================================================
// 🌐 I18N y TEMA
// =======================================================
/** Aplica todas las traducciones en el DOM. */
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

    // Recargar opciones de Estado de Nacimiento
    loadStatesToSelect(lang);
};

/** Carga los estados de nacimiento traducidos/mapeados. */
const loadStatesToSelect = (lang) => {
    const select = $('estadoNacimiento');
    select.innerHTML = `<option value="">${t('select_option')}</option>`;
    const states = I18N[lang].STATES_MX;
    for (const [abbr, name] of Object.entries(states)) {
        const option = document.createElement('option');
        option.value = name; // Usamos el nombre completo como valor
        option.textContent = name;
        select.appendChild(option);
    }
}

/** Toggle Dark/Light Mode */
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
    // Simple cambio de path para simular un icono de sol/luna
    if (theme === 'dark') {
        // Icono de Luna
        iconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
    } else {
        // Icono de Sol
        iconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707');
    }
}

// =======================================================
// 🚀 BACKEND / API GAS
// =======================================================

/**
 * Envía datos al WebApp de Google Apps Script.
 * @param {object} record Datos a enviar (Encuesta o Captura).
 * @returns {Promise<object>} Respuesta del backend.
 */
async function sendToBackend(record) {
    if (SHEETS_WEBAPP_URL.includes('REEMPLAZAR_CON_TU_URL_DE_GAS')) {
        showToast('ERROR: Configura la URL de Apps Script en app.js', 'error');
        throw new Error('URL de GAS no configurada.');
    }

    const body = new URLSearchParams();
    body.append('payload', JSON.stringify(record));

    try {
        const res = await fetch(SHEETS_WEBAPP_URL, {
            method: 'POST',
            body: body
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json().catch(() => ({ status: 'error', message: 'Respuesta inválida de GAS.' }));
        return data;

    } catch (error) {
        console.error("Error al comunicarse con GAS:", error);
        // Si hay error de red, intentamos guardar localmente si es una captura
        if (record.type === 'capture') {
            saveOffline(record);
            showToast(t('toast_offline_save'), 'warning');
            return { status: 'success', message: 'Guardado offline.' };
        }
        throw error;
    }
}

/**
 * Consulta la configuración de la encuesta desde el backend.
 * @returns {Promise<object>} Configuración de la encuesta.
 */
async function getSurveyConfig() {
    try {
        const res = await fetch(`${SHEETS_WEBAPP_URL}?action=getSurveyConfig`);
        if (!res.ok) throw new Error('Error al cargar configuración de encuesta.');
        return await res.json();
    } catch (e) {
        console.error("No se pudo cargar la configuración dinámica:", e);
        // Fallback a una configuración interna o lanzar error
        return {
            status: 'error',
            message: 'No se pudo cargar la configuración de la encuesta. Usando configuración interna (si existe).',
            data: { /* ... usar la COMPANY_QUESTIONS original o una versión mínima */ }
        };
    }
}

// =======================================================
// 🧠 ENCUESTA Y LÓGICA DE NEGOCIO
// =======================================================
let currentCompany = null, currentAnswers = [];

/**
 * Calcula el plan y pitch sugerido en base al score.
 * @param {number} score Puntuación de la encuesta.
 * @returns {object} { plan, pitch }
 */
function getRecommendation(score) {
    let plan = 'Amigo Sin Límite 80';
    let pitchKey = 'baja';

    if (score >= 2.4) {
        plan = 'Amigo Sin Límite 150';
        pitchKey = 'alta';
    } else if (score >= 1.6) {
        plan = 'Amigo Sin Límite 100';
        pitchKey = 'media';
    }

    // El pitch debe ser dinámico (configurable) - Usando valores hardcodeados por ahora:
    const pitches = {
        alta: 'Veo varios puntos de dolor. Con Telcel mejoras cobertura en interiores y estabilidad en horas pico.',
        media: 'Hay áreas de mejora. Con Telcel ganas estabilidad y mejor rendimiento en apps.',
        baja: 'Tu experiencia es decente, pero con Telcel puedes asegurar señal donde hoy te falla.'
    };

    return {
        plan: plan,
        pitch: `${pitches[pitchKey]} (${currentCompany})`
    };
}

/** Dibuja los botones de compañía y maneja la selección. */
function renderCompanyButtons() {
    const companies = surveyConfig?.companies || ['Movistar', 'AT&T', 'Unefon', 'Telcel'];
    const companyButtons = $('companyButtons');
    companyButtons.innerHTML = '';

    companies.forEach(c => {
        const b = document.createElement('button');
        b.type = 'button';
        // Animaciones: hover:scale-105 transition duration-150
        b.className = 'rounded-xl border border-slate-200 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 text-sm hover:bg-slate-50 transition duration-150';
        b.textContent = c;
        b.addEventListener('click', () => selectCompany(c));
        companyButtons.appendChild(b);
    });
}

/** Maneja la selección de la compañía, borra el resultado anterior y muestra preguntas. */
function selectCompany(company) {
    currentCompany = company;
    currentAnswers = [];
    const questionsContainer = $('surveyQuestions');
    questionsContainer.innerHTML = '';
    $('scoreValue').textContent = '0.00';
    $('pitchValue').textContent = '—';
    $('planValue').textContent = '—';

    // Deseleccionar botones anteriores
    [...$('companyButtons').children].forEach(ch => ch.classList.remove('ring-2', 'ring-[#00aeef]'));
    [...$('companyButtons').children].find(ch => ch.textContent === company)?.classList.add('ring-2', 'ring-[#00aeef]');

    hide('surveyResult');
    const qs = surveyConfig?.questions[company] || [];

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
        wrapper.className = 'rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 p-4 transition-all duration-300'; // Estilo más agradable
        const title = document.createElement('div');
        title.className = 'font-medium text-slate-900 dark:text-white';
        title.textContent = `${idx + 1}. ${item.q}`;
        const options = document.createElement('div');
        options.className = 'mt-3 flex flex-wrap gap-2';

        item.options.forEach(opt => {
            const ob = document.createElement('button');
            ob.type = 'button';
            // Animación de botón de respuesta
            ob.className = 'rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition duration-150';
            ob.textContent = t(opt.t_key) || opt.t; // Soporte para I18n si t_key está definido
            ob.addEventListener('click', () => {
                currentAnswers[idx] = opt.w; // Guarda el peso
                // Resaltar respuesta seleccionada
                [...options.children].forEach(ch => ch.classList.remove('ring-2', 'ring-[#00aeef]', 'ring-offset-2'));
                ob.classList.add('ring-2', 'ring-[#00aeef]', 'ring-offset-2');

                const sum = currentAnswers.filter(x => typeof x === 'number').reduce((a, b) => a + b, 0);
                const count = currentAnswers.filter(x => typeof x === 'number').length;

                // Solo mostrar resultado si todas las preguntas han sido respondidas
                if (count === qs.length) {
                    const score = sum;
                    const { plan, pitch } = getRecommendation(score);
                    $('scoreValue').textContent = score.toFixed(2);
                    $('pitchValue').textContent = pitch;
                    $('planValue').textContent = plan;
                    show('surveyResult');

                    // Guardar resultado de encuesta
                    const surveyRecord = {
                        type: 'survey',
                        timestamp: new Date().toISOString(),
                        company: currentCompany,
                        score: score.toFixed(2),
                        plan: plan,
                        pitch: pitch,
                        answers: currentAnswers // Lista de pesos
                    };
                    // Envío en background, no bloqueamos la UI
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
// 📝 FICHA DE CAPTURA Y VALIDACIONES AVANZADAS
// =======================================================

// Reglas de validación:
const VALIDATION_RULES = {
    telefono: {
        regex: /^\d{10}$/,
        msg: 'El teléfono debe ser de 10 dígitos.'
    },
    icc: {
        regex: /^\d{20}$/,
        msg: 'El ICC debe ser de 20 dígitos.'
    },
    nip: {
        regex: /^\d{4}$/,
        msg: 'El NIP debe ser de 4 dígitos.'
    },
    curp: {
        regex: /^[A-Z]{4}\d{6}[HM][A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}[A-Z0-9]\d{1}$/,
        msg: 'El CURP no es válido (ej. XXXX990101HXXXRRL01).',
        required: false // Es opcional
    }
};

/**
 * Valida un campo usando una regex y muestra toast en caso de error.
 * @param {HTMLElement} el Elemento del input.
 * @param {object} rule Regla de validación.
 * @returns {boolean} True si es válido.
 */
function validateField(el, rule) {
    const value = el.value.toUpperCase().trim();
    if (!value && !rule.required) return true; // Es opcional y está vacío
    if (!rule.regex.test(value)) {
        showToast(t('toast_validation_error') + rule.msg, 'error');
        el.focus();
        return false;
    }
    return true;
}

/**
 * Intenta autocompletar el Estado de Nacimiento a partir del CURP.
 */
function attemptAutoFillPob() {
    const curpEl = $('curp');
    const pobEl = $('estadoNacimiento');
    const curp = curpEl.value.toUpperCase().trim();

    if (curp.length >= 11) {
        const pobCode = curp.substring(11, 13);
        const codeToState = {
            'AS': 'Aguascalientes', 'BC': 'Baja California', 'BS': 'B. C. S.', 'CC': 'Campeche',
            'CS': 'Chiapas', 'CH': 'Chihuahua', 'DF': 'Ciudad de México', 'CM': 'Colima',
            'CL': 'Coahuila', 'DG': 'Durango', 'GT': 'Guanajuato', 'GR': 'Guerrero',
            'HG': 'Hidalgo', 'JC': 'Jalisco', 'MC': 'México', 'MN': 'Michoacán',
            'MS': 'Morelos', 'NT': 'Nayarit', 'NL': 'Nuevo León', 'OC': 'Oaxaca',
            'PL': 'Puebla', 'QT': 'Querétaro', 'QR': 'Quintana Roo', 'SP': 'S. L. P.',
            'SL': 'Sinaloa', 'SR': 'Sonora', 'TC': 'Tabasco', 'TS': 'Tamaulipas',
            'TL': 'Tlaxcala', 'VZ': 'Veracruz', 'YN': 'Yucatán', 'ZS': 'Zacatecas',
            'NE': 'EXTRANJERO'
        };
        const stateName = codeToState[pobCode];

        if (stateName) {
            // Buscamos el nombre traducido para la asignación
            const translatedState = getCurrentI18n().STATES_MX[stateName] || stateName;

            // Buscamos la opción en el select por el valor traducido
            let optionFound = false;
            for (let i = 0; i < pobEl.options.length; i++) {
                if (pobEl.options[i].value === translatedState) {
                    pobEl.value = translatedState;
                    optionFound = true;
                    break;
                }
            }
            if (!optionFound) {
                 // Si no se encuentra (caso raro de un estado extranjero o no mapeado), asignamos lo que tengamos.
                pobEl.value = translatedState;
            }
        }
    }
}

/**
 * Valida el formulario completo antes de enviar.
 */
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

    // Validaciones con Regex
    if (!validateField($('telefono'), VALIDATION_RULES.telefono)) return false;
    if (!validateField($('icc'), VALIDATION_RULES.icc)) return false;
    if (!validateField($('nip'), VALIDATION_RULES.nip)) return false;
    if (curp.value && !validateField(curp, VALIDATION_RULES.curp)) return false;

    return true;
}

/** Limpia y normaliza los inputs */
function normalizeInputs() {
    const telEl = $('telefono'), iccEl = $('icc'), nipEl = $('nip'), curpEl = $('curp');
    telEl.value = onlyDigits(telEl.value).slice(0, 10);
    iccEl.value = onlyDigits(iccEl.value).slice(0, 20);
    nipEl.value = onlyDigits(nipEl.value).slice(0, 4);
    if (curpEl.value) curpEl.value = curpEl.value.toUpperCase().trim();
}

/** Resetea el formulario de captura. */
function resetForm() {
    $('captureForm').reset();
    $('estatus').value = 'Portabilidad iniciada';
    currentCompany = null;
    currentAnswers = [];
    if ($('companyButtons')) renderCompanyButtons(); // Renderizar de nuevo los botones si existe
    if ($('surveyQuestions')) $('surveyQuestions').innerHTML = '';
    hide('surveyResult');
}

/**
 * Función principal al enviar la ficha.
 */
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

    // 1. Detección Local de Duplicados
    const isDuplicateLocal = getLeads().some(lead => lead.telefono === record.telefono || lead.icc6 === last6(record.icc));
    if (isDuplicateLocal) {
        showToast(`El teléfono ${record.telefono} o ICC (***${last6(record.icc)}) ya fue capturado localmente.`, 'warning');
        // Aún se permite continuar para el envío a la nube, donde la validación final es más estricta.
    }

    // 2. Envío a GAS (Validación de Duplicados Remota)
    try {
        const response = await sendToBackend(record);

        if (response.status === 'success') {
            // Guardar localmente solo si el envío a la nube fue exitoso (o si fue guardado offline)
            addLeadLocal(record);

            // Mostrar Ticket
            openTicket(record);
            showToast(t('toast_success') + response.leadId, 'success');

        } else if (response.status === 'duplicate') {
            showToast(t('toast_dup_lead'), 'error');
            // Opcional: enfocar el campo duplicado (telefono o icc)
        } else {
            showToast(`Error de backend: ${response.message}`, 'error');
        }

    } catch (err) {
        // El error de red ya fue manejado en sendToBackend (guardado offline)
        if (err.message.includes('URL de GAS no configurada')) return; // Ya se mostró toast
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

/** Carga leads de localStorage. */
function getLeads() {
    try { return JSON.parse(localStorage.getItem(LEADS_KEY)) || []; } catch { return []; }
}
/** Carga leads OFFLINE. */
function getOfflineLeads() {
    try { return JSON.parse(localStorage.getItem(OFFLINE_KEY)) || []; } catch { return []; }
}
/** Guarda leads OFFLINE. */
function setOfflineLeads(arr) {
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(arr));
    // Notificación o indicador de leads offline pendientes
}

/** Guarda una ficha localmente (para visualización rápida). */
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

/** Guarda una ficha para sincronizar después. */
function saveOffline(record) {
    const offlineLeads = getOfflineLeads();
    offlineLeads.push(record);
    setOfflineLeads(offlineLeads);
}

/**
 * Intenta sincronizar todos los leads offline con el backend.
 */
async function syncOfflineLeads() {
    const offlineLeads = getOfflineLeads();
    if (offlineLeads.length === 0) {
        showToast('No hay leads pendientes por sincronizar.', 'info');
        return;
    }

    showToast(`Sincronizando ${offlineLeads.length} leads pendientes...`, 'info');

    const successfulSyncs = [];
    for (const record of offlineLeads) {
        try {
            // Se asume que el backend detecta si es un lead offline y le da un trato especial si es necesario
            const response = await sendToBackend(record);
            if (response.status === 'success') {
                successfulSyncs.push(record);
            } else {
                // Si falla (ej. duplicado), lo dejamos para una revisión manual o lo ignoramos.
                console.warn(`Lead offline fallido (${record.telefono}): ${response.message}`);
            }
        } catch (e) {
            // Error de red/servidor. Parar y dejar el resto de leads para el próximo intento.
            showToast('Sincronización interrumpida por error de red.', 'error');
            break;
        }
    }

    // Remover los leads sincronizados
    const remainingLeads = offlineLeads.filter(
        lead => !successfulSyncs.includes(lead)
    );
    setOfflineLeads(remainingLeads);

    if (successfulSyncs.length > 0) {
        showToast(`Sincronización completa: ${successfulSyncs.length} leads enviados.`, 'success');
    }
}

/** Renderiza la lista de leads locales. */
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
    btnScanICC.disabled = true;
}

/**
 * Inicializa la cámara para escanear.
 */
async function startScan() {
    show('scanOverlay');
    showModal('scanModal');
    $('scanResultText').textContent = '';

    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        scanVideo.srcObject = stream;
        scanVideo.play();
        startDetectionLoop();
    } catch (err) {
        showToast('No se pudo acceder a la cámara. Revisa permisos.', 'error');
        console.error("Error al acceder a la cámara:", err);
        closeScan();
    }
}

/**
 * Detiene la cámara y el escaneo.
 */
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

/**
 * Bucle de detección de código de barras.
 */
function startDetectionLoop() {
    if (!barcodeDetector) return;
    const detect = async () => {
        try {
            const barcodes = await barcodeDetector.detect(scanVideo);
            if (barcodes.length > 0) {
                const iccValue = onlyDigits(barcodes[0].rawValue);
                if (iccValue.length >= 20) {
                    $('icc').value = iccValue.slice(0, 20); // Asigna el ICC
                    $('scanResultText').textContent = 'ICC detectado: ' + iccValue.slice(0, 20);
                    showToast('ICC escaneado con éxito.', 'success');
                    closeScan();
                }
            }
        } catch (err) {
            // console.warn("Error de detección:", err);
        }
    };
    // Detección cada 500ms
    scanInterval = setInterval(detect, 500);
}

// =======================================================
// 🍿 MODALES Y UX
// =======================================================

/** Muestra un modal con animación. */
function showModal(id) {
    const modalEl = $(id);
    modalEl.classList.remove('modal-exit-active');
    modalEl.classList.add('modal-enter-active');
}

/** Oculta un modal con animación. */
function hideModal(id) {
    const modalEl = $(id);
    modalEl.classList.remove('modal-enter-active');
    modalEl.classList.add('modal-exit-active');
    // Usar timeout para asegurar que la animación termine
    setTimeout(() => {
        if (id === 'ticketModal') hide('ticketOverlay');
        if (id === 'scanModal') hide('scanOverlay');
    }, 300);
}

/** Abre el modal de ticket (resumen). */
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
    // 1. Inicializar tema y I18n
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    applyI18n(currentLang);

    // 2. Cargar configuración dinámica de encuesta
    const config = await getSurveyConfig();
    if (config.status === 'success') {
        surveyConfig = config.data;
    } else {
        // Fallback a un config interno si GAS falla al inicio
        surveyConfig = {
            companies: ['Movistar', 'AT&T', 'Unefon', 'Telcel'],
            questions: {
                // Estructura de preguntas hardcodeada como ejemplo si falla la carga dinámica
                'Movistar': [
                    { q: '¿Se te corta la señal en interiores?', options: [{ t: 'Sí', w: 1.0 }, { t: 'A veces', w: 0.6 }, { t: 'No', w: 0.2 }] },
                    { q: '¿Tus datos rinden menos de lo esperado?', options: [{ t: 'Sí', w: 1.0 }, { t: 'A veces', w: 0.6 }, { t: 'No', w: 0.2 }] },
                ],
                // ... el resto de compañías con preguntas (se recomienda definir solo el mínimo necesario)
            }
        };
        showToast('Advertencia: Encuesta no pudo cargar de la nube. Usando datos internos.', 'warning');
    }

    // 3. Renderizar leads locales
    renderLeads();

    // 4. Registrar Service Worker (para PWA/Offline)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').then(registration => {
                // console.log('SW registrado: ', registration);
            }).catch(registrationError => {
                console.log('SW falló: ', registrationError);
            });
        });
    }

    // 5. Configurar Event Listeners

    // Navegación
    $('btnStartSurvey').addEventListener('click', () => {
        hide('portada'); show('encuestaCard'); hide('fichaCard');
        renderCompanyButtons();
        resetForm(); // Resetear formulario al iniciar encuesta
    });
    $('btnGoCapture').addEventListener('click', () => {
        hide('portada'); show('fichaCard'); hide('encuestaCard');
        resetForm(); // Resetear formulario al ir a captura
    });
    $('btnAceptaCambio').addEventListener('click', () => {
        hide('encuestaCard'); show('fichaCard');
        // Pre-seleccionar Telcel en el carrier si venía de otra compañía
        if (currentCompany && currentCompany !== 'Telcel') {
            $('carrier').value = currentCompany;
        }
        $('estatus').value = 'Portabilidad iniciada'; // Estatus inicial
    });
    $('btnNoAcepta').addEventListener('click', () => {
        showToast('Gracias por tu tiempo. Volviendo a la portada.', 'info');
        setTimeout(() => { show('portada'); hide('encuestaCard'); hide('fichaCard'); resetForm(); }, 1000);
    });
    $('btnIrFicha').addEventListener('click', () => { hide('encuestaCard'); show('fichaCard'); });
    $('btnBackHome').addEventListener('click', () => { show('portada'); hide('encuestaCard'); hide('fichaCard'); resetForm(); });
    $('btnCloseTicket').addEventListener('click', () => { hideModal('ticketModal'); setTimeout(() => { hide('ticketOverlay'); resetForm(); show('portada'); }, 300); });

    // Modales / Escaneo
    $('btnScanICC').addEventListener('click', startScan);
    $('btnCloseScan').addEventListener('click', closeScan);
    $('btnStopScan').addEventListener('click', closeScan); // También detiene el bucle

    // Local Storage
    $('btnClearLeads').addEventListener('click', () => {
        localStorage.removeItem(LEADS_KEY);
        renderLeads();
        showToast('Lista local limpiada.', 'info');
    });

    // UX / CURP Autocompletar
    $('curp').addEventListener('input', attemptAutoFillPob);
    $('helpButton').addEventListener('click', () => {
        showToast(t('toast_help_tip'), 'info');
    });

    // Tema y Lenguaje
    $('btnToggleTheme').addEventListener('click', toggleTheme);
    $('btnToggleLang').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyI18n(currentLang);
    });
});

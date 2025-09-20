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
    survey_subtitle: 'Sele
  },
  en: {
    header_subtitle: 'Profiling and Capture Flow',
    welcome_title: 'Welcome',

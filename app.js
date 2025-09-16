/* =================== CONFIG: URL FIJA A TU WEB APP =================== */
const SHEETS_WEBAPP_URL =
  'https://script.google.com/macros/s/AKfycby1iL0kw-m2IUmlS1nnDPnQe4HVyLK6D7CfaxgXhDdCLCu2ssLnLAdhrhd__PO4q7sFfg/exec';

/* =================== (tu config de compañías tal como la tenías) =================== */
// … todo el objeto carriers que ya tienes …

/* =================== UTILIDADES / SELECTORES =================== */
const el = id => document.getElementById(id);

// Bloques principales
const startBlock = el('startBlock');
const mainBlock  = el('mainBlock');
const btnStart   = el('btnStart');

// Campos de lead rápido / encuesta
const nombre   = el('nombre');
const telefono = el('telefono');
const carrier  = el('carrier');

const telcelNote         = el('telcelNote');
const questionsBlock     = el('questionsBlock');
const questionsContainer = el('questionsContainer');
const scoreBox           = el('scoreBox');
const pitchBox           = el('pitchBox');
const weakList           = el('weakList');

const btnAccept   = el('btnAccept');
const btnReject   = el('btnReject');
const btnSaveLead = el('btnSaveLead');

// Captura
const captureBlock        = el('captureBlock');
const capCurpOnlyRadios   = document.querySelectorAll('.capMode'); // si los tienes
const capFull             = el('capFull');                          // si lo usas
const capNombreCompleto   = el('capNombreCompleto');                // si lo usas
const capFechaNacimiento  = el('capFechaNacimiento');
const capEntidadNacimiento= el('capEntidadNacimiento');
const capLugarNacimiento  = el('capLugarNacimiento');
const capCurp             = el('capCurp');
const capICC              = el('capICC');
const capNip              = el('capNip');
const promotorInput       = el('promotor'); // opcional, si existe en tu HTML

const btnCancelCapture = el('btnCancelCapture');
const btnSaveCapture   = el('btnSaveCapture');

// Export (si lo tienes)
const exportCsv = el('exportCsv');

/* =================== ESTADO =================== */
let currentScore  = 0;
let currentCarrier= null;
let leads         = [];
let currentMode   = 'full'; // si manejas modos

/* =================== INIT =================== */
document.addEventListener('DOMContentLoaded', () => {
  if (btnStart) btnStart.addEventListener('click', startApp);

  carrier.addEventListener('change', handleCarrierChange);

  if (btnAccept)   btnAccept.addEventListener('click', () => handleResult(true));
  if (btnReject)   btnReject.addEventListener('click', () => handleResult(false));
  if (btnSaveLead) btnSaveLead.addEventListener('click', showCapture);

  if (btnCancelCapture) btnCancelCapture.addEventListener('click', hideCapture);
  if (btnSaveCapture)   btnSaveCapture.addEventListener('click', saveCapture);

  if (exportCsv) exportCsv.addEventListener('click', exportToCsv);

  // Cambios de modo (si los usas)
  capCurpOnlyRadios.forEach(r =>
    r.addEventListener('change', () => {
      currentMode = r.value;
      updateCaptureMode();
    })
  );

  // Validaciones
  if (telefono) {
    telefono.addEventListener('input', () => {
      telefono.value = telefono.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  if (capNip) {
    capNip.addEventListener('input', () => {
      capNip.value = capNip.value.replace(/\D/g, '').slice(0, 4);
    });
  }

  if (capICC) {
    capICC.addEventListener('input', () => {
      capICC.value = capICC.value.replace(/\D/g, '').slice(0, 20);
    });
  }

  // Cargar datos locales
  loadSavedLeads();
});

/* =================== NAVEGACIÓN / ENCUESTA =================== */
function startApp(){
  if (startBlock) startBlock.classList.add('hidden');
  if (mainBlock)  { mainBlock.classList.remove('hidden'); mainBlock.classList.add('fade-in'); }
}

function handleCarrierChange(){
  currentCarrier = carrier.value;

  if (currentCarrier === 'Telcel'){
    telcelNote?.classList.remove('hidden');
    questionsBlock?.classList.add('hidden');
    updateWeaknesses(currentCarrier);
    return;
  } else {
    telcelNote?.classList.add('hidden');
  }

  if (!carriers[currentCarrier]){
    questionsBlock?.classList.add('hidden');
    return;
  }

  questionsBlock?.classList.remove('hidden');
  renderQuestions();
  updateWeaknesses(currentCarrier);
}

function renderQuestions(){
  questionsContainer.innerHTML = '';
  currentScore = 0;
  updateScore();

  const qs = carriers[currentCarrier]?.questions || [];
  qs.forEach(q => {
    const div = document.createElement('div');
    div.className = 'p-3 rounded-xl border';
    div.innerHTML = `
      <div class="font-medium mb-2">${q.text}</div>
      <div class="flex flex-wrap gap-2">
        ${q.options.map((opt, i) =>
          `<button class="btn-option px-3 py-1.5 rounded-lg border text-sm"
                   data-weight="${i===0?q.weight: i===1?q.weight*0.5:0}">
             ${opt}
           </button>`
        ).join('')}
      </div>`;
    div.querySelectorAll('.btn-option').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        div.querySelectorAll('.btn-option').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        currentScore += parseFloat(btn.dataset.weight);
        updateScore();
      });
    });
    questionsContainer.appendChild(div);
  });
}

function updateScore(){
  scoreBox.textContent = currentScore.toFixed(2);
  if (currentCarrier && carriers[currentCarrier]?.pitch){
    pitchBox.textContent = carriers[currentCarrier].pitch(currentScore);
  } else {
    pitchBox.textContent = 'Selecciona compañía y responde para ver recomendación.';
  }
}

function updateWeaknesses(name){
  weakList.innerHTML = '';
  const list = carriers[name]?.weaknesses || [];
  if (list.length === 0){
    const li = document.createElement('li');
    li.className = 'text-sm opacity-70';
    li.textContent = 'Sin debilidades específicas.';
    weakList.appendChild(li);
    return;
  }
  list.forEach(w=>{
    const li = document.createElement('li');
    li.className = 'text-sm';
    li.textContent = w;
    weakList.appendChild(li);
  });
}

/* =================== LEAD / CAPTURA =================== */
function handleResult(accepted){
  const lead = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    nombre:   nombre?.value || '',
    telefono: telefono?.value || '',
    carrier:  currentCarrier || '',
    score:    currentScore,
    status:   accepted ? 'Aceptó' : 'Rechazó'
  };
  leads.push(lead);
  saveLeads();
  renderLeads();

  // reset mínimos
  if (nombre) nombre.value = '';
  if (telefono) telefono.value = '';
  if (carrier) carrier.value = '';
  currentCarrier = null;
  questionsBlock?.classList.add('hidden');
  telcelNote?.classList.add('hidden');
  currentScore = 0;
  updateScore();
}

function showCapture(){ captureBlock?.classList.remove('hidden'); }
function hideCapture(){ captureBlock?.classList.add('hidden'); }

function updateCaptureMode(){
  if (!capFull) return;
  if (currentMode === 'curp') capFull.classList.add('hidden');
  else                        capFull.classList.remove('hidden');
}

async function saveCapture(){
  // Validaciones básicas (ajústalas a tu formulario real)
  if (!carrier.value){ alert('Selecciona la compañía'); carrier.focus(); return; }
  if (!telefono?.value || telefono.value.length !== 10){ alert('Teléfono de 10 dígitos'); telefono.focus(); return; }
  if (!capICC?.value || capICC.value.length < 15){ alert('ICC incompleto'); capICC.focus(); return; }
  if (!capNip?.value || capNip.value.length !== 4){ alert('NIP de 4 dígitos'); capNip.focus(); return; }

  // Estructura de la captura
  const captureData = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    // lead básico (si usas estos campos arriba)
    nombre:   nombre?.value || '',
    telefono: telefono?.value || '',
    carrier:  carrier.value || '',

    // datos de captura
    captureMode:        currentMode,
    nombreCompleto:     capNombreCompleto?.value || '',
    fechaNacimiento:    capFechaNacimiento?.value  || '',
    entidadNacimiento:  capEntidadNacimiento?.value|| '',
    lugarNacimiento:    capLugarNacimiento?.value  || '',
    curp:               capCurp?.value || '',
    icc:                capICC?.value || '',
    nip:                capNip?.value || '',
    promotor:           promotorInput?.value || ''
  };

  // Guarda local (para historial lateral)
  const captures = JSON.parse(localStorage.getItem('portabilityCaptures') || '[]');
  captures.push(captureData);
  localStorage.setItem('portabilityCaptures', JSON.stringify(captures));

  // Añade a leads
  leads.push({
    id: captureData.id,
    timestamp: captureData.timestamp,
    nombre: captureData.nombre,
    telefono: captureData.telefono,
    carrier: captureData.carrier,
    score:    currentScore,
    status:   'Portabilidad iniciada'
  });
  saveLeads();
  renderLeads();

  // ======= AQUÍ SE ENVÍA A GOOGLE SHEETS =======
  const sheetRecord = {
    // Usa solo los campos que tu Apps Script espera
    fecha:    captureData.timestamp,
    numero:   captureData.telefono,
    nombre:   captureData.nombre,
    apPaterno: '',         // rellénalo si tienes campos separados
    apMaterno: '',         // idem
    curp:     captureData.curp || '',
    icc:      captureData.icc,
    nip:      captureData.nip,
    carrier:  captureData.carrier,
    // si también guardas estos (no estorban si tu doPost los ignora):
    promotor: captureData.promotor,
    fechaNacimiento:   captureData.fechaNacimiento,
    entidadNacimiento: captureData.entidadNacimiento,
    lugarNacimiento:   captureData.lugarNacimiento
  };
  pushToSheets(sheetRecord);

  // Reset de captura mínima
  hideCapture();
  if (capNombreCompleto)    capNombreCompleto.value = '';
  if (capFechaNacimiento)   capFechaNacimiento.value = '';
  if (capEntidadNacimiento) capEntidadNacimiento.value = '';
  if (capLugarNacimiento)   capLugarNacimiento.value = '';
  if (capCurp)              capCurp.value = '';
  if (capICC)               capICC.value = '';
  if (capNip)               capNip.value = '';
  if (promotorInput)        promotorInput.value = '';

  alert('Datos guardados. (También se enviaron a Sheets)');
}

/* ====== POST A APPS SCRIPT ====== */
async function pushToSheets(record){
  try{
    await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      mode:   'no-cors', // evita CORS; la respuesta será "opaque"
      headers:{ 'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8' },
      body:   'payload=' + encodeURIComponent(JSON.stringify(record))
    });
  }catch(err){
    console.error('Error enviando a Sheets:', err);
  }
}

/* =================== PERSISTENCIA LOCAL =================== */
function saveLeads(){ localStorage.setItem('leads', JSON.stringify(leads)); }

function loadSavedLeads(){
  const saved = localStorage.getItem('leads');
  if (saved){ leads = JSON.parse(saved); renderLeads(); }
}

function renderLeads(){
  leadsLog.innerHTML = '';
  if (leads.length === 0){
    leadsLog.innerHTML = '<div class="text-sm opacity-60">Aún no hay registros.</div>';
    return;
  }
  [...leads].reverse().slice(0,10).forEach(lead=>{
    const div = document.createElement('div');
    div.className = 'p-3 rounded-xl border text-sm bg-white';
    div.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="font-medium">${lead.nombre || 'Anónimo'}</div>
        <div class="text-xs opacity-70">${lead.timestamp}</div>
      </div>
      <div class="mt-1">${lead.telefono || '—'} · ${lead.carrier || ''}</div>
      <div class="flex justify-between items-center mt-2">
        <span class="px-2 py-1 rounded-full text-xs ${
          lead.status==='Portabilidad iniciada' ? 'bg-blue-100 text-blue-800'
        : lead.status==='Aceptó'               ? 'bg-emerald-100 text-emerald-800'
                                               : 'bg-rose-100 text-rose-800'}">${lead.status}</span>
        <span class="text-xs">${lead.score!=null?('Score: '+lead.score.toFixed(2)) : ''}</span>
      </div>`;
    leadsLog.appendChild(div);
  });
}

/* =================== EXPORT CSV (opcional) =================== */
function exportToCsv(){
  if (leads.length===0){ alert('No hay datos para exportar'); return; }
  let csv = 'Fecha,Nombre,Teléfono,Compañía,Puntuación,Resultado\n';
  leads.forEach(l=>{
    csv += `"${l.timestamp}","${l.nombre||''}","${l.telefono||''}","${l.carrier||''}","${l.score||0}","${l.status||''}"\n`;
  });
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `leads-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

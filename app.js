// Configuración de compañías
const carriers = {
  Telcel: { 
    disabled: true, 
    note: "Si ya es Telcel, cierra en registro y deriva a upsell/recargas.",
    weaknesses: ["Cliente actual - enfoque en upsell/recargas"]
  },
  Movistar: {
    weaknesses: ["Señal inestable en interiores o subterráneo", "Baja velocidad en hora pico", "Atención a clientes lenta"],
    questions: [
      { id: "cobertura", text: "¿Tu señal se cae en interiores o en el metro?", options: ["Sí, seguido", "A veces", "No"], weight: 2 },
      { id: "velocidad", text: "En horas pico, ¿tu internet baja mucho de velocidad?", options: ["Sí", "A veces", "No"], weight: 1.5 },
      { id: "pago", text: "¿Pagas más de $200 al mes por tus datos?", options: ["Sí", "No"], weight: 1 }
    ],
    pitch: s => `Traes Movistar. Con Telcel 5G podrías mejorar cobertura y mantener datos estables. ${s >= 3 ? "Te ofrezco portabilidad hoy con bono y chip sin costo en el módulo." : "Si quieres probar, tengo una promo de datos/recargas que te puede convenir."}`
  },
  "AT&T": {
    weaknesses: ["Límites de velocidad en algunos planes", "Cobertura irregular fuera de zonas urbanas"],
    questions: [
      { id: "viajes", text: "¿Sales seguido a zonas con poca cobertura (carreteras/pueblos)?", options: ["Sí", "Rara vez", "No"], weight: 1.5 },
      { id: "estable", text: "¿Tu conexión se mantiene estable en video/WhatsApp?", options: ["No", "A veces", "Sí"], weight: 2 }
    ],
    pitch: s => `Con AT&T, si batallas en estabilidad o foráneos, Telcel suele rendir mejor. ${s >= 2.5 ? "Te hago el cambio en 15 minutos, conservas tu número." : "Puedo armarte paquete de recargas para probar la red sin compromiso."}`
  },
  Unefon: {
    weaknesses: ["Velocidad variable por saturación", "Soporte limitado"],
    questions: [
      { id: "datos", text: "¿Se te acaban los datos antes de fin de semana?", options: ["Sí", "A veces", "No"], weight: 2 },
      { id: "apps", text: "¿WhatsApp/Instagram te cargan lento en las tardes?", options: ["Sí", "A veces", "No"], weight: 1.5 }
    ],
    pitch: s => `Si estás en Unefon y te faltan datos o velocidad, te paso a Telcel con más rendimiento real. ${s >= 2.5 ? "Hoy hay chip sin costo y bono por portabilidad." : "También tengo recargas combo más rendidoras."}`
  },
  Bait: {
    weaknesses: ["Cobertura dependiente de Altán, huecos en interiores", "Variabilidad de velocidad"],
    questions: [
      { id: "interiores", text: "¿En interiores pierdes señal o baja a E/3G?", options: ["Sí", "A veces", "No"], weight: 2 },
      { id: "llamadas", text: "¿Tus llamadas se entrecortan seguido?", options: ["Sí", "A veces", "No"], weight: 1.2 }
    ],
    pitch: s => `Bait funciona, pero si en tu zona hay huecos, Telcel te resuelve mejor. ${s >= 2.5 ? "Te gestiono el cambio ahora mismo." : "Te armo paquete de prueba para que compares."}`
  },
  "OXXO Cel": {
    weaknesses: ["Cobertura y soporte básicos"],
    questions: [
      { id: "urgente", text: "¿Dependes del celular para trabajo o escuela todos los días?", options: ["Sí", "A veces", "No"], weight: 2 }
    ],
    pitch: s => `Si tu uso es crítico, conviene migrar a Telcel por estabilidad y soporte. ${s >= 1.5 ? "Hacemos el trámite en 15 min." : "Tengo una promo de recargas para que pruebes."}`
  },
  Virgin: {
    weaknesses: ["Velocidad variable", "Cobertura media"],
    questions: [
      { id: "streaming", text: "¿Te corta Netflix/TikTok en HD?", options: ["Sí", "A veces", "No"], weight: 1.8 },
      { id: "costos", text: "¿Pagas más de lo planeado por recargas extras?", options: ["Sí", "No"], weight: 1.2 }
    ],
    pitch: s => `Si te está saliendo caro o inestable, con Telcel puedes ganar estabilidad y rendimiento. ${s >= 2 ? "Portamos hoy con bono." : "Te doy combo de prueba sin compromiso."}`
  }
};

// Utilidad para seleccionar elementos
const el = id => document.getElementById(id);

// Selección de elementos
const startBlock = el('startBlock');
const mainBlock = el('mainBlock');
const btnStart = el('btnStart');
const nombre = el("nombre");
const telefono = el("telefono");
const carrier = el("carrier");
const telcelNote = el("telcelNote");
const questionsBlock = el("questionsBlock");
const questionsContainer = el("questionsContainer");
const scoreBox = el("scoreBox");
const pitchBox = el("pitchBox");
const weakList = el("weakList");
const leadsLog = el("leadsLog");
const btnAccept = el("btnAccept");
const btnReject = el("btnReject");
const btnSaveLead = el("btnSaveLead");
const captureBlock = el("captureBlock");
const capFull = el('capFull');
const capCurpOnlyRadios = document.querySelectorAll('.capMode');
const capNombreCompleto = el("capNombreCompleto");
const capFechaNacimiento = el("capFechaNacimiento");
const capEntidadNacimiento = el("capEntidadNacimiento");
const capLugarNacimiento = el("capLugarNacimiento");
const capCurp = el("capCurp");
const capICC = el("capICC");
const capNip = el("capNip");
const btnCancelCapture = el("btnCancelCapture");
const btnSaveCapture = el("btnSaveCapture");
const exportCsv = el("exportCsv");

// Variables de estado
let currentScore = 0;
let currentCarrier = null;
let leads = [];
let currentMode = 'full';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Event listeners
  btnStart.addEventListener('click', startApp);
  carrier.addEventListener('change', handleCarrierChange);
  btnAccept.addEventListener('click', () => handleResult(true));
  btnReject.addEventListener('click', () => handleResult(false));
  btnSaveLead.addEventListener('click', showCapture);
  btnCancelCapture.addEventListener('click', hideCapture);
  btnSaveCapture.addEventListener('click', saveCapture);
  exportCsv.addEventListener('click', exportToCsv);
  
  // Event listeners para modo de captura
  capCurpOnlyRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      currentMode = radio.value;
      updateCaptureMode();
    });
  });
  
  // Validación de teléfono
  telefono.addEventListener('input', () => {
    telefono.value = telefono.value.replace(/\D/g, '').slice(0, 10);
  });
  
  // Validación de NIP
  capNip.addEventListener('input', () => {
    capNip.value = capNip.value.replace(/\D/g, '').slice(0, 4);
  });
  
  // Cargar leads guardados
  loadSavedLeads();
});

// Funciones principales
function startApp() {
  startBlock.classList.add('hidden');
  mainBlock.classList.remove('hidden');
  mainBlock.classList.add('fade-in');
}

function handleCarrierChange() {
  currentCarrier = carrier.value;
  
  // Mostrar nota especial para Telcel
  if (currentCarrier === "Telcel") {
    telcelNote.classList.remove('hidden');
    questionsBlock.classList.add('hidden');
    updateWeaknesses(currentCarrier);
    return;
  } else {
    telcelNote.classList.add('hidden');
  }
  
  // Verificar si la compañía existe en la configuración
  if (!carriers[currentCarrier]) {
    questionsBlock.classList.add('hidden');
    return;
  }
  
  // Mostrar preguntas y debilidades
  questionsBlock.classList.remove('hidden');
  renderQuestions();
  updateWeaknesses(currentCarrier);
}

function renderQuestions() {
  questionsContainer.innerHTML = '';
  currentScore = 0;
  updateScore();
  
  const questions = carriers[currentCarrier]?.questions || [];
  
  questions.forEach(q => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'p-3 rounded-xl border';
    questionDiv.innerHTML = `
      <div class="font-medium mb-2">${q.text}</div>
      <div class="flex flex-wrap gap-2">
        ${q.options.map((opt, i) => 
          `<button class="btn-option px-3 py-1.5 rounded-lg border text-sm" data-weight="${i === 0 ? q.weight : i === 1 ? q.weight * 0.5 : 0}">${opt}</button>`
        ).join('')}
      </div>
    `;
    
    // Añadir event listeners a los botones
    const buttons = questionDiv.querySelectorAll('.btn-option');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Quitar selección de otros botones en esta pregunta
        buttons.forEach(b => b.classList.remove('selected'));
        // Seleccionar este botón
        btn.classList.add('selected');
        
        // Actualizar puntuación
        const weight = parseFloat(btn.dataset.weight);
        currentScore += weight;
        updateScore();
      });
    });
    
    questionsContainer.appendChild(questionDiv);
  });
}

function updateScore() {
  scoreBox.textContent = currentScore.toFixed(2);
  
  // Actualizar pitch basado en la puntuación
  if (currentCarrier && carriers[currentCarrier]?.pitch) {
    pitchBox.textContent = carriers[currentCarrier].pitch(currentScore);
  } else {
    pitchBox.textContent = "Selecciona una compañía y responde las preguntas para ver recomendaciones.";
  }
}

function updateWeaknesses(carrierName) {
  weakList.innerHTML = '';
  
  if (carriers[carrierName]?.weaknesses) {
    carriers[carrierName].weaknesses.forEach(weakness => {
      const li = document.createElement('li');
      li.textContent = weakness;
      li.className = 'text-sm';
      weakList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Sin debilidades específicas identificadas.';
    li.className = 'text-sm opacity-70';
    weakList.appendChild(li);
  }
}

function handleResult(accepted) {
  const lead = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    nombre: nombre.value,
    telefono: telefono.value,
    carrier: currentCarrier,
    score: currentScore,
    status: accepted ? "Aceptó" : "Rechazó"
  };
  
  leads.push(lead);
  saveLeads();
  renderLeads();
  
  // Limpiar formulario para nuevo lead
  nombre.value = '';
  telefono.value = '';
  carrier.value = '';
  currentCarrier = null;
  questionsBlock.classList.add('hidden');
  telcelNote.classList.add('hidden');
  currentScore = 0;
  updateScore();
}

function showCapture() {
  captureBlock.classList.remove('hidden');
}

function hideCapture() {
  captureBlock.classList.add('hidden');
}

function updateCaptureMode() {
  if (currentMode === 'curp') {
    capFull.classList.add('hidden');
  } else {
    capFull.classList.remove('hidden');
  }
}

function saveCapture() {
  // Validación básica
  if (currentMode === 'full') {
    if (!capNombreCompleto.value || !capFechaNacimiento.value || !capEntidadNacimiento.value || !capCurp.value || !capICC.value || !capNip.value) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
  } else {
    if (!capCurp.value || !capICC.value || !capNip.value) {
      alert('Por favor completa CURP, ICC y NIP');
      return;
    }
  }
  
  const captureData = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    nombre: nombre.value,
    telefono: telefono.value,
    carrier: currentCarrier,
    captureMode: currentMode,
    nombreCompleto: capNombreCompleto.value,
    fechaNacimiento: capFechaNacimiento.value,
    entidadNacimiento: capEntidadNacimiento.value,
    lugarNacimiento: capLugarNacimiento.value,
    curp: capCurp.value,
    icc: capICC.value,
    nip: capNip.value
  };
  
  // Guardar en localStorage
  let captures = JSON.parse(localStorage.getItem('portabilityCaptures') || '[]');
  captures.push(captureData);
  localStorage.setItem('portabilityCaptures', JSON.stringify(captures));
  
  // Añadir a leads
  leads.push({
    id: captureData.id,
    timestamp: captureData.timestamp,
    nombre: captureData.nombre,
    telefono: captureData.telefono,
    carrier: captureData.carrier,
    score: currentScore,
    status: "Portabilidad iniciada"
  });
  
  saveLeads();
  renderLeads();
  hideCapture();
  
  // Limpiar formulario de captura
  capNombreCompleto.value = '';
  capFechaNacimiento.value = '';
  capEntidadNacimiento.value = '';
  capLugarNacimiento.value = '';
  capCurp.value = '';
  capICC.value = '';
  capNip.value = '';
  
  alert('Datos de portabilidad guardados correctamente');
}

function saveLeads() {
  localStorage.setItem('leads', JSON.stringify(leads));
}

function loadSavedLeads() {
  const savedLeads = localStorage.getItem('leads');
  if (savedLeads) {
    leads = JSON.parse(savedLeads);
    renderLeads();
  }
}

function renderLeads() {
  leadsLog.innerHTML = '';
  
  if (leads.length === 0) {
    leadsLog.innerHTML = '<div class="text-sm opacity-60">Aún no hay registros.</div>';
    return;
  }
  
  // Mostrar los últimos 10 leads primero
  const recentLeads = [...leads].reverse().slice(0, 10);
  
  recentLeads.forEach(lead => {
    const leadDiv = document.createElement('div');
    leadDiv.className = 'p-3 rounded-xl border text-sm';
    leadDiv.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="font-medium">${lead.nombre || 'Sin nombre'}</div>
        <div class="text-xs opacity-70">${lead.timestamp}</div>
      </div>
      <div class="mt-1">${lead.telefono}</div>
      <div class="flex justify-between items-center mt-2">
        <span class="px-2 py-1 rounded-full text-xs ${lead.status === 'Aceptó' ? 'bg-emerald-100 text-emerald-800' : lead.status === 'Portabilidad iniciada' ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'}">${lead.status}</span>
        <span class="text-xs">${lead.carrier} → ${lead.score.toFixed(2)}</span>
      </div>
    `;
    leadsLog.appendChild(leadDiv);
  });
}

function exportToCsv() {
  if (leads.length === 0) {
    alert('No hay datos para exportar');
    return;
  }
  
  // Encabezados CSV
  let csv = 'Fecha,Nombre,Teléfono,Compañía,Puntuación,Resultado\n';
  
  // Datos
  leads.forEach(lead => {
    csv += `"${lead.timestamp}","${lead.nombre || ''}","${lead.telefono}","${lead.carrier}","${lead.score}","${lead.status}"\n`;
  });
  
  // Crear y descargar archivo
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `leads-encuesta-${new Date().toISOString().slice(0, 10)}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
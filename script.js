const SITE_TYPES = [
  { key: "institucional", name: "Institucional / Corporativa", pct: 12, pages: 6, sections: 8, notes: "Sitio de presencia de marca con servicios y contacto." },
  { key: "landing", name: "Landing de campaña", pct: 8, pages: 1, sections: 10, notes: "Orientada a conversión; copy + formularios + tracking." },
  { key: "blog", name: "Blog / Revista digital", pct: 15, pages: 10, sections: 12, notes: "Estructura de categorías, etiquetas y plantilla de contenido." },
  { key: "ecommerce-basico", name: "E-commerce estándar", pct: 28, pages: 15, sections: 14, notes: "Catálogo, carrito, checkout y medios de pago." },
  { key: "ecommerce-custom", name: "E-commerce productos personalizados", pct: 40, pages: 20, sections: 16, notes: "Configuradores, variantes complejas y lógica de personalización." },
  { key: "marketplace", name: "Marketplace multi-vendedor", pct: 55, pages: 25, sections: 18, notes: "Paneles de vendedor, comisiones, flujos administrativos." },
  { key: "cursos", name: "Plataforma de cursos / LMS", pct: 35, pages: 18, sections: 14, notes: "Módulos, progreso, lecciones y posibles evaluaciones." },
  { key: "membresia", name: "Membresía / Comunidad privada", pct: 30, pages: 14, sections: 12, notes: "Accesos por rol, contenido restringido y renovaciones." },
  { key: "saas", name: "SaaS / Aplicación web", pct: 60, pages: 30, sections: 20, notes: "Alta complejidad funcional y arquitectura de producto." },
  { key: "portfolio", name: "Portfolio profesional", pct: 10, pages: 5, sections: 9, notes: "Presentación visual y casos de trabajo." },
  { key: "inmobiliaria", name: "Inmobiliaria / Listados", pct: 26, pages: 16, sections: 14, notes: "Filtros, fichas de propiedades y formularios de interés." },
  { key: "reservas", name: "Reservas / Turnos", pct: 32, pages: 12, sections: 12, notes: "Calendarios, cupos, recordatorios y estados de reserva." },
  { key: "restaurant", name: "Restaurante / Delivery", pct: 22, pages: 9, sections: 11, notes: "Menús, pedidos, zonas de entrega y horarios." },
  { key: "portal-noticias", name: "Portal de noticias", pct: 27, pages: 20, sections: 15, notes: "Jerarquía editorial, portada dinámica y taxonomías." },
  { key: "ong", name: "ONG / Fundación", pct: 14, pages: 8, sections: 10, notes: "Donaciones, campañas y reportes de impacto." },
  { key: "evento", name: "Eventos / Conferencias", pct: 18, pages: 7, sections: 11, notes: "Agenda, speakers, entradas e integraciones de streaming." },
  { key: "educativo", name: "Sitio educativo institucional", pct: 20, pages: 12, sections: 13, notes: "Múltiples audiencias: alumnos, docentes y administrativos." },
  { key: "foro", name: "Foro / Comunidad", pct: 33, pages: 14, sections: 12, notes: "Moderación, perfiles, reputación y notificaciones." }
];

const FEATURES = [
  { key: "seo-tecnico", label: "SEO técnico avanzado", pct: 8, detail: "Arquitectura, metaetiquetas, schema y performance SEO." },
  { key: "copy", label: "Copywriting / UX writing", pct: 6, detail: "Textos estratégicos orientados a conversión." },
  { key: "multiidioma", label: "Multiidioma", pct: 12, detail: "Duplicación de contenido y control de idioma." },
  { key: "blog-module", label: "Módulo blog", pct: 5, detail: "Listado, detalle, categorías y autores." },
  { key: "crm", label: "Integración CRM", pct: 10, detail: "Sincronización de leads y embudos." },
  { key: "analytics", label: "Analytics + eventos", pct: 7, detail: "GA4, píxeles y eventos de conversión." },
  { key: "form-advanced", label: "Formularios avanzados", pct: 9, detail: "Validaciones, lógica condicional y automatizaciones." },
  { key: "chatbot", label: "Chatbot / WhatsApp API", pct: 7, detail: "Canal de atención e integración conversacional." },
  { key: "auth", label: "Registro / login / roles", pct: 14, detail: "Autenticación y permisos por tipo de usuario." },
  { key: "payments", label: "Pasarela de pagos", pct: 13, detail: "Checkout y conciliación de cobros." },
  { key: "subscriptions", label: "Suscripciones recurrentes", pct: 14, detail: "Planes, cobro periódico y cancelaciones." },
  { key: "dashboard", label: "Dashboard administrativo", pct: 18, detail: "KPIs, gestión y reportes internos." },
  { key: "search", label: "Búsqueda y filtros avanzados", pct: 11, detail: "Filtrado combinado y ordenación." },
  { key: "booking", label: "Reservas/citas con calendario", pct: 12, detail: "Disponibilidad en tiempo real y recordatorios." },
  { key: "perf", label: "Optimización de velocidad", pct: 10, detail: "Core Web Vitals y carga eficiente." },
  { key: "accessibility", label: "Accesibilidad (WCAG)", pct: 9, detail: "Contrastes, navegación teclado y semántica." },
  { key: "security", label: "Hardening de seguridad", pct: 11, detail: "Buenas prácticas, cabeceras y prevención." },
  { key: "migration", label: "Migración de sitio existente", pct: 10, detail: "Portado de contenido/estructura sin perder SEO." },
  { key: "products-import", label: "Carga masiva de productos", pct: 8, detail: "CSV/API e inventario inicial." },
  { key: "customizer", label: "Personalización de producto", pct: 16, detail: "Campos especiales, variaciones y reglas." },
  { key: "preview", label: "Previsualización de producto", pct: 20, detail: "Render previo de la personalización." },
  { key: "file-upload", label: "Subida de archivos del cliente", pct: 12, detail: "Archivos adjuntos por producto/pedido." },
  { key: "shipment-rules", label: "Reglas de envío avanzadas", pct: 9, detail: "Tarifas por zona, peso o volumen." },
  { key: "erp", label: "Integración ERP / inventario", pct: 15, detail: "Sincronización de stock y estados." },
  { key: "email-automation", label: "Automatización email", pct: 8, detail: "Secuencias transaccionales y marketing." },
  { key: "ab-testing", label: "A/B testing", pct: 7, detail: "Experimentos para conversión." }
];

const siteTypeEl = document.getElementById("siteType");
const billingModeEl = document.getElementById("billingMode");
const hourlyRateEl = document.getElementById("hourlyRate");
const complexityEl = document.getElementById("complexity");
const complexityValueEl = document.getElementById("complexityValue");
const pagesEl = document.getElementById("pages");
const sectionsEl = document.getElementById("sections");
const hoursPerPageEl = document.getElementById("hoursPerPage");
const hoursPerSectionEl = document.getElementById("hoursPerSection");
const pagesFieldEl = document.getElementById("pagesField");
const sectionsFieldEl = document.getElementById("sectionsField");
const featuresEl = document.getElementById("features");
const percentBreakdownEl = document.getElementById("percentBreakdown");
const totalsEl = document.getElementById("totals");
const siteTypeTableEl = document.getElementById("siteTypeTable");

function init() {
  loadSiteTypes();
  loadHourlyRates();
  loadFeatures();
  loadSiteTypeTable();
  bindEvents();
  applyDefaultsFromSiteType();
  calculate();
}

function loadSiteTypes() {
  SITE_TYPES.forEach((type) => {
    const option = document.createElement("option");
    option.value = type.key;
    option.textContent = `${type.name} (+${type.pct}%)`;
    siteTypeEl.append(option);
  });
}

function loadHourlyRates() {
  for (let rate = 10; rate <= 50; rate += 5) {
    const option = document.createElement("option");
    option.value = String(rate);
    option.textContent = `$${rate} / hora`;
    hourlyRateEl.append(option);
  }
  hourlyRateEl.value = "25";
}

function loadFeatures() {
  FEATURES.forEach((feature) => {
    const wrapper = document.createElement("label");
    wrapper.className = "feature-item";
    wrapper.innerHTML = `
      <input type="checkbox" data-feature="${feature.key}" data-pct="${feature.pct}" />
      <span>
        <strong>${feature.label} (+${feature.pct}%)</strong>
        <small>${feature.detail}</small>
      </span>
    `;
    featuresEl.append(wrapper);
  });
}

function loadSiteTypeTable() {
  siteTypeTableEl.innerHTML = SITE_TYPES.map((type) => `
    <tr>
      <td>${type.name}</td>
      <td>${type.pct}%</td>
      <td>${type.pages}</td>
      <td>${type.sections}</td>
      <td>${type.notes}</td>
    </tr>
  `).join("");
}

function bindEvents() {
  [siteTypeEl, billingModeEl, hourlyRateEl, pagesEl, sectionsEl, hoursPerPageEl, hoursPerSectionEl, complexityEl].forEach((el) => {
    el.addEventListener("input", () => {
      if (el === complexityEl) {
        complexityValueEl.textContent = `${complexityEl.value}%`;
      }
      if (el === billingModeEl) {
        toggleModeFields();
      }
      if (el === siteTypeEl) {
        applyDefaultsFromSiteType();
      }
      calculate();
    });
  });

  featuresEl.addEventListener("change", calculate);
}

function toggleModeFields() {
  const isLanding = billingModeEl.value === "landing";
  sectionsFieldEl.classList.toggle("hidden", !isLanding);
  pagesFieldEl.classList.toggle("hidden", isLanding);
}

function getSelectedType() {
  return SITE_TYPES.find((type) => type.key === siteTypeEl.value) || SITE_TYPES[0];
}

function applyDefaultsFromSiteType() {
  const selected = getSelectedType();
  pagesEl.value = selected.pages;
  sectionsEl.value = selected.sections;
  if (selected.key === "landing") {
    billingModeEl.value = "landing";
  }
  toggleModeFields();
}

function getVolumePct(units, mode) {
  if (mode === "landing") {
    if (units <= 6) return 0;
    if (units <= 10) return 6;
    if (units <= 14) return 12;
    return 18;
  }
  if (units <= 5) return 0;
  if (units <= 12) return 8;
  if (units <= 20) return 15;
  return 22;
}

function getFeaturePct() {
  return [...featuresEl.querySelectorAll("input[type='checkbox']:checked")]
    .reduce((sum, checkbox) => sum + Number(checkbox.dataset.pct || 0), 0);
}

function calculate() {
  const selectedType = getSelectedType();
  const mode = billingModeEl.value;
  const rate = Number(hourlyRateEl.value);
  const pages = Math.max(1, Number(pagesEl.value) || 1);
  const sections = Math.max(1, Number(sectionsEl.value) || 1);
  const hoursPerPage = Math.max(0.5, Number(hoursPerPageEl.value) || 0.5);
  const hoursPerSection = Math.max(0.5, Number(hoursPerSectionEl.value) || 0.5);
  const complexityPct = Number(complexityEl.value) || 0;
  const units = mode === "landing" ? sections : pages;

  const baseHours = mode === "landing"
    ? units * hoursPerSection
    : units * hoursPerPage;

  const typePct = selectedType.pct;
  const featurePct = getFeaturePct();
  const volumePct = getVolumePct(units, mode);
  const totalPct = typePct + featurePct + volumePct + complexityPct;

  const adjustedHours = baseHours * (1 + totalPct / 100);
  const estimatedAmount = adjustedHours * rate;

  renderBreakdown({ typePct, featurePct, volumePct, complexityPct, totalPct, units, mode, baseHours });
  renderTotals({ adjustedHours, rate, estimatedAmount, totalPct });
}

function renderBreakdown(data) {
  const unitLabel = data.mode === "landing" ? "secciones" : "páginas";
  percentBreakdownEl.innerHTML = `
    <li>Tipo de sitio: <strong class="value">+${data.typePct}%</strong></li>
    <li>Funcionalidades seleccionadas: <strong class="value">+${data.featurePct}%</strong></li>
    <li>Escala por cantidad de ${unitLabel} (${data.units}): <strong class="value">+${data.volumePct}%</strong></li>
    <li>Complejidad manual extra: <strong class="value">+${data.complexityPct}%</strong></li>
    <li>Incremento total aplicado: <strong class="value">+${data.totalPct}%</strong></li>
    <li>Horas base antes de porcentajes: <strong class="value">${data.baseHours.toFixed(1)} h</strong></li>
  `;
}

function renderTotals(data) {
  totalsEl.innerHTML = `
    <li>Tarifa horaria elegida: <strong class="value">$${data.rate}/h</strong></li>
    <li>Horas finales estimadas: <strong class="value">${data.adjustedHours.toFixed(1)} h</strong></li>
    <li>Presupuesto estimado: <strong class="value">$${data.estimatedAmount.toFixed(2)}</strong></li>
    <li>Modelo usado: base por horas + incremento porcentual acumulado de <strong class="value">${data.totalPct}%</strong>.</li>
  `;
}

init();

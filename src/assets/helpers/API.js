export const direcciones = [
    {
        name: 'R.Metropolitana',
        servicios: ['Presencial', 'Servicio 100 % online', 'Servicio Van / Oficina Móvil'],
        sucursales: [
            { name: 'Sur', content: '<b>Zona Sur</b>: Mall Paseo Quilin <br>Piso 1, Entrada Central Vespucio', tel: '56946373862' },
            { name: 'Poniente', content: '<b>Zona Poniente</b>: Autocred Cerrillos <br>Las Americas 375', tel: '56932592736' },
            { name: 'Norte', content: '<b>Zona Norte</b>: Mall Plaza Norte <br>Piso 2, Patio automotriz', tel: '56946478330' },
            { name: 'Oriente', content: '<b>Zona Oriente</b>: Apumanque <br>Piso 1, Entrada Apoquindo', tel: '56946456800' }
        ]
    },
    {
        name: 'Otras Regiones', servicios: ['Servicio 100 % online'],
    },
]

export const servicios = [
    { id: 2, name: "Financiamientos" },
    { id: 1, name: "Transferencias" },
    { id: 3, name: "Seguro" },
    { id: 4, name: "Tag" },
    { id: 5, name: "Traslado en VAN" },

];

const hoy = new Date().toLocaleDateString().split("-").reverse().join("-");

export let horas = [
    { id: 1, value: "09", name: "DE 9:00 A 11:00", fecha: new Date(`${hoy}T09:00:00`) },
    { id: 2, value: "11", name: "DE 11:00 A 13:00", fecha: new Date(`${hoy}T11:00:00`) },
    { id: 3, value: "15", name: "DE 15:00 A 17:00", fecha: new Date(`${hoy}T15:00:00`) },
    { id: 4, value: "17", name: "DE 17:00 A 19:00", fecha: new Date(`${hoy}T17:00:00`) },
];

export const empleoType = [
    { id: 1, value: "EMPLEO ACTUAL", name: "EMPLEO ACTUAL" },
    { id: 2, value: "JUBILACIÓN", name: "JUBILACIÓN" },
    { id: 3, value: "HONORARIOS", name: "HONORARIOS " },
    { id: 4, value: "HONORARIOS CONTRATO", name: "HONORARIOS CONTRATO" },
    { id: 5, value: "RETIRO SOCIEDAD", name: "RETIRO SOCIEDAD" },
    { id: 6, value: "OTRO", name: "OTRO" }
];
export const antiguedad = [
    { id: 1, value: 24, name: "MAYOR A 24 MESES" },
    { id: 2, value: 12, name: "MAYOR A 12 MESES " },
    { id: 3, value: 1, name: "MENOR A 12 MESES" },
];
export const gestion = [
    { id: 2, name: "Van - Oficina Movil" },
    { id: 1, name: "Modulo presencial" },
    { id: 3, name: "Ejecutivo Online" },
]
export const typeCredit = [
    { value: "conventional", name: "Credito Convencional" },
    { value: "smart", name: "Compra Inteligente" },
];
export const servicioCards = [
    { id: 2, name: "Oficina Móvil", src: "/img/yapo/van.png", content: "Solicita acompañamiento y traslado gratuito para ver el vehículo del vendedor." },
    { id: 1, name: "Financiamiento", src: "/img/yapo/financiamiento.png", content: "Paga con tarjeta o evalúa tu crédito en minutos y pagamos al instante al vendedor." },
    { id: 3, name: "Transferencia", src: "/img/yapo/transferencia.png", content: "Realiza la transferencia del vehículo de forma online, en nuestros módulos o Van." },
    { id: 4, name: "Seguro y Tag", src: "/img/yapo/seguro.png", content: "Al realizar la compra a través de nuestros servicios obtiene tu Tag y Seguro Automotriz." },
];

export const procedencias = [
    { id: 1, name: "yapo", procedenciaId: 61 },
    { id: 2, name: "google", procedenciaId: 110 },
    { id: 3, name: "Otras_Plataformas", procedenciaId: 109 },
    { id: 4, name: "Modulo", procedenciaId: 108 },
    { id: 5, name: "Referido", procedenciaId: 107 },
    { id: 6, name: "Contacto Directo", procedenciaId: 107 },
    { id: 7, name: "Instagram", procedenciaId: 106 },
    { id: 8, name: "Autocred", procedenciaId: 105 },
    { id: 9, name: "Forum", procedenciaId: 104 },
    { id: 10, name: "kovacs_promociones", procedenciaId: 102 },
    { id: 11, name: "Sitio_Web_Anfruns", procedenciaId: 68 },
    { id: 12, name: "BCI seguros", procedenciaId: 69 },
    { id: 13, name: "kia-konfidence", procedenciaId: 50 },
    { id: 14, name: "vitrinas", procedenciaId: 100 },
    { id: 15, name: "facebook", procedenciaId: 111 },
    { id: 16, name: "ingreso_manual", procedenciaId: 81 },
    { id: 17, name: "mercadolibre", procedenciaId: 72 },
    { id: 18, name: "emol", procedenciaId: 71 },
    { id: 19, name: "larruy", procedenciaId: 66 },
    { id: 20, name: "autolocal", procedenciaId: 62 },
    { id: 21, name: "chileautos", procedenciaId: 60 },
    { id: 22, name: "Destacados", procedenciaId: 24 },
    { id: 23, name: "Demotores", procedenciaId: 23 },
    { id: 24, name: "toyota-usados", procedenciaId: 22 },
    { id: 25, name: "autousado", procedenciaId: 21 },
    { id: 26, name: "mitula", procedenciaId: 20 },
    { id: 27, name: "volksWagen-usados", procedenciaId: 18 },
    { id: 28, name: "trovit", procedenciaId: 17 },
    { id: 29, name: "mercedesBenz-usados", procedenciaId: 16 },
    { id: 30, name: "nissan-usados", procedenciaId: 15 },
    { id: 31, name: "publimetro", procedenciaId: 14 },
    { id: 32, name: "chevrolet-usados", procedenciaId: 13 },
    { id: 33, name: "furgon-usados", procedenciaId: 11 },
    { id: 34, name: "hyundai-usados", procedenciaId: 10 },
    { id: 35, name: "camioneta-usada", procedenciaId: 9 },
    { id: 36, name: "jeepusados", procedenciaId: 8 },
    { id: 37, name: "comsercial-st", procedenciaId: 5 },
    { id: 38, name: "autosdelujo", procedenciaId: 4 },
    { id: 39, name: "autosonline", procedenciaId: 3 },
    { id: 40, name: "amotormas", procedenciaId: 2 },
    { id: 41, name: "amotor", procedenciaId: 1 },
    { id: 42, name: "comparaonline", procedenciaId: 114 },
    { id: 43, name: "youtube", procedenciaId: 113 },
    { id: 44, name: "Autoselect", procedenciaId: 115 },
    { id: 45, name: "Whatsapp", procedenciaId: 116 },


]


export const PASSWORD_RESET = import.meta.env.VITE_PASSWORD_RESET
export const BASE_URL = import.meta.env.VITE_BASE_URL
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

export const LOGIN_URL_TOKEN = (token) => BASE_URL + "/ingresar/" + token
export const LOGIN_URL = BASE_URL_API + "auth/login"
export const REGISTER_URL = BASE_URL_API + "auth/register"
export const REGISTER_URL_TWO = BASE_URL_API + "auth/register2"
export const CONTACT_URL = BASE_URL_API + "utilities/contacts/form"
export const MARCAS_URL = BASE_URL_API + "utilities/vehicles/brands"
export const CONDICIONES_URL = BASE_URL_API + "utilities/vehicles/conditions"
export const ANIOS_VEHICULOS_URL = BASE_URL_API + "utilities/others/years"
export const CUOTAS_URL = BASE_URL_API + "utilities/others/terms"
export const COLORS_URL = BASE_URL_API + "utilities/others/colors"
export const NACIONALIDAD_URL = BASE_URL_API + "utilities/others/nationalities"
export const RESIDENCIA_URL = BASE_URL_API + "utilities/others/residenceTypes"
export const CONTRATO_URL = BASE_URL_API + "utilities/others/employeeTypes"
export const PLAZO_CONTRATO_URL = BASE_URL_API + "utilities/others/contractTypes"
export const SERVICIOS_URL = BASE_URL_API + "utilities/others/services"
export const EVALUACION_URL_1 = BASE_URL_API + "external/evaluations/simulation"
export const EVALUACION_URL_2 = BASE_URL_API + "external/evaluations/quotation"
export const CARGA_DATA = BASE_URL_API + "utilities/users/exists?dni="
export const CALENDAR_INSERT_URL = "https://calendardev.autocred.cl/api/calendar/insertevent"
export const CALENDAR_GET_URL = "https://calendardev.autocred.cl/api/calendar/geteventday"


export const URL_GOGEMA = import.meta.env.VITE_URL_GOGEMA

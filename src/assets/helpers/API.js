export const direcciones = [
    {
        name: 'R.Metropolitana',
        servicios: ['Presencial', 'Servicio 100 % online', 'Servicio Van / Oficina Móvil'],
        sucursales: [
            { name: 'Sur', content: '<b>Zona Sur</b>: Mall Paseo Quilin <br>Piso 1, Entrada Central Vespucio', tel: '56946373862' },
            { name: 'Poniente', content: '<b>Zona Poniente</b>: Autocred Cerrillos <br>Las Americas 375', tel: '56932592736' },
            { name: 'Norte', content: '<b>Zona Norte</b>: Mall Plaza Norte <br>Piso 2, Patio automotriz', tel: '56946478330' },
            { name: 'Oriente', content: '<b>Zona Oriente</b>: Apumanque <br>Piso 1, Entrada Apoquindo', tel: '56946476368' }
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
    { id: 5, name: "Traslado VAN" },

];
export const empleoType = [
    { id: 1, value: "EMPLEOACTUAL", name: "EMPLEO ACTUAL" },
    { id: 2, value: "JUBILACION", name: "JUBILACIÓN" },
    { id: 3, value: "HONORARIOS", name: "HONORARIOS " },
    { id: 4, value: "HONORARIOSCONTRATO", name: "HONORARIOS CONTRATO" },
    { id: 5, value: "RETIROSOCIEDAD", name: "RETIRO SOCIEDAD" },
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


export const URL_GOGEMA = import.meta.env.VITE_URL_GOGEMA

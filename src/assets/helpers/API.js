export const direcciones = [
    { name: 'R.Metropolitana', direccion: 'Los Militares 5001, of 404, Las Condes', telefono: '+5692342423', correo: 'contacto@autocred.cl', },
    { name: 'Curico', direccion: 'Direccion Curico 1000', telefono: '+5692342423', correo: 'contacto@autocred.cl', },
    { name: 'Concepcion', direccion: 'Direccion Concepcion 1000', telefono: '+5692342423', correo: 'contacto@autocred.cl', },
    { name: 'Temuco', direccion: 'Direccion Temuco 1000', telefono: '+5692342423', correo: 'contacto@autocred.cl', },
    { name: 'Otras Regiones', direccion: 'Direccion Otras Regiones 1000', telefono: '+5692342423', correo: 'contacto@autocred.cl', },
]

export const servicios = [
    { id: 1, name: "Transferencias" },
    { id: 2, name: "Financiamientos" },
    { id: 3, name: "Seguro" },
    { id: 4, name: "Tag" },
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
    { id: 1, name: "Modulo presencial" },
    { id: 2, name: "Van - Oficina Movil" },
    { id: 3, name: "Ejecutivo Online" },
]

export const typeCredit = [
    { value: "conventional", name: "Credito Convencional" },
    { value: "smart", name: "Compra Inteligente" },
];




export const BASE_URL = "https://dev.autocred.cl"
export const LOGIN_URL_TOKEN = (token) => BASE_URL + "/ingresar/" + token
const BASE_URL_API = "https://dev.autocred.cl/api/"
export const LOGIN_URL = BASE_URL_API + "auth/login"
export const REGISTER_URL = BASE_URL_API + "auth/register"
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


//DEV
const TOKEN_GOGEMA = "i29UiVtwsDXyPP1rb0LDP9Mku1MRZaPG"
export const URL_GOGEMA = "https://sandboxapiflux.go-gema.com/v1/leads?access-token=" + TOKEN_GOGEMA

//Prod
// export const TOKEN_GOGEMA = "i29UiVtwsDXyPP1rb0LDP9Mku1MRZaPG"
// export const URL_GOGEMA = "https://sandboxapiflux.go-gema.com/v1/leads?access-token=" + TOKEN_GOGEMA
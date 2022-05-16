export const brandsCars = [
    { id: 1, name: "Chevrolet" },
    { id: 2, name: "Nissan" },
    { id: 3, name: "Suzuki" },
    { id: 4, name: "Hyundai" },
    { id: 5, name: "KIA" },
    { id: 6, name: "Renault" },
];

export const models = [
    { id: 1, name: "Chevrolet", models: [{ name: 'Sail' }, { name: 'Sonic' }, { name: 'Camaro' }] },
    { id: 2, name: "Nissan", models: [{ name: 'Versa' }, { name: 'Qasqai' }, { name: 'Trail' }] },
    { id: 3, name: "Suzuki", models: [{ name: 'Jimny' }, { name: 'Spresso' }, { name: 'Ignis' }] },
    { id: 4, name: "Hyundai", models: [{ name: 'Accent' }, { name: 'Tucson' }, { name: 'i10' }] },
    { id: 5, name: "KIA", models: [{ name: 'Sorento' }, { name: 'Morning' }, { name: 'Rio 5' }] },
    { id: 6, name: "Renault", models: [{ name: 'Clio' }, { name: 'Kwid' }, { name: 'Duster' }] },
];

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

export const gestion = [
    { id: 1, name: "Modulo presencial" },
    { id: 2, name: "Van - Oficina Movil" },
    { id: 3, name: "Ejecutivo Online" },
]

export const BASE_URL = "http://dev.autocred.cl/api/"
export const LOGIN_URL = BASE_URL + "auth/login"
export const CONTACT_URL = BASE_URL + "utilities/contacts/form"
export const MARCAS_URL = BASE_URL + "utilities/vehicles/brands"
export const CONDICIONES_URL = BASE_URL + "utilities/vehicles/conditions"
export const ANIOS_VEHICULOS_URL = BASE_URL + "utilities/others/years"
export const CUOTAS_URL = BASE_URL + "utilities/others/terms"
export const COLORS_URL = BASE_URL + "utilities/others/colors"
export const NACIONALIDAD_URL = BASE_URL + "utilities/others/nationalities"
export const RESIDENCIA_URL = BASE_URL + "utilities/others/residenceTypes"
export const CONTRATO_URL = BASE_URL + "utilities/others/employeeTypes"
export const PLAZO_CONTRATO_URL = BASE_URL + "utilities/others/contractTypes"
export const SERVICIOS_URL = BASE_URL + "utilities/others/services"



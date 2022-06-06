export const links = [
    { name: "Inicio", url: "/" },
    { name: "Vendedores", url: "/vendedores" },
    { name: "Compradores", url: "/compradores" },
    {
        name: "Servicios",
        url: "/servicios",
        sublink: [
            { name: "Transferencia", link: 'transferencias' },
            { name: "Financiamiento", link: 'financiamiento' },
            { name: "Tag", link: 'tag' },
            { name: "Seguro Automotriz", link: 'seguro' }
        ]
    },
    { name: "Preguntas Frecuentes", url: "/preguntas-frecuentes" },
    { name: "Nosotros", url: "/nosotros" },
];
export const featuresVendedores = [
    {
        name: "Crédito rápido",
        content:
            "En solo 7 minutos evalúa tu crédito con pago al vendedor.",
        img: "/img/icons/Iconos_Autocred_Magenta_Credito_rapido.png",
    },
    {
        name: "La mejor cuota",
        content:
            "Evaluación directa y en línea con financieras que facilitan tu gestión.",
        img: "/img/icons/Iconos_Autocred_Magenta_Mejor_cuota.png",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito de forma online o acércate a nuestros módulos.",
        img: "/img/icons/Iconos_Autocred_Magenta_proceso_online.png",
    },
    {
        name: "En tiempo record",
        content: "En solo 7 minutos realizamos tu primera evaluación.",
        img: "/img/icons/Iconos_Autocred_Magenta_Tiempo_record.png",
    },

];
export const featuresCompradoress = [
    {
        name: "Crédito rápido",
        content:
            "En solo 7 minutos evalúa tu crédito con pago al vendedor.",
        img: "/img/icons/Iconos_Autocred_Azul_credito_rapido.png",
    },
    {
        name: "La mejor cuota",
        content:
            "Evaluación directa y en línea con financieras que facilitan tu gestión.",
        img: "/img/icons/Iconos_Autocred_Azul_Mejor_cuota.png",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito de forma online o acércate a nuestros módulos.",
        img: "/img/icons/Iconos_Autocred_Azul_Proceso_online.png",
    },
    {
        name: "En tiempo record",
        content: "En solo 7 minutos realizamos tu primera evaluación",
        img: "/img/icons/Iconos_Autocred_Azul_Tiempo-_record.png",
    },

];
export const camposSimulacion = [
    "CAE",
    "Tasa de interés",
    "Monto total a financiar",
    "Costo total del crédito",
    "Valor última cuota (VFMG)"
]
export const cuotasSimulacion = [
    12, 24, 36, 48
]
export const valores = [
    { title: "Libertad", content: "<b>Vende y compra con toda libertad.</b> Te acompañamos durante todo el proceso. <b>Sin letra chica.</b>", src: "/img/valores/icono_transparencia.png" },
    { title: "Responsabilidad", content: "Asumimos la responsabilidad de que la compra o venta de tu auto usado se realice de la forma más transparente y justa.", src: "/img/valores/icono_responsabilidad.png" },
    { title: "Empatía", content: "Nos sentamos al lado tanto de compradores como vendedores, entendemos sus necesidades y ofrecemos siempre una solución efectiva.", src: "/img/valores/icono_empatia.png" },
    { title: "Honestidad", content: "Somos el mejor copiloto para hacer un buen negocio en la compra y venta de tu auto usado. Entregamos la información necesaria para que ambas partes sepan exactamente el negocio que realizan.", src: "/img/valores/icono_honestidad.png" }
]
export const questionsComprador = [
    {
        title: "¿Qué tipo de vehículo puedo comprar a través de Autocred?",
        content: "<b>Puedes comprar cualquier tipo de vehículo</b>. El único requisito es que tenga patente registrada."
    },
    {
        title: "¿En qué me ayuda Autocred para elegir el mejor auto?",
        content: "En Autocred queremos que tu compra sea una experiencia extraordinaria, por eso nuestros copilotos estarán para guiarte y apoyarte, resolviendo todas tus dudas sobre transferencias, historial del vehículo, Tag, y con diferentes alternativas de pago o financiamiento."
    },
    {
        title: "Si compro un vehículo usado, ¿Cuáles son los gastos que yo debería incluir, además del valor negociado con el vendedor?", content: "Además del valor del auto, debes considerar: <ul class='list-disc'><li>Registro Civil</li><ul class='list-disc'><li>Documentos necesarios para la inscripción:</li><ul class='pl-4'><li>CAV (Certificado de Anotaciones Vigentes)</li></ul></ul></li><li>Impuesto 1,5%</li><li>Notaría</li></ul>"
    },
    {
        title: "¿De qué manera puedo pagar el vehículo que me gusta?",
        content: "Puedes pagar con tarjeta de crédito/débito, transferencia bancaria y/o crédito automotriz. No recomendamos métodos como vale vista, dinero en efectivo o cheques."
    },
    {
        title: "¿Cómo hago para ver el auto que quiero de forma acompañada?",
        content: "<b>Nuestra Oficina Móvil</b> permite trasladarte en forma gratuita hacia el posible vendedor. Pueden también reunirse en alguno de nuestros puntos de encuentro ubicados en la región Metropolitana (Mall Paseo Quilín, Mall Plaza Norte, Apumanque y Autoselect)"
    },
    {
        title: "¿Cómo solicito un crédito?",
        content: "<ul class='list-disc pl-6'><li>Comienza con tu <b>Evaluación en Línea</b> mediante nuestro formulario de financiamiento</li><li>Acercarte a nuestros <b>Módulos Presenciales</b></li><li>Pide asesoría a nuestros <b>Ejecutivos Online</b> los 7 días de la semana.</li></ul>"
    },
    {
        title: "¿Cuánto tiempo demoro en ser evaluado para un crédito?",
        content: "Solo 7 minutos."
    }


];
export const questionsVendedor = [
    {
        title: "¿Debo pagar alguna comisión a Autocred por la venta de mi vehículo?",
        content: "<b>Ninguna.</b> En Autocred buscamos acompañarte en el proceso de venta de tu vehículo y <b>el valor del vehículo es tuyo.</b> Puedes publicar tu vehículo en cualquier plataforma y hacer la transferencia u otro servicio con nosotros."
    },
    {
        title: "¿Dónde se realiza la trasferencia de mi vehículo?",
        content: "La transferencia de tu vehículo se puede realizar en <b>nuestros módulos</b> (Revisa aquí el listado) <b>oficina móvil</b> o través de <b>nuestro canal online</b>."
    },
    {
        title: "¿Dónde puedo mostrar mi vehículo?",
        content: "<b>Eres libre de mostrarlo donde quieras</b>, y te acompañamos en todo el proceso. Con nuestro servicio de Oficina Móvil puedes trasladar en forma gratuita al posible comprador. <br> También contamos con 4 puntos de encuentro establecidos dentro de la Región Metropolitana, donde nuestros copilotos estarán listos para ayudarte: <br> <ul class='list-disc pl-6'><li>Mall Paseo Quilín</li><li>Mall Plaza Norte</li><li>Apumanque </li><li>Autoselect </li></ul>"
    },
    {
        title: "¿Cuándo puedo utilizar la van/oficina móvil?",
        content: "<b>Si quieres vender:</b> puedes ofrecer el traslado al posible comprador. <br><b>Si quieres comprar:</b>  acércate al vendedor las veces que quieras usando nuestra Van (Servicio de Oficina Móvil) <br> Revisa la documentación del vehículo y evalúa tu crédito junto a nuestros copilotos."
    },
    {
        title: "¿Cómo sé que el proceso será válido y recibiré mi dinero?",
        content: "En Autocred trabajamos con todas las instituciones relacionadas para que el proceso de tu negocio sea totalmente seguro para ti: <br> <ul class='list-disc pl-6'><li>Autopistas </li><li>Registro Civil</li><li>Aseguradoras</li><li>Carabineros de Chile</li><li>Plantas de Revisión Técnica</li></ul> <br> Somos el nexo entre comprador y vendedor, validando una transacción transparente para ambas partes."
    },
    {
        title: "¿Cuánto se demora el pago de mi vehículo por parte del comprador?",
        content: "Existen distintos mecanismos con distintos plazos. Nuestros copilotos podrán guiarte sobre cuál se adapte a tus necesidades"
    },
    {
        title: "¿Dónde hago la entrega de mi vehículo?",
        content: "Puedes entregar el vehículo donde te sea más cómodo y te sientas seguro. Lo importante es que tengas la certeza de que tu dinero está en tu cuenta antes de pasar las llaves. Con Autocred puedes hacerlo desde tu casa o lugar a convenir realizando la transferencia online, acompañado desde tu casa con nuestro servicio de oficina móvil, o en cualquiera de nuestros módulos de atención ubicados en la capital."
    }
];
export const brands = [
    {
        alt: "autofact",
        url: "/img/brands/autofact2.png",
    },
    {
        alt: "forum",
        url: "/img/brands/forum2.png",
    },
    {
        alt: "tanner",
        url: "/img/brands/tanner2.png",
    },
    {
        alt: "yapo",
        url: "/img/brands/yapo2.png",
    },
    {
        alt: "hdi seguros",
        url: "/img/brands/hdi.png",
    },
    {
        alt: "MAF",
        url: "/img/brands/maf.png",
    },
];
export const comentarios = [
    {
        nombre: "Issac Valdés",
        username: "",
        comentario: "Hemos hecho 4 transferencias online con Autocred, en Pandemia fue la mejor opción para no ir al Registro Civil y evitar hasta 4 horas de espera. Jackeline, nuestra ejecutiva, fue muy diligente, muy rápida y amable acompañándonos en todo el proceso de la venta de nuestros vehículos. El sistema es muy amigable por lo que recomendé el servicio con Autocred a mis contactos.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.png"
    },
    {
        nombre: "Nicolás Juri",
        username: "@nicojuri0208",
        comentario: "Excelente experiencia con Autocred, Carolina muy atenta y flexible en las necesidades horarias para concretar transferencias, recomendable la plataforma, empresa y ejecutiva.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.png"
    },
    {
        nombre: "José Valdés",
        username: "@grupopremiumpropiedades",
        comentario: "Quiero destacar y felicitar a la empresa Autocred, y su personal, que me ayudaron una enormidad en una compra urgente que tuve que realizar. Todo se realizó en un par de horas, entregándome seguridad, confianza en la compra y sin poner en riesgo mi dinero. Felicitaciones y 100% recomendado Autocred.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.png"
    },
    {
        nombre: "Andrés Martínes",
        username: "",
        comentario: "Mi experiencia con Autocred ha sido siempre excelente, en especial por Jackeline nuestra ejecutiva, sin ir más lejos el martes vendimos el auto de mi señora, le envié la información y en unos minutos estaba todo OK. El comprador que no conocía Autocred quedó impresionado de irse con el auto y su contrato ante notario con firma digital, un excelente equipo de trabajo lo recomiendo a todos los conocidos.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.png"
    },

]
export const rrss = [
    { name: "facebook", url: "https://www.facebook.com/autocredcl", src: "/img/rrss/rrss-facebook.svg" },
    { name: "instagram", url: "https://www.instagram.com/autocredcl/", src: "/img/rrss/rrss-instagram.svg" },
    { name: "linkedIn", url: "https://www.linkedin.com/company/autocredcl/", src: "/img/rrss/rrss-linkedin.svg" },
]
export const featuresTransferencia = [
    {
        name: "Identificacion Biometrica",
        content:
            "",
        img: "/img/icons/Iconos_Autocred_Blanco_Identificacion_biometrica.png",
    },
    {
        name: "Acompañamiento",
        content:
            "",
        img: "/img/icons/Iconos_Autocred_Blanco_Acompañamiento.png",
    },
    {
        name: "En tiempo record",
        content:
            "",
        img: "/img/icons/Iconos_Autocred_Blanco_Tiempo_record.png",
    },
    {
        name: "Proceso completo",
        content:
            "",
        img: "/img/icons/Iconos_Autocred_Blanco_Proceso_completo.png",
    },
];
export const featuresFinanciamiento = [
    {
        name: "Crédito rápido",
        content:
            "Gestiona tu crédito en solo 7 minutos.",
        img: "/img/icons/Iconos_Autocred_Blanco_Credito_rapido.png",
    },
    {
        name: "Proceso online",
        content:
            "Nuestros copilotos te guiarán a través del canal digital.",
        img: "/img/icons/Iconos_Autocred_Blanco_Proceso_online.png",
    },
    {
        name: "Variadas ofertas",
        content:
            "Realizamos evaluación directa y en línea con instituciones financieras que facilitan la gestión.",
        img: "/img/icons/Iconos_Autocred_Blanco_Financiamiento.png",
    },
    {
        name: "La mejor cuota",
        content:
            "Evaluación directa y en línea con financieras que facilitan tu gestión.",
        img: "/img/icons/Iconos_Autocred_Blanco_Mejor_cuota.png",
    },
    // {
    //     name: "Siempre asesorado",
    //     content:
    //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    //     img: "/img/icons/Iconos_Autocred_Blanco_Asesoramiento.png",
    // },
];
export const featuresTag = [
    {
        name: "Proceso online",
        content:
            "Nuestros copilotos te guiarán a través del canal digital.",
        img: "/img/icons/Iconos_Autocred_Blanco_Tag.png",
    },
    {
        name: "Siempre asesorado",
        content:
            "Nuestros copilotos te apoyarán permanentemente con todas tus dudas.",
        img: "/img/icons/Iconos_Autocred_Blanco_Asesoramiento.png",
    }
];
export const featuresSeguro = [
    {
        name: "Proceso online",
        content:
            "Nuestros copilotos te guiarán a través del canal digital.",
        img: "/img/icons/Iconos_Autocred_Blanco_Proceso_online.png",
    },
    {
        name: "Siempre asesorado",
        content:
            "Nuestros copilotos te apoyarán permanentemente con todas tus dudas. ",
        img: "/img/icons/Iconos_Autocred_Blanco_Asesoramiento.png",
    }
];

export const ventajas = [
    {
        name: "Te Guiamos",
        content:
            "Estamos disponibles a través de nuestros distintos canales los 7 días de la semana para ayudarte en lo que necesites.",
        src: '/img/ventajas/ventajas_teguiamos.png'
    },
    {
        name: "Te Acompañamos",
        content:
            "Te llevamos al comprador en nuestra van, entregamos financiamiento y facilidades de pago, y/o te acompañamos a ver o mostrar el auto.",
        src: '/img/ventajas/ventajas_teacompañamos.png'

    },
    {
        name: "Te Apoyamos",
        content:
            "Para comprar o vender, contamos con facilidades de pago, servicio de transferencia, seguro y TAG. Todo en un mismo lugar.",
        src: '/img/ventajas/ventajas_teapoyamos.png'

    }
]

export const posts = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 2,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 3,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 4,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 5,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 6,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 7,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 8,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 9,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 10,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
    {
        "id": 11,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "img": "https://api.lorem.space/image/furniture?w=300&h=200",
        "date": "03-02-22",
        "medio": "Medio prensa"
    },
]


// DATA SERVICIOS
// serviciosVendores/serviciosCompradores are linked with dataServicios by id

//Used for load select in Contact & page Servicios
export const dataServicios = [
    {
        id: 'transferencias',
        title: "Servicio de transferencias",
        content: "Transfiere en solo 20 minutos. En nuestros módulos, oficina móvil o vía online, sin filas ni esperas.",
        img: "/img/servicios/01-servicios-transferencias.png",
        buttonText: "Agenda tu Servicio",
        name: "Transferencias"
    },
    {
        id: 'financiamiento',
        title: "Financia tu proximo vehículo",
        content: "Resuelve tu financiamiento silo en 7 minutos. Recibe la aprobación con pago inmediato al vendedor. Paga el 100% del valor del vehículo, dando un pie, transferencia o con tarjetas de crédito. ",
        img: "/img/servicios/02-servicios-financiamiento.png",
        buttonText: "Quiero financiar ",
        name: "Financiamientos"
    },
    {
        id: 'tag',
        title: "Servicio Tag",
        content: "Te ayudamos con la habilitación o baja de tu Tag para evitar a la concesionaria.",
        img: "/img/servicios/03-servicios-tag-(EN-BAJA).png",
        buttonText: "Obtén tu Tag",
        name: "Tag"
    },
    {
        id: 'seguro',
        title: "Servicio de seguro automotriz",
        content: "Con Autocred asegura tu vehículo al realizar la transferencia a través de nuestros módulos, Oficina Móvil o vía online.",
        img: "/img/servicios/04-servicios-seguro-(EN-BAJA).png",
        buttonText: "Obtén tu Seguro",
        name: "Seguro"
    },
    {
        id: 'van',
        title: "",
        content: "",
        img: "",
        buttonText: "",
        name: "Traslado VAN"
    }
]

//Used for CardVendedores and load servicios
export const serviciosVendores = [
    {
        id: 'van',
        name: "VAN/OFICINA MÓVIL",
        content: "¿Quieres compañía cuando muestras el vehículo? <br> Utiliza nuestra <b>Oficina Móvil</b> para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_Traslado.png",
    },
    {
        id: 'financiamiento',
        name: "PLATAFORMA DE PAGO",
        content:
            "¿Quieres comprar un auto con tarjeta de crédito o financiamiento? En Autocred trabajamos con diferentes opciones financieras para hacer de tu compra, el mejor negocio.",
        img: "/img/icons/Iconos_Autocred_Magenta_Plataformas_de_Pago.png",
    },
    {
        id: 'transferencias',
        name: "TRANSFERENCIA",
        content:
            "¿Estás listo para transferir tu auto? Nuestro servicio está en línea con el registro civil, y contamos con 3 formatos de atención para una transferencia segura: <br> <ul class='list-disc pl-6'><li>Online</li><li>Presencial en nuestros módulos</li><li>Oficina Móvil</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_transferencia.png",
    },
    {
        id: 'seguro',
        name: "QUEREMOS SER MÁS",
        content:
            "Porque nos preocupamos de cada detalle, en Autocred puedes dar de baja tu seguro y Tag (solo autopista Vespucio Norte).",
        img: "/img/icons/Iconos_Autocred_Magenta_Volante.png",
    },
];

//Used for CardCompradores and load servicios

export const serviciosCompradores = [
    {
        id: 'van',
        name: "VAN/OFICINA MÓVIL",
        content:
            "Utiliza nuestra Oficina Móvil* para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Azul_traslado.png",
    },

    {
        id: 'financiamiento',
        name: "FINANCIAMIENTO",
        content:
            "Evaluación lista solo en 7 minutos. Nuestra plataforma permite pagos con tarjeta de crédito y financiamiento. El abono llega a tu cuenta al firmar la transferencia.",
        img: "/img/icons/Iconos_Autocred_Azul_financiamiento.png",
    },
    {
        id: 'transferencias',
        name: "TRANSFERENCIA, SEGUROS, TAG Y MÁS",
        content:
            "Somos tu copiloto buscando y comprando. Contamos con Servicio de Transferencia en línea con Registro Civil, seguros exclusivos para compradores particulares, y Activación de TAG presencial, online, en nuestros módulos o donde quieras con nuestra Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Azul_seguro_automotriz.png",
    },
];
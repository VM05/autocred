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
            "Evalúa tu crédito en tan solo 7 minutos. Al vendedor se le paga al momento de firmar la transferencia.",
        img: "/img/icons/Iconos_Autocred_Magenta_Credito_rapido.png",
    },
    {
        name: "La mejor cuota",
        content:
            "Realizamos una evaluación directa y en linea  con Forum y dos financieras más logrando con esto la mayor probabilidad de otorgamiento.",
        img: "/img/icons/Iconos_Autocred_Magenta_Mejor_cuota.png",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito desde cualquier lugar de forma online o acércate a nuestros módulos para ser asesorado presencialmente.",
        img: "/img/icons/Iconos_Autocred_Magenta_proceso_online.png",
    },
    {
        name: "En tiempo record",
        content: "¡Realizamos la primera evaluación en tan solo 7 minutos!",
        img: "/img/icons/Iconos_Autocred_Magenta_Tiempo_record.png",
    },

];
export const featuresCompradoress = [
    {
        name: "Crédito rápido",
        content:
            "Evalúa tu crédito en tan solo 7 minutos. Al vendedor se le paga al momento de firmar la transferencia.",
        img: "/img/icons/Iconos_Autocred_Azul_credito_rapido.png",
    },
    {
        name: "La mejor cuota",
        content:
            "Realizamos una evaluación directa y en linea  con Forum y dos financieras más logrando con esto la mayor probabilidad de otorgamiento.",
        img: "/img/icons/Iconos_Autocred_Azul_Mejor_cuota.png",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito desde cualquier lugar de forma online o acércate a nuestros módulos para ser asesorado presencialmente.",
        img: "/img/icons/Iconos_Autocred_Azul_Proceso_online.png",
    },
    {
        name: "En tiempo record",
        content: "¡Realizamos la primera evaluación en tan solo 7 minutos!",
        img: "/img/icons/Iconos_Autocred_Azul_Tiempo-_record.png",
    },

];
export const serviciosVendores = [
    {
        name: "VAN/OFICINA MÓVIL",
        content: "¿Quieres compañía cuando muestras el vehículo? <br> Utiliza nuestra <b>Oficina Móvil</b> para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_Traslado.png",
    },
    {
        name: "FINANCIAMIENTO",
        content:
            "Evaluación lista solo en 7 minutos. Nuestra plataforma permite pagos con tarjeta de crédito y financiamiento. El abono llega a tu cuenta al firmar la transferencia.",
        img: "/img/icons/Iconos_Autocred_Magenta_Financiamiento.png",
    },
    {
        name: "TRANSFERENCIA",
        content:
            "¿Estás listo para transferir tu auto? Nuestro servicio está en línea con el registro civil, y contamos con 3 formatos de atención para una transferencia segura: <br> <ul class='list-disc pl-6'><li>Online</li><li>Presencial en nuestros módulos</li><li>Oficina Móvil</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_transferencia.png",
    },
    {
        name: "QUEREMOS SER MÁS",
        content:
            "Porque nos preocupamos de cada detalle, en Autocred puedes dar de baja tu seguro y Tag (solo autopista Vespucio Norte).",
        img: "/img/icons/Iconos_Autocred_Magenta_Volante.png",
    },
];
export const serviciosCompradores = [
    {
        name: "VAN/OFICINA MÓVIL",
        content:
            "Utiliza nuestra Oficina Móvil* para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Azul_traslado.png",
    },
    {
        name: "PLATAFORMA DE PAGO",
        content:
            "¿Quieres comprar un auto con tarjeta de crédito o financiamiento? En Autocred trabajamos con diferentes opciones financieras para hacer de tu compra, el mejor negocio.",
        img: "/img/icons/Iconos_Autocred_Azul_Plataformas_de_pago.png",
    },
    {
        name: "TRANSFERENCIA, SEGUROS, TAG Y MÁS",
        content:
            "Somos tu copiloto buscando y comprando. Contamos con Servicio de Transferencia en línea con Registro Civil, seguros exclusivos para compradores particulares, y Activación de TAG presencial, online, en nuestros módulos o donde quieras con nuestra Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Azul_seguro_automotriz.png",
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
    { title: "Libertad", content: "Vende y compra con toda libertad. Nosotros te acompañamos durante todo el proceso. Sin letra chica.", src: "/img/valores/icono_transparencia.png" },
    { title: "Responsabilidad", content: "asumimos la tarea de que la compra o venta de tu auto usado se realice de la forma más transparente y justa.", src: "/img/valores/icono_responsabilidad.png" },
    { title: "Empatía", content: "Nos sentamos al lado tanto de compradores como vendedores, entendemos sus dolores y ofrecemos siempre una solución efectiva.", src: "/img/valores/icono_empatia.png" },
    { title: "Honestidad", content: "Entregamos la información necesaria para que ambas partes sepan exactamente el negocio que realizan. Somos el mejor copiloto para hacer un buen negocio en la compra y venta de tu auto usado.", src: "/img/valores/icono_honestidad.png" }
]
export const questionsComprador = [
    { title: "¿Qué tipo de vehículo puedo comprar a través de Autocred?", content: "En Autocred puedes comprar cualquier tipo de vehículo que ya posea un dueño, de una empresa o persona y que tenga patente." },
    { title: "¿En qué me ayuda Autocred para elegir el mejor auto?", content: "En Autocred queremos que la compra de tu vehículo sea una experiencia extraordinaria, por eso ya sea que recién estes buscando tu vehículo ideal, ya te contactaste con un potencial vendedor o finalmente te decidiste por el auto que te gusta, nuestro equipo de copilotos estarán para guiarte, acompañarte y apoyarte, resolviendo todas las dudas que tengas sobre transferencias del vehículo a tu nombre, antecedentes e historial del vehículo, Tag, Seguro Automotriz y las diferentes alternativas de cómo poder obtener tu vehículo, a través de pago con tarjetas o financiamiento automotriz. En Autocred tienes completa libertad para decidir cómo pagar tu vehículo ya que no cobramos comisión por la compra del vehículo. Queremos que tu experiencia sea extraordinaria, apoyándote en un viaje que muchos se pierden en el camino." },
    {
        title: "Si compro un vehículo usado, ¿cuáles son los gastos que yo debería incluir, además del valor negociado con el vendedor?", content: "Además del valor negociado con el vendedor debes considerar: <ul class='list-disc'><li>Registro Civil</li><ul class='list-disc'><li>Documentos necesarios de inscripción:</li><ul class='pl-4'><li>CAV (Certificado de Anotaciones Vigentes)</li></ul></ul></li><li>Impuesto 1,5%</li><li>Notaría</li></ul>"
    },
    { title: "¿De qué manera puedo pagar el vehículo que me gusta?", content: "Siempre es importante llegar a un buen acuerdo con el vendedor. Puedes pagar con tarjeta de crédito/débito, transferencia bancaria y/o crédito automotriz. El vale vista, dinero en efectivo y los cheques ya no son recomendados para evitar problemas por estafas." },
    { title: "¿Cómo hago para ver el auto que quiero de forma acompañada?", content: "Contamos con una van/oficina móvil que permite trasladarte en forma gratuita y muy cómoda hacia el posible vendedor. Pueden también reunirse en alguno de nuestros 4 puntos de encuentro establecido dentro de la región Metropolitana (Mall Paseo Quilín, Mall Plaza Norte, Apumanque, Autoselect)" },
    { title: "¿Cómo solicito un crédito con Autocred?", content: "Puedes comenzar tu evaluación en línea mediante nuestro formulario de financiamiento, acercarte a cualquiera de nuestros módulos presenciales o solicitar la ayuda de alguno de nuestros ejecutivos online que están disponibles los 7 días de la semana." },
    { title: "¿Cuánto tiempo demoro en ser evaluado para un crédito?", content: "Al utilizar nuestro Evaluador de Crédito, el tiempo estimado es de 7 minutos para una calificación." }


];
export const questionsVendedor = [
    { title: "¿Debo pagar alguna comisión a Autocred por la venta de mi vehículo?", content: "Ninguna, en Autocred buscamos acompañarte en el proceso de venta de tu vehículo y el precio al cual lo vendas será íntegro para ti. Puedes publicar tu vehículo en cualquier plataforma que estimes conveniente y realizar todo lo relacionado al financiamiento, pago, transferencia, etc." },
    { title: "¿Dónde se realiza la transferencia de mi vehículo?", content: "La transferencia de tu vehículo se puede realizar en nuestros Puntos Físicos (Mall Paseo Quilín, Mall Plaza Norte, Apumanque, Autoselect), Oficina Móvil o través de nuestro canal online." },
    { title: "¿Dónde puedo mostrar mi vehículo?", content: "Tienes la libertad de mostrar tu vehículo donde quieras, y lo mejor, siempre lo puedes hacer de forma acompañada. Contamos con una van/oficina móvil que permite trasladar en forma gratuita y muy cómoda al posible comprador al destino donde se encuentre el vendedor. Tenemos también 4 puntos de encuentro establecidos dentro de la región Metropolitana (Mall Paseo Quilín, Mall Plaza Norte, Apumanque, Autoselect) con personal atento y a la espera para poder ser de ayuda." },
    { title: "¿Cuándo puedo utilizar la van/oficina móvil?", content: "Si eres vendedor@, puedes ofrecer el traslado en nuestra a la parte compradora para que su experiencia sea única y podemos apoyar con nuestros servicios durante el traslado. Si eres comprador@, utiliza nuestra van las veces que quieras para ir al destino del vendedor. Arriba puedes aprovechar de revisar la documentación del vehículo que vas a ver, evaluar tu crédito o solo relajarte y disfrutar del paisaje!" },
    { title: "¿Cómo sé que el proceso será válido y recibiré mi dinero?", content: "Gracias a nuestras variadas alianzas estratégicas e institucionales como por ejemplo Registro civil, Carabineros de Chile, Plantas de revisión técnica, Autopistas, Aseguradoras, autopistas, Financieras, entre otras, nuestra solución funciona como una pasarela entre comprador y vendedor. Validamos y aseguramos la transacción segura y transparente tanto para el lado del comprador como desde el vendedor. Si el vehículo es pagado con Financiamiento, el pago se hace al mismo instante que la transferencia, logrando así que ambas partes se lleven lo que corresponde por haber realizado el negocio." },
    { title: "¿Cuánto se demora el pago de mi vehículo por parte del comprador?", content: "Siempre recomendamos que el monto pagado por el comprador sea entregado vía transferencia bancaria. El vale vista también es un mecanismo válido, pero debe ser consultado antes por la parte vendedora al banco originador del documento. Lo recomendado es que el pago se realice previa la firma y el vendedor esté satisfecho con haber recibido el total del dinero." },
    { title: "¿Dónde hago la entrega de mi vehículo?", content: "Puedes entregar el vehículo donde te sea más cómodo y te sientas seguro. Lo importante es que tengas la certeza de que tu dinero está en tu cuenta antes de pasar las llaves. Con Autocred puedes hacerlo desde tu casa o lugar a convenir realizando la transferencia online, acompañado desde tu casa con nuestro servicio de oficina móvil, o en cualquiera de nuestros módulos de atención ubicados en la capital." }
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
export const dataServicios = [
    { id: 'transferencias', title: "Servicio de transferencias", content: "Transfiere tu auto en minutos, en los módulos físicos, Oficina Móvil u canal online, sin esperas ni filas. En sólo 20 minutos tu trámite estará listo", img: "/img/servicios/01-servicios-transferencias.png", buttonText: "Agenda tu Servicio", name: "Transferencias" },
    { id: 'financiamiento', title: "Financia tu proximo auto", content: "Con Autocred puedes pagar el auto, el píe o la transferencia con tarjetas de crédito. Ó si prefieres, puedes obtener tu financiamiento en minutos. Estamos en línea con FORUM y diferentes instituciones financieras para apoyarte y lograr de la compra o venta el mejor negocio. Obtén tu aprobación en tan solo 7 minutos y el dinero junto con la firma de la transferencia con nosotros.", img: "/img/servicios/02-servicios-financiamiento.png", buttonText: "Obtén tu Financiamiento", name: "Financiamientos" },
    { id: 'tag', title: "Servicio Tag", content: "Autocred te da apoyo tanto para la baja de tu TAG y para la obtención del nuevo dispositivo. Slicítalo en nuestros Puntos Físicos, Oficina Móvil y Canal Online, sin necesidad de ir a las oficinas de la concesionaria.", img: "/img/servicios/03-servicios-tag-(EN-BAJA).png", buttonText: "Obtén tu Tag", name: "Tag" },
    { id: 'seguro', title: "Servicio de seguro automotriz", content: "Con Autocred asegura tu vehículo al momento de realizar la transferencia de tu vehículo, también a través de nuestros Puntos Físicos, Oficina Móvil y Canal Online. Te ayudamos para que también la inspección sea en el instante y no corras riesgos innecesarios.", img: "/img/servicios/04-servicios-seguro-(EN-BAJA).png", buttonText: "Obtén tu Seguro", name: "Seguro" },
    { id: 'van', title: "", content: "", img: "", buttonText: "", name: "Traslado VAN" }
]
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
            "En tan solo minutos gestiona tu crédito para la compra de tu vehículo.",
        img: "/img/icons/Iconos_Autocred_Blanco_Credito_rapido.png",
    },
    {
        name: "Proceso online",
        content:
            "Puedes hacer todo el proceso en forma digital con el soporte de nuestros copilotos a través de nuestro Canal Online, Puntos Físicos o en nuestro Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Blanco_Proceso_online.png",
    },
    {
        name: "Variadas ofertas",
        content:
            "Evaluamos tu crédito con FORUM y diferentes alternativas para lograr entregar siempre un posible financiamiento.",
        img: "/img/icons/Iconos_Autocred_Blanco_Financiamiento.png",
    },
    {
        name: "En tiempo record",
        content:
            "¡Realizamos la primera evaluación en tan solo 7 minutos!",
        img: "/img/icons/Iconos_Autocred_Blanco_Tiempo_record.png",
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
            "Puedes hacer todo el proceso en forma digital con el soporte de nuestros copilotos a través de nuestro Canal Online, Puntos Físicos o en nuestro Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Blanco_Tag.png",
    },
    {
        name: "Siempre asesorado",
        content:
            "Nuestros copilotos te guiarán y apoyarán permanentemente ante cualquier duda que tengas.",
        img: "/img/icons/Iconos_Autocred_Blanco_Asesoramiento.png",
    }
];
export const featuresSeguro = [
    {
        name: "Proceso online",
        content:
            "Puedes hacer todo el proceso en forma digital con el soporte de nuestros copilotos a través de nuestro Canal Online, Puntos Físicos o en nuestro Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Blanco_Proceso_online.png",
    },
    {
        name: "Siempre asesorado",
        content:
            "Nuestros copilotos te guiarán y apoyarán permanentemente ante cualquier duda que tengas.",
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
export const links = [
    { name: "Inicio", url: "/" },
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
    { name: "Vendedores", url: "/vendedores" },
    { name: "Compradores", url: "/compradores" },
    
    { name: "FAQ", url: "/preguntas-frecuentes" },
    { name: "Nosotros", url: "/nosotros" },
    { name: "Contacto", url: "/#contacto", params:"contacto"},
];

export const datosBannerPrincipal = [
    {
        titulo: "En Autocred hacemos todos los trámites por ti",
        content:"¡Evita filas, notarías y malos ratos!",
        img: "/src/assets/img/tramites-por-ti.png",
        buttonText: "VER TRÁMITES",
    },

    {
        titulo: "¡Te atendemos donde quieras!",
        content: "100% online, Oficina Móvil, Módulos de atención",
        img: "/src/assets/img/donde-quieras.png",
        buttonText: "QUIERO INFORMACIÓN"
    },

    {
        titulo: "¡No te enredes!",
        content:"La compra y venta de autos usados entre personas particulares es simple con Autocred.",
        img: "/src/assets/img/no-te-enredes.gif",
        buttonText: "CONTÁCTANOS"
    },

    {
        titulo: "¡Te financiamos!",
        content:"completamos el valor que te falta para comprar el auto usado de tus sueños.",
        img: "/src/assets/img/celular.gif",
        buttonText: "EVALUACIÓN DE CRÉDITO"
    },
];


export const featuresVendedores = [
    {
        name: "Crédito rápido",
        content:
            "En solo 7 minutos evalúa tu crédito con pago al vendedor.",
        img: "/img/icons/Iconos_Autocred_Magenta_Credito_rapido.webp",
    },
    {
        name: "La mejor cuota",
        content:
            "Evaluación directa y en línea con financieras que facilitan tu gestión.",
        img: "/img/icons/Iconos_Autocred_Magenta_Mejor_cuota.webp",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito de forma online o acércate a nuestros módulos.",
        img: "/img/icons/Iconos_Autocred_Magenta_proceso_online.webp",
    },
    {
        name: "En tiempo record",
        content: "En solo 7 minutos realizamos tu primera evaluación.",
        img: "/img/icons/Iconos_Autocred_Magenta_Tiempo_record.webp",
    },

];
export const featuresCompradoress = [
    {
        name: "Crédito rápido",
        content:
            "En solo 7 minutos evalúa tu crédito con pago al vendedor.",
        img: "/img/icons/Iconos_Autocred_Azul_credito_rapido.webp",
    },
    {
        name: "La mejor cuota",
        content:
            "Evaluación directa y en línea con financieras que facilitan tu gestión.",
        img: "/img/icons/Iconos_Autocred_Azul_Mejor_cuota.webp",
    },
    {
        name: "Proceso Online o Presencial",
        content:
            "Evalúa tu crédito de forma online o acércate a nuestros módulos.",
        img: "/img/icons/Iconos_Autocred_Azul_Proceso_online.webp",
    },
    {
        name: "En tiempo record",
        content: "En solo 7 minutos realizamos tu primera evaluación",
        img: "/img/icons/Iconos_Autocred_Azul_Tiempo-_record.webp",
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
        url: "/img/brands/autofact2.webp",
    },
    {
        alt: "forum",
        url: "/img/brands/forum2.webp",
    },
    {
        alt: "tanner",
        url: "/img/brands/tanner2.webp",
    },
    {
        alt: "yapo",
        url: "/img/brands/yapo2.webp",
    },
    {
        alt: "hdi seguros",
        url: "/img/brands/hdi.webp",
    },
    {
        alt: "MAF",
        url: "/img/brands/maf.webp",
    },
];
export const comentarios = [
    {
        nombre: "Issac Valdés",
        username: "",
        comentario: "Hemos hecho 4 transferencias online con Autocred, en Pandemia fue la mejor opción para no ir al Registro Civil y evitar hasta 4 horas de espera. Jackeline, nuestra ejecutiva, fue muy diligente, muy rápida y amable acompañándonos en todo el proceso de la venta de nuestros vehículos. El sistema es muy amigable por lo que recomendé el servicio con Autocred a mis contactos.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.webp"
    },
    {
        nombre: "Nicolás Juri",
        username: "@nicojuri0208",
        comentario: "Excelente experiencia con Autocred, Carolina muy atenta y flexible en las necesidades horarias para concretar transferencias, recomendable la plataforma, empresa y ejecutiva.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.webp"
    },
    {
        nombre: "José Valdés",
        username: "@grupopremiumpropiedades",
        comentario: "Quiero destacar y felicitar a la empresa Autocred, y su personal, que me ayudaron una enormidad en una compra urgente que tuve que realizar. Todo se realizó en un par de horas, entregándome seguridad, confianza en la compra y sin poner en riesgo mi dinero. Felicitaciones y 100% recomendado Autocred.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.webp"
    },
    {
        nombre: "Andrés Martínes",
        username: "",
        comentario: "Mi experiencia con Autocred ha sido siempre excelente, en especial por Jackeline nuestra ejecutiva, sin ir más lejos el martes vendimos el auto de mi señora, le envié la información y en unos minutos estaba todo OK. El comprador que no conocía Autocred quedó impresionado de irse con el auto y su contrato ante notario con firma digital, un excelente equipo de trabajo lo recomiendo a todos los conocidos.",
        src: "/img/icons/Iconos_Autocred_Azul_Copiloto.webp"
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
        name: "Te financiamos",
        content:
            "Ahora puedes comprar o vender tu auto usado, entre personas, con Financiamiento. Evaluación en solo 7 minutos y pago al instante al vendedor.",
        src: '/img/ventajas/ventajas_financiamiento.webp',
        textoBoton: 'Evalúa tu crédito',
        link: '/autocred-financiamiento/financiamiento',
    },
    {
        name: "Todos los trámites juntos",
        content:
            "Nos encargamos de todos los trámites de compradores y vendedores particulares, liberándolos de largas filas en notarías, del Registro Civil y de ir a la autopista por trámites de TAG.",
        src: '/img/ventajas/ventajas_teapoyamos.webp',
        textoBoton: 'Transfiere tu auto',
        link: '/servicios/transferencias',

    },
    {
        name: "Te guíamos y acompañamos",
        content:
            "Te guiamos en como comprar y vender y llevamos al comprador particular a ver el auto usado que quiere comprar, y al vendedor particular a mostrar su auto usado, en nuestra Oficina Móvil.",
        src: '/img/ventajas/ventajas_teacompañamos.webp',
        textoBoton: 'Solicita tu viaje',
        link: '/#contacto'
    },
    
]

export const posts = [

    {
        "id": 1,
        "title": "Viernes de emprendedores con Felipe Lira, Socio Fundador de Autocred habla sobre el mercado automotriz de autos usados.",
        "body": ` <p class="mb-2">El 19 de agosto en la edición AM de Radio Duna, tuvimos Viernes de Emprendedores con Felipe Lira, socio fundador de Autocred:</p>
    
    <div class="mt-10 flex justify-center" >
       
        <iframe class="video-radio" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FRadioDuna%2Fvideos%2F365438125630297%2F&show_text=0&width=560" width="860" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
    </div>
   

    
    `,
        "img": "/img/blog/radioduna.webp",
        "imgMobile": "/img/blog/dunamobile.webp",
        "date": "19-08-22",
        "medio": "Radio"
    },


    {
        "id": 2,
        "title": "Startup nacional simplifica la transferencia de vehículos usados entre particulares",
        "body": ` <p class="mb-2 font-bold">La plataforma está en línea con financieras, Registro Civil, notarías y empresas de seguro y además su servicio incluye traslado en van para conectar al comprador y vendedor.</p>

        <p class="mb-2">Todos conocemos a alguien que ha vivido lo complejo que ha sido comprar o vender su vehículo en los últimos tres años. La pandemia ha generado –de manera indirecta– un gran impacto en la industria automotriz, sin embargo, la penetración del crédito en este segmento todavía es muy baja.</p>

        <p class="mb-2">Según cifras de la Cámara de Comercio Automotriz, las ventas de autos usados marcaron máximas históricas en 2021, año en que alcanzaron una cifra de 1.429.335 unidades vendidas a diciembre, cerca de 400 mil más que el año anterior y el 2022 sigue la misma tendencia.</p>
        
        <p class="mb-2">Escenario al que sale al paso la startup nacional Autocred quién, tras una temporada piloto y hoy en alianza con Forum, viene a facilitar la compra y venta de autos usados entre personas; con la promesa de ser el mejor copiloto para sus clientes y acompañarlos en  este viaje extraordinario.</p>

        <p class="mb-2">“Nuestro objetivo es guiar, apoyar y acompañar a nuestros clientes.  Estamos disponibles los siete días de la semana, incluimos traslado, financiamiento, facilidades de pago, servicio de transferencia, seguro y TAG; todo en un mismo lugar”, asegura Felipe Lira, socio fundador de Autocred.</p>

        <h2 class='bold text-2xl my-5'>Acceso a credito</h2>
    
        <p class="mb-2">El objetivo de esta startup es que el acceso al crédito en autos usados, que actualmente es cercano el 0% llegue al 20%. Durante este 2022, Autocred avanzará en un importante plan de expansión a nivel nacional, en que además de tener presencia en cuatro locales en Santiago, tendrá lanzamientos en regiones: Valparaíso, Rancagua, La Serena y Viña del Mar.</p>

        <h2 class='bold text-2xl my-5'>Fuentes:</h2>
    <ul>
    <li><a href="https://www.t13.cl/noticia/emprendedores/startup-nacional-simplifica-transferencia-vehiculos-usados-particulares" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">t13.cl</a></li>
    <li> <a href="https://www.losandeshoy.cl/2022/08/09/startup-nacional-simplifica-la-transferencia-de-vehiculos-usados-entre-particulares/" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">LosAndeshoy.cl</a></li>
    <li>  <a href="https://cosasparaminas.wordpress.com/2022/08/09/autocred-la-solucion-al-problema-de-transferir-y-financiar-autos-usados-entre-personas/" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">cosasparaminas</a></li>
    <li> <a href="https://www.elinformador.cl/nacional/startup-nacional-simplifica-la-transferencia-de-vehiculos-usados-entre-particulares/" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">elinformador.cl</a></li>
    <li>  <a href="https://www.m360.cl/noticias/noticia/startup-nacional-simplifica-la-transferencia-de-vehiculos-usados-entre/2022-08-13/140822.html" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">m360.cl</a></li>
    <li>  <a href="https://www.zoomtecnologico.com/2022/08/09/autocred-transfiere-autos/" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">zoomtecnologico.com</a></li>
    </ul>
    
    `,
        "img": "/img/blog/Autocred.webp",
        "date": "09-08-22",
        "medio": "Prensa"
    },
    {
        "id": 3,
        "title": "Julio y Agosto, los meses claves para comprar autos usados.",
        "body": ` <p class="mb-2">El mercado de los autos usados vería reflejada la histórica alza del dólar en septiembre. Felipe Lira socio director de Autocred explica en esta nota de T13.cl porqué estos meses son propicios para adquirir un vehículo usado.</p>

        <p class="mb-2">En Autocred buscamos guiar, acompañar y apoyar en todo el proceso de la compra o venta de vehículos usados entre personas, apoyándolos en los servicios de:</p>

        <ul class='list-disc pl-6 pb-6'>
        <li class="mb-3">Transferencia vehicular</li>
        
        <li class="mb-3">Financiamiento automotriz con la mejor cuota del mercado</li>
        
        <li class="mb-3">Seguro automotriz</li>
        
        <li class="mb-3">Habilitación de TAG</li>
        
        </ul>
    
        <p class="mb-2">Estos servicios se pueden realizar todos en un mismo lugar, ya sea en línea a través de nuestros canales digitales, módulos de atención en Mall Quilín, Mall Plaza Norte, Mall Apumanque o Autocred Cerrillos, además de de nuestra Van/Oficina Móvil que permite acercar al potencial comprador con el vendedor.</p>

        
    <a href="https://www.t13.cl/noticia/negocios/mercado-autos-usados-veria-reflejada-historica-alza-del-dolar-septiembre-13-07-2022" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">Puedes ver la nota completa aquí</a>
   
    
    `,
        "img": "/img/blog/t13.webp",
        "date": "20-07-22",
        "medio": "Prensa"
    },

    {
        "id": 4,
        "title": "Yapo.cl la nueva alianza de Autocred",
        "body": ` <p class="mb-2">En Autocred queremos ser el mejor copiloto para la compra y venta de vehículos usados entre personas. Felipe Lira Socio Director de Autocred en entrevista con Claudia Castro, Gerenta Comercial de Yapo.cl explicó todo los beneficios de esta alianza enfocado siempre en apoyar a las personas en todo el proceso.</p>

        <h2 class='bold text-2xl my-5'>Beneficios de la alianza con Autocred</h2>

        <ul class='list-disc pl-6 pb-6'>
        <li class="mb-3">Realizar todas las transacciones en un solo lugar</li>
        
        <li class="mb-3">Obtener los informes del vehículo</li>
        
        <li class="mb-3">Hacer la transferencia</li>
        
        <li class="mb-3">Adquirir el seguro automotriz</li>
        
        <li class="mb-3">Habilitación del tag</li>
        
        <li class="mb-3">Cuentan con una oficina móvil dentro de la Región Metropolitana, que te lleva al vendedor</li>
        
        </ul>
    
        <div class="relative mx-auto my-5" >
        <iframe class="mx-auto  w-full aspect-video " src="https://www.youtube.com/embed/48MXJ4e2csw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        
    <a href="https://blog.yapo.cl/2022/07/06/beneficios-de-la-alianza-de-yapo-con-autocred/?utm_source=emblue&utm_medium=email&utm_campaign=20220706-newsletter-adv-3002" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">Puedes leer todo el artículo aquí</a>
   
    
    `,
        "img": "/img/blog/Conversaciones-digitales-Autocred.webp",
        "date": "12-07-22",
        "medio": "Entrevista"
    },

    {
        "id": 5,
        "title": "Entrevista en Radio Biobío Felipe Lira, Socio Fundador de Autocred habla sobre el mercado automotriz de autos usados.",
        "body": ` <p class="mb-2">En programa Una semana en La Radio, de Radio Biobío, Felipe Lira, Socio Fundador de Autocred habla sobre el aumento de la demanda automotriz de vehículos usados y cómo Autocred llega para apoyar en la compra y venta de vehículos usados entre personas, acompañando y apoyando en todo el proceso a cada una de las partes con Financiamiento, Seguro, Tag, Transferencia y todo lo necesario para que la experiencia de este proceso sea un gran viaje.</p>
    
    <div class="mt-10 flex justify-center" >
        <audio controls>
        <source src="/audio/entrevista.mp3" type="audio/ogg">
        <source src="/audio/entrevista.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
        </audio>
    </div>
   

    
    `,
        "img": "/img/blog/biobio.webp",
        "date": "19-06-22",
        "medio": "Radio"
    },
    {
        "id": 6,
        "title": "Programa Emprender es Clave de Radio La Clave, Felipe Lira Socio Director habla sobre Autocred y la compra o venta de autos usados",
        "body": ` <p class="mb-2">Todos los días una van azul recorre las calles de Santiago con un objetivo: <b>ser la oficina móvil
        para que diversas personas puedan vender su auto sin acudir a la notaría ni al banco.</b> “La idea es que se
    suban y que puedan realizar todos los trámites, incluidos los seguros”, cuenta Felipe Lira (38), ingeniero comercial y
    cofundador de Autocred.</p>
    
    <div class="relative mx-auto my-5" >
    <iframe class="mx-auto  w-full aspect-video " src="https://www.youtube.com/embed/vmfLw2LqU8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a href="https://www.youtube.com/watch?v=vmfLw2LqU8I" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">Ver la entrevista completa aquí</a>
    
    `,
        "img": "/img/blog/emprendereslaclave.webp",
        "date": "29-06-22",
        "medio": "Radio"
    },
    {
        "id": 7,
        "title": "Forum debuta en mundo venture e invierte US$ 1 millón en Autocred | DFMAS",
        "body": ` <p class="mb-2">Todos los días una van azul recorre las calles de Santiago con un objetivo: <b>ser la oficina móvil
        para que diversas personas puedan vender su auto sin acudir a la notaría ni al banco.</b> “La idea es que se
    suban y que
    puedan realizar todos los trámites, incluidos los seguros”, cuenta Felipe Lira (38), ingeniero comercial y
    cofundador de Autocred.</p>
<p class="mb-2">En la mañana del 3 de enero de 2022, Forum -compañía chilena de propiedad de BBVA-, escribió un
    cheque por US$ 1 millón. ¿El destinatario? <b>Autocred SpA, una incipiente startup chilena dedicada a facilitar
        las transacciones de autos usados entre clientes particulares.</b> Se trata de la primera apuesta
    venture de una de las principales compañías dedicadas al financiamiento automotriz en Chile. </p>

<p class="mb-2"> Con esta transacción <b>Forum se quedó con el 29,01% de la compañía,</b> ingresó al directorio y
    diversificó sus líneas de negocio, las cuales están enfocadas casi exclusivamente en el financiamiento de autos
    nuevos. </p>

<p class="mb-2">“El mercado usado es mucho más grande que el de vehículos cero kilómetro. Esto nos pareció un
    vehículo interesante para ver si nuestros productos también podrían funcionar ahí. Nos mostraron los números,
    nosotros conocíamos el tamaño del mercado y nos pareció interesante poner nuestra tecnología y productos ahí”,
    dice <b>Martín Cook, jefe comercial de Forum,</b> quien agrega que se trata de una operación fuera del negocio
    tradicional de la firma y que dejarán que el día a día de la startup opere de forma independiente. </p>

<p class="mb-2"><b>Autocred fue fundada en 2019 por Lira y Paul Tacchi (70),</b> un exejecutivo del banco londinense
    HSBC. “Mi socio dice que entre él y yo tenemos 100 años de experiencia”, afirma. Se conocen hace 18 años cuando
    ambos coincidieron en un proyecto empresarial. “Yo después me salí y entré al rubro automotriz. Y Paul, por su
    lado, hizo lo mismo. Luego, años después, nos encontramos y empezamos el primer negocio entre los dos”. </p>

<p class="mb-2">¿Qué es lo que hacen? En palabras de Lira <b>se hacen cargo de la “última milla” de la compra y
        venta de los autos usados,</b> es decir, de mostrar, asesorar y concretar la operación entre las dos partes.
    Además, se preocupan de la transferencia de recursos, el financiamiento, tag y el seguro. </p>

<p class="mb-2">Para eso, <b>tienen alianzas con diversas compañías, como HDI, Tanner, MAF, Autofact y Yapo.</b>
    Autocred, a diferencia de otras compañías similares, no cobra una comisión por la venta del auto, sino que un
    fee
    por cada servicio prestado, aclara el cofundador. </p>

<h4 class="font-bold my-3">2 mil transferencias</h4>

<p class="mb-2">A Felipe Lira le gusta decir que su compañía “es el origen de diversas
    experiencias”.<br>
    “Partimos hace 10 años con Paul con un negocio tecnológico enfocado en los dealers de
    automóviles”, recuerda el ejecutivo. “Construimos un software que hoy tiene distintas características, pero
    principalmente apoya todo lo que es la transacción de vehículos de cara a los concesionarios”. </p>

<p class="mb-2">Así se dio cuenta de los dolores que existen al momento de comprar o vender un auto usado,
    especialmente para aquellas personas que no quieren acudir a un concesionario. “Existe desconfianza, muchos
    trámites que tienes que hacer, como la transferencia, el seguro, el financiamiento y las modalidades de pago”,
    cuenta. </p>

<p class="mb-2">Y agrega: <b>“Tienes que pensar que los dealers se quedan con el 20% o 30% del precio del auto”,</b>
    aclara el ejecutivo. “Cuando no hay ese intermediario y se hace de manera directa, ese porcentaje se reparte
    entre el vendedor y el comprador particular. Es el negocio perfecto”. </p>
    
    <a href="https://dfmas.df.cl/df-mas/punto-de-partida/forum-debuta-en-mundo-venture-e-invierte-us-1-millon-en-autocred" target="_blank" rel="noreferrer noopener" class="font-semibold text-secondary-900">Ver la entrevista completa aquí</a>
    
    `,
        "img": "https://dfmas.df.cl/dfmas/site/artic/20220624/imag/foto_0000000920220624142623/MG_6216.jpg",
        "date": "28-06-22",
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
        title: "Financia tu próximo vehículo",
        content: "Resuelve tu financiamiento solo en 7 minutos. Recibe la aprobación con pago inmediato al vendedor. Paga el 100% del valor del vehículo, dando un pie, transferencia o con tarjetas de crédito. ",
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
        name: "Van/oficina móvil",
        content: "¿Quieres compañía cuando muestras el vehículo? <br> Utiliza nuestra <b>Oficina Móvil</b> para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_Traslado.webp",
    },
    {
        id: 'financiamiento',
        name: "Plataforma de pago",
        content:
            "¿Quieres comprar un auto con tarjeta de crédito o financiamiento? En Autocred trabajamos con diferentes opciones financieras para hacer de tu compra, el mejor negocio.",
        img: "/img/icons/Iconos_Autocred_Magenta_Plataformas_de_Pago.webp",
    },
    {
        id: 'transferencias',
        name: "Transferencia",
        content:
            "¿Estás listo para transferir tu auto? Nuestro servicio está en línea con el registro civil, y contamos con 3 formatos de atención para una transferencia segura: <br> <ul class='list-disc pl-6'><li>Online</li><li>Presencial en nuestros módulos</li><li>Oficina Móvil</li><ul>",
        img: "/img/icons/Iconos_Autocred_Magenta_transferencia.webp",
    },
    {
        id: 'seguro',
        name: "Queremos ser más",
        content:
            "Porque nos preocupamos de cada detalle, en Autocred puedes dar de baja tu seguro y Tag (solo autopista Vespucio Norte).",
        img: "/img/icons/Iconos_Autocred_Magenta_Volante.webp",
    },
];

//Used for CardCompradores and load servicios

export const serviciosCompradores = [
    {
        id: 'van',
        name: "Van/oficina móvil",
        content:
            "Utiliza nuestra Oficina Móvil* para moverte junto al potencial comprador: <br> <ul class='list-disc pl-6'><li>Transferencias</li><li>Pagos con tarjetas</li><li>Servicio de Van 100% gratis</li><li>Financiamiento en solo 7 minutos</li><ul>",
        img: "/img/icons/Iconos_Autocred_Azul_traslado.webp",
    },

    {
        id: 'financiamiento',
        name: "Financiamiento",
        content:
            "Evaluación lista solo en 7 minutos. Nuestra plataforma permite pagos con tarjeta de crédito y financiamiento. El abono llega a tu cuenta al firmar la transferencia.",
        img: "/img/icons/Iconos_Autocred_Azul_financiamiento.webp",
    },
    {
        id: 'transferencias',
        name: "Transferencia, seguros, tag y más",
        content:
            "Somos tu copiloto buscando y comprando. Contamos con Servicio de Transferencia en línea con Registro Civil, seguros exclusivos para compradores particulares, y Activación de TAG presencial, online, en nuestros módulos o donde quieras con nuestra Oficina Móvil.",
        img: "/img/icons/Iconos_Autocred_Azul_seguro_automotriz.webp",
    },
];
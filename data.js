// Datos de las preguntas extraídos de los PDFs

const questions1 = [
    {
        question: "Completa el refrán: árbol que crece torcido, jamás su tronco ___",
        options: [
            "Dobla.",
            "Rompe.",
            "Corta.",
            "Endereza."
        ],
        correct: 3
    },
    {
        question: "La polisemia de “banco” permite que signifique:",
        options: [
            "\"Silla o sofá, indistintamente\".",
            "\"Asiento o entidad financiera, según el contexto\".",
            "\"Planta o animal, indistintamente\" .",
            "\"Río o arroyo, según el contexto\"."
        ],
        correct: 1
    },
    {
        question: "El antónimo de “escaso” es:",
        options: [
            "Reducido.",
            "Abundante.",
            "Mínimo.",
            "Limitado."
        ],
        correct: 1
    },
    {
        question: "El antónimo de “ordenado” es:",
        options: [
            "Organizado.",
            "Armonioso.",
            "Caótico.",
            "Limpio."
        ],
        correct: 2
    },
    {
        question: "¿Qué significa la expresión “Actuar con sinceridad y sin engaños” ?",
        options: [
            "Hablar de más.",
            "Hablar alto.",
            "Hablar claro.",
            "Hablar fuerte."
        ],
        correct: 2
    },
    {
        question: "¿Qué significa la expresión “ Conseguir un beneficio gracias al esfuerzo de Madrid ajeno, sin haber participado en el trabajo” ?",
        options: [
            "Dormirse en los laureles.",
            "Recoger la cosecha ajena.",
            "Poner el grito en el cielo.",
            "Matar el gusanillo."
        ],
        correct: 1
    },
    {
        question: "El antónimo de “suave” es:",
        options: [
            "Aterciopelado.",
            "Áspero.",
            "Ligero.",
            "Etéreo."
        ],
        correct: 1
    },
    {
        question: "La palabra “esporádico” en la frase “hubo cortes esporádicos de luz” significa:",
        options: [
            "Prolongado y frecuente.",
            "Previsto con antelación.",
            "Breve pero constante.",
            "Ocasional y sin regularidad."
        ],
        correct: 3
    },
    {
        question: "La palabra “contumaz” en “infractor contumaz” significa:",
        options: [
            "Reincidente y obstinado.",
            "Torpe y casual..",
            "Arrepentido y puntual",
            "Único y aislado."
        ],
        correct: 0
    },
    {
        question: "Completa la frase “Siendo como era día festivo y con poco tráfico, el viaje ___ en quince minutos”.",
        options: [
            "Terminaba.",
            "Terminó.",
            "Terminaría.",
            "Terminará."
        ],
        correct: 1
    },
    {
        question: "La expresión “aforo completo” indica:",
        options: [
            "Capacidad máxima ocupada.",
            "Reducción temporal de plazas.",
            "Entrada gratuita.",
            "Cierre preventivo. de Madrid"
        ],
        correct: 0
    },
    {
        question: "Referirse a una persona que aparenta ser inofensiva, pero esconde intenciones peligrosas significa:",
        options: [
            "Que hay gato encerrado.",
            "Que es un lobo con piel de cordero.",
            "Que está todo el pescado vendido.",
            "Que esconde una carta bajo la manga."
        ],
        correct: 1
    },
    {
        question: "¿Qué distintivo medioambiental identifica a los vehículos más eficientes?",
        options: [
            "La etiqueta asignada exclusivamente a vehículos eléctricos de batería y eléctricos de autonomía extendida.",
            "La etiqueta aplicable a vehículos híbridos enchufables con autonomía eléctrica inferior a 40 km.",
            "La etiqueta reservada para vehículos híbridos no enchufables y microhíbridos.",
            "La etiqueta correspondiente a vehículos de combustión interna que cumplen con las normativas Euro 4, Euro 5 o Euro 6."
        ],
        correct: 0
    },
    {
        question: "El estadio del equipo de fútbol Rayo Vallecano, ¿en qué parte de la ciudad está situado?",
        options: [
            "Al norte de la ciudad de Madrid.",
            "Al este de la ciudad de Madrid.",
            "Al sur de la ciudad de Madrid.",
            "Al oeste de la ciudad de Madrid."
        ],
        correct: 1
    },
    {
        question: "Si un cliente nos solicita un trayecto con destino a Boadilla del Monte, debemos saber que el citado municipio está situado:",
        options: [
            "Al norte de la ciudad de Madrid.",
            "Al este de la ciudad de Madrid.",
            "Al oeste de la ciudad de Madrid.",
            "Al sur de la ciudad de Madrid."
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el domicilio del Teatro La Latina?",
        options: [
            "La plaza de Murillo s/n.",
            "La calle Cervantes 11.",
            "La plaza de la Cebada 2.",
            "El paseo de Moret 99."
        ],
        correct: 2
    },
    {
        question: "En relación a la calidad del aire, ¿cómo se denomina de forma abreviada el de Madrid gas ozono y cuál es su fórmula química?",
        options: [
            "O 3",
            "HO 3",
            "NO 3",
            "SO 3"
        ],
        correct: 0
    },
    {
        question: "De las calles que se citan, indique cuál no confluye en la plaza de Castilla.",
        options: [
            "La calle de Mateo Inurria.",
            "El paseo de la Castellana.",
            "La calle de Bravo Murillo.",
            "La calle de Félix Boix."
        ],
        correct: 3
    },
    {
        question: "El museo Sorolla, ¿en qué dirección se encuentra?",
        options: [
            "En el paseo del General Martínez Campos 37.",
            "En la calle Santa Isabel, 52.",
            "En el Paseo del Prado, 8.",
            "En la calle Alcalá, 13"
        ],
        correct: 0
    },
    {
        question: "Si un cliente le solicita ir al museo de las Ilusiones, ¿a qué dirección le llevaremos?",
        options: [
            "A la plaza de la Paja.",
            "A la calle de Espronceda 1.",
            "A la calle del Doctor Cortezo 8.",
            "A la calle de Lavapiés, 14."
        ],
        correct: 2
    },
    {
        question: "En la calle de José Gutiérrez Abascal número 2, ¿qué lugar de interés para viajeros podemos encontrar?",
        options: [
            "El museo Nacional de Ciencias Naturales.",
            "El Museo Nacional de Antropología.",
            "El Museo Nacional de Artes Decorativas.",
            "El Museo Nacional del Romanticismo."
        ],
        correct: 0
    },
    {
        question: "¿En qué vía está situado el centro comercial La Vaguada?",
        options: [
            "En la avenida de Monforte de Lemos 36.",
            "En la calle Serrano 61.",
            "En el Paseo de la Florida, s/n.",
            "En el Paseo de la Castellana 259. de Madrid"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la dirección y distrito del Ilustre Colegio Oficial de Médicos?",
        options: [
            "En la calle de Atocha 50, Centro.",
            "En la Avenida de Alberto de Alcocer 25, Chamartín.",
            "En la calle del Doctor Fleming 99, Chamartín.",
            "La calle de Santa Isabel 51, Centro."
        ],
        correct: 3
    },
    {
        question: "En relación a la calidad del aire, ¿cómo se representa en los mapas de calidad del aire el dióxido de azufre y cuál es su fórmula química?",
        options: [
            "CO . 2",
            "SO . 2",
            "O . 3",
            "H O. 2"
        ],
        correct: 1
    },
    {
        question: "¿Dónde está ubicado el centro comercial Plaza Río 2?",
        options: [
            "En la avenida de los Poblados 100.",
            "En la avenida del Manzanares 210.",
            "En el paseo de Santa María de la Cabeza, s/n.",
            "En la avenida de Menéndez Pelayo 55."
        ],
        correct: 1
    },
    {
        question: "La zona de bajas emisiones del Distrito Centro comprende casi todo el distrito en el que se encuentran los barrios de Palacio, Embajadores, Cortes, Justicia, Universidad y Sol y que quedan delimitadas por diferentes calles, plazas y avenidas. De las que se citan, indique cuál es una de estas vías que delimita la ZBE del Distrito Centro:",
        options: [
            "Calle de Alcalá.",
            "Avenida de Valladolid.",
            "Cuesta de San Vicente.",
            "Plaza de Alonso Martínez."
        ],
        correct: 3
    },
    {
        question: "¿Qué vehículos llevarán la etiqueta medioambiental denominada ECO?",
        options: [
            "Tendrán derecho a esta etiqueta turismos y furgonetas ligeras de gasolina matriculadas a partir de enero de 2006 y diésel a partir de septiembre de 2015.",
            "Tendrán derecho a esta etiqueta turismos y furgonetas ligeras de gasolina matriculadas desde el 1 de enero de 2001 y diésel a partir de 2006.",
            "Tendrán derecho a esta etiqueta vehículos eléctricos de batería (BEV) , vehículos eléctricos de autonomía extendida (REEV), y vehículos eléctricos híbridos enchufables (PHEV) con una autonomía de 40 km o vehículos de pila de combustible.",
            "Tendrán derecho a esta etiqueta vehículos eléctricos enchufables con autonomía inferior a 40 km, vehículos híbridos no enchufables (HEV), vehículos Comunidad propulsados por gas natural comprimido (GNC), gas natural licuado (GNL) o gas de Madrid licuado del petróleo (GLP). Deben cumplir los criterios de la etiqueta C."
        ],
        correct: 3
    },
    {
        question: "La categorización y clasificación de los vehículos en función de los niveles de contaminación que emiten, el que se afirma que tanto las partículas como el dióxido de nitrógeno tienen en el tráfico rodado la principal fuente de emisión en las grandes ciudades, ¿dónde tuvo su origen?",
        options: [
            "En el Plan nacional de calidad del aire.",
            "En el Plan de recogida de residuos sólidos urbanos.",
            "En una ordenanza municipal de Madrid.",
            "En la normativa vigente de las estaciones ITV."
        ],
        correct: 0
    },
    {
        question: "El denominado \"Campo del Moro\", ¿junto a qué lugar de interés turístico está situado?",
        options: [
            "Junto al Parque del Retiro.",
            "Junto a la Plaza Mayor.",
            "Junto a la Puerta del Ángel.",
            "Junto al Palacio Real."
        ],
        correct: 3
    },
    {
        question: "¿Qué sitio de interés está en la Carrera de San Jerónimo s/n ?",
        options: [
            "El Senado.",
            "La Basílica de Jesús de Medinaceli.",
            "El Congreso de los Diputados.",
            "La Casa Museo de Lope de Vega."
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la misión principal del perro guía que acompaña a una persona con discapacidad visual?",
        options: [
            "Asistir a la persona con discapacidad en su orientación y movilidad.",
            "Entretener a la persona.",
            "Proporcionar compañía a la persona que acompaña.",
            "Proteger a la persona que acompaña."
        ],
        correct: 0
    },
    {
        question: "Si necesita captar la atención de una persona con discapacidad auditiva, de Madrid ¿cuál es la mejor manera de hacerlo?",
        options: [
            "Tocarle suavemente en el hombro o hacerle una seña si hay contacto visual.",
            "Gritar, preferiblemente su nombre.",
            "Dar una palmada.",
            "Utilizar un silbato o una linterna."
        ],
        correct: 0
    },
    {
        question: "¿Qué debemos hacer si, durante un trayecto, el pasajero pierde la conciencia?",
        options: [
            "Inmovilizar el vehículo en un lugar seguro para comprobar que el herido respira y avisar al 112.",
            "Intentar darle un analgésico.",
            "Darle alguna bebida estimulante para que recupere la conciencia.",
            "Darle agua y aplicarle hielo en la frente."
        ],
        correct: 0
    },
    {
        question: "Al utilizar un dispositivo de navegación (GPS), al introducir el nombre de la calle y el número, ¿es necesario indicar el municipio donde se encuentra dicha calle?",
        options: [
            "No, porque no hay dos calles con el mismo nombre en todos los municipios de la Comunidad de Madrid.",
            "Sí, porque puede haber dos calles con el mismo nombre en los diferentes municipios que componen la Comunidad de Madrid.",
            "No, porque siempre la primera opción que muestra el GPS es la acertada.",
            "No, pero es más interesante introducir si la calle tiene orientación Norte o Sur."
        ],
        correct: 1
    },
    {
        question: "El conductor de un vehículo VTC ¿puede de alguna manera ayudar o colaborar con un pasajero que tiene movilidad reducida y que lleva un bebé en un carrito?",
        options: [
            "No, de hecho es un tipo de cliente que es mejor evitar.",
            "No, aunque es recomendable darle más tiempo para que acceda al vehículo.",
            "Sí, se le debe ofrecer asistencia para meter y sacar el cochecito del bebé en el vehículo y asegurarse de que queda bien sujeto durante el trayecto.",
            "Sí, le debe informar que le puede aplicar un descuento en la tarifa. Comunidad de Madrid"
        ],
        correct: 2
    },
    {
        question: "De las siguientes acciones que se señalan, indique cuál es la primera que hay que hacer cuando se llegue al lugar donde se ha producido un accidente.",
        options: [
            "Proteger el lugar del accidente y a nosotros mismos como auxiliadores.",
            "Alertar inmediatamente al 112 informando de lo sucedido.",
            "Hacerse una idea de lo ocurrido y llamar al 112.",
            "Socorrer inmediatamente a las víctimas, especialmente a aquellas que reclamen insistentemente nuestra ayuda."
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la actitud que se ha de mantener ante un herido con quemaduras?",
        options: [
            "No tocar la zona quemada, aplicar agua fría, no intentar retirar la ropa quemada que haya sobre la herida y cubrir la zona quemada con apósitos (o trapos limpios) humedecidos.",
            "Retirar la ropa quemada adherida a la zona quemada y aplicar agua fría.",
            "Aplicar una pomada antiquemaduras y mantener la zona humedecida.",
            "Aplicar agua caliente y jabón para lavar la zona quemada y cubrir la herida con apósitos secos."
        ],
        correct: 0
    },
    {
        question: "En caso de percibir fuego en el vehículo, ¿qué deberá hacer el conductor como primera medida?",
        options: [
            "Aumentar la velocidad para llegar cuanto antes al destino antes de que el fuego aumente.",
            "Detener el vehículo y evacuar a los pasajeros buscando un lugar seguro en la vía.",
            "Comentar con los pasajeros cuál puede ser la causa del fuego.",
            "Detener el vehículo, tenga o no pasajeros, para intentar localizar el fuego e intentar apagarlo."
        ],
        correct: 1
    },
    {
        question: "De las siguientes afirmaciones, indique cuál NO es correcta en relación a la evaluación inicial de un herido en accidente de tráfico:",
        options: [
            "No se debe seguir el protocolo de actuación denominado ABC salvo que haya un médico en el lugar del accidente.",
            "Hay que abrigar a los heridos, tanto en invierno como en verano.",
            "Siempre hay que atender antes a un herido en estado de inconsciencia que a otro que reclama nuestra ayuda gritando.",
            "No hay que darle a los heridos ningún tipo de medicamento."
        ],
        correct: 0
    },
    {
        question: "En determinada situación de emergencia es aconsejable dar unas palmadas de Madrid en la espalda de un niño de más de seis meses. ¿De qué tipo de emergencia se trata?",
        options: [
            "Cuando el niño tenga fiebre.",
            "Cuando el niño llore insistentemente.",
            "Cuando el niño esté atragantado y no pueda respirar.",
            "Cuando el niño no pueda dormir."
        ],
        correct: 2
    },
    {
        question: "Las lesiones medulares, ¿cuándo son más graves?",
        options: [
            "Cuando ocurren en la parte alta de la columna, especialmente en las cervicales.",
            "Cuando ocurren en la parte baja de la columna, es decir, en las cervicales.",
            "Cuando se producen en la cadera.",
            "Cuando se producen en las dorsales."
        ],
        correct: 0
    },
    {
        question: "En el supuesto de que fuese absolutamente necesario realizar el transporte de un herido en el vehículo VTC, ¿qué precauciones debe tomar el conductor?",
        options: [
            "Debe sentar al herido en los asientos traseros y asegurarse de que lleva abrochado el cinturón de seguridad.",
            "Debe coger en brazos al herido permitiendo que la cabeza vaya hacia atrás.",
            "Debe movilizarse al herido manteniendo el eje cabeza-cuello-tronco alineado en todo momento y sin movimientos bruscos.",
            "Debe saber que puede circular por encima de los límites de velocidad."
        ],
        correct: 2
    },
    {
        question: "Conocer las principales calles y vías de una ciudad y los destinos más frecuentes que los viajeros solicitan, ¿en qué es beneficioso?",
        options: [
            "Realmente en nada pero es interesante conocer bien la ciudad donde se trabaja.",
            "Aumenta el tiempo del viaje.",
            "Mejora los trayectos aunque se reduce el número de clientes.",
            "Mejora la eficiencia de los trayectos y el cliente está más satisfecho."
        ],
        correct: 3
    },
    {
        question: "¿Qué puede hacer el conductor para mantener la confidencialidad y la protección de datos de sus clientes?",
        options: [
            "Compartir en sus redes sociales aspectos personales de sus clientes, fotos y cualquier otra información sensible.",
            "Proteger de las redes sociales y del almacenamiento ilícito de datos cualquier dato personal de los clientes.",
            "Compartir y comentar datos personales de los clientes con otros conductores.",
            "Almacenar, sin autorización, datos, fotografías e información de los clientes. Comunidad de Madrid"
        ],
        correct: 1
    },
    {
        question: "Según el protocolo de actuación en caso de emergencia P.A.S, ¿cuáles son las pautas que deben tomarse, por orden, en caso de accidente o emergencia?",
        options: [
            "Proteger, alertar y señalizar el lugar del accidente.",
            "Proteger, alertar y socorrer.",
            "Prevenir, socorrer y alertar a los medios sanitarios a través del 112.",
            "Socorrer, alertar y proteger."
        ],
        correct: 1
    },
    {
        question: "¿Qué debemos hacer con un herido en accidente de tráfico que está inconsciente y no podemos mantener vigilado porque estamos atendiendo a otros heridos?",
        options: [
            "Si no existe riesgo de lesión medular por la tipología del accidente deberemos ponerle en posición lateral de seguridad.",
            "Debemos ponerle en posición decúbito supino, bocarriba, para permitir que respire sin dificultad.",
            "No debemos hacer nada en particular porque está inconsciente, no hay mayor riesgo.",
            "Debemos siempre ponerle bocarriba y con las piernas elevadas."
        ],
        correct: 0
    },
    {
        question: "Cuando un cliente accede al vehículo con un perro guía, ¿qué es lo que debe evitar hacer el conductor con el animal?",
        options: [
            "Jugar con el perro para distraerlo mientras está conduciendo.",
            "Permitir que el perro entre en el vehículo.",
            "Asegurarse de que el perro esté cómodo.",
            "Proporcionar agua al perro antes de comenzar a conducir."
        ],
        correct: 0
    },
    {
        question: "De las que se citan, indique cuál no es una característica que defina al conductor como profesional.",
        options: [
            "Cumplir las normas de tráfico.",
            "No cumplir con las normas de tráfico.",
            "Mantener una óptima higiene personal.",
            "Prestar atención al cliente e intentar complacerle en todo en lo que esté en su mano (temperatura interior del vehículo, volumen de la radio, etc.)"
        ],
        correct: 1
    },
    {
        question: "Para los vehículos de arrendamiento con conductor VTC que realicen servicios al amparo del Decreto 5/2024, de 10 de enero, ¿qué tipo de seguro es obligatorio?",
        options: [
            "Un seguro a todo riesgo que cubra cualquier contingencia.",
            "El seguro de responsabilidad civil por los daños que puedan ocasionar por razón del transporte.",
            "Un seguro de muerte.",
            "Un seguro del hogar."
        ],
        correct: 1
    },
    {
        question: "Antes de empezar un servicio en un vehículo de arrendamiento con conductor (VTC) ¿qué información se debe comunicar al Registro de Comunicaciones de Servicios?",
        options: [
            "El nombre y número de identificación fiscal del titular de la autorización.",
            "El nombre y la fecha de nacimiento del conductor.",
            "El modelo del vehículo y su potencia.",
            "La fecha de nacimiento del conductor."
        ],
        correct: 0
    },
    {
        question: "¿Cuáles son las dimensiones del distintivo identificativo de la luna trasera del vehículo?",
        options: [
            "8 cm x 14 cm.",
            "9 cm x 12 cm.",
            "9 cm x 9 cm.",
            "20 cm x 30 cm."
        ],
        correct: 0
    },
    {
        question: "Los vehículos adaptados para personas con discapacidad ¿qué requisitos deben cumplir (entre otros)?",
        options: [
            "Deben ser más grandes que un vehículo de tamaño medio.",
            "Deben estar pintados de un color especial.",
            "Deben prestar servicio de acuerdo con la normativa de accesibilidad.",
            "No es necesario que cumplan ningún requisito especial."
        ],
        correct: 2
    },
    {
        question: "Respecto a los requisitos de los vehículos adscritos a autorizaciones VTC domiciliadas en la Comunidad de Madrid:",
        options: [
            "Los vehículos no podrán continuar dedicados a la actividad de arrendamiento norma general.",
            "Los vehículos a los que se adscriban las autorizaciones deberán estar residenciados en la Comunidad de Madrid.",
            "Los vehículos deberán estar clasificados con el distintivo ambiental CERO EMISIONES, ECO, o grupo C.",
            "Los vehículos no podrán tener más de 100 cv de potencia."
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de prueba, entre otras, deben superar los conductores de vehículos de arrendamiento con conductor VTC para prestar servicios urbanos en la Comunidad de Madrid?",
        options: [
            "Una prueba de conocimiento sobre manejo de dispositivos digitales con mapa de Madrid de navegación, primeros auxilios y uso correcto del castellano.",
            "Una prueba de resistencia física.",
            "Una prueba psicotécnica.",
            "Una prueba de conocimiento de primeros auxilios, de cultura general y de uso de mapas."
        ],
        correct: 0
    },
    {
        question: "Las empresas titulares de autorizaciones de transporte ¿qué necesitan para hacer contratos de transporte a distancia?",
        options: [
            "Un abogado en la empresa.",
            "Dirección física.",
            "Dirección y firma electrónica.",
            "Estar dados de alta en el Registro de Contratos de Transporte a Distancia."
        ],
        correct: 2
    },
    {
        question: "Respecto al lugar de colocación de los distintivos que identifican un vehículo VTC ¿dónde deberán ir colocados en el vehículo?",
        options: [
            "Deberán colocarse ambos en la parte trasera del vehículo.",
            "No deberán colocarse en las lunas/cristales de los vehículos para no interferir la visibilidad del conductor.",
            "Deberán colocarse en la parte superior izquierda de la luna delantera y en la parte inferior de la luna trasera del vehículo, respectivamente, de forma que resulten visibles desde el exterior.",
            "Deberán colocarse en la parte superior derecha de la luna delantera y en la parte inferior izquierda de la luna trasera del vehículo, respectivamente, de forma que resulten visibles desde el exterior."
        ],
        correct: 3
    },
    {
        question: "Los vehículos dedicados a la actividad de arrendamiento con conductor, entre otras condiciones, deberán cumplir que:",
        options: [
            "En ningún caso, podrán permanecer estacionados en la vía pública.",
            "Podrán circular por las vías públicas en busca de clientes siempre y cuando no haya autotaxis libres en las inmediaciones.",
            "En ningún caso, podrán circular por las vías públicas en busca de clientes ni propiciar la captación de personas viajeras que no hubiesen contratado previamente el servicio permaneciendo estacionados con este objeto.",
            "No podrán circular por las vías públicas durante la noche."
        ],
        correct: 2
    },
    {
        question: "Durante el desarrollo de un servicio contratado por plaza con pago individual se cumplirán, entre otras, las siguientes condiciones:",
        options: [
            "No se admitirán paradas intermedias, en ningún caso.",
            "Se podrá abandonar el vehículo antes de llegar al punto de destino indicado pero no supondrá la finalización del servicio.",
            "El itinerario será el que el usuario diga, sea o no el más adecuado.",
            "El itinerario será el más directo o adecuado entre el inicio y el final del trayecto principal. Comunidad"
        ],
        correct: 3
    },
    {
        question: "Para poder ejercer la profesión de conductor de vehículos de arrendamiento las siguientes condiciones:",
        options: [
            "Contar con el permiso de conducir de la clase B, con al menos dos años de antigüedad.",
            "Desempeñar simultáneamente otros trabajos que afecten a su capacidad física para la conducción o repercutan negativamente sobre la seguridad vial.",
            "No haber sido condenado por ningún delito contemplado en el Código Penal.",
            "Los conductores no es obligatorio que figuren en la plantilla de la empresa en situación de alta en el régimen de la seguridad social correspondiente."
        ],
        correct: 0
    },
    {
        question: "La pre-contratación del servicio se entiende como el establecimiento de un ______ entre la contratación y la prestación del servicio:",
        options: [
            "Intervalo de tiempo mínimo.",
            "Acuerdo verbal.",
            "Pago inicial.",
            "Contrato por escrito."
        ],
        correct: 0
    },
];

const questions2 = [
    {
        question: "El gerente de la empresa explicó que implementar un sistema de reservas online permitiría a los clientes programar sus viajes con antelación y reduciría las llamadas al centro de atención. ¿Qué beneficio tendría el sistema de reservas online?",
        options: [
            "Eliminar el servicio.",
            "Subir el precio de los viajes.",
            "Facilitar la planificación de viajes.",
            "Aumentar las llamadas al centro."
        ],
        correct: 2
    },
    {
        question: "Conseguir que una situación confusa se aclare y se entienda, significa :",
        options: [
            "Arrojar luz.",
            "Llamar al orden.",
            "Poner en tela de juicio.",
            "Poner los puntos sobre las íes."
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes definiciones corresponde a cerebro?",
        options: [
            "Órgano central del sistema nervioso que controla las funciones del cuerpo.",
            "Parte del sistema digestivo que procesa los alimentos.",
            "Glándula que regula el metabolismo.",
            "Órgano sensorial que detecta sonidos."
        ],
        correct: 0
    },
    {
        question: "La expresión “Aprovechar la ocasión para beneficio propio” significa :",
        options: [
            "Remar contra corriente.",
            "Pescar en río revuelto.",
            "Cruzar los dedos.",
            "Echar leña al fuego."
        ],
        correct: 1
    },
    {
        question: "El tráfico mejoró después de que la policía ___ la vía.",
        options: [
            "Despejara.",
            "Despejará.",
            "Despejaba.",
            "Despejé."
        ],
        correct: 0
    },
    {
        question: "En la expresión “La jornada fue extenuante”, “extenuante” significa:",
        options: [
            "Muy rápida.",
            "Muy cansada.",
            "Muy laboriosa.",
            "Muy ardua."
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el antónimo de “ exabrupto”?",
        options: [
            "Grosería.",
            "Corrección.",
            "Inconveniencia.",
            "Brusquedad."
        ],
        correct: 1
    },
    {
        question: "Expresión que describe a quien se esfuerza mucho, pero sin obtener resultado alguno:",
        options: [
            "Nadar entre dos aguas.",
            "Nadar para morir en la orilla.",
            "Nadar contracorriente.",
            "Nadar y guardar la ropa."
        ],
        correct: 1
    },
    {
        question: "¿Qué palabra no guarda relación con el resto?",
        options: [
            "Trigo.",
            "Maíz.",
            "Acerola.",
            "Cebada."
        ],
        correct: 2
    },
    {
        question: "En la expresión “La crítica fue acerba”, “acerba” significa:",
        options: [
            "Confusa y tibia.",
            "Dura y mordaz.",
            "Formal y neutra.",
            "Ligera y amable."
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de palabra es autosuficiente?",
        options: [
            "Simple.",
            "Derivada.",
            "Compuesta.",
            "Parasintética"
        ],
        correct: 2
    },
    {
        question: "El cliente, cuyo equipaje estaba dañado, solicitó que se lo cambiara por otro, ___ no estaba en mi mano hacerlo.",
        options: [
            "Por más que.",
            "Aun cuando.",
            "Aunque.",
            "A pesar de."
        ],
        correct: 2
    },
    {
        question: "En un sistema de navegación GPS integrado en el vehículo, ¿cuál es el procedimiento más adecuado para modificar la representación cartográfica (por ejemplo, vista 2D, 3D o modo satélite) sin alterar otros parámetros de configuración?",
        options: [
            "Ajustar la configuración general de la pantalla del vehículo.",
            "Acceder al menú específico del GPS y seleccionar el tipo de mapa deseado.",
            "No es posible modificar el tipo de mapa en este sistema.",
            "Utilizar instrumentos analógicos como una brújula para complementar la orientación."
        ],
        correct: 1
    },
    {
        question: "Si durante la planificación de un trayecto el GPS detecta una ruta saturada de tráfico, ¿qué actuación se considera más prudente antes de iniciar la marcha?",
        options: [
            "Mantener la ruta inicial sin modificarla.",
            "Consultar y escoger una alternativa menos congestionada previo al desplazamiento.",
            "No atender a ninguna sugerencia del sistema.",
            "Detener el vehículo para buscar manualmente otro itinerario."
        ],
        correct: 1
    },
    {
        question: "¿Qué institución o servicio público de interés ciudadano se encuentra en la Calle de la Bolsa, número 8, en Madrid?",
        options: [
            "Sede del Ministerio de Industria y Energía.",
            "Delegación del Ministerio de Agricultura, Pesca y Alimentación.",
            "Oficina Central de Atención al Ciudadano del Ministerio de Justicia.",
            "Representación diplomática española en la Unión Europea."
        ],
        correct: 2
    },
    {
        question: "Los vehículos de gas licuado de petróleo (GLP) deben tener el distintivo Eco para circular en una Zona de Bajas Emisiones (ZBE).",
        options: [
            "Falso.",
            "Solo con permiso especial.",
            "Solo durante el día.",
            "Verdadero."
        ],
        correct: 3
    },
    {
        question: "Los conductores de vehículos sin distintivo ambiental no pueden circular en Zonas de Bajas Emisiones",
        options: [
            "Verdadero, con la excepción de los vehículos de las personas con movilidad reducida",
            "Falso.",
            "Solo con permiso especial.",
            "Solo durante el día."
        ],
        correct: 0
    },
    {
        question: "¿Junto a qué calles se ubica la Plaza de los Carros en Madrid?",
        options: [
            "Calle de Don Pedro y Carrera de San Francisco.",
            "Calle Gran Vía y Plaza de España.",
            "Calle de Oriente y Plaza Mayor.",
            "Calle de Calatrava y Calle Toledo."
        ],
        correct: 0
    },
    {
        question: "¿Qué relación establece la Ley 7/2021, de Cambio Climático y Transición Energética, con las Zonas de Bajas Emisiones (ZBE)?",
        options: [
            "La Ley 7/2021 obliga a crear ZBE en municipios de más de 50.000 habitantes.",
            "Ambas proponen incrementar el uso de vehículos diésel.",
            "Ambas promueven el transporte público.",
            "Reducir la contaminación del aire en áreas urbanas."
        ],
        correct: 0
    },
    {
        question: "Una etiqueta medioambiental de color azul con un 0 (cero) en su interior, ¿qué tipo de vehículos identifica?",
        options: [
            "Identifica a los vehículos pila de combustible.",
            "Identifica a los vehículos diésel de última generación.",
            "Identifica a los vehículos eléctricos enchufables con autonomía inferior a 40 km, vehículos híbridos no enchufables (HEV), vehículos propulsados por gas natural comprimido (GNC), gas natural licuado (GNL) o gas licuado del petróleo (GLP). Deben cumplir los criterios de la etiqueta C.",
            "Identifica a los vehículos más eficientes. Tendrán derecho a esta etiqueta vehículos eléctricos de batería (BEV) , vehículos eléctricos de autonomía extendida (REEV), vehículos eléctricos híbridos enchufables (PHEV) con una autonomía de 40 km o vehículos de pila de combustible."
        ],
        correct: 3
    },
    {
        question: "En la dirección Gran Vía 28 se ubica un edificio emblemático cuya relevancia histórica es destacada. ¿De cuál se trata y por qué motivo es reconocido?",
        options: [
            "La Torre de Madrid, uno de los edificios más emblemáticos del centro de laciudad de Madrid, fue durante años el rascacielos de hormigón más alto del mundo.",
            "La Torre Picasso, se convirtió en el edificio más alto de Madrid a partir de la fecha de su inauguración, en enero de 1989",
            "Edificio Telefónica, fue el primer rascacielos de España, en el año 1930, el más alto de Europa en su momento.",
            "Ninguna respuesta es correcta."
        ],
        correct: 2
    },
    {
        question: "¿Qué edificio oficial se ilumina habitualmente de color blanco durante la noche en Madrid, y dónde se encuentra?",
        options: [
            "La Puerta de Alcalá, y se encuentra en Alcalá de Henares",
            "La Cibeles, y se encuentra en Gran Vía",
            "Banco de España, y se encuentra en Paseo de la Castellana",
            "Palacio de Cibeles, y se encuentra en calle Alcalá"
        ],
        correct: 3
    },
    {
        question: "En la calle de la Cava baja número 35, ¿qué lugar podemos encontrar de interés?",
        options: [
            "El restaurante Casa Lucio.",
            "El restaurante El Espejo.",
            "El Museo Nacional del Prado.",
            "La oficina central del Ayuntamiento de Madrid."
        ],
        correct: 0
    },
    {
        question: "El dióxido de azufre, ¿con qué fórmula química se representa en los mapas de calidad del aire?",
        options: [
            "CO2.",
            "SO2.",
            "O3.",
            "H2O."
        ],
        correct: 1
    },
    {
        question: "Los vehículos de más de 8 plazas y pesados tanto de gasolina como diésel, matriculados desde 2014, ¿qué etiqueta medioambiental llevarán?",
        options: [
            "La etiqueta \"C\", verde.",
            "La etiqueta \"B\", amarilla.",
            "La etiqueta \"ECO\".",
            "La etiqueta azul."
        ],
        correct: 0
    },
    {
        question: "El campus de Ciudad Universitaria en Madrid, alberga varias instituciones académicas. ¿Cuál de las siguientes tiene allí su sede principal?",
        options: [
            "Universidad Carlos III.",
            "Universidad Complutense de Madrid.",
            "IE University.",
            "Universidad de Alcalá."
        ],
        correct: 1
    },
    {
        question: "¿Qué parque de Madrid destaca por su jardín histórico, un búnker de la Guerra Civil y un laberinto vegetal?",
        options: [
            "Parque Juan Carlos I.",
            "Parque de Berlín.",
            "Parque El Capricho.",
            "Parque de Atenas."
        ],
        correct: 2
    },
    {
        question: "En un nivel de alerta ( Escenario 5), ¿ quiénes pueden circular?:",
        options: [
            "Solo vehículos ECO.",
            "Sólo vehículos CERO y ECO.",
            "Todos los vehículos si pagan peaje.",
            "Ningún vehículo puede circular."
        ],
        correct: 1
    },
    {
        question: "¿Qué sitio de interés se encuentra en la Carrera de San Jerónimo s/n ?",
        options: [
            "El Senado.",
            "El hospital universitario Fundación Jiménez Díaz.",
            "El Congreso de los Diputados.",
            "El estadio Santiago Bernabéu."
        ],
        correct: 2
    },
    {
        question: "Al hablar de calidad del aire, los niveles de CO2 hacen referencia a la presencia ¿de qué tipo de gas?",
        options: [
            "Al oxígeno.",
            "Al monóxido de carbono.",
            "Al dióxido de carbono.",
            "Al nitrógeno. PRIMEROS AUXILIOS"
        ],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes prácticas refleja de manera más completa un enfoque profesional de inclusión y diversidad en el servicio VTC?",
        options: [
            "Aplicar preferencias de atención según la frecuencia con la que el cliente utilice el servicio.",
            "Garantizar un trato equitativo, imparcial y coherente para todos los usuarios, independientemente de su origen o condición.",
            "Atender únicamente las necesidades explícitas del cliente, ignorando cualquier sugerencia o reclamación.",
            "Ajustar tarifas o condiciones del servicio en función del perfil del pasajero, siempre que no lo note."
        ],
        correct: 1
    },
    {
        question: "¿Qué comportamiento debe evitar estrictamente un conductor VTC al comunicarse con una persona con discapacidad auditiva?",
        options: [
            "Utilizar jerga, tecnicismos o expresiones coloquiales que dificulten la comprensión del mensaje.",
            "Vocalizar de manera clara y pausada sin elevar innecesariamente el volumen.",
            "Emplear frases directas y sencillas para facilitar la comunicación.",
            "Mantener un contacto visual adecuado para permitir el apoyo en lectura labial."
        ],
        correct: 0
    },
    {
        question: "Tras un accidente, un pasajero presenta una quemadura química. ¿Cuál es la actuación inicial más adecuada por parte del conductor?",
        options: [
            "Aplicar cremas calmantes o ungüentos para minimizar el dolor.",
            "Colocar un vendaje firme para limitar la exposición al agente químico.",
            "Irrigar la zona afectada de inmediato con abundante agua durante al menos 20 minutos, evitando retirar restos adheridos.",
            "Proporcionar líquidos para reducir su nivel de estrés y mantenerlo hidratado."
        ],
        correct: 2
    },
    {
        question: "Para garantizar la protección de los datos personales del pasajero, ¿qué debe priorizar el conductor?",
        options: [
            "Facilitar información del cliente a terceros si lo requieren verbalmente.",
            "Ofrecer un servicio respetuoso, discreto y ajustado a la normativa de privacidad, sin recopilar datos innecesarios.",
            "Omitir la lectura de políticas de protección de datos si ralentiza el servicio.",
            "Guardar información en dispositivos personales sin medidas de seguridad adicionales."
        ],
        correct: 1
    },
    {
        question: "En la conducción profesional de un vehículo VTC, ¿qué elemento resulta esencial para garantizar la seguridad del pasajero durante el trayecto?",
        options: [
            "Incrementar la velocidad para optimizar tiempos y mejorar la experiencia del cliente.",
            "Permitir que los pasajeros viajen sin cinturón de seguridad para mayor comodidad en recorridos cortos.",
            "Relajar la atención a señales de tráfico cuando las condiciones parecen seguras.",
            "Cumplir rigurosamente con la normativa de seguridad vial y conducción preventiva."
        ],
        correct: 3
    },
    {
        question: "En caso de encontrar a una persona atrapada en un vehículo tras un accidente, ¿cuál es la actuación inicial correcta para un conductor VTC?",
        options: [
            "Extraerla de inmediato, incluso sin material adecuado, para evitar mayores lesiones.",
            "Mantener la calma y ofrecerle agua mientras llegan los servicios de emergencia.",
            "Conservar la calma, evaluar la situación sin manipular a la víctima y contactar de inmediato con los servicios de emergencia.",
            "Mover el vehículo con cuidado para liberar a la persona lo antes posible."
        ],
        correct: 2
    },
    {
        question: "Ante una herida con sangrado activo, ¿cuál es la medida de primeros auxilios que debe aplicarse en primera instancia?",
        options: [
            "Lavar la zona con agua y jabón antes de cualquier otro procedimiento.",
            "Aplicar presión directa con un paño o compresa limpia para intentar controlar la hemorragia.",
            "Desinfectar inmediatamente con alcohol para reducir el riesgo de infección.",
            "Ventilar la herida soplando para favorecer la coagulación."
        ],
        correct: 1
    },
    {
        question: "Si una persona se encuentra atragantada y no puede hablar, toser ni respirar, ¿qué debe hacer el conductor?",
        options: [
            "Ofrecer pequeños sorbos de agua para intentar disolver el obstáculo.",
            "Ejecutar la maniobra de Heimlich de forma inmediata, siempre que se tenga formación básica.",
            "Esperar unos segundos a ver si logra expulsarlo con tos espontánea.",
            "No intervenir y limitarse a llamar al 112."
        ],
        correct: 1
    },
    {
        question: "Un cliente acaba de llegar a una ciudad desconocida. ¿Qué tipo de información adicional puede resultar especialmente útil proporcionarle?",
        options: [
            "Datos sobre otros conductores que operen en la zona.",
            "Recomendaciones sobre lugares de interés, restaurantes, zonas culturales, eventos locales, centros de negocios y oficinas públicas.",
            "Descripción técnica del vehículo y su mantenimiento.",
            "Información personal del conductor para “generar confianza”."
        ],
        correct: 1
    },
    {
        question: "En primeros auxilios aplicados a un accidente vial, ¿cómo debe realizarse la extracción de un herido de un vehículo cuando resulte estrictamente necesaria?",
        options: [
            "Manteniendo alineado el eje cabeza-cuello-tronco y efectuando la maniobra con extremo cuidado para evitar lesiones cervicales.",
            "Sacándolo rápidamente para evitar mayores daños.",
            "Extraerlo con rapidez para colocarlo en posición lateral de seguridad.",
            "Limitarse únicamente a colocarlo en posición lateral de seguridad sin valorar otros riesgos."
        ],
        correct: 0
    },
    {
        question: "Ante un herido inconsciente en un accidente de tráfico, y no pudiendo supervisarlo porque es necesario atender a otras víctimas, ¿qué actuación resulta más adecuada?",
        options: [
            "Si la dinámica del accidente no sugiere riesgo de lesión medular, colocarlo en posición lateral de seguridad (PLS) para mantener la vía aérea permeable y reducir riesgo de aspiración.",
            "Mantenerlo en decúbito supino para garantizar una ventilación más uniforme, salvo que presente vómitos.",
            "Evitar cualquier intervención adicional, dado que la inconsciencia no implica un riesgo inmediato si no hay sangrado.",
            "Tumbarlo boca arriba con las piernas elevadas para favorecer el retorno venoso mientras llega la ayuda sanitaria."
        ],
        correct: 0
    },
    {
        question: "Durante un trayecto, una pasajera embarazada inicia el trabajo de parto. ¿Cuál es el proceder más adecuado para el conductor?",
        options: [
            "Contactar con el 112, mantener la calma y garantizar el máximo confort posible, evitando cualquier traslado apresurado.",
            "Administrar un analgésico común para reducir su dolor y continuar el trayecto con normalidad.",
            "Acelerar hacia un centro sanitario mientras se le ofrece agua y se aplican paños fríos para disminuir el malestar.",
            "Detener el vehículo, pedirle que descienda y esperar juntos la llegada del personal sanitario."
        ],
        correct: 0
    },
    {
        question: "Cuando un cliente viaja con un perro guía, ¿qué acción debe evitar rigurosamente el conductor?",
        options: [
            "Interactuar con el perro (acariciarlo, jugar o distraerlo), ya que podría alterar su función de asistencia y seguridad.",
            "Permitir el acceso del perro al vehículo junto al usuario.",
            "Garantizar que el animal permanezca situado en un espacio confortable durante el trayecto.",
            "Facilitar agua al perro antes de iniciar el desplazamiento si el cliente lo solicita."
        ],
        correct: 0
    },
    {
        question: "En cuanto a la asistencia en Europa, ¿cuál de las siguientes afirmaciones es incorrecta?",
        options: [
            "El número de emergencia 112 es válido en toda Europa.",
            "No debemos utilizar el número de emergencia 112 en Europa, solo en nuestro país.",
            "El 112 es el número de emergencia para solicitar ayuda en cualquier país de Europa.",
            "Es importante conocer el número de emergencia 112 cuando viajamos por Europa."
        ],
        correct: 1
    },
    {
        question: "¿Qué medida contribuye de forma más eficaz a garantizar la confidencialidad y protección de datos de los clientes?",
        options: [
            "Publicar en redes sociales información obtenida durante el servicio para mostrar experiencias laborales.",
            "Proteger los datos personales evitando su difusión, almacenamiento inadecuado o tratamiento no autorizado, cumpliendo la normativa vigente.",
            "Intercambiar información de clientes con otros conductores para mejorar la coordinación del servicio.",
            "Conservar imágenes o datos identificativos del cliente sin su consentimiento para futuros usos."
        ],
        correct: 1
    },
    {
        question: "¿Cuál de los siguientes comportamientos NO refleja profesionalidad en un conductor VTC?",
        options: [
            "Cumplir estrictamente las normas de circulación, incluso bajo presión del cliente.",
            "Incumplir deliberadamente las normas de tráfico para agilizar el servicio o reducir tiempos.",
            "Mantener una higiene personal y apariencia adecuadas al trato con el público.",
            "Ajustar condiciones de confort dentro del vehículo según las necesidades del usuario."
        ],
        correct: 1
    },
    {
        question: "Si resulta estrictamente necesario trasladar a un herido en el vehículo VTC, ¿qué precaución debe priorizar el conductor?",
        options: [
            "Ubicar al herido en los asientos traseros y asegurar el cinturón sin considerar otras limitaciones físicas.",
            "Transportarlo en brazos con la cabeza extendida hacia atrás para facilitar la respiración.",
            "Realizar cualquier movilización manteniendo el eje cabeza–cuello–tronco alineado, evitando torsiones y desplazamientos bruscos.",
            "Superar los límites de velocidad para reducir el tiempo de llegada al centro médico."
        ],
        correct: 2
    },
    {
        question: "¿Por qué es beneficioso que el conductor conozca las vías principales de la ciudad y los destinos más solicitados?",
        options: [
            "No aporta beneficios reales, aunque puede resultar curioso conocer el entorno urbano.",
            "Incrementa la duración del trayecto, pero mejora la familiaridad con la ciudad.",
            "Optimiza el recorrido aunque pueda disminuir la frecuencia de clientes atendidos.",
            "Permite mejorar la eficiencia de los desplazamientos, reducir tiempos y aumentar la satisfacción del cliente."
        ],
        correct: 3
    },
    {
        question: "A los efectos de salvaguardar los derechos de las personas usuarias de este tipo de servicios (en VTC), las empresas con las que se realiza la contratación de los mismos deberán (entre otros requisitos):",
        options: [
            "Es recomendable que tengan hojas de reclamaciones.",
            "Contar, para las personas con discapacidad, con un medio accesible de comunicación vía web y con un número de atención telefónica accesible a través de texto.",
            "Es recomendable llevar en los vehículos hojas de reclamaciones.",
            "No utilizar el nombre del usuario."
        ],
        correct: 1
    },
    {
        question: "La normativa que regula la prestación del servicio en vehículos de alquiler con conductor VTC, ¿permite la realización de servicios de arrendamiento fuera del ámbito territorial legalmente establecido sin restricciones?",
        options: [
            "No.",
            "Sí, lo permite sin poner ninguna restricción.",
            "Sí, pero sólo 90 días al año.",
            "Sí, pero con restricciones."
        ],
        correct: 0
    },
    {
        question: "Durante el desarrollo de un servicio contratado por plaza con pago individual se cumplirán, entre otras, las siguientes condiciones:",
        options: [
            "No se admitirán paradas intermedias, en ningún caso.",
            "Se podrá abandonar el vehículo antes de llegar al punto de destino indicado pero no supondrá la finalización del servicio.",
            "El itinerario será el que el usuario diga, sea o no el más adecuado.",
            "El itinerario será el más directo o adecuado entre el inicio y el final del trayecto principal."
        ],
        correct: 3
    },
    {
        question: "Según la Ley 13/2021, la prestación de servicios mediante arrendamiento de vehículos con conductor VTC se considera:",
        options: [
            "Transporte público discrecional de viajeros.",
            "Transporte público regular de viajeros.",
            "Transporte público discrecional mixto.",
            "Transporte público regular de mercancías y viajeros"
        ],
        correct: 0
    },
    {
        question: "¿Qué se considera una infracción muy grave en relación con los servicios de arrendamiento de vehículo con conductor, según la Ley 16/1987?",
        options: [
            "Ofrecer descuentos sin autorización.",
            "Recoger clientes sin pre-contratación.",
            "Cobrar tarifas adicionales.",
            "Promover servicios adicionales."
        ],
        correct: 1
    },
    {
        question: "Respecto al lugar de colocación de los distintivos que identifican un vehículo VTC ¿dónde deberán ir colocados en el vehículo?",
        options: [
            "Deberá colocarse uno en la parte delantera del vehículo y otro en la parte trasera.",
            "No deberán colocarse en las lunas/cristales de los vehículos para no interferir la visibilidad del conductor.",
            "Deberán colocarse en la parte superior izquierda de la luna delantera y en la parte inferior de la luna trasera del vehículo, respectivamente, de forma que resulten visibles desde el exterior.",
            "Deberán colocarse en la parte superior derecha de la luna delantera y en la parte inferior izquierda de la luna trasera del vehículo, respectivamente, de forma que resulten visibles desde el exterior."
        ],
        correct: 3
    },
    {
        question: "Señala la respuesta correcta.",
        options: [
            "Las empresas no necesitan disponer de dirección y firma electrónica para documentar a distancia el contrato de transporte según el Decreto 5/2024.",
            "Las empresas deben contar únicamente con una dirección física, sin necesidad de firma electrónica, según el Decreto 5/2024.",
            "Las empresas deben disponer de dirección y firma electrónica para documentar a distancia el contrato de transporte.",
            "Las empresas pueden documentar a distancia el contrato de transporte sin cumplir con las normativas del Decreto 5/2024."
        ],
        correct: 2
    },
    {
        question: "¿Cuántos años, como máximo, pueden tener los vehículos destinados al",
        options: [
            "Cinco años.",
            "Quince años.",
            "Veinte años.",
            "Diez años."
        ],
        correct: 3
    },
    {
        question: "Los vehículos dedicados a la actividad de arrendamiento con conductor, entre otras condiciones, deberán cumplir que:",
        options: [
            "En ningún caso, podrán permanecer estacionados en la vía pública.",
            "Podrán circular por las vías públicas en busca de clientes siempre y cuando no haya autotaxis libres en las inmediaciones.",
            "En ningún caso, podrán circular por las vías públicas en busca de clientes ni propiciar la captación de personas viajeras que no hubiesen contratado previamente el servicio permaneciendo estacionados con este objeto.",
            "No podrán circular por las vías públicas durante la noche."
        ],
        correct: 2
    },
    {
        question: "¿Qué no está permitido sobre las autorizaciones VTC según el Decreto 5/2024?",
        options: [
            "Otorgarlas de forma conjunta a más de una persona física.",
            "Otorgarlas a una persona jurídica.",
            "Otorgarlas a una sociedad limitada.",
            "Otorgarlas a una sociedad anónima."
        ],
        correct: 0
    },
    {
        question: "¿Qué debe hacer el titular de la autorización VTC antes de iniciar un servicio de arrendamiento con conductor según la Ley 16/1987?",
        options: [
            "Obtener un permiso especial.",
            "Registrar el vehículo en la base de datos.",
            "Solicitar una inspección técnica.",
            "Comunicar los datos del servicio por vía electrónica al Registro de Comunicaciones de los Servicios de Arrendamiento de Vehículos con Conductor."
        ],
        correct: 3
    },
    {
        question: "¿Puede considerarse la actividad de arrendamiento de vehículos con conductor como transporte privado regular?",
        options: [
            "Sí, pero solo en áreas rurales.",
            "No.",
            "No, excepto en días festivos.",
            "No, pero sí en ciertos casos excepcionales."
        ],
        correct: 1
    },
];

const questions3 = [
    {
        question: "¿Cuál es la forma correcta de entre las siguientes?",
        options: [
            "Nosotros iremos al cine esta noche para ver una película.",
            "Nosotros vayamos al cine esta noche para ver una película.",
            "Nosotros fuésemos al cine esta noche para ver una película.",
            "Vosotros iremos al cine esta noche para ver una película."
        ],
        correct: 0
    },
    {
        question: "Elija la respuesta correcta, entre las siguientes, respecto a esta afirmación: “Si tengo más dinero ahorrado”",
        options: [
            "Hubieran invertido en un negocio propio.",
            "Invertí en un negocio propio.",
            "Puedo invertir en un negocio propio.",
            "Invertíamos en un negocio propio."
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la forma correcta de entre las siguientes?",
        options: [
            "Nosotros ser limpiando la casa antes de que lleguen los invitados.",
            "Nosotros estamos limpiado la casa antes de que lleguen los invitados.",
            "Nosotros limpiado estamos la casa antes de que lleguen los invitados.",
            "Nosotros estamos limpiando la casa antes de que lleguen los invitados."
        ],
        correct: 3
    },
    {
        question: "Elija la respuesta correcta, entre las siguientes, respecto a esta afirmación: “Cuando llegue a la oficina mañana”",
        options: [
            "Revisaré los correos.",
            "Revisaste los correos.",
            "Revisé los correos.",
            "Revisaba los correos."
        ],
        correct: 0
    },
    {
        question: "Seleccione la opción correcta:",
        options: [
            "¿Cuándo llegastes a Madrid?",
            "¿Cuándo llegar a Madrid?",
            "¿Cuándo llegaste a Madrid?",
            "¿Cuándo llegando a Madrid? Comunidad de Madrid"
        ],
        correct: 2
    },
    {
        question: "Elija la respuesta que sea correcta de entre las siguientes:",
        options: [
            "Los perros están cabe su caseta.",
            "Los perros están dentro de su caseta.",
            "Los perros están dentro su caseta.",
            "Los perros están fuera su caseta."
        ],
        correct: 1
    },
    {
        question: "Elija la respuesta correcta, entre las siguientes, respecto a esta afirmación: “Estar como una regadera.”",
        options: [
            "Estar loco o actuar de manera excéntrica.",
            "Estar serio o actuar de manera formal.",
            "Estar mojado.",
            "Hacer ejercicio."
        ],
        correct: 0
    },
    {
        question: "Indique el tiempo verbal pretérito imperfecto indicativo:",
        options: [
            "Comer.",
            "Estuvimos jugando.",
            "Conducíamos.",
            "Ninguna de las respuestas anteriores es correcta."
        ],
        correct: 2
    },
    {
        question: "¿Qué palabra no es sinónimo de ‘valiente’?",
        options: [
            "Intrépido.",
            "Aguerrido.",
            "Melifluo.",
            "Bravo."
        ],
        correct: 2
    },
    {
        question: "¿Qué pareja de palabras no significan lo mismo?",
        options: [
            "Pequeño-Diminuto.",
            "Ancho-Extenso.",
            "Fuerte-Débil.",
            "Espacioso-Amplio."
        ],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes definiciones corresponde a \"chasis\"?",
        options: [
            "Estructura principal de un vehículo que soporta todos los componentes.",
            "Parte del vehículo que almacena combustible.",
            "Componente que activa las luces delanteras.",
            "Elemento que ajusta la inclinación del volante. Comunidad de Madrid"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes definiciones corresponde a \"ajedrez\"?",
        options: [
            "Juego de mesa en el que dos jugadores mueven piezas en un tablero de 64 casillas.",
            "Deporte en el que se utiliza arco y flechas.",
            "Juego de mesa en el que dos jugadores mueven piezas en un tablero de 60 casillas.",
            "Entretenimiento en el que se resuelven acertijos matemáticos."
        ],
        correct: 0
    },
    {
        question: "¿Qué función de una aplicación GPS es útil para evitar distracciones visuales?",
        options: [
            "La función de guía visual.",
            "La función de zoom automático.",
            "La función de mapa en 3D.",
            "La función de comandos de voz."
        ],
        correct: 3
    },
    {
        question: "¿Qué medida incluye el protocolo de actuación en alta contaminación?",
        options: [
            "Restringir el acceso al transporte público.",
            "Restricciones de circulación.",
            "Promoción del uso de vehículos eléctricos.",
            "Instalación de más zonas verdes."
        ],
        correct: 1
    },
    {
        question: "¿Qué mercado madrileño es famoso por su arquitectura de hierro y cristal?",
        options: [
            "Mercado Maravillas.",
            "Mercado de Vallehermoso.",
            "Mercado de San Antón.",
            "Mercado de San Miguel."
        ],
        correct: 3
    },
    {
        question: "¿Qué famoso rastro madrileño se celebra los domingos y es conocido como uno de los mercados al aire libre más grandes de España?",
        options: [
            "Mercado de San Miguel.",
            "El Rastro.",
            "Mercado de la Cebada.",
            "Mercado de Antón Martín. Comunidad de Madrid"
        ],
        correct: 1
    },
    {
        question: "¿Qué plaza en Madrid alberga un rascacielos?",
        options: [
            "Plaza Pablo Ruiz Picasso.",
            "Plaza del Marqués de Salamanca.",
            "Plaza Olavide.",
            "Plaza Cataluña."
        ],
        correct: 0
    },
    {
        question: "¿Qué calle en Madrid es conocida por su concentración de teatros alternativos?",
        options: [
            "Calle Serrano.",
            "Calle Alberto Aguilera.",
            "Calle Lavapiés.",
            "Calle Mayor."
        ],
        correct: 2
    },
    {
        question: "El Palacio Real de Madrid está en la Calle de Bailén:",
        options: [
            "Falso.",
            "Verdadero.",
            "Se encuentra en la Gran Vía.",
            "Se encuentra en la Calle Serrano."
        ],
        correct: 1
    },
    {
        question: "¿En qué lugar de Madrid se encuentra el Museo Sorolla?",
        options: [
            "Calle General Martínez Campos.",
            "Calle Francisco Silvela.",
            "Calle del Pintor Sorolla.",
            "Calle Conde de Peñalver."
        ],
        correct: 0
    },
    {
        question: "¿Qué calle de Madrid es famosa por sus tiendas de lujo y sus boutiques de alta moda?",
        options: [
            "Paseo de la Castellana.",
            "Calle Poeta Joan Maragall.",
            "Calle Serrano.",
            "Avenida de América."
        ],
        correct: 2
    },
    {
        question: "¿Qué se debe hacer para obtener el distintivo medioambiental Eco?",
        options: [
            "Tener un vehículo diésel Euro 3.",
            "Tener un vehículo de gasolina Euro 2.",
            "Tener un vehículo híbrido o de gas.",
            "Tener un vehículo eléctrico puro. Comunidad de Madrid"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es una de las metas de la Ley 7/2021 en relación con las Zonas de Bajas Emisiones (ZBE) para el año 2030?",
        options: [
            "Incrementar la construcción de edificios industriales.",
            "Fomentar el uso de vehículos diésel.",
            "Aumentar las tarifas de transporte.",
            "Reducir las emisiones de CO2 en un 39,5%."
        ],
        correct: 3
    },
    {
        question: "El Estadio Riyadh Air Metropolitano está ubicado cerca del Parque:",
        options: [
            "Eva Perón.",
            "El Retiro.",
            "Juan Carlos I.",
            "Tierno Galván."
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de infraestructura se promueve en las Zonas de Bajas Emisiones (ZBE) según la Ley 7/2021?",
        options: [
            "Infraestructura de autopistas.",
            "Infraestructura de centros comerciales.",
            "Infraestructura de recarga.",
            "Expansión de zonas industriales."
        ],
        correct: 2
    },
    {
        question: "¿Qué incentivo ofrece la Ley 7/2021 para promover el uso de vehículos eléctricos en las Zonas de Bajas Emisiones (ZBE)?",
        options: [
            "Descuentos en combustibles fósiles.",
            "Aumento de las tarifas de estacionamiento",
            "Subvenciones para la compra de vehículos eléctricos.",
            "Eliminación de las zonas verdes."
        ],
        correct: 2
    },
    {
        question: "¿Qué distintivo medioambiental se otorga a los vehículos de gasolina Euro 3?",
        options: [
            "C.",
            "B.",
            "Eco.",
            "Cero emisiones."
        ],
        correct: 1
    },
    {
        question: "¿Qué impacto tienen las Zonas de Bajas Emisiones (ZBE) en la calidad del aire?",
        options: [
            "Contribuyen a la reducción de partículas.",
            "Incrementan la contaminación del aire.",
            "No tienen ningún impacto.",
            "Aumentan el uso de combustibles fósiles. Comunidad de Madrid"
        ],
        correct: 0
    },
    {
        question: "¿Qué distintivo medioambiental se otorga a los vehículos híbridos enchufables con una autonomía inferior a 40km?",
        options: [
            "Cero emisiones.",
            "B.",
            "Eco.",
            "C."
        ],
        correct: 2
    },
    {
        question: "¿Qué deben hacer las autoridades locales para gestionar las Zonas de Bajas Emisiones (ZBE)?",
        options: [
            "Incrementar el uso de combustibles fósiles.",
            "Eliminar los carriles bici.",
            "Desarrollar planes de movilidad sostenible.",
            "Aumentar las tarifas de estacionamiento."
        ],
        correct: 2
    },
    {
        question: "¿Qué debe hacer un conductor al recibir una queja del cliente?",
        options: [
            "Ignorar la queja.",
            "Culpar al cliente.",
            "Escuchar con atención y mostrar empatía.",
            "Llamar al 112."
        ],
        correct: 2
    },
    {
        question: "¿Cómo debemos actuar si un herido presenta una hemorragia arterial?",
        options: [
            "Esperar a que la hemorragia se detenga sola.",
            "Aplicar presión directa sobre la arteria afectada.",
            "Darle algo de beber para calmarlo.",
            "Mover al herido para que esté más cómodo."
        ],
        correct: 1
    },
    {
        question: "Según el Real Decreto Legislativo 1/2013, ¿qué se debe hacer para asegurar la accesibilidad en la información para usuarios de vehículo de arrendamiento con conductor?",
        options: [
            "Proporcionar información en varios idiomas.",
            "Proporcionar información en formatos accesibles como braille y audio.",
            "Utilizar gráficos y diagramas.",
            "Ofrecer información en línea. Comunidad de Madrid"
        ],
        correct: 1
    },
    {
        question: "En cuanto a la asistencia en Europa, ¿cuál de las siguientes afirmaciones es incorrecta?",
        options: [
            "El número de emergencia 112 es válido en toda Europa.",
            "No debemos utilizar el número de emergencia 112 en Europa, solo en nuestro país.",
            "El 112 es el número de emergencia para solicitar ayuda en cualquier país de Europa.",
            "Es importante conocer el número de emergencia 112 cuando viajamos por Europa."
        ],
        correct: 1
    },
    {
        question: "¿Qué debemos hacer si una persona tiene una herida en el pecho en un accidente de tráfico?",
        options: [
            "Lavar la herida con agua.",
            "Aplicar hielo en la herida.",
            "Darle un analgésico.",
            "Cubrir la herida con un paño limpio y llamar a los servicios de emergencia."
        ],
        correct: 3
    },
    {
        question: "¿Cuál es el primer paso para evaluar el nivel de consciencia de un herido?",
        options: [
            "Tomarle la presión arterial.",
            "Aplicar frío en su frente.",
            "Moverlo para ver si reacciona.",
            "Hablarle en voz alta y observar su reacción."
        ],
        correct: 3
    },
    {
        question: "¿Qué debemos hacer para mantener el eje cabeza-cuello-tronco de un herido?",
        options: [
            "Colocar al herido en posición lateral de seguridad.",
            "Darle algo de beber para calmarlo.",
            "Realizar maniobras de RCP.",
            "Evitar mover al herido y mantener su cabeza alineada con el cuerpo."
        ],
        correct: 3
    },
    {
        question: "En cuanto a la evaluación inicial de un herido, ¿cuál de las siguientes afirmaciones es incorrecta?",
        options: [
            "El protocolo ABC incluye la evaluación de la vía aérea, la respiración y la circulación.",
            "No debemos seguir el protocolo ABC sin la presencia de un médico.",
            "El protocolo ABC es esencial para la evaluación inicial de un herido.",
            "El protocolo ABC debe realizarse antes de cualquier otra intervención."
        ],
        correct: 1
    },
    {
        question: "¿Cómo debe manejar un conductor una emergencia médica de un pasajero?",
        options: [
            "Llegar al destino y llamar a los servicios de emergencia.",
            "Continuar conduciendo hasta el hospital más cercano. Comunidad de Madrid",
            "Calmar al pasajero y seguir hasta el destino.",
            "Detenerse en un lugar seguro y llamar a los servicios de emergencia."
        ],
        correct: 3
    },
    {
        question: "¿Qué debemos hacer si un pasajero presenta una herida en el tórax?",
        options: [
            "Cubrir la herida con un apósito estéril y llamar a los servicios de emergencia.",
            "Cubrir la herida con un apósito estéril y llevarle al hospital más cercano.",
            "Cubrir la herida con un apósito estéril y avisar a sus familiares para obtener su consentimiento .",
            "Cubrir la herida con un apósito estéril y darle un analgésico."
        ],
        correct: 0
    },
    {
        question: "¿Qué debe hacer un conductor de vehículo de arrendamiento con conductor si un pasajero con discapacidad auditiva no puede escuchar las indicaciones?",
        options: [
            "Hablar más fuerte.",
            "Utilizar gestos exagerados.",
            "Proporcionar un manual de instrucciones.",
            "Utilizar lenguaje de señas o escribir las indicaciones."
        ],
        correct: 3
    },
    {
        question: "¿Cuál es la normativa que establece las condiciones básicas de accesibilidad para la utilización de los modos de transporte para personas con discapacidad?",
        options: [
            "El RD 193/2023",
            "La Ley 51/2003.",
            "El Acta Europea de Accesibilidad.",
            "El RD 1544/2007."
        ],
        correct: 1
    },
    {
        question: "¿Qué establece el Real Decreto Legislativo 1/2013 sobre la igualdad de oportunidades en el uso de vehículo de arrendamiento con conductor?",
        options: [
            "Las personas con discapacidad deben recibir asistencia financiera.",
            "Las personas con discapacidad deben tener acceso prioritario a servicios públicos.",
            "Las personas con discapacidad deben estar exentas de impuestos.",
            "Las personas con discapacidad deben tener las mismas oportunidades que el resto de la población."
        ],
        correct: 3
    },
    {
        question: "¿Por qué es importante que un conductor esté informado sobre eventos locales?",
        options: [
            "Para reducir el tiempo de viaje.",
            "Para evitar hablar con el cliente.",
            "Para ofrecer recomendaciones y evitar áreas congestionadas.",
            "Para aumentar las tarifas del servicio. Comunidad de Madrid"
        ],
        correct: 2
    },
    {
        question: "En el contexto de un examen neurológico, ¿cuál de las siguientes afirmaciones es incorrecta?",
        options: [
            "El examen neurológico incluye la evaluación de la respuesta a estímulos verbales y físicos.",
            "La técnica de relleno capilar se utiliza para evaluar la circulación sanguínea.",
            "No debemos evaluar la frecuencia respiratoria normal de un herido sin la presencia de un médico.",
            "Es importante comprobar la frecuencia respiratoria normal para evaluar el estado del herido."
        ],
        correct: 2
    },
    {
        question: "¿Por qué es importante fomentar la autonomía de los pasajeros con discapacidades?",
        options: [
            "Para evitar problemas legales.",
            "Para mejorar la reputación del servicio.",
            "Para recibir feedbacks positivos.",
            "Para respetar su independencia y dignidad."
        ],
        correct: 3
    },
    {
        question: "Según la definición, ¿qué grado de discapacidad debe tener una persona para ser considerada con discapacidad?",
        options: [
            "Al menos un 1%.",
            "Exactamente el 52 %.",
            "Mayor o igual al 33 %.",
            "Mayor o igual al 92 %."
        ],
        correct: 0
    },
    {
        question: "¿Qué debería hacer un conductor de VTC para facilitar el viaje a un pasajero que utiliza un dispositivo de asistencia para caminar?",
        options: [
            "Solicitarle que deje el dispositivo fuera del vehículo.",
            "Ignorar la presencia del dispositivo y continuar con el trayecto.",
            "Cobrar un recargo por llevar el dispositivo en el vehículo.",
            "Ayudar al pasajero a guardar su dispositivo de asistencia de forma segura durante el trayecto."
        ],
        correct: 3
    },
    {
        question: "Según la Ley 13/2021, ¿ la realización de servicios de arrendamiento de vehículos infracción?",
        options: [
            "Sí, siempre.",
            "Sí, salvo que la empresa lo solicite.",
            "Depende del caso.",
            "No se menciona en la ley. Comunidad de Madrid"
        ],
        correct: 0
    },
    {
        question: "Señala la respuesta incorrecta.",
        options: [
            "Los conductores de vehículos de arrendamiento con conductor deben estar inscritos en el Registro de Conductores de la Comunidad de Madrid.",
            "Los conductores de vehículos de arrendamiento con conductor deben estar consignados en el Censo de Conductores Nacionales.",
            "Los conductores de vehículos de arrendamiento con conductor deben contar con todos los permisos y autorizaciones exigidos según el Decreto 5/2024.",
            "Los conductores de vehículos de arrendamiento con conductor deben mantener actualizada su información en los registros pertinentes según el Decreto 5/2024."
        ],
        correct: 1
    },
    {
        question: "¿Para qué sirven los distintivos identificativos en los vehículos de arrendamiento con conductor según el Decreto 5/2024?",
        options: [
            "Identificar todos los turismos circulantes en la Comunidad de Madrid.",
            "Mostrar el nombre del conductor.",
            "Identificar los vehículos.",
            "Promocionar marcas."
        ],
        correct: 2
    },
    {
        question: "Las tarifas de los servicios de arrendamiento de vehículos con conductor están sujetas a regulación administrativa.",
        options: [
            "Verdadero.",
            "Verdadero, pero solo en días festivos.",
            "Falso, excepto en áreas rurales",
            "Falso."
        ],
        correct: 3
    },
    {
        question: "¿Qué criterios medioambientales pueden provocar la denegación de una autorización de arrendamiento de vehículos con conductor?",
        options: [
            "Utilizar vehículos de combustión interna.",
            "No tener un seguro ambiental.",
            "Superar el valor límite anual de NO2 o PM2.5.",
            "No realizar la inspección técnica del vehículo."
        ],
        correct: 2
    },
    {
        question: "¿Qué distintivo ambiental deberán tener los vehículos de arrendamiento con conductor en la Comunidad de Madrid?",
        options: [
            "Cero emisiones o Eco.",
            "Distintivo B o 0 emisiones.",
            "Distintivo A o Eco.",
            "Distintivo C o eléctrico. Comunidad de Madrid"
        ],
        correct: 0
    },
    {
        question: "Captar clientes que no hayan contratado previamente el servicio de arrendamiento de vehículos con conductor constituye una infracción según la Ley 13/2021.",
        options: [
            "Grave.",
            "Leve.",
            "Muy grave.",
            "Infracción penal."
        ],
        correct: 0
    },
    {
        question: "¿Qué imagen lleva el distintivo previsto en el punto 2 del Anexo del Decreto 101/2016?",
        options: [
            "El escudo de España.",
            "Un mapa de Madrid.",
            "La bandera de la Comunidad de Madrid.",
            "Un logo de la empresa."
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la sanción por no cumplir las condiciones establecidas en relación con el itinerario del servicio?",
        options: [
            "Grave.",
            "Moderada.",
            "Leve.",
            "Muy grave"
        ],
        correct: 3
    },
    {
        question: "La Comunidad de Madrid asumió competencias en materia de autorizaciones de arrendamiento de vehículos con conductor a través de:",
        options: [
            "El Real Decreto 1057/2015.",
            "El Reglamento de Transportes.",
            "La Ley Orgánica 5/1987.",
            "La Ley de Seguridad Vial."
        ],
        correct: 2
    },
    {
        question: "¿Qué medida se establece en la Ley 13/2021 para garantizar el cumplimiento de las normativas en el servicio de arrendamiento de vehículos con conductor?",
        options: [
            "Cursos de formación.",
            "Campañas de concienciación.",
            "Descuentos en tarifas.",
            "Sanciones económicas. Comunidad de Madrid"
        ],
        correct: 3
    },
    {
        question: "¿Qué se considera una infracción muy grave relacionada con el inicio del servicio?",
        options: [
            "Inicio de un servicio sin hoja de ruta.",
            "Inicio de un servicio en un ámbito territorial distinto de aquél en que resulte obligatorio hacerlo.",
            "Inicio de un servicio sin contrato.",
            "Inicio de un servicio sin seguro."
        ],
        correct: 1
    },
];

const questions4 = [
    {
        question: "León es a selva como tiburón es a",
        options: [
            "Río.",
            "Lago.",
            "Mar.",
            "Montaña."
        ],
        correct: 2
    },
    {
        question: "¿Qué palabra tiene un significado similar a ‘feliz’?",
        options: [
            "Triste.",
            "Contento.",
            "Enojado.",
            "Aburrido."
        ],
        correct: 1
    },
    {
        question: "Elija la respuesta que sea correcta de entre las siguientes:",
        options: [
            "El coche está aparcado frente a la entrada del edificio.",
            "El coche está aparcado sin la entrada del edificio.",
            "El coche está aparcado hasta la entrada del edificio.",
            "El coche está aparcado dentro la entrada del edificio."
        ],
        correct: 0
    },
    {
        question: "Aunque la calle principal ___ cerrada, había vías alternativas.",
        options: [
            "está",
            "estuviera",
            "estando",
            "esté"
        ],
        correct: 1
    },
    {
        question: "Complete la frase con la opción correcta: Nosotros __________ en el concierto el fin de semana pasado.",
        options: [
            "estuvimos",
            "eramos",
            "fuimos",
            "estamos"
        ],
        correct: 0
    },
    {
        question: "Si no hay sitio en la calle, puede dejarme en la esquina ___ hay un semáforo.",
        options: [
            "cual",
            "donde",
            "que",
            "cuando"
        ],
        correct: 1
    },
    {
        question: "El cliente indicó que su equipaje se había ___ en el maletero.",
        options: [
            "colocó",
            "colocado",
            "coloca",
            "colocando"
        ],
        correct: 1
    },
    {
        question: "Abandonar una empresa o proyecto en el momento crítico, dejando a otros con la responsabilidad.",
        options: [
            "Dejar plantado",
            "Lavar las manos",
            "Tirar la piedra y esconder la mano",
            "Saltar del barco"
        ],
        correct: 3
    },
    {
        question: "La palabra “laconismo” alude a:",
        options: [
            "Hablar con ambiguedad.",
            "Usar tecnicismos.",
            "Exceso de detalles.",
            "Brevedad al expresarse."
        ],
        correct: 3
    },
    {
        question: "No hay semana en que el conductor ___ un problema con el tráfico.",
        options: [
            "no tuvo",
            "no tuviera",
            "no teniendo",
            "no tenga"
        ],
        correct: 3
    },
    {
        question: "El pasajero explicó, con la paciencia de quien ___ acostumbrado a esperar, que no había prisa.",
        options: [
            "estará",
            "estaba",
            "estuvo",
            "está"
        ],
        correct: 3
    },
    {
        question: "Seleccione el antónimo más adecuado de “preterir” :",
        options: [
            "Descartar",
            "Eludir",
            "Preferir",
            "Anteponer"
        ],
        correct: 2
    },
    {
        question: "¿Qué festividad madrileña celebra al patrón de la ciudad en mayo?",
        options: [
            "La Paloma.",
            "La Almudena.",
            "San Fermín.",
            "San Isidro."
        ],
        correct: 3
    },
    {
        question: "¿Qué teatro en Madrid es conocido por sus representaciones de ópera y ballet?",
        options: [
            "Gran Teatro del Liceo.",
            "Teatro Campoamor.",
            "Teatro Real.",
            "Teatro Arriaga."
        ],
        correct: 2
    },
    {
        question: "Desde la plaza de toros de las Ventas, cruzando el Puente de Alcalá, ¿qué calle es la mas adecuada para ir al Cementerio de la Almudena?",
        options: [
            "La Calle de Alcalá.",
            "La Avenida de Daroca.",
            "La Avenida Donostirra.",
            "La Calle del Cementerio."
        ],
        correct: 1
    },
    {
        question: "La Puerta de Toledo se localiza en una glorieta que conecta directamente con:",
        options: [
            "La Calle de Alcalá",
            "La Gran Vía",
            "El Paseo de la Castellana",
            "La Ronda de Toledo M ás"
        ],
        correct: 3
    },
    {
        question: "¿En qué dirección está situado el hotel Praga?",
        options: [
            "En la plaza del Emperador Carlos V número 8, Centro.",
            "En la calle de la Gran Vía 50.",
            "En la calle de Antonio López 65, Carabanchel.",
            "En la avenida de Valladolid 99."
        ],
        correct: 2
    },
    {
        question: "¿Dónde está la sede central del Ayuntamiento de Madrid?",
        options: [
            "En la Puerta del Sol.",
            "En la calle de Montalbán, número 1.",
            "En la Plaza de Callao s/n.",
            "En la Plaza de España."
        ],
        correct: 1
    },
    {
        question: "La Piovera es…",
        options: [
            "Un barrio de Madrid pertenenciente al distrito Moncloa-Aravaca.",
            "Un barrio de Madrid perteneciente al distrito de Hortaleza.",
            "Un municipio al sur de Madrid, junto a San José de Valderas.",
            "Un municipio al oeste de Madrid, junto a Majadahonda."
        ],
        correct: 1
    },
    {
        question: "¿Junto a qué glorieta está situada la Plaza de Santa Bárbara?",
        options: [
            "La Glorieta de Neptuno.",
            "La Glorieta de Emilio Castelar.",
            "La Glorieta de Mariano de Cavia.",
            "La Glorieta de Alonso Martínez."
        ],
        correct: 3
    },
    {
        question: "Los vehículos denominados como más eficientes: eléctricos de batería (BEV) , eléctricos de autonomía extendida (REEV), eléctricos híbridos enchufables (PHEV) con una autonomía de 40 km o vehículos de pila de combustible ¿qué tipo de etiqueta medioambiental llevarán?",
        options: [
            "No llevarán etiqueta.",
            "La etiqueta \"ECO\"",
            "La etiqueta \"cero emisiones\", azul.",
            "La etiqueta \"C\", verde."
        ],
        correct: 2
    },
    {
        question: "¿Qué lugar en Madrid es famoso por ser la sede del Ballet Nacional de España?",
        options: [
            "Teatro Real .",
            "Teatro Maravillas",
            "Teatro de la Zarzuela.",
            "Teatros del Canal"
        ],
        correct: 2
    },
    {
        question: "La zona de bajas emisiones del Distrito Centro comprende casi todo el distrito en el que se encuentran los barrios de Palacio, Embajadores, Cortes, Justicia, Universidad y Sol y que quedan delimitadas por diferentes calles, plazas y avenidas. De las que se citan, indique cuál es una de estas vías que delimita la ZBE del Distrito Centro:",
        options: [
            "Calle de Alcalá.",
            "Avenida de Valladolid.",
            "Cuesta de San Vicente.",
            "Plaza de Alonso Martínez."
        ],
        correct: 3
    },
    {
        question: "¿A qué tipo de etiqueta medioambiental tendrán derecho los turismos y furgonetas ligeras de gasolina matriculadas a partir de enero de 2006 y diésel a partir de septiembre de 2015 y los vehículos de más de 8 plazas y pesados tanto de gasolina como diésel, matriculados desde 2014?",
        options: [
            "A la \"etiqueta C\", verde",
            "A la \"etiqueta B\", amarilla.",
            "Etiqueta \"ECO\"",
            "Etiqueta \"cero emisiones\", azul."
        ],
        correct: 0
    },
    {
        question: "¿Dónde se encuentra ubicada la academia de oficiales de la Guardia Civil de Madrid?",
        options: [
            "En Aranjuez.",
            "En Tres Cantos.",
            "En Alcalá de Henares.",
            "En Guadarrama."
        ],
        correct: 0
    },
    {
        question: "Madrid se divide administrativamente en un número específico de distritos. ¿Cuántos distritos tiene Madrid capital?",
        options: [
            "15.",
            "21.",
            "25.",
            "30."
        ],
        correct: 1
    },
    {
        question: "¿Qué famoso museo de arte, y dónde está situado, alberga obras maestras como \"Las Meninas\" de Velázquez y \"La maja desnuda\" de Goya?",
        options: [
            "Museo Reina Sofía, en la calle de Santa Isabel, distrito Centro.",
            "Museo Thyssen-Bornemisza, en el paseo del Prado, distrito Centro.",
            "Museo del Prado, en el distrito de Retiro.",
            "Museo Arqueológico Nacional, en la calle de Serrano, distrito de Salamanca."
        ],
        correct: 2
    },
    {
        question: "Para alcanzar la localidad de El Escorial, ¿qué carretera o carreteras puede utilizar para llegar a este destino?",
        options: [
            "Las carreteras M-505 o la M-600.",
            "La M-402.",
            "Las carreteras M-300 y M-301.",
            "La carretera A-2."
        ],
        correct: 0
    },
    {
        question: "¿Dónde comienza la numeración de la mayoría de las calles de Madrid, según la normativa establecida en 1835?",
        options: [
            "En la Plaza de Cibeles.",
            "En la Plaza Mayor.",
            "En la Plaza de España.",
            "En la Puerta del Sol."
        ],
        correct: 3
    },
    {
        question: "¿Qué famoso monasterio y palacio real, declarado Patrimonio de la Humanidad, se encuentra en la sierra de Guadarrama, dentro de la Comunidad de Madrid?",
        options: [
            "El Palacio Real de Aranjuez.",
            "El Monasterio de El Escorial.",
            "El Palacio de la Granja de San Ildefonso.",
            "El Castillo de Manzanares el Real. AUXILIOS"
        ],
        correct: 1
    },
    {
        question: "¿Qué debe hacer un conductor para mejorar continuamente su servicio?",
        options: [
            "Ignorar las opiniones del cliente.",
            "Evitar preguntar al cliente.",
            "Implementar cambios basados en el feedback del cliente.",
            "Desviar la conversación. ."
        ],
        correct: 2
    },
    {
        question: "¿Qué se recomienda hacer si una persona con dificultades del habla utiliza una hoja para comunicarse?",
        options: [
            "Ignorar la hoja de comunicación y tratar de hablar directamente.",
            "Hablar rápidamente para no perder tiempo.",
            "Leer atentamente los símbolos o texto y responder de manera clara y comprensible.",
            "Utilizar términos técnicos."
        ],
        correct: 2
    },
    {
        question: "¿Qué no se debe hacer en una epistaxis?",
        options: [
            "Presionar la nariz.",
            "Aplicar frío.",
            "Tranquilizar al herido.",
            "Taponar la nariz"
        ],
        correct: 3
    },
    {
        question: "¿Qué debemos hacer si un pasajero presenta una quemadura grave?",
        options: [
            "Enfriar la zona con agua y cubrir con un apósito estéril.",
            "Aplicar hielo directamente en la quemadura.",
            "Darle agua.",
            "Darle un analgésico."
        ],
        correct: 0
    },
    {
        question: "¿Qué debes hacer si un cliente con discapacidad visual entra en el vehículo?",
        options: [
            "Permanecer en silencio hasta que hable",
            "Darle instrucciones de forma visual",
            "Sujetarlo del brazo sin avisar",
            "Saludarlo, identificarte y ofrecer asistencia si lo desea"
        ],
        correct: 3
    },
    {
        question: "En el caso de que el conductor VTC tuviera que limpiar una herida ¿cómo debe hacerlo si la herida es leve?",
        options: [
            "Debe utilizar agua oxigenada.",
            "Con agua y jabón.",
            "Con alcohol siempre.",
            "Algún producto de limpieza. A l h"
        ],
        correct: 1
    },
    {
        question: "Según el Real Decreto Legislativo 1/2013, por el que se aprueba la Ley General de derechos de las personas con discapacidad, ¿qué derecho tienen las personas con discapacidad en relación con el uso de vehículo de arrendamiento con conductor?",
        options: [
            "Todas las personas con discapacidad tienen derecho a tarifas reducidas.",
            "Todas las personas con discapacidad tienen derecho a transporte gratuito.",
            "Las personas con discapacidad tienen derecho a un transporte accesible y no discriminatorio.",
            "Las personas con discapacidad tienen derecho a transporte exclusivo, debido a su condición"
        ],
        correct: 2
    },
    {
        question: "Según la legislación Española, ¿qué grado de discapacidad debe tener una persona para ser considerada, a efectos legales, con discapacidad?",
        options: [
            "Superior al 25%",
            "Superior al 30%",
            "Igual o superior al 33%.",
            "Igual o superior al 50%."
        ],
        correct: 2
    },
    {
        question: "Según el protocolo de actuación en caso de emergencia P.A.S, ¿cuáles son las pautas que deben tomarse, por orden, en caso de accidente o emergencia?",
        options: [
            "Proteger, alertar y señalizar el lugar del accidente.",
            "Proteger, alertar y socorrer.",
            "Prevenir, socorrer y alertar a los medios sanitarios a través del 112.",
            "Socorrer, alertar y proteger."
        ],
        correct: 1
    },
    {
        question: "¿La accesibilidad es obligatoria en el transporte?",
        options: [
            "Sí.",
            "Sólo en taxis y VTC.",
            "Sólo en autobuses",
            "No"
        ],
        correct: 0
    },
    {
        question: "Cuando un cliente accede al vehículo con un perro guía, ¿qué es lo que debe evitar hacer el conductor con el animal?",
        options: [
            "Jugar con el perro para distraerlo mientras está conduciendo.",
            "Permitir que el perro entre en el vehículo.",
            "Asegurarse de que el perro esté cómodo.",
            "Proporcionar agua al perro antes de comenzar a conducir."
        ],
        correct: 0
    },
    {
        question: "¿Por qué es importante que el conductor de un vehículo de arrendamiento con conductor VTC conozca pautas de comportamiento en caso de accidente?",
        options: [
            "Porque en la primera hora, denominada la hora de oro, tiene una importancia vital para la reducción de la gravedad de las lesiones o, simplemente, que el herido viva o muera.",
            "Para poder trasladar rápidamente a los heridos en el vehículo propio con las mayores garantías.",
            "Para poder realizar curas de emergencia y pequeñas cirugías en el lugar del accidente.",
            "Para estar exento de auxiliar a los heridos en caso de accidente y no tener consecuencias penales."
        ],
        correct: 0
    },
    {
        question: "Si un conductor se encuentra en servicio de arrendamiento de vehículos con conductor, ¿cúal es la acción recomendada en Primeros Auxilios, para desobstruir las vías respiratorias en un bebé que se está atragantando?",
        options: [
            "Respiración boca a boca.",
            "Presionar el pecho.",
            "Golpes en la espalda y compresiones torácicas.",
            "Darle un vaso de agua."
        ],
        correct: 2
    },
    {
        question: "¿Qué signo o síntoma de los que se citan a continuación indica anafilaxia?",
        options: [
            "Picor leve.",
            "Hinchazón de labios.",
            "Estornudos.",
            "Dolor muscular."
        ],
        correct: 1
    },
    {
        question: "De las opciones que se indicant, ¿cuál debe ser el comportamiento de un vehículos eléctrico que está en llamas?",
        options: [
            "Debemos alejarnos y ayudar a las personas que no puedan hacerlo a permanecer lejos del vehículos incendiado, posteriormente avisaremos al112 indicando que es un vehículos eléctrico el que arde.",
            "Deberemos intentar apagarlo, el fuego del vehículos eléctrico es muy sencillo extingurilo.",
            "Deberemos echar cualquier tipo de líquido sobre el vehículos eléctrico y esperar a que se apague.",
            "Deberemos intentar apagarlo, para ello nos acercaremos bastante al vehículos con la Certeza de que las baterías nunca estallan."
        ],
        correct: 0
    },
    {
        question: "En la Comunidad de Madrid, ¿deben los perros guía o de asistencia llevar bozal dentro de un vehículos VTC?",
        options: [
            "Sí, es obligatorio en todo momento por seguridad.",
            "No, no es obligatorioel uso de bozal para los perros de asistencia, a menos que la normativa de transporte espécifica (como en Metro) lo requiera bajo ciertas condiciones, pero no VTC donde el acceso es libre.",
            "Sólo si el conductor lo solicita expresamente.",
            "Sólo si el perro pertenece a una raza considerada potencialmente peligrosa."
        ],
        correct: 1
    },
    {
        question: "La normativa de Madrid ha flexibilizado recientemente la etiqueta ambiental para VTC adaptados, permitiendo circular con distintivo:",
        options: [
            "Etiqueta A (sin distintivo)",
            "Etiqueta B (amarilla)",
            "Etiqueta C (verde)",
            "Etiqueta ECO"
        ],
        correct: 2
    },
    {
        question: "¿Dónde se coloca el puño en el caso de tener que realizar la conocida como Maniobra de Heimlich en adultos?",
        options: [
            "En el pecho, lo más alto posible",
            "En el cuello",
            "Entre el ombligo y el esternón",
            "En la espalda"
        ],
        correct: 2
    },
    {
        question: "Cuál es la finalidad de establecer requisites de longitude minima para los vehículos VTC?",
        options: [
            "Garantizar el confort y la calidad del servicio.",
            "Limitar el número de coches.",
            "Controlar las emisiones.",
            "Fomentar coches pequeños."
        ],
        correct: 0
    },
    {
        question: "Además del idioma castellano y el manejo de dispositivos, ¿sobre qué otra materia se examina a los conductores de VTC en la Comunidad de Madrid?",
        options: [
            "Cocina y gastronomía local.",
            "Historia del arte de Madrid.",
            "Itinerarios, destinos de interés, primeros auxilios y accesibilidad.",
            "Mecánica avanzada de vehículos híbridos."
        ],
        correct: 2
    },
    {
        question: "Señala la respuesta correcta respecto a los distintivos identificativos de vehículo de arrendamiento",
        options: [
            "El distintivo identificativo de la luna trasera no tiene medidas establecidas.",
            "El distintivo identificativo de la luna trasera debe tener una medida de 8 cm x 14 cm.",
            "El distintivo identificativo de la luna trasera no es necesario ponerlo.",
            "El distintivo identificativo de la luna trasera debe tener una medida de 70 cm x 2 cm."
        ],
        correct: 1
    },
    {
        question: "¿Qué información debe estar en la hoja de ruta que llevan los conductors?",
        options: [
            "Nombre del conductor.",
            "Número de pasajeros.",
            "Kilometraje del vehículo",
            "Lugar, fecha y hora de inicio y finalización del servicio."
        ],
        correct: 3
    },
    {
        question: "¿Qué se requiere para convalidar el permiso de conductor de autoTAXI por uno de VTC?",
        options: [
            "Estar desempleado.",
            "Haber trabajado previamente en el sector.",
            "Inscribirse en el Registro de Conductores de vehículos VTC de la Comunidad de Madrid y acreditar requisitos.",
            "Pagar una tasa adicional."
        ],
        correct: 2
    },
    {
        question: "¿Mediante qué tipo de plataformas operan habitualmente los servicios de VTC, según se menciona en la información relacionada con el decreto 5/2024 que regula el arrendamiento de vehículos con conductor?",
        options: [
            "Plataformas de radio-taxi tradicionales.",
            "Plataformas digitales.",
            "Puntos de parada fijos en la vía pública.",
            "Llamadas telefónicas exclusivamente."
        ],
        correct: 1
    },
    {
        question: "¿Qué documento acredita que el vehículo está al corriente de las obligaciones fiscales?",
        options: [
            "El permiso de circulación.",
            "El recibo del Impuesto de Vehículos de Traccción Mecánica.",
            "La tarjeta de transporte.",
            "El seguro del coche."
        ],
        correct: 1
    },
    {
        question: "¿Cómo debe contratarse el servicio de VTC?",
        options: [
            "Puede ser verbal y acordarse el precio al final del trayecto.",
            "Debe formalizarse por escrito (físico o electrónico) antes de iniciar el servicio.",
            "Sólo es necesario un acuerdo verbal si el servicio es en el ámbito urbano.",
            "El contrato solo es necesario para servicios de larga distancia."
        ],
        correct: 1
    },
    {
        question: "¿Qué se considera un servicio discrecional en el transporte de pasajeros?",
        options: [
            "Un servicio secreto",
            "Un servicio que se ofrece libremente en la calle",
            "Un servicio que no está sujeto a horarios ni rutas fijas preestablecidas",
            "Un servicio para turistas"
        ],
        correct: 2
    },
    {
        question: "¿Qué Ley autonómica desarrolla el Decreto 5/2024, de 10 de enero, de la Comunidad de Madrid?",
        options: [
            "Ley 16/1987, de Ordenación de los Transportes Terrestres.",
            "Ley 20/1998, de Ordenación y Coordinación de los Transportes Urbanos.",
            "Ley 1/2024 de Economía Circular.",
            "Ley 39/2015, de Procedimiento Administrativo."
        ],
        correct: 0
    },
    {
        question: "Durante el Desarrollo de un servicio contratado por plaza con pago individual se cumplirán, entre otras, las siguientes condiciones:",
        options: [
            "No se admitirán paradas intermedias, en ningún caso.",
            "Se podrá abandoner el vehículos antes de llegar al punto de destino indicado pero no supondrá la finalización del servicio",
            "El itinerario será el que el usuario diga , sea o no sea el más adecuado.",
            "El itinerario será el más directo o adecuado entre el inicio y el final del trayecto principal."
        ],
        correct: 3
    },
    {
        question: "A los efectos de salvaguardar los derecho a de las personas usuarias de este tipo de servicios (en VTC), las empresas con las que se realiza la contratación de los mismos deberán (entre otros requisitos):",
        options: [
            "Es recomendable que tengan hojas de reclamaciones.",
            "Contar, para las personas con discapacidad, con un medio accesible de comunicación vía web y con un número de atención telefónica accesible a través de texto.",
            "Es recomendable llevar en los vehículos hojas de reclamaciones.",
            "No utilizar el nombre del usuario."
        ],
        correct: 1
    },
];

const allQuestions = [questions1, questions2, questions3, questions4];

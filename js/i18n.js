(() => {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  const savedLanguage = window.localStorage.getItem("aw-language");
  const language = requestedLanguage === "en" || requestedLanguage === "es"
    ? requestedLanguage
    : savedLanguage === "en"
      ? "en"
      : "es";

  document.documentElement.lang = language;

  const en = {
    "Rentals AW | Apartamentos en Panamá": "Rentals AW | Apartments in Panama",
    "Apartamentos en Ciudad de Panamá | Rentals AW": "Apartments in Panama City | Rentals AW",
    "Contacto | Rentals AW Panamá": "Contact | Rentals AW Panama",
    "Términos y condiciones | Rentals AW": "Terms and conditions | Rentals AW",
    "Política de privacidad | Rentals AW": "Privacy policy | Rentals AW",
    "Descubre apartamentos seleccionados para rentas cortas en Panamá y abre cada opción directamente en Airbnb.": "Discover selected short-term rental apartments in Panama and open each option directly on Airbnb.",
    "Explora y filtra apartamentos en Ciudad de Panamá por zona, número de huéspedes y habitaciones.": "Explore and filter apartments in Panama City by area, number of guests and bedrooms.",
    "Contacta a Rentals AW para recibir orientación sobre apartamentos y hospedaje de corta estancia en Panamá.": "Contact Rentals AW for guidance on apartments and short-term stays in Panama.",
    "Consulta los términos y condiciones de uso del sitio web de Rentals AW Panamá.": "Review the terms and conditions for using the Rentals AW Panama website.",
    "Conoce cómo Rentals AW trata la información al utilizar este sitio web y sus canales de contacto.": "Learn how Rentals AW handles information when you use this website and its contact channels.",
    "Inicio": "Home",
    "Apartamentos": "Apartments",
    "Zonas": "Areas",
    "Sobre nosotros": "About us",
    "Contacto": "Contact",
    "WhatsApp": "WhatsApp",
    "Rentas cortas en Panamá": "Short-term rentals in Panama",
    "Vive Panamá.": "Live Panama.",
    "Siente la experiencia.": "Feel the experience.",
    "Apartamentos seleccionados para que disfrutes la ciudad con la comodidad de sentirte en casa.": "Selected apartments so you can enjoy the city with the comfort of feeling at home.",
    "Ver apartamentos": "View apartments",
    "Escríbenos": "Message us",
    "Zona": "Area",
    "Todas": "All areas",
    "Huéspedes": "Guests",
    "Cualquiera": "Any",
    "Habitaciones": "Bedrooms",
    "Limpiar": "Clear",
    "Limpiar filtros": "Clear filters",
    "2 o más": "2 or more",
    "4 o más": "4 or more",
    "6 o más": "6 or more",
    "8 o más": "8 or more",
    "1 o más": "1 or more",
    "3 o más": "3 or more",
    "Alojamientos que se adaptan a ti": "Stays designed around you",
    "Apartamentos seleccionados para una estancia inolvidable.": "Selected apartments for an unforgettable stay.",
    "Ver todos los apartamentos": "View all apartments",
    "Ubicaciones premium": "Premium locations",
    "Apartamentos en zonas estratégicas de la ciudad.": "Apartments in strategic areas of the city.",
    "Calidad garantizada": "Guaranteed quality",
    "Espacios seleccionados para tu comodidad.": "Spaces selected for your comfort.",
    "Atención personalizada": "Personalized service",
    "Estamos disponibles antes y durante tu estancia.": "We are available before and during your stay.",
    "Flexibilidad total": "Total flexibility",
    "Opciones pensadas para distintas formas de viajar.": "Options designed for different ways of traveling.",
    "Pasión por la hospitalidad, compromiso con tu experiencia.": "A passion for hospitality, a commitment to your experience.",
    "En Rentals AW seleccionamos apartamentos para ofrecer estancias cómodas y memorables en Panamá, con atención cercana en cada paso.": "At Rentals AW, we select apartments for comfortable and memorable stays in Panama, with attentive service at every step.",
    "Conoce cómo podemos ayudarte": "Discover how we can help",
    "Descubre la ciudad": "Discover the city",
    "Zonas para vivir Panamá a tu manera.": "Areas where you can experience Panama your way.",
    "Conectada, dinámica y cerca de todo.": "Connected, dynamic and close to everything.",
    "Arquitectura moderna y comodidad urbana.": "Modern architecture and urban comfort.",
    "La ciudad frente a la bahía.": "The city overlooking the bay.",
    "Preguntas frecuentes": "Frequently asked questions",
    "Lo esencial, antes de tu estancia.": "Everything you need before your stay.",
    "¿Cómo realizo una reserva?": "How do I make a reservation?",
    "Abre el apartamento que te interesa en Airbnb para consultar disponibilidad y completar la reserva de forma segura.": "Open the apartment you are interested in on Airbnb to check availability and complete your reservation securely.",
    "¿Puedo cancelar o modificar mi reserva?": "Can I cancel or modify my reservation?",
    "Las condiciones de cambio y cancelación aparecen en el anuncio de Airbnb antes de confirmar la reserva.": "Change and cancellation conditions are shown on Airbnb before you confirm the reservation.",
    "¿Qué incluye la estadía?": "What does the stay include?",
    "Cada anuncio detalla sus espacios, servicios y normas. Revisa esa información en Airbnb o escríbenos si necesitas orientación.": "Each listing details its spaces, amenities and rules. Review that information on Airbnb or contact us if you need guidance.",
    "¿Cuál es el horario de entrada y salida?": "What are the check-in and check-out times?",
    "El horario puede variar según el alojamiento. Encontrarás la información actualizada en el anuncio correspondiente.": "Times may vary by accommodation. You will find the latest information in the corresponding listing.",
    "Enlaces": "Links",
    "Apartamentos de corta estancia en Panamá para disfrutar la ciudad con comodidad, estilo y la mejor ubicación.": "Short-term apartments in Panama for enjoying the city with comfort, style and an excellent location.",
    "Contáctanos": "Contact us",
    "Formulario de contacto": "Contact form",
    "Ciudad de Panamá, Panamá": "Panama City, Panama",
    "Todos los derechos reservados.": "All rights reserved.",
    "© 2026 Rentals AW. Todos los derechos reservados.": "© 2026 Rentals AW. All rights reserved.",
    "Términos y condiciones": "Terms and conditions",
    "Política de privacidad": "Privacy policy",
    "Tu próxima estancia": "Your next stay",
    "Apartamentos en Panamá para vivir la ciudad.": "Apartments in Panama for experiencing the city.",
    "Explora espacios seleccionados en zonas estratégicas. Usa los filtros y abre el anuncio en Airbnb para revisar la disponibilidad actual.": "Explore selected spaces in strategic areas. Use the filters and open the Airbnb listing to check current availability.",
    "Apartamentos disponibles": "Available apartments",
    "No encontramos coincidencias": "No matches found",
    "Prueba con una zona o capacidad diferente.": "Try a different area or capacity.",
    "¿Necesitas orientación?": "Need some guidance?",
    "Cuéntanos cómo quieres vivir Panamá.": "Tell us how you want to experience Panama.",
    "Hablar con Rentals AW": "Talk to Rentals AW",
    "Tu próxima estancia empieza aquí.": "Your next stay starts here.",
    "Cuéntanos qué necesitas y abriremos una conversación en WhatsApp con la información lista para ayudarte.": "Tell us what you need and we will open a WhatsApp conversation with your information ready.",
    "Atención directa": "Direct assistance",
    "Conversa con nuestro equipo por WhatsApp.": "Talk to our team on WhatsApp.",
    "Opciones en zonas destacadas de la ciudad.": "Options in standout areas of the city.",
    "Respuesta personalizada": "Personalized response",
    "Revisamos tus preferencias antes de orientarte.": "We review your preferences before guiding you.",
    "¿Qué estás buscando?": "What are you looking for?",
    "Completa los datos esenciales. Al enviar, continuarás en WhatsApp.": "Complete the essential details. When you submit, you will continue in WhatsApp.",
    "Nombre": "Name",
    "Número de huéspedes": "Number of guests",
    "Zona preferida": "Preferred area",
    "Aún no lo sé": "I am not sure yet",
    "¿Qué más debemos saber?": "What else should we know?",
    "Fechas aproximadas, necesidades de la estancia o cualquier pregunta.": "Approximate dates, stay requirements or any questions.",
    "Continuar en WhatsApp": "Continue in WhatsApp",
    "Al continuar aceptas nuestra": "By continuing, you accept our",
    "política de privacidad": "privacy policy",
    "política de privacidad.": "privacy policy.",
    "Explora primero": "Explore first",
    "Encuentra una opción que se adapte a tu viaje.": "Find an option that fits your trip.",
    "Filtra por zona, huéspedes y habitaciones. Cada opción te lleva a Airbnb para consultar todos los detalles.": "Filter by area, guests and bedrooms. Each option takes you to Airbnb to review all details.",
    "Información legal": "Legal information",
    "Términos y condiciones.": "Terms and conditions.",
    "Estas condiciones explican el alcance y las reglas de uso del sitio web de Rentals AW.": "These terms explain the scope and rules for using the Rentals AW website.",
    "Política de privacidad.": "Privacy policy.",
    "Te explicamos qué información interviene al navegar y contactar con Rentals AW.": "We explain what information is involved when browsing and contacting Rentals AW.",
    "Última actualización: 30 de julio de 2026": "Last updated: July 30, 2026",
    "Al acceder y utilizar este sitio aceptas las condiciones descritas a continuación. Si no estás de acuerdo con ellas, debes dejar de utilizarlo.": "By accessing and using this site, you accept the terms described below. If you do not agree with them, you must stop using it.",
    "1. Finalidad del sitio": "1. Purpose of the site",
    "Este sitio presenta información general sobre apartamentos de corta estancia en Ciudad de Panamá y facilita el acceso a anuncios externos o canales de contacto. El contenido tiene carácter informativo y no constituye por sí mismo una oferta contractual.": "This site provides general information about short-term apartments in Panama City and facilitates access to external listings or contact channels. The content is informational and does not by itself constitute a contractual offer.",
    "2. Reservas y servicios externos": "2. Reservations and external services",
    "Las consultas de disponibilidad, reservas, pagos, cambios y cancelaciones se completan en Airbnb u otras plataformas indicadas. Esas operaciones están sujetas a las condiciones, políticas y mecanismos de protección de la plataforma correspondiente.": "Availability inquiries, reservations, payments, changes and cancellations are completed through Airbnb or other indicated platforms. These operations are subject to the terms, policies and protection mechanisms of the corresponding platform.",
    "3. Exactitud de la información": "3. Accuracy of information",
    "Trabajamos para mantener la información clara y actualizada. Sin embargo, la disponibilidad, características y condiciones finales de cada alojamiento son las que aparecen en su anuncio externo al momento de la consulta.": "We work to keep information clear and current. However, the final availability, features and conditions of each accommodation are those shown in its external listing at the time of inquiry.",
    "4. Uso permitido": "4. Permitted use",
    "El usuario se compromete a utilizar el sitio de forma lícita y respetuosa. No está permitido interferir con su funcionamiento, intentar acceder a áreas restringidas, automatizar consultas abusivas ni utilizar el contenido con fines fraudulentos.": "Users agree to use the site lawfully and respectfully. Interfering with its operation, attempting to access restricted areas, automating abusive requests or using content for fraudulent purposes is not permitted.",
    "5. Propiedad intelectual": "5. Intellectual property",
    "El diseño, la identidad visual, los textos y los recursos propios de Rentals AW están protegidos por la normativa aplicable. Su reproducción o explotación comercial requiere autorización previa, salvo los usos expresamente permitidos por la ley.": "The design, visual identity, text and proprietary resources of Rentals AW are protected by applicable law. Their reproduction or commercial exploitation requires prior authorization, except where expressly permitted by law.",
    "6. Enlaces de terceros": "6. Third-party links",
    "El sitio contiene enlaces a servicios ajenos, como Airbnb y WhatsApp. Rentals AW no controla su disponibilidad, seguridad o contenido y no responde por cambios o interrupciones en esas plataformas.": "The site contains links to third-party services such as Airbnb and WhatsApp. Rentals AW does not control their availability, security or content and is not responsible for changes or interruptions on those platforms.",
    "7. Limitación de responsabilidad": "7. Limitation of liability",
    "En la medida permitida por la ley, Rentals AW no será responsable por daños derivados del uso indebido del sitio, fallas de servicios externos o decisiones tomadas únicamente con base en información que deba confirmarse en el anuncio correspondiente.": "To the extent permitted by law, Rentals AW will not be liable for damages arising from misuse of the site, failures of external services or decisions made solely on information that should be confirmed in the corresponding listing.",
    "8. Cambios en estas condiciones": "8. Changes to these terms",
    "Podemos actualizar estos términos para reflejar cambios legales o funcionales. La versión vigente se publicará en esta página junto con su fecha de actualización.": "We may update these terms to reflect legal or functional changes. The current version will be published on this page together with its update date.",
    "9. Contacto": "9. Contact",
    "Si tienes preguntas sobre estas condiciones, puedes comunicarte mediante nuestra": "If you have questions about these terms, you can contact us through our",
    "página de contacto": "contact page",
    "Esta política describe el tratamiento de información relacionado con el sitio web de Rentals AW y sus canales de contacto.": "This policy describes the processing of information related to the Rentals AW website and its contact channels.",
    "1. Información que proporcionas": "1. Information you provide",
    "Cuando completas el formulario de contacto puedes incluir tu nombre, número de huéspedes, zona preferida y un mensaje. El formulario prepara ese contenido para abrir una conversación en WhatsApp; este sitio no lo almacena en una base de datos propia.": "When you complete the contact form, you may include your name, number of guests, preferred area and a message. The form prepares this content to open a WhatsApp conversation; this site does not store it in its own database.",
    "2. Comunicaciones por WhatsApp": "2. WhatsApp communications",
    "Al continuar en WhatsApp, la comunicación se procesa en esa plataforma y queda sujeta a sus propias condiciones y política de privacidad. Solo debes enviar la información necesaria para atender tu consulta.": "When continuing in WhatsApp, the communication is processed on that platform and is subject to its own terms and privacy policy. You should only send the information necessary to address your inquiry.",
    "3. Datos técnicos y cookies": "3. Technical data and cookies",
    "La versión actual del sitio no instala cookies publicitarias ni utiliza herramientas propias de seguimiento. El proveedor donde se aloje el sitio podría procesar datos técnicos básicos, como dirección IP, navegador, fecha y hora, para seguridad y funcionamiento del servicio.": "The current version of the site does not install advertising cookies or use proprietary tracking tools. The hosting provider may process basic technical data such as IP address, browser, date and time for security and service operation.",
    "4. Finalidades del tratamiento": "4. Purposes of processing",
    "La información que decidas compartir mediante nuestros canales de contacto se utiliza para responder preguntas, conocer tus preferencias de estancia y orientarte hacia opciones adecuadas.": "Information you choose to share through our contact channels is used to answer questions, understand your stay preferences and guide you toward suitable options.",
    "5. Conservación": "5. Retention",
    "Las conversaciones se conservarán solo durante el tiempo razonablemente necesario para atender la consulta, mantener la relación solicitada o cumplir obligaciones legales aplicables.": "Conversations will be retained only for the time reasonably necessary to address the inquiry, maintain the requested relationship or comply with applicable legal obligations.",
    "6. Terceros": "6. Third parties",
    "El sitio enlaza con Airbnb y WhatsApp. Cada servicio procesa información de acuerdo con sus propias políticas. Recomendamos revisarlas antes de completar una reserva o iniciar una conversación.": "The site links to Airbnb and WhatsApp. Each service processes information according to its own policies. We recommend reviewing them before completing a reservation or starting a conversation.",
    "7. Seguridad": "7. Security",
    "Aplicamos medidas razonables para mantener un sitio sencillo y reducir la recopilación innecesaria de datos. Ningún sistema es completamente infalible, por lo que no debes enviar información financiera o sensible mediante el formulario.": "We apply reasonable measures to keep the site simple and reduce unnecessary data collection. No system is completely infallible, so you should not send financial or sensitive information through the form.",
    "8. Tus opciones": "8. Your choices",
    "Puedes solicitar acceso, rectificación, cancelación, oposición o portabilidad respecto de los datos que hayas compartido directamente con Rentals AW, cuando corresponda conforme a la legislación aplicable en Panamá.": "You may request access, rectification, cancellation, objection or portability regarding data shared directly with Rentals AW, where applicable under Panamanian law.",
    "9. Cambios en esta política": "9. Changes to this policy",
    "Podemos actualizar esta política cuando cambien las funciones del sitio o las obligaciones aplicables. La fecha superior indica la versión vigente.": "We may update this policy when site functions or applicable obligations change. The date above indicates the current version.",
    "10. Contacto": "10. Contact",
    "Para consultas sobre privacidad, utiliza nuestra": "For privacy inquiries, use our",
    "e indica que tu mensaje se refiere al tratamiento de datos.": "and indicate that your message concerns data processing.",
    "Destacado": "Featured",
    "Ejemplo": "Example",
    "Ver en Airbnb": "View on Airbnb",
    "huéspedes": "guests",
    "hab.": "bedrooms",
    "baños": "bathrooms",
    "apartamento": "apartment",
    "apartamentos": "apartments"
  };

  const translate = (text) => language === "en" ? en[text] || text : text;

  const translateDocument = () => {
    if (language === "en") {
      document.title = translate(document.title);

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        const original = node.nodeValue;
        const trimmed = original.trim();
        if (!trimmed || !en[trimmed]) return;
        node.nodeValue = original.replace(trimmed, en[trimmed]);
      });

      document.querySelectorAll("[placeholder]").forEach((element) => {
        element.placeholder = translate(element.placeholder);
      });

      document.querySelectorAll("meta[content]").forEach((element) => {
        element.content = translate(element.content);
      });
    }

    const navigation = document.querySelector(".site-nav");
    const whatsappButton = navigation?.querySelector(".header-whatsapp");
    if (navigation && !navigation.querySelector(".language-switch")) {
      const switcher = document.createElement("button");
      switcher.className = "language-switch";
      switcher.type = "button";
      switcher.textContent = language === "en" ? "ES" : "EN";
      switcher.setAttribute(
        "aria-label",
        language === "en" ? "Cambiar el sitio a español" : "Switch site to English"
      );
      switcher.addEventListener("click", () => {
        const nextLanguage = language === "en" ? "es" : "en";
        window.localStorage.setItem("aw-language", nextLanguage);
        const nextUrl = new URL(window.location.href);
        if (nextLanguage === "en") nextUrl.searchParams.set("lang", "en");
        else nextUrl.searchParams.delete("lang");
        window.location.href = nextUrl.toString();
      });
      navigation.insertBefore(switcher, whatsappButton || null);
    }
  };

  window.AW_I18N = {
    language,
    t: translate
  };

  document.addEventListener("DOMContentLoaded", translateDocument);
})();

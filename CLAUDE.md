# CLAUDE.md

## Proyecto

Construir la web de **Rentals AW**, enfocada en promocionar apartamentos de renta corta en Panamá.

Los usuarios deben poder:

- Explorar apartamentos.
- Filtrar propiedades.
- Ver información básica.
- Abrir el anuncio en Airbnb.
- Contactar por WhatsApp.

## Tecnologías

Usar únicamente:

- HTML
- CSS
- JavaScript Vanilla

No usar frameworks, librerías, paquetes ni dependencias externas innecesarias.

## Diseño

El diseño debe seguir la referencia visual aprobada:

- Minimalista
- Premium
- Moderno
- Limpio
- Mucho espacio en blanco
- Fotografías grandes
- Tipografía sans serif
- Bordes suaves
- Secciones amplias
- Composición principalmente en blanco y negro

Usar el logo de **Rentals AW** en su versión negra o blanca según el fondo.

No copiar directamente la interfaz de Airbnb.

## Colores

```css
:root {
  --color-primary: #ff385c;
  --color-primary-hover: #e31c5f;
  --color-primary-soft: #fff1f3;

  --color-black: #111111;
  --color-white: #ffffff;
  --color-background: #ffffff;
  --color-surface: #f7f7f7;
  --color-text: #171717;
  --color-muted: #717171;
  --color-border: #e5e5e5;

  --color-whatsapp: #25d366;
}
```

El color de Airbnb `#FF385C` debe ser el acento principal en toda la web.

Usarlo para:

- Botones principales
- Enlaces destacados
- Bordes activos
- Iconos activos
- Filtros seleccionados
- Estados de foco
- Etiquetas destacadas
- Botones de Airbnb
- Elementos interactivos
- Pequeños detalles visuales

No usar otros colores de acento.

El verde se reserva únicamente para WhatsApp.

## Tipografía

Usar fuentes del sistema:

```css
font-family:
  Inter,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Los títulos deben ser grandes, claros y con poco texto.

## Estructura

```text
/
├── index.html
├── apartamentos.html
├── contacto.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── properties.js
└── assets/
    ├── images/
    ├── icons/
    └── logo/
```

No crear archivos innecesarios.

## Página principal

La landing debe incluir:

1. Header
2. Hero con fotografía grande
3. Buscador de apartamentos
4. Apartamentos seleccionados
5. Beneficios
6. Sección sobre Rentals AW
7. Preguntas frecuentes
8. Footer
9. Botón flotante de WhatsApp

## Header

Debe incluir:

- Logo de Rentals AW
- Inicio
- Apartamentos
- Zonas
- Sobre nosotros
- Contacto
- Botón de WhatsApp
- Menú móvil

Debe ser simple, compacto y responsive.

## Hero

Debe tener:

- Fotografía premium de un apartamento
- Título corto y grande
- Texto descriptivo
- Botón para ver apartamentos
- Botón para contactar
- Buscador superpuesto en la parte inferior

Ejemplo:

```text
Vive Panamá.
Siente la experiencia.
```

El texto debe ser claro y directo.

## Buscador

Incluir filtros simples para:

- Zona
- Huéspedes
- Habitaciones

El botón de buscar debe usar fondo negro o `#FF385C`.

Cuando un filtro esté activo, debe usar `#FF385C`.

## Apartamentos

Guardar las propiedades en `properties.js`.

```js
const properties = [
  {
    id: "bella-vista-01",
    name: "Apartamento en Bella Vista",
    location: "Bella Vista, Ciudad de Panamá",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: "assets/images/bella-vista-01.webp",
    airbnbUrl: "https://airbnb.com/",
    featured: true
  }
];
```

Generar las tarjetas con JavaScript.

No repetir manualmente el HTML de cada propiedad.

Cada tarjeta debe mostrar:

- Fotografía
- Nombre
- Ubicación
- Huéspedes
- Habitaciones
- Baños
- Etiqueta de destacado cuando corresponda
- Botón para ver en Airbnb

El botón de Airbnb debe usar:

```css
color: #ff385c;
border-color: #ff385c;
```

En hover:

```css
background: #ff385c;
color: #ffffff;
```

## Tarjetas

Las tarjetas deben tener:

- Fondo blanco
- Borde gris claro
- Esquinas redondeadas
- Imagen grande
- Sombra muy suave o ninguna
- Animación discreta en hover

No usar sombras fuertes.

## Beneficios

Mostrar cuatro beneficios:

- Ubicaciones premium
- Calidad garantizada
- Atención personalizada
- Flexibilidad total

Usar iconos simples en negro.

El color `#FF385C` puede aparecer en hover o como detalle secundario.

## Sobre nosotros

Crear una sección dividida en dos columnas:

- Texto y botón de contacto
- Fotografía grande de Panamá o de una propiedad

En móvil debe mostrarse en una sola columna.

## Preguntas frecuentes

Usar un acordeón simple con JavaScript.

Debe incluir preguntas como:

- ¿Cómo realizo una reserva?
- ¿Puedo cancelar o modificar mi reserva?
- ¿Qué incluye la estadía?
- ¿Cuál es el horario de entrada y salida?

El estado abierto debe usar `#FF385C` como detalle visual.

## WhatsApp

Mostrar un botón flotante en todas las páginas.

Debe:

- Permanecer visible
- Estar en la esquina inferior derecha
- No bloquear contenido
- Abrir WhatsApp en una nueva pestaña
- Incluir un mensaje predefinido
- Tener `aria-label`

```js
const message = encodeURIComponent(
  "Hola, estoy interesado en un apartamento de Rentals AW."
);
```

El verde de WhatsApp solo debe utilizarse en este botón y sus iconos.

## Responsive

Diseñar primero para móvil.

La web debe funcionar correctamente en:

- Móvil
- Tablet
- Laptop
- Desktop

Usar:

- CSS Grid
- Flexbox
- `clamp()`
- `minmax()`
- `auto-fit`

Evitar tamaños fijos que rompan el diseño.

## SEO

Cada página debe incluir:

- Título único
- Meta description
- Canonical URL
- Un solo `h1`
- HTML semántico
- Texto alternativo en imágenes
- Open Graph
- URLs descriptivas
- `robots.txt`
- `sitemap.xml`

Usar naturalmente términos como:

- Apartamentos en Panamá
- Rentas cortas en Panamá
- Airbnb en Panamá
- Apartamentos en Ciudad de Panamá
- Hospedaje en Panamá

## Rendimiento

Priorizar:

- Código simple
- JavaScript mínimo
- Imágenes WebP o AVIF
- Lazy loading
- Carga rápida
- HTML semántico
- CSS liviano

No agregar dependencias para resolver funciones simples.

## Accesibilidad

Incluir:

- Contraste suficiente
- Navegación con teclado
- Focus visible en `#FF385C`
- Labels en formularios
- Botones reales
- Enlaces reales
- Texto alternativo
- `aria-label` cuando sea necesario

No usar elementos `div` como botones.

## Animaciones

Usar animaciones discretas:

- Hover en botones
- Elevación suave de tarjetas
- Apertura del menú
- Acordeones
- Aparición suave de secciones

Duración recomendada:

```css
transition: 180ms ease;
```

No usar animaciones exageradas o constantes.

## Reglas para Claude

Antes de modificar:

1. Revisar los archivos existentes.
2. Mantener HTML, CSS y JavaScript Vanilla.
3. No instalar dependencias.
4. No cambiar elementos que ya funcionan.
5. No inventar propiedades, precios o testimonios.
6. Mantener la identidad visual de Rentals AW.
7. Usar `#FF385C` como único color de acento.

Después de modificar:

1. Revisar errores de consola.
2. Probar móvil y desktop.
3. Probar el menú.
4. Probar los filtros.
5. Probar los enlaces de Airbnb.
6. Probar WhatsApp.
7. Verificar que no existan elementos rotos.
8. Revisar que el color de acento sea consistente.

## Prioridades

Cuando existan varias soluciones, elegir:

1. La más simple.
2. La más rápida.
3. La más fácil de mantener.
4. La que use menos JavaScript.
5. La que funcione mejor en móvil.
6. La que mantenga el diseño aprobado.

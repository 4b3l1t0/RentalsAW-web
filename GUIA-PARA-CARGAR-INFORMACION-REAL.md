# Guía para publicar la información real de Rentals AW

Esta guía explica qué debe reemplazar el desarrollador antes de publicar el sitio. Los 12 apartamentos que muestran la etiqueta **Ejemplo** son datos de demostración creados únicamente para probar el catálogo y los filtros.

## 1. Configurar las propiedades reales

Todas las propiedades se administran en:

```text
js/properties.js
```

Cada apartamento usa esta estructura:

```js
{
  id: "bella-vista-01",
  name: "Nombre público del apartamento",
  nameEn: "Public apartment name",
  location: "Bella Vista, Ciudad de Panamá",
  locationEn: "Bella Vista, Panama City",
  zone: "Bella Vista",
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  image: "assets/images/bella-vista-01.webp",
  airbnbUrl: "https://www.airbnb.com/rooms/ID_REAL",
  featured: true,
  demo: false
}
```

Recomendaciones:

- El `id` debe ser único, escrito en minúsculas y sin espacios.
- `name` y `location` contienen la versión en español.
- `nameEn` y `locationEn` contienen la versión en inglés.
- `zone` debe coincidir exactamente con el nombre utilizado en los filtros.
- `guests`, `bedrooms` y `bathrooms` deben ser números.
- `airbnbUrl` debe apuntar al anuncio real, no a una búsqueda general de Airbnb.
- Usa `featured: true` únicamente en los apartamentos que aparecerán en la página principal.
- Usa `demo: false` o elimina la propiedad `demo` cuando el apartamento sea real.
- Elimina completamente los objetos terminados en `-demo` cuando ya no sean necesarios.

Las tarjetas HTML no se editan manualmente. JavaScript genera todas las tarjetas desde este archivo.

## 2. Mantener las traducciones en español e inglés

El selector **ES/EN** utiliza:

```text
js/i18n.js
```

Este archivo contiene las traducciones del contenido general, formularios, preguntas frecuentes y páginas legales.

Cuando se cambie un texto visible:

1. Escribe el contenido principal en español dentro del HTML.
2. Busca el objeto `en` en `js/i18n.js`.
3. Agrega una entrada donde la clave sea el texto exacto en español y el valor sea la traducción inglesa.

Ejemplo:

```js
"Consulta disponibilidad para tu estancia.": "Check availability for your stay.",
```

Consideraciones:

- El texto español de la clave debe coincidir exactamente con el HTML.
- No traduzcas nombres propios de zonas si comercialmente se utilizan en español.
- Cada propiedad debe tener `name`, `nameEn`, `location` y `locationEn`.
- Revisa también títulos SEO y meta descriptions cuando cambie el contenido.
- El idioma seleccionado se guarda en `localStorage` con la clave `aw-language`.
- `?lang=en` permite abrir directamente cualquier página en inglés.

Ejemplo:

```text
apartamentos.html?lang=en
apartamentos.html?zona=casco-viejo&lang=en
```

## 3. Agregar o cambiar zonas

Si se agrega una zona nueva:

1. Escribe el mismo nombre en la propiedad `zone` dentro de `js/properties.js`.
2. Agrega una opción con ese nombre en los desplegables de:
   - `index.html`
   - `apartamentos.html`
   - `contacto.html`
3. Si se necesita un enlace directo filtrado, agrega un alias en el objeto `zoneAliases` de `js/main.js`.

Ejemplo:

```js
"obarrio": "Obarrio"
```

El enlace directo sería:

```text
apartamentos.html?zona=obarrio
```

## 4. Preparar las fotografías

Guarda las imágenes dentro de:

```text
assets/images/
```

Requisitos recomendados:

- Formato WebP o AVIF.
- Orientación horizontal.
- Proporción aproximada de 3:2 o 4:3.
- Ancho entre 1200 y 1600 píxeles.
- Peso ideal inferior a 250 KB.
- Sin texto, marcas de agua o información personal visible.
- Nombre descriptivo y sin espacios, por ejemplo `punta-pacifica-02.webp`.

Después, actualiza la propiedad `image`:

```js
image: "assets/images/punta-pacifica-02.webp"
```

Verifica que el archivo exista respetando mayúsculas y minúsculas.

## 5. Configurar el número real de WhatsApp

En `js/main.js`, busca:

```js
const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;
```

Agrega el número completo con código de país, sin espacios, signos ni guiones:

```js
const whatsappNumber = "50760000000";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
```

También cambia la URL que construye el formulario de contacto:

```js
window.open(
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
  "_blank",
  "noopener,noreferrer"
);
```

Los enlaces HTML con el atributo `data-whatsapp` reciben automáticamente esta dirección cuando carga JavaScript.

## 6. Actualizar datos de contacto

Revisa los pies de página de:

- `index.html`
- `apartamentos.html`
- `contacto.html`
- `terminos.html`
- `privacidad.html`

Sustituye cualquier información genérica por:

- Número oficial de WhatsApp.
- Correo corporativo.
- Dirección comercial, si corresponde.
- Horario de atención, si se desea mostrar.

No publiques datos personales que no deban ser públicos.

## 7. Configurar dominio y SEO

El dominio de ejemplo actual es:

```text
https://awpropertiespanama.com/
```

Si el dominio final es diferente, reemplázalo en:

- Los enlaces `canonical` de cada HTML.
- Los campos `og:url`.
- Los campos `og:image`.
- `robots.txt`.
- `sitemap.xml`.

Cada página debe conservar un solo `h1`, un título único y una meta descripción diferente.

## 8. Revisar textos legales

Las páginas:

```text
terminos.html
privacidad.html
```

contienen una base adaptada al funcionamiento actual del sitio. Antes de publicar:

- Añade la identidad legal del responsable.
- Añade un correo o canal específico para solicitudes de privacidad.
- Confirma los plazos reales de conservación.
- Describe cualquier herramienta futura de analítica, cookies, formularios o CRM.
- Solicita revisión de un profesional legal en Panamá.

Si se instala analítica o publicidad, la política de privacidad y el manejo de cookies deberán actualizarse.

## 9. Comprobaciones antes de publicar

Prueba como mínimo:

1. Abrir las cinco páginas desde el menú y el footer.
2. Seleccionar cada zona en el buscador.
3. Combinar zona, huéspedes y habitaciones.
4. Pulsar **Limpiar filtros** y confirmar que reaparecen todos los apartamentos.
5. Abrir cada enlace real de Airbnb.
6. Enviar una consulta desde el formulario de contacto.
7. Probar el botón flotante de WhatsApp.
8. Revisar móvil, tablet y escritorio.
9. Confirmar que ninguna propiedad real muestra la etiqueta **Ejemplo**.
10. Revisar que no existan imágenes o enlaces rotos.
11. Cambiar a inglés desde todas las páginas y revisar que no queden textos en español.
12. Comprobar los nombres y ubicaciones en inglés de todas las propiedades.
13. Abrir una URL que combine zona e idioma, por ejemplo `apartamentos.html?zona=punta-pacifica&lang=en`.

## 10. Archivos que normalmente debe editar el desarrollador

```text
js/properties.js      Datos y enlaces de los apartamentos
js/i18n.js            Traducciones generales al inglés
js/main.js            Número de WhatsApp y alias de zonas
index.html            Opciones del buscador, textos y SEO
apartamentos.html     Opciones del buscador y SEO
contacto.html         Opciones del formulario y textos
terminos.html         Información legal real
privacidad.html       Información legal y privacidad
robots.txt            Dominio final
sitemap.xml           Dominio final y páginas indexables
assets/images/        Fotografías reales
assets/logo/          Logos oficiales optimizados
```

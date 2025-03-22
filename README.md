# Memoria Técnica del Proyecto "Portfolio Miguel Sánchez" 

Este documento describe aquellos aspectos técnicos y de diseño del proyecto Portfolio Personal. Se abordan desde la estructura de archivos y tecnologías utilizadas, hasta la paleta de colores, tipografía, técnicas de maquetación y responsividad empleadas.

---

## Índice 📑

- [Memoria Técnica del Proyecto "Portfolio Miguel Sánchez"](#memoria-técnica-del-proyecto-portfolio-miguel-sánchez)
  - [Índice 📑](#índice-)
  - [Descripción General 📝](#descripción-general-)
  - [Logo 🌐](#logo-)
  - [Estructura del Proyecto 📁](#estructura-del-proyecto-)
  - [Tecnologías y Lenguajes 💻](#tecnologías-y-lenguajes-)
  - [Paleta de Colores 🎨](#paleta-de-colores-)
  - [Tipografía y Tamaños 🔠](#tipografía-y-tamaños-)
  - [Técnicas de Diseño y Maquetación 🛠️](#técnicas-de-diseño-y-maquetación-️)
  - [Responsividad 📱](#responsividad-)
  - [Animaciones e Interactividad ✨](#animaciones-e-interactividad-)
  - [Descripción de Páginas y Funcionalidades 🔍](#descripción-de-páginas-y-funcionalidades-)
  - [Conclusiones](#conclusiones)

---

## Descripción General 📝

El proyecto es una web personal destinada a mostrar el perfil profesional, proyectos, habilidades y experiencia sobre mi. La web se compone de múltiples secciones:

- **Página Principal (`index.html`):** Presenta identidad propia, información de contacto y enlaces a las secciones de proyectos y lenguajes de programación.  
- **Sección de Proyectos (`projects.html`):** Muestra los proyectos más relevantes, a través de videos de fondo, uso de superposicón y enlaces a páginas específicas de cada proyecto.  
- **Proyectos Individuales:**  
  - `AstralisGame.html`  
  - `BookTrack.html`  
  - `portfolioProject.html`  
- **Sección de Lenguajes/Tools (`prolang.html`):** Página que agrupa los distitnos lenguajes, frameworks y herramientas que conozco.

---

## Logo 🌐

![Logo personal](/img/Logo.png)

El logo “\<\> msv” representa mi identidad personal, relacionando la temática de desarrollo web (`< />`) con sus iniciales.

---

## Estructura del Proyecto 📁

La organización de archivos y carpetas se detalla a continuación:

- **Carpetas principales:**
  - `css/` — Contiene los archivos de estilos:
    - `style.css` (estilos de la página principal)
    - `styleAstralis.css` (para AstralisGame)
    - `styleBookTrack.css` (para BookTrack)
    - `stylePortfolio.css` (para Portfolio Project)
    - `styleProject.css` (para la página Projects)
    - `styleProlang.css` (para la sección de Lenguages/Tools)
  - `js/` — Archivo de scripts:
    - `script.js` (maneja interactividad, por ejemplo, toggles en el formulario de contacto y comportamiento de botones)
  - `views/` — Contiene los archivos HTML de cada sección/proyecto:
    - `projects.html`
    - `astralisGame.html`
    - `bookTrack.html`
    - `portfolioProject.html`
    - `prolang.html`
- **Archivo Raíz:**
  - `index.html` (página principal del portfolio)

---

## Tecnologías y Lenguajes 💻

- **HTML5:**  
  Uso de etiquetas semánticas y estructurales para definir cada sección del sitio.

- **CSS3:**  
  Se emplea CSS3 para la maquetación, uso de variables, animaciones (keyframes), transiciones y media queries.

- **JavaScript:**  
  El archivo `script.js` implementa la funcionalidad interactiva (por ejemplo, mostrar/ocultar el formulario de contacto y ajustar la visibilidad del botón de regreso según el referrer).

- **Librerías y Recursos Externos:**
  - **Devicon:** Para representar iconografía oficial de lenguajes y frameworks (HTML5, CSS3, JavaScript, PHP, Java, Python, MySQL, Git, GitHub, Docker, Bootstrap, Markdown).
  - **FontAwesome:** Para íconos básicos (como el de terminal para Bash y PowerShell, flechas, y otros elementos decorativos).
  - **Simple Icons:** Se utilizan para cargar íconos en blanco y negro de Mermaid y Cisco, garantizando la consistencia visual.

---

## Paleta de Colores 🎨

- **Color Primario:** `#f8cb74`  
  Se usa como color de fondo principal en la mayoría de las páginas y se refleja en elementos destacados.

- **Color Secundario:** `#232323`  
  Empleado en textos y algunos detalles de diseño.

- **Color de Fondo (Blanco):** `#fff`  
  Utilizado para contenedores, tarjetas y áreas que requieren contraste.

- **Color de Texto/Formularios:**  
  Se utiliza un valor RGBA: `rgba(205,205,205,0.56)` para ciertos elementos, en especial en formularios o botones con fondo semitransparente.

Estas variables se definen en archivos como `styleProject.css` y `styleProlang.css`, garantizando una apariencia coherente en todo el sitio.

---

## Tipografía y Tamaños 🔠

- **Fuente Principal:**  
  - **"IBM Plex Sans"** (importada desde Google Fonts) es la fuente predominante en todos los archivos CSS.  

- **Tamaños de Fuente:**
  - **Título Principal (en “Projects” y “Lenguages”):**  
    Se define en un `<p>` con estilos que incluyen `font-size: 15vw` o usando `clamp()`, además de un `letter-spacing: 10px` para un efecto de impacto visual.
  - **Textos Secundarios y Enlaces:**  
    Varían entre `0.9rem` y `1.3rem` según la sección y el dispositivo (móvil, tablet, escritorio).
  - **Responsividad:**  
    Se usan media queries y unidades relativas (`vw`, `rem`, `clamp()`) para asegurar que los textos escalen correctamente en diferentes tamaños de pantalla.

---

## Técnicas de Diseño y Maquetación 🛠️

- **Uso de Variables CSS:**  
  Definición de variables para colores, fuentes y transiciones, lo que facilita la consistencia en todo el proyecto.

- **Flexbox y Grid:**
  - **Flexbox:** Para la disposición general en contenedores y secciones (por ejemplo, `#container`).
  - **CSS Grid:** Para las grillas de íconos (Lenguages, Frameworks, Tools) y en la sección de proyectos (layout responsivo).

- **Animaciones y Transiciones:**
  - **Keyframes (`@keyframes`)** para animaciones como `arrowMove` (flecha descendente en el header) o `marquee` (efecto de texto en movimiento).
  - **Transiciones** (`transition`) en hovers de tarjetas, íconos y enlaces para un efecto suave al pasar el cursor.

- **Filtros en SVG:**  
  Uso de `filter: grayscale(100%)` en imágenes de Simple Icons (Mermaid, Cisco) para un estilo monocromático uniforme.

---

## Responsividad 📱

- **Media Queries:**  
  Definidas para **móviles (max-width: 600px)**, **tabletas (601px a 1024px)** y **escritorio (1024px en adelante)**, ajustando tamaños de fuente, anchos de contenedores e incluso la disposición de elementos (Flexbox/Grid).

- **Unidades Relativas y `clamp()`:**  
  Para que los títulos y elementos no excedan ciertos límites en pantallas pequeñas ni se vean demasiado pequeños en pantallas grandes.

---

## Animaciones e Interactividad ✨

- **Animaciones del Header:**  
  - La flecha abajo (`.fa-arrow-down`) en “Projects” y “Lenguages” se anima con `arrowMove`.
  - El título principal se redimensiona con `vw` o `clamp()` para un efecto adaptativo.

- **Formulario de Contacto (index.html):**  
  - Uso de checkboxes para mostrar/ocultar contenido (efecto toggling) con transiciones de opacidad manejadas en `script.js`.

- **Botón de Regreso (porfolioButton):**  
  - Posicionado en la esquina superior izquierda con estilo absolute.  
  - Usa un ícono de FontAwesome (`fa-arrow-left`) para volver a la página anterior o al índice principal.

---

## Descripción de Páginas y Funcionalidades 🔍

1. **index.html (Página Principal)**  
   - Presenta el nombre y un texto en marquee dentro de `.worker`.  
   - Secciones “About”, “Projects”, “Prolang” y “Contact” con efecto de expansión usando checkboxes.  
   - Formulario de contacto con validación mínima.  
   - Enlaces a redes sociales (GitHub, LinkedIn).

2. **projects.html**  
   - Muestra tres proyectos (Astralis Game, BookTrack, Portfolio) con videos de fondo.  
   - Al pasar el cursor (hover), se expande la tarjeta (`.project`) y cambia la opacidad de la superposición (`.overlay`).  
   - Enlaces a sus respectivas páginas: `AstralisGame.html`, `BookTrack.html` y `portfolioProject.html`.

3. **AstralisGame.html**, **BookTrack.html**, **portfolioProject.html**  
   - Cada uno describe un proyecto de forma breve, con imágenes, textos explicativos y un enlace al repositorio de GitHub.  
   - Poseen un botón de regreso (`#backBtn`) que redirige a `projects.html`.

4. **prolang.html (Lenguages)**  
   - Emplea Devicon y FontAwesome, y en casos específicos (Mermaid, Cisco) Simple Icons para garantizar un estilo monocromático.  
   - El encabezado mantiene el mismo estilo de “Projects” (título grande, flecha de regreso).

---

## Conclusiones 

Este proyecto combina técnicas modernas de maquetación (Flexbox y Grid), animaciones CSS y transiciones, junto con un diseño responsive que se adapta a múltiples dispositivos. Además, se implementan interacciones con JavaScript para mejorar la experiencia del usuario, manteniendo siempre un diseño limpio y profesional.

Así mismo, este proyecto está orientado a ofrecer al usuario una experiencia positiva, atractiva e interactiva, facilitando la navegación en la misma.

Personalmente, el proyecto cuida apartados visuales y estéticos fuera de los estándares requeridos, con la finalidad de poder reflejar habilidades tanto en el desarrollo técnico, como en la creatividad visual.

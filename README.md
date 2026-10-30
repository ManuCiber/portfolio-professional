# Portfolio Profesional - Carlos Manuel Tolentino Henriquez

Portfolio web tipo landing page moderno, minimalista y de alto impacto técnico, diseñado para presentar proyectos de software, experiencia técnica y trayectoria académica.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con `@tailwindcss/vite`
- **Iconos:** [Lucide React](https://lucide.dev/) + Iconos vectoriales personalizados
- **Linter & Calidad:** [Oxlint](https://oxc.rs/)

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo local
```bash
npm run dev
```
Abre en tu navegador la dirección indicada (por defecto `http://localhost:5173`).

### 3. Compilar para producción
```bash
npm run build
```
Generará la carpeta optimizada `dist/` lista para desplegar en plataformas estáticas como Vercel, Netlify, Cloudflare Pages o GitHub Pages.

### 4. Probar build de producción localmente
```bash
npm run preview
```

---

## 📁 Estructura del Código

```
portfolio-personal/
├── index.html                   # Metadatos SEO, Open Graph y favicon
├── src/
│   ├── components/              # Componentes de UI modulares
│   │   ├── Navbar.tsx           # Barra de navegación con scroll spy y menú móvil
│   │   ├── Hero.tsx             # Presentación, propuesta de valor y terminal interactiva
│   │   ├── About.tsx            # Resumen profesional, principios de ingeniería y valores
│   │   ├── Skills.tsx           # Stack tecnológico categorizado con niveles de dominio
│   │   ├── Projects.tsx         # Catálogo de proyectos con filtros y acordeón técnico
│   │   ├── Education.tsx        # Línea de tiempo académica (UASD y certificaciones)
│   │   ├── Contact.tsx          # Contacto directo, botón 1-click copiar y formulario
│   │   ├── Footer.tsx           # Enlaces rápidos, créditos y botón volver arriba
│   │   └── icons/BrandIcons.tsx # Iconos vectoriales optimizados de GitHub y LinkedIn
│   ├── data/                    # DATOS DESACOPLADOS (¡Edita aquí tus datos!)
│   │   ├── personalInfo.ts      # Nombre, contacto, biografía, redes y estadísticas
│   │   ├── projects.ts          # Proyectos reales, descripciones, módulos y enlaces
│   │   ├── skills.ts            # Habilidades por categoría y nivel
│   │   └── education.ts         # Grados académicos y certificaciones
│   ├── types/
│   │   └── index.ts             # Tipos e interfaces TypeScript estrictas
│   ├── index.css                # Estilos base Tailwind v4 y accesibilidad
│   ├── App.tsx                  # Estructura principal de la landing page
│   └── main.tsx                 # Entrada React
```

---

## ✏️ Datos Personales y Enlaces que Puedes Personalizar

Para actualizar cualquier información sin tocar el diseño de componentes, simplemente edita los archivos en `src/data/`:

1. **`src/data/personalInfo.ts`**:
   - `github`: Coloca la URL exacta de tu perfil de GitHub (ej. `https://github.com/tu-usuario`).
   - `linkedin`: Confirma o actualiza el enlace a tu perfil de LinkedIn.
   - `email`: Tu correo para el botón de copia y formulario (`carlosgameloft22@gmail.com`).
   - `phone`: Tu número de contacto o WhatsApp (`+1 829 401 9822`).

2. **`src/data/projects.ts`**:
   - **Sistema de Gestión de Muestras Médicas:** Añade el enlace exacto a tu repositorio en `repoUrl` y la URL de despliegue en `demoUrl` si está alojado en la web.
   - **Sistema de Gestión de Usuarios y Blog (API REST):** Añade el enlace a tu repositorio o documentación Postman/Swagger.
   - **Sistema de Gestión de Cooperativa & Sistema de Facturación:** Cuando comiences a publicar los repositorios o avances, actualiza su `repoUrl`, `technologies` o cambia su `status` a `'completed'`.

---

## ♿ Accesibilidad y Rendimiento

- Soporte nativo para `prefers-reduced-motion` para usuarios con sensibilidad visual.
- Contraste certificado WCAG AA en paleta Dark Slate.
- Semántica HTML completa (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Navegación por teclado completa con anillos de foco visibles.

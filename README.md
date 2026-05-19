# Decidir sin depender

Infografía interactiva del taller **Decidir sin depender: adolescencia, estructura social y prevención desde la Educación Social**.

El proyecto está preparado para subirlo directamente a GitHub y publicarlo con GitHub Pages.

## Qué incluye

- Proyecto Vite + React.
- Infografía interactiva en scroll vertical.
- Navegación interna.
- Barra de progreso.
- Diagrama de estructura social por capas.
- Diagnóstico interactivo del colectivo.
- Matriz de trazabilidad: necesidad → objetivo → contenido → sesión → indicador.
- Línea temporal de las cuatro sesiones del taller.
- Hotspots del rol del educador/a social.
- Evaluación por capas.
- Referencias integradas.
- Botón para imprimir o guardar como PDF.
- Workflow de GitHub Actions para despliegue automático en GitHub Pages.
- Configuración `base: './'`, por lo que no hace falta cambiar el nombre del repositorio en Vite.

## Cómo probarlo en local

Necesitas tener instalado Node.js.

```bash
npm install
npm run dev
```

Después abre la URL que aparezca en la terminal, normalmente:

```text
http://localhost:5173/
```

## Cómo subirlo a GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Publica infografía interactiva Decidir sin depender"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git
git push -u origin main
```

Sustituye:

- `TU_USUARIO` por tu usuario de GitHub.
- `NOMBRE_DEL_REPOSITORIO` por el nombre real del repositorio.

## Cómo activar GitHub Pages

1. Entra en el repositorio en GitHub.
2. Ve a **Settings**.
3. Entra en **Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Vuelve a la pestaña **Actions** y espera a que termine el workflow `Deploy to GitHub Pages`.

La URL final tendrá una forma similar a:

```text
https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/
```

## Estructura del proyecto

```text
decidirsin-depender/
├── .github/workflows/deploy.yml
├── src/
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Personalización rápida

El contenido principal está en:

```text
src/data.js
```

Los estilos visuales están en:

```text
src/styles.css
```

Los colores principales se modifican en `:root` dentro de `src/styles.css`.

## Nota académica

La infografía se basa en el diseño del taller `Decidir sin depender`, con foco en adolescencia, estructura social, salud mental, prevención de adicciones, presión grupal, publicidad digital, hábitos saludables, entornos protectores y evaluación verificable.
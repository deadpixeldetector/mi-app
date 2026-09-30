# Mi App - Lista de Tareas ✅

App web simple hecha con **HTML, CSS y JavaScript puros**. Sin dependencias, sin build, sin backend.

## 🚀 Desplegar en Vercel

### Opción 1: Desde GitHub (recomendada)

1. Crea un repositorio nuevo en GitHub y sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Primera versión"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
2. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
3. Pulsa **"Add New → Project"** e importa tu repositorio.
4. No necesitas configurar nada: Framework Preset = **Other**, Build Command vacío, Output Directory = raíz.
5. Pulsa **Deploy**. ¡Listo en ~10 segundos!

### Opción 2: Desde la terminal (Vercel CLI)

```bash
npm i -g vercel
vercel
```

### Opción 3: Arrastrar y soltar

Sube la carpeta en [vercel.com/new](https://vercel.com/new).

## 📁 Estructura

```
├── index.html    # Página principal
├── styles.css    # Estilos
├── app.js        # Lógica (tareas + localStorage)
├── vercel.json   # Config opcional de Vercel
└── README.md
```

## ✨ Características

- Agregar, completar y eliminar tareas
- Persistencia en `localStorage` (las tareas sobreviven al recargar)
- Diseño responsive y animaciones suaves

# Simulador de Examen VTC

Proyecto web de práctica para el examen de conductor VTC.

## Qué incluye

- `index.html` — interfaz principal del simulador.
- `styles.css` — diseño responsivo y visual moderno.
- `script.js` — lógica de navegación, selección de respuestas y resultados.
- `data.js` — preguntas extraídas de los exámenes.
- `process_questions.py` — script para procesar PDFs y generar datos de preguntas.

## Uso local

1. Abre `index.html` en el navegador.
2. Selecciona un cuestionario.
3. El simulador mostrará preguntas, opciones y resultados.

## Publicación en GitHub Pages

1. Inicializa el repositorio:

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Crea un repositorio en GitHub y agrega el remoto:

```bash
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
```

3. Envía los archivos a GitHub:

```bash
git branch -M main
git push -u origin main
```

4. En GitHub, ve a la configuración del repositorio y activa GitHub Pages desde la rama `main` y la carpeta `/root`.

## Publicación con Netlify o Vercel

También puedes desplegarlo en Netlify o Vercel arrastrando la carpeta del proyecto o conectándolo al repositorio de GitHub.

## Archivos recomendados

- `.gitignore` para excluir el entorno virtual y archivos temporales.
- `README.md` para documentar el proyecto.

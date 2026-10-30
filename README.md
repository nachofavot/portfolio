# Ignacio Favot · Portfolio

Portfolio personal en español con React, TypeScript, Tailwind CSS y Vite. Incluye presentación, experiencia, un caso de la Wiki del Registro Civil, galería accesible de seis capturas, tecnologías y contacto.

## Desarrollo

Requisitos: Node.js 22 LTS y pnpm.

```sh
pnpm install
pnpm dev
```

## Verificar producción

```sh
pnpm build
pnpm preview
```

`build` verifica TypeScript y genera `dist/`. No necesita servidor, base de datos, API ni variables de entorno.

## Publicar en Vercel

1. Crear un repositorio propio en GitHub y subir el contenido de esta carpeta, incluyendo `pnpm-lock.yaml`. No subir `node_modules`, `dist`, `.pnpm-store` ni archivos `.env`.
2. En Vercel elegir **Add New → Project** e importar el repositorio.
3. Seleccionar **Vite**. Si el repositorio contiene directamente estos archivos, mantener la raíz; si contiene una carpeta `portfolio`, seleccionarla como Root Directory.
4. Usar `pnpm install --frozen-lockfile`, build `pnpm build` y salida `dist`. No configurar variables de entorno.
5. Elegir **Deploy**. Vercel asigna una URL HTTPS que se puede compartir en postulaciones. Los siguientes cambios en la rama principal vuelven a desplegar.

El archivo `vercel.json` ya incluye la configuración de build y cabeceras básicas. No hace falta reescritura de rutas: es una página con secciones y anclas. Esta entrega prepara el despliegue; no crea una cuenta ni realiza una publicación en Vercel.

## Contenido y futuras demos

- `src/content.ts`: nombre, email, GitHub, capturas y catálogo tipado de proyectos. `demoUrl` y `repositoryUrl` son opcionales para incorporar enlaces públicos reales más adelante.
- `src/main.tsx`: presentación y caso de estudio.
- `src/styles.css`: dirección visual, responsive y movimiento reducido.
- `public/wiki/`: seis imágenes WebP con redacciones permanentes.

Para una nueva demo, agregar un proyecto real al catálogo y su presentación correspondiente en la interfaz. Publicar únicamente enlaces verificados. No hay proyectos ficticios ni demos simuladas. La Wiki no tiene un enlace público ni se distribuye su código.

## Exactitud y privacidad

La autoría completa de la página y el permiso para mostrarla fueron confirmados por Ignacio. El caso describe únicamente lo visible en las capturas. No se atribuyen fechas, métricas de impacto, títulos académicos, años de experiencia ni tecnologías no verificadas de la Wiki. La sección de tecnologías identifica explícitamente el stack de **este portfolio**, no el de la Wiki ni un nivel de dominio personal.

Las capturas públicas ocultan con bloques opacos los artículos, resultados, datos de categorías y la zona de cuenta. Los archivos originales no forman parte de esta entrega. No contiene documentos, credenciales, URLs internas ni código del sistema del Registro Civil. El panel de asistente se describe como interfaz visible; no se afirma un proveedor, modelo ni calidad de respuestas.

Email público confirmado: favotignacio@gmail.com. Perfil público: https://github.com/nachofavot.

## Accesibilidad

Navegación por anclas, enlace para saltar al contenido, foco visible, textos alternativos, controles de galería etiquetados y diálogo modal nativo. La galería admite flechas izquierda/derecha dentro del diálogo y Escape para cerrar, restaurando el foco. Respeta `prefers-reduced-motion`.

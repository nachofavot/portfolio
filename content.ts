// Datos públicos. No agregar credenciales, URLs internas ni documentación de la Wiki.
export const profile = {
  name: 'Ignacio Favot',
  email: 'favotignacio@gmail.com',
  github: 'https://github.com/nachofavot',
};
export type Project = {
  id: string; title: string; demoUrl?: string; repositoryUrl?: string;
};
// Para futuras demos: agregar solo proyectos reales y enlaces públicos verificados.
export const projects: Project[] = [{ id: 'wiki', title: 'Wiki del Registro Civil' }];
export const gallery = [
  { src: '/wiki/01-biblioteca.webp', title: 'Biblioteca', description: 'Un punto de entrada para explorar el contenido y navegar por categorías.' },
  { src: '/wiki/02-articulos.webp', title: 'Exploración de artículos', description: 'Listado de artículos con filtros por categoría.' },
  { src: '/wiki/03-editor.webp', title: 'Editor de contenido', description: 'Formulario de creación con categoría, resumen y herramientas de edición.' },
  { src: '/wiki/04-categorias.webp', title: 'Gestión de categorías', description: 'Interfaz de administración para organizar el contenido.' },
  { src: '/wiki/05-busqueda.webp', title: 'Búsqueda global', description: 'Un acceso de búsqueda centralizado con navegación por teclado.' },
  { src: '/wiki/06-asistente.webp', title: 'Panel de asistente', description: 'Interfaz de consulta junto a la biblioteca. La captura muestra su estado inicial.' },
];

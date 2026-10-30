import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { gallery, profile } from './content';
import './styles.css';

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span>; }

function App() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const openButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (expanded) { dialog.current?.showModal(); } else if (dialog.current?.open) { dialog.current.close(); }
    const previous = document.body.style.overflow;
    if (expanded) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [expanded]);
  const change = (direction: number) => setSelected(i => (i + direction + gallery.length) % gallery.length);
  return <>
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <header className="header wrap">
      <a className="brand" href="#inicio" aria-label="Ignacio Favot, inicio">if<span>.</span></a>
      <nav aria-label="Navegación principal"><a href="#proyecto">Proyecto</a><a href="#experiencia">Experiencia</a><a href="#tecnologias">Tecnologías</a></nav>
      <a className="nav-contact" href="#contacto">Hablemos <Arrow /></a>
    </header>
    <main id="contenido">
      <section className="hero wrap" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status" /> ABIERTO A OPORTUNIDADES JUNIOR</p>
          <h1>Hola, soy Ignacio.<br />Desarrollo para<br /><em>resolver.</em></h1>
          <p className="intro">Desarrollador web junior en Santa Fe, Argentina. Mi punto de partida: una Wiki del Registro Civil que construí desde cero.</p>
          <div className="flex flex-wrap gap-3"><a className="button dark" href="#proyecto">Conocé mi trabajo <Arrow /></a><a className="button plain" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
          <p className="location"><span aria-hidden="true">◎</span> Santa Fe, Argentina <span className="location-line" /> Desarrollo web</p>
        </div>
        <div className="hero-art" aria-label="Vista del proyecto Wiki del Registro Civil">
          <div className="art-top"><span>TRABAJO DESTACADO</span><span>01 / 01</span></div>
          <div className="orb" aria-hidden="true" />
          <div className="browser-frame"><div className="browser-bar"><span>● ● ●</span><span>Wiki · Registro Civil</span><span>↗</span></div><img src={gallery[0].src} alt="Vista de la biblioteca de la Wiki, con contenido interno oculto" width="1917" height="912" /></div>
          <div className="art-bottom"><span>De una necesidad real<br /><strong>a una aplicación web.</strong></span><a href="#proyecto" className="round-link" aria-label="Ver proyecto Wiki">↘</a></div>
        </div>
      </section>
      <div className="ticker"><div className="wrap flex flex-wrap justify-between gap-4"><span>DESARROLLO WEB</span><span aria-hidden="true">✳</span><span>EXPERIENCIA REAL</span><span aria-hidden="true">✳</span><span>ATENCIÓN AL DETALLE</span><span aria-hidden="true">✳</span><span>APRENDIZAJE CONTINUO</span></div></div>
      <section className="section wrap" id="proyecto">
        <div className="section-heading"><p className="eyebrow">01 / PROYECTO DESTACADO</p><p className="section-note">Un proyecto real.<br />Desarrollado desde cero.</p></div>
        <div className="project-title"><h2>Conocimiento organizado.<br /><span>Trabajo más simple.</span></h2><span className="project-number" aria-hidden="true">01</span></div>
        <div className="project-intro"><h3>Wiki del Registro Civil</h3><div><p>Una aplicación web para reunir y consultar información del Registro Civil de Santa Fe. Diseñé y desarrollé toda la página desde cero.</p><p className="muted">Este caso presenta la interfaz mediante capturas con contenido interno oculto. El sistema y su documentación no son públicos.</p></div></div>
        <div className="gallery">
          <div className="gallery-top"><span>RECORRIDO POR LA INTERFAZ</span><span>{String(selected + 1).padStart(2, '0')} / 06</span></div>
          <button ref={openButton} className="main-shot" onClick={() => setExpanded(true)} aria-label={`Ampliar captura: ${gallery[selected].title}`}><img src={gallery[selected].src} alt={gallery[selected].description} width="1917" height="920" /><span className="zoom">Ampliar ↗</span></button>
          <div className="gallery-caption" aria-live="polite"><div><h4>{gallery[selected].title}</h4><p>{gallery[selected].description}</p></div><div className="flex gap-2"><button className="circle" aria-label="Captura anterior" onClick={() => change(-1)}>←</button><button className="circle" aria-label="Captura siguiente" onClick={() => change(1)}>→</button></div></div>
          <div className="thumbnails" aria-label="Seleccionar captura">{gallery.map((shot, index) => <button key={shot.src} className={index === selected ? 'thumb active' : 'thumb'} aria-pressed={index === selected} onClick={() => setSelected(index)}><img src={shot.src} alt="" loading="lazy" width="1917" height="920" /><span>{String(index + 1).padStart(2, '0')} · {shot.title}</span></button>)}</div>
        </div>
        <div className="project-details">{[
          ['El contexto', 'Reunir información en una Wiki con una interfaz de consulta y administración.'],
          ['Mi aporte', 'Desarrollo completo de la página desde cero, desde la navegación hasta las pantallas de gestión.'],
          ['La interfaz', 'Biblioteca, filtros, búsqueda global, editor de artículos, categorías y panel de asistente.'],
        ].map(([title, description], i) => <article key={title}><span className="small-index">0{i + 1}</span><h4>{title}</h4><p>{description}</p></article>)}</div>
      </section>
      <section className="experience" id="experiencia"><div className="wrap section experience-grid"><div><p className="eyebrow">02 / EXPERIENCIA</p><h2>Aprender haciendo.<br /><em>En un entorno real.</em></h2></div><div className="experience-entry"><p className="eyebrow">REGISTRO CIVIL · SANTA FE</p><h3>Pasantía y desarrollo web</h3><p>Mi experiencia incluye una pasantía y el desarrollo de la Wiki del Registro Civil. Un proyecto concreto que hoy puedo mostrar como parte de mi recorrido.</p><ul><li>Autoría y desarrollo completo de la página.</li><li>Interfaces para consultar y organizar contenido.</li><li>Un caso real como base para seguir creciendo.</li></ul><a href="#proyecto" className="text-link">Explorar el proyecto <Arrow /></a></div></div></section>
      <section className="section wrap" id="tecnologias"><p className="eyebrow">03 / TECNOLOGÍAS</p><div className="tech-heading"><h2>Una base para<br /><span>seguir construyendo.</span></h2><p>Este portfolio está construido con React, TypeScript y Tailwind CSS. Una estructura preparada para sumar futuras demos y proyectos reales.</p></div><div className="tech-list">{[['React', 'Interfaz por componentes'], ['TypeScript', 'Código con tipos'], ['Tailwind CSS', 'Estilos y diseño responsive'], ['Vite', 'Entorno de desarrollo y build']].map(([name, purpose], index) => <div key={name}><span className="small-index">0{index + 1}</span><h3>{name}</h3><p>{purpose}</p><span aria-hidden="true">↗</span></div>)}</div></section>
      <section className="contact" id="contacto"><div className="wrap"><p className="eyebrow">04 / CONTACTO</p><div className="contact-row"><h2>Mi próximo desafío<br /><em>puede ser con vos.</em></h2><span className="contact-asterisk" aria-hidden="true">✳</span></div><p>Busco una oportunidad como desarrollador web junior para aportar, aprender y seguir construyendo.</p><div className="flex flex-wrap gap-3">{profile.email && <a className="button lime" href={`mailto:${profile.email}`}>Escribime <Arrow /></a>}<a className="button light-outline" href={profile.github} target="_blank" rel="noreferrer">Encontrame en GitHub <Arrow /></a></div><footer><span>© {new Date().getFullYear()} Ignacio Favot</span><span>Santa Fe, Argentina</span><a href="#inicio">Volver arriba ↑</a></footer></div></section>
    </main>
    <dialog ref={dialog} className="lightbox" onCancel={() => setExpanded(false)} onClose={() => { setExpanded(false); openButton.current?.focus(); }} onClick={e => { if(e.target === dialog.current) setExpanded(false); }} onKeyDown={e => { if (e.key === 'ArrowRight') change(1); if(e.key === 'ArrowLeft') change(-1); }} aria-labelledby="dialog-title"><div className="lightbox-head"><h2 id="dialog-title">{gallery[selected].title}</h2><button autoFocus className="button" onClick={() => setExpanded(false)}>Cerrar ×</button></div><img src={gallery[selected].src} alt={gallery[selected].description} /><div className="lightbox-foot"><button className="button" onClick={() => change(-1)}>← Anterior</button><span>{selected + 1} / 6</span><button className="button" onClick={() => change(1)}>Siguiente →</button></div></dialog>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);

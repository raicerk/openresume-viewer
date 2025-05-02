import React from "react";
import styles from "./linkedInProfile.module.css";

const LinkedInProfile: React.FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <div className={styles.sidebarSection}>
          <h3>Contacto</h3>
          <ul className={styles.skillsList}>
            <li>64890833</li>
            <li>raicerk@outlook.com</li>
            <li>linkedin.com/in/juanvalentinmoraruiz</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>Aptitudes principales</h3>
          <ul className={styles.skillsList}>
            <li>Open API</li>
            <li>Agilidad</li>
            <li>Liderazgo de equipos multidisciplinarios</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>Idiomas</h3>
          <ul className={styles.skillsList}>
            <li>Español (Native or Bilingual)</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>Certificaciones</h3>
          <ul className={styles.certificationsList}>
            <li>MTA: Database Fundamentals</li>
            <li>
              Administrador de campañas publicitarias y Optimización en motores
              de Búsqueda Adword de Google
            </li>
            <li>SCRUM MASTER PROFESSIONAL CERTIFICATE</li>
            <li>Fundamentos de la gestión de proyectos ágil</li>
            <li>Fundamentos de la gestión de proyectos</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>Reconocimientos</h3>
          <ul className={styles.awardsList}>
            <li>Trabajador revelación 2016</li>
          </ul>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.mainHeader}>
          <h1>Juan Valentin Mora Ruiz</h1>
          <h2>Senior Software Engineer - Technical Lead</h2>
          <p>Gran Santiago, Región Metropolitana de Santiago, Chile</p>
        </header>

        <section className={styles.section} id="experience">
          <h2>Experiencia</h2>
          <div className={styles.experienceItem}>
            <h3>Technical Lead</h3>
            <div className={styles.experienceMeta}>
              <div className={styles.companyName}>Blue Express</div>
              <div className={styles.dateRange}>
                febrero de 2025 - Present (4 meses)
              </div>
              <div className={styles.location}>
                Región Metropolitana de Santiago, Chile
              </div>
            </div>
            <p>
              Technical lead para Blue Express Copec a cargo del equipo
              transversal de desarrollos para los equipos de tecnológica,
              liderando las definiciones y decisiones sobre la tecnología que se
              debe aplicar, el seguimiento de definiciones de las buena
              prácticas y lineamientos de seguridad para asegurar la calidad de
              los productos que se están desarrollando en mi equipo como en el
              resto de los equipos tecnológicos.
            </p>
          </div>
          {/* Agrega aquí más experiencias laborales siguiendo el mismo formato */}
        </section>

        <section className={styles.section} id="education">
          <h2>Educación</h2>
          <div className={styles.educationItem}>
            <h3>Instituto Profesional AIEP</h3>
            <div className={styles.educationMeta}>
              <div className={styles.dateRange}>(2011 - 2014)</div>
              <div>
                Ingeniero en computación e informática, Desarrollo de sistemas
              </div>
            </div>
          </div>

          <div className={styles.educationItem}>
            <h3>Universidad Nacional Andrés Bello</h3>
            <div className={styles.educationMeta}>
              <div className={styles.dateRange}>(2008 - 2010)</div>
              <div>Ingeniería en computación e informática, Informática</div>
            </div>
          </div>

          <div className={styles.educationItem}>
            <h3>Universidad Nacional Andrés Bello</h3>
            <div className={styles.educationMeta}>
              <div className={styles.dateRange}>(2007 - 2007)</div>
              <div>
                Ingeniería Civil en computación e informática, Ingeniería
                informática
              </div>
            </div>
          </div>

          <div className={styles.educationItem}>
            <h3>Universidad Autónoma de Chile</h3>
            <div className={styles.educationMeta}>
              <div className={styles.dateRange}>(2025 - 2025)</div>
              <div>Diplomado en arquitectura de software, Computer Science</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LinkedInProfile;

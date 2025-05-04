import React from "react";
import styles from "./linkedin-profile.module.css";
import { ResumeSchema } from "../../types/resume";
import { useLanguage } from "@/hooks/use-language";

type LinkedinProps = {
  resume: ResumeSchema;
};

const LinkedInProfile = ({ resume }: LinkedinProps) => {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <div className={styles.sidebarSection}>
          <h3>{t("templates.linkedin.contact")}</h3>
          <ul className={styles.skillsList}>
            <li>
              {resume?.data?.personal?.country_code}
              {resume?.data?.personal?.phone_number}
            </li>
            <li>{resume?.data?.personal?.email}</li>
            <li>{resume?.data?.personal?.url_linkedin}</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>{t("templates.linkedin.mainSkills")}</h3>
          <ul className={styles.skillsList}>
            {resume?.data?.skill?.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>{t("templates.linkedin.languages")}</h3>
          <ul className={styles.skillsList}>
            <li>Español (Native or Bilingual)</li>
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3>{t("templates.linkedin.certifications")}</h3>
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
      </aside>

      <main className={styles.main}>
        <header className={styles.mainHeader}>
          <h1>{resume?.data?.personal?.name}</h1>
          <h2>{resume?.data?.summary}</h2>
          <p>
            {resume?.data?.personal?.city}, {resume?.data?.personal?.state},{" "}
            {resume?.data?.personal?.country}
          </p>
        </header>

        <section className={styles.section} id="experience">
          <h2>{t("templates.linkedin.experience")}</h2>
          {resume?.data?.experience?.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <h3>{exp.title}</h3>
              <div className={styles.experienceMeta}>
                <div className={styles.companyName}>{exp.employer}</div>
                <div className={styles.dateRange}>
                  {/* {exp.start_year} - {exp.end_year} */}
                </div>
                <div className={styles.location}>
                  {exp.employer_city}, {exp.employer_state},{" "}
                  {exp.employer_country}
                </div>
              </div>
              <p>{exp.description?.join(" ")}</p>
            </div>
          ))}
        </section>

        <section className={styles.section} id="education">
          <h2>{t("templates.linkedin.education")}</h2>
          {resume?.data?.education?.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <h3>{edu.institution}</h3>
              <div className={styles.educationMeta}>
                <div>
                  {edu.degree_title} ( {edu.start_year} - {edu.end_year})
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LinkedInProfile;

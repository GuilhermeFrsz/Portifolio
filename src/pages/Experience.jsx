import SectionHeading from "../components/SectionHeading";
import { BriefcaseBusiness, GraduationCap, Award, Clock3, Layers3 } from "lucide-react";
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS, COMPLEMENTARY_ACTIVITIES } from "../data";

export default function Experience() {
  return <div className="page inner-page">
    <SectionHeading eyebrow="04 // JORNADA" title="Experiência & formação" text="Trajetória profissional, graduação, especialização em andamento e projetos complementares."/>
    <section className="journey-section" aria-labelledby="experiencia-profissional">
      <div className="journey-heading"><BriefcaseBusiness/><h2 id="experiencia-profissional">Experiência profissional</h2></div>
      <div className="timeline">{WORK_EXPERIENCE.map(item => <article className="timeline-item" key={`${item.role}-${item.period}`}>
        <span className="timeline-icon"><BriefcaseBusiness size={20}/></span>
        <div className="glass-panel"><span className="eyebrow">{item.period}</span><h3>{item.role}</h3><strong className="timeline-org">{item.organization}</strong><p>{item.description}</p></div>
      </article>)}</div>
    </section>
    <section className="journey-section" aria-labelledby="formacao-academica">
      <div className="journey-heading"><GraduationCap/><h2 id="formacao-academica">Formação acadêmica e capacitação</h2></div>
      <div className="education-grid">{EDUCATION.map(item => <article className="glass-panel education-card" key={item.course}>
        <span className="education-status">{item.status}</span><h3>{item.course}</h3><p className="education-institution">{item.institution}</p><p className="education-period"><Clock3 size={15}/>{item.period}</p>
      </article>)}</div>
    </section>
    <section className="journey-section" aria-labelledby="atividades-complementares">
      <div className="journey-heading"><Layers3/><h2 id="atividades-complementares">Projetos e atividades complementares</h2></div>
      <div className="activity-grid">{COMPLEMENTARY_ACTIVITIES.map(item => <article className="glass-panel activity-card" key={item.title}>
        <h3>{item.title}</h3><p>{item.description}</p>
      </article>)}</div>
    </section>
    <section className="journey-section" aria-labelledby="certificacoes">
      <div className="journey-heading"><Award/><h2 id="certificacoes">Cursos, eventos e certificações</h2></div>
      <div className="cert-grid">{CERTIFICATIONS.map(item => <article className="glass-panel cert-card" key={`${item.issuer}-${item.title}`}>
        <h3>{item.title}</h3><p>{item.issuer}</p><span>{item.detail}</span>
      </article>)}</div>
    </section>
  </div>;
}

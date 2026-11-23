import SectionHeading from "../components/SectionHeading";
import { BrainCircuit, Code2, Compass, Lightbulb, Users, GraduationCap, Scale } from "lucide-react";
import { PROFESSIONAL_SKILLS, LANGUAGES, LEGAL_SKILLS } from "../data";

const values = [
  [Code2, "Full stack e produtos digitais", "React, TypeScript e integrações com bancos de dados para desenvolver soluções úteis."],
  [BrainCircuit, "SaaS e arquitetura", "Projetos web multi-tenant, controle de acesso e automação de processos."],
  [Scale, "Tecnologia e Direito", "Atuação supervisionada na Infância e Juventude com análise processual, pesquisa e minutas."],
  [Users, "Ensino e comunicação", "Experiência em educação digital e condução de atividades práticas de informática."]
];

export default function About() {
  return <div className="page inner-page">
    <SectionHeading eyebrow="01 // IDENTIDADE" title="Sobre mim" text="Tecnologia, visão institucional e comunicação para transformar problemas em soluções."/>
    <div className="about-layout">
      <article className="glass-panel about-main">
        <span className="eyebrow">WHOAMI</span>
        <h2>Desenvolvimento full stack com uma visão que vai além do código.</h2>
        <p>Sou Guilherme Freitas, de Boa Vista (RR). Sou graduado em Análise e Desenvolvimento de Sistemas pela Estácio, técnico em Informática pelo IFRR, graduando em Direito na Faculdade Cathedral e estagiário no Ministério Público do Estado de Roraima (MPRR).</p>
        <p>Desenvolvo aplicações e soluções SaaS, incluindo projetos de gestão hoteleira com React, TypeScript, PostgreSQL e Supabase. Em 2023, atuei na idealização e programação de uma startup acadêmica de plataforma empregatícia.</p>
        <p>No MPRR, apoio atividades supervisionadas de Infância e Juventude, como análise de processos, elaboração de minutas e acompanhamento de procedimentos. Também tenho experiência como professor de informática, conduzindo turmas de produtividade digital e segurança na internet.</p>
        <p>Busco oportunidades para unir pensamento analítico, desenvolvimento de software e melhoria de processos em soluções que gerem valor real.</p>
      </article>
      <div className="about-values">
        {values.map(([Icon, title, desc]) => <article className="value-card" key={title}><Icon/><div><h3>{title}</h3><p>{desc}</p></div></article>)}
      </div>
    </div>
    <div className="info-grid">
      <section className="glass-panel info-card">
        <div className="panel-title"><Compass size={18}/><h2>Competências profissionais</h2></div>
        <div className="stack-items">{PROFESSIONAL_SKILLS.map(skill => <span className="stack-item" key={skill}><i/>{skill}</span>)}</div>
      </section>
      <section className="glass-panel info-card">
        <div className="panel-title"><GraduationCap size={18}/><h2>Idiomas</h2></div>
        <div className="language-list">{LANGUAGES.map(item => <div key={item.name}><strong>{item.name}</strong><span>{item.level}</span></div>)}</div>
      </section>
    </div>
    <section className="glass-panel info-card legal-panel" aria-labelledby="juridico-heading">
      <div className="panel-title"><Scale size={19}/><h2 id="juridico-heading">Sistemas e competências jurídicas</h2></div>
      <p className="muted legal-caption">Conhecimentos e atividades registrados no currículo — com atuação prática sob supervisão institucional.</p>
      <div className="stack-items">{LEGAL_SKILLS.map(skill => <span className="stack-item" key={skill}><i/>{skill}</span>)}</div>
    </section>
  </div>;
}

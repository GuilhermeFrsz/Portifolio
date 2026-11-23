import { Link } from "react-router-dom";
import { ArrowRight, Code2, Mail, Github, Linkedin, Sparkles, Activity } from "lucide-react";
import NeuralCanvas from "../components/NeuralCanvas";
import ProjectCard from "../components/ProjectCard";
import { PROFILE, FEATURED_PROJECTS, KNOWN_TECH } from "../data";
import { useGithub } from "../hooks/useGithub";

export default function Home() {
  const { profile, repos, loading } = useGithub();
  const featured = repos.length ? FEATURED_PROJECTS.map(item => repos.find(repo => repo.name.toLowerCase() === item.name.toLowerCase()) || item).slice(0, 3) : FEATURED_PROJECTS.slice(0, 3);

  return <div className="page home-page">
    <section className="hero">
      <NeuralCanvas/>
      <div className="hero-copy">
        <span className="status"><i/> ABERTO A CONEXÕES PROFISSIONAIS</span>
        <p className="terminal-intro"><span className="cyan">&gt;</span> Olá, eu sou</p>
        <h1>Guilherme<br/><span className="gradient-text">Freitas</span></h1>
        <div className="role-line"><span>Desenvolvedor Full Stack</span><b className="cursor">_</b></div>
        <p className="hero-description">Desenvolvedor Full Stack, graduado em Análise e Desenvolvimento de Sistemas e graduando em Direito. Uno programação, visão de negócios e experiência institucional para criar soluções digitais úteis.</p>
        <div className="hero-buttons">
          <Link className="button primary" to="/projetos"><Code2 size={17}/> Explorar projetos <ArrowRight size={16}/></Link>
          <Link className="button secondary" to="/contato"><Mail size={17}/> Vamos conversar</Link>
        </div>
        <div className="social-row">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a>
          <span className="social-separator"/>
          <span>{profile?.location || PROFILE.location}</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="frame-corner corner-a"/><div className="frame-corner corner-b"/>
          <img src={`${import.meta.env.BASE_URL}images/guilherme-portrait.webp`} alt="Guilherme Freitas com óculos e cabelos cacheados, com iluminação suave ciano e magenta, mostrando parte dos ombros" width="1122" height="1402" fetchPriority="high"/>
          <span className="portrait-tag">USER_PROFILE // 001</span>
        </div>
        <div className="floating-terminal">
          <div className="terminal-dots"><i/><i/><i/><span>neural_core.exe</span></div>
          <p><span className="cyan">const</span> developer = &#123;</p>
          <p className="indent">focus: <span className="purple">"full-stack"</span>,</p>
          <p className="indent">mindset: <span className="purple">"always learning"</span>,</p>
          <p className="indent">status: <span className="green">"building"</span></p>
          <p>&#125;;</p>
        </div>
      </div>
      <div className="hero-bottomline"><span><Activity size={14}/> SYSTEM ONLINE</span><span>LAT: {profile?.public_repos ?? "—"} REPOSITÓRIOS PÚBLICOS</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro-grid">
      <article className="glass-panel about-teaser">
        <div className="panel-title"><Sparkles size={19}/><h2>Sobre mim</h2></div>
        <p>Sou graduado em Análise e Desenvolvimento de Sistemas, técnico em Informática pelo IFRR e estagiário de Direito no MPRR. Desenvolvo soluções web e SaaS, conectando tecnologia e melhoria de processos.</p>
        <Link className="text-link" to="/sobre">Conheça minha jornada <ArrowRight size={15}/></Link>
        <div className="code-watermark">&lt;/&gt;</div>
      </article>
      <article className="glass-panel tech-teaser">
        <div className="panel-title"><Code2 size={19}/><h2>Explorando tecnologias</h2></div>
        <div className="tech-chips">{KNOWN_TECH.slice(0, 8).map(t => <span key={t}>{t}</span>)}</div>
        <Link className="text-link" to="/stack">Ver stack completa <ArrowRight size={15}/></Link>
      </article>
    </section>

    <section className="home-projects">
      <div className="section-row"><div><span className="eyebrow">ALGUNS EXPERIMENTOS</span><h2>Projetos em destaque</h2></div><Link className="text-link" to="/projetos">Todos os projetos <ArrowRight size={15}/></Link></div>
      <div className="project-grid compact">{featured.map(p => <ProjectCard key={p.id || p.name} project={p} featured/>)}</div>
      {loading && <p className="muted small">Sincronizando repositórios com o GitHub…</p>}
    </section>
  </div>;
}

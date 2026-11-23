import { NavLink, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Terminal, Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import { PROFILE } from "../data";

const links = [
  ["/", "Início"], ["/sobre", "Sobre"], ["/stack", "Stack"],
  ["/projetos", "Projetos"], ["/experiencia", "Trajetória"], ["/contato", "Contato"]
];

function initialTheme() {
  try { return localStorage.getItem("guilherme-portfolio-theme") === "light" ? "light" : "dark"; }
  catch { return "dark"; }
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f4f7fc" : "#070812");
    try { localStorage.setItem("guilherme-portfolio-theme", theme); } catch { /* acesso bloqueado */ }
  }, [theme]);

  const toggleTheme = () => setTheme(v => v === "dark" ? "light" : "dark");

  return <div className="app-shell">
    <header className="topbar">
      <Link className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="Guilherme Freitas — início">
        <span className="brand-mark"><Terminal size={23}/></span>
        <span>Guilherme<span className="accent">Frsz</span></span>
      </Link>
      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal" id="main-nav">
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"}
          onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
        <div className="mobile-social">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </nav>
      <div className="top-actions">
        <a className="icon-button social-action" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18}/></a>
        <a className="icon-button social-action" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
        <button type="button" className="icon-button theme-action" onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"} aria-pressed={theme === "light"} title="Alternar tema">
          {theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}
        </button>
      </div>
      <button type="button" className="mobile-toggle icon-button" onClick={() => setMenuOpen(v => !v)}
        aria-controls="main-nav" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
        {menuOpen ? <X/> : <Menu/>}
      </button>
    </header>
    <main id="conteudo"><Outlet/></main>
    <footer className="footer">
      <span><span className="accent">©</span> {new Date().getFullYear()} Guilherme Freitas</span>
      <span className="mono">feito com <span className="accent">React</span> & curiosidade_</span>
    </footer>
  </div>;
}

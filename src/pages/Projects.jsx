import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, RefreshCw } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { FEATURED_PROJECTS } from "../data";
import { useGithub } from "../hooks/useGithub";

export default function Projects() {
  const { repos, loading, error } = useGithub();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("Todas");
  const [sort, setSort] = useState("updated");
  const all = repos.length ? repos : FEATURED_PROJECTS;
  const languages = ["Todas", ...new Set(all.map(r => r.language).filter(Boolean))].sort((a,b) => a === "Todas" ? -1 : a.localeCompare(b));
  const filtered = useMemo(() => all.filter(r => {
    const matches = `${r.name} ${r.description || ""}`.toLowerCase().includes(query.toLowerCase());
    return matches && (language === "Todas" || r.language === language);
  }).sort((a,b) => sort === "stars" ? (b.stargazers_count || 0) - (a.stargazers_count || 0) : sort === "name" ? a.name.localeCompare(b.name) : new Date(b.updated_at || 0) - new Date(a.updated_at || 0)), [all, query, language, sort]);

  return <div className="page inner-page">
    <SectionHeading eyebrow="03 // REPOSITÓRIOS" title="Projetos" text="Uma seleção de repositórios públicos. Pesquise, filtre por linguagem e explore o código."/>
    <div className="project-controls">
      <label className="search-box"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar projeto..." aria-label="Buscar projeto"/></label>
      <label className="select-box"><SlidersHorizontal size={16}/><select value={language} onChange={e => setLanguage(e.target.value)} aria-label="Filtrar por linguagem">{languages.map(l => <option key={l}>{l}</option>)}</select></label>
      <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)} aria-label="Ordenar projetos">
        <option value="updated">Mais recentes</option><option value="stars">Mais estrelas</option><option value="name">Nome A-Z</option>
      </select>
    </div>
    {loading && <p className="muted"><RefreshCw size={15} className="spin"/> Carregando repositórios do GitHub…</p>}
    {error && <p className="notice">Exibindo projetos de referência. A API do GitHub não respondeu: {error}</p>}
    <div className="project-grid">{filtered.map(p => <ProjectCard key={p.id || p.name} project={p}/>)}</div>
    {!filtered.length && <div className="empty-state">Nenhum projeto encontrado. Tente outro termo ou filtro.</div>}
    <p className="muted small">Fonte: API pública do GitHub · <a href="https://github.com/GuilhermeFrsz?tab=repositories" target="_blank" rel="noreferrer">ver todos os repositórios</a></p>
  </div>;
}

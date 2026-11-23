import SectionHeading from "../components/SectionHeading";
import { TECH_GROUPS } from "../data";
import { Code2, Database, BrainCircuit, Wrench, PanelsTopLeft, Monitor } from "lucide-react";

const icons = [PanelsTopLeft, Code2, Database, Wrench, BrainCircuit, Monitor];
export default function Stack() {
  return <div className="page inner-page">
    <SectionHeading eyebrow="02 // FERRAMENTAS" title="Stack & tecnologias" text="Stack orientada a produtos web: tecnologias do currículo e ferramentas aplicadas em projetos práticos."/>
    <div className="stack-grid">{TECH_GROUPS.map(({title, items}, i) => {
      const Icon = icons[i];
      return <section className="glass-panel stack-card" key={title}>
        <div className="panel-title"><Icon/><h2>{title}</h2></div>
        <div className="stack-items">{items.map(item => <span className="stack-item" key={item}><i/>{item}</span>)}</div>
      </section>;
    })}</div>
    <div className="note-panel"><span className="mono cyan">// UMA STACK EM EVOLUÇÃO</span><p>Os itens representam familiaridade, estudo ou uso em projetos — não equivalem, por si só, a uma certificação ou a domínio avançado de cada ferramenta.</p></div>
  </div>;
}

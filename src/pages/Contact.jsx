import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send, Copy, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { PROFILE } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copie o e-mail:", PROFILE.email);
    }
  };
  return <div className="page inner-page">
    <SectionHeading eyebrow="05 // CONEXÃO" title="Vamos conversar?" text="Para desenvolvimento web, soluções SaaS, tecnologia, networking e oportunidades profissionais."/>
    <div className="contact-layout">
      <div className="glass-panel contact-main">
        <span className="status"><i/> CONTATO PROFISSIONAL</span>
        <h2>Boas ideias começam com uma conversa.</h2>
        <p>Se você tem uma oportunidade ou precisa de ajuda com uma solução digital, podemos conversar sobre o seu projeto.</p>
        <a className="button primary" href={`mailto:${PROFILE.email}`}><Mail size={18}/> Enviar e-mail <Send size={15}/></a>
        <p className="muted small">Localização: {PROFILE.location}. Não há formulário nem envio automatizado de mensagens.</p>
      </div>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${PROFILE.email}`}><Mail/><span><b>E-mail</b><small>{PROFILE.email}</small></span><Send size={15}/></a>
        <a className="contact-link" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/><span><b>WhatsApp</b><small>{PROFILE.phone}</small></span><Send size={15}/></a>
        <a className="contact-link" href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github/><span><b>GitHub</b><small>@{PROFILE.username}</small></span><Send size={15}/></a>
        <a className="contact-link" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin/><span><b>LinkedIn</b><small>Guilherme Freitas de Souza</small></span><Send size={15}/></a>
        <button type="button" className="contact-link copy-link" onClick={copy}><Copy/><span><b>Copiar e-mail</b><small>{copied ? "E-mail copiado!" : "Copiar endereço de contato"}</small></span>{copied ? <Check size={16}/> : <Copy size={15}/>}</button>
      </div>
    </div>
  </div>;
}

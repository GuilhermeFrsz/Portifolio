import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { PROFILE, EDUCATION, WORK_EXPERIENCE, CERTIFICATIONS, FEATURED_PROJECTS, LEGAL_SKILLS, COMPLEMENTARY_ACTIVITIES, TECH_GROUPS } from "../src/data.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let passed = 0;
function check(condition, message) {
  if (!condition) throw new Error(`Falhou: ${message}`);
  console.log(`✓ ${message}`);
  passed++;
}
function read(relative) {
  const path = resolve(root, relative);
  check(existsSync(path), `Arquivo presente: ${relative}`);
  return readFileSync(path, "utf8");
}

const app = read("src/App.jsx");
check(app.includes('import { Routes, Route, useLocation } from "react-router-dom";'), "Import do React Router corrigido");
for (const route of ["sobre", "stack", "projetos", "experiencia", "contato"]) {
  check(app.includes(`path="${route}"`), `Rota /${route} declarada`);
}
for (const page of ["Home", "About", "Stack", "Projects", "Experience", "Contact"]) {
  check(read(`src/pages/${page}.jsx`).includes("export default"), `Página ${page} exportada`);
}
for (const file of ["src/main.jsx", "src/components/Layout.jsx", "src/styles.css", "vite.config.js", "index.html", "public/_redirects", "vercel.json"]) read(file);

const imagePath = resolve(root, "public/images/guilherme-portrait.png");
check(existsSync(imagePath), "Retrato incluído");
const image = readFileSync(imagePath);
check(image.subarray(1, 4).toString() === "PNG" && image.readUInt32BE(16) >= 1000 && image.readUInt32BE(20) >= 1300, "Retrato em alta resolução para exibir os ombros");
check(statSync(imagePath).size > 100000, "Retrato não está vazio");
check(existsSync(resolve(root, "public/images/guilherme-portrait.webp")), "WebP otimizado disponível");
check(PROFILE.email === "guilhermefrsz26@gmail.com", "E-mail profissional configurado");
check(PROFILE.linkedin === "https://www.linkedin.com/in/guilherme-freitas-de-souza-0a7a43280/", "LinkedIn atualizado");
check(PROFILE.whatsapp.startsWith("https://wa.me/55"), "Contato WhatsApp configurado");
check(EDUCATION.some(v => v.course === "Capacitação em Programação Fullstack" && v.institution.includes("Iteam") && v.period.includes("372") && v.period.includes("12/02/2027")), "Capacitação Fullstack do Iteam incluída");
check(WORK_EXPERIENCE.length === 3 && CERTIFICATIONS.length >= 15, "Experiências do novo currículo e certificações preenchidas");
check(WORK_EXPERIENCE.some(v => v.organization.includes("MPRR") && v.period.includes("2026")), "Estágio atual no MPRR incluído");
check(EDUCATION.some(v => v.course === "Análise e Desenvolvimento de Sistemas" && v.status === "Graduado" && v.period.includes("2026")), "Graduação em ADS atualizada");
check(EDUCATION.some(v => v.course.includes("Direito") && v.period.includes("2028")), "Previsão de conclusão de Direito atualizada para 2028");
check(LEGAL_SKILLS.includes("Projudi") && LEGAL_SKILLS.includes("SEI"), "Sistemas jurídicos descritos no currículo presentes");
check(COMPLEMENTARY_ACTIVITIES.length === 3, "Atividades complementares do currículo incluídas");
check(TECH_GROUPS.some(v => v.items.includes("PostgreSQL") && v.items.includes("Supabase")), "Banco de dados e plataformas atualizados");
check(read("src/pages/About.jsx").includes("LEGAL_SKILLS"), "Competências jurídicas visíveis em Sobre");
check(read("src/pages/Experience.jsx").includes("COMPLEMENTARY_ACTIVITIES"), "Atividades complementares visíveis em Trajetória");
check(FEATURED_PROJECTS.every(v => v.url.startsWith("https://github.com/GuilhermeFrsz/")), "Links de projetos formatados");
const css = readFileSync(resolve(root, "src/styles.css"), "utf8");
check(css.includes(':root[data-theme="light"]') && css.includes('.portrait-frame img'), "Tema claro e moldura possuem estilos");
console.log(`\n${passed} verificações estáticas concluídas. Este teste não substitui npm run build nem os testes no navegador.`);

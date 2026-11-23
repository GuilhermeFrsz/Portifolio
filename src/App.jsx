import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Stack from "./pages/Stack";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return <div className="page inner-page not-found"><span className="eyebrow">404 // ROTA NÃO ENCONTRADA</span><h1>Esta página não existe.</h1><Link className="button primary" to="/">Voltar ao início</Link></div>;
}

export default function App() {
  return <>
    <ScrollToTop/>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="sobre" element={<About/>}/>
        <Route path="stack" element={<Stack/>}/>
        <Route path="projetos" element={<Projects/>}/>
        <Route path="experiencia" element={<Experience/>}/>
        <Route path="contato" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </>;
}

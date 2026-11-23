import { useEffect, useState } from "react";
import { FEATURED_PROJECTS, PROFILE } from "../data";

// A API pública do GitHub não exige token para perfis e repositórios públicos.
// O hook mantém o site utilizável mesmo se a API estiver indisponível ou atingir limite.
export function useGithub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const headers = { Accept: "application/vnd.github+json" };
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${PROFILE.username}`, { headers, signal: controller.signal }),
          fetch(`https://api.github.com/users/${PROFILE.username}/repos?sort=updated&per_page=100`, { headers, signal: controller.signal })
        ]);
        if (!userResponse.ok || !reposResponse.ok) throw new Error("Não foi possível atualizar os dados agora.");
        const [user, repositoryList] = await Promise.all([userResponse.json(), reposResponse.json()]);
        setProfile(user);
        setRepos(repositoryList.filter(repo => !repo.fork).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Falha ao conectar ao GitHub.");
          setRepos(FEATURED_PROJECTS);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return { profile, repos, loading, error };
}

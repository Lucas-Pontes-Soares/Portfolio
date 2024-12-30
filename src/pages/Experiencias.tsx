import { Navbar } from "../components/Navbar";
import { FaComment, FaGitAlt, FaNodeJs, FaPhp, FaProjectDiagram, FaReact, FaServer, FaUsers } from "react-icons/fa";
import { Experience } from "../components/Experience";

export function Experiencias() {
    return (
        <div className="bg-minhaCor min-h-screen">
            <Navbar page="experiencias" />
            <div className="bg-imageExperiencias min-h-screen flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-col w-full items-center justify-center gap-8 mt-36">
                <Experience
                    title="Estagiário de Programação"
                    enterprise="IRIZ Soluções em T.I."
                    date="Março 2024 - Atualmente"
                    paragraphs={[
                    "A IRIZ é uma software house, que oferece soluções completas de projetos web até aplicativos móveis.",
                    "Minha função abrange a manutenção e aprimoramento de sistemas existentes, resolução de problemas e correção de bugs, bem como a participação em projetos em desenvolvimento e a criação de novas soluções. Essa experiência tem sido fundamental para o meu crescimento, pois estou constantemente desafiado a aplicar e expandir meu raciocínio lógico e habilidades técnicas.",
                    "Proporcionando uma visão abrangente de todo o ciclo de vida do desenvolvimento de software, desde a concepção da ideia até a implementação final, abrangendo tanto o front-end quanto o back-end, banco de dados e deploy.",
                    ]}
                    hardSkills={[
                    { name: "Node.js", icon: FaNodeJs, color: "bg-green-500", isLong: false },
                    { name: "ReactJS", icon: FaReact, color: "bg-blue-400", isLong: false },
                    { name: "PHP", icon: FaPhp, color: "bg-indigo-500", isLong: false },
                    { name: "SQL", icon: FaServer, color: "bg-purple-500", isLong: false },
                    { name: "Git", icon: FaGitAlt, color: "bg-orange-600", isLong: false },
                    ]}
                    softSkills={[
                    { name: "Metodologias Ágeis", icon: FaProjectDiagram, color: "bg-green-500", isLong: true },
                    { name: "Comunicação", icon: FaComment, color: "bg-blue-600", isLong: true },
                    { name: "Trabalho em Equipe", icon: FaUsers, color: "bg-blue-500", isLong: true },
                    ]}
                />
                </div>
            </div>
        </div>
    );
}

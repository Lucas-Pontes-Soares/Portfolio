import { Brain, CodeXml } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { FaAngular, FaArrowsAlt, FaCheck, FaClipboardList, FaCode, FaComment, FaCss3Alt, FaDatabase, FaExchangeAlt, FaGitAlt, FaHtml5, FaJava, FaJs, FaLightbulb, FaMicrochip, FaMobileAlt, FaNodeJs, FaNpm, FaPalette, FaProjectDiagram, FaReact, FaServer, FaTasks, FaThLarge, FaUsers, FaWrench } from "react-icons/fa";
import { Skills } from "../components/Skills";
import { LuFileJson } from "react-icons/lu";
import { GiFamilyTree } from "react-icons/gi";

export function Habilidades() {
    return (
        <div className="bg-minhaCor min-h-screen">
            <Navbar page="habilidades"/>
            <div className="bg-imageHabilidades min-h-screen flex flex-col">
                <div className="flex flex-col w-full items-center justify-center gap-8 mt-36">
                    <div className="flex w-11/12 items-center min-h-80 justify-center bg-minhaCor text-white rounded-xl  md:w-6/12">
                        <div className="flex w-11/12 flex-col p-4 items-start min-h-[320px] h-auto bg-minhaCor text-white">
                            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                                <CodeXml /> HardSkills:
                            </h3>

                            <br />
                            <p className="text-gray-300 text-left p-2">
                                Tecnologias:
                            </p>
                            <div className="flex flex-wrap">
                                <Skills isLong={false} name="HTML" icon={FaHtml5} color="bg-orange-500" />
                                <Skills isLong={false} name="CSS" icon={FaCss3Alt} color="bg-blue-500" />
                                <Skills isLong={false} name="JavaScript" icon={FaJs} color="bg-yellow-500" />
                                <Skills isLong={false} name="Node.js" icon={FaNodeJs} color="bg-green-500" />
                                <Skills isLong={false} name="ReactJS" icon={FaReact} color="bg-blue-400" />
                                <Skills isLong={false} name="Angular" icon={FaAngular} color="bg-red-500" />
                                <Skills isLong={false} name="Arduino" icon={FaMicrochip} color="bg-teal-500" />
                                <Skills isLong={false} name="MongoDB" icon={FaDatabase} color="bg-green-700" />
                                <Skills isLong={false} name="SQL" icon={FaServer} color="bg-purple-500" />
                                <Skills isLong={false} name="NPM" icon={FaNpm} color="bg-red-600" />
                                <Skills isLong={false} name="Git" icon={FaGitAlt} color="bg-orange-600" />
                                <Skills isLong={false} name="Flutter" icon={FaMobileAlt} color="bg-cyan-500" />
                                <Skills isLong={false} name="API" icon={FaExchangeAlt} color="bg-indigo-500" />
                                <Skills isLong={false} name="Java" icon={FaJava} color="bg-red-600" />
                                <Skills isLong={false} name="JSON" icon={LuFileJson} color="bg-gray-500" />
                                <Skills isLong={false} name="C++" icon={FaCode} color="bg-blue-700" />
                            </div>

                            <br />
                            <p className="text-gray-300 text-left p-2">
                                Fundamentos:
                            </p>
                            <div className="flex flex-wrap">
                                <Skills isLong={true} name="Estrutura de Dados" icon={GiFamilyTree} color="bg-purple-500" />
                                <Skills isLong={true} name="Lógica de Programação" icon={FaLightbulb} color="bg-yellow-500" />
                                <Skills isLong={true} name="Boas Práticas" icon={FaCheck} color="bg-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-11/12 items-center min-h-80 justify-center bg-minhaCor text-white rounded-xl  md:w-6/12">
                        <div className="flex w-11/12 flex-col p-4 items-start min-h-[320px] h-auto bg-minhaCor text-white">
                            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                                <Brain /> SoftSkills:
                            </h3>

                            <br />
                            <p className="text-gray-300 text-left p-2">
                                Práticas:
                            </p>
                            <div className="flex flex-wrap">
                                <Skills isLong={true} name="Trabalho em Equipe" icon={FaUsers} color="bg-blue-500" />
                                <Skills isLong={true} name="Organização" icon={FaClipboardList} color="bg-gray-500" />
                                <Skills isLong={true} name="Metodologias Ágeis" icon={FaProjectDiagram} color="bg-green-500" />
                                <Skills isLong={true} name="Kanban" icon={FaThLarge} color="bg-teal-500" />
                                <Skills isLong={true} name="Scrum" icon={FaTasks} color="bg-orange-500" />
                                <Skills isLong={true} name="Criatividade" icon={FaPalette} color="bg-pink-500" />
                                <Skills isLong={true} name="Adaptação" icon={FaArrowsAlt} color="bg-purple-500" />
                                <Skills isLong={true} name="Comunicação" icon={FaComment} color="bg-blue-600" />
                                <Skills isLong={true} name="Resolução de Problemas" icon={FaWrench} color="bg-orange-600" />
                            </div>
                        </div>
                    </div>

                    <br /><br /><br />
                </div>
            </div>
        </div>
    )
}
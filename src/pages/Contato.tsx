import { CornerDownRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { RiDiscordLine } from "react-icons/ri";

export function Contato() {
    return (
        <div className="bg-minhaCor min-h-screen">
            <Navbar page="contato" />
            <div className="bg-imageContato h-screen flex flex-col items-center justify-center space-y-4">
                <div className="bg-minhaCor p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 w-[90%] md:w-1/2 rounded-xl shadow-lg">
                    <div className="flex-shrink-0">
                        <img
                            src="/lucao.jpg"
                            alt="Minha foto"
                            className="rounded-md shadow-md w-48 h-48 object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h4 className="text-emerald-400 text-4xl font-bold">
                            Lucas Pontes Soares
                        </h4>
                        <h2 className="text-white text-xl font-itim flex items-center">
                            <CornerDownRight className="text-emerald-400 mr-2" />
                            Desenvolvedor Full-Stack
                        </h2>
                    </div>
                </div>

                <div className="bg-minhaCor p-4 flex flex-col items-left space-y-6 w-[90%] md:p-8 md:w-1/2 rounded-xl shadow-lg">
                    <h3 className="text-white text-2xl font-bold">
                        # Entre em Contato:
                    </h3>
                    <p className="text-gray-300 text-left">
                        Você pode entrar em contato comigo através das opções.
                    </p>
                    
                    <h3 className="text-white text-xl font-itim flex items-left">
                        <Mail className="text-emerald-400 mr-2" />
                        eterneru.lucas@outlook.com
                    </h3>

                    <h3 className="text-white text-xl font-itim flex items-left">
                        <Phone className="text-emerald-400 mr-2" />
                        +55 14 982197061
                    </h3>

                    <h3 className="text-white text-xl font-itim flex items-left">
                        <RiDiscordLine className="text-emerald-400 mr-2" size={28}/>
                        dev_lucassoares
                    </h3>

                    <h3 className="text-white text-xl flex items-left">
                        <Linkedin className="text-emerald-400 mr-2" />
                        <a 
                            href="https://www.linkedin.com/in/lucas-pontes-soares" 
                            target="_blank" 
                            className="text-white border-b-2 border-emerald-400 hover:border-emerald-300 hover:text-emerald-300 cursor-pointer"
                        >
                            Lucas Pontes Soares
                        </a>
                    </h3>

                    <h3 className="text-white text-xl flex items-left">
                        <Github className="text-emerald-400 mr-2" />
                        <a 
                            href="https://github.com/Lucas-Pontes-Soares" 
                            target="_blank" 
                            className="text-white border-b-2 border-emerald-400 hover:border-emerald-300 hover:text-emerald-300 cursor-pointer"
                        >
                            Lucas-Pontes-Soares
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    );
}

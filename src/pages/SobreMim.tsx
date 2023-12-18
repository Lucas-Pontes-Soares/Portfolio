import { BarraInferior } from "../components/BarraInferior";
import { Navbar } from "../components/Navbar";

export function SobreMim(){
    return(
        <div className="bg-minhaCor min-h-screen">
            <Navbar page="sobre-mim"/>
            <div className="bg-image h-screen flex flex-col justify-between">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <h1 className="text-emerald-400 text-7xl font-bold">
                        Lucas Pontes Soares
                    </h1>
                </div>
                <BarraInferior pagina="Sobre Mim"/>
            </div>
            <br />
            <br />

            <div className="flex w-full h-14 items-center justify-center">
                <div className="flex-auto bg-minhaCor flex items-center justify-center">
                    <img src="/icon2.png" alt="Timon" width="140px" height="140px" />
                </div>
                <div className="flex w-8/12 bg-minhaCor"></div>
                <div className="flex-auto bg-minhaCor flex items-center justify-center">
                    <img src="/icon1.png" alt="Timon" width="140px" height="140px"/>
                </div>
            </div>

            <div className="flex w-full h-14 items-center justify-center">
                <h1 className="text-white text-xl font-Julius">Programador Full-Stack</h1>
            </div>

            <div className="flex w-full h-14 items-center justify-center">
                <div className="flex-auto bg-minhaCor flex items-center justify-center">
                </div>
                <div className="flex w-5/12 bg-minhaCor border-b-2 border-white"></div>
                <div className="flex-auto bg-minhaCor flex items-center justify-center">
                </div>
            </div>

            <br />

            <div className="flex w-full h-14 items-center justify-center">
                <div className="flex-auto flex items-center justify-center"></div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #BackEnd
                </div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #FrontEnd
                </div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #NodeJS
                </div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #ReactJS
                </div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #SQL
                </div>
                <div className="flex-auto flex items-center justify-center text-white text-xl font-Julius">
                    #MongoDB
                </div>
                <div className="flex-auto flex items-center justify-center"></div>
            </div>

            <br />

            <div className="bg-image2 relative w-full h-14">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src="/praia1video.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex w-6/12 items-center h-80 justify-center bg-minhaCor text-white z-10">
                        <div className="pl-10">
                            <h1 className="text-white text-xl font-Julius text-left pb-7">Formação Acadêmica</h1>
                            <p className="text-white text-xl font-josefin">
                                Olá! Meu nome é Lucas Pontes Soares, atualmente estou cursando o 3 ano do ensino medio de desenvolvimento de sistemas na ETEC / FATEC. 
                            </p>
                        </div>
                    </div>
                    <div className="tringuleLateral w-3/12 flex items-center justify-center z-10"></div>
                    <div className="flex-auto flex items-center w-4/12 justify-center"></div>
                </div>
            </div>

            <br/>

            <div className="bg-image2 relative w-full h-14">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src="/praia2video.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex-auto flex items-center w-4/12 justify-center"></div>
                    <div className="tringuleLateral2 w-3/12 flex items-center justify-center z-10"></div>
                    <div className="flex w-6/12 items-center h-80 justify-center bg-minhaCor text-white z-10">
                        <div className="pr-10">
                            <h1 className="text-white text-xl font-Julius text-right pb-7">Meu Objetivo</h1>
                            <p className="text-white text-xl font-josefin">
                                Gosto muito de programação, busco aumentar meus conhecimentos na área de tecnologia da informação e programação, estou sempre disposto a me atualizar e aprimorar nessa área, buscando ir para o próximo nível!  
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
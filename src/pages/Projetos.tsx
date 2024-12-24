import { Navbar } from "../components/Navbar";
import { FlipCard } from "../components/FlipCard";
import { BarraInferior } from "../components/BarraInferior";


export function Projetos(){

    return(
       <div className="bg-minhaCor min-h-screen">
            <Navbar page="projetos"/>
            <div className="bg-imageProjetos h-screen flex flex-col justify-between">
                <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex items-center w-full">
                <div className="flex-1 pl-16 w-30">
                    <h1 className="text-emerald-400 text-4xl font-bold pb-8 sm:text-7xl">
                        Conheça meus Projetos
                    </h1>
                    <hr className="border-b-2 border-white w-72"/>
                </div>
            </div>

                </div>
                <BarraInferior pagina="Projetos"/>
            </div>
            <div className="flex">
            <div className="flex">
                <img src="/timaoDireita.png" alt="Imagem Esquerda" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-center h-full flex-col">
                    <h1 className="text-emerald-400 text-2xl font-bold pb-3 sm:text-5xl">
                            Conheça meus projetos!
                    </h1>
                    <p className="text-emerald-800 text-1xl font-bold sm:text-2xl">Passe o cursor por cima (ou clique) no projeto para saber mais</p>
                </div>
            </div>
            <div className="flex">
                <img src="/timaoEsquerda.png" alt="Imagem Direita" />
            </div>
            </div>
            <div className="flex flex-wrap w-full gap-40 justify-center">
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./gplink.png"
                        title="GPLink"
                        subtitle="Projeto TCC"
                        description="Transforme sua experiência gamer! Unifique seus perfils de diferentes plataformas(xbox, steam, ps) exibindo seus jogos e conquistas, encontre novos jogadores e conquiste recompensas pelo seu esforço."
                        github="https://github.com/Lucas-Pontes-Soares/ProjetoTCC"
                        site="https://gplink-aj6y.onrender.com/"
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./arduinoCancela.jpg"
                        title="Cancela Automatica"
                        subtitle="Projeto Arduino"
                        description="Este projeto foi desenvolvido na matéria de Sistemas Embarcados, consiste em uma cancela, controlada por servo motor que pode ser levantada/abaixada por botões e por bluetooth com leds e som para sinalização."
                        github="https://github.com/Lucas-Pontes-Soares/ArduinoCancela"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./LaCafezito3.png"
                        title="La Cafezito"
                        subtitle="Projeto PHP"
                        description="Projeto Interdisciplinar da escola, das matérias de PW, BD, APS. Nosso sistema conta com área do cliente para montar o seu café, visualizar histórico de pedidos, área de admin com kanban dos pedidos, edição dos complementos."
                        github="https://github.com/Lucas-Pontes-Soares/LaCafezito"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./nlwIA.png"
                        title="NLW IA"
                        subtitle="Upload AI"
                        description="Contruindo um sistema que consome API do GPT, para fornecer titulos e descrição de um vídeo do youtube, com base na sua transcição de audio para texto."
                        github="https://github.com/Lucas-Pontes-Soares/NLW-IA"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./ListaCompras.png"
                        title="Lista de Compras"
                        subtitle="Angular"
                        description="Curso Alura: Angular: ciclo de vida. Um projeto com CRUD completo de lista de compras."
                        github="https://github.com/Lucas-Pontes-Soares/ListaCompras"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./memoteca.png"
                        title="Memoteca"
                        subtitle="Angular"
                        description="Cursos Alura: Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD & Angular 14: evoluindo a aplicação. Um projeto com CRUD completo de pensamentos, citações ou músicas."
                        github="https://github.com/Lucas-Pontes-Soares/memoteca"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./AluraBooks.png"
                        title="AluraBooks"
                        subtitle="Angular"
                        description="Curso Alura: Angular: formulários orientados a templates. Um projeto com para preenchimento de formulário com restrições e diretivas, utiliznado a API para trazer dados do endereço com o CEP."
                        github="https://github.com/Lucas-Pontes-Soares/alurabooks"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./nlw-expert.png"
                        title="NLW Expert - ReactJS"
                        subtitle="NOTES"
                        description="Rocketseat NLW: ReactJS: projeto de notas, utilizando vite, typescript, tailwindCSS, SpeechRecognitionAPI. Possui funcionalidades de criar notas, tanto por texto tanto por fala, procurar por nota e excluir."
                        github="https://github.com/Lucas-Pontes-Soares/NLW-Expert"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./newsBlog.png"
                        title="NewsBlog"
                        subtitle="ReactJS"
                        description="Projeto em ReactJS, vite, com tailwindCSS, para um sistema de blogs de artigos, com uma home principal para visualizar todos os artigos, ao passar o cursor por cima, verá a descrição, clique para ler completamente. Criar artigos com determinadas sessões."
                        github="https://github.com/Lucas-Pontes-Soares/NewsBlog"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./Tela do Professor.png"
                        title="CETAF"
                        subtitle="ReactJS & NodeJS"
                        description="Um sistema de gerenciamento de matricula para a matéria de gestão agil de projetos da faculdade. 2 Usuários: Aluno pode ver cursos, e realizar matricula. Professor pode ver extrato dos alunos, e receber email das matriculas."
                        github="https://github.com/Lucas-Pontes-Soares/CETAF"
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./social.png"
                        title="Assistente Social"
                        subtitle="Engenharia de Software"
                        description="Na FATEC Ourinhos eu e minha turma, desenvolvemos um projeto para a assistente social da prefeitura de Canitar, nas matérias de engenharia de software e banco de dados. Criamos toda a ideia do projeto, como funcionaria, fizemos vários diagramas (casos de uso, dicionário de dados, de classes, de atividades) , protótipos e também o banco de dados em SQL."
                        github=""
                        site=""
                        instagram=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./robocode.jpg"
                        title="Ministrar Minicurso"
                        subtitle="Robocode"
                        description="Eu e outros alunos do clube de robótica da FATEC de Ourinhos, juntamente com o professor organizamos um minicurso para o evento de semana de tecnologia. Ministrei para os alunos sobre a plataforma, criamos um robô, mostramos exemplos, aprendemos na prática."
                        github=""
                        site=""
                        instagram="https://www.instagram.com/robocode_fatec/"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./listagempersonagens.png"
                        title="Lista Personagens"
                        subtitle="Flutter"
                        description="Trabalho final para a matéria de programação mobile da faculdade, desenvolvido em flutter no flutlab, com api através do mockapi, para armazenar os personagens. Visualização de personagens, detalhes, adicionar de uma lista."
                        github="https://github.com/Lucas-Pontes-Soares/ListagemPersonagens"
                        site=""
                        instagram=""
                    />
                </div>
            </div>

            <br /><br /><br /><br />
       </div>
    )
}
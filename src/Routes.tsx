import { Routes, Route } from "react-router-dom";

import {SobreMim} from "./pages/SobreMim.tsx";
import {Contato} from "./pages/Contato.tsx";
import { Projetos } from "./pages/Projetos.tsx";
import { Habilidades } from "./pages/Habilidades.tsx";
import { Experiencias } from "./pages/Experiencias.tsx";

export function Rotas() {

   return(
      <Routes>
         <Route path="/" element={<SobreMim />} />
         <Route path="SobreMim" element={<SobreMim />} />
         <Route path="Contato" element={<Contato />} />
         <Route path="Projetos" element={<Projetos />} />
         <Route path="Habilidades" element={<Habilidades />} />
         <Route path="Experiencias" element={<Experiencias />} />
      </Routes>
   )
}

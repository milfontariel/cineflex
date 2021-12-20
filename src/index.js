import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './reset.css';
import './style.css';
import Header from './components/Header';
import Catalogo from "./components/Catalogo/Catalogo";
import Filme from "./components/Datas/Filme";
import Sessao from "./components/Sessao";
import Sucesso from "./components/Sucesso";
import { useState } from "react";

function App(){
  const [idFilme, setIdFilme] = useState(null);
  const [dadosSucesso, setDadosSucesso] = useState({});

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalogo setIdFilme={setIdFilme}/>}></Route>
        <Route path="/filme/:idFilme" element={<Filme />}></Route>
        <Route path="/sessao/:idSessao" element={<Sessao setDadosSucesso={setDadosSucesso}/>}></Route>
        <Route path="/sucesso" element={<Sucesso dadosSucesso={dadosSucesso}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'));
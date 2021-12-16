import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './reset.css';
import './style.css';
import Header from './components/Header';
import Catalogo from "./components/Catalogo/Catalogo";
import Datas from "./components/Datas/Datas";
import { useState } from "react";

function App(){
  const [idFilme, setIdFilme] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalogo setIdFilme={setIdFilme}/>}></Route>
        <Route path="/datas" element={<Datas id={idFilme}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'));
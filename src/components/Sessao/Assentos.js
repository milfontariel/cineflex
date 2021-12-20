import { useState } from "react";
import ContainerAssentos from "./ContainerAssentos";
import Legenda from "./Legenda";
import Dados from "./Dados";
import './style.css';

export default function Assentos({ info, setDadosSucesso }) {
    const [selecionados, setSelecionados] = useState([]);
    const [idSelecionados, setIdSelecionados] = useState([]);
    return (
        <>
            <ContainerAssentos info={info} selecionados={selecionados}
            setSelecionados={setSelecionados}
            idSelecionados={idSelecionados} setIdSelecionados={setIdSelecionados} />
            <Legenda />
            <Dados setDadosSucesso={setDadosSucesso} selecionados={selecionados} idSelecionados={idSelecionados}
            info={info}></Dados>
        </>
    )
}


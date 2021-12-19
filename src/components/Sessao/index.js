import Selecionar from "../Selecionar";
import Rodape from "../Rodape";
import Assentos from "./Assentos";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Sessao() {
    const { idSessao } = useParams();
    const [infoSessao, setInfoSessao] = useState(null);

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const infos = {
                posterURL: resposta.data.movie.posterURL,
                title: resposta.data.movie.title,
                name: resposta.data.name,
                weekday: resposta.data.day.weekday,
                date: resposta.data.day.date,
                seats: resposta.data.seats,
                hasOwn: true
            }
            setInfoSessao(infos);
        })
    }, []);

    if(infoSessao === null){
        return <h1>Carregando</h1>;
      }

    return (
        <>
            <Selecionar texto={`(s) assento(s)`} />
            <Assentos info={infoSessao}></Assentos>
            <Rodape info={infoSessao}></Rodape>
        </>
    )
}
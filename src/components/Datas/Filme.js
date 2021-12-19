import './style.css';
import Selecionar from '../Selecionar';
import Rodape from '../Rodape';
import Data from './Data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function Filme(){
  const [infoDatas, setInfoDatas] = useState(null);
  const { idFilme } = useParams();
  useEffect(() => {
    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
    requisicao.then(resposta => {
      setInfoDatas(resposta.data);
    })
  }, []);
  
  if(infoDatas === null){
    return <h1>Carregando</h1>
  }
  return (
    <div className="datas">
      <Selecionar texto={` horário`} />
      <Data info={infoDatas}></Data>
      <Rodape info={infoDatas}></Rodape>
    </div>
  )
}
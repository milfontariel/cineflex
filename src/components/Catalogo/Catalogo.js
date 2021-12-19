import './style.css';
import Selecionar from '../Selecionar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Catalogo({setIdFilme}){
  const [lista, setLista] = useState(null);

  useEffect(() => {
    const requisicao = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
    requisicao.then(resposta => {
      setLista(resposta.data);
    })
  }, []);

  if(lista === null){
    return <h1>Carregando</h1>;
  }

  return (
    <div className="catalogo">
      <Selecionar texto={` filme`} />
      <ul className="lista-filmes">
        {lista.map((filme) => {
          return (
            <Link to={`/filme/${filme.id}`}>
              <li className="filme" onClick={() => setIdFilme(filme.id)}>
                <img src={filme.posterURL} alt="capa do filme" />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
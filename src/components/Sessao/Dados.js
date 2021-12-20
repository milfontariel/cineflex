import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Dados({ selecionados, idSelecionados, info, setDadosSucesso }) {
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const regex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/;
    let validaNome = false;
    let validaCpf = false;
    let erroNome = '';
    let erroCpf = '';



    if (nome != null) {
        if (!nome.includes(' ') || nome.length < 8) {
            erroNome = 'Digite o nome completo';
            validaNome = false;
        } else {
            erroNome = '';
            validaNome = true;
        }
    }
    if (cpf != null) {
        if (!regex.test(cpf)) {
            erroCpf = 'Digite um CPF válido';
            validaCpf = false;
        } else {
            erroCpf = '';
            validaCpf = true;
        }
    }

    const [btnTexto, setBtnTexto] = useState('Reservar assento(s)');

    console.log(selecionados);

    return (
        <Inputs>
            <Lista>
                <h2>Nome do comprador:</h2>
                <input placeholder="Digite seu nome..."
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}></input>
                <p>{erroNome}</p>
            </Lista>
            <Lista>
                <h2>CPF do comprador:</h2>
                <input placeholder="Digite seu CPF..."
                    onChange={(e) => {
                        setCpf(e.target.value);
                    }}></input>
                <p>{erroCpf}</p>
            </Lista>
            <Link to={`/sucesso`}>
                <Button validaNome={validaNome} validaCpf={validaCpf} btnTexto={btnTexto}
                    className="btn" onClick={() => {
                        if (validaCpf && validaNome && selecionados.length !== 0) {
                            const dados = {
                                ids: idSelecionados,
                                name: nome,
                                cpf: cpf
                            }
                            setDadosSucesso(undefined);
                            const promessa = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', dados);
                            promessa.then(() => {
                                validaCpf = false;
                                validaNome = false;
                                setBtnTexto('Carregando...');
                                const dadinhos = {
                                    title: info.title,
                                    date: info.date,
                                    name: info.name,
                                    seats: selecionados,
                                    nome: nome,
                                    cpf: cpf
                                };
                                console.log(`dados? `, dadinhos);
                                setDadosSucesso(dadinhos);
                            });
                        }
                    }}>
                    {btnTexto}
                </Button>
            </Link>
        </Inputs>
    )
}

const Button = styled.button`
    margin-bottom: 80px;
    cursor: ${props => !(props.validaNome && props.validaCpf) ? 'not-allowed' : 'pointer'};
    opacity: ${props => !(props.validaNome && props.validaCpf) ? '0.6' : '1'};
`

const Inputs = styled.ul`
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 20px auto 60px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    `
const Lista = styled.li`
    margin-bottom: 10px;
    width: 100%;
    &:nth-child(2){
        margin-bottom: 40px;
    }
    & input {
        width: 100%;
        max-width: 500px;
        padding: 10px 15px;
        box-sizing: border-box;
        border-radius: 5px;
        border-style: none;
        border: 1px solid #D5D5D5;
    }
    & p {
        padding: 5px 0 0 5px;
        font-size: 14px;
        color: red;
    }
`

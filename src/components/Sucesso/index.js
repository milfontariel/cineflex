import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso({ dadosSucesso, setDadosSucesso }) {
    console.log(`dadosSucesso? `, dadosSucesso);
    if (dadosSucesso !== undefined) {
        return (
            <Container>
                <Titulo>Pedido feito com sucesso!</Titulo>
                <div>
                    <Lista>
                        <SubTitulo>Filme e sessão</SubTitulo>
                        <li>{dadosSucesso.title}</li>
                        <li>{dadosSucesso.date} <span>{dadosSucesso.name}</span></li>
                    </Lista>
                    <Lista>
                        <SubTitulo>Ingressos</SubTitulo>
                        {dadosSucesso.seats.map((seat) => {
                            return (
                                <li>Assento {seat}</li>
                            )
                        })}
                    </Lista>
                    <Lista>
                        <SubTitulo>Comprador</SubTitulo>
                        <li>Nome: {dadosSucesso.nome}</li>
                        <li>CPF: {dadosSucesso.cpf}</li>
                    </Lista>
                </div>
                <Link to={`/`} onClick={() => setDadosSucesso(undefined)}>
                    <Button className="btn">Voltar pra Home</Button>
                </Link>
            </Container>
        )
    } else {
        return (
            <h1>Carregando...</h1>
        )
    }
}

const Button = styled.button`
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
`

const Container = styled.div`
    padding: 0 20px;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: green;
    text-align: center;
    max-width: 200px;
    margin: 30px auto 40px auto;
`

const SubTitulo = styled.p`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Lista = styled.ul`
    font-size: 24px;
    margin-bottom: 40px;
`
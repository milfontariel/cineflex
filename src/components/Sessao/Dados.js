import styled from "styled-components"

export default function Dados() {
    return (
        <Inputs>
            <Lista>
                <h2>Nome do comprador:</h2>
                <input placeholder="Digite seu nome..."></input>
            </Lista>
            <Lista>
                <h2>CPF do comprador:</h2>
                <input placeholder="Digite seu CPF..."></input>
            </Lista>
            <Button className="btn">Reservar assento(s)</Button>
        </Inputs>
    )
}

const Button = styled.button`
    margin-bottom: 80px;
    
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
`

import styled from "styled-components";

export default function Legenda() {
    return (
        <Legendas>
            <li>
                <div className="selecionado"></div>
                <h2>Selecionado</h2>
            </li>
            <li>
                <div className="disponivel"></div>
                <h2>Disponível</h2>
            </li>
            <li>
                <div className="indisponivel"></div>
                <h2>Indisponível</h2>
            </li>
        </Legendas>
    )
}

const Legendas = styled.ul`
    margin: 20px auto 0 auto;
    display: flex;
    gap: 20px;
    justify-content: center;
    & li div {
        width: 24px;
        height: 24px;
        border-radius: 20px;
        margin: 0 auto 10px auto;
    }
    & li h2 {
        font-size: 14px;
    }
`
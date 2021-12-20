import selecionarAssento from "./selecionarAssento";
import styled from "styled-components";

export default function ContainerAssentos({ info, selecionados, setSelecionados, idSelecionados, setIdSelecionados }) {
    return (
        <Container>
            {info.seats.map((assento) => {
                return (
                    <Assento
                        className={assento.isAvailable
                            ? 'disponivel' : 'indisponivel'}
                        onClick={(e) => selecionarAssento(e, assento, selecionados, setSelecionados, idSelecionados, setIdSelecionados)}
                    >
                        {assento.name}
                    </Assento>
                )
            })}
        </Container>
    );
}

const Assento = styled.li`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    box-sizing: border-box;
    font-size: 11px;
`

const largura = '500px';

const Container = styled.ul`
    width: 100%;
    height: 44vw;
    max-width: ${largura};
    max-height: calc(${largura} * 0.39532);
    display: grid; 
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 5px;
    padding: 0 5vw;
    margin: 40px auto 0 auto;
    justify-items: center;
    box-sizing: border-box;
`
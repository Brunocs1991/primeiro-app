import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`
export const Head = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;
`
export const Titulo = styled.a`
        font-size: 35px;
        color: #00ff00;
`

export const BemVindo = styled.h1`
    font-size: ${props => `${props.tamanho}px`};
    color: ${props => `#${props.cor}`};

`


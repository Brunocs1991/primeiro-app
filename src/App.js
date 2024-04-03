import {BemVindo, Container, Head, Titulo} from "./app-styles";

export default function App() {
    return (

        <Container>
            <Head>
                <Titulo>Primeiro App</Titulo>
            </Head>
            <BemVindo cor={"00FF00"} tamanho={"15"}>Bem vindo ao sistema </BemVindo>
        </Container>

    )
}

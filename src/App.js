import {useState} from "react";

function App() {

    const [nome, setNome] = useState('Sujeito Programador')

    function handlerCheckName(nome){
        setNome(nome)
    }

    return (
        <div>
            <h1>Component App</h1>
            <br/>
            <h2>Olá: {nome}</h2>
            <button onClick={() => handlerCheckName("Bruno Costa")}>
                Mudar Nome
            </button>
        </div>
    );
}

export default App;

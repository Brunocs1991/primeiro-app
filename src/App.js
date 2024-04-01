import {useState} from "react";

function App() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    const [user, setUser] = useState({name: "", email: "", age: ""});

    function handlerRegister(e) {
        e.preventDefault();
        setUser({name: nome, email: email, age: idade});
    }

    return (
        <div>
            <h2>Cadrastrando Usuário</h2>
            <form onSubmit={handlerRegister}>
                <label> Nome: <br/> </label>
                <input
                    type="text"
                    name="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}/>
                <br/>
                <label> E-mail: <br/></label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <label> Idade: <br/>
                </label>
                <input
                    type="number"
                    name="age"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                /><br/>
                <button type={"submit"}>Registrar</button>
            </form>

            <br/>
            <br/>

            <div>
                <span>Bem vindo: {user.name}</span><br/>
                <span>idade: {user.age}</span><br/>
                <span>e-mail: {user.email}</span><br/>
            </div>
        </div>
    );
}

export default App;

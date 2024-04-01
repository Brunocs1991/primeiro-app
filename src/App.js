import {useEffect, useState} from "react";

function App() {

    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Estudar React"
    ]);
    const [tarefa, setTarefa] = useState("");

        useEffect(() => {
        const tarefas = localStorage.getItem("@tarefa")
        if (tarefas) {
            setTarefas(JSON.parse(tarefas))
        }

    }, []);

    useEffect(() => {
        localStorage.setItem("@tarefa", JSON.stringify(tarefas))
    }, [tarefas]);


    function handlerRegister(e) {
        e.preventDefault();
        setTarefas([...tarefas, tarefa])
        setTarefa("")

    }

    return (
        <div>
            <h2>Cadrastrando Usuário</h2>
            <form onSubmit={handlerRegister}>
                <label> Nome da tarefa: <br/> </label>
                <input
                    placeholder={"Digite o nome da terefa"}
                    type="text"
                    name="name"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}/>
                <br/>

                <button type={"submit"}>Registrar</button>
            </form>

            <br/>
            <br/>

            <div>
                <ul>
                    {tarefas.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

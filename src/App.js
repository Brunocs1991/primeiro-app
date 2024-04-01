import Nome from "./components/Nome";

function App() {
    return (
        <div>
            <h1>Component App</h1>
            <Nome nome={"Bruno"} idade={10}/>
            <br/>
            <Nome nome={"Joaquim"} idade={20}/>
        </div>
    );
}

export default App;

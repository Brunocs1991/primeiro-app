import {Link} from "react-router-dom";

export default function Error(){
    return(
        <div>
            <h1>Hum, parece que essa página não existe</h1>
            <br/>
            <span>Você pode estar procurando: </span> <br/>
            <Link to={"/"}>Home</Link> <br/>
            <Link to={"/Sobre"}>Sobre</Link> <br/>
            <Link to={"/contato"}>Contato</Link> <br/>
        </div>
    )
}

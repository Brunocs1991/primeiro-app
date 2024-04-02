import {Link} from "react-router-dom";

export default function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <span>Email: teste@teste.com</span>
            <br/>
            <Link to={"/"}>Home</Link> <br/>
            <Link to={"/sobre"}>Sobre</Link>
        </div>
    )
}

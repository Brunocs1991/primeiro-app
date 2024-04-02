import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

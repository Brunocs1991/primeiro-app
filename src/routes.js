import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Error from "./pages/Error";
import Produto from "./pages/Produto";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route exact path="/contato" element={<Contato/>}/>
                <Route path="/produto/:id" element={<Produto/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

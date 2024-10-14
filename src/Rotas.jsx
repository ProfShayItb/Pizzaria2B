import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Header from "./components/Header/header";


export default function Rotas(){
    return(
        <BrowserRouter>
        <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cardapio" element={<Catalogo/>}/>
            </Routes>

        </BrowserRouter>
    )
}
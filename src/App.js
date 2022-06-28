import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp  from "./component/navbarcomp";
import Pelanggan from "./component/Pelanggan";
import Transaksi from "./component/Transaksi";
import Formtransaksi from "./component/formtransaksi";
import FooterCom from "./component/footer";
import Login from "./component/Login";
function App() {
    return (
        <BrowserRouter>
            <Navbarcomp/>
            <Routes>
                <Route path="/" element={<Pelanggan/>}/>
                <Route path="pelanggan/" element={<Pelanggan/>}/>
                <Route path="transaksi/" element={<Transaksi/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="formtransaksi/" element={<Formtransaksi/>}/>
            </Routes>
            <FooterCom/>
        </BrowserRouter>
    );
}

export default App;

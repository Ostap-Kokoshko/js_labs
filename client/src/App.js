import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog/Catalog";
import ItemPage from "./Pages/ItemPage/ItemPage";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Cart/Checkout/Checkout";
import Success from "./Pages/Cart/Success/Success";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Routes style={{flex: 1}}>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/cart/checkout" element={<Checkout />} />
                <Route path="/cart/success" element={<Success />} />
                <Route path="/itempage/:id" element={<ItemPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

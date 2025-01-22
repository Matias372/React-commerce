import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; // Nuevo componente para el carrito
import CartProvider from './context/CartContext';

function App() {
    return (
        <CartProvider> {/* Contexto del carrito */}
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<h2>Página no encontrada</h2>} /> {/* Ruta para 404 */}
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

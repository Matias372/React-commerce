import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito
    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            ));
        } else {
            // Si el producto no está en el carrito, lo agregamos
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Función para eliminar un producto del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };
    
    // Función para calcular la cantidad total de productos únicos
    const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    // Valores proporcionados por el contexto
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

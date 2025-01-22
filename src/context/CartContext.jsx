import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto al carrito o actualizar cantidad si ya existe
    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Eliminar un producto del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    // Vaciar todo el carrito
    const clearCart = () => setCart([]);

    // Cantidad total de productos en el carrito
    const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    // Calcular el precio total del carrito
    const totalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalItems, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

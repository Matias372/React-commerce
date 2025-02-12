import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
};

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (quantity > item.stock) {
            alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
            return;
        }

        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => setCart([]);

    const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalItems, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

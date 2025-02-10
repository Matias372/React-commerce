import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;

        if (newQuantity > item.stock) {
            alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
            return;
        }

        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
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

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import styles from "./Checkout.module.css";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({ name: "", lastname: "", phone: "", address: "", email: "" });
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!buyer.name || !buyer.lastname || !buyer.phone || !buyer.address || !buyer.email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const order = {
            buyer,
            items: cart.map(item => ({ id: item.id, title: item.title, quantity: item.quantity, price: item.price })),
            total: totalPrice(),
            date: serverTimestamp()
        };

        try {
            // Agregar la orden a Firestore
            const orderRef = await addDoc(collection(db, "Orders"), order);
            setOrderId(orderRef.id);

            // Reduce stock
            for (const item of cart) {
                const productRef = doc(db, "Items", item.id);
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    const newStock = productSnap.data().stock - item.quantity;
                    if (newStock >= 0) {
                        await updateDoc(productRef, { stock: newStock });
                    } else {
                        console.warn(`Stock insuficiente para ${item.title}`);
                    }
                }
            }

            clearCart(); // Vacia el carrito después de la compra
        } catch (error) {
            console.error("Error al procesar la orden:", error);
        }
    };

    return (
        <div className={styles.checkoutContainer}>
            <h2>Finalizar Compra</h2>
            {orderId ? (
                <div className={styles.orderConfirmation}>
                    <h3>¡Gracias por tu compra!</h3>
                    <p>Tu Nro de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                    <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
                    <input type="text" name="lastname" placeholder="Apellido" onChange={handleInputChange} required />
                    <input type="tel" name="phone" placeholder="Teléfono" onChange={handleInputChange} required />
                    <input type="text" name="address" placeholder="Dirección" onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                    <button type="submit">Confirmar Compra</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;

import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
    const { cart, totalPrice, removeItem, clearCart } = useCart();

    return (
        <div className={styles.container}>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div className="text-center">
                    <p>Tu carrito está vacío.</p>
                    <Link to="/" className="btn btn-primary">Volver al catálogo</Link>
                </div>
            ) : (
                <>
                    <ul className={styles["list-group"]}>
                        {cart.map((item) => (
                            <li key={item.id} className={styles["list-group-item"]}>
                                <img className={styles.image} src={item.urlimage} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                <div className={styles["product-info"]}>
                                    <span className={styles["product-name"]}>{item.title}</span> 
                                    <span className={styles["product-details"]}>- ${item.price} x {item.quantity}</span>
                                </div>
                                <button className={styles["btn-danger"]} onClick={() => removeItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-end mt-3">Total: ${totalPrice()}</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <button className={styles["btn-warning"]} onClick={clearCart}>Vaciar Carrito</button>
                        <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

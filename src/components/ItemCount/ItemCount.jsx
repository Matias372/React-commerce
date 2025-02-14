import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

const ItemCount = ({ initial, stock, item }) => {
    const { addItem, removeItem } = useCart();
    const [count, setCount] = useState(initial);

    // ===== SE ACTUALIZA EL CARRITO AL CAMBIAR LA CANTIDAD =====
    useEffect(() => {
        if (count > 0) {
            addItem(item, count);
        }
    }, [count]);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleRemove = () => {
        removeItem(item.id); 
    };

    return (
        <div className="item-count">
            <button onClick={handleDecrement} disabled={count <= 1}>-</button>
            <span className={styles["item-count-span"]}>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <br />
            <button onClick={handleRemove} className="btn-danger">Eliminar</button> {/* ===== BOTÓN PARA ELIMINAR PRODUCTO ===== */}
        </div>
    );
};

export default ItemCount;

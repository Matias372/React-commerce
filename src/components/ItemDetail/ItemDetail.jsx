import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item }) => {
    const { cart, addItem } = useCart(); // ===== CART Y ADDITEM SE UTILIZAN PARA MANEJAR EL CARRITO =====

    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);  // ===== AGREGAR EL PRODUCTO CON LA CANTIDAD AL CARRITO =====
    };

    return (
        <div className={styles["item-detail"]}>
            <div className={styles["item-image"]}>
                <img className={styles.image} src={item.urlimage} alt={item.title} />
            </div>
            <div className={styles["item-info"]}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p><strong>Precio:</strong> ${item.price}</p>
                <p><strong>Categoría:</strong> {item.category}</p>

                {productInCart ? (
                    <>
                        <ItemCount
                            initial={productInCart.quantity}
                            stock={item.stock}
                            item={item}
                            onSetQuantity={handleAddToCart}  // ===== ACTUALIZA EL CARRITO CON LA NUEVA CANTIDAD =====
                        />
                    </>
                ) : (
                    <div className={styles["detail-buttons"]}>
                        <button className={styles["detail-button"]} onClick={() => handleAddToCart(1)}>
                            Agregar al carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

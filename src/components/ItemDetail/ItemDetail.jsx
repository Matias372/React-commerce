import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item }) => {
    const { cart, addItem, removeItem } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [showCounter, setShowCounter] = useState(false); // Controla si se muestra el contador

    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);
        setShowCounter(true); 
    };

    const handleRemoveFromCart = () => {
        removeItem(item.id);
        setShowCounter(false); 
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

                {/* si producto en carrito entonces muestra contador; de lo contrario no.*/}
                {showCounter || productInCart ? (
                    <ItemCount
                        initial={productInCart ? productInCart.quantity : 1}
                        stock={10}
                        onAdd={handleAddToCart}
                        onRemove={handleRemoveFromCart}
                    />
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

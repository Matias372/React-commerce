import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ item }) => {
    const { cart, addItem, removeItem } = useCart();
    const navigate = useNavigate();

    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleSetQuantity = (quantity) => {
        addItem(item, quantity); // 🔹 Directamente ajusta la cantidad
    };

    const handleRemoveFromCart = () => {
        removeItem(item.id);
    };

    const handleViewDetails = () => {
        navigate(`/item/${item.id}`);
    };

    return (
        <div className={styles.item}>
            <img className={styles.image} src={item.urlimage} alt={item.title} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>Precio: ${item.price}</p>
            {productInCart ? (
                <ItemCount
                    initial={productInCart.quantity}
                    stock={item.stock}
                    onSetQuantity={handleSetQuantity}
                    onRemove={handleRemoveFromCart}
                />
            ) : (
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleViewDetails}>Ver detalles</button>
                    <button className={styles.button} onClick={() => handleSetQuantity(1)}>Agregar</button>
                </div>
            )}
        </div>
    );
};

export default Item;

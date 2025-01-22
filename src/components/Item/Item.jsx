import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import styles from "./Item.module.css"; // Importamos los estilos

const Item = ({ item }) => {
    const { cart, addItem, removeItem } = useCart();
    const navigate = useNavigate();

    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);
    };

    const handleRemoveFromCart = () => {
        removeItem(item.id);
    };

    const handleViewDetails = () => {
        navigate(`/item/${item.id}`);
    };

    return (
        <div className={styles.item}>
            <img className={styles.image} src={item.pictureUrl} alt={item.title} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>Precio: ${item.price}</p>
            {productInCart ? (
                <ItemCount
                    initial={productInCart.quantity}
                    stock={10}
                    onAdd={handleAddToCart}
                    onRemove={handleRemoveFromCart}
                />
            ) : (
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleViewDetails}>Ver detalles</button>
                    <button className={styles.button} onClick={() => handleAddToCart(1)}>Agregar al carrito</button>
                </div>
            )}
        </div>
    );
};

export default Item;

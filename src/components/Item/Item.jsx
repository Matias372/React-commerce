import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ item }) => {
    const { cart, addItem } = useCart();
    const navigate = useNavigate();

    //====== VERIFICA SI EL PRODUCTO YA ESTÁ EN EL CARRITO ======
    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleViewDetails = () => {
        navigate(`/item/${item.id}`);
    };

    const handleAddToCart = () => {
        addItem(item, 1); 
    };

    return (
        <div className={styles.item}>
            <img className={styles.image} src={item.urlimage} alt={item.title} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>Precio: ${item.price}</p>
            {productInCart ? (
                //====== MUESTRA EL CONTADOR SI EL PRODUCTO ESTÁ EN EL CARRITO ======
                <ItemCount
                    initial={productInCart.quantity}
                    stock={item.stock}
                    item={item} 
                />
            ) : (
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleViewDetails}>Ver detalles</button>
                    <button className={styles.button} onClick={handleAddToCart}>Agregar</button>
                </div>
            )}
        </div>
    );
};

export default Item;

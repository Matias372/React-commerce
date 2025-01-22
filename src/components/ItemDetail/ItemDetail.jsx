import { useCart } from "../../context/CartContext"; // Importamos el contexto del carrito
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item }) => {
    const { addItem } = useCart(); // Usamos el contexto del carrito

    const handleAddToCart = () => {
        addItem(item, 1); // Agregamos el producto con cantidad 1
        alert(`${item.title} se agregó al carrito.`);
    };

    return (
        <div className={styles["item-detail"]}>
            <div className={styles["item-image"]}>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className={styles["item-info"]}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p><strong>Precio:</strong> ${item.price}</p>
                <p><strong>Categoría:</strong> {item.category}</p>
                <div className={styles["detail-buttons"]}>
                    <button className={styles["detail-button"]} onClick={handleAddToCart}>  {/* FALTA AGREGAR CONTADOR...*/}
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;

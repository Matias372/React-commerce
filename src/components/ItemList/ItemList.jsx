import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
    return (
        <div className={styles["item-list"]}>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;

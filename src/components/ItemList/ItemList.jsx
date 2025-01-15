import Item from "../Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemList = ({ items }) => {
    return (
        <div className="item-list row row-cols-2 row-cols-md-3">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;

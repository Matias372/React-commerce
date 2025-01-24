import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd, onRemove }) => {
    const [count, setCount] = useState(initial);

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

    return (
        <div className="item-count">
            <button onClick={handleDecrement} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button onClick={() => onAdd(count)}>Agregar</button> {/* Ahora establece el valor en lugar de sumarlo */}
            <button onClick={onRemove}>Eliminar</button>
        </div>
    );
};

export default ItemCount;

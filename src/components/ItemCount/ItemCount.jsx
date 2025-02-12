import { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onSetQuantity, onRemove }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        onSetQuantity(count);
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

    return (
        <div className="item-count">
            <button onClick={handleDecrement} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button onClick={onRemove} className="btn-danger">Eliminar</button>
        </div>
    );
};

export default ItemCount;

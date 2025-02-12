import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const cartContext = useCart();

    if (!cartContext) {
        return null;
    }

    const { totalItems } = cartContext;

    return (
        <div className="d-flex flex-column align-items-center position-relative">
            {totalItems() > 0 && (
                <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
                    {totalItems()}
                </span>
            )}
            <FaShoppingCart size={24} />
        </div>
    );
};

export default CartWidget;

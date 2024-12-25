import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex flex-column align-items-center position-relative">
      <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">3</span>
      <FaShoppingCart size={24} />
    </div>
  );
};

export default CartWidget;
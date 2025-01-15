import { useCart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Item = ({ item }) => {
    const { cart, addItem, removeItem } = useCart();
    const navigate = useNavigate(); // Inicializar useNavigate

    const productInCart = cart.find(cartItem => cartItem.id === item.id);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);
    };

    const handleRemoveFromCart = () => {
        removeItem(item.id);
    };

    const handleViewDetails = () => {
        navigate(`/item/${item.id}`); // Redirigir al detalle del producto
    };

    return (
        <div className="item">
            <img
                className="img-fluid"
                style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }}
                src={item.pictureUrl}
                alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            {productInCart ? (
                <ItemCount
                    initial={productInCart.quantity}
                    stock={10} // Cambiar por el stock real si está disponible
                    onAdd={handleAddToCart}
                    onRemove={handleRemoveFromCart}
                />
            ) : (
                <>
                    <button onClick={handleViewDetails}>Ver detalles</button> {/* Actualizado */}
                    <button onClick={() => handleAddToCart(1)}>Agregar al carrito</button>
                </>
            )}
        </div>
    );
};

export default Item;

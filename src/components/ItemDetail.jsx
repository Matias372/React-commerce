const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <img src={item.pictureUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;

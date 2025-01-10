const Item = ({ item }) => {
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
            <button>Ver detalles</button>
        </div>
    );
};

export default Item;

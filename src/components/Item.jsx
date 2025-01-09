const Item = ({ item }) => {
    return (
        <div className="item">
            <img
                className="img-fluid"
                style={{ width: "80%" }}
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

import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

// Simulación de datos (mock)
const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "Espada",
                description: "Espada forjada en fuego de dragón.",
                price: 150,
                pictureUrl: "/images/espada.png",
            });
        }, 2000); // Simula retraso de 2 segundos
    });
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Efecto para cargar el producto al montar el componente
    useEffect(() => {
        getItem(1).then((data) => {
            // Simula cargar un producto con ID 1
            setItem(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Detalle del Producto</h2>
            {loading ? (
                <p className="text-center">Cargando detalles...</p>
            ) : (
                <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;

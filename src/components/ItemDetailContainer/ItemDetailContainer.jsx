import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importar useParams
import ItemDetail from "../ItemDetail/ItemDetail";

// Simulación de datos (mock)
const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Espada Católicos",
                    description: "Espada forjada en fuego de dragón.",
                    price: 150,
                    pictureUrl:
                        "../../src/assets/espada-de-los-reyes-catolicos.png",
                },
                {
                    id: 2,
                    title: "Escudo",
                    description: "Escudo resistente al fuego.",
                    price: 100,
                    pictureUrl: "../../src/assets/escudo-vikingo.png",
                },
                {
                    id: 3,
                    title: "Poción",
                    description: "Poción de curación mágica.",
                    price: 50,
                    pictureUrl: "../../src/assets/gatorade-red.png",
                },
            ]);
        }, 2000); // Simula retraso de 2 segundos
    });
};

const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtener el id desde la URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Efecto para cargar el producto al montar el componente
    useEffect(() => {
        getItems().then((items) => {
            const selectedItem = items.find(item => item.id === parseInt(id)); // Buscar el producto por id
            setItem(selectedItem); // Cargar el producto con el id correspondiente
            setLoading(false);
        });
    }, [id]); // Recargar cuando el id cambie

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

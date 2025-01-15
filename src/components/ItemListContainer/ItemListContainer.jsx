import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap

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
                        "./src/assets/espada-de-los-reyes-catolicos.png",
                },
                {
                    id: 2,
                    title: "Escudo",
                    description: "Escudo resistente al fuego.",
                    price: 100,
                    pictureUrl: "./src/assets/escudo-vikingo.png",
                },
                {
                    id: 3,
                    title: "Poción",
                    description: "Poción de curación mágica.",
                    price: 50,
                    pictureUrl: "./src/assets/gatorade-red.png",
                },
            ]);
        }, 2000); // Simula retraso de 2 segundos
    });
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Efecto para cargar los productos al montar el componente
    useEffect(() => {
        getItems().then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Listado de productos</h2>
            {loading ? (
                <p className="text-center">Cargando productos...</p>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;

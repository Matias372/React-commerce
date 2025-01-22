import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importamos useParams para obtener la categoría desde la URL
import ItemList from "../ItemList/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";

// Simulación de datos (mock)
const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Espada Católicos",
                    category: "Armas",
                    description: "Una de las características más destacadas de esta espada es la famosa frase Tanto monta - monta tanto, grabada en la guarda. Este detalle histórico le confiere un valor añadido y la convierte en una auténtica pieza de colección. Además, la Espada de los Reyes Católicos está disponible en varios tamaños para adaptarse a tus preferencias y necesidades. Puedes elegir entre el tamaño Cadete de 76 cms, el tamaño Natural de 103 cms o el tamaño Bárbara de 125 cms. Sea cual sea tu elección, te aseguramos que estarás adquiriendo una espada de calidad y belleza incomparables. Esta espada ha sido fabricada en Toledo, España, reconocida mundialmente por su tradición en la producción de armas y objetos de arte. Su lugar de fabricación es garantía de autenticidad y excelencia en cada detalle.",
                    price: 70.23,
                    pictureUrl:
                        "/assets/espada-de-los-reyes-catolicos.png",
                },
                {
                    id: 2,
                    title: "Escudo",
                    category: "Armaduras",
                    description: "Escudo resistente al fuego.",
                    price: 89.82,
                    pictureUrl: "/assets/escudo-vikingo.png",
                },
                {
                    id: 3,
                    title: "Poción",
                    category: "Consumibles",
                    description: "Poción de curación mágica.",
                    price: 5,
                    pictureUrl: "/assets/Gatorade-red.png",
                },
                {
                    id: 4,
                    title: "Espada siglo XVII",
                    category: "Armas",
                    description: "Esta espada, con unas medidas de 106 x 20 x 13 cm, te transportará directamente a la época medieval, donde los caballeros y las batallas eran protagonistas.Con un peso de 500 gr, esta espada es perfecta tanto para coleccionistas como para recreacionistas. Su material de fabricación, el zamak, garantiza su durabilidad y resistencia, mientras que su lugar de fabricación, Italia, asegura su calidad y autenticidad. Su ancho de 20 cms y su largo de 106 cms la convierten en una pieza imponente y llamativa, ideal para exhibir en tu hogar o en tu colección. Recuerda que esta espada es exclusivamente para uso ornamental o decorativo, por lo que no está diseñada para ser utilizada como arma.",
                    price: 44,
                    pictureUrl: "/assets/Espada-siglo-xvii.png",
                },
                {
                    id: 5,
                    title: "Lórica segmentata",
                    category: "Armaduras",
                    description: "El nombre Lórica segmentata proviene del latín y hace referencia a la división en placas metálicas que conforman esta impresionante armadura. Cada segmento ha sido cuidadosamente diseñado para brindar una protección incomparable sin comprometer la movilidad del portador. Con un grosor de 1,2 mm (18ga) y fabricada en acero resistente, esta lórica segmentata es capaz de soportar los embates más duros de la batalla. Su peso de 11-12 kg garantiza una experiencia cómoda y segura, permitiendo al guerrero concentrarse únicamente en la victoria. La lórica segmentata de Battle Merchant es la elección preferida de expertos en recreación histórica, coleccionistas y entusiastas de la era romana. Su nivel de detalle y acabado impecable la hacen perfecta tanto para su exhibición en un museo como para ser lucida en eventos temáticos y festivales medievales.",
                    price: 30,
                    pictureUrl: "/assets/lorica-segmentata.png",
                },
                {
                    id: 6,
                    title: "Tienda Saxon",
                    category: "Consumibles",
                    description: "Nuestra tienda Saxon está cuidadosamente cosida a mano y fabricada con lona gruesa de algodón de alta calidad. Con un gramaje de 425 gr./m2, te aseguramos una durabilidad excepcional y resistencia a las condiciones climáticas más adversas. La tienda Saxon es impermeable, por lo que podrás disfrutar de tus actividades al aire libre sin preocuparte por la lluvia o la humedad. Además, está tratada contra el moho, garantizando así su buen estado y una fácil limpieza. Para tu comodidad, esta tienda incluye todos los accesorios necesarios, como estacas y tensores. Con ellos, podrás asegurar y fijar la tienda de manera rápida y sencilla, sin perder tiempo valioso en su montaje. Las dimensiones de esta tienda son las siguientes: altura de 2,5 mts., ancho de 7 mts. y largo de 5 mts. Esto te brinda un amplio espacio para adaptarla a tus necesidades y crear un ambiente medieval auténtico, donde podrás recibir a tus invitados, armar un campamento o exhibir tus productos.",
                    price: 801,
                    pictureUrl: "/assets/tienda-saxon.png",
                }
            ]);
        }, 2000); // Simula retraso de 2 segundos
    });
};

const ItemListContainer = () => {
    const { id } = useParams(); // Obtenemos la categoría desde la URL
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItems().then((data) => {
            // Filtramos los productos si hay una categoría seleccionada
            const filteredItems = id 
                ?data.filter(item => item.category.toLowerCase() === id.toLowerCase()) 
                : data;
            setItems(filteredItems);
            setLoading(false);
        });
    }, [id]); // Se ejecuta cada vez que cambia la categoría

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                {id ? `Categoría: ${id}` : "Listado de productos"}
            </h2>
            {loading ? (
                <p className="text-center">Cargando productos...</p>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;

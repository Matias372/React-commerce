import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

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
                    title: "Armadura segmentata",
                    category: "Armaduras",
                    description: "El nombre Lórica segmentata proviene del latín y hace referencia a la división en placas metálicas que conforman esta impresionante armadura. Cada segmento ha sido cuidadosamente diseñado para brindar una protección incomparable sin comprometer la movilidad del portador. Con un grosor de 1,2 mm (18ga) y fabricada en acero resistente, esta lórica segmentata es capaz de soportar los embates más duros de la batalla. Su peso de 11-12 kg garantiza una experiencia cómoda y segura, permitiendo al guerrero concentrarse únicamente en la victoria. La lórica segmentata de Battle Merchant es la elección preferida de expertos en recreación histórica, coleccionistas y entusiastas de la era romana. Su nivel de detalle y acabado impecable la hacen perfecta tanto para su exhibición en un museo como para ser lucida en eventos temáticos y festivales medievales.",
                    price: 30,
                    pictureUrl: "/assets/lorica-segmentata.png",
                }
            ]);
        }, 2000); // Simula retraso de 2 segundos
    });
};

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItems().then((items) => {
            const selectedItem = items.find((item) => item.id === parseInt(id));
            setItem(selectedItem);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className={styles["item-detail-container"]}>
            {loading ? <p className={styles["loading"]}>Cargando detalles...</p> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // ===== IMPORTAMOS FUNCIONES NECESARIAS DE FIREBASE =====
import { db } from "../../firebaseConfig"; // ===== IMPORTAMOS DATOS DE DATABASE DE FIRESTORE =====
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            try {
                const docRef = doc(db, "Items", id); // ===== REFERENCIA AL DOCUMENTO EN FIRESTORE =====
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el producto.");
                    setItem(null);
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div className={styles["item-detail-container"]}>
            {loading ? <p className={styles["loading"]}>Cargando detalles...</p> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;

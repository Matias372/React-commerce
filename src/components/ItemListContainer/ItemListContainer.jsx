import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebaseConfig";  
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ===== SE OBTIENEN LOS PRODUCTOS Y SE FILTRAN SEGÚN LA CATEGORÍA =====
    getProducts().then((data) => {
      const filteredItems = id
        ? data.filter(item => item.category.toLowerCase() === id.toLowerCase())
        : data;
      setItems(filteredItems);
      setLoading(false);
    });
  }, [id]); // ===== EFECTO QUE SE EJECUTA CUANDO CAMBIA LA CATEGORÍA =====

  return (
    <div className={styles["item-list-container"]}>
      <h2>{id ? `Categoría: ${id}` : "Listado de productos"}</h2>
      {loading ? (
        <p className={styles["loading"]}>Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;

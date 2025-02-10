import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDFODMW_vaH4j_Niq0BjMs5ZQ_SZzJz56A",
  authDomain: "my-1shop.firebaseapp.com",
  projectId: "my-1shop",
  storageBucket: "my-1shop.appspot.com",
  messagingSenderId: "759436952969",
  appId: "1:759436952969:web:f5fbe0422fef44b0eb0d58"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Función para obtener productos desde Firestore
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Items")); 
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

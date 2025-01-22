import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar} w-100 px-3`}>
            <div className="container-fluid">
                <Link className={`navbar-brand fs-1 ${styles["navbar-brand"]}`} to="/">
                    La Cueva
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end fw-bold" id="navbarNav">
                    <ul className="navbar-nav me-4">
                        <li className="nav-item">
                            <Link className={`nav-link ${styles["nav-link"]}`} to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles["nav-link"]}`} to="/category/Armas">Armas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles["nav-link"]}`} to="/category/Armaduras">Armaduras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles["nav-link"]}`} to="/category/Consumibles">Consumibles</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/cart">
                    <CartWidget className={styles["cart-icon"]} />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

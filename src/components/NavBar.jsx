import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top w-100 px-3">
            <div className="container-fluid">
                <a className="navbar-brand fs-1" href="#">
                    La Cueva
                </a>
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
                <div
                    className="collapse navbar-collapse justify-content-end fw-bold"
                    id="navbarNav"
                >
                    <ul className="navbar-nav me-4">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Armas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Armaduras
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Herramientas
                            </a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;

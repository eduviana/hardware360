import { Link } from "@remix-run/react";
import IconoCarrito from "./iconos/iconoCarrito";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand me-5 fs-3" to="/">
            HARDWARE 360
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto fs-6 font-weight-500 gap-4 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="#"
                >
                  Categorías
                </Link>
                <ul className="dropdown-menu">
                  <li className="btn-group dropend">
                    <Link className="dropdown-item" to="#">
                      Componentes de Pc
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Equipos armados
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/notebooks">
                      Notebooks
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Periféricos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monitores
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Computadoras
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Almacenamiento portátil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Soportes
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/pcsEscritorio"
                >
                  PCs de Escritorio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/notebooks">
                  Notebooks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/placasDeVideo"
                >
                  Placas de Video
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Monitores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Procesadores
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                  ¡Imperdibles!
                </a>
              </li>
            </ul>

            <Link to="carrito">
              <IconoCarrito />
            </Link>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Encontrá lo que querés"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
         
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

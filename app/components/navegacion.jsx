import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
    
  const location = useLocation();

  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/equipos/pcsEscritorio"
        className={
          location.pathname === "/equipos/pcsEscritorio" ? "active" : ""
        }
      >
        PCs Escritorio
      </Link>
      <Link
        to="/equipos/notebooks"
        className={location.pathname === "/equipos/notebook" ? "active" : ""}
      >
        Notebooks
      </Link>
    </nav>
  );
};

export default Navegacion;

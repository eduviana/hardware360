import { Link } from "@remix-run/react";
import IconoFlechaIzquierda from "~/components/iconos/iconoFlechaIzquierda";

const Volver = () => {
  return (
    <div className="d-flex align-items-center position-absolute start-25">
        <IconoFlechaIzquierda />
        <Link className="text-dark text-decoration-none fs-5" to={-1}>
          {" "}
          Volver
        </Link>
      </div>
  )
}

export default Volver
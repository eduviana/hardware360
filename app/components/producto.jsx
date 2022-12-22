import { Link } from "@remix-run/react";
import { calcularDescuentoProducto } from "~/helpers/calcularDescuento";
import { comprobarCantidadImagenes } from "~/helpers/comprobarCantidadImagenes";

const Producto = ({ producto, direccion }) => {
  const { marca, modelo, descripcion, precio, oferta, descuento, imagen, url } =
    producto;

  return (
    <div className="col my-3">
      <Link className="text-decoration-none" to={`/${direccion}/${url}`}>
        <div className="card h-100 overflow-hidden" role="button">
          <img
            className="py-2 px-4 notebook-shadow product-height hover-effect position-relative"
            src={comprobarCantidadImagenes(imagen)}
            alt={`Imagen producto ${marca}`}
          ></img>
          {oferta && (
            <span className="badge text-bg-success fs-6 position-absolute top-0 mt-2 ms-2">
              {descuento}% OFF
            </span>
          )}

          <div className="card-body text-capitalize">
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-text fs-4 text-dark fw-semibold mb-2">
                {calcularDescuentoProducto(descuento, precio)}
              </p>
              {oferta && (
                <del className="fw-light text-primary fs-6 fw-normal text-secondary mb-2">
                  ${precio}
                </del>
              )}
            </div>

            <h5 className="card-title text-gray fw-normal fs-6">
              {marca} {modelo}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Producto;

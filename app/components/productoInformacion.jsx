import CarouselProducto from "~/components/carouselProducto";
import { calcularDescuentoProducto } from "~/helpers/calcularDescuento";
import IconoDinero from "~/components/iconos/iconoDinero";
import IconoPrecioLista from "~/components/iconos/iconoPrecioLista";
import mercadopago from "../../public/img/mercadopago-logo.webp";
import IconoEnvio from "~/components/iconos/iconoEnvio";
import IconoFlechaDerecha from "~/components/iconos/iconoFlechaDerecha";
import ModalCalcularCuotas from "~/components/modalCalcularCuotas";



const ProductoInformacion = ({
  tipo,
  marca,
  modelo,
  precio,
  imagen,
  precioLista,
  oferta,
  descuento,
}) => {


  return (
    <div className="card text-bg-light mb-5">
      
      <div className="row align-items-center g-4">
        <div className="col-md-8">
          <CarouselProducto imagen={imagen} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title text-black fs-4 mb-4">
              {tipo ? `${tipo} ${marca} ${modelo}` : `${marca} ${modelo}`}
            </h5>
            <div className="card-text d-flex gap-3 mb-1 fs-2 font-weight-700 text-dark">
              {oferta
                ? calcularDescuentoProducto(descuento, precio)
                : `$${precio}`}
              <div className="d-flex align-items-center gap-1 text-center">
                <IconoDinero />
                <p className="fs-6 text-success font-weight-600 m-0">
                  Precio especial H360
                </p>
              </div>
            </div>
            <p className="card-text d-flex align-items-center gap-3 fs-2 fw-semibold text-dark">
              {oferta && (
                <>
                  <del className="fs-4 fw-light text-secondary">${precio}</del>
                  <span className="badge fs-7 font-weight-700 text-bg-success p-2">
                    {descuento}% OFF
                  </span>
                </>
              )}
            </p>
            <hr />
            <div className="card-text d-flex gap-3 fs-4 font-weight-500 text-dark">
              ${precioLista}
              <div className="d-flex align-items-center gap-1 text-center">
                <IconoPrecioLista />
                <p className="fs-6 font-weight-600 m-0" style={{ color: "#A48a7b" }}>
                  Precio de lista
                </p>
              </div>
            </div>

            <hr />
            <div className="card-text fs-5">
              <p>Pagá con Mercado Pago</p>
              <div className="d-flex justify-content-between align-items-center">
                <img
                  className="mercadopago-logo"
                  src={mercadopago}
                  alt="Logo mercadopago"
                />

                <button
                  type="button"
                  className="btn btn-primary me-4 text-uppercase m-0 p-2 font-weight-700 fs-7  minwidth-cuotas"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Calcular cuotas
                </button>

               <ModalCalcularCuotas />
              </div>
            </div>
            <hr />
            <div className="card-text">
              <p className="text-uppercase fs-6">Recibí tu producto</p>
              <div className="d-flex align-items-center gap-2">
                <IconoEnvio />
                <p className="m-0">Seleccioná la forma de entrega</p>
                <IconoFlechaDerecha />
              </div>
            </div>
            <hr />
            <div className="card-text">
              <button className="btn btn-primary fs-6 py-3 font-weight-500 text-uppercase w-100">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoInformacion;

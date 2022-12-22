import { useState } from "react";
import IconoTarjetaCredito from "~/components/iconos/iconoTarjetaCredito";

const ModalCalcularCuotas = () => {
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState("");
  const [bancoSeleccionado, setBancoSeleccionado] = useState("");
  const [hayCuotaSeleccionada, setHayCuotaSeleccionada] = useState(false);
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState("");

  const handleTarjeta = (e) => {
    setTarjetaSeleccionada(e.target.value);
  };

  const handleBanco = (e) => {
    setBancoSeleccionado(e.target.value);
  };

  const handleCuota = (e) => {
    setHayCuotaSeleccionada(true);
    setCuotaSeleccionada(e.target.value);
  };

  const mostrarCuotas = () => {
    if (tarjetaSeleccionada && bancoSeleccionado) {
      return (
        <>
          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={1}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  1 cuota
                </label>
              </div>
              <div>
                <label className="fs-5">Sin interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={3}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  3 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">26.15% interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={6}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  6 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">48.35% interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={9}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  9 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">74.83% interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={12}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  12 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">103.99% interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={18}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  18 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">165.3% interés</label>
              </div>
            </div>
          </div>

          <div className="form-check mt-5">
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={24}
                  onClick={handleCuota}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="flexRadioDefault1"
                >
                  24 cuotas
                </label>
              </div>
              <div>
                <label className="fs-5">232.59% interés</label>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div
      className="modal modal-lg rounded fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header gap-4">
            <IconoTarjetaCredito />
            <h1 className="modal-title fs-4" id="exampleModalLabel">
              PAGÁ EN MUCHAS CUOTAS
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p className="fs-5">Selecciona tu método de pago</p>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onClick={handleTarjeta}
            >
              <option defaultValue hidden>
                Seleccionar Tarjeta
              </option>
              <option value="AmericanExpress">American Express</option>
              <option value="Shopping">Shopping</option>
              <option value="Cabal">Cabal</option>
              <option value="Argencard">Argencard</option>
              <option value="mastercard">Mastercard</option>
              <option value="Naranja">Naranja</option>
              <option value="Visa">Visa</option>
            </select>
            <p className="fs-5">
              Seleccioná tu banco para ver las cuotas disponibles
            </p>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onClick={handleBanco}
            >
              <option defaultValue hidden>
                Seleccionar Banco
              </option>

              <option disabled className="fw-bold fs-5 cantidad-cuotas">
                Hasta 6 cuotas sin interés
              </option>
              <option value={1}>HSBC Acces Now</option>
              <option value={2}>HSBC Power Card</option>
              <option value={3}>Three</option>
              <option disabled className="fw-bold fs-5 cantidad-cuotas">
                Hasta 3 cuotas sin interés
              </option>
              <option value={4}>Banco Patagonia</option>
              <option value={5}>Fueguina</option>
              <option value={6}>patagonia Singular</option>
              <option disabled className="fw-bold fs-5 cantidad-cuotas">
                Otros bancos
              </option>
              <option value={7}>Visa</option>
              <option value={8}>Naranja</option>
              <option value={9}>Banco Comafi</option>
              <option value={10}>Banco Banco Galicia</option>
              <option value={11}>Banco Nacion</option>
              <option value={12}>Banco San Juan</option>
              <option value={13}>Banco Santa Cruz</option>
              <option value={14}>Tarjeta Shopping</option>
              <option value={15}>Banco Hipotecario</option>
              <option value={16}>Itau</option>
              <option value={17}>Macro</option>
              <option value={18}>Banco Santander</option>
              <option value={19}>Banco Supervielle</option>
              <option value={20}>BBVA</option>
              <option value={21}>HSBC</option>
              <option value={22}>Nuevo Banco de Entre Rios</option>
            </select>

            {mostrarCuotas()}
          </div>
          {hayCuotaSeleccionada && (
            <button className="btn btn-primary w-50 mx-auto rounded-4 my-4 fs-4">
              Abonás 1 cuota de $2000
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCalcularCuotas;

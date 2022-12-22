import { useState } from "react";
import BadgeCantidad from "./badgeCantidad";
import EliminarFiltro from "./eliminarFiltro";
import TituloCategoria from "./tituloCategoria";

const FiltrosPlacasDeVideo = ({
  filtrosSeleccionados,
  setFiltrosSeleccionados,
  cantidades,
}) => {
  const [isActive, setIsActive] = useState({
   asrock: false,
   asus: false,
   gigabyte: false,
   msi: false,
   powercolor: false,
   sapphire: false
  });

  //clickeo una marca, computo la key con el node parent y saco el valor del value

  const agregarFiltro = (e) => {
    setIsActive({
      [e.target.id]: !isActive[e.target.value],
    });

    //seteo en los filtos los filtros existentes y sobreescribo el que clickié
    setFiltrosSeleccionados({
      ...filtrosSeleccionados,
      [e.target.parentNode.dataset.marca]: e.target.value,
    });
  };

  // cuando clickeo la x para quitar el filtro reseteo el state de marcas activas como los filtros del componente padre
  const eliminarFiltro = (e) => {
    setIsActive({
        asrock: false,
        asus: false,
        gigabyte: false,
        msi: false,
        powercolor: false,
        sapphire: false
    });

    //filtros del componente padre
    setFiltrosSeleccionados({
      marca: ""
    });
  };

  return (
    <>
      <h3 className="fs-2 mb-5">
        <span className="text-dark fw-semibold">Placas De Video</span>
      </h3>

      <div>
        <ul className="list-group">
          <TituloCategoria titulo="Marcas" />
          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Asrock"
              id="asrock"
              className=" btn position-relative"
              onClick={agregarFiltro}
            >
              Asrock
              <BadgeCantidad numero={cantidades.cantidadAsrock.length} />
            </button>
            {isActive.asrock && <EliminarFiltro fn={eliminarFiltro} />}
          </li>
          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
          >
            <button
              type="button"
              value="Asus"
              id="asus"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Asus
              <BadgeCantidad numero={cantidades.cantidadAsus.length} />
            </button>
            {isActive.asus && <EliminarFiltro fn={eliminarFiltro} />}
          </li>
          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Gigabyte"
              id="gigabyte"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Gigabyte
              <BadgeCantidad numero={cantidades.cantidadGigabyte.length} />
            </button>

            {isActive.gigabyte && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
          >
            <button
              type="button"
              value="Msi"
              id="msi"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Msi
              <BadgeCantidad numero={cantidades.cantidadMsi.length} />
            </button>

            {isActive.msi && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Powercolor"
              id="powercolor"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Powercolor
              <BadgeCantidad numero={cantidades.cantidaPowercolor.length} />
            </button>

            {isActive.powercolor && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
          >
            <button
              type="button"
              value="Sapphire"
              id="sapphire"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Sapphire
              <BadgeCantidad numero={cantidades.cantidaSapphire.length} />
            </button>

            {isActive.sapphire && <EliminarFiltro fn={eliminarFiltro} />}
          </li>
        </ul>
      </div>
    </>
  );
};

export default FiltrosPlacasDeVideo;

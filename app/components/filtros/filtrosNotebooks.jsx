import { useState } from "react";
import BadgeCantidad from "./badgeCantidad";
import EliminarFiltro from "./eliminarFiltro";
import TituloCategoria from "./tituloCategoria";

const FiltrosNotebooks = ({
  filtrosSeleccionados,
  setFiltrosSeleccionados,
  cantidades,
}) => {
  const [isActive, setIsActive] = useState({
    acer: false,
    apple: false,
    asus: false,
    bangho: false,
    dell: false,
    gigabyte: false,
    hp: false,
    lenovo: false,
    msi: false,
    athlon: false,
    ryzen3: false,
    ryzen5: false,
    ryzen7: false,
    ryzen9: false,
    celeron: false,
    pentiumGold: false,
    i3: false,
    i5: false,
    i7: false,
    i9: false,
    m1: false,
    ram4: false,
    ram8: false,
    ram16: false,
    ram32: false,
  });

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
      acer: false,
      apple: false,
      asus: false,
      bangho: false,
      dell: false,
      gigabyte: false,
      hp: false,
      lenovo: false,
      msi: false,
      athlon: false,
      ryzen3: false,
      ryzen5: false,
      ryzen7: false,
      ryzen9: false,
      celeron: false,
      pentiumGold: false,
      i3: false,
      i5: false,
      i7: false,
      i9: false,
      m1: false,
      ram4: false,
      ram8: false,
      ram16: false,
      ram32: false,
    });

    //filtros del componente padre
    setFiltrosSeleccionados({
      marca: "",
      procesador: "",
      memoriaRam: "",
      pantalla: "",
      usoRecomendado: "",
    });
  };

  return (
    <>
      <h3 className="fs-2 mb-5">
        <span className="text-dark fw-semibold">Notebooks</span>
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
              value="Acer"
              id="acer"
              className=" btn position-relative"
              onClick={agregarFiltro}
            >
              Acer
              <BadgeCantidad numero={cantidades.cantidadAcer.length} />
            </button>
            {isActive.acer && <EliminarFiltro fn={eliminarFiltro} />}
          </li>
          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
          >
            <button
              type="button"
              value="Apple"
              id="apple"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Apple
              <BadgeCantidad numero={cantidades.cantidadApple.length} />
            </button>
            {isActive.apple && <EliminarFiltro fn={eliminarFiltro} />}
          </li>
          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
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
              value="Bangho"
              id="bangho"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Bangho
              <BadgeCantidad numero={cantidades.cantidadBangho.length} />
            </button>

            {isActive.bangho && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Dell"
              id="dell"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Dell
              <BadgeCantidad numero={cantidades.cantidadDell.length} />
            </button>

            {isActive.dell && <EliminarFiltro fn={eliminarFiltro} />}
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
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Hp"
              id="hp"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Hp
              <BadgeCantidad numero={cantidades.cantidadHp.length} />
            </button>

            {isActive.hp && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
          >
            <button
              type="button"
              value="Lenovo"
              id="lenovo"
              className="btn position-relative"
              onClick={agregarFiltro}
            >
              Lenovo
              <BadgeCantidad numero={cantidades.cantidadLenovo.length} />
            </button>

            {isActive.lenovo && <EliminarFiltro fn={eliminarFiltro} />}
          </li>

          <li
            data-marca="marca"
            className="d-flex justify-content-between align-items-center list-group-item p-1"
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

          <TituloCategoria titulo="Procesador" />

          <li className="list-group-item bg-light border-bottom-0 ">
            <button type="button" className=" btn fw-semibold">
              Amd
            </button>
            <ul className="list-group">
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="Athlon"
                  id="athlon"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Intel || isActive.Apple}
                >
                  Athlon
                </button>
                {isActive.athlon && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Ryzen 3"
                  id="ryzen3"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Intel || isActive.Apple}
                >
                  Ryzen 3
                </button>
                {isActive.ryzen3 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>

              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="Ryzen 5"
                  id="ryzen5"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Intel || isActive.Apple}
                >
                  Ryzen 5
                </button>
                {isActive.ryzen5 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Ryzen 7"
                  id="ryzen7"
                  className=" btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Intel || isActive.Apple}
                >
                  Ryzen 7
                </button>
                {isActive.ryzen7 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>

              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="Ryzen 9"
                  id="ryzen9"
                  className=" btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Intel || isActive.Apple}
                >
                  Ryzen 9
                </button>
                {isActive.ryzen9 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
            </ul>
          </li>

          <li className="list-group-item bg-light border-bottom-0">
            <button type="button" className=" btn fw-semibold">
              Intel
            </button>
            <ul className="list-group">
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="Celeron"
                  id="celeron"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Celeron
                </button>
                {isActive.celeron && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Pentium Gold"
                  id="pentiumGold"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Pentium Gold
                </button>
                {isActive.pentiumGold && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="i3"
                  id="i3"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Core i3
                </button>
                {isActive.i3 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="i5"
                  id="i5"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Core i5
                </button>
                {isActive.i5 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="i7"
                  id="i7"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Core i7
                </button>
                {isActive.i7 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="i9"
                  id="i9"
                  className=" btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Apple}
                >
                  Core i9
                </button>
                {isActive.i9 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
            </ul>
          </li>

          <li className="list-group-item bg-light">
            <button type="button" className=" btn fw-semibold">
              Apple
            </button>
            <ul className="list-group">
              <li
                data-marca="procesador"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="M1"
                  id="m1"
                  className="btn position-relative border-0"
                  onClick={agregarFiltro}
                  disabled={isActive.Amd || isActive.Intel}
                >
                  M1
                </button>
                {isActive.m1 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
            </ul>
          </li>

          <TituloCategoria titulo="Memoria Ram" />

          <li className="list-group-item bg-light">
            <button type="button" className=" btn fw-semibold">
              Capacidad
            </button>
            <ul className="list-group">
              <li
                data-marca="memoriaRam"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="4 Gb"
                  id="ram4"
                  className="btn position-relative"
                  onClick={agregarFiltro}
                >
                  4 Gigas
                </button>
                {isActive.ram4 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="memoriaRam"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="8 Gb"
                  id="ram8"
                  className="btn position-relative"
                  onClick={agregarFiltro}
                >
                  8 Gigas
                </button>
                {isActive.ram8 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="memoriaRam"
                className="d-flex justify-content-between align-items-center list-group-item p-1"
              >
                <button
                  type="button"
                  value="16 Gb"
                  id="ram16"
                  className="btn position-relative"
                  onClick={agregarFiltro}
                >
                  16 Gigas
                </button>
                {isActive.ram16 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
              <li
                data-marca="memoriaRam"
                className="d-flex justify-content-between align-items-center list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="32 Gb"
                  id="ram32"
                  className="btn position-relative"
                  onClick={agregarFiltro}
                >
                  32 Gigas
                </button>
                {isActive.ram32 && <EliminarFiltro fn={eliminarFiltro} />}
              </li>
            </ul>
          </li>

          {/* <TituloCategoria titulo="Pantalla" />

          <li className="list-group-item bg-light">
            <button type="button" className=" btn fw-semibold">
              Tamaño
            </button>
            <ul className="list-group">
              <li data-marca="pantalla" className="list-group-item p-1">
                <button
                  type="button"
                  value="21.5"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  21.5"
                </button>
              </li>
              <li
                data-marca="pantalla"
                className="list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="22"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  22"
                </button>
              </li>
              <li data-marca="pantalla" className="list-group-item p-1">
                <button
                  type="button"
                  value="24"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  24"
                </button>
              </li>
              <li
                data-marca="pantalla"
                className="list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="27"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  27"
                </button>
              </li>
            </ul>
          </li> */}

          <TituloCategoria titulo="Uso Recomendado" />

          <li className="list-group-item bg-light border-bottom-0">
            <button type="button" className=" btn fs-6 fw-semibold">
              Arquitectura, Diseño, Edición
            </button>
            <ul className="list-group">
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Basico"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Básico
                </button>
              </li>
              <li
                data-marca="usoRecomendado"
                className="list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Intermedio"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Intermedio
                </button>
              </li>
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Avanzado"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Avanzado
                </button>
              </li>
            </ul>
          </li>

          <li className="list-group-item bg-light border-bottom-0">
            <button type="button" className=" btn fs-6 fw-semibold">
              Oficina, Hogar
            </button>
            <ul className="list-group">
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Basico"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Básico
                </button>
              </li>
              <li
                data-marca="usoRecomendado"
                className="list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Intermedio"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Intermedio
                </button>
              </li>
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Avanzado"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Avanzado
                </button>
              </li>
            </ul>
          </li>

          <li className="list-group-item bg-light">
            <button type="button" className=" btn fs-6 fw-semibold">
              Gaming
            </button>
            <ul className="list-group">
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Basico"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Básico
                </button>
              </li>
              <li
                data-marca="usoRecomendado"
                className="list-group-item bg-light p-1"
              >
                <button
                  type="button"
                  value="Intermedio"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Intermedio
                </button>
              </li>
              <li data-marca="usoRecomendado" className="list-group-item p-1">
                <button
                  type="button"
                  value="Avanzado"
                  className=" btn position-relative"
                  onClick={agregarFiltro}
                >
                  Avanzado
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FiltrosNotebooks;

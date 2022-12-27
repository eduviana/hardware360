import { useLoaderData } from "@remix-run/react";
import { getOfertaGaming } from "~/models/ofertasGaming.server";
import mercadopago from "../../../public/img/mercadopago-logo.webp";

export async function loader({ params }) {
  const { ofertaGamingUrl } = params;
  const ofertaGaming = await getOfertaGaming(ofertaGamingUrl);
  if (ofertaGaming.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Oferta gaming no encontrada",
    });
  }
  return ofertaGaming;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Oferta gaming no encontrada",
      descripcion: "`Hardware, venta de hardware, Oferta gaming no encontrada",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Oferta gaming ${data.data[0].attributes.marca}`,
  };
}

const OfertaGaming = () => {
  const ofertaGaming = useLoaderData();

  const { marca, descripcion, precio, imagen } =
    ofertaGaming.data[0].attributes;

  return (
    <div className="container mt-5">
      <div className="card text-bg-light mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-7">
            <img
              src={imagen.data[0].attributes.url}
              className="card-img-top img-fluid individual-product-image p-5"
              alt={`Imagen notebook ${marca}`}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title fs-2 text-uppercase mb-4">{marca}</h5>
              <div className="card-text d-flex gap-3 fs-1 fw-semibold text-dark">
                ${precio}
                <div className="d-flex align-items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#198754"
                    className="bi bi-coin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>
                  <p className="fs-5 text-success fw-semibold m-0">
                    Precio especial H360
                  </p>
                </div>
              </div>
              <p className="card-text d-flex align-items-center gap-3 fs-2 fw-semibold text-dark">
                <del className="fs-4 fw-light text-secondary">${precio}</del>
                <span className="badge fs-6 text-bg-success px-3 py-2">
                  14% OFF
                </span>
              </p>
              <hr />
              <div className="card-text">
                <p>Pagá con Mercado Pago</p>
                <div className="d-flex align-items-center gap-2">
                  <img
                    className="mercadopago-logo"
                    src={mercadopago}
                    alt="Logo mercadopago"
                  />
                  <button className="btn btn-primary text-uppercase m-0 px-1 py-0 fs-6 minwidth-cuotas">
                    Calcular cuotas
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-text">
                <p className="text-uppercase">Recibí tu producto</p>
                <div className="d-flex align-items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    className="bi bi-truck p-2 bg-secondary rounded-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  <p className="m-0">Seleccioná la forma de entrega</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#198754"
                    className="bi bi-chevron-right ms-auto"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
              <hr />
              <div className="card-text">
                <button className="btn btn-primary w-100">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>{descripcion}</p>

      {/* <div className="px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Características</h2>
        <div className="row row-gap py-5 row-cols-1 row-cols-lg-3 bg-light bg-gradient">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-device-hdd"
                viewBox="0 0 16 16"
              >
                <path d="M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                <path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">ALMACENAMIENTO</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Tipo: {almacenamiento.tipo}{" "}
                </li>
                <li className="list-group-item">
                  Capacidad: {almacenamiento.capacidad}{" "}
                </li>
                <li className="list-group-item bg-light">
                  Interfaz: {almacenamiento.interfaz}
                </li>
                <li className="list-group-item">
                  Velocidad: {almacenamiento.velocidad}
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-ethernet"
                viewBox="0 0 16 16"
              >
                <path d="M14 13.5v-7a.5.5 0 0 0-.5-.5H12V4.5a.5.5 0 0 0-.5-.5h-1v-.5A.5.5 0 0 0 10 3H6a.5.5 0 0 0-.5.5V4h-1a.5.5 0 0 0-.5.5V6H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5ZM3.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm2 0h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5ZM9.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25Zm1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5Z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2ZM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">CONECTIVIDAD</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Wi-Fi: {conectividad.wifi}{" "}
                </li>
                <li className="list-group-item">
                  Ethernet: {conectividad.ethernet}{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-memory"
                viewBox="0 0 16 16"
              >
                <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">MEMORIA RAM</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Formato: {ram.formato}{" "}
                </li>
                <li className="list-group-item">Capacidad: {ram.capacidad} </li>
                <li className="list-group-item bg-light">
                  Frecuencia: {ram.frecuencia}{" "}
                </li>
                <li className="list-group-item">
                  Expandible: {ram.expandible}
                </li>
              </ul>
            </div>
          </div>

          {graficos && (
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-memory"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z" />
                </svg>
              </div>
              <div className="w-75">
                <h3 className="fs-5 p-1 fw-bold mb-4">GRÁFICOS</h3>
                <ul className="list-group">
                  <li className="list-group-item bg-light">
                    Marca: {graficos.marca}{" "}
                  </li>
                  <li className="list-group-item">
                    Modelo: {graficos.modelo}{" "}
                  </li>
                  {graficos.vram && (
                    <li className="list-group-item bg-light">
                      Vram: {graficos.vram}{" "}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cpu"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">PROCESADOR</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Marca: {procesador.marca}
                </li>
                <li className="list-group-item">Modelo: {procesador.modelo}</li>
                <li className="list-group-item bg-light">
                  Nucleos: {procesador.nucleos}
                </li>
                <li className="list-group-item">
                  Frecuencia: {procesador.frecuencia}
                </li>
                <li className="list-group-item bg-light">
                  Caché: {procesador.cache}
                </li>
              </ul>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-usb-plug"
                viewBox="0 0 16 16"
              >
                <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM6 5a1 1 0 0 0-1 1v4.394c0 .494.146.976.42 1.387l1.038 1.558c.354.53.542 1.152.542 1.789 0 .481.39.872.872.872h1.256c.481 0 .872-.39.872-.872 0-.637.188-1.26.541-1.789l1.04-1.558A2.5 2.5 0 0 0 12 10.394V6a1 1 0 0 0-1-1H6Zm0 1h5v4.394a1.5 1.5 0 0 1-.252.832L9.71 12.784A4.224 4.224 0 0 0 9.002 15H7.998a4.224 4.224 0 0 0-.707-2.216l-1.04-1.558A1.5 1.5 0 0 1 6 10.394V6Z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">PUERTOS</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Usb 2.0: {puertos.usb2}
                </li>
                <li className="list-group-item">Usb 3.0: {puertos.usb3}</li>
                <li className="list-group-item bg-light">
                  Hdmi: {puertos.hdmi}
                </li>
                <li className="list-group-item">
                  Audio/Mic 3.5: {puertos.audioMic}
                </li>
              </ul>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-windows"
                viewBox="0 0 16 16"
              >
                <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">SISTEMA OPERATIVO</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Incluido: {sistemaOperativo.incluido}{" "}
                </li>
                <li className="list-group-item">
                  Versión: {sistemaOperativo.version}
                </li>
              </ul>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
            </div>
            <div className="w-75">
              <h3 className="fs-5 p-1 fw-bold mb-4">USO RECOMENDADO</h3>
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  Gaming: {usoRecomendado.gaming}
                </li>
                <li className="list-group-item">
                  Arquitectura, Diseño, Edición: {usoRecomendado.edicion}
                </li>
                <li className="list-group-item bg-light">
                  Hogar, Oficina: {usoRecomendado.hogar}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OfertaGaming;

const ListadoEspecificaciones = ({
  almacenamiento,
  conectividad,
  ram,
  otras,
  pantalla,
  procesador,
  puertos,
  sistemaOperativo,
  usoRecomendado,
}) => {
  return (
    <>
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
            <li className="list-group-item bg-light">
              Compatible: {almacenamiento.compatible}
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
              Bluetooth: {conectividad.bluetooth}{" "}
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
            <li className="list-group-item">Expandible: {ram.expandible}</li>
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
          <h3 className="fs-5 p-1 fw-bold mb-4">OTRAS CARACTERÍSTICAS</h3>
          <ul className="list-group">
            <li className="list-group-item bg-light">
              Sensor Dactilar: {otras.sensorDactilar}{" "}
            </li>
            <li className="list-group-item">
              Teclado Numérico: {otras.tecladoNumerico}
            </li>
            <li className="list-group-item bg-light">
              Cámara Web: {otras.camaraWeb}
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
            className="bi bi-display"
            viewBox="0 0 16 16"
          >
            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
          </svg>
        </div>
        <div className="w-75">
          <h3 className="fs-5 p-1 fw-bold mb-4">PANTALLA</h3>
          <ul className="list-group">
            <li className="list-group-item bg-light">
              Tamaño: {pantalla.tamaño}{" "}
            </li>
            <li className="list-group-item">
              Resolución: {pantalla.resolucion}
            </li>
            <li className="list-group-item bg-light">
              Tecnología: {pantalla.tecnologia}
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
            <li className="list-group-item bg-light">Hdmi: {puertos.hdmi}</li>
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
    </>
  );
};

export default ListadoEspecificaciones;

import IconoDiscoDuro from "../iconos/iconoDiscoDuro";

const ListadoEspecificaciones = ({ especificaciones }) => {
  const {
    bus,
    peso,
    consumo,
    memoria,
    nucleos,
    conexion,
    interfaz,
    frecuencia,
    resolucion,
    dimensiones,
  } = especificaciones;

  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <IconoDiscoDuro />
      </div>
      <div className="w-75">
        <h3 className="fs-5 p-1 fw-bold mb-4 text-uppercase">
          ESPECIFICACIONES
        </h3>
        <ul className="list-group">
          <li className="list-group-item">Bus de Memoria: {bus} </li>
          <li className="list-group-item bg-light">Consumo: {consumo}</li>
          <li className="list-group-item">Memoria: {memoria}</li>
          <li className="list-group-item bg-light">Núcleos: {nucleos}</li>
          <li className="list-group-item">Conexión: {conexion}</li>
          <li className="list-group-item bg-light">Interfaz: {interfaz}</li>
          <li className="list-group-item">Frecuencia: {frecuencia}</li>
          <li className="list-group-item bg-light">Resolución: {resolucion}</li>
          <li className="list-group-item">Peso: {peso} </li>
          <li className="list-group-item bg-light">
            Dimensiones: {dimensiones}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListadoEspecificaciones;

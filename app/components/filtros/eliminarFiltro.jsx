import IconoCerrar from "../iconos/iconoCerrar";

const EliminarFiltro = ({ fn }) => {
  return (
    <button className="border border-0 bg-transparent" onClick={fn}>
      <IconoCerrar />
    </button>
  );
};

export default EliminarFiltro;

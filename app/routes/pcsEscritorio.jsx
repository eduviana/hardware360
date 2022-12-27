import { useEffect, useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { getPcsEscritorio } from "~/models/pcsEscritorio.server";
import FiltrosPcsEscritorio from "~/components/filtros/filtrosPcsEscritorio";
import ListadoProductos from "~/components/listadoProductos";
import Volver from "~/components/volver";
import {
  cantidadPcsPorMarca,
  filtrarPcsPorMarca,
} from "~/helpers/filtrosPcsEscritorio";


export function meta() {
  return {
    title: "Hardware 360 - Tienda de hardware",
    descripcion: "Tienda de componentes de pc, pcs de escritorio",
  };
}

export async function loader() {
  const pcsEscritorio = await getPcsEscritorio();
  const listadoPcsEscritorio = pcsEscritorio.data;

  return {
    listadoPcsEscritorio,
  };
}


const PcsEscritorio = () => {
  const { listadoPcsEscritorio } = useLoaderData();

  const [listadoCompletoPcs, setListadoCompletoPcs] = useState(listadoPcsEscritorio);

  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState({
    marca: "",
    procesador: "",
    memoriaRam: "",
    usoRecomendado: "",
  });

  const { marca, procesador, memoriaRam } = filtrosSeleccionados;

  //La funcion cantidadPcsPorMarca devuelve un objeto con las cantidades de pcs por marca para pasarselo a los filtrosSeleccionados y mostrar el numero en los badges
  //esta variable es la que paso como prop a el filtro para mostrar las cantidades de cada marca
  const cantidades = cantidadPcsPorMarca(listadoPcsEscritorio);

  useEffect(() => {
    const pcsFiltradas = filtrarPcsPorMarca(
      listadoPcsEscritorio,
      marca,
      procesador,
      memoriaRam
    );
    setListadoCompletoPcs(pcsFiltradas);
  }, [
    listadoPcsEscritorio,
    filtrosSeleccionados,
    marca,
    procesador,
    memoriaRam,
  ]);

  return (
    <div className="container">
      <Volver />
      <section className="my-5">
        <div className="row flex-column flex-lg-row gap-5">
          <div className="col-12 col-lg-3">
            <FiltrosPcsEscritorio
              filtrosSeleccionados={filtrosSeleccionados}
              setFiltrosSeleccionados={setFiltrosSeleccionados}
              cantidades={cantidades}
            />
          </div>

          <div className="col mt-7">
            {listadoCompletoPcs.length <= 0 ? (
              <h1 className="text-center">No se encontraron resultados</h1>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 row-cols-xxl-3 g-4 notebooks-bg rounded">
                <ListadoProductos
                  productos={listadoCompletoPcs}
                  direccion="pcEscritorio"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PcsEscritorio;

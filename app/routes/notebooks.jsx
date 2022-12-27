import { getNotebooks } from "~/models/notebooks.server";
import { useLoaderData } from "@remix-run/react";
import FiltrosNotebooks from "~/components/filtros/filtrosNotebooks";
import ListadoProductos from "~/components/listadoProductos";
import { useEffect, useState } from "react";
import Volver from "~/components/volver";
import {
  cantidadNotebooksPorMarca,
  filtrarNotebooksPorMarca,
} from "~/helpers/filtrosNotebooks";
export function meta() {
  return {
    title: "Hardware 360 - Tienda de hardware",
    descripcion: "Tienda de componentes de pc, notebooks",
  };
}

export async function loader() {
  const notebooks = await getNotebooks();
  const listadoNotebooks = notebooks.data;

  return {
    listadoNotebooks,
  };
}

const Notebooks = () => {
  const { listadoNotebooks } = useLoaderData();

  const [listadoCompletoNotebooks, setListadoCompletoNotebooks] =
    useState(listadoNotebooks);

  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState({
    marca: "",
    procesador: "",
    memoriaRam: "",
    pantalla: "",
    usoRecomendado: "",
  });

  const { marca, procesador, memoriaRam, pantalla } = filtrosSeleccionados;

  const cantidades = cantidadNotebooksPorMarca(listadoNotebooks);

  useEffect(() => {
    const notebooksFiltradas = filtrarNotebooksPorMarca(
      listadoNotebooks,
      marca,
      procesador,
      memoriaRam,
      pantalla
    );
    setListadoCompletoNotebooks(notebooksFiltradas);
  }, [
    listadoNotebooks,
    filtrosSeleccionados,
    marca,
    procesador,
    memoriaRam,
    pantalla,
  ]);

  return (
    <div className="container">
      <Volver />
      <section className="my-5">
        <div className="row flex-column flex-lg-row gap-5">
          <div className="col-12 col-lg-3">
            <FiltrosNotebooks
              filtrosSeleccionados={filtrosSeleccionados}
              setFiltrosSeleccionados={setFiltrosSeleccionados}
              cantidades={cantidades}
            />
          </div>

          <div className="col mt-7">
            {listadoCompletoNotebooks.length <= 0 ? (
              <h1 className="text-center">No se encontraron resultados</h1>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 row-cols-xxl-3 g-4 notebooks-bg rounded">
                <ListadoProductos
                  productos={listadoCompletoNotebooks}
                  direccion="notebook"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notebooks;

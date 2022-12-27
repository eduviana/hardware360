import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getPlacasDeVideo } from "~/models/placasDeVideo.server";
import FiltrosPlacasDeVideo from "~/components/filtros/filtrosPlacasDeVideo";
import ListadoProductos from "~/components/listadoProductos";
import Volver from "~/components/volver";
import { cantidadPlacasDeVideoPorMarca, filtrarPlacasDeVideoPorMarca } from "~/helpers/filtrosPlacasDeVideo";

export function meta() {
  return {
    title: "Hardware 360 - Tienda de hardware",
    descripcion: "Tienda de componentes de pc, placas de video",
  };
}

export async function loader() {
  const placasDeVideo = await getPlacasDeVideo();
  const listadoPlacasDeVideo = placasDeVideo.data;

  return {
    listadoPlacasDeVideo,
  };
}

const PlacasDeVideo = () => {
  const { listadoPlacasDeVideo } = useLoaderData();
  
  const [listadoCompletoPlacasDeVideo, setListadoCompletoPlacasDeVideo] = useState(listadoPlacasDeVideo);

  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState({
    marca: "",
  });

  const { marca } = filtrosSeleccionados;

  const cantidades = cantidadPlacasDeVideoPorMarca(listadoPlacasDeVideo);

  useEffect(() => {
    const placasFiltradas = filtrarPlacasDeVideoPorMarca(
      listadoPlacasDeVideo,
      marca,
    );
    setListadoCompletoPlacasDeVideo(placasFiltradas);
  }, [
    listadoPlacasDeVideo,
    setFiltrosSeleccionados,
    marca
  ]);

  return (
    <div className="container">
      <Volver />
      <section className="my-5">
        <div className="row flex-column flex-lg-row gap-5">
          <div className="col-12 col-lg-3">
            <FiltrosPlacasDeVideo 
              filtrosSeleccionados={filtrosSeleccionados}
              setFiltrosSeleccionados={setFiltrosSeleccionados}
              cantidades={cantidades}
            />
          </div>

          <div className="col mt-7">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 row-cols-xxl-3 g-4 notebooks-bg rounded">
              <ListadoProductos
                productos={listadoCompletoPlacasDeVideo}
                direccion="placaDeVideo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacasDeVideo;

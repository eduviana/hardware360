import { useLoaderData } from "@remix-run/react";
import { getPlacaDeVideo } from "~/models/placasDeVideo.server";
import ProductoInformacion from "~/components/productoInformacion";
import Especificaciones from "~/components/especificaciones";

import ListadoEspecificaciones from "~/components/placaDeVideo/listadoEspecificaciones";

import Volver from "~/components/volver";

export async function loader({ params }) {
  const { placaDeVideoUrl } = params;
  const placaDeVideo = await getPlacaDeVideo(placaDeVideoUrl);
  if (placaDeVideo.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Placa de video no encontrada",
    });
  }
  return placaDeVideo;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Placa de video  no encontrada",
      descripcion: "`Hardware, venta de hardware, placa de video no encontrada",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Placa e Video ${data.data[0].attributes.marca}`,
  };
}

const PlacaDeVideo = () => {
  const placaDeVideo = useLoaderData();

  const {
    marca,
    modelo,
    descripcion,
    precio,
    imagen,
    especificaciones,
    precioLista,
    oferta,
    descuento,
  } = placaDeVideo.data[0].attributes;

  return (
    <div className="container mt-5">
      <Volver />
      <ProductoInformacion
        marca={marca}
        modelo={modelo}
        precio={precio}
        imagen={imagen}
        precioLista={precioLista}
        oferta={oferta}
        descuento={descuento}
      />
      <pre>{descripcion}</pre>

      <Especificaciones>
        <ListadoEspecificaciones especificaciones={especificaciones}/>
      </Especificaciones>
    </div>
  );
};

export default PlacaDeVideo;

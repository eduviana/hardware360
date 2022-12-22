import { useLoaderData } from "@remix-run/react";

import { getPcEscritorio } from "~/models/pcsEscritorio.server";
import ListadoEspecificaciones from "~/components/pcEscritorio/listadoEspecificaciones";
import ProductoInformacion from "~/components/productoInformacion";
import Especificaciones from "~/components/especificaciones";

import Volver from "~/components/volver";

export async function loader({ params }) {
  const { pcEscritorioUrl } = params;
  const pcEscritorio = await getPcEscritorio(pcEscritorioUrl);
  if (pcEscritorio.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Pc de escritorio no encontrada",
    });
  }
  return pcEscritorio;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Pc de escritorio no encontrada",
      descripcion:
        "`Hardware, venta de hardware, Pc de escritorio no encontrada",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Pc de escritorio ${data.data[0].attributes.marca}`,
  };
}

const PcEscritorio = () => {
  const pcEscritorio = useLoaderData();

  const {
    marca,
    modelo,
    descripcion,
    precio,
    precioLista,
    oferta,
    descuento,
    imagen,
    almacenamiento,
    graficos,
    conectividad,
    ram,
    procesador,
    puertos,
    sistemaOperativo,
    usoRecomendado,
  } = pcEscritorio.data[0].attributes;

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

      <p>{descripcion}</p>

      <Especificaciones>
        <ListadoEspecificaciones
          almacenamiento={almacenamiento}
          graficos={graficos}
          conectividad={conectividad}
          ram={ram}
          procesador={procesador}
          puertos={puertos}
          sistemaOperativo={sistemaOperativo}
          usoRecomendado={usoRecomendado}
        />
      </Especificaciones>

      <div className="px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Características</h2>
        <div className="row row-gap py-5 row-cols-1 row-cols-lg-3 bg-light bg-gradient"></div>
      </div>
    </div>
  );
};

export default PcEscritorio;

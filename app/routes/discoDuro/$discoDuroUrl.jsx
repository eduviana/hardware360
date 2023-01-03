import { getDiscoDuro } from "~/models/discosDuros.server";
import { useLoaderData } from "@remix-run/react";
import ProductoInformacion from "~/components/productoInformacion";
import Especificaciones from "~/components/especificaciones";
import ListadoEspecificaciones from "~/components/discoDuro/listadoEspecificaciones";

export async function loader({ params }) {
  const { discoDuroUrl } = params;
  const discoDuro = await getDiscoDuro(discoDuroUrl);
  if (discoDuro.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Disco Duro no encontrado",
    });
  }
  return discoDuro;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Disco Duro  no encontrada",
      descripcion: "`Hardware, venta de hardware, Disco Duro no encontrado",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Disco Duro ${data.data[0].attributes.marca}`,
  };
}

const DiscoDuro = () => {
  const discoDuro = useLoaderData();
  const { id } = discoDuro.data[0];
  const {
    marca,
    modelo,
    tipo,
    descripcion,
    precio,
    precioLista,
    descuento,
    oferta,
    imagen,
    especificaciones,
  } = discoDuro.data[0].attributes;

  return (
    <div className="container mt-5">
      <ProductoInformacion
        id={id}
        tipo={tipo}
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
        <ListadoEspecificaciones especificaciones={especificaciones} />
      </Especificaciones>
    </div>
  );
};

export default DiscoDuro;

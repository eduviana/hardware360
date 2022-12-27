import { useLoaderData } from "@remix-run/react";
import { getImpresora } from "~/models/impresoras.server";
import ProductoInformacion from "~/components/productoInformacion";
import Especificaciones from "~/components/especificaciones";
import ListadoEspecificaciones from "~/components/impresora/listadoEspecificaciones";

export async function loader({ params }) {
  const { impresoraUrl } = params;
  const impresora = await getImpresora(impresoraUrl);
  if (impresora.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Impresora no encontrada",
    });
  }
  return impresora;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Impresora no encontrada",
      descripcion: "`Hardware, venta de hardware, Imrpesora no encontrada",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Impresora ${data.data[0].attributes.marca}`,
  };
}

const Impresora = () => {
  const impresora = useLoaderData();

  const {
    tipo,
    marca,
    modelo,
    descripcion,
    precio,
    precioLista,
    descuento,
    oferta,
    imagen,
    especificaciones,
  } = impresora.data[0].attributes;

  return (
    <div className="container mt-5">
        <ProductoInformacion
        tipo={tipo}
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
        <ListadoEspecificaciones especificaciones={especificaciones} />
      </Especificaciones>

      <div className="px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Características</h2>
        <div className="row row-gap py-5 row-cols-1 row-cols-lg-3 bg-light bg-gradient">
        
        </div>
      </div>
    </div>
  );
};

export default Impresora;

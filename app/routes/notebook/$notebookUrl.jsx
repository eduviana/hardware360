import { getNotebook } from "~/models/notebooks.server";
import { useLoaderData, Link } from "@remix-run/react";
import Especificaciones from "~/components/especificaciones";
import ProductoInformacion from "~/components/productoInformacion";
import ListadoEspecificaciones from "~/components/notebook/listadoEspecificaciones";
import Volver from "~/components/volver";


export async function loader({ params }) {
  const { notebookUrl } = params;
  const notebook = await getNotebook(notebookUrl);
  if (notebook.data.legnth === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Notebook no encontrada",
    });
  }
  return notebook;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Notebook no encontrada",
      descripcion: "`Hardware, venta de hardware, notebook no encontrada",
    };
  }
  return {
    title: `Hardware 360 - ${data.data[0].attributes.marca}`,
    description: `Hardware, venta de hardware, Notebook ${data.data[0].attributes.marca}`,
  };
}

const Notebook = () => {
  const notebook = useLoaderData();
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
    conectividad,
    ram,
    otras,
    pantalla,
    procesador,
    puertos,
    sistemaOperativo,
    usoRecomendado,
  } = notebook.data[0].attributes;

  return (
    <>
     <Volver />
      <div className="container mt-5">
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
            conectividad={conectividad}
            ram={ram}
            otras={otras}
            pantalla={pantalla}
            procesador={procesador}
            puertos={puertos}
            sistemaOperativo={sistemaOperativo}
            usoRecomendado={usoRecomendado}
          />
        </Especificaciones>
      </div>
    </>
  );
};

export default Notebook;

// {imagen.data[1] && (
//   <div className="row featurette align-items-center mt-5">
//     <div className="col-md-7 order-md-2">
//       <h2 className="featurette-heading fw-normal lh-1">
//         Tecnología 1<span className="text-muted"> See for yourself.</span>
//       </h2>
//       <p className="lead">{descripcion}</p>
//     </div>
//     <div className="col-md-5 order-md-1">
//       <img
//         className="p-5"
//         src={imagen.data[1].attributes.url}
//         alt="Imagen tecnologias"
//       />
//     </div>
//   </div>
// )}

// <hr className="featurette-divider" />
// {imagen.data[2] && (
//   <div className="row featurette align-items-center">
//     <div className="col-md-7">
//       <h2 className="featurette-heading fw-normal lh-1">
//         Tecnología 2
//         <span className="text-muted"> Itll blow your mind.</span>
//       </h2>
//       <p className="lead">{descripcion}</p>
//     </div>
//     <div className="col-md-5">
//       <img
//         className="p-5"
//         src={imagen.data[2].attributes.url}
//         alt="Imagen tecnologias"
//       />
//     </div>
//   </div>
// )}
// <hr className="featurette-divider" />
// {imagen.data[3] && (
//   <div className="row featurette align-items-center mb-5">
//     <div className="col-md-7 order-md-2">
//       <h2 className="featurette-heading fw-normal lh-1">
//         Tecnología 3<span className="text-muted"> See for yourself.</span>
//       </h2>
//       <p className="lead">{descripcion}</p>
//     </div>
//     <div className="col-md-5 order-md-1">
//       <img
//         className="p-5"
//         src={imagen.data[3].attributes.url}
//         alt="Imagen tecnologias"
//       />
//     </div>
//   </div>
// )}

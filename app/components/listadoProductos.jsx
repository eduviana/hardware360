import Producto from "./producto";

const ListadoProductos = ({ productos, direccion }) => {
  return (
    productos.length && (
      <>
        {productos.map((producto) => (
          <Producto
            key={producto?.id}
            producto={producto?.attributes}
            direccion={direccion}
          />
        ))}
      </>
    )
  );
};

export default ListadoProductos;

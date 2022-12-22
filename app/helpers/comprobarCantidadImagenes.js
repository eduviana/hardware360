export function comprobarCantidadImagenes(imagen) {
  if (imagen.data.length > 0) {
    return imagen.data[0].attributes.url;
  } else {
    return imagen.data.attributes.url;
  }
}

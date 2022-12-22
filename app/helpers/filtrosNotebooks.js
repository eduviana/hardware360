export function cantidadNotebooksPorMarca(arr) {
  const filtrarAcer = arr.map((pc) => pc.attributes.marca.includes("Acer"));
  const cantidadAcer = filtrarAcer.filter((p) => p == true);

  const filtrarApple = arr.map((pc) => pc.attributes.marca.includes("Apple"));
  const cantidadApple = filtrarApple.filter((p) => p == true);

  const filtrarAsus = arr.map((pc) => pc.attributes.marca.includes("Asus"));
  const cantidadAsus = filtrarAsus.filter((p) => p == true);

  const filtrarBangho = arr.map((pc) => pc.attributes.marca.includes("Bangho"));
  const cantidadBangho = filtrarBangho.filter((p) => p == true);

  const filtrarDell = arr.map((pc) => pc.attributes.marca.includes("Dell"));
  const cantidadDell = filtrarDell.filter((p) => p == true);

  const filtrarGigabyte = arr.map((pc) =>
    pc.attributes.marca.includes("Gigabyte")
  );
  const cantidadGigabyte = filtrarGigabyte.filter((p) => p == true);

  const filtrarHp = arr.map((pc) => pc.attributes.marca.includes("Hp"));
  const cantidadHp = filtrarHp.filter((p) => p == true);

  const filtrarLenovo = arr.map((pc) => pc.attributes.marca.includes("Lenovo"));
  const cantidadLenovo = filtrarLenovo.filter((p) => p == true);

  const filtrarMsi = arr.map((pc) => pc.attributes.marca.includes("Msi"));
  const cantidadMsi = filtrarMsi.filter((p) => p == true);

  return {
    cantidadAcer,
    cantidadApple,
    cantidadAsus,
    cantidadBangho,
    cantidadDell,
    cantidadGigabyte,
    cantidadHp,
    cantidadLenovo,
    cantidadMsi,
  };
}


export function filtrarNotebooksPorMarca(arr, marca, procesador, memoriaRam, pantalla) {
    
    if(marca.length > 0) {
      const arrFiltrado = arr.filter(pc => pc.attributes.marca.includes(marca))

      if(procesador.length > 0) {
        const porProcesador = arrFiltrado.filter(pc => pc.attributes.modelo.includes(procesador))
        return porProcesador
      }

      if(memoriaRam.length > 0) {
        const porMemoriaRam = arrFiltrado.filter(pc => pc.attributes.ram.capacidad.toLowerCase() === memoriaRam.toLowerCase())
        return porMemoriaRam
      }

      if(pantalla.length > 0) {
        const porPantalla = arrFiltrado.filter(pc => pc.attributes.pantalla.tamaño.toLowerCase() === pantalla.toLowerCase())
        return porPantalla
      }
      return arrFiltrado;
    } else {
      if(procesador.length > 0) {
        const porProcesador = arr.filter(pc => pc.attributes.modelo.includes(procesador))
        return porProcesador
      }

      if(memoriaRam.length > 0) {
        const porMemoriaRam = arr.filter(pc => pc.attributes.ram.capacidad.toLowerCase() === memoriaRam.toLowerCase())
        return porMemoriaRam
      }

      if(pantalla.length > 0) {
        const porPantalla = arr.filter(pc => pc.attributes.pantalla.tamaño.toLowerCase() === pantalla.toLowerCase())
        return porPantalla
      }
    }

  

  
    return arr
  }
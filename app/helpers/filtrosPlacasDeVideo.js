
export function cantidadPlacasDeVideoPorMarca(arr) {
    const filtrarAsrock = arr.map((pc) => pc.attributes.marca.includes("Asrock"));
    const cantidadAsrock = filtrarAsrock.filter((p) => p == true);

    const filtrarAsus = arr.map((pc) => pc.attributes.marca.includes("Asus"));
    const cantidadAsus = filtrarAsus.filter((p) => p == true);

    const filtrarGigabyte = arr.map((pc) => pc.attributes.marca.includes("Gigabyte"));
    const cantidadGigabyte = filtrarGigabyte.filter((p) => p == true);

    const filtrarMsi = arr.map((pc) => pc.attributes.marca.includes("Msi"));
    const cantidadMsi = filtrarMsi.filter((p) => p == true);

    const filtrarPowercolor = arr.map((pc) => pc.attributes.marca.includes("Powercolor"));
    const cantidaPowercolor = filtrarPowercolor.filter((p) => p == true);

    const filtrarSapphire = arr.map((pc) => pc.attributes.marca.includes("Sapphire"));
    const cantidaSapphire = filtrarSapphire.filter((p) => p == true);


    return {
        cantidadAsrock,
        cantidadAsus,
        cantidadGigabyte,
        cantidadMsi,
        cantidaPowercolor,
        cantidaSapphire
    }
  }




  export function filtrarPlacasDeVideoPorMarca(arr, marca) {
    
    if(marca.length > 0) {
      const arrFiltrado = arr.filter(pc => pc.attributes.marca.includes(marca))
        return arrFiltrado;
     
    }

  

  
    return arr
  }

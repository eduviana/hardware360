


export function cantidadPcsPorMarca(arr) {
    const filtrarAmd = arr.map((pc) => pc.attributes.marca.includes("Amd"));
    const cantidadAmd = filtrarAmd.filter((p) => p == true);

    const filtrarIntel = arr.map((pc) => pc.attributes.marca.includes("Intel"));
    const cantidadIntel = filtrarIntel.filter((p) => p == true);

    const filtrarApple = arr.map((pc) => pc.attributes.marca.includes("Apple"));
    const cantidadApple = filtrarApple.filter((p) => p == true);

    return {
      cantidadAmd,
      cantidadIntel,
      cantidadApple
    }
  }


  export function filtrarPcsPorMarca(arr, marca, procesador, memoriaRam) {
    
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
    }

  

  
    return arr
  }




















  // export function filtrarPcsPorMarca(arr, marca, procesador, memoriaRam) {
    
  //   if(marca.length > 0) {
  //     const resultado = arr.filter(pc => pc.attributes.marca.includes(marca))

  //     if(marca.length > 0 && procesador.length > 0) {
  //       const porProcesador = resultado.filter(pc => pc.attributes.modelo.includes(procesador))
  //       return porProcesador
  //     }

  //     if(procesador.length > 0 && memoriaRam.length > 0) {
  //       const porMemoriaRam = resultado.filter(pc => pc.attributes.ram.capacidad.toLowerCase() === memoriaRam.toLowerCase())
  //       console.log(porMemoriaRam)
  //       return porMemoriaRam
  //     }
  //     return resultado;
  //   }

  //   if(procesador.length > 0) {
  //     const porProcesador = arr.filter(pc => pc.attributes.modelo.includes(procesador))
  //     return porProcesador
  //   }

  //   // if(procesador.length > 0) {
  //   //   const porProcesador = arr.filter(pc => pc.attributes.modelo.includes(procesador))
      
  //   //   return porProcesador
  //   // }

  //   if(memoriaRam.length > 0) {
  //     const porMemoriaRam = arr.filter(pc => pc.attributes.ram.capacidad.toLowerCase() === memoriaRam.toLowerCase())
  //     console.log(porMemoriaRam);
  //     return porMemoriaRam
  //   }

  
  //   return arr
  // }

import { useEffect, useState } from "react";
import { filtrarPcsPorMarca } from "~/helpers/filtrosPcsEscritorio";




export const useFiltros = ({filtros, filtrosActivos }) => {
 
    const [filtrosSeleccionados, setFiltrosSeleccionados] = useState(filtros);

    const [isActive, setIsActive] = useState(filtrosActivos);

    console.log(filtrosSeleccionados)
    console.log(isActive)

  


    const agregarFiltro = (e) => {
    
        setIsActive({
          [e.target.id]: !isActive[e.target.value],
        });
    
        //seteo en los filtos los filtros existentes y sobreescribo el que clickié
        setFiltrosSeleccionados({
          ...filtrosSeleccionados,
          [e.target.parentNode.dataset.marca]: e.target.value,
        });
      };


      const eliminarFiltro = (e) => {
        setIsActive(isActive);

        setFiltrosSeleccionados(filtros);
      }


      return [
        filtrosSeleccionados,
        setFiltrosSeleccionados,
        isActive,
        setIsActive,
        agregarFiltro,
        eliminarFiltro
      ]
        
      
}



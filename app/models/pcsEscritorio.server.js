export async function getSomePcsEscritorio() {
    const respuesta = await fetch(`${process.env.API_URL}/pcs-escritorios?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getPcsEscritorio() {
    const respuesta = await fetch(`${process.env.API_URL}/pcs-escritorios?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getPcEscritorio(url) {
    const respuesta = await fetch(`${process.env.API_URL}/pcs-escritorios?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}



export async function getPcsPorMarca(marca) {
    const respuesta = await fetch(`http://localhost:1337/api/pcs-escritorios?filters[marca][$contains]=${marca}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
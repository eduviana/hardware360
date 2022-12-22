export async function getSomeOfertasGaming() {
    const respuesta = await fetch(`${process.env.API_URL}/ofertas-gamings?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getOfertasGaming() {
    const respuesta = await fetch(`${process.env.API_URL}/ofertas-gamings?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}



export async function getOfertaGaming(url) {
    const respuesta = await fetch(`${process.env.API_URL}/ofertas-gamings?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
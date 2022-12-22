export async function getSomePlacasDeVideo() {
    const respuesta = await fetch(`${process.env.API_URL}/placas-de-videos?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getPlacasDeVideo() {
    const respuesta = await fetch(`${process.env.API_URL}/placas-de-videos?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getPlacaDeVideo(url) {
    const respuesta = await fetch(`${process.env.API_URL}/placas-de-videos?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
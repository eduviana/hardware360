export async function getSomeNotebooks() {
    const respuesta = await fetch(`${process.env.API_URL}/notebooks?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getNotebooks() {
    const respuesta = await fetch(`${process.env.API_URL}/notebooks?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getNotebook(url) {
    const respuesta = await fetch(`${process.env.API_URL}/notebooks?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
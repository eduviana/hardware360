export async function getSomeDiscosDuros() {
    const respuesta = await fetch(`${process.env.API_URL}/discos-duros?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getDiscosDuros() {
    const respuesta = await fetch(`${process.env.API_URL}/discos-duros?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}

export async function getDiscoDuro(url) {
    const respuesta = await fetch(`${process.env.API_URL}/discos-duros?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
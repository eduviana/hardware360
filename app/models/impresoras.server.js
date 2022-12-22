export async function getSomeImpresoras() {
    const respuesta = await fetch(`${process.env.API_URL}/impresoras?pagination[page]=1&pagination[pageSize]=5&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}


export async function getImpresoras() {
    const respuesta = await fetch(`${process.env.API_URL}/impresoras?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}


export async function getImpresora(url) {
    const respuesta = await fetch(`${process.env.API_URL}/impresoras?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}
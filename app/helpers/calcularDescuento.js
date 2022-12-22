export function calcularDescuentoProducto(descuento, precio) {
    const calculoDescuento =  Math.round((14 * precio) / 100);
    const resultado = precio - calculoDescuento;
    return '$' + resultado;
}


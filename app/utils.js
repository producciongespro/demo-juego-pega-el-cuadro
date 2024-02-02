export function generarNumeros(limiteInferior, limiteSuperior, ) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

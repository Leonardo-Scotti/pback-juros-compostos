/******************************************************
 * Objetivo: Arquivo responsável por calcular o juros
 * Autor: Leonardo Scotti
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************/

function calcularMontanteFinal(capitalInicial, taxaDeJurosAnual, jurosAoAno, tempo) {

    let montante
    let p = capitalInicial
    let r = taxaDeJurosAnual
    let n = jurosAoAno
    let t = tempo

    montante = p * Math.pow((1 + (r / n)), (n * t))

    return montante
}
/******************************************************
 * Objetivo: Arquivo responsável por calcular o juros
 * Autor: Leonardo Scotti
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************/

function calcularMontanteFinal(capitalInicial, taxaDeJurosAnual, jurosAoAno, tempo) {

    let montante
    let p = Number(capitalInicial)
    let r = Number(taxaDeJurosAnual)
    let n = Number(jurosAoAno)
    let t = Number(tempo)

    montante = p * Math.pow((1 + (r / n)), (n * t))

    return montante
}
/******************************************************
 * Objetivo: Arquivo responsável por calcular o juros.
 * Autor: Leonardo Scotti
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************/

//Função que calcula o Montante Final
function calculateFinalAmount(startingCapital, annualInterestRate, timesAYear, time) {

    let amaount
    let p = Number(startingCapital)
    let r = Number(annualInterestRate)
    let n = Number(timesAYear)
    let t = Number(time)

    amaount = p * Math.pow((1 + (r / n)), (n * t))

    return Number(amaount).toFixed(2)
}

//Função que transforma um número Inteiro em Porcentagem
function calculateInterestPercentage(integerValue) {
    let value = Number(integerValue)

    let percentageValue = value / 100

    return Number(percentageValue)
}


module.exports = {
    calculateFinalAmount,
    calculateInterestPercentage
}
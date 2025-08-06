/******************************************************
 * Objetivo: Arquivo responsável por funções de saída.
 * Autor: Leonardo Scotti
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************/

//Função de mensagem de saída
function dataOutput(clientName, productName, startingCapital, timesAYear, finalAmount) {
    let name = clientName
    let product = productName
    let capital = Number(startingCapital)
    let times = Number(timesAYear)
    let amount = Number(finalAmount)

    let output = console.log('******************* VIVA MODA *******************\n',
        `Muito obrigado por realizar sua compra conosco Sr(a) ${name}.\n`,
        `A compra do produto ${product}, tem um valor de: R$${capital}.\n`,
        `A sua compra será parcelada em ${times} vezes e o Sr(a) pagará: R$${amount}`
    )

    return output
}

module.exports = {
    dataOutput
}
/*******************************************************************************
 * Objetivo: Criar um sistema que faz o calculo de juros compostos de um produto
 * Data: 05/08/2025
 * Autor: Leonardo Scotti
 * Versão: 1.0
 ******************************************************************************/

//Importando bibliotecas
const INTEREST = require('./module/interest.js')
const OUTPUT = require('./module/output.js')

const readline = require('readline')

//Criando constante para mensagens
const MESSAGE_ERROR_EMPTY = 'ERRO: É obrigatório o preenchimento de todas as informações! Reinicie o programa.'
const MESSAGE_ERROR_ALPHA_CHARACTERS = 'ERRO: Você deve digitar apenas caracteres alfabéticos! Reinicie o programa.'
const MESSAGE_ERROR_NUM_CHARACTERS = 'ERRO: Você deve digitar apenas caracteres numéricos! Reinicie o programa.'
const MESSAGE_ERROR_JUST_CHARACTERS = 'ERRO: Você não pode digitar apenas caracteres numéricos! Reinicie o programa.'
const MESSAGE_ERROR_LESS_THAN = 'ERRO: Você deve digitar valores maior do que 0! Reinicie o programa.'
const MESSAGE_ERROR_ZERO = 'ERRO: Você não pode digitar um valor menor ou igual a 0! Reinicie o programa.'

//Criando interface do readline
const dataEntry = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

dataEntry.question('Digite o nome do cliente: ', function(name) {
    let clientName = name.toUpperCase()

    //Verifica se está vazio
    if (clientName == '') {
        console.log(MESSAGE_ERROR_EMPTY)

        //Verifica se contém apenas caracteres alfabéticos
    } else if (!/^[a-zA-Z\u00C0-\u017F\s'-]+$/.test(clientName)) {
        console.log(MESSAGE_ERROR_ALPHA_CHARACTERS)
    } else {
        dataEntry.question('Digite o nome do produto: ', function(value) {
            let productName = value.toUpperCase()

            //Verifica se está vazio
            if (productName == '') {
                console.log(MESSAGE_ERROR_EMPTY)
            } else if (!isNaN(productName)) {
                console.log(MESSAGE_ERROR_JUST_CHARACTERS)
            } else {
                dataEntry.question('Digite o Capital Inicial: R$', function(capital) {
                    let startingCapital = Number(capital)

                    //Verifica se está vazio
                    if (startingCapital == '') {
                        console.log(MESSAGE_ERROR_EMPTY)
                    } else if (isNaN(startingCapital)) {
                        console.log(MESSAGE_ERROR_NUM_CHARACTERS)
                    } else if (startingCapital <= 0) {
                        console.log(MESSAGE_ERROR_LESS_THAN)
                    } else {
                        dataEntry.question('Digite a Taxa de Juros Anual: ', function(interestValue) {
                            let interest = Number(interestValue)

                            //Verifica se está vazio
                            if (interest == '') {
                                console.log(MESSAGE_ERROR_EMPTY)
                            } else if (isNaN(interest)) {
                                console.log(MESSAGE_ERROR_NUM_CHARACTERS)
                            } else {
                                let interestRate = INTEREST.calculateInterestPercentage(interest)

                                dataEntry.question('Digite quantas vezes ele será composto: ', function(times) {
                                    let timesAYear = Number(times)

                                    //Verifica se está vazio
                                    if (timesAYear == '') {
                                        console.log(MESSAGE_ERROR_EMPTY)
                                    } else if (isNaN(timesAYear)) {
                                        console.log(MESSAGE_ERROR_NUM_CHARACTERS)
                                    } else {
                                        dataEntry.question('E em quantos anos? ', function(year) {
                                            let time = year

                                            //Verifica se está vazio
                                            if (time == '') {
                                                console.log(MESSAGE_ERROR_EMPTY)
                                            } else if (isNaN(time)) {
                                                console.log(MESSAGE_ERROR_NUM_CHARACTERS)
                                            } else {
                                                let finalAmount = INTEREST.calculateFinalAmount(startingCapital, interestRate, timesAYear, time)

                                                let output = OUTPUT.dataOutput(clientName, productName, startingCapital, timesAYear, finalAmount)

                                                return output
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
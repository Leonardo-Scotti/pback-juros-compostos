/*******************************************************************************
 * Objetivo: Criar um sistema que faz o calculo de juros compostos de um produto
 * Data: 05/08/2025
 * Autor: Leonardo Scotti
 * Versão: 1.0
 ******************************************************************************/
const INTEREST = require('./module/interest.js')

const readline = require('readline')

const dataEntry = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

dataEntry.question('Digite o nome do cliente: ', function(name) {
    let clientName = name

    if (!/^[a-zA-Z\u00C0-\u017F\s'-]+$/.test(clientName)) {
        console.log('ERRO: O nome do cliente deve ser composto apenas por caracteres alfabéticos! Reinicie o programa.')
    } else {
        dataEntry.question('Digite o nome do produto: ', function(value) {
            let productName = value

            dataEntry.question('Digite o Capital Inicial: R$', function(capital) {
                let startingCapital = Number(capital)

                if (isNaN(startingCapital)) {
                    console.log('ERRO: Você deve digitar apenas caracteres numéricos! Reinicie o programa.')
                } else {
                    dataEntry.question('Digite a Taxa de Juros Anual: ', function(interestValue) {
                        let interest = Number(interestValue)

                        if (isNaN(interest)) {
                            console.log('ERRO: Você deve digitar apenas caracteres numéricos! Reinicie o programa.')
                        } else {
                            let interestRate = INTEREST.calculateInterestPercentage(interest)

                            dataEntry.question('Digite quantas vezes ele será composto por ano: ', function(times) {
                                let timesAYear = Number(times)

                                if (isNaN(timesAYear)) {
                                    console.log('ERRO: Você deve digitar apenas caracteres numéricos! Reinicie o programa.')
                                } else {
                                    dataEntry.question('E em quantos anos? ', function(year) {
                                        let time = year

                                        if (isNaN(time)) {
                                            console.log('ERRO: Você deve digitar apenas caracteres numéricos! Reinicie o programa.')
                                        } else {

                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        })
    }
})
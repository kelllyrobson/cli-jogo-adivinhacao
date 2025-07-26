import {number} from "@inquirer/prompts"

console.log("Boas vindas ao jogo de adivinhação!")

/* 
computador gera um numero aleatorio entre 1 e 100
jogador tem 7 tentativas para acertar

a cada tentativa o programa diz se o numero esta abaixo ou acima do escolhido

*/

const numeroAleatorio = Math.floor(Math.random() * 101)
let numeroTentativas = 7

while (numeroTentativas > 0) {

    let palpite = await number({message:"Digite um número de 0 a 100"})

    if (palpite === numeroAleatorio) {
        console.log("Parabéns, voce acertou!")
    } else if (palpite > numeroAleatorio) {
        console.log("Muito alto, tente um número menor")
    } else if (palpite < numeroAleatorio) {
        console.log("Muito baixo, tente um número maior")
    } else {
        console.log("Entrada não é um número válido")
    }

    numeroTentativas = numeroTentativas - 1
}

if (numeroTentativas === 0) {
    console.log(`Tentativas acabaram, o número era ${numeroAleatorio}`)
}

// 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")({})

const jogoLegalprakrl = () => {
    const randomChute = Math.ceil(Math.random() * 5)
    const chute = prompt("Chuta um número até 5, otário.\n")
    if (chute == randomChute) {
        console.log("N-não é possível, o otário é clarividente!\n")
    } else {
        console.log("Errou, otário.")
    }
}
jogoLegalprakrl()

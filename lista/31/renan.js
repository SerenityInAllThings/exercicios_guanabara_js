// 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const prompt = require('prompt-sync')({})

const jogodearrombado  = () => {
    const j1 = prompt(`Você é o jogador 1. Escolha entre pedra, papel ou tesoura`).toString();
    const j2 = prompt(`Você é o jogador 2. Escolha entre pedra, papel ou tesoura`).toString();
    let vitoriaJogador1 = j1 == "pedra" && j2 == "tesoura" || j1 == "papel" && j2 == "pedra" || j1 == "tesoura" && j2 == "papel"
    let vitoriaJogador2 = j2 == "pedra" && j1 == "tesoura" || j2 == "papel" && j1 == "pedra" || j2 == "tesoura" && j1 == "papel"
    if(vitoriaJogador1){
        console.log("O jogador 1 venceu a partida.")
    }else if (vitoriaJogador2){
        console.log("O jogador 2 venceu a partida.")
    }else {
        console.log("Empate!")
    }
}
jogodearrombado()

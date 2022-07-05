// 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const prompt = require('prompt-sync')({})

const gameJokenPo = () => {
    let primeiraRodada = prompt("Escolha uma jogada entre Pedra,Papel ou Tesoura: ").toUpperCase();
    let segundaRodada = prompt("Escolha uma jogada entre Pedra,Papel ou Tesoura: ").toUpperCase();
    if (primeiraRodada === segundaRodada){
        console.log ("Empate!")
    } else if (primeiraRodada === "PEDRA" && segundaRodada === "TESOURA" || primeiraRodada === "TESOURA" && segundaRodada === "PEDRA"){
        console.log ("Pedra venceu Tesoura!")
    } else if (primeiraRodada === "PEDRA" && segundaRodada === "PAPEL" || primeiraRodada === "PAPEL" && segundaRodada === "PEDRA"){
        console.log ("Papel venceu Pedra!")
    } else if (primeiraRodada === "PAPEL" && segundaRodada === "TESOURA" || primeiraRodada === "TESOURA" && segundaRodada === "PAPEL"){
        console.log ("Tesoura venceu Papel!") 
    } else if (primeiraRodada && segundaRodada != "PEDRA" || "PAPEL" || "TESOURA") {
        console.log ("Por favor, digite uma entre as opções Papel,Pedra,Tesoura.")
    }
}
gameJokenPo();







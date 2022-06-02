// 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
// jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')({})

const sortearNum = () => {
    let randomNumber = Math.ceil(Math.random() * 5)
    let reposta
    do {
    reposta = parseInt(prompt("Digite um valor entre 1~5 :"))
    if (reposta == randomNumber){
        console.log ("você acertou")
        return
    }  else {
        console.log ("tente novamente")
    }
    } while (reposta != randomNumber); 

}
sortearNum();
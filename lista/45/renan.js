// 44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!
// 45) O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

const prompt = require("prompt-sync")({})

const contarIncrementar = () => {
    let inicialContagem = parseInt(prompt("Insira o valor inicial da contagem."))
    let finalContagem = parseInt(prompt("Insira o valor final da contagem."))
    const incremento = parseInt(prompt("Insira o valor que será incrementado."))
    let temp
    if (finalContagem < inicialContagem) {
        temp = inicialContagem
        inicialContagem = finalContagem
        finalContagem = temp
        while (inicialContagem < finalContagem) {
            console.log(inicialContagem)
            inicialContagem += incremento
            if (inicialContagem > finalContagem) {
                console.log("Acabou!")
            }
        }
    }
}
contarIncrementar()

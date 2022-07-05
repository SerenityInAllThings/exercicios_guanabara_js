// 43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
// marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
// 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...

const prompt = require("prompt-sync")({})

const contarRegressivamente = () => {
    let index = 31
    while (index > 0) {
        index--
        console.log(index)
        if (index % 4 == 0 && index != 0) {
            console.log(index)
        }
    }
}
contarRegressivamente()

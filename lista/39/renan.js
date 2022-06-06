// 39) Faça um algoritmo que mostre na tela a seguinte contagem:
// 10 9 8 7 6 5 4 3 Acabou!
const contadorAcabou = () => {
    let n = 11
    while (n > 2) {
        n--
        console.log(n)
        if (n == 2) {
            console.log("Acabou!")
        }
    }
}
contadorAcabou()

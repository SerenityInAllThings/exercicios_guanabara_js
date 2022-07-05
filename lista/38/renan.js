// 38) Escreva um programa que mostre na tela a seguinte contagem:
// 6 7 8 9 10 11 Acabou!
const contadorAcabou = () => {
    let n = 5
    while (n < 12) {
        n++
        console.log(n)
        if (n == 12) {
            console.log("Acabou!")
        }
    }
}
contadorAcabou()

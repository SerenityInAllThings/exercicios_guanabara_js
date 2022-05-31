// 41) Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!

const contadorAcabou = () => {
    let n = 105
    while(n > 0){
        n = n - 5
        console.log(n)
        if(n == 0){
            console.log("Acabou!")
        }
    }
}
contadorAcabou()
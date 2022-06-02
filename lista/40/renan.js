// 40) Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

const contadorAcabou = () => {
    let n = -3
    while(n<19){
        n = n+3
        console.log(n)
        if(n == 18){
            console.log("Acabou!")
        }
    }
}
contadorAcabou()
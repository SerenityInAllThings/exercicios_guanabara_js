const prompt = require('prompt-sync')({})

const lerDistancia = () =>{
    const distancia = parseFloat(prompt('Digite distancia em metros: '))

    const Km = distancia/1000
    const Hm = distancia/100
    const Dam = distancia/10
    const dm = distancia*10
    const cm = distancia*100
    const mm = distancia*1000

    console.log('A distancia de',distancia,'corresponde a:')
    console.log(`
    ${Km} Km
    ${Hm} Hm
    ${Dam} Dam
    ${dm} dm
    ${cm} cm
    ${mm} mm`)

}
lerDistancia()
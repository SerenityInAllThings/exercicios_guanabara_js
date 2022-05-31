// Write a JavaScript function to split a string and convert it into an array of words
// Escrever uma função que separe uma string em um array contendo os valores separados por espaço
// Por exemplo
// splitBySpace("meu texto com espaços") === ["meu", "texto", "com", "espaços"] // true

// bota pra mama geral

function splitBySpace (valor){
    if (valor === undefined)  {
        return undefined
    }
    const resultado = valor.split(" ")
    return resultado
}

let result = splitBySpace('meu teste')
console.log(result)

result = splitBySpace('meu_teste')
console.log(result)

result = splitBySpace('')
console.log(result)

result = splitBySpace('minha string for grande')
console.log(result)

result = splitBySpace()
console.log(result)

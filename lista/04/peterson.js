const prompt = require("prompt-sync")()

const askPositiveInteger = (question) => {
    let answer
    do {
        if (answer) console.log(`Invalid number '${answer}'.`)
        answer = prompt(question)
    } while (isNaN(answer))
    return parseInt(answer)
}

const askAndSumNumbers = () => {
    const firstNumber = askPositiveInteger(`Type the first number: `)
    const secondNumber = askPositiveInteger(`Type the second number: `)
    const sum = firstNumber + secondNumber
    console.log(`The sum between ${firstNumber} and ${secondNumber} is ${sum}.`)
}
askAndSumNumbers()

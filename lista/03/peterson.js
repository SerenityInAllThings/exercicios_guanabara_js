const prompt = require("prompt-sync")()

const isNotNumeric = (text) =>
    text
        .split("")
        .filter((c) => c !== " ")
        .every(isNaN)

const hasContent = (text) => text != null && text.length > 0

const isNameValid = (name) => hasContent(name) && isNotNumeric(name)

const askName = () => {
    let name
    do {
        if (name) console.log(`Invalid name. Nobody's called ${name}`)

        name = prompt("What is your name? ")
    } while (!isNameValid(name))
    return name
}

const sanitizeNumericString = (text) => text.replace(",", ".")

const isValidPositiveNumber = (number) => {
    const isNumeric = !isNaN(number)
    const isPositive = Number(number) > 0
    return isNumeric && isPositive
}

const askRealPositiveNumber = (question) => {
    let answer
    do {
        if (answer) console.log(`Invalid number '${answer}'.`)
        answer = sanitizeNumericString(prompt(question))
    } while (!isValidPositiveNumber(answer))
    return Number(answer)
}

const askIncome = () => askRealPositiveNumber("What is your income? ")

const displayEmployeeInfo = () => {
    const name = askName()
    const income = askIncome()
    console.log(`The employee ${name} has $${income} monthly income.`)
}
displayEmployeeInfo()

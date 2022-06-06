// 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

// Write a JavaScript function to check whether an `input` is a string or not
// Já que devemos retornar se o valor é uma string ou não, podemos representar isso com um
// Booleano (true ou false)
function isString(valorIndeterminado) {
  let tipo = typeof valorIndeterminado;
  // return result
  if (tipo == "string") {
    return true;
  } else {
    return false;
  }
}

let ehString = isString();
console.log(ehString);
ehString = isString("texto");
console.log(ehString);
ehString = isString(10);
console.log(ehString);
ehString = isString({});
console.log(ehString);
ehString = isString([]);
console.log(ehString);

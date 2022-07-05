/* 4) Desenvolva um algoritmo que leia dois números inteiros e mostre 
o somatório entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.*/

const prompt = require("prompt-sync")({});

const lerNumeroInteiro = () => {
  const numero1 = parseInt(prompt("Valor 1:"));
  const numero2 = parseInt(prompt("Valor 2:"));
  const somaNum1_2 = numero1 + numero2;

  console.log("A soma entre", numero1, "e", numero2, "é igual a", somaNum1_2);
};
lerNumeroInteiro();

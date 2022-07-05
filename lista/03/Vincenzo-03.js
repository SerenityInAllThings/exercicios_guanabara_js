/* 3) Crie um programa que leia o nome e o salário de um funcionário, 
mostrando no final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.*/

const prompt = require("prompt-sync")({});

const lerPeso = () => {
  const nomeFuncionario = prompt("Nome do Funcionario:");
  const replaceString = prompt("Salario do Funcionario:").replace(",", ".");
  const salarioFuncionario = parseFloat(replaceString);

  console.log(
    "O funcionário",
    nomeFuncionario,
    "tem um salário de de",
    "$" + salarioFuncionario.toString().replace(",", "."),
    "em Junho."
  );
};
lerPeso();

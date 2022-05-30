/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de 
boas-vindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer! */

const prompt = require("prompt-sync")({});

const lerNome = () => {
  const Nome = prompt("Qual é o seu nome?");
  console.log("Olá", Nome, ", é um prazer te conhecer!");
};
lerNome();

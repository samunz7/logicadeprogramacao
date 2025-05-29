let idade = 22
if (idade >= 18){
    console.log("maior idade")
}
else {
    console.log("menor idade")
}

//2 

let horas = 5
if (horas >= 6 && horas < 12){
    console.log("bom dia")
}
else if (horas >= 13 && horas < 18){
    console.log("boa tarde")
}
else{
    console.log("boa noite")
}

//3

let idade = 15
if (idade >= 16){
    console.log("acesso liberado")
}
else if (idade < 16){
    console.log("acesso negado")
}

//4

let valor1 = prompt("Escolha seu primeiro valor: ");
let valor2 = prompt("Escolha seu segundo valor: ");

if (valor1 > valor2) {
  console.log("O primeiro valor é superior ao segundo");
} else if (valor1 < valor2) {
  console.log("O segundo valor é superior ao primeiro");
} else {
  console.log("Os dois valores são iguais");
}

//5

let temperatura = 35;

if (temperatura <= 20) {
  console.log("Frio");
} else if (temperatura >= 25) {
  console.log("Quente");
} else if (temperatura >= 21 && temperatura < 25) {
  console.log("Térmico");
}

//6

let palavra = prompt("Digite uma palavra: ");

if (palavra === "Felicidade") {
  console.log("Palavra correta");
} else {
  console.log("Palavra incorreta");
}

//7

let moedas = prompt("Digite a sua quantidade de moedas: ");

if (moedas >= 1 && moedas < 10) {
  console.log("Poucas moedas");
} else if (moedas >= 10 && moedas < 20) {
  console.log("Quantidade média");
} else {
  console.log("Muitas moedas");
}

//8

let temperatura = prompt("Digite a temperatura: ");

if (temperatura < 20) {
  console.log("Frio");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("Calor");
} else {
  console.log("Muito quente");
}

//9

let numero = prompt("Digite um valor: ");

if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Positivo");
}

//10

let nota = prompt("Digite a nota: ");

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//11

let animal = "peixe";

if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  console.log("Animal listado");
} else {
  console.log("Animal não listado");
}

//12

let diaSemana = "sabado";

if (diaSemana === "sabado" || diaSemana === "domingo") {
  console.log("Fim de semana");
} else {
  console.log("Dia útil");
}

//13

let experiencia = 1;

if (experiencia > 2) {
  console.log("Experiente");
} else {
  console.log("Iniciante");
}

//14

let numero = 15;

if (numero >= 10 && numero <= 20) {
  console.log("Dentro do intervalo");
} else {
  console.log("Fora do intervalo");
}

//15

let idadeCNH = 16;

if (idadeCNH >= 18) {
  console.log("Pode tirar carteira de motorista");
} else {
  console.log("Não pode tirar carteira de motorista");
}

//16

let valor = -3;

if (valor > 0) {
  console.log("Positivo");
} else if (valor < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

//17

let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 1
console.log("Em que ano o Messi ganhou a primeira bola de ouro?");
console.log("A - 1945");
console.log("B - 2011");
console.log("C - 2009");
console.log("D - 2007");

let pergunta1 = prompt("Digite a resposta: ");

if (pergunta1 === "C" || pergunta1 === "2009") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//18

// Pergunta 2
console.log("Em que ano o CR7 ganhou a primeira bola de ouro?");
console.log("A - 1945");
console.log("B - 2011");
console.log("C - 2008");
console.log("D - 2007");

let pergunta2 = prompt("Digite a resposta: ");

if (pergunta2 === "C" || pergunta2 === "2008") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//19

// Pergunta 3
console.log("Em que ano o Neymar ganhou a bola de ouro?");
console.log("A - 2007");
console.log("B - 2011");
console.log("C - 2016");
console.log("D - não ganhou a bola de ouro");

let pergunta3 = prompt("Digite a resposta: ");

if (pergunta3 === "D" || pergunta3 === "não ganhou a bola de ouro") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//20

// Pergunta 4
console.log("Em que ano o Neymar ganhou os Jogos Olímpicos?");
console.log("A - 2010");
console.log("B - 2017");
console.log("C - 2016");
console.log("D - todos os anos");
let pergunta4 = prompt("Digite a resposta: ");
if (pergunta4 === "C" || pergunta4 === "2016") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//21

// Pergunta 5
console.log("Quem faz as camisas do Corinthians?");
console.log("A - Puma");
console.log("B - Adidas");
console.log("C - Nike");
console.log("D - Umbro");
let pergunta5 = prompt("Digite a resposta: ");
if (pergunta5 === "C" || pergunta5.toLowerCase() === "nike") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//22

// Pergunta 6
console.log("Quem faz as camisas do Palmeiras?");
console.log("A - Puma");
console.log("B - Adidas");
console.log("C - Nike");
console.log("D - Umbro");
let pergunta6 = prompt("Digite a resposta: ");
if (pergunta6 === "A" || pergunta6.toLowerCase() === "puma") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//23

// Pergunta 7
console.log("Quem ganhou a Super Bola de Ouro?");
console.log("A - Di Stéfano");
console.log("B - Pelé");
console.log("C - Maradona");
console.log("D - Romário");
let pergunta7 = prompt("Digite a resposta: ");
if (pergunta7 === "A" || pergunta7.toLowerCase() === "di stefano") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//24

// Pergunta 8
console.log("Quem ganhou o Puskás de 2018?");
console.log("A - CR7");
console.log("B - Salah");
console.log("C - Messi");
console.log("D - Mané");
let pergunta8 = prompt("Digite a resposta: ");
if (pergunta8 === "B" || pergunta8.toLowerCase() === "salah") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//25

// Pergunta 9
console.log("Quem ganhou a Copa de 2006?");
console.log("A - Cannavaro");
console.log("B - Buffon");
console.log("C - Maldini");
console.log("D - Todas as opções");
let pergunta9 = prompt("Digite a resposta: ");
if (pergunta9 === "D" || pergunta9.toLowerCase() === "todas as opções") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

//26

// Pergunta 10
console.log("Quem fez o gol do título da Copa de 2010?");
console.log("A - Xavi");
console.log("B - Iniesta");
console.log("C - Piqué");
console.log("D - Nenhuma opção");
let pergunta10 = prompt("Digite a resposta: ");
if (pergunta10 === "B" || pergunta10.toLowerCase() === "iniesta") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Resultado final
console.log("\nResumo final:");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);

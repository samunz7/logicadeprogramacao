let idade = 27;
let categoria;

if (idade < 12) {
  categoria = "criança";
} else if (idade >= 12 && idade <= 18) {
  categoria = "adolescente";
} else if (idade > 18 && idade < 60) {
  categoria = "adulto";
} else if (idade >= 60) {
  categoria = "idosa";
} else {
  categoria = "não especificada";
}

console.log("Categoria: " + categoria);
console.log("Idade final: " + idade);

// Se a variável (idade) for < 12 será "criança",
// se for >= 12 e <= 18 será "adolescente",
// se for > 18 e < 60 será "adulto",
// se for >= 60 será "idosa".

//

let idade = 15;

if (idade < 16) {
  console.log("Não vota");
} else if (idade >= 16 && idade < 18) {
  console.log("Voto facultativo");
} else if (idade >= 18 && idade <= 70) {
  console.log("Voto obrigatório");
} else if (idade > 70) {
  console.log("Voto facultativo");
}

// Se a variável (idade) for < 16, você "Não vota".
// Se for >= 16 e < 18, "Voto facultativo".
// Se for >= 18 e <= 70, "Voto obrigatório".
// Se for > 70, "Voto facultativo".

//

let numero = 76;

if (numero === 0) {
    console.log("Zero");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Positivo");
}

//

let combustivel = "Gasolina";

if (combustivel === "Álcool") {
    console.log("Você escolheu Álcool");
} else if (combustivel === "Gasolina") {
    console.log("Você escolheu Gasolina");
} else if (combustivel === "Diesel") {
    console.log("Você escolheu Você Diesel");
} else {
    console.log("Opção inválida");
}

//

let velocidade = 75;

if (velocidade >= 61 && velocidade <= 80) {
    console.log("Atenção");
} else if (velocidade <= 60) {
    console.log("Dentro do limite");
} else {
    console.log("Multado");
}

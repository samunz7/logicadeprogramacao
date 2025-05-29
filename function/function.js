function somarNumeros(a, b) {
  return a + b;
}

function MultiNumeros(a, b) {
  return a * b;
}

function DiviNumeros(a, b) {
  if (b === 0) {
    return "Não tem como dividir por 0";
  }
  return a / b;
}

function MenosNumeros(a, b) {
  return a - b;
}

let numero1 = Number(prompt("Digite o número 1:"));
let numero2 = Number(prompt("Digite o número 2:"));
let escolha = prompt("\nSoma\nMultiplicação\nDivisão\nSubtração\nEscolha sua operação: ");

let resultado;

switch (escolha) {
  case "Soma":
    resultado = somarNumeros(numero1, numero2);
    break;
  case "Multiplicação":
    resultado = MultiNumeros(numero1, numero2);
    break;
  case "Divisão":
    resultado = DiviNumeros(numero1, numero2);
    break;
  case "Subtração":
    resultado = MenosNumeros(numero1, numero2);
    break;
  default:
    resultado = "Operação inválida";
}

console.log("O resultado é: ", resultado);

//

// Lista de usuários e senhas em um objeto
const usuarios = {
  "antonella": "braga",
  "liz": "macedo",
  "sofia": "espanha",
  "juju": "pimental",
  "bolzani": "bbzão",
  "angelotti": "bocainchada",
  "sophia": "bianco",
  "soso": "careca",
  "camila": "araujo",
  "sophia2": "rain" // Para evitar duplicação de chave
};

// Solicita as credenciais do usuário
let pergunta1 = prompt("Digite o email de usuário:");
let pergunta2 = prompt("Digite a senha:");

// Função para verificar login
function verificar(login, senha) {
  if (usuarios[login] && usuarios[login] === senha) {
    return "Acesso liberado";
  } else {
    return "Acesso negado";
  }
}

let resultado = verificar(pergunta1, pergunta2);
console.log(resultado);

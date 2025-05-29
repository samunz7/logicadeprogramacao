let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 1
console.log("Pessoa mais rica do mundo?");
console.log("A - Elon Musk");
console.log("B - Bill Gates");
console.log("C - Bernard Arnault");
console.log("D - Mark Zuckerberg");
let pergunta1 = prompt("Digite a alternativa: ");

switch (pergunta1) {
  case "C":
  case "c":
  case "Bernard Arnault":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 2
console.log("Carro mais rápido do mundo?");
console.log("A - Gol quadrado");
console.log("B - Bugatti Chiron Super Sport 300+");
console.log("C - Hennessey Venom F5");
console.log("D - Koenigsegg Jesko Absolut");
let pergunta2 = prompt("Digite a alternativa: ");

switch (pergunta2) {
  case "D":
  case "d":
  case "Koenigsegg Jesko Absolut":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 3
console.log("Carro mais caro do mundo?");
console.log("A - Rolls-Royce La Rose Noire Droptail");
console.log("B - Mercedes-Maybach Exelero");
console.log("C - Bugatti La Voiture Noire");
console.log("D - Bugatti Type Boat Tail");
let pergunta3 = prompt("Digite a alternativa: ");

switch (pergunta3) {
  case "A":
  case "a":
  case "Rolls-Royce La Rose Noire Droptail":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 4
console.log("Marca mais valiosa do mundo?");
console.log("A - Apple");
console.log("B - Microsoft");
console.log("C - Amazon");
console.log("D - Walmart");
let pergunta4 = prompt("Digite a alternativa: ");

switch (pergunta4) {
  case "A":
  case "a":
  case "Apple":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 5
console.log("Marca de roupa mais valiosa do mundo?");
console.log("A - Louis Vuitton");
console.log("B - Nike");
console.log("C - Gucci");
console.log("D - Zara");
let pergunta5 = prompt("Digite a alternativa: ");

switch (pergunta5) {
  case "B":
  case "b":
  case "Nike":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 6
console.log("Qual a cor mais usada no mundo?");
console.log("A - amarelo");
console.log("B - vermelho");
console.log("C - verde");
console.log("D - azul");
let pergunta1 = prompt("Digite a alternativa: ");

switch (pergunta1.toLowerCase()) {
  case "d":
  case "azul":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 7
console.log("O que significa high ground?");
console.log("A - alto terreno");
console.log("B - terreno alto");
console.log("C - terreno elevado");
console.log("D - terreno alto");
let pergunta2 = prompt("Digite a alternativa: ");

switch (pergunta2.toLowerCase()) {
  case "c":
  case "terreno elevado":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 8
console.log("O que significa dropar?");
console.log("A - derrubar");
console.log("B - cair");
console.log("C - soltar");
console.log("D - largar");
let pergunta3 = prompt("Digite a alternativa: ");

switch (pergunta3.toLowerCase()) {
  case "d":
  case "largar":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Pergunta 9
console.log("O que significa HS?");
console.log("A - High School");
console.log("B - hora somi");
console.log("C - Headshot");
console.log("D - Haha, sim");
let pergunta4 = prompt("Digite a alternativa: ");

switch (pergunta4.toLowerCase()) {
  case "c":
  case "headshot":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

//pergunta10

console.log("O que significa 'one shot'?");
console.log("A - Gravada em um único plano-sequência");
console.log("B - História completa em uma única edição");
console.log("C - Quando você mata (ou é morto) com um único ataque ou tiro");
console.log("D - Um tiro só");
let pergunta = prompt("Digite a alternativa: ");

switch (pergunta.toLowerCase()) {
  case "c":
  case "quando você mata (ou é morto) com um único ataque ou tiro":
    console.log("Resposta Correta");
    respostaCorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaIncorreta++;
    break;
}

// Exibir o resumo final
console.log("\nResumo Final");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);

//

// Questão 1
let idiomaEscolhido = prompt("Português \nInglês \nEspanhol \nFrancês \nAlemão \nEscolha um idioma:");
idiomaEscolhido = idiomaEscolhido.toLowerCase();

switch (idiomaEscolhido) {
  case "português":
    console.log("Olá! Como vai você?");
    break;
  case "inglês":
    console.log("Hello! How are you?");
    break;
  case "espanhol":
    console.log("¡Hola! ¿Cómo estás?");
    break;
  case "francês":
    console.log("Bonjour ! Comment ça va ?");
    break;
  case "alemão":
    console.log("Hallo! Wie geht es dir?");
    break;
  default:
    console.log("Desculpe, idioma não suportado.");
}

// Questão 2
let dias = Number(prompt("\nEscolha o dia da semana em números:"));
switch (dias) {
  case 1:
    console.log("O dia da semana é domingo");
    break;
  case 2:
    console.log("O dia da semana é segunda-feira");
    break;
  case 3:
    console.log("O dia da semana é terça-feira");
    break;
  case 4:
    console.log("O dia da semana é quarta-feira");
    break;
  case 5:
    console.log("O dia da semana é quinta-feira");
    break;
  case 6:
    console.log("O dia da semana é sexta-feira");
    break;
  case 7:
    console.log("O dia da semana é sábado");
    break;
  default:
    console.log("Esse dia não existe");
}

// Questão 3
let transporte = Number(prompt("\n1- Avião \n2- Lancha \n3- Carro \nEscolha seu veículo:"));
switch (transporte) {
  case 1:
    console.log("Esse transporte é aéreo");
    break;
  case 2:
    console.log("Esse transporte é aquático");
    break;
  case 3:
    console.log("Esse transporte é terrestre");
    break;
}

// Questão 4
let urgencia = Number(prompt("\n1- Cortei o dedo \n2- Perdi o dedo \n3- Perdi a mão \nEscolha o que aconteceu:"));
switch (urgencia) {
  case 1:
    console.log("Esse acidente é nível 1");
    break;
  case 2:
    console.log("Esse acidente é nível 2");
    break;
  case 3:
    console.log("Esse acidente é nível 3");
    break;
}

// Questão 5
let veiculo = Number(prompt("\n1- Toyota Corolla Cross \n2- Chevrolet Onix \n3- Volvo FH 540 \nEscolha o seu veículo:"));
switch (veiculo) {
  case 1:
    console.log("Seu veículo é um SUV");
    break;
  case 2:
    console.log("Seu veículo é um Compacto");
    break;
  case 3:
    console.log("Seu veículo é um caminhão");
    break;
}

// Questão 6
let tempo = Number(prompt("\n1- < 1 hora \n2- > 1 hora \n3- > 2 horas \nQual o tempo que você ficou estacionado?"));
switch (tempo) {
  case 1:
    console.log("Você terá que pagar 15 reais");
    break;
  case 2:
    console.log("Você terá que pagar 25 reais");
    break;
  case 3:
    console.log("Você terá que pagar 35 reais");
    break;
}

// Questão 7
let dificuldade = Number(prompt("\n1- Fácil \n2- Médio \n3- Difícil \n4- Impossível \nEscolha sua dificuldade:"));
switch (dificuldade) {
  case 1:
    console.log("Sua dificuldade será fácil");
    break;
  case 2:
    console.log("Sua dificuldade será média");
    break;
  case 3:
    console.log("Sua dificuldade será difícil");
    break;
  case 4:
    console.log("Sua dificuldade será impossível");
    break;
}

// Questão 8
let servicos = Number(prompt("\n1- Musculação \n2- Yoga \n3- Personal Trainer \nQual serviço você deseja?"));
switch (servicos) {
  case 1:
    console.log("Você tem acesso à musculação");
    break;
  case 2:
    console.log("Você tem acesso ao yoga");
    break;
  case 3:
    console.log("Você tem acesso ao personal trainer");
    break;
}

// Questão 9
let cinema = Number(prompt("\n1- Meia entrada \n2- Estudante \n3- Inteira \nQual ingresso você deseja?"));
switch (cinema) {
  case 1:
    console.log("Tudo bem, uma meia entrada é 20 reais");
    break;
  case 2:
    console.log("Tudo bem, um de estudante é 25 reais");
    break;
  case 3:
    console.log("Tudo bem, uma inteira é 50 reais");
    break;
}

// Questão 10
let academia = Number(prompt("\n1- Leg press \n2- Supino reto com barra ou halteres \n3- Crossover \nQual exercício você vai fazer?"));
switch (academia) {
  case 1:
    console.log("Esse exercício tem uma dificuldade 1");
    break;
  case 2:
    console.log("Esse exercício tem uma dificuldade 2");
    break;
  case 3:
    console.log("Esse exercício tem uma dificuldade 3");
    break;
}

// Questão 11
let musical = Number(prompt("\nQual seu gênero musical? \n1- Rock \n2- Hip hop \n3- Pagode"));
switch (musical) {
  case 1:
    console.log("Seu instrumento será guitarra elétrica");
    break;
  case 2:
    console.log("Seu instrumento será samples");
    break;
  case 3:
    console.log("Seu instrumento será cavaquinho");
    break;
}

// Questão 12
let cursos = Number(prompt("\n1- Front-end \n2- Back-end \n3- Mobile \nQual curso você deseja?"));
switch (cursos) {
  case 1:
    console.log("Você foi inscrito no curso de Front-end");
    break;
  case 2:
    console.log("Você foi inscrito no curso de Back-end");
    break;
  case 3:
    console.log("Você foi inscrito no curso de Mobile");
    break;
}

// Questão 13
let idade = Number(prompt("\n1- Jovem \n2- Adulto \n3- Idoso \nQual se encaixa melhor com você?"));
switch (idade) {
  case 1:
    console.log("Seu nível é muito bom");
    break;
  case 2:
    console.log("Seu nível é bom");
    break;
  case 3:
    console.log("Seu nível é ruim");
    break;
}

// Questão 14
let desafios = Number(prompt("\n1- Adição \n2- Multiplicação \n3- Fatorial \nQual você deseja?"));
switch (desafios) {
  case 1:
    console.log("Esse desafio é básico");
    break;
  case 2:
    console.log("Esse desafio é intermediário");
    break;
  case 3:
    console.log("Esse desafio é avançado");
    break;
}

// 

console.log("Qual você deseja ? \n 1- Terminal linux \n 2- Windows CMD");
let terminal = Number(prompt("Digite a sua opção :"));
if (terminal === 1) {
  console.log("\nVocê escolheu o terminal linux");
  let comandos = prompt("Digite o código que você deseja saber mais : ");
  switch (comandos) {
    case "mkdir":
      console.log("\nO comando mkdir no Linux serve para criar pastas pelo terminal.\nEX: mkdir projetos");
      break;
    case "ls":
      console.log("\nO comando ls no Linux é usado para listar arquivos e pastas dentro do diretório atual no terminal.\nEX: ls");
      break;
    case "cd e cd..":
      console.log("\nO comando cd no Linux é usado para navegar entre pastas no terminal, agora se quiser voltar para a pasta anterior, você usa cd ..\nEX: cd projetos\nEX: cd ..");
      break;
    case "rm":
      console.log("\nO comando rm no Linux é usado para remover (apagar) arquivos pelo terminal.\nEX: rm texto.txt");
      break;
    case "clear":
      console.log("\nO comando clear no Linux serve para limpar a tela do terminal.\nEX: clear");
      break;
    case "cp":
      console.log("\nO comando cp no Linux é usado para copiar arquivos ou pastas de um lugar para outro pelo terminal.\nEX: cp relatorio.txt documentos/");
      break;
    case "mv":
      console.log("\nO comando mv no Linux é usado para mover ou renomear arquivos e pastas.\nEX: mv texto.txt documentos/");
      break;
    case "cat":
      console.log("\nO comando cat no Linux é utilizado para exibir o conteúdo de arquivos de texto no terminal.\nEX: cat texto.txt");
      break;
    case "echo":
      console.log("\nO comando echo no Linux é usado para imprimir mensagens ou valores no terminal.\nEX: echo Bem-vindo ao sistema!");
      break;
    default:
      console.log("\nEsse comando não está nos registros");
  }
} else if (terminal === 2) {
  console.log("\nVocê escolheu Windows CMD");
  let comandos2 = prompt("Digite o código que você deseja saber mais : ");
  switch (comandos2) {
    case "mkdir":
      console.log("\nCria uma pasta chamada projetos no local atual.\nEX: mkdir projetos");
      break;
    case "dir":
      console.log("\nMostra os arquivos e subpastas existentes no diretório atual.\nEX: dir");
      break;
    case "cd e cd..":
      console.log("\nO primeiro entra na pasta documentos. O segundo volta para a pasta anterior.\nEX: cd documentos , cd ..");
      break;
    case "del":
      console.log("\nRemove o arquivo texto.txt do local atual.\nEX: del texto.txt");
      break;
    case "cls":
      console.log("\nLimpa todos os comandos e textos visíveis no CMD, deixando a tela zerada.\nEX: cls");
      break;
    case "echo":
      console.log("\nO primeiro comando exibe o texto Olá, mundo! na tela.\nO segundo escreve a frase no arquivo texto.txt (criando ou substituindo).\nEX: echo Olá, mundo! \n echo Essa é uma linha de teste > texto.txt");
      break;
    case "copy":
      console.log("\nCopia o arquivo dados.txt para a pasta backup.\nEX: copy dados.txt backup");
      break;
    case "move":
      console.log("\nO primeiro move o arquivo para outra pasta.\nO segundo muda o nome do arquivo de antigo.txt para novo.txt.\nEX: move relatório.docx documentos\n move antigo.txt novo.txt");
      break;
    case "rmdir":
      console.log("\nO primeiro remove uma pasta vazia.\nO segundo apaga uma pasta com todos os arquivos dentro (atenção!).\nEX: rmdir testes\n rmdir /s arquivos_antigos");
      break;
    case "exit":
      console.log("\nEncerra a sessão do Prompt de Comando (CMD).\nEX: exit");
      break;
    default:
      console.log("Esse comando não está nos registros");
  }
} else {
  console.log("\nNão temos esse terminal no sistema");
}


const p1Cover = document.querySelector(".initial-page");
const p2Questions = document.querySelector(".question-container-master");
const p3ShowResults = document.querySelector(".show-results");
const p4Results = document.querySelector(".result-page");
const p5Answers = document.querySelector(".right-answers");

//Start BTN

const startBtn = document.createElement("button");
startBtn.style.display = "flex";
startBtn.type = "button";
startBtn.className = "btn";
startBtn.id = "start-btn";
startBtn.textContent = "Começar";

startBtn.addEventListener("click", () => {
  p1Cover.style.display = "none";
  p2Questions.style.display = "block";
  p3ShowResults.style.display = "none";
  p4Results.style.display = "none";
  p5Answers.style.display = "none";
});

//Show Results BTN

const showResultsBtn = document.createElement("button");
showResultsBtn.style.display = "flex";
showResultsBtn.type = "button";
showResultsBtn.className = "btn";
showResultsBtn.id = "show-results-btn";
showResultsBtn.textContent = "Ver o Resultado!";
p3ShowResults.appendChild(showResultsBtn);

showResultsBtn.addEventListener("click", () => {
  p1Cover.style.display = "none";
  p2Questions.style.display = "none";
  p3ShowResults.style.display = "none";
  p4Results.style.display = "block";
  p5Answers.style.display = "none";
});

//fazer o back button voltar

function restoreAnswer(index) {
  const questionName = index; // Supondo que o index seja o nome do grupo de radio buttons
  const inputs = document.querySelectorAll(`input[name="${questionName}"]`);
  inputs.forEach((input) => {
    if (input.value === selectedAnswers[index]) {
      input.checked = true;
    }
  });
}

// Função para mostrar uma pergunta específica
function showQuestion(index) {
  allQuestions.forEach((container, idx) => {
    container.style.display = idx === index ? "block" : "none";
  });
  restoreAnswer(index);
}

// Função para voltar à pergunta anterior
function backBtnAction() {
  if (currentQuestion > 0) {
    currentQuestion--; // Decrementa o índice da pergunta atual
    showQuestion(currentQuestion);
  }
}

// Mostrar a cover page e esconder as outras seções
document.addEventListener("DOMContentLoaded", () => {
  p1Cover.style.display = "block";
  p2Questions.style.display = "none";
  p3ShowResults.style.display = "none";
  p4Results.style.display = "none";
  p5Answers.style.display = "none";
});

// --------> COVER PAGE

const pageTitle = document.createElement("h1");
pageTitle.style.display = "flex";
pageTitle.className = "page-title";
pageTitle.style.justifyContent = "center";
pageTitle.style.alignItems = "center";
pageTitle.style.flexDirection = "column";
pageTitle.textContent = "Você é um Rio-Pardense Raiz?";

const imgTitle = document.createElement("img");
imgTitle.style.display = "flex";
imgTitle.className = "img";
imgTitle.id = "img-title";
imgTitle.src = "image.png";
imgTitle.style.justifyContent = "center";
imgTitle.style.width = "300px";
imgTitle.style.height = "200px";
imgTitle.style.borderRadius = "8px";

const pageSubTitle = document.createElement("h2");
pageSubTitle.style.display = "flex";
pageSubTitle.className = "page-subtitle";
pageSubTitle.style.justifyContent = "center";
pageSubTitle.style.alignItems = "center";
pageSubTitle.style.flexDirection = "column";
pageSubTitle.textContent =
  "Faça o teste e veja se você conhece a história de Ribas do Rio Pardo!";

p1Cover.appendChild(pageTitle);
p1Cover.appendChild(imgTitle);
p1Cover.appendChild(pageSubTitle);
p1Cover.appendChild(startBtn);

///QUESTION BODY

// -------> perguntas do quizz
let quizz = [
  {
    qNumber: 0,
    qImg: "q0ferrovia.jpeg",
    question: "Qual o ano que Ribas do Rio Pardo se tornou um município?",
    options: [1921, 1958, 1949, 1944],
    answer: 3,
    comment:
      "Ribas do Rio Pardo é elevada à categoria de município com a denominação de Ribas do Rio Pardo, por Decreto-Lei Estadual nº 545, de 31-12-1943, desmembrado de Campo Grande e Três Lagoas. O decreto lei é instalado oficialmente em 19/03/1944.",
  },
  {
    qNumber: 1,
    qImg: "q1prefeito.png",
    question: "Quem foi o primeiro prefeito de Ribas do Rio Pardo?",
    options: [
      "José Domingues Ramos",
      "Horácio Lemos",
      "José Miguel Sanches Vigilato",
      "Rachid Abes",
    ],
    answer: 1,
    comment: "O primeiro prefeito de Ribas do Rio Pardo foi Horácio Lemos.",
  },
  {
    qNumber: 2,
    qImg: "q2ferrovia.jpg",
    question:
      "Qual era o nome da companhia responsável pela construção da ferrovia que cruzava Ribas?",
    options: ["ALL", "Ferrovia Norte-Sul", "RFFSA", "MRS"],
    answer: 2,
    comment:
      "A Rede Ferroviária Federal Sociedade Anônima (RFFSA), também conhecida pelo acrônimo 'Refesa', foi uma empresa estatal brasileira de transporte ferroviário que cobria boa parte do território brasileiro, criada em 1957 e sediada no Rio de Janeiro. A empresa foi formada pela união de vários frentes ferroviárias que já existiam. Entre elas, a Estrada de Ferro Noroeste do Brasil (NOB). A Estrada de Ferro Noroeste do Brasil (NOB) era uma companhia ferroviária brasileira que operava uma rede ferroviária de bitola métrica (um metro de distância entre os trilhos) com extensão de 1622 quilômetros, construída na primeira metade do século XX. Sua linha-tronco vai de Bauru até Corumbá, na divisa com a Bolívia, onde faz integração com a rede ferroviária boliviana até Santa Cruz de la Sierra.  ",
  },
  {
    qNumber: 3,
    qImg: "q3capital.jpg",
    question: "Ribas ficou conhecida como a Capital...",
    options: ["...da Soja", "...do Ferro", "...da Cachara", "...do Gado"],
    answer: 3,
    comment:
      "Ribas ficou conhecida como a Capital do Gado. Para ilustrar a grandiosidade do nosso rebanho, o censo de 2017 indicou que, à época, Ribas possuía o segundo maior rebanho do Estado e o terceiro maior do Brasil, com 1,1 milhão de cabeças de gado. Perdia somente para São Félix do Xingu-PA (2,2 milhões de cabeças) e Corumbá-MS (1,9 milhão de cabeças de gado).",
  },
  {
    qNumber: 4,
    qImg: "q4divisa.png",
    question: "Quais municípios fazem divisa com Ribas do Rio Pardo?",
    options: [
      "Água Clara, Campo Grande, Nova Alvorada do Sul, Santa Rita do Pardo e Três Lagoas",
      "Água Clara, Campo Grande, Brasilândia, Santa Rita do Pardo, Bandeirantes, Jaraguari, Camapuã, Nova Alvorada do Sul, Nova Andradina e Bataguassu",
      "Água Clara, Campo Grande, Camapuã e Nova Alvorada do Sul",
      "Água Clara, Campo Grande, Aquidauana, Anhanduí, Camapuã, Nova Andradina, Paraíso das Águas, Ivinhema",
    ],
    answer: 1,
    comment:
      "Os municípios que fazem divisa com Ribas do Rio Pardo são: Ao Norte, Camapuã; ao Sul, Nova Alvorada do Sul, Nova Andradina e Bataguassu; à Leste, Água Clara, Brasilândia, Santa Rita do Pardo; e à oeste, Bandeirantes, Jaraguari e Campo Grande, totalizando 10 municípios vizinhos.",
  },
  {
    qNumber: 5,
    qImg: "q5maestro.jpg",
    question:
      "Qual era nome do maestro que fundou a Fanfarra de Ribas do Rio Pardo?",
    options: ["Raul", "Saul", "Rafael", "Jehú"],
    answer: 3,
    comment:
      "Jehú Vieira Serrado foi maestro da Fanfarra Simples e banda Gilberto Fogaça em Ribas do Rio Pardo, muito conhecida em todo o Estado, e detentora de vários títulos. A banda foi inaugurada por Jehú em 1991. ",
  },
  {
    qNumber: 6,
    qImg: "q6siderugica.jpg",
    question:
      "Qual era o nome da indústria siderúrgica de Ribas, antes da aquisição do grupo Vetorial?",
    options: ["Enersul", "Gerdau", "Sidersul", "Usiminas"],
    answer: 2,
    comment:
      "Antes da aquisição do Grupo Vetorial, o nome da indústria siderúrgica era Sidersul.",
  },
  {
    qNumber: 7,
    qImg: "q7rio.webp",
    question: "Qual o maior rio, em extensão, de Ribas do Rio Pardo?",
    options: ["Rio Botas", "Rio Verde", "Rio Anhanduí", "Rio Pardo"],
    answer: 3,
    comment:
      "O maior rio de Ribas do Rio Pardo em extensão é o Rio Pardo, que tem aproximadamente 500 km de comprimento. Este rio é um afluente pela margem direita do Rio Paraná e passa pelo município de Ribas do Rio Pardo, onde faz divisa com Santa Rita do Pardo. O Rio Pardo nasce na lagoa Sanguessuga, perto de Camapuã, tendo como principal formador o córrego Capim Branco. O Rio Pardo desagua no Rio Paraná, pouco acima da ponte no porto XV de Novembro. Fica nele a Hidrelétrica do Mimoso, também conhecida pelo nome de Assis Chateaubriand, a quarenta quilômetros da cidade de Ribas do Rio Pardo.",
  },
  {
    qNumber: 8,
    qImg: "q8escola.webp",
    question: "Quando foi fundada a primeira escola em Ribas?",
    options: [1935, 1918, 1967, 1986],
    answer: 1,
    comment:
      "Em 1918 é fundada a primeira escola de Ribas, tendo como professor José Coleto Garcia. ",
  },
  {
    qNumber: 9,
    qImg: "q9fundadores.webp",
    question: "Quem são considerados os primeiros moradores de Ribas?",
    options: [
      "Gumercinda e Silvério Pereira",
      "Flora e Antonio Abes",
      "João dos Santos e José dos Santos",
      "Josefa e Manoel Paniago",
    ],
    answer: 2,
    comment:
      "Apesar do registro de vestígios das monções jesuíticas e da passagem ou mesmo curta permanência de expedições exploratórias, a formação do povoado se deu somente por volta do ano de 1900, quando se registrou concretamento a fixação dos primeiros moradores. Foram os irmãos João e José dos Santos, mineiros de Uberaba que fixaram residência e comércio próximo à confluência dos Rios Bota e Pardo",
  },
  {
    qNumber: 10,
    qImg: "q10prof.webp",
    question: "Quem foi o primeiro professor de Ribas?",
    options: [
      "José Coleto Garcia",
      "Nelson Lírio",
      "Ernesto Geisel",
      "Jesuíno Alvares de Barros",
    ],
    answer: 0,
    comment:
      "Em 1918 é fundada a primeira escola de Ribas, tendo como professor José Coleto Garcia. ",
  },
];

//PRINTAR AS QUESTOES NO HTML

// --------> For Each para iterar sobre as questões
quizz.forEach((obj, index) => {
  if (index === quizz.length - 1) {
    // Verifica se é a última questão
    p3ShowResults.style.display = "block"; // Mostra o show results
  } // Fechamento do if adicionado

  // ----> criar e printar uma flexbox para cada questão iterada
  const questionContainer = document.createElement("div");
  questionContainer.style.display = "flex";
  questionContainer.id = `q${obj.qNumber}`;
  questionContainer.className = "question-container";
  questionContainer.style.justifyContent = "center";
  questionContainer.style.alignItems = "center";
  questionContainer.style.flexDirection = "column";
  p2Questions.appendChild(questionContainer);

  // --> criar e printar IMGS
  const questionImage = document.createElement("img");
  questionImage.style.display = "flex";
  questionImage.src = obj.qImg;
  questionImage.id = `img.q${obj.qNumber}`;
  questionImage.className = "question-image";
  questionImage.style.justifyContent = "center";
  questionImage.style.width = "300px";
  questionImage.style.height = "200px";
  questionImage.style.borderRadius = "8px";
  questionContainer.appendChild(questionImage);

  // --> criar e printar TITULO DAS QUESTOES
  const questionTitle = document.createElement("h1");
  questionTitle.style.display = "flex";
  questionImage.id = `tit.q${obj.qNumber}`;
  questionTitle.className = "questionFlexbox";
  questionTitle.textContent = obj.question;
  questionTitle.style.justifyContent = "center";
  questionTitle.style.alignItems = "center";
  questionContainer.appendChild(questionTitle);

  // --> criar flexbox de option ul
  const optionsFlexbox = document.createElement("ul");
  optionsFlexbox.style.display = "flex";
  optionsFlexbox.id = `options.q${obj.qNumber}`;
  optionsFlexbox.className = "optionsFlexbox";
  optionsFlexbox.style.listStyleType = "none";
  optionsFlexbox.style.flexDirection = "column";
  optionsFlexbox.style.alignItems = "left";
  optionsFlexbox.style.justifyContent = "left";
  questionContainer.appendChild(optionsFlexbox);

  //Back BTN
  if (index > 0) {
    const backBtn = document.createElement("button");
    backBtn.style.display = "flex";
    backBtn.type = "button";
    backBtn.className = "btn";
    backBtn.id = "back-btn";
    backBtn.textContent = "Voltar";
    questionContainer.appendChild(backBtn);

    backBtn.addEventListener("click", backBtnAction);
  }

  // --> criar flexbox de options
  obj.options.forEach((optionText, optionIndex) => {
    const option = document.createElement("li");
    option.className = "optionUnitClass";
    option.style.display = "flex";
    option.style.flexDirection = "row";
    optionsFlexbox.style.justifyContent = "flex-start";

    // --> criar botoes de input a cada optionUnit
    const radiobutton = document.createElement("input");
    radiobutton.type = "radio";
    radiobutton.id = optionText;
    radiobutton.name = obj.qNumber;
    radiobutton.value = optionIndex;

    const label = document.createElement("label");
    label.textContent = optionText;
    label.htmlFor = optionText;

    optionsFlexbox.appendChild(option);
    option.appendChild(radiobutton);
    option.appendChild(label);
  });

  // Fazer com que o clique na questão, mostre a próxima & apagar outras questoes enquanto responde uma
  if (index === 0) {
    questionContainer.style.display = "block";
  } else {
    questionContainer.style.display = "none";
  }

  // Se for a última questão, você exibe a tela "Ver Resultados"
  if (index === questionContainer.length - 1) {
    p3ShowResults.style.display = "block";
  }
});

const allQuestions = document.querySelectorAll(".question-container");
const radios = p2Questions.querySelectorAll('input[type="radio"]');
let selectedAnswers = new Array(quizz.length).fill(null);
const resultsArray = new Array(quizz.length).fill(null);
let currentQuestion = 0;

//função para quando o clique acontecer, sumir com as outras questões e mostrar a próxima
function showNextQuestion() {
  if (currentQuestion < allQuestions.length) {
    // Esconde a questão atual
    allQuestions[currentQuestion].style.display = "none";

    // Incrementa o índice da questão atual
    currentQuestion++;

    // Se ainda houver questões, exibe a próxima
    if (currentQuestion < allQuestions.length) {
      allQuestions[currentQuestion].style.display = "block";
    } else {
      p3ShowResults.style.display = "block";
      // Exibe a tela de resultados ou uma mensagem
    }
  }
}

let arraySum = [];
let arrayIndex = [];
let arrayPerc = [];
let gabarito = [];

radios.forEach((radio) => {
  radio.addEventListener("click", (event) => {
    const questionIndex = currentQuestion;

    //nova array com index das respostas selecionadas
    selectedAnswers[questionIndex] = parseInt(event.target.value);
    console.log(`selectedAnswers:${selectedAnswers}`);

    //nova array com index 1 ou 0 de acordo com acerto ou erro
    if (quizz[questionIndex]) {
      if (selectedAnswers[questionIndex] == quizz[questionIndex].answer) {
        resultsArray[questionIndex] = 1;
      } else {
        resultsArray[questionIndex] = 0;
      }
      console.log(`resultsArray:${resultsArray}`);
    }

    showNextQuestion();

    let arrayIndex = resultsArray.length;
    arraySum = resultsArray.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    );
    let arrayPerc = (arraySum / arrayIndex) * 100;
    console.log(arrayPerc);
  });
});

let resultsPage = [
  {
    rNumber: "r0",
    rImg: "rpage0.webp",
    text: "Você é expert em Ribas! Ihaaa",
    subtext:
      "Você provou que conhece Ribas como a palma da mão! Raiz demaaais! Orgulho da vó!",
  },
  {
    rNumber: "r1",
    rImg: "resultr1.webp",
    text: "Quase caiu do boi! Fica esperto!",
    subtext:
      "Você conhece um pouco de Ribas mas sempre dá pra melhorar. Confira as respostas para ficar por dentro da história de Ribas.",
  },
  {
    rNumber: "r2",
    rImg: "resultr2.webp",
    text: "Foi o boi com a corda!",
    subtext:
      "Você conhece pouco ainda de Ribas mas dá pra melhorar. Confira as respostas para ficar por dentro da história de Ribas e converse com os mais velhos. Eles sempre tem uma bom causo da cidade para contar!",
  },
];
//////////////

///CRIAR TELAS DE RESULTADOS

resultsPage.forEach((obj, index) => {
  // ----> criar flexbox para cada resultado iterado
  const resultPagejs = document.createElement("div");
  resultPagejs.id = obj.rNumber;
  resultPagejs.className = "resultPage";
  resultPagejs.style.display = "flex";
  resultPagejs.style.justifyContent = "center";
  resultPagejs.style.alignItems = "center";
  resultPagejs.style.flexDirection = "column";
  p4Results.appendChild(resultPagejs);

  // --> criar e popular flexbox de Img
  const imgFlexboxResultPage = document.createElement("img");
  imgFlexboxResultPage.className = "imageFlexboxResultPage";
  imgFlexboxResultPage.src = obj.rImg;
  imgFlexboxResultPage.style.display = "flex";
  imgFlexboxResultPage.style.justifyContent = "center";
  imgFlexboxResultPage.style.width = "500px";
  imgFlexboxResultPage.style.height = "400px";
  imgFlexboxResultPage.style.borderRadius = "8px";
  resultPagejs.appendChild(imgFlexboxResultPage);

  // --> criar titulo!
  const resultTitleFlexbox = document.createElement("h1");
  resultTitleFlexbox.className = "questionFlexbox";
  resultTitleFlexbox.textContent = obj.text;
  resultTitleFlexbox.style.display = "flex";
  resultTitleFlexbox.style.justifyContent = "center";
  resultTitleFlexbox.style.alignItems = "center";
  resultPagejs.appendChild(resultTitleFlexbox);

  const gabarito = document.createElement("div");
  gabarito.className = "gabarito";
  gabarito.style.display = "flex";
  gabarito.style.justifyContent = "center";
  gabarito.style.alignItems = "center";
  resultPagejs.appendChild(gabarito);

  // --> criar subtitulo!
  const resultSubtitleFlexbox = document.createElement("h2");
  resultSubtitleFlexbox.className = "questionFlexbox";
  resultSubtitleFlexbox.textContent = obj.subtext;
  resultSubtitleFlexbox.style.display = "flex";
  resultSubtitleFlexbox.style.justifyContent = "center";
  resultSubtitleFlexbox.style.alignItems = "center";
  resultPagejs.appendChild(resultSubtitleFlexbox);

  //Right-answers BTN
  const rightAnswersBtn = document.createElement("button");
  rightAnswersBtn.style.display = "flex";
  rightAnswersBtn.type = "button";
  rightAnswersBtn.className = "btn";
  rightAnswersBtn.id = "right-answers-btn";
  rightAnswersBtn.textContent = "Veja as respostas corretas!";
  rightAnswersBtn.style.justifyContent = "center";
  resultPagejs.appendChild(rightAnswersBtn);

  rightAnswersBtn.addEventListener("click", () => {
    p1Cover.style.display = "none";
    p2Questions.style.display = "none";
    p3ShowResults.style.display = "none";
    p4Results.style.display = "none";
    p5Answers.style.display = "block";
  });

  // Redo-BTN
  const redoBtn = document.createElement("button");
  redoBtn.style.display = "flex";
  redoBtn.type = "button";
  redoBtn.className = "btn";
  redoBtn.id = "redo-btn";
  redoBtn.innerHTML = "Refazer <span>&#8635;</span>"; // Usando innerHTML para incluir o span
  redoBtn.style.justifyContent = "flex-end";
  resultPagejs.appendChild(redoBtn);

  redoBtn.addEventListener("click", () => {
    // Resetar os arrays
    selectedAnswers.fill(null);
    resultsArray.fill(null);
    currentQuestion = 0;

    // Resetar todos os inputs de radio buttons
    const radios = p2Questions.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.checked = false;
    });

    // Exibir a tela inicial e esconder as outras
    p1Cover.style.display = "block";
    p2Questions.style.display = "none";
    p3ShowResults.style.display = "none";
    p4Results.style.display = "none";
    p5Answers.style.display = "none";

    // Redefinir a exibição das questões para começar da primeira
    allQuestions.forEach((container, index) => {
      container.style.display = index === 0 ? "block" : "none";
    });
  });

  ///Share BTN
  const shareBtn = document.createElement("button");
  shareBtn.style.display = "flex";
  shareBtn.type = "button";
  shareBtn.className = "btn";
  shareBtn.id = "share-btn";
  shareBtn.textContent = "Compartilhar";
  shareBtn.style.justifyContent = "flex-end";
  resultPagejs.appendChild(shareBtn);

  shareBtn.addEventListener("click", () => {
    const currentUrl = window.location.href; // Pega o link da página atual
    navigator.clipboard
      .writeText(currentUrl) // Copia o link para a área de transferência

      .then(() => {
        alert("Link copiado para a área de transferência");
      }); // Exibe uma mensagem de sucesso (opcional)
  });
});

///criar logica pra printar telas

showResultsBtn.addEventListener("click", () => {
  let arrayIndex = resultsArray.length;
  arraySum = resultsArray.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );
  console.log(`soma:${arraySum}`);

  console.log(`nitens: ${arrayIndex}`);

  let arrayPerc = (arraySum / arrayIndex) * 100;
  console.log(arrayPerc);

  const expertResultScreen = document.getElementById("r0");
  const averageResultScreen = document.getElementById("r1");
  const badResultScreen = document.getElementById("r2");

  //printar resultado
  const gabarito2 = document.querySelectorAll(".gabarito");
  gabarito2.forEach((element) => {
    element.innerHTML = `Você acertou ${arraySum} de ${arrayIndex} questões.`;
  });

  // Reseta o display de todas as telas
  expertResultScreen.style.display = "none";
  averageResultScreen.style.display = "none";
  badResultScreen.style.display = "none";

  // Computa e decide qual tela deve ser mostrada
  if (arrayPerc <= 49.9) {
    badResultScreen.style.display = "block";
  } else if (arrayPerc > 49.9 && arrayPerc <= 79.9) {
    averageResultScreen.style.display = "block";
  } else {
    expertResultScreen.style.display = "block";
  }

  p1Cover.style.display = "none";
  p2Questions.style.display = "none";
  p3ShowResults.style.display = "none";
  p4Results.style.display = "block";
  p5Answers.style.display = "none";
});

//////////////// PRINTAR A PAGINA DE RIGHT ANSWERS

// Título da página de gabarito

// Função para exibir o gabarito
quizz.forEach((question, index) => {
  // Criação da caixa da pergunta
  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");
  questionBox.style.display = "flex";
  questionBox.style.flexDirection = "column";
  questionBox.style.marginBottom = "20px";
  p5Answers.appendChild(questionBox);

  // Título da pergunta
  const questionTitle = document.createElement("h2");
  questionTitle.textContent = `Questão ${index + 1}: ${question.question}`;
  questionBox.appendChild(questionTitle);

  // Índices da resposta do usuário e da resposta correta
  const userAnswerIndex = parseInt(selectedAnswers[index], 10); // Convertendo para número inteiro
  const correctAnswerIndex = question.answer;

  // Usando o DOM para pegar o label associado à resposta do usuário
  const userAnswerLabel = document.querySelector(
    `label[for="${question.options[userAnswerIndex]}"]`
  );
  const userAnswerText = userAnswerLabel
    ? userAnswerLabel.textContent
    : "Resposta não selecionada";
  const correctAnswerText = question.options[correctAnswerIndex];

  // Verifica se a resposta está correta ou errada
  const resultContainer = document.createElement("div");
  resultContainer.style.display = "flex";
  resultContainer.className = ".result-container";
  resultContainer.style.alignItems = "center";
  resultContainer.style.marginBottom = "10px";

  const resultIcon = document.createElement("img");
  resultContainer.className = ".result-icon";
  resultIcon.style.width = "20px";
  resultIcon.style.height = "20px";
  resultIcon.style.marginRight = "8px";

  const resultText = document.createElement("p");
  resultContainer.className = ".result-text";

  if (userAnswerIndex == correctAnswerIndex) {
    // Se a resposta está correta
    resultIcon.src = "correct_icon.png"; // Substitua pelo caminho do ícone de correto
    resultText.textContent = "Você acertou!";
    resultText.style.color = "green";
  } else {
    // Se a resposta está errada
    resultIcon.src = "wrong_icon.png"; // Substitua pelo caminho do ícone de errado
    resultText.textContent = "Você errou! :(";
    resultText.style.color = "red";
  }

  resultContainer.appendChild(resultIcon);
  resultContainer.appendChild(resultText);
  questionBox.appendChild(resultContainer);

  // Espaço entre o resultado e as respostas
  const spacer = document.createElement("br");
  questionBox.appendChild(spacer);

  // Exibição da resposta do usuário
  const userAnswerContainer = document.createElement("p");
  userAnswerContainer.innerHTML = `<strong>Sua resposta:</strong> ${userAnswerText}`;
  questionBox.appendChild(userAnswerContainer);

  // Exibição da resposta correta
  const correctAnswerContainer = document.createElement("p");
  correctAnswerContainer.innerHTML = `<strong>Resposta correta:</strong> ${correctAnswerText}`;
  questionBox.appendChild(correctAnswerContainer);

  // Comentário da questão (opcional)
  const commentDiv = document.createElement("div");
  commentDiv.innerHTML = `<strong>Comentário:</strong> ${question.comment}`;
  commentDiv.style.marginTop = "10px";
  questionBox.appendChild(commentDiv);
});

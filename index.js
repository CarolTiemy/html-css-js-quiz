const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de backend",
        "Uma linguagem de marcação para criar páginas web",
        "Uma linguagem de programação de frontend e backend",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var",
        "int",
        "string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar elementos HTML pelo seu id",
        "Selecionar elementos HTML pelo seu nome",
        "Selecionar elementos HTML pelo seu tipo",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' faz?",
      respostas: [
        "Adiciona um evento a um elemento HTML",
        "Remove um evento de um elemento HTML",
        "Altera o estilo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof 'hello')?",
      respostas: [
        "string",
        "number",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código que executa uma ação específica",
        "Uma variável que armazena dados",
        "Um loop que repete uma série de instruções",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena uma coleção de elementos ordenados",
        "Um tipo de dado que armazena um único valor",
        "Um tipo de dado que armazena uma sequência de caracteres",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "<!-- Este é um comentário de uma linha -->",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) =>{
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta){
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
     } 
  
     quizItem.querySelector('dl').appendChild(dt)
   }
   quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }
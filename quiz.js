// Perguntas do quiz 
const quiz = [
    {
      question: 'Qual foi o mês que começamos?',
      options: ['Janeiro', 'Dezembro', 'Novembro', 'Setembro'],
      answer: 2 // novembro
    },
    {
      question: 'Qual é o meu apelido carinhoso para você?',
      options: ['Minha Princesa', 'Minha Fofinha', 'Linda', 'Amorzinho'],
      answer: 0 // Princesa
    },
    {
      question: 'Primeiro Gf?',
      options: ['luccas via zap', 'luccas via nosso server', 'manu via discord', 'ambos'],
      answer: 1 // eu
    }
  ];
  
  let current = 0;
  let acertos = 0;
  
  function showQuestion() {
    document.getElementById('result').textContent = '';
    document.getElementById('progress').textContent = `Pergunta ${current + 1} de ${quiz.length}`;
    document.getElementById('question').textContent = quiz[current].question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    quiz[current].options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => selectOption(idx, btn);
      optionsDiv.appendChild(btn);
    });
  }
  
  function selectOption(idx, btn) {
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    btn.classList.add('selected');
    setTimeout(() => {
      if (idx === quiz[current].answer) {
        acertos++;
      }
      current++;
      if (current < quiz.length) {
        showQuestion();
      } else {
        finishQuiz();
      }
    }, 700);
  }
  
  function finishQuiz() {
    if (acertos === quiz.length) {
      document.getElementById('result').innerHTML = 'Parabéns! Você acertou tudo!<br>Agora pode acessar sua surpresa...';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } else {
      document.getElementById('result').innerHTML = `Você acertou ${acertos} de ${quiz.length}.<br>Tente novamente para acessar sua surpresa!`;
      setTimeout(() => {
        current = 0;
        acertos = 0;
        showQuestion();
      }, 2500);
    }
  }
  
  // Inicia o quiz
  showQuestion();
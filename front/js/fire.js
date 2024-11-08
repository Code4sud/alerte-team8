document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      text: 'Attention, tu es à la maison, et un feu apparaît dans ta chambre ! Que fais-tu ?',
      options: [
        { text: 'Tu vas chercher ta maman', nextQuestion: 1 },
        { text: 'Tu sors par la fenêtre', nextQuestion: 2 },
      ],
    },

    {
      text: 'Il y a un nuage de fumée dans le couloir. Que fais-tu ensuite ?',
      options: [
        { text: 'Se baisser pour éviter de respirer la fumée', nextQuestion: 3 },
        { text: 'Retourner dans ta chambre et fermer la porte', nextQuestion: 4 },
      ],
    },

    {
      text: 'Tu es sorti par la fenêtre et te retrouves dehors. Que fais-tu ensuite ?',
      options: [
        { text: 'Appeler les secours (18)', nextQuestion: 5 },
        {
          text: 'Essayer de retourner dans la maison pour sauver ton jouet',
          nextQuestion: null,
          feedback: 'Mauvaise réponse! Ne retourne jamais dans un bâtiment en feu.',
        },
      ],
    },

    {
      text: 'En te baissant pour éviter la fumée, tu arrives à une autre pièce avec une fenêtre. Que fais-tu ?',
      options: [
        { text: 'Crier par la fenêtre pour appeler à l’aide', nextQuestion: 6 },
        {
          text: 'Chercher un endroit où te cacher',
          nextQuestion: null,
          feedback: 'Mauvaise réponse! Il vaut mieux te rendre visible pour les secours.',
        },
      ],
    },

    {
      text: 'Tu retournes dans ta chambre et fermes la porte pour empêcher la fumée d’entrer. Que fais-tu ensuite ?',
      options: [
        { text: 'Mouiller un tissu et couvrir ton nez et ta bouche', nextQuestion: 7 },
        {
          text: 'Attendre sans rien faire',
          nextQuestion: null,
          feedback: 'Essaye de prendre des mesures pour te protéger de la fumée.',
        },
      ],
    },

    {
      text: "Les secours ont été appelés. Tu attends à l'extérieur. Que fais-tu ensuite ?",
      options: [
        { text: 'Rester calme et attendre les pompiers', nextQuestion: 8 },
        {
          text: 'Retourner dans la maison pour vérifier si tout va bien',
          nextQuestion: null,
          feedback: 'Mauvaise réponse! Ne retourne jamais dans un bâtiment en feu.',
        },
      ],
    },

    {
      text: "Les pompiers t'entendent crier par la fenêtre et te disent de rester calme. Que fais-tu ensuite ?",
      options: [
        { text: 'Suivre les instructions des pompiers', nextQuestion: 8 },
        {
          text: 'Essayer de descendre par toi-même',
          nextQuestion: null,
          feedback:
            'Mauvaise réponse! Il vaut mieux attendre les pompiers pour te secourir en toute sécurité.',
        },
      ],
    },

    {
      text: 'Tu es dans ta chambre avec un tissu humide pour te protéger de la fumée. Que fais-tu ensuite ?',
      options: [
        { text: 'Aller près de la fenêtre et appeler à l’aide', nextQuestion: 6 },
        {
          text: 'Essayer de te cacher sous le lit',
          nextQuestion: null,
          feedback: 'Mauvaise réponse! Reste visible pour les secours.',
        },
      ],
    },

    {
      text: 'Les pompiers t’évacuent en toute sécurité. Bravo, tu as bien réagi ! Fin du quiz.',
      options: [],
    },
  ];

  let currentQuestionIndex = 0;

  function renderQuestion(index) {
    const questionContainer = document.querySelector('.question');
    const cardsContainer = document.getElementById('cardsContainer');

    const question = questions[index];
    questionContainer.innerHTML = question.text;

    cardsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
      const card = document.createElement('div');
      card.className = `card ${i % 2 === 0 ? 'card-blue' : 'card-green'}`;

      const optionText = document.createElement('p');
      optionText.textContent = option.text;
      card.appendChild(optionText);

      card.addEventListener('click', () => {
        if (option.feedback) {
          questionContainer.innerHTML = `<p style="color: red;">${option.feedback}</p>`;
        } else if (option.nextQuestion !== null) {
          renderQuestion(option.nextQuestion);
        } else {
          // Finaliza o quiz
          questionContainer.innerHTML = 'Quiz terminé !';
        }
      });

      cardsContainer.appendChild(card);
    });
  }

  renderQuestion(currentQuestionIndex);
});

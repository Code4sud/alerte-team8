// Event listener for "Tsunami Section"
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            text: "Tu es à la plage avec ta famille. Tout le monde s'amuse bien, mais soudain, tu remarques que la mer se retire très vite et laisse beaucoup de sable à découvert. Que fais-tu ?",
            options: [
                { text: "Tu cours prévenir ta famille pour aller en hauteur.", nextQuestion: 1, image: "images/CoursPrevenirFamilleHauteur.jpg" },
                { text: "Tu restes à la plage pour regarder de plus près.", nextQuestion: 2, image: "images/ResteALaPlageObserver.png" }
            ]
        },
        {
            text: "Bravo ! Ta famille te suit et vous commencez à courir vers une colline pour vous mettre en sécurité. En chemin, tu vois d’autres personnes qui n’ont pas remarqué le danger. Que fais-tu ?",
            options: [
                { text: "Tu les avertis et leur dis de te suivre.", nextQuestion: 3, image: "images/callSomeone.webp" },
                { text: "Tu continues sans leur parler pour ne pas perdre de temps.", nextQuestion: 4, image: "images/Running.jpg" }
            ]
        },
        {
            text: "Oh non ! Rester à la plage n’était pas une bonne idée. Les vagues arrivent ! Que fais-tu maintenant ?",
            options: [
                { text: "Tu cours vite vers les hauteurs pour te mettre en sécurité.", nextQuestion: 3, image: "images/climbhill.jpg" },
                { text: "Tu restes sur place en espérant que tout ira bien.", nextQuestion: null, image: "images/childWaiting.jpg" }
            ]
        },
        {
            text: "Bonne idée ! Tu montes en hauteur avec ta famille et les autres personnes que tu as prévenues. Maintenant, tu dois décider où aller pour être vraiment en sécurité. Que choisis-tu ?",
            options: [
                { text: "Aller vers un bâtiment solide en haut de la colline.", nextQuestion: 5, image: "images/tophill.jpg" },
                { text: "Rester à l’air libre et attendre.", nextQuestion: 6, image: "images/waitingOutside.jpg" }
            ]
        },
        {
            text: "Tu n’as pas alerté les autres, mais tu es maintenant en sécurité avec ta famille sur la colline. Cependant, d’autres personnes en bas ne savent toujours pas pour le danger. Que fais-tu ?",
            options: [
                { text: "Retourner les aider en prenant des précautions.", nextQuestion: 3, image: "images/waitingotherpeople.jpg" },
                { text: "Rester avec ta famille pour assurer ta sécurité.", nextQuestion: null, image: "images/stayingfamily.png" }
            ]
        },
        {
            text: "Bravo ! Le bâtiment solide est un bon endroit pour attendre. Que fais-tu maintenant pour rester en sécurité ?",
            options: [
                { text: "Rester ici et écouter les consignes des adultes.", nextQuestion: 7, image: "images/listeningAdults.jpg" },
                { text: "Descendre de la colline pour voir ce qui se passe.", nextQuestion: null, image: "images/goingDownhill.jpg" }
            ]
        },
        {
            text: "Rester à l'air libre peut être dangereux si les vagues montent encore. Tu décides finalement de rejoindre le bâtiment solide.",
            options: [
                { text: "Attendre avec ta famille et les autres.", nextQuestion: 7, image: "images/stayingfamily.png" }
            ]
        },
        {
            text: "Félicitations ! Tu as bien agi pour te protéger, ainsi que ta famille et les autres. Tu as appris comment rester en sécurité en cas de tsunami !",
            options: [
                { text: "Recommencer pour revoir les étapes importantes.", nextQuestion: 0, image: "images/restart.jpg" }
            ]
        }
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

            const img = document.createElement('img');
            img.src = option.image;
            img.alt = "Option Image";
            img.className = "option-image";
            card.appendChild(img);

            const optionText = document.createElement('p');
            optionText.textContent = option.text;
            card.appendChild(optionText);

            card.addEventListener('click', () => {
                if (option.nextQuestion !== null) {
                    renderQuestion(option.nextQuestion);
                } else {
                    alert("Quiz terminé!");
                }
            });

            cardsContainer.appendChild(card);
        });
    }

    renderQuestion(currentQuestionIndex);
});

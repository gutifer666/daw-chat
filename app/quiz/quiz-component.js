class QuizComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const RequestInfo = this.getAttribute('request-info') || 'programacion-ut1.xml';

        this.innerHTML = `
              <style>
                .header, .footer { background: #ccc; padding: 10px 20px; display: flex; align-items: center; }
                .header { justify-content: space-between; font-weight: bold; }
                .content { padding: 20px; background: #f9f9f9; min-height: 300px; }
                .question { margin-bottom: 20px; }
                .options { list-style: none; padding: 0; }
                .options li { margin: 8px 0; }
                .btn { padding: 10px 20px; border: none; cursor: pointer; font-size: 1rem; }
                .btn-next { background: #fdd; }
                .feedback { margin-right: auto; font-size: 1.2rem; color: green; }
                .feedback.incorrect { color: red; }
                .summary { padding: 20px; }
              </style>
              
              <div class="header">
                <div id="progress">Pregunta: 0/0</div>
                <div id="score">Aciertos: 0 | Fallos: 0 | Puntos: 0</div>
              </div>
              <div class="content" id="quiz-container">
                <!-- Aquí se mostrará la pregunta -->
              </div>
              <div class="footer" id="footer">
                <div id="feedback"></div>
                <button id="next-btn" class="btn btn-next" disabled>Siguiente</button>
              </div>
        `;

        init();

        async function init() {
            const res = await fetch(`../../app/quiz/${RequestInfo}`);
            const xmlText = await res.text();
            const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
            const qNodes = Array.from(xml.querySelectorAll('test > c > c'));
            const questions = qNodes.map(node => {
                const text = node.querySelector('p').textContent;
                const opts = Array.from(node.querySelectorAll('r > o')).map(o => o.textContent);
                const corrStr = node.querySelector('c').textContent.trim();
                const correct = corrStr.split('').map(ch => ch === '2');
                const multiple = correct.filter(x => x).length > 1;
                return { text, opts, correct, multiple };
            });
            window.quiz = { questions, current: 0, hits: 0, misses: 0, answered: false };
            renderQuestion();
        }

        const container = document.getElementById('quiz-container');
        const progress = document.getElementById('progress');
        const score = document.getElementById('score');
        const feedback = document.getElementById('feedback');
        const nextBtn = document.getElementById('next-btn');

        function renderQuestion() {
            const q = quiz.questions[quiz.current];
            progress.textContent = `Pregunta: ${quiz.current + 1}/${quiz.questions.length}`;
            score.textContent = `Aciertos: ${quiz.hits} | Fallos: ${quiz.misses} | Puntos: ${quiz.hits}`;
            container.innerHTML = '';

            const qDiv = document.createElement('div');
            qDiv.className = 'question';
            qDiv.textContent = q.text;
            container.appendChild(qDiv);

            const ul = document.createElement('ul'); ul.className = 'options';
            q.opts.forEach((opt, i) => {
                const li = document.createElement('li');
                const input = document.createElement('input');
                input.type = q.multiple ? 'checkbox' : 'radio';
                input.name = 'option';
                input.value = i;
                const label = document.createElement('label');
                label.textContent = opt;
                label.prepend(input);
                li.appendChild(label);
                ul.appendChild(li);
            });
            container.appendChild(ul);

            // activar botón al seleccionar
            container.querySelectorAll('input[name="option"]').forEach(el => {
                el.addEventListener('change', () => nextBtn.disabled = false);
            });
            // Reset button text and state on new question
            nextBtn.textContent = "Siguiente";
            nextBtn.disabled = true;
        }

        // Combined next button click handler for answer checking and navigation
        nextBtn.addEventListener('click', () => {
            if (!quiz.answered) {  // first click: check answer
                const q = quiz.questions[quiz.current];
                const selected = Array.from(container.querySelectorAll('input[name="option"]'))
                    .filter(i => i.checked)
                    .map(i => parseInt(i.value));
                let isCorrect = true;
                q.correct.forEach((isCorr, idx) => {
                    if (isCorr !== selected.includes(idx)) isCorrect = false;
                });
                if (isCorrect) {
                    quiz.hits++;
                    feedback.textContent = '✔ Correcto';
                    feedback.className = 'feedback';
                } else {
                    quiz.misses++;
                    feedback.textContent = '✖ Incorrecto';
                    feedback.className = 'feedback incorrect';
                }
                quiz.answered = true;
                nextBtn.textContent = "Continuar";
            } else {  // second click: load next question or summary
                feedback.textContent = '';
                quiz.answered = false;
                if (quiz.current < quiz.questions.length - 1) {
                    quiz.current++;
                    nextBtn.disabled = true;
                    renderQuestion();
                } else {
                    showSummary();
                }
            }
        });

        function showSummary() {
            container.innerHTML = `<div class="summary">
        <h2>Resumen del Cuestionario</h2>
        <p>Preguntas totales: ${quiz.questions.length}</p>
        <p>Aciertos: ${quiz.hits}</p>
        <p>Fallos: ${quiz.misses}</p>
        <p>Puntos: ${quiz.hits}</p>
      </div>`;
            document.getElementById('footer').style.display = 'none';
            progress.textContent = '';
        }
    }
}

customElements.define('quiz-component', QuizComponent);
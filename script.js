let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let showFeedback = false;

function startExam(testNumber) {
    currentTest = testNumber - 1;
    questions = allQuestions[currentTest];
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    showFeedback = false;

    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('estimated-time').textContent = Math.ceil(questions.length * 1.5) + ' minutos';

    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');

    showQuestion();
    updateProgress();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionsContainer.appendChild(optionElement);
    });

    updateNavigationButtons();
    updateProgress();
    updateFeedback();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
    document.getElementById('submit-btn').disabled = false;
}

function submitAnswer() {
    if (userAnswers[currentQuestionIndex] === null) return;

    showFeedback = true;
    updateFeedback();

    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
}

function updateFeedback() {
    const feedbackElement = document.getElementById('feedback');
    if (!showFeedback || userAnswers[currentQuestionIndex] === null) {
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        return;
    }

    const isCorrect = userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correct;
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackElement.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto. La respuesta correcta es: ' + questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct];
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showFeedback = false;
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showFeedback = true; // Show feedback for previous answers
        showQuestion();
    }
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = !showFeedback || currentQuestionIndex === questions.length - 1;
    document.getElementById('submit-btn').disabled = userAnswers[currentQuestionIndex] === null;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('question-counter').textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

function showSummary() {
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    questions.forEach((question, index) => {
        const item = document.createElement('div');
        item.className = `summary-item ${userAnswers[index] !== null ? 'respondida' : 'pendiente'}`;
        item.innerHTML = `
            <span>Pregunta ${index + 1}</span>
            <span>${userAnswers[index] !== null ? 'Respondida' : 'Pendiente'}</span>
        `;
        item.onclick = () => {
            currentQuestionIndex = index;
            showFeedback = userAnswers[index] !== null;
            document.getElementById('summary-screen').classList.remove('active');
            document.getElementById('exam-screen').classList.add('active');
            showQuestion();
        };
        summaryList.appendChild(item);
    });

    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('summary-screen').classList.add('active');
}

function closeSummary() {
    document.getElementById('summary-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
}

function showResults() {
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let status = '';
        let className = '';

        if (userAnswer === null) {
            unanswered++;
            status = 'No respondida';
            className = '';
        } else if (userAnswer === question.correct) {
            correct++;
            status = 'Correcta';
            className = 'correct';
        } else {
            incorrect++;
            status = 'Incorrecta';
            className = 'incorrect';
        }

        const item = document.createElement('div');
        item.className = `review-item ${className}`;
        item.innerHTML = `
            <h4>Pregunta ${index + 1}: ${question.question}</h4>
            <p><strong>Tu respuesta:</strong> ${userAnswer !== null ? question.options[userAnswer] : 'No respondida'}</p>
            <p><strong>Respuesta correcta:</strong> ${question.options[question.correct]}</p>
            <p><strong>Estado:</strong> ${status}</p>
        `;
        reviewList.appendChild(item);
    });

    const score = Math.round((correct / questions.length) * 100);
    document.getElementById('score').textContent = score;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('unanswered-count').textContent = unanswered;
}

function restartExam() {
    startExam(currentTest + 1);
}

function backToStart() {
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}
document.querySelectorAll(".start-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const testId = btn.dataset.test;
        startExam(testId);
    });
});

document.getElementById("submit-btn").addEventListener("click", submitAnswer);
document.getElementById("prev-btn").addEventListener("click", previousQuestion);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("summary-btn").addEventListener("click", showSummary);
document.getElementById("close-summary-btn").addEventListener("click", closeSummary);
document.getElementById("restart-btn").addEventListener("click", restartExam);
document.getElementById("home-btn").addEventListener("click", backToStart);
/* ===== QUIZ QUESTIONS DATABASE ===== */
const quizQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of encryption?",
        options: [
            "To compress data",
            "To protect data confidentiality",
            "To increase data transfer speed",
            "To organize file systems"
        ],
        correct: 1,
        category: "basics"
    },
    {
        id: 2,
        question: "Which cipher was used by Julius Caesar?",
        options: [
            "Vigenère Cipher",
            "Caesar Cipher",
            "Playfair Cipher",
            "Beaufort Cipher"
        ],
        correct: 1,
        category: "classical"
    },
    {
        id: 3,
        question: "RSA is an example of which type of cryptography?",
        options: [
            "Symmetric encryption",
            "Asymmetric encryption",
            "Hash function",
            "Encoding technique"
        ],
        correct: 1,
        category: "modern"
    },
    {
        id: 4,
        question: "How many bits does MD5 produce?",
        options: [
            "128 bits",
            "256 bits",
            "512 bits",
            "1024 bits"
        ],
        correct: 0,
        category: "hashing"
    },
    {
        id: 5,
        question: "What does HTTPS stand for?",
        options: [
            "Hyper Text Transfer Protocol Secure",
            "High Transfer Text Protocol System",
            "Hyper Terminal Transfer Protocol",
            "Home Transfer Text Protocol Secure"
        ],
        correct: 0,
        category: "networking"
    },
    {
        id: 6,
        question: "Which is more secure: DES or AES?",
        options: [
            "DES is more secure",
            "AES is more secure",
            "They are equally secure",
            "It depends on the key"
        ],
        correct: 1,
        category: "modern"
    },
    {
        id: 7,
        question: "What is the main advantage of asymmetric encryption?",
        options: [
            "It is faster than symmetric",
            "It uses smaller keys",
            "No need to share secret keys",
            "It is easier to implement"
        ],
        correct: 2,
        category: "modern"
    },
    {
        id: 8,
        question: "Base64 encoding is used for:",
        options: [
            "Security purposes",
            "Transmitting binary data over text channels",
            "Password storage",
            "Digital signatures"
        ],
        correct: 1,
        category: "encoding"
    },
    {
        id: 9,
        question: "What does SSL/TLS do?",
        options: [
            "Compresses web traffic",
            "Encrypts communication between client and server",
            "Stores user passwords",
            "Manages network bandwidth"
        ],
        correct: 1,
        category: "networking"
    },
    {
        id: 10,
        question: "Which algorithm is most commonly used for password hashing?",
        options: [
            "MD5",
            "SHA-256",
            "bcrypt",
            "Base64"
        ],
        correct: 2,
        category: "security"
    },
    {
        id: 11,
        question: "What is a Man-in-the-Middle (MITM) attack?",
        options: [
            "An attack on the middle server",
            "An attacker intercepts communication between two parties",
            "A type of password attack",
            "An attack on database servers"
        ],
        correct: 1,
        category: "networking"
    },
    {
        id: 12,
        question: "What is the key length of AES-256?",
        options: [
            "128 bits",
            "192 bits",
            "256 bits",
            "512 bits"
        ],
        correct: 2,
        category: "modern"
    },
    {
        id: 13,
        question: "Hashing is:",
        options: [
            "Reversible like encryption",
            "One-way function producing fixed-size output",
            "Used only for passwords",
            "Slower than encryption"
        ],
        correct: 1,
        category: "hashing"
    },
    {
        id: 14,
        question: "What does VPN stand for?",
        options: [
            "Virtual Private Network",
            "Very Powerful Network",
            "Verified Packet Network",
            "Virtual Protocol Number"
        ],
        correct: 0,
        category: "networking"
    },
    {
        id: 15,
        question: "Which is a symmetric encryption algorithm?",
        options: [
            "RSA",
            "AES",
            "DSA",
            "ECC"
        ],
        correct: 1,
        category: "modern"
    },
    {
        id: 16,
        question: "What is the primary weakness of Caesar Cipher?",
        options: [
            "It's too slow",
            "It requires a large key",
            "Only 26 possible shifts",
            "It produces very large output"
        ],
        correct: 2,
        category: "classical"
    },
    {
        id: 17,
        question: "Digital signatures are used to:",
        options: [
            "Encrypt messages",
            "Verify authenticity and non-repudiation",
            "Compress data",
            "Speed up communication"
        ],
        correct: 1,
        category: "security"
    },
    {
        id: 18,
        question: "What is the recommended minimum key size for RSA?",
        options: [
            "512 bits",
            "1024 bits",
            "2048 bits",
            "4096 bits"
        ],
        correct: 2,
        category: "modern"
    },
    {
        id: 19,
        question: "Diffie-Hellman is used for:",
        options: [
            "Hashing passwords",
            "Generating digital signatures",
            "Secure key exchange",
            "Encoding data"
        ],
        correct: 2,
        category: "modern"
    },
    {
        id: 20,
        question: "Which is NOT a use of cryptography?",
        options: [
            "Data confidentiality",
            "File compression",
            "Authentication",
            "Integrity verification"
        ],
        correct: 1,
        category: "basics"
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let quizAnswers = [];

/* ===== SETUP QUIZ ===== */
function setupQuiz() {
    loadQuizProgress();
    renderQuizContainer();
}

function loadQuizProgress() {
    const saved = localStorage.getItem('quiz-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        quizScore = progress.score || 0;
        quizAnswers = progress.answers || [];
        currentQuestionIndex = progress.currentIndex || 0;
    }
}

function saveQuizProgress() {
    localStorage.setItem('quiz-progress', JSON.stringify({
        score: quizScore,
        answers: quizAnswers,
        currentIndex: currentQuestionIndex,
        lastAttempt: new Date().toLocaleString()
    }));
}

function renderQuizContainer() {
    const container = document.getElementById('quizContainer');
    
    if (currentQuestionIndex >= quizQuestions.length) {
        renderQuizScore();
    } else {
        renderQuestion();
    }
}

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const question = quizQuestions[currentQuestionIndex];
    
    container.innerHTML = `
        <div class="quiz-header">
            <h3>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h3>
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${(currentQuestionIndex / quizQuestions.length) * 100}%"></div>
            </div>
        </div>

        <div class="question-card">
            <div class="question-text">${question.question}</div>
            
            <div class="options-group">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="answerQuestion(${index})">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </button>
                `).join('')}
            </div>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-outline" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <button class="btn btn-outline" onclick="skipQuestion()">
                Skip
            </button>
        </div>
    `;
}

function answerQuestion(optionIndex) {
    playSound(500, 200);
    const question = quizQuestions[currentQuestionIndex];
    
    quizAnswers[currentQuestionIndex] = optionIndex;
    
    if (optionIndex === question.correct) {
        quizScore++;
    }
    
    saveQuizProgress();
    currentQuestionIndex++;
    renderQuizContainer();
}

function skipQuestion() {
    quizAnswers[currentQuestionIndex] = -1;
    saveQuizProgress();
    currentQuestionIndex++;
    renderQuizContainer();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuizContainer();
    }
}

function renderQuizScore() {
    const container = document.getElementById('quizContainer');
    const percentage = (quizScore / quizQuestions.length) * 100;
    
    let scoreMessage = '';
    let scoreEmoji = '';
    
    if (percentage === 100) {
        scoreMessage = 'Perfect! You are a cryptography master!';
        scoreEmoji = '🏆';
    } else if (percentage >= 80) {
        scoreMessage = 'Excellent! Great understanding of cryptography!';
        scoreEmoji = '⭐';
    } else if (percentage >= 60) {
        scoreMessage = 'Good job! Keep learning to improve!';
        scoreEmoji = '👍';
    } else if (percentage >= 40) {
        scoreMessage = 'Fair effort! Review the concepts and try again!';
        scoreEmoji = '📚';
    } else {
        scoreMessage = 'Keep learning! Cryptography is complex!';
        scoreEmoji = '💪';
    }
    
    container.innerHTML = `
        <div class="quiz-score">
            <h2>${scoreEmoji} Your Score</h2>
            <p>${quizScore} out of ${quizQuestions.length}</p>
            <p style="font-size: 2.5rem; margin: 1rem 0;">${percentage.toFixed(1)}%</p>
            <p>${scoreMessage}</p>
        </div>

        <div class="certificate">
            <div class="certificate-title">📜 Quiz Certificate</div>
            <p>This certifies that you have completed the CryptoLearn Quiz</p>
            <p style="margin: 1rem 0;">Score: ${quizScore}/${quizQuestions.length} (${percentage.toFixed(1)}%)</p>
            <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.6);">Issued on: ${new Date().toLocaleString()}</p>
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn btn-primary" onclick="reviewAnswers()">Review Answers</button>
            <button class="btn btn-secondary" onclick="restartQuiz()">Retake Quiz</button>
        </div>
    `;
}

function reviewAnswers() {
    playSound(700, 150);
    const container = document.getElementById('quizContainer');
    
    let reviewHTML = '<div class="quiz-header"><h3>Quiz Review</h3></div>';
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = quizAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const statusClass = isCorrect ? 'correct' : (userAnswer === -1 ? '' : 'incorrect');
        
        reviewHTML += `
            <div class="question-card">
                <div class="question-text">Q${index + 1}: ${question.question}</div>
                <div class="options-group">
                    ${question.options.map((option, optIndex) => {
                        let btnClass = 'option-btn';
                        if (optIndex === question.correct) btnClass += ' correct';
                        if (userAnswer === optIndex && !isCorrect && userAnswer !== -1) btnClass += ' incorrect';
                        
                        return `<button class="${btnClass}" disabled>${String.fromCharCode(65 + optIndex)}. ${option}</button>`;
                    }).join('')}
                </div>
                <p style="margin-top: 1rem; padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 8px;">
                    <strong>Your answer:</strong> ${userAnswer === -1 ? 'Skipped' : quizQuestions[index].options[userAnswer]}
                </p>
            </div>
        `;
    });
    
    reviewHTML += `
        <div style="margin-top: 2rem;">
            <button class="btn btn-secondary" onclick="restartQuiz()">Retake Quiz</button>
        </div>
    `;
    
    container.innerHTML = reviewHTML;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    quizAnswers = [];
    localStorage.removeItem('quiz-progress');
    renderQuizContainer();
    playSound(800, 200);
}

/* ===== EXPORT FUNCTIONS ===== */
window.answerQuestion = answerQuestion;
window.skipQuestion = skipQuestion;
window.previousQuestion = previousQuestion;
window.reviewAnswers = reviewAnswers;
window.restartQuiz = restartQuiz;

/* ===== GLOBAL STATE & CONFIG ===== */
const state = {
    currentSection: 'home',
    isDarkMode: true,
    soundEnabled: true,
    recentEncryptions: [],
    quizProgress: {}
};

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadStateFromLocalStorage();
    setupEventListeners();
    createParticles();
    loadAlgorithms();
});

function initializeApp() {
    console.log('Initializing CryptoLearn...');
    applyTheme();
    setupNavigation();
    setupQuiz();
    setupNetworking();
}

function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('cryptolearn-state');
    if (saved) {
        Object.assign(state, JSON.parse(saved));
    }
    const recentEncryptions = localStorage.getItem('recent-encryptions');
    if (recentEncryptions) {
        state.recentEncryptions = JSON.parse(recentEncryptions);
    }
}

function saveStateToLocalStorage() {
    localStorage.setItem('cryptolearn-state', JSON.stringify(state));
    localStorage.setItem('recent-encryptions', JSON.stringify(state.recentEncryptions));
}

/* ===== NAVIGATION ===== */
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.dataset.section;
            navigateSection(section);
        });
    });

    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const tab = e.target.dataset.tab;
            loadAlgorithmsByTab(tab);
        });
    });
}

function navigateSection(section) {
    if (section === 'home') {
        state.currentSection = 'home-section';
    } else {
        state.currentSection = section + '-section';
    }

    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(state.currentSection).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === section) {
            link.classList.add('active');
        }
    });

    saveStateToLocalStorage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== THEME TOGGLE ===== */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    applyTheme();
    saveStateToLocalStorage();
}

function applyTheme() {
    if (state.isDarkMode) {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }
}

/* ===== SOUND TOGGLE ===== */
const soundToggle = document.getElementById('soundToggle');
soundToggle.addEventListener('click', toggleSound);

function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    soundToggle.style.opacity = state.soundEnabled ? '1' : '0.5';
    saveStateToLocalStorage();
}

function playSound(frequency = 400, duration = 100) {
    if (!state.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (e) {
        console.log('Audio context not available');
    }
}

/* ===== PARTICLE BACKGROUND ===== */
function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = (Math.random() * 8) + 's';
        particle.style.animationDuration = (5 + Math.random() * 5) + 's';
        container.appendChild(particle);
    }
}

/* ===== ENCRYPTION ALGORITHMS ===== */
const algorithms = {
    caesar: {
        name: 'Caesar Cipher',
        category: 'classical',
        description: 'A substitution cipher where each letter is shifted by a fixed number of positions.',
        history: 'Used by Julius Caesar in 1st century BC for military communications.',
        realWorld: 'ROT13 (variant) is still used in forums for spoiler protection.',
        encrypt: (text, key = 3) => {
            const shift = parseInt(key) || 3;
            return text.split('').map(char => {
                if (/[a-z]/.test(char)) {
                    return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
                } else if (/[A-Z]/.test(char)) {
                    return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
                }
                return char;
            }).join('');
        },
        decrypt: (text, key = 3) => {
            const shift = parseInt(key) || 3;
            return algorithms.caesar.encrypt(text, 26 - shift);
        },
        security: 'Very Low - Only 26 possible shifts',
        complexity: 'O(n) - Linear time'
    },

    vigenere: {
        name: 'Vigenère Cipher',
        category: 'classical',
        description: 'A polyalphabetic substitution cipher using a keyword.',
        history: 'Developed in the 16th century, considered unbreakable for 300 years.',
        realWorld: 'Historical use in diplomatic communications.',
        encrypt: (text, key = 'KEY') => {
            key = key.toUpperCase().replace(/[^A-Z]/g, '');
            if (key.length === 0) key = 'KEY';
            let result = '';
            let keyIndex = 0;

            for (let char of text) {
                if (/[a-z]/.test(char)) {
                    const shift = key.charCodeAt(keyIndex % key.length) - 65;
                    result += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
                    keyIndex++;
                } else if (/[A-Z]/.test(char)) {
                    const shift = key.charCodeAt(keyIndex % key.length) - 65;
                    result += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
                    keyIndex++;
                } else {
                    result += char;
                }
            }
            return result;
        },
        decrypt: (text, key = 'KEY') => {
            key = key.toUpperCase().replace(/[^A-Z]/g, '');
            if (key.length === 0) key = 'KEY';
            let result = '';
            let keyIndex = 0;

            for (let char of text) {
                if (/[a-z]/.test(char)) {
                    const shift = key.charCodeAt(keyIndex % key.length) - 65;
                    result += String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
                    keyIndex++;
                } else if (/[A-Z]/.test(char)) {
                    const shift = key.charCodeAt(keyIndex % key.length) - 65;
                    result += String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
                    keyIndex++;
                } else {
                    result += char;
                }
            }
            return result;
        },
        security: 'Low - Vulnerable to frequency analysis',
        complexity: 'O(n) - Linear time'
    },

    base64: {
        name: 'Base64 Encoding',
        category: 'encoding',
        description: 'Encodes binary data into ASCII text using 64 characters.',
        history: 'Developed to transmit binary data over text-only channels.',
        realWorld: 'Used in email, HTTP Basic Auth, data URIs.',
        encrypt: (text) => {
            return btoa(unescape(encodeURIComponent(text)));
        },
        decrypt: (text) => {
            return decodeURIComponent(escape(atob(text)));
        },
        security: 'None - Encoding not encryption',
        complexity: 'O(n) - Linear time'
    },

    hex: {
        name: 'Hex Encoding',
        category: 'encoding',
        description: 'Converts text to hexadecimal representation.',
        history: 'Standard in computing for representing bytes.',
        realWorld: 'Color codes, memory dumps, cryptographic hashes.',
        encrypt: (text) => {
            return text.split('').map(char => 
                char.charCodeAt(0).toString(16).padStart(2, '0')
            ).join(' ');
        },
        decrypt: (text) => {
            return text.split(' ').map(hex => 
                String.fromCharCode(parseInt(hex, 16))
            ).join('');
        },
        security: 'None - Encoding not encryption',
        complexity: 'O(n) - Linear time'
    },

    binary: {
        name: 'Binary Encoding',
        category: 'encoding',
        description: 'Converts text to binary (0s and 1s).',
        history: 'Fundamental to digital computing.',
        realWorld: 'Data transmission, signal processing.',
        encrypt: (text) => {
            return text.split('').map(char => 
                char.charCodeAt(0).toString(2).padStart(8, '0')
            ).join(' ');
        },
        decrypt: (text) => {
            return text.split(' ').map(bin => 
                String.fromCharCode(parseInt(bin, 2))
            ).join('');
        },
        security: 'None - Encoding not encryption',
        complexity: 'O(n) - Linear time'
    },

    ascii: {
        name: 'ASCII Conversion',
        category: 'encoding',
        description: 'Converts text to ASCII decimal values.',
        history: 'ASCII (American Standard Code) established in 1963.',
        realWorld: 'Character encoding standard in computers.',
        encrypt: (text) => {
            return text.split('').map(char => char.charCodeAt(0)).join(' ');
        },
        decrypt: (text) => {
            return text.split(' ').map(code => String.fromCharCode(parseInt(code))).join('');
        },
        security: 'None - Just value representation',
        complexity: 'O(n) - Linear time'
    },

    rsa: {
        name: 'RSA (Simplified Demo)',
        category: 'modern',
        description: 'Asymmetric cryptography using public and private keys.',
        history: 'Invented in 1977, still widely used today.',
        realWorld: 'HTTPS, digital signatures, secure email.',
        encrypt: (text, key = '65537') => {
            return text.split('').map(char => {
                const charCode = char.charCodeAt(0);
                return (charCode * parseInt(key)) % 256;
            }).map(code => code.toString(16).padStart(2, '0')).join('');
        },
        decrypt: (text, key = '65537') => {
            const keyNum = parseInt(key);
            const modInverse = 1; // Simplified - not true modular inverse
            return text.match(/.{2}/g).map(hex => {
                const code = parseInt(hex, 16);
                return String.fromCharCode(code / keyNum);
            }).join('').replace(/\u0000/g, '');
        },
        security: 'Very High - 2048-4096 bit keys used',
        complexity: 'O(log n) - Logarithmic'
    },

    des: {
        name: 'DES (Simplified Demo)',
        category: 'modern',
        description: 'Data Encryption Standard - 64-bit block cipher.',
        history: 'Adopted as US standard in 1977, deprecated in 2005.',
        realWorld: 'Legacy systems, now replaced by AES.',
        encrypt: (text, key = '12345678') => {
            let result = '';
            for (let i = 0; i < text.length; i++) {
                const charCode = text.charCodeAt(i);
                const keyCode = key.charCodeAt(i % key.length);
                result += String.fromCharCode((charCode + keyCode) % 256);
            }
            return btoa(result);
        },
        decrypt: (text, key = '12345678') => {
            const decoded = atob(text);
            let result = '';
            for (let i = 0; i < decoded.length; i++) {
                const charCode = decoded.charCodeAt(i);
                const keyCode = key.charCodeAt(i % key.length);
                result += String.fromCharCode((charCode - keyCode + 256) % 256);
            }
            return result;
        },
        security: 'Low - 56-bit effective key, broken in 1997',
        complexity: 'O(n) - Linear with multiple rounds'
    },

    aes: {
        name: 'AES (Simplified Demo)',
        category: 'modern',
        description: 'Advanced Encryption Standard - modern secure cipher.',
        history: 'Adopted as US standard in 2001, still secure today.',
        realWorld: 'HTTPS, file encryption, government use.',
        encrypt: (text, key = 'defaultkey') => {
            // Simplified XOR-based demo version
            let result = '';
            for (let i = 0; i < text.length; i++) {
                const charCode = text.charCodeAt(i);
                const keyCode = key.charCodeAt(i % key.length);
                result += String.fromCharCode(charCode ^ keyCode);
            }
            return btoa(result);
        },
        decrypt: (text, key = 'defaultkey') => {
            const decoded = atob(text);
            let result = '';
            for (let i = 0; i < decoded.length; i++) {
                const charCode = decoded.charCodeAt(i);
                const keyCode = key.charCodeAt(i % key.length);
                result += String.fromCharCode(charCode ^ keyCode);
            }
            return result;
        },
        security: 'Very High - 128, 192, or 256-bit keys',
        complexity: 'O(n) - Linear with 10-14 rounds'
    },

    md5: {
        name: 'MD5 Hash',
        category: 'hashing',
        description: 'Cryptographic hash function producing 128-bit hash.',
        history: 'Designed by Ronald Rivest in 1992, now deprecated.',
        realWorld: 'Legacy systems, file checksums (not recommended).',
        encrypt: (text) => {
            // Simplified hash simulation
            let hash = 0;
            for (let i = 0; i < text.length; i++) {
                hash = ((hash << 5) - hash) + text.charCodeAt(i);
                hash = hash & hash;
            }
            return Math.abs(hash).toString(16);
        },
        decrypt: () => 'Hashing is one-way - cannot decrypt',
        security: 'None - Vulnerable to collisions',
        complexity: 'O(n) - Linear time'
    },

    sha256: {
        name: 'SHA-256 Hash',
        category: 'hashing',
        description: 'Secure Hash Algorithm producing 256-bit hash.',
        history: 'Part of SHA-2 family, adopted in 2001.',
        realWorld: 'Blockchain, digital signatures, SSL certificates.',
        encrypt: (text) => {
            // Simplified SHA-like hash
            let hash = 0x9e3779b97f4a7c15;
            for (let i = 0; i < text.length; i++) {
                hash ^= text.charCodeAt(i);
                hash *= 0x85ebca6b;
            }
            return hash.toString(16).substring(0, 64);
        },
        decrypt: () => 'Hashing is one-way - cannot decrypt',
        security: 'Very High - No known attacks',
        complexity: 'O(n) - Linear time'
    }
};

/* ===== LOAD ALGORITHMS ===== */
function loadAlgorithms() {
    loadAlgorithmsByTab('classical');
}

function loadAlgorithmsByTab(tab) {
    const grid = document.getElementById('algorithmsGrid');
    grid.innerHTML = '';

    Object.entries(algorithms).forEach(([key, algo]) => {
        if (algo.category === tab) {
            const card = document.createElement('div');
            card.className = 'algorithm-card';
            card.innerHTML = `
                <h3>${algo.name}</h3>
                <p>${algo.description}</p>
                <div class="algorithm-meta">
                    <span class="meta-tag">History: ${algo.history.substring(0, 30)}...</span>
                    <span class="meta-tag">Security: ${algo.security}</span>
                </div>
                <button class="btn btn-sm btn-primary" onclick="showAlgorithmDetails('${key}')">Learn More</button>
            `;
            grid.appendChild(card);
        }
    });
}

function showAlgorithmDetails(algoKey) {
    const algo = algorithms[algoKey];
    alert(`
${algo.name}

Description: ${algo.description}

History: ${algo.history}

Real World Usage: ${algo.realWorld}

Security Level: ${algo.security}

Time Complexity: ${algo.complexity}
    `.trim());
}

/* ===== VISUALIZER FUNCTIONS ===== */
function encryptVisualize() {
    playSound(600, 100);
    const plainText = document.getElementById('plainText').value;
    const algorithm = document.getElementById('algorithmSelect').value;
    const key = document.getElementById('encryptionKey').value;

    if (!plainText) {
        alert('Please enter text to encrypt');
        return;
    }

    const algo = algorithms[algorithm];
    const startTime = performance.now();
    const cipherText = algo.encrypt(plainText, key);
    const endTime = performance.now();
    const elapsed = (endTime - startTime).toFixed(2);

    displayOutput(cipherText);
    displaySteps(plainText, cipherText, algorithm);
    displayMetrics(plainText, cipherText, elapsed, algo.security);

    // Save to history
    state.recentEncryptions.push({
        plain: plainText,
        cipher: cipherText,
        algorithm: algorithm,
        timestamp: new Date().toLocaleString()
    });
    if (state.recentEncryptions.length > 10) {
        state.recentEncryptions.shift();
    }
    saveStateToLocalStorage();
}

function decryptVisualize() {
    playSound(400, 100);
    const cipherText = document.getElementById('plainText').value;
    const algorithm = document.getElementById('algorithmSelect').value;
    const key = document.getElementById('encryptionKey').value;

    if (!cipherText) {
        alert('Please enter text to decrypt');
        return;
    }

    const algo = algorithms[algorithm];
    try {
        const plainText = algo.decrypt(cipherText, key);
        displayOutput(plainText);
        displaySteps(cipherText, plainText, algorithm + '-decrypt');
    } catch (error) {
        alert('Decryption failed: ' + error.message);
    }
}

function displayOutput(output) {
    const outputBox = document.getElementById('cipherOutput');
    outputBox.innerHTML = '';
    
    let displayText = output;
    if (output.length > 200) {
        displayText = output.substring(0, 200) + '...';
    }
    
    outputBox.textContent = displayText;
    
    // Animate reveal
    outputBox.style.animation = 'none';
    setTimeout(() => {
        outputBox.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

function displaySteps(input, output, algorithm) {
    const container = document.getElementById('stepsAnimation');
    container.innerHTML = '';

    const steps = [];
    steps.push({
        text: `Algorithm: ${algorithms[algorithm.replace('-decrypt', '')] ? algorithms[algorithm.replace('-decrypt', '')].name : algorithm}`,
        type: 'info'
    });
    steps.push({
        text: `Input Length: ${input.length} characters`,
        type: 'info'
    });
    steps.push({
        text: `Output Length: ${output.length} characters`,
        type: 'info'
    });

    if (algorithm.includes('caesar')) {
        for (let i = 0; i < Math.min(input.length, 5); i++) {
            steps.push({
                text: `${input[i]} → ${output[i]}`,
                type: 'transform'
            });
        }
        if (input.length > 5) {
            steps.push({
                text: `... and ${input.length - 5} more characters`,
                type: 'info'
            });
        }
    } else {
        steps.push({
            text: 'Processing complete',
            type: 'complete'
        });
    }

    steps.forEach(step => {
        const item = document.createElement('div');
        item.className = 'step-item';
        item.textContent = step.text;
        container.appendChild(item);
    });
}

function displayMetrics(plainText, cipherText, time, security) {
    document.getElementById('encryptTime').textContent = time + 'ms';
    document.getElementById('charCount').textContent = plainText.length;
    document.getElementById('securityLevel').textContent = security;
}

function resetVisualizer() {
    document.getElementById('plainText').value = '';
    document.getElementById('encryptionKey').value = '';
    document.getElementById('cipherOutput').innerHTML = '';
    document.getElementById('stepsAnimation').innerHTML = '';
    document.getElementById('encryptTime').textContent = '0ms';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('securityLevel').textContent = 'Low';
}

function copyOutput() {
    const output = document.getElementById('cipherOutput').textContent;
    if (!output) {
        alert('Nothing to copy!');
        return;
    }
    navigator.clipboard.writeText(output).then(() => {
        alert('Copied to clipboard!');
        playSound(800, 150);
    });
}

function downloadResult() {
    const output = document.getElementById('cipherOutput').textContent;
    const plainText = document.getElementById('plainText').value;
    if (!output) {
        alert('Nothing to download!');
        return;
    }

    const content = `Plain Text: ${plainText}\n\nCipher Text: ${output}\n\nGenerated on: ${new Date().toLocaleString()}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encryption-result.txt';
    a.click();
    window.URL.revokeObjectURL(url);
    playSound(700, 150);
}

/* ===== EVENT LISTENERS ===== */
function setupEventListeners() {
    document.getElementById('plainText').addEventListener('input', () => {
        playSound(300, 30);
    });
}

/* ===== EXPORT FOR OTHER MODULES ===== */
window.algorithms = algorithms;
window.encryptVisualize = encryptVisualize;
window.decryptVisualize = decryptVisualize;
window.resetVisualizer = resetVisualizer;
window.copyOutput = copyOutput;
window.downloadResult = downloadResult;
window.navigateSection = navigateSection;
window.showAlgorithmDetails = showAlgorithmDetails;
window.playSound = playSound;

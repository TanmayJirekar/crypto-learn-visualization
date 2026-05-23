/* ===== ADVANCED ENCRYPTION ALGORITHMS ===== */

// Playfair Cipher
const playfairAlgorithm = {
    name: 'Playfair Cipher',
    description: 'Digraph substitution cipher using a 5x5 grid.',
    
    createMatrix: (key) => {
        let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // I/J combined
        key = key.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
        
        let matrix = [];
        let used = new Set();
        
        for (let char of key) {
            if (!used.has(char)) {
                matrix.push(char);
                used.add(char);
            }
        }
        
        for (let char of alphabet) {
            if (!used.has(char)) {
                matrix.push(char);
                used.add(char);
            }
        }
        
        return matrix;
    },
    
    encrypt: (text, key = 'PLAYFAIR') => {
        text = text.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
        const matrix = playfairAlgorithm.createMatrix(key);
        
        let result = '';
        for (let i = 0; i < text.length; i += 2) {
            let a = text[i];
            let b = text[i + 1] || 'X';
            
            let posA = matrix.indexOf(a);
            let posB = matrix.indexOf(b);
            
            let rowA = Math.floor(posA / 5);
            let colA = posA % 5;
            let rowB = Math.floor(posB / 5);
            let colB = posB % 5;
            
            if (rowA === rowB) {
                colA = (colA + 1) % 5;
                colB = (colB + 1) % 5;
            } else if (colA === colB) {
                rowA = (rowA + 1) % 5;
                rowB = (rowB + 1) % 5;
            } else {
                [colA, colB] = [colB, colA];
            }
            
            result += matrix[rowA * 5 + colA] + matrix[rowB * 5 + colB];
        }
        
        return result;
    },
    
    decrypt: (text, key = 'PLAYFAIR') => {
        text = text.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
        const matrix = playfairAlgorithm.createMatrix(key);
        
        let result = '';
        for (let i = 0; i < text.length; i += 2) {
            let a = text[i];
            let b = text[i + 1];
            
            let posA = matrix.indexOf(a);
            let posB = matrix.indexOf(b);
            
            let rowA = Math.floor(posA / 5);
            let colA = posA % 5;
            let rowB = Math.floor(posB / 5);
            let colB = posB % 5;
            
            if (rowA === rowB) {
                colA = (colA - 1 + 5) % 5;
                colB = (colB - 1 + 5) % 5;
            } else if (colA === colB) {
                rowA = (rowA - 1 + 5) % 5;
                rowB = (rowB - 1 + 5) % 5;
            } else {
                [colA, colB] = [colB, colA];
            }
            
            result += matrix[rowA * 5 + colA] + matrix[rowB * 5 + colB];
        }
        
        return result;
    }
};

// Rail Fence Cipher
const railFenceAlgorithm = {
    name: 'Rail Fence Cipher',
    description: 'Transposition cipher that arranges text in a zigzag pattern.',
    
    encrypt: (text, key = '2') => {
        const rails = parseInt(key) || 2;
        if (rails === 1 || rails >= text.length) return text;
        
        const fence = Array(rails).fill('').map(() => []);
        let rail = 0;
        let direction = 1;
        
        for (let char of text) {
            fence[rail].push(char);
            
            if (rail === 0) direction = 1;
            else if (rail === rails - 1) direction = -1;
            
            rail += direction;
        }
        
        return fence.flat().join('');
    },
    
    decrypt: (text, key = '2') => {
        const rails = parseInt(key) || 2;
        if (rails === 1 || rails >= text.length) return text;
        
        const fence = Array(rails).fill(0);
        let rail = 0;
        let direction = 1;
        
        for (let i = 0; i < text.length; i++) {
            fence[rail]++;
            
            if (rail === 0) direction = 1;
            else if (rail === rails - 1) direction = -1;
            
            rail += direction;
        }
        
        let railArrays = [];
        let index = 0;
        for (let count of fence) {
            railArrays.push(text.substring(index, index + count));
            index += count;
        }
        
        let result = '';
        rail = 0;
        direction = 1;
        
        for (let i = 0; i < text.length; i++) {
            result += railArrays[rail][0];
            railArrays[rail] = railArrays[rail].substring(1);
            
            if (rail === 0) direction = 1;
            else if (rail === rails - 1) direction = -1;
            
            rail += direction;
        }
        
        return result;
    }
};

// Atbash Cipher (Simple reversal)
const atbashAlgorithm = {
    name: 'Atbash Cipher',
    description: 'Substitution cipher where A↔Z, B↔Y, etc.',
    
    encrypt: (text) => {
        return text.split('').map(char => {
            if (/[a-z]/.test(char)) {
                return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
            } else if (/[A-Z]/.test(char)) {
                return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
            }
            return char;
        }).join('');
    },
    
    decrypt: (text) => {
        return atbashAlgorithm.encrypt(text); // Atbash is symmetric
    }
};

// Substitution Cipher (Simple)
const substitutionAlgorithm = {
    name: 'Monoalphabetic Cipher',
    description: 'Each letter maps to another letter (simple substitution).',
    
    encrypt: (text, key = 'QWERTYUIOPASDFGHJKLZXCVBNM') => {
        const standard = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        
        for (let char of text) {
            if (/[a-z]/.test(char)) {
                const index = char.toUpperCase().charCodeAt(0) - 65;
                result += key[index].toLowerCase();
            } else if (/[A-Z]/.test(char)) {
                const index = char.charCodeAt(0) - 65;
                result += key[index];
            } else {
                result += char;
            }
        }
        
        return result;
    },
    
    decrypt: (text, key = 'QWERTYUIOPASDFGHJKLZXCVBNM') => {
        const standard = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        
        for (let char of text) {
            let idx = -1;
            if (/[a-z]/.test(char)) {
                idx = key.toLowerCase().indexOf(char);
                result += idx !== -1 ? standard[idx].toLowerCase() : char;
            } else if (/[A-Z]/.test(char)) {
                idx = key.indexOf(char);
                result += idx !== -1 ? standard[idx] : char;
            } else {
                result += char;
            }
        }
        
        return result;
    }
};

// URL Encoding
const urlEncodingAlgorithm = {
    name: 'URL Encoding',
    description: 'Encodes special characters for use in URLs.',
    
    encrypt: (text) => {
        return encodeURIComponent(text);
    },
    
    decrypt: (text) => {
        return decodeURIComponent(text);
    }
};

// ROT13 (Caesar variant)
const rot13Algorithm = {
    name: 'ROT13',
    description: 'Caesar cipher with rotation of 13 (A↔N).',
    
    encrypt: (text) => {
        return text.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    },
    
    decrypt: (text) => {
        return rot13Algorithm.encrypt(text); // ROT13 is symmetric
    }
};

// Morse Code Encoding
const morseAlgorithm = {
    name: 'Morse Code',
    description: 'Encodes text as dots and dashes.',
    
    morseCodes: {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
        '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
        '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    },
    
    encrypt: (text) => {
        return text.toUpperCase().split('').map(char => 
            morseAlgorithm.morseCodes[char] || char
        ).join(' | ');
    },
    
    decrypt: (text) => {
        const reverseMorse = {};
        for (let [key, value] of Object.entries(morseAlgorithm.morseCodes)) {
            reverseMorse[value] = key;
        }
        
        return text.split(' | ').map(morse => 
            reverseMorse[morse] || morse
        ).join('');
    }
};

// XOR Cipher
const xorAlgorithm = {
    name: 'XOR Cipher',
    description: 'Uses XOR operation with a key for encryption.',
    
    encrypt: (text, key = 'KEY') => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text.charCodeAt(i);
            const keyChar = key.charCodeAt(i % key.length);
            result += String.fromCharCode(char ^ keyChar);
        }
        return btoa(result);
    },
    
    decrypt: (text, key = 'KEY') => {
        const decoded = atob(text);
        let result = '';
        for (let i = 0; i < decoded.length; i++) {
            const char = decoded.charCodeAt(i);
            const keyChar = key.charCodeAt(i % key.length);
            result += String.fromCharCode(char ^ keyChar);
        }
        return result;
    }
};

// Beaufort Cipher
const beaufortAlgorithm = {
    name: 'Beaufort Cipher',
    description: 'Similar to Vigenère but uses subtraction instead of addition.',
    
    encrypt: (text, key = 'KEY') => {
        key = key.toUpperCase().replace(/[^A-Z]/g, '');
        if (key.length === 0) key = 'KEY';
        let result = '';
        let keyIndex = 0;
        
        for (let char of text) {
            if (/[a-z]/.test(char)) {
                const shift = key.charCodeAt(keyIndex % key.length) - 65;
                result += String.fromCharCode(((shift - (char.charCodeAt(0) - 97)) % 26 + 26) % 26 + 97);
                keyIndex++;
            } else if (/[A-Z]/.test(char)) {
                const shift = key.charCodeAt(keyIndex % key.length) - 65;
                result += String.fromCharCode(((shift - (char.charCodeAt(0) - 65)) % 26 + 26) % 26 + 65);
                keyIndex++;
            } else {
                result += char;
            }
        }
        return result;
    },
    
    decrypt: (text, key = 'KEY') => {
        return beaufortAlgorithm.encrypt(text, key); // Beaufort is symmetric
    }
};

// Store all algorithms
const allAlgorithms = {
    playfair: playfairAlgorithm,
    railFence: railFenceAlgorithm,
    atbash: atbashAlgorithm,
    substitution: substitutionAlgorithm,
    urlEncoding: urlEncodingAlgorithm,
    rot13: rot13Algorithm,
    morse: morseAlgorithm,
    xor: xorAlgorithm,
    beaufort: beaufortAlgorithm
};

// Export or log for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allAlgorithms;
}

# CryptoLearn – Encryption & Decryption Visualizer

A comprehensive, interactive educational platform for learning cryptography, encryption algorithms, and networking security concepts. Built with vanilla HTML, CSS, and JavaScript – no frameworks required!

## 🌟 Features

### Core Features
- **Interactive Encryption Visualizer** - Encrypt and decrypt text in real-time with step-by-step visualization
- **Multiple Algorithms** - 10+ encryption algorithms with working implementations
- **Educational Content** - Detailed explanations of each algorithm's history, usage, and security level
- **Quiz System** - 20 comprehensive questions to test your cryptography knowledge
- **Networking Security** - Learn about SSL/TLS, HTTPS, VPN, and MITM attacks
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Sound Effects** - Optional audio feedback for user interactions
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop

### Encryption Algorithms Included

**Classical Algorithms:**
- Caesar Cipher (with adjustable shift)
- Vigenère Cipher (polyalphabetic substitution)
- Playfair Cipher (digraph substitution)
- Rail Fence Cipher (transposition)
- Atbash Cipher (letter reversal)
- Monoalphabetic Substitution

**Modern Encryption:**
- AES (Simplified demo version)
- DES (Simplified demo version)
- RSA (Simplified demo version)
- XOR Cipher

**Hashing Algorithms:**
- MD5 Hash (with warning about deprecation)
- SHA-256 Hash

**Encoding Techniques:**
- Base64 Encoding
- Hex Encoding
- Binary Encoding
- ASCII Conversion
- URL Encoding
- ROT13
- Morse Code

### Networking Security Topics
- **SSL/TLS** - Secure communication protocol with handshake visualization
- **HTTPS** - HTTP over SSL/TLS for secure web browsing
- **VPN** - Virtual Private Networks for encrypted tunneling
- **MITM Attack** - Man-in-the-Middle attack simulation and defense

## 🚀 Getting Started

### No Installation Required!
Simply open `index.html` in a modern web browser. The entire application runs client-side.

```bash
# Option 1: Direct file opening
# Double-click index.html or open with your browser

# Option 2: Using a local server (Python 3)
python3 -m http.server 8000
# Visit http://localhost:8000

# Option 3: Using Node.js
npx http-server
# Visit http://localhost:8080
```

## 📁 Project Structure

```
cryptolearn/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with animations
├── script.js           # Core functionality and main algorithms
├── algorithms.js       # Advanced encryption algorithms
├── quiz.js             # Quiz system with localStorage
├── animations.js       # Animation effects and utilities
├── networking.js       # Networking security content
└── README.md          # This file
```

## 💾 Data Persistence

All user data is stored locally using the **localStorage API**:

- **Quiz Progress** - Quiz answers, scores, and attempts
- **Recent Encryptions** - Last 10 encryption operations
- **App State** - Current theme, sound settings, last viewed section

### Data Stored
```javascript
{
  "cryptolearn-state": {
    "currentSection": "home-section",
    "isDarkMode": true,
    "soundEnabled": true,
    "recentEncryptions": [...],
    "quizProgress": {}
  },
  "quiz-progress": {
    "score": 15,
    "answers": [1, 2, 0, ...],
    "currentIndex": 0,
    "lastAttempt": "5/23/2026, 5:29:58 AM"
  },
  "recent-encryptions": [...]
}
```

## 🎮 How to Use

### 1. Explore Algorithms
- Click "Start Learning" or "Algorithms" in navigation
- Browse algorithm categories: Classical, Modern, Hashing, Encoding
- Click "Learn More" on any algorithm card to see detailed information

### 2. Use the Visualizer
1. Navigate to "Visualizer" section
2. Enter text to encrypt in "Plain Text" field
3. Select an encryption algorithm from dropdown
4. Enter a key/shift value if needed (e.g., 3 for Caesar cipher)
5. Click "Encrypt" to see the transformation
6. View step-by-step process and metrics
7. Click "Decrypt" to reverse the process
8. Use "Copy" or "Download" to save results

### 3. Learn Networking Security
- Navigate to "Networking" section
- Choose topic: SSL/TLS, HTTPS, VPN, or MITM Attack
- Read detailed explanations with ASCII diagrams
- Understand how encryption protects network communication

### 4. Take the Quiz
- Navigate to "Quiz" section
- Answer 20 multiple-choice questions
- View immediate feedback and progress
- See final score and certificate
- Review all answers with corrections

### 5. Customize Your Experience
- Toggle **Dark/Light Mode** using sun/moon icon
- Toggle **Sound Effects** using speaker icon
- Your preferences are automatically saved

## 🔐 Encryption Details

### Caesar Cipher Example
```
Plain Text:  HELLO
Shift:       3
Cipher Text: KHOOR

H → K, E → H, L → O, L → O, O → R
```

### Base64 Example
```
Plain Text:  Hello
Cipher Text: SGVsbG8=
```

### Hex Example
```
Plain Text:  Hello
Cipher Text: 48 65 6c 6c 6f
```

## 🎨 Design Features

- **Glassmorphism** - Modern frosted glass effect
- **Gradient Text** - Animated gradient text effects
- **Neon Glow** - Cyan and purple glowing effects
- **Particle Animation** - Floating particles in background
- **Smooth Transitions** - All interactions have smooth CSS transitions
- **Responsive Flexbox/Grid** - Mobile-first responsive layout
- **Custom Scrollbar** - Themed scrollbar styling

## 📊 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Requires JavaScript enabled and modern CSS support

## 🎓 Educational Content

Each algorithm includes:
- **Description** - What the algorithm does
- **History** - When it was invented and by whom
- **Real-World Usage** - Current applications
- **Security Level** - How secure it is
- **Time Complexity** - Performance characteristics
- **Advantages/Disadvantages** - Practical considerations

## 🔧 Technical Details

### No External Dependencies
- Pure HTML5, CSS3, and ECMAScript 6+
- No frameworks, libraries, or CDNs
- No backend server required
- Everything runs in the browser

### Performance
- Lightweight and fast loading
- Smooth animations using CSS and requestAnimationFrame
- Optimized for mobile devices
- Fast encryption algorithms (suitable for demonstration)

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support

## 🐛 Known Limitations

- **Simplified Algorithms** - AES, RSA, and DES are simplified for demonstration (not cryptographically secure)
- **MD5** - Included for educational purposes but marked as deprecated
- **No Real Encryption** - For sensitive data, use proper libraries like TweetNaCl.js
- **Storage Limits** - Browser localStorage has ~5-10MB limit

## 🚀 Future Enhancements

Possible additions:
- [ ] Real AES implementation using libsodium.js
- [ ] RSA with actual key generation
- [ ] More classical algorithms (Vigenère brute force, frequency analysis)
- [ ] Interactive encryption challenge mode
- [ ] Certificate generator simulator
- [ ] Key strength visualizer
- [ ] More networking protocols (BGP, DNS security)
- [ ] PDF export for notes

## 📜 License

Open source - Free to use for educational purposes

## 🙏 Credits

Built as an interactive cryptography learning platform. All encryption algorithms implemented from scratch for educational demonstration.

## 📚 Learning Resources

Recommended resources to deepen your knowledge:
- [NIST Cryptographic Standards](https://csrc.nist.gov/)
- [Wikipedia - Cryptography](https://en.wikipedia.org/wiki/Cryptography)
- [Khan Academy - Cryptography](https://www.khanacademy.org/)
- [Crypto Historian - Algorithm History](https://www.cryptomuseum.com/)

## 💡 Tips for Learning

1. **Start with Caesar Cipher** - Simplest to understand
2. **Try different keys** - See how the same text encrypts differently
3. **Study the metrics** - Understand encryption speed and character count
4. **Take the quiz** - Test your knowledge
5. **Review real-world usage** - Understand practical applications
6. **Compare algorithms** - See differences in security levels

---

**Happy Learning! 🔐**

For the best experience, use a modern browser and enable JavaScript. Enjoy exploring the fascinating world of cryptography!

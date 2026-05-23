# CryptoLearn – Quick Start Guide

## 🚀 Instant Launch

**No setup required!** Simply open `index.html` in your browser.

```bash
# Option 1: Direct opening
# Double-click index.html

# Option 2: Local server (Python)
python3 -m http.server 8000
# Visit http://localhost:8000

# Option 3: Live Server (VS Code)
# Install "Live Server" extension and right-click > Open with Live Server
```

## 📱 What You Get

| Feature | Details |
|---------|---------|
| **Algorithms** | 25+ encryption methods with working implementations |
| **Visualizer** | Real-time encryption/decryption with step-by-step breakdown |
| **Quiz** | 20 questions to test cryptography knowledge |
| **Networking** | SSL/TLS, HTTPS, VPN, and MITM attack explanations |
| **Themes** | Dark and light mode with localStorage persistence |
| **Responsive** | Works perfectly on mobile, tablet, and desktop |

## 🔄 How It Works

### 1. **Algorithms Page**
- Browse 4 categories: Classical, Modern, Hashing, Encoding
- Click "Learn More" for detailed information about each algorithm
- See real-world usage and security levels

### 2. **Visualizer Page**
```
1. Enter text to encrypt → "HELLO"
2. Pick an algorithm → Caesar Cipher
3. Enter shift key → 3
4. Click ENCRYPT → See result "KHOOR"
5. Click DECRYPT → Get back "HELLO"
```

### 3. **Quiz Page**
- 20 multiple-choice questions
- Get instant feedback
- View final score and certificate
- Review all answers

### 4. **Networking Page**
- Learn about SSL/TLS handshakes
- Understand HTTPS security
- VPN encryption tunnels
- MITM attack simulations

## 💾 Data Saved (Automatically)

Your data is stored locally in your browser:
- ✓ Quiz scores and progress
- ✓ Recent encryptions
- ✓ Theme preference (dark/light)
- ✓ Sound settings

Clear anytime in browser DevTools → Application → LocalStorage

## 🎓 Algorithm Quick Reference

| Algorithm | Type | Use Case | Shift |
|-----------|------|----------|-------|
| Caesar | Classical | Learning | 3 |
| Vigenère | Classical | Password | KEY |
| Base64 | Encoding | Data transmission | - |
| Hex | Encoding | Color codes | - |
| Binary | Encoding | Digital data | - |
| ASCII | Encoding | Character codes | - |
| AES | Modern | Banking | password |
| RSA | Modern | HTTPS | 65537 |
| MD5 | Hashing | Legacy (deprecated) | - |
| SHA-256 | Hashing | Blockchain | - |

## 🎨 UI Controls

| Control | Action | Shortcut |
|---------|--------|----------|
| **☀️ Moon icon** | Toggle light/dark theme | Top right |
| **🔊 Speaker icon** | Toggle sound effects | Top right |
| **Navigation menu** | Jump to sections | Top bar |
| **Tab buttons** | Filter algorithms | Algorithm page |
| **ENCRYPT** | Encrypt text | Visualizer |
| **DECRYPT** | Decrypt text | Visualizer |
| **COPY** | Copy to clipboard | Output |
| **DOWNLOAD** | Save as text file | Output |

## 📊 Example Encryptions

### Caesar Cipher (Shift: 3)
```
HELLO → KHOOR
H → K, E → H, L → O, L → O, O → R
```

### Vigenère (Key: SECRET)
```
HELLO → ZINCO
Uses repeating key: SECRE
```

### Base64
```
HELLO → SEVMTE8=
```

### Hex
```
HELLO → 48 45 4C 4C 4F
```

### Binary
```
HELLO → 01001000 01000101 01001100 01001100 01001111
```

## ❓ FAQ

**Q: Is my data secure?**
A: This is for educational purposes. Real encryption uses libraries like libsodium.js. For sensitive data, don't rely on this app.

**Q: Can I use this offline?**
A: Yes! Download the files and open index.html locally. Works completely offline.

**Q: Where is my data stored?**
A: All data stays in your browser's localStorage. No server access. No cloud sync.

**Q: How do I clear my data?**
A: Open DevTools (F12) → Application → LocalStorage → Delete all.

**Q: Which algorithms are "real"?**
A: Classical algorithms (Caesar, Vigenère) are fully functional. Modern algorithms (AES, RSA) are simplified demos for learning.

**Q: Can I modify the code?**
A: Yes! Everything is in plain HTML/CSS/JS. Edit as needed for your learning.

## 🛠️ File Breakdown

- **index.html** - Main page structure and layout
- **styles.css** - All styling and animations (19KB)
- **script.js** - Core algorithms and functionality
- **algorithms.js** - Advanced encryption methods
- **quiz.js** - Quiz system with scoring
- **networking.js** - Network security content
- **animations.js** - Animation utilities and effects

## 🎯 Learning Path Recommended

1. **Start with Home** - Understand what CryptoLearn offers
2. **Classical Algorithms** - Caesar, Vigenère, Atbash
3. **Use Visualizer** - Try encrypting your own text
4. **Encoding Techniques** - Base64, Hex, Binary
5. **Modern Algorithms** - AES, RSA (understanding)
6. **Networking Security** - SSL/TLS and HTTPS
7. **Take Quiz** - Test your knowledge
8. **Review** - Go back to topics you want to master

## 🚀 Tips for Best Experience

1. **Use Chrome/Firefox** - Best browser support
2. **Enable sound** - Enjoy audio feedback
3. **Try different keys** - See how encryption changes
4. **Read explanations** - Click "Learn More" on cards
5. **Take notes** - Education works better with notes
6. **Retake quiz** - Improve your score each time
7. **Dark mode** - Easier on eyes during night study

## 📚 What You'll Learn

After completing CryptoLearn, you'll understand:
- ✓ How encryption transforms text
- ✓ Differences between substitution and transposition
- ✓ Symmetric vs asymmetric encryption
- ✓ Hash functions and their uses
- ✓ How HTTPS protects your data
- ✓ Why encryption matters in security
- ✓ Real-world cryptography applications

## 🎓 Next Steps

To deepen your knowledge:
1. Research **libsodium.js** - Real encryption library
2. Study **RSA mathematics** - Public key cryptography
3. Learn **AES standards** - Modern encryption
4. Explore **TLS handshakes** - Network security
5. Join **CTF competitions** - Capture The Flag hacking

---

**Ready to learn? Open index.html and start exploring! 🔐**

**Questions?** Check the README.md for more detailed information.

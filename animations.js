/* ===== ADVANCED ANIMATIONS & EFFECTS ===== */

// Typing effect for text elements
function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Matrix rain background effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.05';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アウェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(canvas.height);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00d4ff';
        ctx.font = '20px monospace';
        
        for (let i = 0; i < columns; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 20, drops[i]);
            
            if (drops[i] * Math.random() > 0.975 || drops[i] > canvas.height) {
                drops[i] = 0;
            }
            
            drops[i] += 20;
        }
    }
    
    setInterval(draw, 33);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Glitch effect
function glitchText(element) {
    const text = element.textContent;
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'.split('');
    
    let glitchCount = 0;
    const interval = setInterval(() => {
        if (glitchCount < 5) {
            let glitched = '';
            for (let char of text) {
                if (Math.random() > 0.7) {
                    glitched += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    glitched += char;
                }
            }
            element.textContent = glitched;
            glitchCount++;
        } else {
            element.textContent = text;
            clearInterval(interval);
        }
    }, 50);
}

// Pulse animation
function addPulseEffect(element) {
    element.style.animation = 'pulse 2s ease-in-out infinite';
}

// Glow effect on hover
function addGlowEffect(element) {
    element.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.8)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
    });
}

// Scroll animations
function observeScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.algorithm-card').forEach(card => {
        observer.observe(card);
    });
}

// Confetti animation
function createConfetti() {
    const colors = ['#00d4ff', '#b300ff', '#ff006e'];
    const confetti = [];
    
    for (let i = 0; i < 30; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'fixed';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.top = '-10px';
        conf.style.width = '10px';
        conf.style.height = '10px';
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.borderRadius = '50%';
        conf.style.zIndex = '9999';
        conf.style.pointerEvents = 'none';
        
        document.body.appendChild(conf);
        
        const duration = 2000 + Math.random() * 1000;
        const startTime = Date.now();
        
        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            if (progress < 1) {
                conf.style.top = (progress * window.innerHeight) + 'px';
                conf.style.left = (parseFloat(conf.style.left) + Math.sin(progress * Math.PI * 4) * 2) + '%';
                conf.style.opacity = 1 - progress;
                requestAnimationFrame(animate);
            } else {
                conf.remove();
            }
        }
        
        animate();
    }
}

// Wave animation
function createWaveEffect(element) {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
        `<span style="display: inline-block; animation: wave 0.6s ease-in-out infinite;">${char}</span>`
    ).join('');
    
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.animationDelay = (index * 0.1) + 's';
    });
}

// Progress bar animation
function animateProgressBar(element, targetWidth) {
    let currentWidth = 0;
    const increment = targetWidth / 100;
    
    const interval = setInterval(() => {
        currentWidth += increment;
        if (currentWidth >= targetWidth) {
            currentWidth = targetWidth;
            clearInterval(interval);
        }
        element.style.width = currentWidth + '%';
    }, 20);
}

// Floating animation
function addFloatingEffect(element) {
    element.style.animation = 'floating 3s ease-in-out infinite';
}

// Bounce animation
function addBounceEffect(element) {
    element.style.animation = 'bounce 0.6s ease-in-out';
}

// Flip animation
function flipElement(element) {
    element.style.animation = 'flip 0.6s ease-in-out';
}

// Rotate animation
function rotateElement(element, duration = 1) {
    element.style.animation = `rotate ${duration}s linear infinite`;
}

// Shimmer effect (like loading)
function addShimmerEffect(element) {
    element.style.background = 'linear-gradient(90deg, rgba(0,212,255,0.1) 25%, rgba(0,212,255,0.3) 50%, rgba(0,212,255,0.1) 75%)';
    element.style.backgroundSize = '200% 100%';
    element.style.animation = 'shimmer 2s infinite';
}

// Color transition effect
function transitionColor(element, startColor, endColor, duration = 1000) {
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Simple linear interpolation
        element.style.color = endColor;
        element.style.opacity = startColor !== 'transparent' ? (1 - progress * 0.5) : progress;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Blur in/out effect
function blurInOut(element) {
    element.style.animation = 'blurInOut 1s ease-in-out';
}

// Stagger animation for multiple elements
function staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
        element.style.animation = 'fadeIn 0.6s ease forwards';
        element.style.animationDelay = (index * delay) + 'ms';
    });
}

// Number counter animation (for stats)
function animateCounter(element, targetNumber, duration = 1000) {
    let current = 0;
    const increment = targetNumber / (duration / 16);
    const startTime = Date.now();
    
    function update() {
        current += increment;
        if (current < targetNumber) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = targetNumber;
        }
    }
    
    update();
}

// Gradient text animation
function addGradientAnimation(element) {
    element.style.backgroundImage = 'linear-gradient(90deg, #00d4ff, #b300ff, #ff006e, #00d4ff)';
    element.style.backgroundSize = '200% auto';
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    element.style.backgroundClip = 'text';
    element.style.animation = 'gradientFlow 3s linear infinite';
}

// Particle burst effect
function burstParticles(x, y, color = '#00d4ff') {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = { x: Math.cos(angle) * 5, y: Math.sin(angle) * 5 };
        const life = 500 + Math.random() * 500;
        const startTime = Date.now();
        
        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / life;
            
            if (progress < 1) {
                const px = parseFloat(particle.style.left);
                const py = parseFloat(particle.style.top);
                
                particle.style.left = (px + velocity.x) + 'px';
                particle.style.top = (py + velocity.y) + 'px';
                particle.style.opacity = 1 - progress;
                
                velocity.y += 0.1; // gravity
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }
        
        animate();
    }
}

// Blur transition
function smoothBlurTransition(element, fromBlur = '0px', toBlur = '10px', duration = 500) {
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const from = parseInt(fromBlur);
        const to = parseInt(toBlur);
        const current = from + (to - from) * progress;
        
        element.style.filter = `blur(${current}px)`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Text shadow glow effect
function addShadowGlow(element) {
    element.style.textShadow = '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #b300ff';
    element.style.animation = 'shadowGlow 2s ease-in-out infinite';
}

/* ===== CSS ANIMATION DEFINITIONS ===== */
// These should be added to the CSS but can also be injected here
const animationStyles = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    @keyframes wave {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes flip {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes shimmer {
        0% { backgroundPosition: -200% 0; }
        100% { backgroundPosition: 200% 0; }
    }
    
    @keyframes blurInOut {
        0%, 100% { filter: blur(0px); opacity: 1; }
        50% { filter: blur(5px); opacity: 0.5; }
    }
    
    @keyframes gradientFlow {
        0% { backgroundPosition: 0% center; }
        100% { backgroundPosition: 200% center; }
    }
    
    @keyframes shadowGlow {
        0%, 100% { textShadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff; }
        50% { textShadow: 0 0 20px #00d4ff, 0 0 40px #b300ff, 0 0 60px #ff006e; }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

/* ===== EXPORT FUNCTIONS ===== */
window.typeWriter = typeWriter;
window.glitchText = glitchText;
window.addPulseEffect = addPulseEffect;
window.addGlowEffect = addGlowEffect;
window.createConfetti = createConfetti;
window.createWaveEffect = createWaveEffect;
window.animateProgressBar = animateProgressBar;
window.addFloatingEffect = addFloatingEffect;
window.burstParticles = burstParticles;
window.staggerAnimation = staggerAnimation;
window.animateCounter = animateCounter;
window.addGradientAnimation = addGradientAnimation;

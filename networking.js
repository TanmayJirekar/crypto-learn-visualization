/* ===== NETWORKING SECURITY CONTENT ===== */
const networkingContent = {
    ssl: {
        title: 'SSL/TLS Protocol',
        description: 'Secure Sockets Layer / Transport Layer Security - Encrypts communication between client and server.',
        content: `
            <h3>How SSL/TLS Works:</h3>
            <div class="network-diagram">
                <div class="network-node">
                    <div class="network-node-title">Client</div>
                    <p>Browser/App</p>
                </div>
                <div class="network-arrow">→ ClientHello</div>
                <div class="network-node">
                    <div class="network-node-title">Server</div>
                    <p>Web Server</p>
                </div>
            </div>

            <h4>SSL/TLS Handshake Steps:</h4>
            <ol style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li><strong>ClientHello:</strong> Client sends supported protocols and ciphers</li>
                <li><strong>ServerHello:</strong> Server selects protocol and cipher suite</li>
                <li><strong>Certificate:</strong> Server sends its digital certificate</li>
                <li><strong>Key Exchange:</strong> Parties exchange session key using asymmetric crypto</li>
                <li><strong>Finished:</strong> Connection switches to encrypted communication</li>
            </ol>

            <h4>Key Features:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Authentication through digital certificates</li>
                <li>Encryption using symmetric keys</li>
                <li>Integrity checking through message authentication codes</li>
                <li>Perfect Forward Secrecy with ephemeral keys</li>
            </ul>

            <h4>Security Level: <span style="color: #4caf50;">Very High</span></h4>
        `
    },

    https: {
        title: 'HTTPS Protocol',
        description: 'HTTP over SSL/TLS - Secure web browsing.',
        content: `
            <h3>How HTTPS Works:</h3>
            <div class="network-diagram">
                <div class="network-node">
                    <div class="network-node-title">Insecure HTTP</div>
                    <p>Port 80 (plaintext)</p>
                </div>
                <div style="font-size: 1.2rem; color: #f44336;">VS</div>
                <div class="network-node">
                    <div class="network-node-title">Secure HTTPS</div>
                    <p>Port 443 (encrypted)</p>
                </div>
            </div>

            <h4>HTTPS Process:</h4>
            <ol style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Browser initiates SSL/TLS handshake</li>
                <li>Server provides SSL certificate</li>
                <li>Browser verifies certificate with Certificate Authority</li>
                <li>Session key established</li>
                <li>HTTP data encrypted before transmission</li>
                <li>Server decrypts and processes request</li>
            </ol>

            <h4>What HTTPS Protects:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Passwords and login credentials</li>
                <li>Credit card information</li>
                <li>Personal data and messages</li>
                <li>Browser history and search queries</li>
                <li>Form submissions</li>
            </ul>

            <h4>Check Certificate:</h4>
            <p style="color: rgba(255, 255, 255, 0.8);">Click the lock icon in your browser's address bar to view the certificate details and verify the website's identity.</p>

            <h4>Security Level: <span style="color: #4caf50;">Very High</span></h4>
        `
    },

    vpn: {
        title: 'VPN (Virtual Private Network)',
        description: 'Creates encrypted tunnel for all internet traffic.',
        content: `
            <h3>How VPN Works:</h3>
            <div class="network-diagram">
                <div class="network-node">
                    <div class="network-node-title">Your Device</div>
                    <p>Original IP hidden</p>
                </div>
                <div class="network-arrow">→ Encrypted Tunnel</div>
                <div class="network-node">
                    <div class="network-node-title">VPN Server</div>
                    <p>Exit point</p>
                </div>
                <div class="network-arrow">→</div>
                <div class="network-node">
                    <div class="network-node-title">Internet</div>
                    <p>Sees VPN IP</p>
                </div>
            </div>

            <h4>VPN Benefits:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Anonymity - Hide real IP address</li>
                <li>Privacy - Encrypt all traffic</li>
                <li>Security on public Wi-Fi</li>
                <li>Access geo-restricted content</li>
                <li>Prevent ISP tracking</li>
            </ul>

            <h4>VPN Encryption Methods:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li><strong>OpenVPN:</strong> Open-source, highly secure</li>
                <li><strong>WireGuard:</strong> Modern, fast, simple</li>
                <li><strong>IKEv2/IPSec:</strong> Protocol-level encryption</li>
                <li><strong>PPTP:</strong> Older, less secure (avoid)</li>
            </ul>

            <h4>Encrypted Traffic:</h4>
            <p style="color: rgba(255, 255, 255, 0.8);">All data leaving your device is encrypted before entering the VPN tunnel, making it invisible to:</p>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Wi-Fi network owners</li>
                <li>Internet Service Providers</li>
                <li>Network administrators</li>
                <li>Potential eavesdroppers</li>
            </ul>

            <h4>Security Level: <span style="color: #4caf50;">Very High</span></h4>
        `
    },

    mitm: {
        title: 'Man-in-the-Middle (MITM) Attack',
        description: 'Attacker intercepts communication between two parties.',
        content: `
            <h3>How MITM Attacks Work:</h3>
            <div class="network-diagram" style="flex-direction: column; gap: 2rem;">
                <div style="text-align: center;">
                    <h4 style="color: #f44336;">Vulnerable (Unencrypted):</h4>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
                        <div class="network-node">
                            <div class="network-node-title">Alice</div>
                            <p>Sends data</p>
                        </div>
                        <div class="network-arrow">→ Plaintext ←</div>
                        <div class="network-node">
                            <div class="network-node-title">Attacker</div>
                            <p>Intercepts!</p>
                        </div>
                        <div class="network-arrow">→ Modified ←</div>
                        <div class="network-node">
                            <div class="network-node-title">Bob</div>
                            <p>Receives fake</p>
                        </div>
                    </div>
                </div>

                <div style="text-align: center;">
                    <h4 style="color: #4caf50;">Protected (Encrypted):</h4>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
                        <div class="network-node">
                            <div class="network-node-title">Alice</div>
                            <p>Encrypts data</p>
                        </div>
                        <div class="network-arrow">→ 🔐 Encrypted 🔐 ←</div>
                        <div class="network-node">
                            <div class="network-node-title">Attacker</div>
                            <p>Can't read</p>
                        </div>
                        <div class="network-arrow">→ Can't modify ←</div>
                        <div class="network-node">
                            <div class="network-node-title">Bob</div>
                            <p>Receives safe</p>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Common MITM Attack Methods:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li><strong>ARP Spoofing:</strong> Redirect traffic through attacker's computer</li>
                <li><strong>DNS Spoofing:</strong> Redirect to fake websites</li>
                <li><strong>SSL Stripping:</strong> Downgrade HTTPS to HTTP</li>
                <li><strong>Public Wi-Fi:</strong> Monitor unencrypted traffic</li>
                <li><strong>BGP Hijacking:</strong> Redirect internet routes</li>
            </ul>

            <h4>Protection Methods:</h4>
            <ul style="margin-left: 2rem; color: rgba(255, 255, 255, 0.8);">
                <li>Use HTTPS (SSL/TLS) encryption</li>
                <li>Use VPN on public networks</li>
                <li>Verify website certificates</li>
                <li>Use strong passwords</li>
                <li>Enable two-factor authentication</li>
                <li>Use DNSSEC for DNS queries</li>
                <li>Avoid public Wi-Fi for sensitive activities</li>
            </ul>

            <h4>Security Level Without Protection: <span style="color: #f44336;">Critical Risk</span></h4>
            <h4>Security Level With Encryption: <span style="color: #4caf50;">Very High</span></h4>
        `
    }
};

/* ===== SETUP NETWORKING ===== */
function setupNetworking() {
    setupNetworkingTabs();
    displayNetworkingContent('ssl');
}

function setupNetworkingTabs() {
    document.querySelectorAll('.net-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.net-tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const tab = e.target.dataset.netTab;
            displayNetworkingContent(tab);
        });
    });
}

function displayNetworkingContent(tab) {
    const content = networkingContent[tab];
    const container = document.getElementById('networkingContent');
    
    if (content) {
        container.innerHTML = `
            <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.5rem;">${content.title}</h3>
            <p style="margin-bottom: 2rem; color: rgba(255, 255, 255, 0.8);">${content.description}</p>
            <div style="color: rgba(255, 255, 255, 0.9);">
                ${content.content}
            </div>
        `;
    }
    
    playSound(500, 100);
}

/* ===== SECURITY SIMULATION ===== */
function createSecuritySimulation() {
    return `
        <div style="margin-top: 2rem; padding: 2rem; background: rgba(0, 0, 0, 0.3); border-radius: 12px;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Interactive Security Simulation</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div style="background: rgba(76, 175, 80, 0.2); border: 1px solid #4caf50; padding: 1.5rem; border-radius: 8px;">
                    <h5 style="color: #4caf50; margin-bottom: 0.5rem;">🔒 Secured Connection</h5>
                    <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.7);">
                        ✓ Encrypted traffic<br>
                        ✓ Authenticated server<br>
                        ✓ Integrity verified
                    </p>
                </div>
                
                <div style="background: rgba(244, 67, 54, 0.2); border: 1px solid #f44336; padding: 1.5rem; border-radius: 8px;">
                    <h5 style="color: #f44336; margin-bottom: 0.5rem;">🔓 Unsecured Connection</h5>
                    <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.7);">
                        ✗ Plaintext traffic<br>
                        ✗ No authentication<br>
                        ✗ Vulnerable to attacks
                    </p>
                </div>
            </div>
        </div>
    `;
}

/* ===== ENCRYPTION PACKET VISUALIZATION ===== */
function visualizePacketEncryption() {
    const simulation = `
        <div style="margin-top: 2rem; padding: 2rem; background: rgba(0, 0, 0, 0.3); border-radius: 12px;">
            <h4 style="color: var(--primary-color); margin-bottom: 1.5rem;">Packet Encryption Visualization</h4>
            
            <div style="margin-bottom: 2rem;">
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;"><strong>Original Packet:</strong></p>
                <div style="background: rgba(0, 0, 0, 0.4); padding: 1rem; border-radius: 8px; font-family: monospace; word-break: break-all;">
                    GET /login HTTP/1.1<br>
                    Host: example.com<br>
                    Password: MySecret123
                </div>
            </div>

            <div style="text-align: center; margin: 1.5rem 0;">
                <p style="color: var(--primary-color); font-weight: bold;">⬇️ Encryption ⬇️</p>
            </div>

            <div>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;"><strong>Encrypted Packet:</strong></p>
                <div style="background: rgba(0, 0, 0, 0.4); padding: 1rem; border-radius: 8px; font-family: monospace; word-break: break-all;">
                    7f3a8b9c2d4e5f6a8b1c2d3e4f5a6b7c<br>
                    8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a<br>
                    4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e
                </div>
            </div>
        </div>
    `;
    
    return simulation;
}

/* ===== KEY EXCHANGE VISUALIZATION ===== */
function visualizeKeyExchange() {
    const simulation = `
        <div style="margin-top: 2rem; padding: 2rem; background: rgba(0, 0, 0, 0.3); border-radius: 12px;">
            <h4 style="color: var(--primary-color); margin-bottom: 1.5rem;">Diffie-Hellman Key Exchange</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <p style="color: var(--primary-color); font-weight: bold; margin-bottom: 0.5rem;">Alice</p>
                    <div style="background: rgba(0, 0, 0, 0.4); padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
                        1️⃣ Choose secret: a = 6<br>
                        2️⃣ Calculate: A = g^a mod p<br>
                        3️⃣ Send: A (public)<br>
                        4️⃣ Calculate: K = B^a mod p
                    </div>
                </div>
                
                <div>
                    <p style="color: var(--primary-color); font-weight: bold; margin-bottom: 0.5rem;">Bob</p>
                    <div style="background: rgba(0, 0, 0, 0.4); padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
                        1️⃣ Choose secret: b = 15<br>
                        2️⃣ Calculate: B = g^b mod p<br>
                        3️⃣ Send: B (public)<br>
                        4️⃣ Calculate: K = A^b mod p
                    </div>
                </div>
            </div>

            <div style="background: rgba(76, 175, 80, 0.2); padding: 1rem; border-radius: 8px; text-align: center;">
                <p style="color: #4caf50; font-weight: bold;">✓ Both calculate same key K without sharing secret!</p>
            </div>
        </div>
    `;
    
    return simulation;
}

/* ===== EXPORT FUNCTIONS ===== */
window.displayNetworkingContent = displayNetworkingContent;
window.visualizePacketEncryption = visualizePacketEncryption;
window.visualizeKeyExchange = visualizeKeyExchange;

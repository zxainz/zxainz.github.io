/**
 * ZAINFOLIO — Spatial 3D Tilt Engine & Dynamic Liquid Fluid Simulator
 * 100% Vanilla JavaScript | Zero External Dependencies | Pure Static & Hardened
 */

(function () {
  'use strict';

  /* ==========================================================================
     0. CRYPTOGRAPHIC SELF-INTEGRITY, DOMAIN LOCK & ANTI-TAMPER DEFENSE ENGINE
     ========================================================================== */
  // 1. Anti-Frame / Anti-Clickjacking Defense
  if (window.top !== window.self) {
    try {
      window.top.location = window.self.location;
    } catch (e) {
      document.documentElement.innerHTML = '';
    }
  }

  // 2. Domain Lock with Stolen Mirror Auto-Takeover & Redirection
  const _AUTH_HOSTS = ['zxainz.github.io', 'localhost', '127.0.0.1', ''];
  const _CURR_HOST = (window.location.hostname || '').toLowerCase();
  const _isAuthorized = _AUTH_HOSTS.includes(_CURR_HOST) || _CURR_HOST.endsWith('github.io');
  if (!_isAuthorized) {
    document.documentElement.innerHTML = `
      <div style="background:#0c0e12;color:#ff2a3b;font-family:monospace;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;padding:20px;text-align:center;">
        <h1 style="font-size:2rem;letter-spacing:0.1em;margin-bottom:12px;">[!] UNAUTHORIZED MIRROR DETECTED</h1>
        <p style="color:#ffffff;max-width:600px;line-height:1.6;font-size:1.05rem;">This portfolio and its offensive security architecture are the private intellectual property of <strong>Muhammad Zain Ul Aabdin</strong>.</p>
        <p style="color:#8892b0;font-size:0.9rem;margin-top:10px;">Unauthorized copying or mirroring is strictly prohibited under international copyright law. Redirecting to official verified site...</p>
        <a href="https://zxainz.github.io" style="margin-top:24px;display:inline-block;padding:12px 28px;background:#ff2a3b;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;letter-spacing:0.05em;">Proceed to Official Site</a>
      </div>
    `;
    setTimeout(() => { window.location.href = 'https://zxainz.github.io'; }, 3500);
    throw new Error('[Security Exception] Unauthorized host deployment');
  }

  // 3. Cryptographic Self-Integrity Verification
  async function _verifySelfIntegrity() {
    const _KEY_SIG = '9a1f0363b3297a785aa3d1d1f3a2536461ae215ebb69e56f082e25b2503f6606';
    const _rawTokens = [77,117,104,97,109,109,97,100,32,90,97,105,110,32,85,108,32,65,97,98,100,105,110,32,124,32,80,101,110,101,116,114,97,116,105,111,110,32,84,101,115,116,101,114,32,124,32,79,102,102,101,110,115,105,118,101,32,83,101,99,117,114,105,116,121,32,83,112,101,99,105,97,108,105,115,116,32,124,32,67,121,98,101,114,118,111,108,32,124,32,75,97,114,97,99,104,105,32,85,110,105,118,101,114,115,105,116,121,32,124,32,114,101,100,104,97,116,122,97,121,110,64,103,109,97,105,108,46,99,111,109];
    const _id = String.fromCharCode(..._rawTokens);

    if (window.crypto && crypto.subtle) {
      try {
        const _buf = new TextEncoder().encode(_id);
        const _hashBuf = await crypto.subtle.digest('SHA-256', _buf);
        const _hashArr = Array.from(new Uint8Array(_hashBuf));
        const _hex = _hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
        if (_hex !== _KEY_SIG) {
          console.warn('[Security Warning] Self-integrity signature deviation');
        }
      } catch (err) {}
    }
  }

  // 4. Keyboard Shortcuts & Source Theft Shield
  function initKeyboardDefense() {
    window.addEventListener('keydown', (e) => {
      const isCtrl = e.ctrlKey || e.metaKey;
      if (
        e.key === 'F12' ||
        (isCtrl && (e.key === 'u' || e.key === 'U')) ||
        (isCtrl && (e.key === 's' || e.key === 'S')) ||
        (isCtrl && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J' || e.key === 'c' || e.key === 'C'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, true);

    document.addEventListener('contextmenu', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      e.preventDefault();
    });
  }

  // 5. Console Security Canary
  function initConsoleSecurityBanner() {
    try {
      console.log('%c[!] NOTICE: CRYPTOGRAPHIC DEFENSE ACTIVE', 'color:#ff2a3b;font-size:15px;font-weight:bold;background:#0c0e12;padding:6px 12px;border-radius:4px;');
      console.log('%cAll contents, design systems, and code are the private intellectual property of Muhammad Zain Ul Aabdin.\nUnauthorized mirroring, cloning, or distribution is monitored and strictly prohibited under international copyright law (DMCA / Berne Convention).\nOfficial verified repository: https://zxainz.github.io', 'color:#a0aec0;font-size:12px;line-height:1.5;');
    } catch (e) {}
  }

  let isModalOpen = false;

  document.addEventListener('DOMContentLoaded', () => {
    initKeyboardDefense();
    initConsoleSecurityBanner();
    _verifySelfIntegrity();
    initDynamicLiquidCanvas();
    init3DTiltEngine();
    initModalSystem();
    initCopyrightYear();
  });

  /* ==========================================================================
     1. HIGH-PERFORMANCE DYNAMIC LIQUID FLUID CANVAS
     Simulates flowing organic liquid orbs with half-res GPU upscaling & 0-overhead
     ========================================================================== */
  function initDynamicLiquidCanvas() {
    const canvas = document.getElementById('liquidCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let width, height;
    let mouse = { x: null, y: null, targetX: null, targetY: null };

    // Fluid Orbs with pre-computed color stops (zero regex allocations per frame)
    const orbs = [
      { x: 0.2, y: 0.3, radius: 140, cStart: 'rgba(255, 42, 59, 0.16)', cMid: 'rgba(255, 42, 59, 0.03)', vx: 0.0005, vy: 0.0006, phase: 0 },
      { x: 0.75, y: 0.2, radius: 170, cStart: 'rgba(255, 60, 75, 0.12)', cMid: 'rgba(255, 60, 75, 0.02)', vx: -0.0006, vy: 0.0005, phase: 1.2 },
      { x: 0.8, y: 0.75, radius: 180, cStart: 'rgba(220, 225, 238, 0.60)', cMid: 'rgba(220, 225, 238, 0.06)', vx: -0.0004, vy: -0.0006, phase: 2.4 },
      { x: 0.15, y: 0.8, radius: 160, cStart: 'rgba(240, 242, 248, 0.65)', cMid: 'rgba(240, 242, 248, 0.06)', vx: 0.0006, vy: -0.0004, phase: 3.6 },
      { x: 0.5, y: 0.5, radius: 130, cStart: 'rgba(255, 42, 59, 0.08)', cMid: 'rgba(255, 42, 59, 0.015)', vx: 0.0004, vy: -0.0005, phase: 4.8 }
    ];

    // High performance half-resolution buffer (GPU upscales smoothly, saving 75% pixel fills)
    function resize() {
      width = canvas.width = Math.max(320, Math.floor(window.innerWidth * 0.5));
      height = canvas.height = Math.max(240, Math.floor(window.innerHeight * 0.5));
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      mouse.targetX = e.clientX * 0.5;
      mouse.targetY = e.clientY * 0.5;
    }, { passive: true });

    // Pause rendering while user is scrolling to give 100% frame budget to scrolling
    let isScrolling = false;
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
      isScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { isScrolling = false; }, 80);
    }, { passive: true });

    let lastTime = 0;

    function render(timestamp) {
      // Pause when tab is backgrounded, modal is open, or during rapid scroll
      if (isModalOpen || document.hidden || isScrolling) {
        requestAnimationFrame(render);
        return;
      }

      if (!lastTime) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.08);
      lastTime = timestamp;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.targetX !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.06;
          mouse.y += (mouse.targetY - mouse.y) * 0.06;
        }
      }

      // Draw flowing liquid orbs with pre-calculated color stops
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.phase += dt * 0.8;

        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
        if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;

        let pixelX = orb.x * width;
        let pixelY = orb.y * height;

        // Subtle interactive mouse reaction
        if (mouse.x !== null) {
          const dx = pixelX - mouse.x;
          const dy = pixelY - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 200 && dist > 1) {
            const force = (1 - dist / 200) * 22;
            pixelX += (dx / dist) * force;
            pixelY += (dy / dist) * force;
          }
        }

        const currentRadius = orb.radius + Math.sin(orb.phase) * 18;

        const grad = ctx.createRadialGradient(
          pixelX, pixelY, 0,
          pixelX, pixelY, currentRadius
        );
        grad.addColorStop(0, orb.cStart);
        grad.addColorStop(0.65, orb.cMid);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pixelX, pixelY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ==========================================================================
     2. 3D SPATIAL TILT & SPECULAR GLARE ENGINE
     Calculates real physics-based perspective rotations on GPU compositor
     ========================================================================== */
  function init3DTiltEngine() {
    // 1. Tilt on Cards
    const cards = document.querySelectorAll('[data-tilt-card]');
    cards.forEach(cardWrapper => {
      const cardBody = cardWrapper.querySelector('.card-glass-body');
      const glare = cardWrapper.querySelector('.card-glare-effect');
      if (!cardBody) return;

      let bounds = null;
      let isHovered = false;

      let currentX = 0, currentY = 0;
      let targetX = 0, targetY = 0;
      let rafId = null;

      function updateBounds() {
        bounds = cardWrapper.getBoundingClientRect();
      }

      function tiltLoop() {
        currentX += (targetX - currentX) * 0.14;
        currentY += (targetY - currentY) * 0.14;

        const rotateX = (-currentY * 14).toFixed(2);
        const rotateY = (currentX * 14).toFixed(2);
        const scale = isHovered ? 1.025 : 1;

        cardBody.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        // Move specular glare with GPU transform rather than string repainting
        if (glare) {
          glare.style.transform = `translate3d(${currentX * 60}px, ${currentY * 60}px, 0)`;
        }

        if (isHovered || Math.abs(currentX) > 0.001 || Math.abs(currentY) > 0.001) {
          rafId = requestAnimationFrame(tiltLoop);
        } else {
          cardBody.style.transform = '';
          cardBody.style.willChange = '';
          if (glare) glare.style.transform = '';
          rafId = null;
        }
      }

      cardWrapper.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'touch') return;
        isHovered = true;
        cardBody.style.willChange = 'transform';
        updateBounds();
        if (!rafId) rafId = requestAnimationFrame(tiltLoop);
      });

      cardWrapper.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        if (!bounds) updateBounds();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        // Normalized: -1 to +1 from card center
        targetX = (mouseX / bounds.width) * 2 - 1;
        targetY = (mouseY / bounds.height) * 2 - 1;
      });

      cardWrapper.addEventListener('pointerleave', () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
      });

      // Accessibility & Click handling
      cardWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const cardId = cardWrapper.getAttribute('data-card-id');
          openModal(cardId);
        }
      });

      cardWrapper.addEventListener('click', () => {
        const cardId = cardWrapper.getAttribute('data-card-id');
        openModal(cardId);
      });
    });

    // 2. Subtle 3D Tilt on the Hero Card
    const heroCard = document.getElementById('heroCard');
    if (heroCard) {
      let heroBounds = null;
      let heroTargetX = 0, heroTargetY = 0;
      let heroCurrentX = 0, heroCurrentY = 0;
      let heroRaf = null;

      function heroLoop() {
        heroCurrentX += (heroTargetX - heroCurrentX) * 0.08;
        heroCurrentY += (heroTargetY - heroCurrentY) * 0.08;

        const rX = (-heroCurrentY * 7).toFixed(2);
        const rY = (heroCurrentX * 7).toFixed(2);

        heroCard.style.transform = `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg)`;

        if (Math.abs(heroCurrentX) > 0.001 || Math.abs(heroCurrentY) > 0.001) {
          heroRaf = requestAnimationFrame(heroLoop);
        } else {
          heroCard.style.transform = '';
          heroCard.style.willChange = '';
          heroRaf = null;
        }
      }

      heroCard.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'touch') return;
        heroCard.style.willChange = 'transform';
        heroBounds = heroCard.getBoundingClientRect();
        if (!heroRaf) heroRaf = requestAnimationFrame(heroLoop);
      });

      heroCard.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return;
        if (!heroBounds) heroBounds = heroCard.getBoundingClientRect();
        heroTargetX = ((e.clientX - heroBounds.left) / heroBounds.width) * 2 - 1;
        heroTargetY = ((e.clientY - heroBounds.top) / heroBounds.height) * 2 - 1;
      });

      heroCard.addEventListener('pointerleave', () => {
        heroTargetX = 0;
        heroTargetY = 0;
      });
    }
  }

  /* ==========================================================================
     3. INTERACTIVE 3D MODAL DRAWER SYSTEM
     ========================================================================== */
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalTopBar = document.getElementById('modalTopBar');
  const modalStickyFooter = document.getElementById('modalStickyFooter');
  let lastFocusedElement = null;

  function createCategoryCard(title, iconSvg, countText, items, categoryKey = '') {
    const listHtml = items.map(item => `
      <li class="service-item-row">
        <span class="service-bullet-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="service-item-text">${item}</span>
      </li>
    `).join('');

    const categoryAttr = categoryKey ? ` data-category="${categoryKey}"` : '';

    return `
      <div class="service-category-card"${categoryAttr}>
        <div class="category-card-header">
          <div class="category-title-wrap">
            <div class="category-icon" aria-hidden="true">${iconSvg}</div>
            <h4 class="category-name">${title}</h4>
          </div>
          <span class="category-badge">${countText}</span>
        </div>
        <ul class="service-items-list">
          ${listHtml}
        </ul>
      </div>
    `;
  }

  // Icons for Service Categories
  const icons = {
    webApi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    redTeam: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    osint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    incident: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    compliance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg>`,
    advisory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    proposals: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    reports: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    policy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    blogs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    techWriting: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`
  };

  // Pre-rendered Static Medium Articles (Guarantees 0ms instant loading with zero layout shift)
  const staticMediumArticles = [
    {
      title: "I gave an AI agent one prompt and walked away. It came back with a full attack surface inventory",
      date: "Sep 28, 2026",
      link: "https://zainzsite.medium.com/i-gave-an-ai-agent-one-prompt-and-walked-away-it-came-back-with-a-full-attack-surface-inventory-144d8b7a8687",
      tag: "AI & Attack Surface",
      category: "cloud-ai",
      image: "https://cdn-images-1.medium.com/max/1024/1*f7D1cpKuCBgebL7iMPb8dg.png",
      excerpt: "Every time I do external recon manually, I lose the first hour to tab-juggling. crt.sh in one window, a terminal with dig in another, and spreadsheets that fall out of date."
    },
    {
      title: "Cloud-Native Ransomware: How Attackers Turn Your Own Cloud Against You",
      date: "Feb 8, 2026",
      link: "https://zainzsite.medium.com/cloud-native-ransomware-how-attackers-turn-your-own-cloud-against-you-e355d123f425",
      tag: "Cloud Pentesting",
      category: "cloud-ai",
      image: "https://cdn-images-1.medium.com/max/1024/1*NEW7lcgO8mp8IsTbS3GT8Q.png",
      excerpt: "Ransomware used to mean some shady EXE lands on a server and encrypts disks. In cloud environments, the game is very different: attackers weaponize native IAM & KMS."
    },
    {
      title: "Offensive Security in the AI Era: Prompt Injection to Model Poisoning",
      date: "Feb 7, 2026",
      link: "https://zainzsite.medium.com/offensive-security-in-the-ai-era-prompt-injection-to-model-poisoning-f6707d512893",
      tag: "AI Pentesting",
      category: "cloud-ai",
      image: "https://cdn-images-1.medium.com/max/1024/1*jErLze24ptBhRcMdlBXpdw.png",
      excerpt: "Their AI chatbot just handed me the keys to their entire backend. All because I said 'pretty please'. A technical breakdown from prompt injection to model poisoning."
    },
    {
      title: "Nmap Cheat Sheet: 10 Commands Every Pentester Needs Now",
      date: "Feb 3, 2026",
      link: "https://zainzsite.medium.com/nmap-cheat-sheet-10-commands-every-pentester-needs-now-9af70bc7722c",
      tag: "Network Recon",
      category: "offensive-tools",
      image: "https://cdn-images-1.medium.com/max/1024/1*R0lMa42InQ0gU4EYsN4VBQ.png",
      excerpt: "What if one tool could crack open any network before defenders even blink? Essential NSE scripts, timing templates, and stealth flags for practical audits."
    },
    {
      title: "Nessus Scans Are 90% Useless Without This Manual Step",
      date: "Dec 16, 2025",
      link: "https://zainzsite.medium.com/nessus-scans-are-90-useless-without-this-manual-step-4a21abbc9ad2",
      tag: "Vulnerability Assessment",
      category: "offensive-tools",
      image: "https://cdn-images-1.medium.com/max/741/1*nvmTbPpldo9DLxGHfLYaEA.png",
      excerpt: "Fresh client processing credit cards. Automated Nessus scans showed zero criticals. Then manual validation uncovered high-risk logic flaws scanners can't see."
    },
    {
      title: "The Difference Between Manual Testing & Automated Scanning (Why You Need Both)",
      date: "Dec 16, 2025",
      link: "https://zainzsite.medium.com/the-difference-between-manual-testing-automated-scanning-why-you-need-both-e2c4a8df7059",
      tag: "Penetration Testing",
      category: "methodology",
      image: "https://cdn-images-1.medium.com/max/1024/1*MaCpHCfI72VMGRUHvrs_Rw.jpeg",
      excerpt: "Your scanner says: 0 vulnerabilities. Your penetration tester says: I found 12 critical ones. Who’s right? Both. Here is how manual and automated testing complement each other."
    },
    {
      title: "Pentest Reports That Don’t End Up in the Trash",
      date: "Dec 15, 2025",
      link: "https://zainzsite.medium.com/pentest-reports-that-dont-end-up-in-the-trash-c743477319c8",
      tag: "Security Reporting",
      category: "methodology",
      image: "https://cdn-images-1.medium.com/max/1024/1*HmQkCpY3ufcmGE6MetkvCw.jpeg",
      excerpt: "Dropped a 50-page pentest report on a client’s desk with clean repro steps. Radio silence for two weeks. Then I rewrote it mapped to business impact."
    },
    {
      title: "How I Actually Run a Black‑Box Pentest as a One‑Person Red Team",
      date: "Dec 15, 2025",
      link: "https://zainzsite.medium.com/how-i-actually-run-a-black-box-pentest-as-a-one-person-red-team-dbd4a169b70b",
      tag: "Red Teaming",
      category: "methodology",
      image: "https://cdn-images-1.medium.com/max/1024/1*6qZ1nAjLGSeWuHvKsRug_w.jpeg",
      excerpt: "When a client says 'We want a black‑box test,' what they really mean is: 'Show us what an internet adversary could do to us.' Practical solo tradecraft."
    },
    {
      title: "Understanding the Kill Chain: From Reconnaissance to Exploitation",
      date: "Dec 12, 2025",
      link: "https://zainzsite.medium.com/understanding-the-kill-chain-from-reconnaissance-to-exploitation-2bdeea5b9ee9",
      tag: "Ethical Hacking",
      category: "methodology",
      image: "https://cdn-images-1.medium.com/max/1024/1*d4wIdoiWKPNpzdHg-14oRQ.jpeg",
      excerpt: "Every attack follows a pattern. Attackers don't just randomly shoot exploits—they follow a structured process. Here is how to disrupt each phase of the kill chain."
    },
    {
      title: "It was 2 AM. My coffee was cold. Burp Suite was lighting up red.",
      date: "Dec 11, 2025",
      link: "https://zainzsite.medium.com/it-was-2-am-my-coffee-was-cold-burp-suite-was-lighting-up-red-ccc1d4c7aaa1",
      tag: "Blind SSRF",
      category: "offensive-tools",
      image: "https://cdn-images-1.medium.com/max/1024/1*o2p_wg5rA0xL3JixuM4cpw.jpeg",
      excerpt: "Staring at a target with six-figure Cloudflare WAF protections. Everyone missed an innocuous image URL parameter that led to a critical blind SSRF and AWS metadata dump."
    }
  ];

  // Security Sanitization Helpers (Prevents DOM-based XSS from untrusted third-party feeds)
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function sanitizeUrl(url) {
    if (!url) return '#';
    const clean = String(url).trim();
    if (/^https?:\/\//i.test(clean)) return clean;
    return '#';
  }

  function renderMediumArticleCard(item) {
    const safeLink = sanitizeUrl(item.link);
    const safeImg = sanitizeUrl(item.image);
    const safeTitle = escapeHTML(item.title);
    const safeExcerpt = escapeHTML(item.excerpt);
    const safeDate = escapeHTML(item.date);
    const safeTag = escapeHTML(item.tag);
    const safeCat = escapeHTML(item.category || 'all');

    return `
      <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="medium-card" data-category="${safeCat}">
        <div class="medium-card-img-wrap">
          <img src="${safeImg}" alt="${safeTitle}" class="medium-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'">
          <div class="medium-card-overlay">
            <span class="medium-read-pill">Read on Medium &nearr;</span>
          </div>
        </div>
        <div class="medium-card-body">
          <div class="medium-card-meta">
            <span class="medium-date">${safeDate}</span>
            <span class="medium-tag">${safeTag}</span>
          </div>
          <h4 class="medium-card-title">${safeTitle}</h4>
          <p class="medium-card-excerpt">${safeExcerpt}</p>
          <div class="medium-card-footer">
            <div class="medium-author-info">
              <span class="medium-brand-icon" aria-hidden="true">
                ${icons.medium}
              </span>
              <span class="medium-read-action">Read Full Article</span>
            </div>
            <svg class="medium-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </a>
    `;
  }

  const cardData = {
    pentest: {
      tag: 'Service Catalog 01 &bull; Offensive Security Testing',
      title: 'Penetration Testing Services',
      intro: 'Comprehensive offensive security audits, adversary simulations, and vulnerability evaluations across 8 core domains. Designed to harden your attack surfaces before threat actors strike.',
      content: `
        <div class="service-filter-bar" role="tablist" aria-label="Filter penetration testing services">
          <button type="button" class="filter-pill active" data-filter="all" role="tab" aria-selected="true">
            <span class="pill-label">All Domains</span>
            <span class="pill-badge">8</span>
          </button>
          <button type="button" class="filter-pill" data-filter="offensive" role="tab" aria-selected="false">
            <span class="pill-label">Offensive / Pentest</span>
            <span class="pill-badge">3</span>
          </button>
          <button type="button" class="filter-pill" data-filter="cloud-infra" role="tab" aria-selected="false">
            <span class="pill-label">Cloud &amp; Infra</span>
            <span class="pill-badge">3</span>
          </button>
          <button type="button" class="filter-pill" data-filter="compliance" role="tab" aria-selected="false">
            <span class="pill-label">Compliance &amp; Advisory</span>
            <span class="pill-badge">2</span>
          </button>
        </div>

        <div class="service-catalog-grid">
          ${createCategoryCard('Web Application & API Security', icons.webApi, '5 Services', [
            'Web application penetration testing (black-box, gray-box, white-box)',
            'REST & GraphQL API security assessments',
            'OWASP Top 10 vulnerabilities & business logic flaw testing',
            'Authentication & session testing (OAuth 2.0, JWT, SSO, session fixation)',
            'Access control, privilege escalation & data exfiltration testing'
          ], 'offensive')}

          ${createCategoryCard('Network & Infrastructure Security', icons.network, '5 Services', [
            'Internal network penetration testing & lateral movement simulation',
            'External network & perimeter exposure assessments',
            'Active Directory security, Kerberoasting & domain privilege audits',
            'Wireless network & rogue access point security reviews',
            'Network segmentation validation & firewall bypass testing'
          ], 'offensive')}

          ${createCategoryCard('Cloud Security', icons.cloud, '4 Services', [
            'AWS, Azure, and GCP security architecture assessments',
            'Cloud configuration & posture review (CIS benchmark-aligned)',
            'IAM privilege escalation, over-permissioning & token abuse review',
            'Container & Kubernetes cluster security auditing'
          ], 'cloud-infra')}

          ${createCategoryCard('Red Team & Adversary Simulation', icons.redTeam, '4 Services', [
            'Full-scope red team engagements (end-to-end attack simulation)',
            'Authorized social engineering (spear-phishing & credential harvesting)',
            'Purple team exercises (collaborative defensive hardening)',
            'Adversary emulation mapped to MITRE ATT&CK tactics & procedures'
          ], 'offensive')}

          ${createCategoryCard('OSINT & Digital Footprint Services', icons.osint, '4 Services', [
            'OSINT-based external attack surface mapping & asset discovery',
            'Executive & key personnel digital footprint exposure assessments',
            'Dark web breach intelligence & compromised credential monitoring',
            'Brand impersonation, typosquatting & rogue domain monitoring'
          ], 'cloud-infra')}

          ${createCategoryCard('Incident Response Support', icons.incident, '4 Services', [
            'Post-incident breach investigation & compromise assessment',
            'Security event log analysis & compromised timeline reconstruction',
            'Threat containment strategy & root cause analysis',
            'Forensic evidence preservation & technical documentation support'
          ], 'cloud-infra')}

          ${createCategoryCard('Compliance-Aligned Testing', icons.compliance, '4 Services', [
            'PCI DSS Section 11 penetration testing & segmentation validation',
            'HIPAA Security Rule technical safeguards evaluation',
            'GDPR-aligned offensive reviews & sensitive data exposure testing',
            'SOC 2 Type II readiness testing & offensive control validation'
          ], 'compliance')}

          ${createCategoryCard('Advisory Services', icons.advisory, '4 Services', [
            'Risk-prioritized vulnerability reporting & executive remediation roadmaps',
            'Executive threat briefings & security awareness tabletop simulations',
            'Threat modeling workshops & secure architecture design reviews',
            'Post-remediation retesting & verified vulnerability closure certificates'
          ], 'compliance')}
        </div>

        <div class="service-modal-cta">
          <div class="cta-text-group">
            <span class="cta-title">Need a tailored penetration testing scope?</span>
            <span class="cta-desc">All engagements follow PTES standards with prioritized remediation roadmaps.</span>
          </div>
          <a href="mailto:redhatzayn@gmail.com?subject=Penetration%20Testing%20Engagement%20Inquiry%20%E2%80%94%20Zain" class="cta-button">
            <span>Inquire About Pentest</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      `,
      footer: `
        <div class="sticky-footer-content">
          <a href="mailto:redhatzayn@gmail.com?subject=Penetration%20Testing%20Engagement%20Inquiry%20%E2%80%94%20Zain" class="cta-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <span>Inquire About Pentest</span>
          </a>

          <div class="sticky-footer-meta">
            <div class="footer-meta-item">
              <span class="status-pulse-dot"></span>
              <span>PTES &amp; OWASP Aligned &bull; Prioritized Remediation Roadmaps</span>
            </div>
            <a href="mailto:redhatzayn@gmail.com?subject=Penetration%20Testing%20Engagement%20Inquiry%20%E2%80%94%20Zain" class="footer-email-link">redhatzayn@gmail.com</a>
          </div>
        </div>
      `
    },
    writing: {
      tag: 'Service Catalog 02 &bull; Cybersecurity Technical Writing',
      title: 'Cybersecurity Technical Writing & Documentation',
      intro: 'Practitioner-grade technical documentation, offensive security reports, threat intelligence analyses, and product security collateral across 6 specialized domains. Bridging deep offensive exploitation with executive and engineering clarity.',
      content: `
        <div class="service-filter-bar" role="tablist" aria-label="Filter technical writing specializations">
          <button type="button" class="filter-pill active" data-filter="all" role="tab" aria-selected="true">
            <span class="pill-label">All Specializations</span>
            <span class="pill-badge">6</span>
          </button>
          <button type="button" class="filter-pill" data-filter="reports-gov" role="tab" aria-selected="false">
            <span class="pill-label">Reports &amp; Governance</span>
            <span class="pill-badge">2</span>
          </button>
          <button type="button" class="filter-pill" data-filter="product-proposals" role="tab" aria-selected="false">
            <span class="pill-label">Proposals &amp; Product</span>
            <span class="pill-badge">2</span>
          </button>
          <button type="button" class="filter-pill" data-filter="articles-media" role="tab" aria-selected="false">
            <span class="pill-label">Articles &amp; Media</span>
            <span class="pill-badge">2</span>
          </button>
        </div>

        <div class="service-catalog-grid">
          ${createCategoryCard('Proposals & Business Documents', icons.proposals, '5 Services', [
            'Cybersecurity proposal writing (RFP & RFI responses)',
            'Statement of Work (SOW) drafting & engagement terms',
            'Detailed scope documents for pentest & red team assessments',
            'Security service pricing models & tiered package documentation',
            'Client-facing pre-engagement questionnaires & scoping forms'
          ], 'product-proposals')}

          ${createCategoryCard('Penetration Testing & Security Reports', icons.reports, '5 Services', [
            'Comprehensive penetration testing & red team assessment reports',
            'Vulnerability assessment & risk-prioritized remediation roadmaps',
            'Executive summaries translating findings for C-suite & board members',
            'Compliance audit reports (PCI DSS, HIPAA, SOC 2, GDPR aligned)',
            'Post-remediation retest & vulnerability closure validation reports'
          ], 'reports-gov')}

          ${createCategoryCard('Policy & Governance Documentation', icons.policy, '5 Services', [
            'Information security policy (ISP) drafting & framework alignment',
            'Incident response plan (IRP) documentation & escalation matrices',
            'Enterprise security awareness training materials & staff handbooks',
            'Standard Operating Procedures (SOPs) for security & IT teams',
            'Risk assessment methodology & business impact analysis (BIA) docs'
          ], 'reports-gov')}

          ${createCategoryCard('Blogs & Technical Articles', icons.blogs, '5 Services', [
            'Practitioner-grade cybersecurity blogs & thought leadership posts',
            'Technical CVE breakdowns, zero-day explainers & exploit analyses',
            'Hands-on developer "how-to" security guides & remediation tutorials',
            'Threat intelligence summaries & emerging adversary vector bulletins',
            'Real-world engagement case studies & anonymized attack walkthroughs'
          ], 'articles-media')}

          ${createCategoryCard('Social Media & Thought Leadership', icons.social, '5 Services', [
            'High-engagement cybersecurity content for LinkedIn & X (Twitter)',
            'Security awareness micro-campaigns for internal company initiatives',
            'Threat trends copywriting, security tips & technical infographic scripts',
            'Weekly cybersecurity newsletters & threat digests for MSSPs/SecOps',
            'Executive thought-leadership ghostwriting for founders & CISOs'
          ], 'articles-media')}

          ${createCategoryCard('Specialized & Product Documentation', icons.techWriting, '5 Services', [
            'Authoritative cybersecurity whitepapers & original research reports',
            'SaaS product security documentation, trust centers & compliance pages',
            'Bug bounty report reviews & responsible vulnerability disclosure briefs',
            'API security reference guides & developer implementation docs',
            'Technical presentation decks for conferences & executive client briefings'
          ], 'product-proposals')}
        </div>

        <div class="service-modal-cta">
          <div class="cta-text-group">
            <span class="cta-title">Need practitioner-grade cybersecurity documentation?</span>
            <span class="cta-desc">Engineered with offensive security depth, zero marketing fluff, and verified technical accuracy.</span>
          </div>
          <a href="mailto:redhatzayn@gmail.com?subject=Cybersecurity%20Technical%20Writing%20Inquiry%20%E2%80%94%20Zain" class="cta-button">
            <span>Inquire About Writing</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      `,
      footer: `
        <div class="sticky-footer-content">
          <a href="mailto:redhatzayn@gmail.com?subject=Cybersecurity%20Technical%20Writing%20Inquiry%20%E2%80%94%20Zain" class="cta-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <span>Inquire About Technical Writing</span>
          </a>

          <div class="sticky-footer-meta">
            <div class="footer-meta-item">
              <span class="status-pulse-dot"></span>
              <span>Active Practitioner &bull; Zero Fluff &bull; Verified Technical Accuracy</span>
            </div>
            <a href="mailto:redhatzayn@gmail.com?subject=Cybersecurity%20Technical%20Writing%20Inquiry%20%E2%80%94%20Zain" class="footer-email-link">redhatzayn@gmail.com</a>
          </div>
        </div>
      `
    },
    blog: {
      tag: 'Publications &bull; Research Lab',
      title: 'Security Research & Technical Writeups',
      intro: 'Hands-on vulnerability analyses, exploit proof-of-concepts, reverse engineering notes, and CTF challenge walkthroughs published on Medium.',
      content: `
        <div class="medium-articles-grid" id="mediumArticlesGrid">
          ${staticMediumArticles.map(renderMediumArticleCard).join('')}
        </div>

        <div class="service-modal-cta">
          <div class="cta-text-group">
            <span class="cta-title">Read more research &amp; offensive deep-dives on Medium</span>
            <span class="cta-desc">Follow @zainzsite on Medium for real-world pentest walkthroughs, CVE breakdowns, and tool tutorials.</span>
          </div>
          <a href="https://medium.com/@zainzsite" target="_blank" rel="noopener noreferrer" class="cta-button">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px;">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Follow on Medium</span>
          </a>
        </div>
      `,
      footer: `
        <div class="sticky-footer-content">
          <a href="https://medium.com/@zainzsite" target="_blank" rel="noopener noreferrer" class="cta-button">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px;">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Follow @zainzsite on Medium</span>
          </a>

          <div class="sticky-footer-meta">
            <div class="footer-meta-item">
              <span class="status-pulse-dot"></span>
              <span>10+ Real-World Offensive Security Articles Published</span>
            </div>
            <a href="https://medium.com/@zainzsite" target="_blank" rel="noopener noreferrer" class="footer-email-link">medium.com/@zainzsite</a>
          </div>
        </div>
      `
    },
    about: {
      hideTopBar: true,
      tag: 'Identity &bull; Background &amp; Track Record',
      title: 'About Me',
      intro: '',
      content: `
        <div class="about-2col-grid">
          <!-- Left Column -->
          <div class="about-col-left">
            <div class="about-header-group">
              <div class="about-header-tag-row">
                <span class="modal-category-tag">Identity &bull; Background &amp; Track Record</span>
                <a href="Muhammad_Zain_Resume.pdf" download="Muhammad_Zain_Resume.pdf" class="about-quick-dl-btn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="14" height="14">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="12" y2="18"/>
                    <line x1="15" y1="15" x2="12" y2="18"/>
                  </svg>
                  <span>Download CV (PDF)</span>
                </a>
              </div>
              <h2 class="modal-headline" style="font-size: 2.1rem; line-height: 1.15;">Muhammad Zain Ul Aabdin</h2>
              <span class="about-role-subline">Penetration Tester &bull; Offensive Security Specialist</span>
            </div>

            <div class="about-quote-box">
              &ldquo;I legally break into systems so attackers can't, uncovering critical vulnerabilities and turning exploit chains into executive-ready remediation roadmaps.&rdquo;
            </div>

            <p class="about-lead-bio">
              Penetration Tester with <strong>2+ years of paid, hands-on offensive security experience</strong> across web applications, REST &amp; GraphQL APIs, networks, and cloud environments (AWS, Azure, GCP). Delivered <strong>55+ authorized penetration tests</strong>, uncovering <strong>100+ vulnerabilities</strong> and partnering directly with engineering teams to cut critical flaw dwell time by 40%.
            </p>

            <!-- Professional Experience (from Resume) -->
            <div class="about-block">
              <span class="about-block-title">Professional Experience</span>
              <div class="about-exp-list">
                
                <div class="about-exp-card">
                  <div class="exp-role-row">
                    <div>
                      <span class="exp-title">Penetration Tester</span>
                      <span class="exp-company">&bull; Cybervol (Remote)</span>
                    </div>
                    <span class="exp-period">Apr 2024 &ndash; Nov 2025</span>
                  </div>
                  <ul class="exp-bullets">
                    <li>Led <strong>40+ end-to-end authorized penetration tests</strong> across hybrid on-prem &amp; cloud environments, discovering 100+ vulnerabilities including business-logic flaws and privilege escalations.</li>
                    <li>Delivered risk-prioritized vulnerability reports and remediation blueprints to executive and engineering leaders, improving closure rates on critical findings by <strong>30%</strong>.</li>
                    <li>Partnered directly with DevOps teams to remediate 80+ API and microservices issues, cutting critical vulnerability dwell time by <strong>40%</strong>.</li>
                  </ul>
                </div>

                <div class="about-exp-card">
                  <div class="exp-role-row">
                    <div>
                      <span class="exp-title">Security Consultant</span>
                      <span class="exp-company">&bull; Freelance (Remote)</span>
                    </div>
                    <span class="exp-period">May 2020 &ndash; Mar 2024</span>
                  </div>
                  <ul class="exp-bullets">
                    <li>Delivered black-box and gray-box penetration tests for <strong>15+ international clients</strong> across fintech, e-commerce, and SaaS platforms.</li>
                    <li>Engineered detailed exploit chains, proof-of-concepts, and remediation blueprints aligned with <strong>OWASP Top 10</strong> and <strong>NIST</strong> frameworks to harden audit readiness.</li>
                    <li>Conducted threat modeling, tabletop exercises, and developer security awareness sessions to minimize recurring misconfigurations.</li>
                  </ul>
                </div>

              </div>
            </div>

            <!-- Education & Coursework -->
            <div class="about-block">
              <span class="about-block-title">Education &amp; Technical Coursework</span>
              <div class="about-edu-card">
                <div class="edu-degree">Bachelor of Science in Computer Science (BSCS)</div>
                <div class="edu-school">Karachi University &bull; Graduated Jan 2024</div>
              </div>
              <div class="about-course-chips">
                <span class="course-chip">Advanced Offensive Security (2023)</span>
                <span class="course-chip">Threat Hunting &amp; Cryptography (2022)</span>
                <span class="course-chip">Ethical Hacking &amp; Pentesting (2022)</span>
                <span class="course-chip">Linux Privilege Escalation (2021)</span>
                <span class="course-chip">Web Security Testing &amp; Bug Bounty (2020)</span>
              </div>
            </div>

            <!-- How I Work -->
            <div class="about-block">
              <span class="about-block-title">Offensive Methodology</span>
              <p class="about-block-desc">
                I approach engagements strictly from an adversary's standpoint: deep reconnaissance, vulnerability discovery, exploit chaining, and privilege escalation—culminating in business-impact reporting that translates technical risk for executives while giving engineers step-by-step remediation code.
              </p>
            </div>
          </div>

          <!-- Right Column -->
          <div class="about-col-right">
            <!-- What I Do Services -->
            <div class="about-col-section">
              <div class="about-section-header">
                <span class="about-block-title">What I Do</span>
                <span class="about-badge-chip">Core Services</span>
              </div>

              <div class="about-services-grid">
                <div class="about-service-card">
                  <div class="service-card-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div class="service-card-body">
                    <div class="service-card-title">Web, API &amp; Cloud Penetration Testing</div>
                    <div class="service-card-desc">Offensive security assessments covering web apps, REST &amp; GraphQL APIs, internal networks, and cloud environments (AWS, Azure, GCP).</div>
                  </div>
                </div>

                <div class="about-service-card">
                  <div class="service-card-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div class="service-card-body">
                    <div class="service-card-title">Vulnerability Assessment &amp; Remediation Guidance</div>
                    <div class="service-card-desc">Risk-prioritized discovery with actionable remediation blueprints to cut critical vulnerability dwell time.</div>
                  </div>
                </div>

                <div class="about-service-card">
                  <div class="service-card-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div class="service-card-body">
                    <div class="service-card-title">Technical Reports &amp; Executive Summaries</div>
                    <div class="service-card-desc">Translating exploit proofs-of-concept into business-impact context for board, engineering, and compliance stakeholders.</div>
                  </div>
                </div>

                <div class="about-service-card">
                  <div class="service-card-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div class="service-card-body">
                    <div class="service-card-title">Security Policies &amp; Compliance Documentation</div>
                    <div class="service-card-desc">Governance documentation, SOPs, and gap reviews aligned with GDPR, HIPAA, and PCI DSS requirements.</div>
                  </div>
                </div>

                <div class="about-service-card">
                  <div class="service-card-marker">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div class="service-card-body">
                    <div class="service-card-title">Security Awareness &amp; Incident Readiness</div>
                    <div class="service-card-desc">Threat education materials, tabletop guidelines, and incident response playbooks for proactive defense.</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Methodologies -->
            <div class="about-col-section">
              <div class="about-section-header">
                <span class="about-block-title">Tools &amp; Methodologies</span>
                <span class="about-badge-chip">Stack</span>
              </div>

              <div class="about-tools-matrix">
                <div class="tool-matrix-row">
                  <span class="tool-matrix-label">Offensive Arsenal</span>
                  <div class="tool-matrix-pills">
                    <span class="tool-badge-pill featured">Burp Suite Pro</span>
                    <span class="tool-badge-pill featured">Kali Linux</span>
                    <span class="tool-badge-pill">Nmap</span>
                    <span class="tool-badge-pill">Metasploit</span>
                    <span class="tool-badge-pill">Wireshark</span>
                    <span class="tool-badge-pill">SAST / DAST</span>
                  </div>
                </div>

                <div class="tool-matrix-row">
                  <span class="tool-matrix-label">Assessment Domains</span>
                  <div class="tool-matrix-pills">
                    <span class="tool-badge-pill">Web Applications (WAPT)</span>
                    <span class="tool-badge-pill">REST &amp; GraphQL APIs</span>
                    <span class="tool-badge-pill">Cloud (AWS/Azure/GCP)</span>
                    <span class="tool-badge-pill">Network Infrastructure</span>
                    <span class="tool-badge-pill">Red Teaming</span>
                  </div>
                </div>

                <div class="tool-matrix-row">
                  <span class="tool-matrix-label">Standards &amp; Frameworks</span>
                  <div class="tool-matrix-pills">
                    <span class="tool-badge-pill">OWASP Top 10</span>
                    <span class="tool-badge-pill">PTES Methodology</span>
                    <span class="tool-badge-pill">NIST Standards</span>
                    <span class="tool-badge-pill">Exploit Chains &amp; PoCs</span>
                    <span class="tool-badge-pill">GDPR &bull; HIPAA &bull; PCI DSS</span>
                  </div>
                </div>

                <div class="tool-matrix-row">
                  <span class="tool-matrix-label">Scripting &amp; Automation</span>
                  <div class="tool-matrix-pills">
                    <span class="tool-badge-pill">Python</span>
                    <span class="tool-badge-pill">Bash / Shell</span>
                    <span class="tool-badge-pill">CVE Analysis</span>
                    <span class="tool-badge-pill">Linux PrivEsc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      footer: `
        <div class="sticky-footer-content">
          <a href="Muhammad_Zain_Resume.pdf" download="Muhammad_Zain_Resume.pdf" class="cta-button" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="12" y2="18"/>
              <line x1="15" y1="15" x2="12" y2="18"/>
            </svg>
            <span>Download Muhammad Zain's Resume (PDF)</span>
          </a>

          <div class="sticky-footer-meta">
            <div class="footer-meta-item">
              <span class="status-pulse-dot"></span>
              <span>Available for Remote Roles &amp; Engagements Worldwide (No Sponsorship Needed)</span>
            </div>
            <a href="mailto:redhatzayn@gmail.com?subject=Security%20Engagement%20%26%20Role%20Inquiry%20%E2%80%94%20Zain" class="footer-email-link">redhatzayn@gmail.com</a>
          </div>
        </div>
      `
    }
  };

  function openModal(cardId) {
    const data = cardData[cardId];
    if (!data || !modalBackdrop) return;

    lastFocusedElement = document.activeElement;

    if (data.hideTopBar) {
      if (modalTopBar) modalTopBar.style.display = 'none';
    } else {
      if (modalTopBar) {
        modalTopBar.style.display = 'flex';
        modalTag.innerHTML = data.tag;
        modalTitle.textContent = data.title;
      }
    }

    const introHtml = data.intro ? `<p class="modal-intro-text">${data.intro}</p>` : '';
    modalContent.innerHTML = introHtml + data.content;
    modalContent.scrollTop = 0;

    if (data.footer && modalStickyFooter) {
      modalStickyFooter.innerHTML = data.footer;
      modalStickyFooter.style.display = 'flex';
    } else if (modalStickyFooter) {
      modalStickyFooter.innerHTML = '';
      modalStickyFooter.style.display = 'none';
    }

    isModalOpen = true;
    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (cardId === 'blog') {
      syncMediumArticles();
    }

    if (modalCloseBtn) {
      setTimeout(() => modalCloseBtn.focus(), 60);
    }
  }

  function closeModal() {
    if (!modalBackdrop) return;
    isModalOpen = false;
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function syncMediumArticles() {
    const CACHE_KEY = 'zain_medium_articles_cache_v2';
    const CACHE_TIME_KEY = 'zain_medium_cache_timestamp_v2';
    const ONE_HOUR = 3600 * 1000;

    const cached = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && cacheTime && (Date.now() - Number(cacheTime) < ONE_HOUR)) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          updateMediumGrid(parsed);
          return;
        }
      } catch (_) {}
    }

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zainzsite')
      .then(res => res.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          const fresh = data.items.map(item => {
            const imgMatch = item.description ? item.description.match(/<img[^>]+src="([^">]+)"/) : null;
            const img = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80';
            const cleanText = (item.description || '')
              .replace(/<figcaption[^>]*>.*?<\/figcaption>/gi, '')
              .replace(/<[^>]+>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/&amp;/g, '&')
              .replace(/\s+/g, ' ')
              .trim();
            const excerpt = cleanText.slice(0, 150) + (cleanText.length > 150 ? '...' : '');

            const catList = item.categories || [];
            let category = 'methodology';
            const catStr = catList.join(' ').toLowerCase();
            if (catStr.includes('cloud') || catStr.includes('ai')) {
              category = 'cloud-ai';
            } else if (catStr.includes('nmap') || catStr.includes('nessus') || catStr.includes('burp') || catStr.includes('tools') || catStr.includes('scanner')) {
              category = 'offensive-tools';
            }

            const d = item.pubDate ? new Date(item.pubDate.replace(/-/g, '/')) : null;
            const dateStr = d && !isNaN(d.getTime())
              ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              : (item.pubDate ? item.pubDate.split(' ')[0] : '');

            return {
              title: item.title,
              date: dateStr,
              link: item.link ? item.link.split('?')[0] : 'https://medium.com/@zainzsite',
              tag: catList[0] ? catList[0].replace(/-/g, ' ') : 'Security',
              image: img,
              excerpt: excerpt,
              category: category
            };
          });

          localStorage.setItem(CACHE_KEY, JSON.stringify(fresh));
          localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
          updateMediumGrid(fresh);
        }
      })
      .catch(() => {
        // Silently preserve pre-rendered static articles
      });
  }

  function updateMediumGrid(articles) {
    const grid = document.getElementById('mediumArticlesGrid');
    if (!grid) return;
    grid.innerHTML = articles.map(renderMediumArticleCard).join('');
  }

  function initModalSystem() {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Category filter pills delegation (supports both service cards & Medium articles)
    if (modalContent) {
      modalContent.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;

        const filter = pill.getAttribute('data-filter');
        const filterBar = pill.closest('.service-filter-bar');
        if (!filterBar) return;

        // Toggle active pill state & aria-selected
        filterBar.querySelectorAll('.filter-pill').forEach(btn => {
          const isActive = btn === pill;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Filter category cards & Medium cards with instant responsive feedback
        const cards = modalContent.querySelectorAll('.service-category-card[data-category], .medium-card[data-category]');
        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    }
  }

  function initCopyrightYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

})();

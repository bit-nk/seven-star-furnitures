/* ═══════════════════════════════════════════════
   7 STAR FURNITURES — HOME PAGE
   Requires: gsap + ScrollTrigger loaded before this
   ═══════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

// Mobile detection - disable scroll pinning on small screens
const isMobile = window.innerWidth <= 768;
if (isMobile) document.body.classList.add('is-mobile');

// ─────────────────────────────────────────────
// 1. HERO ENTRANCE
// ─────────────────────────────────────────────
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.hero-tag', { y: 40, opacity: 0, duration: 0.8 })
  .from('.hero-title', { y: 60, opacity: 0, duration: 1 }, '-=0.5')
  .from('.hero-sub', { y: 40, opacity: 0, duration: 0.8 }, '-=0.6')
  .from('.hero-btns', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
  .from('.hero-scroll-hint', { y: 20, opacity: 0, duration: 0.6 }, '-=0.2');

// ─────────────────────────────────────────────
// 2. DINING SCENE — Zoom-out with interactive text
// ─────────────────────────────────────────────
const diningSection = document.getElementById('diningZoom');
if (diningSection && !isMobile) {
  const dImg   = diningSection.querySelector('.dining-zoom-img');
  const dText1 = document.getElementById('dText1');
  const dText2 = document.getElementById('dText2');
  const dText3 = document.getElementById('dText3');

  gsap.set(dImg, { scale: 1.8, transformOrigin: '50% 40%' });

  const diningTl = gsap.timeline({
    scrollTrigger: {
      trigger: diningSection,
      start: 'top top',
      end: '+=4000',
      pin: true,
      scrub: 1,
    }
  });

  diningTl
    .to(dText1, { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }, 0.02)
    .from(dText1, { y: 30, duration: 0.10 }, 0.02)
    .to(dImg, { scale: 1.4, duration: 0.28, ease: 'power1.inOut' }, 0)
    .to(dText1, { opacity: 0, duration: 0.08 }, 0.22)
    .to(dText2, { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }, 0.32)
    .from(dText2, { y: 30, duration: 0.10 }, 0.32)
    .to(dImg, { scale: 1.1, duration: 0.28, ease: 'power1.inOut' }, 0.30)
    .to(dText2, { opacity: 0, duration: 0.08 }, 0.54)
    .to(dImg, { scale: 1, duration: 0.22, ease: 'power2.out' }, 0.58)
    .to(dText3, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.68)
    .from(dText3, { y: 25, duration: 0.12 }, 0.68)
    .to({}, { duration: 0.15 });
}

// ─────────────────────────────────────────────
// 3. MOSAIC SCENE — 6 images: show → describe → shrink to grid → fade → next
// ─────────────────────────────────────────────
const mosaicScene = document.getElementById('mosaic-scene');
if (mosaicScene && !isMobile) {
  const cells = [
    document.getElementById('mCell1'),
    document.getElementById('mCell2'),
    document.getElementById('mCell3'),
    document.getElementById('mCell4'),
    document.getElementById('mCell5'),
    document.getElementById('mCell6'),
  ];
  const descs = [
    document.getElementById('mDesc1'),
    document.getElementById('mDesc2'),
    document.getElementById('mDesc3'),
    document.getElementById('mDesc4'),
    document.getElementById('mDesc5'),
    document.getElementById('mDesc6'),
  ];
  const mosaicText = document.getElementById('mosaicText');

  // Grid: 80% of viewport centered (10% margin), 3 cols x 2 rows
  const M = 10, G = 0.6;
  const cW = (80 - G * 2) / 3;
  const rH = (80 - G) / 2;

  // Grid positions: top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
  const grid = [
    { x: M + cW * 2 + G * 2, y: M          },
    { x: M + cW + G,          y: M          },
    { x: M,                    y: M          },
    { x: M + cW * 2 + G * 2, y: M + rH + G },
    { x: M + cW + G,          y: M + rH + G },
    { x: M,                    y: M + rH + G },
  ];

  // Initial: 85% viewport, centered, all hidden
  const iW = 85, iH = 85;
  const iX = (100 - iW) / 2, iY = (100 - iH) / 2;

  cells.forEach((cell, i) => {
    gsap.set(cell, {
      left: iX + '%', top: iY + '%', width: iW + '%', height: iH + '%',
      opacity: 0, zIndex: 30 - i,
    });
  });
  descs.forEach(d => { if (d) gsap.set(d, { opacity: 0, y: 20 }); });
  gsap.set(mosaicText, { opacity: 0, y: 25 });

  const mTl = gsap.timeline({
    scrollTrigger: {
      trigger: mosaicScene,
      start: 'top top',
      end: '+=12000',
      pin: true,
      pinSpacing: true,
      scrub: 1,
    }
  });

  let t = 0;

  cells.forEach((cell, i) => {
    const g = grid[i];
    const desc = descs[i];
    const label = cell.querySelector('.mosaic-label');

    // 1) Reset to full size and fade in
    mTl.set(cell, { left: iX + '%', top: iY + '%', width: iW + '%', height: iH + '%' }, t);
    mTl.to(cell, { opacity: 1, duration: 0.015 }, t);
    t += 0.015;

    // 2) Description
    if (desc) {
      mTl.to(desc, { opacity: 1, y: 0, duration: 0.02, ease: 'power2.out' }, t);
      t += 0.04;
      mTl.to(desc, { opacity: 0, duration: 0.012 }, t);
      t += 0.012;
    }

    // 3) Shrink to grid slot
    mTl.to(cell, {
      left: g.x + '%', top: g.y + '%',
      width: cW + '%', height: rH + '%',
      duration: 0.035, ease: 'power2.inOut',
    }, t);
    if (label) mTl.to(label, { opacity: 1, duration: 0.01 }, t + 0.03);
    t += 0.04;

    // 4) Fade out (unless last image)
    if (i < 5) {
      mTl.to(cell, { opacity: 0, duration: 0.015 }, t);
      t += 0.02;
    }
  });

  // After image 6 sits in grid — snap all previous 5 to their grid positions and reveal
  t += 0.005;
  for (let p = 0; p < 5; p++) {
    const pg = grid[p];
    mTl.set(cells[p], { left: pg.x + '%', top: pg.y + '%', width: cW + '%', height: rH + '%' }, t);
    mTl.to(cells[p], { opacity: 1, duration: 0.02 }, t);
    const lb = cells[p].querySelector('.mosaic-label');
    if (lb) mTl.to(lb, { opacity: 1, duration: 0.01 }, t + 0.015);
  }
  t += 0.03;

  // Show text
  mTl.to(mosaicText, { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' }, t);
  t += 0.04;

  // Hold
  mTl.to({}, { duration: 0.03 }, t);
}

// ─────────────────────────────────────────────
// MOBILE ANIMATIONS — Fade-in on scroll (IntersectionObserver for reliability)
// ─────────────────────────────────────────────
if (isMobile) {

  // Use IntersectionObserver — works reliably on real mobile touch browsers
  // where ScrollTrigger's once:true can fail to fire
  function mobileFadeIn(el, yOffset) {
    yOffset = yOffset || 30;
    el.style.opacity = '0';
    el.style.transform = 'translateY(' + yOffset + 'px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  }

  // Dining: image + text cards fade in as they scroll into view
  const dImg = document.querySelector('.dining-zoom-img');
  if (dImg) {
    gsap.set(dImg, { scale: 1 });
    mobileFadeIn(dImg, 30);
  }

  document.querySelectorAll('.dining-text-layer').forEach(function(el, i) {
    el.style.transitionDelay = (i * 0.1) + 's';
    mobileFadeIn(el, 25);
  });

  // Mosaic: each cell + desc fades in on scroll
  document.querySelectorAll('.mosaic-cell').forEach(function(el) {
    mobileFadeIn(el, 30);
  });

  document.querySelectorAll('.mosaic-desc').forEach(function(el) {
    mobileFadeIn(el, 20);
  });

  const mText = document.getElementById('mosaicText');
  if (mText) {
    mobileFadeIn(mText, 20);
  }
}

// ─────────────────────────────────────────────
// 4. BESTSELLERS — Populate grid from PRODUCTS
// ─────────────────────────────────────────────
const bestsellersGrid = document.getElementById('bestsellersGrid');
if (bestsellersGrid) {
  // Pick 4 featured products with specific badges
  const featured = PRODUCTS.filter(p =>
    p.badge === 'Bestseller' || p.badge === 'Premium' || p.badge === 'Trending'
  ).slice(0, 4);

  bestsellersGrid.innerHTML = featured.map(product => {
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const safeId = encodeURIComponent(product.id);
    const safeName = escHtml(product.name);
    const safeCat = escHtml(product.category);
    const safeSub = escHtml(product.subcategory);
    const safeBadge = product.badge ? escHtml(product.badge) : '';
    const safeImg = imgPath(product.image);
    const safeRating = Math.min(5, Math.max(0, Math.floor(Number(product.rating) || 0)));
    const safeReviews = parseInt(product.reviews) || 0;

    return `
      <a href="pages/product.html?id=${safeId}" class="product-card">
        <div class="product-card-img">
          <img src="${safeImg}" alt="${safeName}" loading="lazy" />
          ${safeBadge ? `<span class="card-badge">${safeBadge}</span>` : ''}
          ${discount > 0 ? `<span class="card-discount">-${parseInt(discount)}%</span>` : ''}
        </div>
        <div class="product-card-body">
          <span class="card-sub">${safeCat} · ${safeSub}</span>
          <h3 class="card-title">${safeName}</h3>
          <div class="card-rating">
            ${'★'.repeat(safeRating)}${'☆'.repeat(5 - safeRating)}
            <span class="card-reviews">(${safeReviews})</span>
          </div>
          <div class="card-pricing">
            <span class="card-price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="card-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');
}

// ─────────────────────────────────────────────
// 5. FEATURE CARDS — Batch reveal
// ─────────────────────────────────────────────
gsap.set('.feature-card', { y: 60, opacity: 0 });
ScrollTrigger.batch('.feature-card', {
  onEnter: (batch) => gsap.to(batch, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
  }),
  start: 'top 85%',
  once: true,
});

// ─────────────────────────────────────────────
// 6. CONTACT SECTION ANIMATION
// ─────────────────────────────────────────────
const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');

if (contactInfo) {
  gsap.from(contactInfo, {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: contactInfo,
      start: 'top 80%',
      once: true,
    }
  });
}

if (contactForm) {
  gsap.from(contactForm, {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: contactForm,
      start: 'top 80%',
      once: true,
    }
  });
}

// ─────────────────────────────────────────────
// 9. CONTACT FORM HANDLER
// ─────────────────────────────────────────────
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) {
  contactFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic input validation
    const name = contactFormEl.querySelector('input[type="text"]');
    const email = contactFormEl.querySelector('input[type="email"]');
    if (!name || !name.value.trim() || name.value.trim().length > 200) return;
    if (!email || !email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) return;

    // Sanitize all form values (strip HTML tags)
    const sanitize = (v) => v.replace(/<[^>]*>/g, '').trim();
    const formData = {
      name: sanitize(name.value),
      email: sanitize(email.value),
      phone: sanitize(contactFormEl.querySelector('input[type="tel"]')?.value || ''),
      interest: sanitize(contactFormEl.querySelector('select')?.value || ''),
      message: sanitize(contactFormEl.querySelector('textarea')?.value || ''),
      // CSRF token placeholder — replace with real token from server in production
      _csrf: document.querySelector('meta[name="csrf-token"]')?.content || '',
    };

    // In production: send formData via fetch() to your API endpoint
    // For now: demo feedback
    const btn = contactFormEl.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sent!';
    btn.style.background = '#28c840';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      contactFormEl.reset();
    }, 2500);
  });
}

// ─────────────────────────────────────────────
// 10. SMOOTH SCROLL for anchor links
// ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─────────────────────────────────────────────
// 11. ACTIVE NAV LINK UPDATER on scroll
// ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

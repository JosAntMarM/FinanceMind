/* ==========================================================
   FINANCEMIND PERÚ — SCRIPT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');

  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- About media chart animation ---------- */
  const aboutMedia = document.querySelector('.about__media');
  if (aboutMedia) {
    const mediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          mediaObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    mediaObserver.observe(aboutMedia);
  }

  /* ---------- Methodology timeline fill + active steps ---------- */
  const methodTimeline = document.querySelector('.method__timeline');
  const methodLineFill = document.getElementById('methodLineFill');
  const methodSteps = document.querySelectorAll('.method-step');

  if (methodTimeline) {
    const methodObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (methodLineFill) methodLineFill.style.width = '100%';
          methodSteps.forEach((step, i) => {
            setTimeout(() => step.classList.add('is-active'), i * 220);
          });
          methodObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    methodObserver.observe(methodTimeline);
  }

  /* ---------- Subtle hero parallax on pointer move (desktop only) ---------- */
  const heroGlowCyan = document.querySelector('.hero .hero__glow--cyan');
  const heroGlowGreen = document.querySelector('.hero .hero__glow--green');
  const hero = document.querySelector('.hero');

  if (hero && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (heroGlowCyan) heroGlowCyan.style.transform = `translate(${x}px, ${y}px)`;
      if (heroGlowGreen) heroGlowGreen.style.transform = `translate(${-x}px, ${-y}px)`;
    });
  }

  /* ---------- Smooth-scroll offset for sticky navbar ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#top') return; // default scroll to top is fine
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});

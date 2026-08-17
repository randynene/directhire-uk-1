'use client';

import { useEffect } from 'react';

/* Decorative grid cells + the GSAP scroll suite, ported from the static
   build's js/main.js. Runs once after mount and cleans up on unmount. */
export default function PageEffects() {
  useEffect(() => {
    const grid = document.getElementById('job-grid');
    if (grid && !grid.childElementCount) {
      const frag = document.createDocumentFragment();
      for (let i = 0; i < 160; i += 1) {
        const cell = document.createElement('div');
        cell.className = 'job-post-grid__cell';
        frag.appendChild(cell);
      }
      grid.appendChild(frag);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let ctx;
    let timers = [];
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: 'power3.out' });

      const enter = (trigger, start) => ({
        trigger,
        start,
        toggleActions: 'play none none none',
      });

      const countUp = (el) => {
        if (el.dataset.counted) return;
        el.dataset.counted = 'true';
        const raw = el.textContent.trim();
        const m = raw.match(/[\d,]+/);
        if (!m) return;
        const target = parseFloat(m[0].replace(/,/g, ''));
        const pre = raw.slice(0, m.index);
        const post = raw.slice(m.index + m[0].length);
        const o = { v: 0 };
        gsap.to(o, {
          v: target,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = pre + Math.round(o.v).toLocaleString() + post;
          },
        });
      };

      ctx = gsap.context(() => {
        const q = (s) => Array.from(document.querySelectorAll(s));
        const one = (s) => document.querySelector(s);
        const from = (targets, vars) => {
          const t = (Array.isArray(targets) ? targets : [targets]).filter(Boolean);
          return t.length ? gsap.from(t, vars) : null;
        };

        /* page load */
        const tl = gsap.timeline({ delay: 0.1 });
        const nav = one('.navbar');
        if (nav) tl.from(nav, { y: -24, opacity: 0, duration: 0.7 }, 0);

        const heroCopy = one('[data-hero-copy]');
        if (heroCopy && heroCopy.children.length) {
          tl.from(Array.from(heroCopy.children), { y: 28, opacity: 0, duration: 0.85, stagger: 0.075 }, 0.15);
        }

        const panel = one('[data-shortlist]');
        if (panel) {
          tl.from(panel, { y: 44, opacity: 0, scale: 0.985, duration: 1, transformOrigin: '50% 0%' }, 0.35);
          const cards = Array.from(panel.querySelectorAll('.candidate-card'));
          if (cards.length) tl.from(cards, { y: 14, opacity: 0, duration: 0.6, stagger: 0.09 }, 0.7);
        }

        /* scroll progress */
        const bar = one('[data-progress]');
        if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

        /* generic reveals */
        q('[data-reveal]').forEach((el) => {
          const targets = el.getAttribute('data-reveal') === 'stagger' ? Array.from(el.children) : [el];
          from(targets, { y: 34, opacity: 0, duration: 0.85, stagger: 0.08, scrollTrigger: enter(el, 'top 86%') });
        });

        /* section headers */
        q('[data-sec-head]').forEach((head) => {
          from(Array.from(head.children), { y: 26, opacity: 0, duration: 0.75, stagger: 0.1, scrollTrigger: enter(head, 'top 88%') });
        });

        /* applicant grid */
        const gridWrap = one('[data-anim="grid"]');
        if (gridWrap) {
          const cells = Array.from(gridWrap.querySelectorAll('.job-post-grid__cell'));
          if (cells.length) {
            gsap.from(cells, {
              opacity: 0,
              scale: 0.55,
              duration: 0.5,
              ease: 'power2.out',
              stagger: { each: 0.004, from: 'random' },
              scrollTrigger: enter(gridWrap, 'top 82%'),
            });
            gsap.to(cells, {
              opacity: 0.45,
              duration: 0.6,
              ease: 'none',
              scrollTrigger: { trigger: gridWrap, start: 'top 45%', end: 'bottom 60%', scrub: true },
            });
          }
          const floaters = one('[data-anim="floaters"]');
          if (floaters) {
            from(Array.from(floaters.children), {
              y: 34, opacity: 0, scale: 0.94, duration: 0.9, stagger: 0.13,
              scrollTrigger: enter(floaters, 'top 92%'),
            });
          }
          gsap.to(gridWrap, {
            yPercent: -6, ease: 'none',
            scrollTrigger: { trigger: gridWrap, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          });
        }

        /* video slot */
        const video = one('[data-anim="video"]');
        if (video) {
          gsap.fromTo(video,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.out', scrollTrigger: enter(video, 'top 82%') });
          if (video.firstElementChild) {
            gsap.from(video.firstElementChild, { scale: 1.08, duration: 1.4, scrollTrigger: enter(video, 'top 82%') });
          }
        }

        /* stage cards */
        const stagesEl = one('[data-anim="stages"]');
        if (stagesEl) {
          from(Array.from(stagesEl.children), { y: 46, opacity: 0, duration: 0.9, stagger: 0.12, scrollTrigger: enter(stagesEl, 'top 84%') });
        }

        /* code panel */
        const code = one('[data-anim="codepanel"]');
        if (code) {
          gsap.from(code, { y: 34, opacity: 0, duration: 0.85, scrollTrigger: enter(code, 'top 85%') });
          const lines = Array.from(code.querySelectorAll('[data-code-line]'));
          if (lines.length) {
            gsap.from(lines, { x: -12, opacity: 0, duration: 0.4, stagger: 0.055, ease: 'power2.out', scrollTrigger: enter(code, 'top 78%') });
          }
        }

        /* report card */
        const report = one('[data-anim="report"]');
        if (report) {
          gsap.from(report, { y: 40, opacity: 0, duration: 0.9, scrollTrigger: enter(report, 'top 85%') });
          const fills = Array.from(report.querySelectorAll('.progress > div'));
          if (fills.length) {
            gsap.from(fills, { scaleX: 0, transformOrigin: '0% 50%', duration: 1.1, stagger: 0.14, scrollTrigger: enter(report, 'top 78%') });
          }
          ScrollTrigger.create({
            ...enter(report, 'top 78%'),
            onEnter: () => {
              report.querySelectorAll('.score-row__verdict').forEach((s) => {
                if (/^\d+%$/.test(s.textContent.trim())) countUp(s);
              });
            },
          });
        }

        /* funnel */
        const funnel = one('[data-anim="funnel"]');
        if (funnel) {
          const rows = Array.from(funnel.querySelectorAll('.funnel-row'));
          const fills = Array.from(funnel.querySelectorAll('.progress > div'));
          if (rows.length) {
            const ftl = gsap.timeline({ scrollTrigger: enter(funnel, 'top 78%') });
            ftl.from(funnel, { y: 34, opacity: 0, duration: 0.7 }, 0);
            rows.forEach((row, i) => {
              const at = 0.18 + i * 0.11;
              ftl.from(row, { y: 14, opacity: 0, duration: 0.55 }, at);
              if (fills[i]) ftl.from(fills[i], { scaleX: 0, transformOrigin: '0% 50%', duration: 0.85, ease: 'power2.out' }, at);
              const val = row.querySelector('.funnel-row__value');
              if (val) ftl.add(() => countUp(val), at);
            });
          }
        }

        /* de-risk band */
        const derisk = one('[data-anim="derisk"]');
        if (derisk) {
          const items = Array.from(derisk.querySelectorAll('.derisk-band__item'));
          if (items.length) {
            gsap.from(items, { y: 16, opacity: 0, duration: 0.6, stagger: 0.09, scrollTrigger: enter(derisk, 'top 92%') });
          }
        }

        /* feature cards */
        const feats = one('[data-anim="features"]');
        if (feats) {
          from(Array.from(feats.children), { y: 40, opacity: 0, duration: 0.85, stagger: 0.1, scrollTrigger: enter(feats, 'top 84%') });
        }

        /* pricing */
        const pricing = one('[data-anim="pricing"]');
        if (pricing) {
          gsap.from(pricing, { y: 44, opacity: 0, duration: 0.95, scrollTrigger: enter(pricing, 'top 84%') });
          const big = pricing.querySelector('.pricing-card__headline');
          if (big) {
            gsap.from(big, { scale: 0.9, opacity: 0, duration: 0.9, ease: 'back.out(1.6)', transformOrigin: '0% 50%', scrollTrigger: enter(pricing, 'top 80%') });
          }
        }

        /* faq */
        const faq = one('[data-anim="faq"]');
        if (faq) {
          from(Array.from(faq.querySelectorAll('.accordion-item__trigger')), {
            y: 22, opacity: 0, duration: 0.6, stagger: 0.06, scrollTrigger: enter(faq, 'top 86%'),
          });
        }

        /* closing heading */
        const cta = one('[data-anim="cta-heading"]');
        if (cta) {
          gsap.fromTo(cta,
            { clipPath: 'inset(0% 0% 100% 0%)', y: 26 },
            { clipPath: 'inset(0% 0% -12% 0%)', y: 0, duration: 1.1, ease: 'power4.out', scrollTrigger: enter(cta, 'top 88%') });
        }
      });

      timers = [200, 700, 1500].map((t) => setTimeout(() => ScrollTrigger.refresh(), t));
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}

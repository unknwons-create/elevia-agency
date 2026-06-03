"use client";
import { useEffect, useRef } from "react";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.fromTo(".cta-item", { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: .6, stagger: .1, ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: "top 75%" } });
      }, ref);
      return () => ctx.revert();
    });
  }, []);

  return (
    <section className="ctaf" ref={ref}>
      <div className="mesh-bg" aria-hidden="true" />
      <div className="ctaf-in">
        <span className="cta-item eyebrow font-label">Lancez-vous 🚀</span>
        <h2 className="cta-item font-display">
          Vous avez une idée <span className="grad-text" style={{ fontStyle: "italic" }}>de projet ?</span>
        </h2>
        <p className="cta-item">
          Contactez-nous dès maintenant — devis personnalisé et réponse sous 24h.
        </p>

        <div className="cta-item ctaf-main">
          <a href="https://wa.me/33688740242" target="_blank" rel="noopener noreferrer" className="wa">
            <WhatsApp /> WhatsApp · 06 88 74 02 42
          </a>
        </div>

        <div className="cta-item ctaf-socials">
          <a href="https://www.instagram.com/elevia_agence" target="_blank" rel="noopener noreferrer" className="soc">
            <Instagram /> @elevia_agence
          </a>
          <a href="https://www.snapchat.com/add/elevia_agency" target="_blank" rel="noopener noreferrer" className="soc">
            <Snapchat /> elevia_agency
          </a>
        </div>
      </div>

      <style>{`
        .ctaf { position: relative; overflow: hidden; padding: 120px 24px; text-align: center; }
        .ctaf::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 200px;
          background: linear-gradient(to top, transparent, #070B16); z-index: 1; pointer-events: none; }
        .ctaf::after { content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 200px;
          background: linear-gradient(to bottom, transparent, #070B16); z-index: 1; pointer-events: none; }
        .ctaf-in { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
        .ctaf .eyebrow { display: inline-block; font-size: .74rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: #4ade80; margin-bottom: 18px; }
        .ctaf h2 { font-weight: 500; font-size: clamp(2.2rem,5.5vw,4rem); letter-spacing: -.02em; line-height: 1.08; margin-bottom: 18px; }
        .ctaf p { color: #aeb8d0; font-size: 1.08rem; margin-bottom: 42px; }
        .ctaf-main { margin-bottom: 36px; }
        .wa { display: inline-flex; align-items: center; gap: 12px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 600; font-size: 1.05rem; color: #fff; background: #25D366; padding: 17px 34px; border-radius: 14px;
          text-decoration: none; box-shadow: 0 10px 40px rgba(37,211,102,.3); transition: transform .2s ease, box-shadow .2s ease; }
        .wa:hover { transform: translateY(-3px); box-shadow: 0 16px 50px rgba(37,211,102,.45); }
        .ctaf-socials { display: flex; gap: 22px; justify-content: center; align-items: center; flex-wrap: wrap; }
        .soc { display: inline-flex; align-items: center; gap: 9px; font-family: 'Space Grotesk', sans-serif;
          font-size: .92rem; font-weight: 500; color: #c3cce0; text-decoration: none; transition: color .2s ease; }
        .soc:hover { color: #fff; }
        .soc svg { flex-shrink: 0; }
      `}</style>
    </section>
  );
}

function WhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.845L.057 23.01a.75.75 0 0 0 .932.932l5.165-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.51-5.27-1.396l-.378-.213-3.065.87.87-3.065-.213-.378A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" /><stop offset=".35" stopColor="#fa7e1e" />
          <stop offset=".6" stopColor="#d62976" /><stop offset="1" stopColor="#962fbf" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)" />
      <rect x="6.4" y="6.4" width="11.2" height="11.2" rx="3.4" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="16.3" cy="7.7" r="1.05" fill="#fff" />
    </svg>
  );
}

function Snapchat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#FFFC00" />
      <path fill="#fff" stroke="#111" strokeWidth=".3" d="M12.1 4.6c1.6 0 2.85.74 3.43 2.06.27.6.21 1.66.16 2.5l-.01.13c.05.03.14.06.27.06.2-.01.43-.08.68-.2.1-.05.21-.06.29-.06.12 0 .24.02.33.06.3.1.31.32.31.42 0 .27-.36.46-.79.62-.05.02-.13.04-.22.07-.29.09-.74.23-.86.52-.06.15-.04.34.08.57l.01.01c.04.09.99 2.25 3.1 2.6.16.03.28.17.27.33 0 .05-.01.1-.03.14-.16.37-.83.64-2.04.82-.04.06-.08.24-.1.37-.02.11-.05.23-.09.36-.05.17-.17.25-.36.25h-.02c-.09 0-.2-.02-.35-.05-.23-.05-.49-.09-.82-.09-.2 0-.39.01-.59.05-.39.07-.73.3-1.12.57-.55.39-1.18.83-2.13.83h-.23c-.95 0-1.58-.44-2.13-.83-.39-.27-.72-.5-1.11-.57-.2-.03-.41-.05-.6-.05-.35 0-.62.06-.82.1-.14.03-.25.05-.35.05-.24 0-.34-.15-.38-.27-.04-.13-.07-.25-.09-.37-.03-.12-.07-.32-.11-.37-1.24-.14-1.91-.42-2.06-.79-.02-.04-.03-.1-.04-.15-.01-.16.11-.3.27-.33 2.11-.35 3.06-2.51 3.1-2.6l.01-.02c.12-.22.14-.42.08-.56-.13-.28-.57-.43-.86-.52-.08-.02-.16-.05-.22-.08-.72-.28-.81-.6-.77-.82.06-.31.44-.51.76-.51.09 0 .17.02.25.05.27.13.51.19.71.19.15 0 .25-.04.3-.07l-.03-.37c-.06-1.05-.13-2.36.2-3.13C9.24 5.34 10.49 4.6 12.1 4.6z" />
    </svg>
  );
}

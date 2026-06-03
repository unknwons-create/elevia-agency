"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "+200", label: "Clients accompagnés", grad: "linear-gradient(100deg,#60a5fa,#a78bfa)" },
  { value: "97%", label: "de clients satisfaits", grad: "linear-gradient(100deg,#34d399,#22d3ee)" },
  { value: "1M+ €", label: "générés pour nos clients", grad: "linear-gradient(100deg,#f472b6,#a78bfa)" },
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import("gsap").then(({ gsap }) => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-anim", { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: .7, ease: "power3.out", stagger: .12, delay: .15 });
        gsap.fromTo(".hero-underline", { scaleX: 0 },
          { scaleX: 1, duration: .8, ease: "power2.out", delay: 1, transformOrigin: "left" });
      }, rootRef);

      const onMove = (e: MouseEvent) => {
        if (!meshRef.current) return;
        const x = (e.clientX / window.innerWidth - .5) * 26;
        const y = (e.clientY / window.innerHeight - .5) * 26;
        gsap.to(meshRef.current, { x, y, duration: 1.2, ease: "power1.out" });
      };
      window.addEventListener("mousemove", onMove);
      cleanup = () => { window.removeEventListener("mousemove", onMove); ctx.revert(); };
    });
    return () => cleanup?.();
  }, []);

  return (
    <section id="hero" ref={rootRef} className="hero">
      <div className="mesh-bg" ref={meshRef} aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-anim hero-badge font-label">
          <span className="hero-dot" /> 🚀 Agence Web · Shopify & Sites Vitrines
        </div>

        <h1 className="hero-anim hero-title font-display">
          Votre marque. Vos ventes.
          <br />
          <span className="hero-accent grad-text">
            Décollent.
            <span className="hero-underline" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero-anim hero-sub">
          Sites e-commerce, vitrines & identités de marque clé en main.
          <br />
          <strong>+200 clients accompagnés, 97% satisfaits.</strong>
        </p>

        <div className="hero-anim hero-cta">
          <a href="#packs" className="btn-grad">Voir nos packs ✨</a>
          <a href="https://wa.me/33688740242" target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>

        <div className="hero-anim hero-stats">
          {stats.map((s) => (
            <div className="hero-stat glass" key={s.label}>
              <div className="hero-stat-num font-ui" style={{ backgroundImage: s.grad }}>{s.value}</div>
              <div className="hero-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 120px 24px 70px; text-align: center; }
        .hero::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 220px;
          background: linear-gradient(to bottom, transparent, #070B16); z-index: 1; pointer-events: none; }
        .hero-inner { position: relative; z-index: 2; max-width: 940px; width: 100%; }
        .hero-badge { display: inline-flex; align-items: center; gap: 9px; background: rgba(34,197,94,.1);
          border: 1px solid rgba(34,197,94,.3); color: #4ade80; font-size: .72rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; padding: 9px 18px; border-radius: 100px; margin-bottom: 30px; }
        .hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: pulse 2s ease infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        .hero-title { font-weight: 500; font-size: clamp(2.7rem, 7vw, 5.6rem); line-height: 1.04;
          letter-spacing: -.02em; margin-bottom: 26px; }
        .hero-accent { position: relative; font-style: italic; display: inline-block;
          background: linear-gradient(100deg,#60a5fa,#a78bfa 46%,#f472b6);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent; }
        .hero-underline { position: absolute; left: 0; bottom: -6px; height: 5px; width: 100%; border-radius: 4px;
          background: #22c55e; display: block; }
        .hero-sub { color: #c3cce0; font-size: clamp(1rem, 2vw, 1.25rem); line-height: 1.6; max-width: 600px;
          margin: 0 auto 40px; }
        .hero-sub strong { color: #fff; font-weight: 700; }
        .hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px; }
        .btn-grad { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 1rem; color: #fff;
          background: linear-gradient(100deg,#3B82F6,#8B5CF6); padding: 16px 34px; border-radius: 12px;
          text-decoration: none; box-shadow: 0 8px 40px rgba(99,102,241,.4); transition: transform .2s ease, box-shadow .2s ease; }
        .btn-grad:hover { transform: translateY(-3px); box-shadow: 0 14px 50px rgba(99,102,241,.6); }
        .btn-wa { display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 600; font-size: 1rem; color: #fff; background: #25D366; padding: 16px 30px;
          border-radius: 12px; text-decoration: none; box-shadow: 0 8px 30px rgba(37,211,102,.32);
          transition: background .2s ease, transform .2s ease, box-shadow .2s ease; }
        .btn-wa:hover { background: #20bd5a; transform: translateY(-3px); box-shadow: 0 14px 44px rgba(37,211,102,.45); }
        .btn-wa svg { flex-shrink: 0; }
        .hero-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; max-width: 760px; margin: 0 auto; }
        .hero-stat { padding: 22px 18px; }
        .hero-stat-num { font-weight: 700; font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-stat-lbl { color: #aeb8d0; font-size: .82rem; margin-top: 4px; }

        @media (max-width: 640px) {
          .hero { padding: 110px 20px 56px; }
          .hero-cta { flex-direction: column; }
          .hero-cta a { width: 100%; text-align: center; }
          .hero-stats { grid-template-columns: 1fr; max-width: 360px; }
          .hero-stat { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 16px; }
          .hero-stat-lbl { margin-top: 0; }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.845L.057 23.01a.75.75 0 0 0 .932.932l5.165-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.51-5.27-1.396l-.378-.213-3.065.87.87-3.065-.213-.378A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

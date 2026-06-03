"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  name: string;
  category: string;
  type: "demo" | "live" | "image";
  src: string; // iframe url for demo/live, image path for image
  image?: string; // thumbnail for live
  url?: string; // external link for live
};

const items: Item[] = [
  { name: "Dubai Land", category: "Conciergerie de luxe", type: "live", src: "https://dubailandconcierge.com", image: "/images/portfolio/dubailand.jpg", url: "https://dubailandconcierge.com" },
  { name: "Homycab", category: "Chauffeur privé VTC", type: "live", src: "https://www.homycab.fr", image: "/images/portfolio/homycab.jpg", url: "https://www.homycab.fr" },
  { name: "Maison Lumière", category: "Restaurant gastronomique", type: "demo", src: "/demos/restaurant.html" },
  { name: "Azur Estate", category: "Immobilier de prestige", type: "demo", src: "/demos/immobilier.html" },
  { name: "NOIR", category: "Mode & streetwear", type: "demo", src: "/demos/mode.html" },
  { name: "PULSE", category: "Coaching sportif", type: "demo", src: "/demos/coach.html" },
  { name: "Belle Éclat", category: "Institut de beauté", type: "demo", src: "/demos/beaute.html" },
  { name: "Brew & Co", category: "Coffee shop", type: "demo", src: "/demos/cafe.html" },
  { name: "Studio Lens", category: "Photographe", type: "demo", src: "/demos/photographe.html" },
  { name: "Botané", category: "Cosmétique naturelle", type: "demo", src: "/demos/cosmetique.html" },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".pf-card").forEach((card, i) => {
          gsap.fromTo(card, { opacity: 0, y: 46 },
            { opacity: 1, y: 0, duration: .55, ease: "power2.out", delay: (i % 3) * .08,
              scrollTrigger: { trigger: card, start: "top 90%" } });
        });
      }, ref);
      return () => ctx.revert();
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="realisations" className="pf" ref={ref}>
      <div className="sec-head">
        <span className="eyebrow font-label">Réalisations</span>
        <h2 className="font-display">Nos derniers projets 🎨</h2>
        <p>Des boutiques qui convertissent, des sites qui marquent. Cliquez pour explorer.</p>
      </div>

      <div className="pf-grid">
        {items.map((it) => (
          <button className="pf-card" key={it.name} onClick={() => setActive(it)}>
            <div className="pf-thumb">
              {it.type === "demo" ? (
                <div className="pf-iframe-wrap" aria-hidden="true">
                  <iframe src={it.src} title={it.name} loading="lazy" scrolling="no" />
                </div>
              ) : (
                <Image
                  src={it.type === "live" ? it.image! : it.src}
                  alt={`${it.name} — ${it.category}`}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              )}
              <div className="pf-overlay">
                <span className="pf-open">Voir le projet →</span>
              </div>
              {it.type === "live" && <span className="pf-live">● En ligne</span>}
              <span className="pf-tap" aria-hidden="true" />
            </div>
            <div className="pf-meta">
              <span className="pf-cat font-label">{it.category}</span>
              <span className="pf-name font-ui">{it.name}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="pf-modal" onClick={() => setActive(null)}>
          <div className="pf-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="pf-bar">
              <div className="pf-bar-l">
                <span className="pf-dots"><i/><i/><i/></span>
                <span className="pf-title font-ui">{active.name}</span>
                <span className="pf-tag">{active.category}</span>
              </div>
              <div className="pf-bar-r">
                {active.url && (
                  <a href={active.url} target="_blank" rel="noopener noreferrer" className="pf-visit">Visiter le site ↗</a>
                )}
                <button className="pf-close" onClick={() => setActive(null)} aria-label="Fermer">✕</button>
              </div>
            </div>
            <div className="pf-stage">
              {active.type === "image" ? (
                <img src={active.src} alt={active.name} className="pf-full-img" />
              ) : (
                <iframe src={active.src} title={active.name} className="pf-full-frame" />
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pf { max-width: 1280px; margin: 0 auto; padding: 100px 24px; }
        .pf .sec-head { text-align: center; margin-bottom: 56px; }
        .pf-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .pf-card { text-align: left; background: none; border: 0; padding: 0; display: flex; flex-direction: column; gap: 14px;
          cursor: pointer; -webkit-tap-highlight-color: transparent; }
        .pf-thumb { position: relative; aspect-ratio: 16/11; border-radius: 16px; overflow: hidden;
          background: #0B1020; border: 1px solid rgba(255,255,255,.1); }
        .pf-iframe-wrap { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .pf-iframe-wrap iframe { width: 1280px; height: 880px; border: 0;
          transform: scale(.305); transform-origin: top left; pointer-events: none; }
        .pf-tap { position: absolute; inset: 0; z-index: 4; display: block; }
        .pf-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: flex-end; padding: 18px;
          pointer-events: none;
          background: linear-gradient(to top, rgba(7,11,22,.88), rgba(7,11,22,.1) 55%, transparent);
          opacity: 0; transition: opacity .3s ease; }
        .pf-card:hover .pf-overlay { opacity: 1; }
        .pf-card:hover .pf-thumb { border-color: #8B5CF6; }
        .pf-open { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: .9rem; color: #fff;
          background: linear-gradient(100deg,#3B82F6,#8B5CF6); padding: 9px 16px; border-radius: 9px; }
        .pf-live { position: absolute; top: 12px; left: 12px; font-family: 'Cabinet Grotesk', sans-serif;
          font-size: .68rem; font-weight: 700; color: #4ade80; background: rgba(7,11,22,.7); backdrop-filter: blur(6px);
          padding: 5px 11px; border-radius: 100px; letter-spacing: .04em; }
        .pf-meta { display: flex; flex-direction: column; gap: 2px; }
        .pf-cat { font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8B5CF6; }
        .pf-name { font-size: 1.1rem; font-weight: 600; color: #fff; }

        .pf-modal { position: fixed; inset: 0; z-index: 200; background: rgba(4,6,12,.8);
          backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: fade .25s ease; }
        @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
        .pf-dialog { width: 100%; max-width: 1100px; height: min(86vh, 800px); background: #0B1020;
          border: 1px solid rgba(255,255,255,.14); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 40px 100px rgba(0,0,0,.6); }
        .pf-bar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03); }
        .pf-bar-l, .pf-bar-r { display: flex; align-items: center; gap: 12px; }
        .pf-dots { display: flex; gap: 6px; }
        .pf-dots i { width: 11px; height: 11px; border-radius: 50%; background: rgba(255,255,255,.2); }
        .pf-dots i:nth-child(1){background:#ff5f57}.pf-dots i:nth-child(2){background:#febc2e}.pf-dots i:nth-child(3){background:#28c840}
        .pf-title { font-weight: 600; color: #fff; }
        .pf-tag { font-size: .76rem; color: #8a96ac; }
        .pf-visit { font-family: 'Space Grotesk', sans-serif; font-size: .82rem; font-weight: 600; color: #fff;
          background: linear-gradient(100deg,#3B82F6,#8B5CF6); padding: 8px 16px; border-radius: 9px; text-decoration: none; }
        .pf-close { width: 34px; height: 34px; border-radius: 9px; border: 1px solid rgba(255,255,255,.15);
          background: transparent; color: #fff; font-size: .9rem; }
        .pf-close:hover { background: rgba(255,255,255,.08); }
        .pf-stage { flex: 1; overflow: auto; background: #fff; }
        .pf-full-frame { width: 100%; height: 100%; border: 0; }
        .pf-full-img { width: 100%; display: block; }

        @media (max-width: 900px) { .pf-grid { grid-template-columns: repeat(2,1fr); } }
        @media (hover: none) {
          .pf-overlay { opacity: 1; background: linear-gradient(to top, rgba(7,11,22,.82), transparent 60%); }
          .pf-open { font-size: .82rem; padding: 8px 14px; }
        }
        @media (max-width: 560px) {
          .pf-grid { grid-template-columns: 1fr; }
          .pf-modal { padding: 0; }
          .pf-dialog { height: 100dvh; max-width: 100%; border-radius: 0; border: 0; }
          .pf-tag { display: none; }
          .pf-title { font-size: .95rem; }
        }
      `}</style>
    </section>
  );
}

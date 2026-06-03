"use client";
import { useEffect, useRef } from "react";

const pillars = [
  {
    color: "#8B5CF6",
    soft: "rgba(139,92,246,.12)",
    emoji: "💎",
    title: "Design premium",
    desc: "Des sites sur-mesure pensés pour convertir. Chaque détail reflète votre image de marque et inspire confiance.",
  },
  {
    color: "#22C55E",
    soft: "rgba(34,197,94,.12)",
    emoji: "🤝",
    title: "Accompagnement",
    desc: "On ne vous livre pas qu'un site — on vous forme et on vous guide. Vidéo, e-book et suivi personnalisé inclus.",
  },
  {
    color: "#22D3EE",
    soft: "rgba(34,211,238,.12)",
    emoji: "⚡",
    title: "Réactivité",
    desc: "Délais rapides, communication fluide via WhatsApp. Vous êtes toujours informé de l'avancement de votre projet.",
  },
  {
    color: "#EC4899",
    soft: "rgba(236,72,153,.12)",
    emoji: "📈",
    title: "Résultats",
    desc: "+200 clients, 97% satisfaits, 1M+€ générés. On crée des sites qui rapportent vraiment, pas juste de jolies vitrines.",
  },
];

export default function WhyElevia() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".pillar").forEach((el, i) => {
          gsap.fromTo(el, { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: .6, delay: (i % 4) * .1, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%" } });
        });
      }, ref);
      return () => ctx.revert();
    });

    // Mobile: illuminate the pillar centered in the viewport
    let obs: IntersectionObserver | undefined;
    if (window.matchMedia("(hover: none)").matches) {
      obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle("lit", e.isIntersecting)),
        { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
      );
      ref.current?.querySelectorAll(".pillar").forEach((el) => obs!.observe(el));
    }
    return () => obs?.disconnect();
  }, []);

  return (
    <section id="pourquoi" className="why" ref={ref}>
      <div className="sec-head">
        <span className="eyebrow font-label">Pourquoi nous</span>
        <h2 className="font-display">Pourquoi choisir Elevia ? ✨</h2>
      </div>
      <div className="why-grid">
        {pillars.map((p) => (
          <div className="pillar" key={p.title}
            style={{ ["--c" as string]: p.color, ["--cs" as string]: p.soft } as React.CSSProperties}>
            <div className="pillar-icon">{p.emoji}</div>
            <h3 className="font-ui">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        .why { max-width: 1280px; margin: 0 auto; padding: 90px 24px; }
        .why .sec-head { text-align: center; margin-bottom: 56px; }
        .why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 22px; }
        .pillar { padding: 34px 28px; border-radius: 20px; background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08); transition: transform .25s ease, border-color .25s ease, background .25s ease; }
        .pillar:hover, .pillar.lit { transform: translateY(-5px); border-color: var(--c); background: var(--cs);
          box-shadow: 0 0 0 1px var(--c), 0 18px 50px var(--cs); }
        .pillar.lit .pillar-icon { box-shadow: 0 0 24px var(--cs); }
        .pillar-icon { width: 56px; height: 56px; border-radius: 15px; background: var(--cs);
          border: 1px solid var(--c); display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem; margin-bottom: 20px; }
        .pillar h3 { font-size: 1.2rem; font-weight: 600; color: #fff; margin-bottom: 10px; }
        .pillar p { color: #aeb8d0; font-size: .92rem; line-height: 1.6; }
        @media (max-width: 1040px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

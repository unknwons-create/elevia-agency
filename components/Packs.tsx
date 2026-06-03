"use client";
import { useEffect, useRef } from "react";

type Pack = {
  emoji: string;
  name: string;
  price: string;
  priceNote?: string;
  accent: string;
  accentSoft: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  excluded?: string[];
  cta: string;
  wa: string;
};

const packs: Pack[] = [
  {
    emoji: "🚀",
    name: "Pack Starter",
    price: "170€",
    accent: "#22C55E",
    accentSoft: "rgba(34,197,94,.12)",
    features: [
      "Boutique Shopify clé en main",
      "Liste de produits gagnants (actualisée)",
      "Flyer digital publicitaire",
      "E-book complet pour débutant",
      "Mini-formation Shopify",
      "Lancement campagne TikTok",
    ],
    cta: "Choisir ce pack",
    wa: "Bonjour Target 👋 Je suis intéressé(e) par le Pack Starter (170€). Pouvez-vous m'en dire plus ?",
  },
  {
    emoji: "💎",
    name: "Pack Web Premium",
    price: "350€",
    priceNote: "ou sur devis",
    accent: "#8B5CF6",
    accentSoft: "rgba(139,92,246,.14)",
    featured: true,
    badge: "Le plus populaire",
    features: [
      "Design sur-mesure 100% responsive",
      "Thème professionnel premium & unique",
      "Pack visuels & images HD",
      "SEO optimisé (balises, vitesse, indexation Google)",
      "Intégration complète des fiches produits",
      "Pages : Accueil, Boutique, Contact, Blog, Suivi colis, FAQ, Légales",
      "Configuration paiement & livraison",
      "Réseaux sociaux connectés + page 404 & barre promo",
      "Emails de confirmation automatiques",
      "Vidéo formation complète",
      "2 révisions offertes",
    ],
    cta: "Choisir ce pack",
    wa: "Bonjour Target 👋 Je suis intéressé(e) par le Pack Web Premium (350€). J'aimerais un devis et plus d'infos.",
  },
  {
    emoji: "🏛️",
    name: "Pack Site Vitrine",
    price: "dès 300€",
    priceNote: "ou sur devis",
    accent: "#22D3EE",
    accentSoft: "rgba(34,211,238,.12)",
    features: [
      "Base du Pack Web Premium incluse",
      "Formulaire d'inscription newsletter",
      "Pages : Accueil, À propos, Services, Contact",
      "Configuration avancée du menu",
      "Mentions légales rédigées",
      "Boutons réseaux sociaux configurés",
      "Accompagnement 3 jours (dispo pour toutes vos questions)",
    ],
    excluded: ["Vidéo formation complète"],
    cta: "Choisir ce pack",
    wa: "Bonjour Target 👋 Je suis intéressé(e) par le Pack Site Vitrine (à partir de 300€). Pouvez-vous me faire un devis ?",
  },
  {
    emoji: "📊",
    name: "Pack Stratégie Marketing",
    price: "300€",
    priceNote: "prix fixe",
    accent: "#EC4899",
    accentSoft: "rgba(236,72,153,.12)",
    features: [
      "Accompagnement & lancement de campagnes (TikTok, Google, Snapchat ou Meta Ads)",
      "Vidéo démo de lancement des ads",
      "Audit cible & positionnement (personas)",
      "Structure de campagne (budget, audiences, créas)",
      "Angles & hooks publicitaires gagnants",
      "Installation du pixel de tracking (Meta / TikTok)",
      "Suivi & optimisation pendant 5 jours",
    ],
    cta: "Nous contacter pour lancer ma campagne",
    wa: "Bonjour Target 👋 Je souhaite lancer une campagne avec le Pack Stratégie Marketing (300€). Pouvez-vous me recontacter ?",
  },
];

function Check({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7488"
      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Packs() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".pack-card").forEach((card, i) => {
          gsap.fromTo(card, { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: .6, ease: "power2.out", delay: (i % 4) * .08,
              scrollTrigger: { trigger: card, start: "top 88%" } });
        });
      }, ref);
      return () => ctx.revert();
    });

    let obs: IntersectionObserver | undefined;
    if (window.matchMedia("(hover: none)").matches) {
      obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle("lit", e.isIntersecting)),
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      ref.current?.querySelectorAll(".pack-card").forEach((el) => obs!.observe(el));
    }
    return () => obs?.disconnect();
  }, []);

  return (
    <section id="packs" className="packs" ref={ref}>
      <div className="sec-head">
        <span className="eyebrow font-label">Nos formules</span>
        <h2 className="font-display">Choisissez votre pack 🎯</h2>
        <p>Du lancement express à la stratégie complète — une formule pour chaque ambition.</p>
      </div>

      <div className="packs-grid">
        {packs.map((p) => (
          <div
            key={p.name}
            className={`pack-card glass ${p.featured ? "featured" : ""}`}
            style={
              {
                ["--accent" as string]: p.accent,
                ["--accent-soft" as string]: p.accentSoft,
              } as React.CSSProperties
            }
          >
            {p.badge && <div className="pack-badge">⭐ {p.badge}</div>}
            <div className="pack-emoji">{p.emoji}</div>
            <h3 className="pack-name font-ui">{p.name}</h3>
            <div className="pack-price font-display">
              {p.price}
              {p.priceNote && <span className="pack-note">{p.priceNote}</span>}
            </div>
            <div className="pack-divider" />
            <ul className="pack-feats">
              {p.features.map((f) => (
                <li key={f}><Check color={p.accent} />{f}</li>
              ))}
              {p.excluded?.map((f) => (
                <li key={f} className="excl"><Cross />{f} <em>(non fourni)</em></li>
              ))}
            </ul>
            <a
              href={`https://wa.me/33688740242?text=${encodeURIComponent(p.wa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`pack-cta ${p.featured ? "solid" : ""}`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .packs { max-width: 1280px; margin: 0 auto; padding: 100px 24px; }
        .sec-head { text-align: center; margin-bottom: 60px; }
        .eyebrow { display: inline-block; font-size: .74rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: #4ade80; margin-bottom: 12px; }
        .sec-head h2 { font-weight: 500; font-size: clamp(2rem, 4.5vw, 3.3rem); letter-spacing: -.02em; }
        .sec-head p { color: #aeb8d0; margin-top: 14px; font-size: 1.02rem; }

        .packs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: stretch; }
        .pack-card { position: relative; padding: 30px 26px; display: flex; flex-direction: column;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .pack-card:hover, .pack-card.lit { transform: translateY(-6px); border-color: var(--accent);
          box-shadow: 0 0 0 1px var(--accent), 0 18px 55px var(--accent-soft), 0 24px 60px rgba(0,0,0,.3); }
        .pack-card.featured { border-color: rgba(139,92,246,.5);
          box-shadow: 0 0 50px rgba(139,92,246,.18); background: rgba(139,92,246,.06); }
        .pack-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(100deg,#8B5CF6,#EC4899); color: #fff; font-family: 'Cabinet Grotesk', sans-serif;
          font-size: .68rem; font-weight: 700; padding: 6px 16px; border-radius: 100px; white-space: nowrap; }
        .pack-emoji { font-size: 1.8rem; margin-bottom: 10px; }
        .pack-name { font-size: 1.15rem; font-weight: 600; color: #fff; margin-bottom: 10px; }
        .pack-price { font-weight: 700; font-size: 2.6rem; line-height: 1; color: #fff;
          display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
        .pack-note { font-family: 'Satoshi', sans-serif; font-size: .8rem; font-weight: 500; color: var(--accent); }
        .pack-divider { height: 1px; background: var(--accent-soft); margin: 22px 0; }
        .pack-feats { list-style: none; display: flex; flex-direction: column; gap: 11px; flex-grow: 1; margin-bottom: 26px; }
        .pack-feats li { display: flex; gap: 10px; align-items: flex-start; font-size: .88rem; color: #d6dceb; line-height: 1.45; }
        .pack-feats li.excl { color: #8a93a6; }
        .pack-feats li.excl em { font-style: italic; opacity: .8; }
        .pack-cta { display: block; text-align: center; font-family: 'Space Grotesk', sans-serif; font-weight: 600;
          font-size: .92rem; padding: 14px; border-radius: 11px; text-decoration: none;
          color: var(--accent); border: 1px solid var(--accent); background: var(--accent-soft);
          transition: transform .2s ease, filter .2s ease; }
        .pack-cta:hover { transform: translateY(-2px); filter: brightness(1.15); }
        .pack-cta.solid { background: linear-gradient(100deg,#8B5CF6,#EC4899); color: #fff; border-color: transparent;
          box-shadow: 0 8px 26px rgba(139,92,246,.4); }

        @media (max-width: 1040px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .packs-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

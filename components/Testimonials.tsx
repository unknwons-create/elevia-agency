"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Fondatrice — Aloha Bijoux",
    text: "Elevia a transformé mon idée en une boutique qui dépasse toutes mes attentes. Le design est magnifique et les ventes ont décollé dès le lancement.",
    stars: 5,
  },
  {
    name: "Karim B.",
    role: "Entrepreneur e-commerce",
    text: "Suivi impeccable, livraison rapide, résultat pro. Je recommande Elevia à tous ceux qui veulent se lancer sur Shopify sans se perdre.",
    stars: 5,
  },
  {
    name: "Laura T.",
    role: "Directrice — CentralPrice",
    text: "La formation incluse m'a vraiment aidée à prendre en main ma boutique. L'équipe est réactive et à l'écoute. Très satisfaite !",
    stars: 5,
  },
  {
    name: "Mehdi A.",
    role: "Gérant — Noctiderm",
    text: "Résultat premium pour un budget accessible. Mon site vitrine reflète parfaitement l'image haut de gamme de ma marque de soins.",
    stars: 5,
  },
];

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#f0a500"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (i % 2) * 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    });
  }, []);

  return (
    <section id="temoignages" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#f0a500",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Avis clients
          </span>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginTop: "12px",
            }}
          >
            Ce que disent nos clients
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(240,165,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.95rem",
                  color: "#d4d4d4",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flexGrow: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #0d1b3e, #f0a500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#ffffff",
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#ffffff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "0.78rem",
                      color: "#a0aec0",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

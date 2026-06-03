"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const reviews = Array.from({ length: 8 }, (_, i) => `/images/reviews/avis-${i + 1}.jpg`);

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.fromTo(".rev-head > *", { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: .6, stagger: .1,
            scrollTrigger: { trigger: ".rev-head", start: "top 85%" } });
      }, ref);
      return () => ctx.revert();
    });
  }, []);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="avis" className="rev" ref={ref}>
      <div className="rev-head sec-head">
        <span className="eyebrow font-label">Avis clients</span>
        <h2 className="font-display">Des résultats, pas des promesses 💬</h2>
        <p>Captures réelles de retours clients — résultats Shopify à l'appui. 100% authentiques.</p>
      </div>

      <div className="rev-wrap">
        <button className="rev-arrow left" onClick={() => scrollBy(-1)} aria-label="Précédent">‹</button>
        <div className="rev-track" ref={trackRef}>
          {reviews.map((src, i) => (
            <div className="rev-card glass" key={src}>
              <Image
                src={src}
                alt={`Avis client Target Agency ${i + 1}`}
                width={420}
                height={360}
                sizes="(max-width:640px) 80vw, 340px"
              />
            </div>
          ))}
        </div>
        <button className="rev-arrow right" onClick={() => scrollBy(1)} aria-label="Suivant">›</button>
      </div>

      <style>{`
        .rev { padding: 100px 0; position: relative; }
        .rev .sec-head { padding: 0 24px; }
        .rev-wrap { position: relative; max-width: 1280px; margin: 50px auto 0; padding: 0 24px; }
        .rev-track { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory;
          padding: 6px 4px 18px; scrollbar-width: none; }
        .rev-track::-webkit-scrollbar { display: none; }
        .rev-card { flex: 0 0 auto; width: 330px; scroll-snap-align: center; overflow: hidden; padding: 10px; }
        .rev-card img { width: 100%; height: auto; border-radius: 12px; display: block; }
        .rev-arrow { position: absolute; top: 45%; transform: translateY(-50%); z-index: 5;
          width: 46px; height: 46px; border-radius: 50%; border: 1px solid rgba(255,255,255,.15);
          background: rgba(11,16,32,.8); backdrop-filter: blur(10px); color: #fff; font-size: 1.6rem;
          line-height: 1; display: flex; align-items: center; justify-content: center; transition: background .2s ease; }
        .rev-arrow:hover { background: linear-gradient(100deg,#3B82F6,#8B5CF6); }
        .rev-arrow.left { left: 4px; } .rev-arrow.right { right: 4px; }
        @media (max-width: 640px) {
          .rev-card { width: 78vw; }
          .rev-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}

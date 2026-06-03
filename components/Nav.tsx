"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Nos packs", href: "#packs" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Avis clients", href: "#avis" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="nav-root">
      <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        <a href="#hero" className="nav-logo" aria-label="Target Agency">
          <Image
            src="/images/logo-target.png"
            alt="Target Agency"
            width={150}
            height={62}
            priority
          />
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/33688740242"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Nous contacter
        </a>

        <button
          className={`nav-burger ${open ? "x" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <button
          className="nav-mobile-close"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          ✕
        </button>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/33688740242"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.845L.057 23.01a.75.75 0 0 0 .932.932l5.165-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.51-5.27-1.396l-.378-.213-3.065.87.87-3.065-.213-.378A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Contact
        </a>
      </div>

      <style>{`
        .nav-root { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 14px 16px 0; }
        .nav-bar {
          max-width: 1200px; margin: 0 auto; display: flex; align-items: center;
          justify-content: space-between; padding: 10px 14px 10px 20px; border-radius: 18px;
          border: 1px solid transparent; transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .nav-bar.scrolled {
          background: rgba(10,14,28,.92); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
          border-color: rgba(255,255,255,.12); box-shadow: 0 10px 40px rgba(0,0,0,.45);
        }
        .nav-logo { display: flex; align-items: center; }
        .nav-logo img { height: 40px; width: auto; }
        .nav-links { display: flex; gap: 34px; list-style: none; align-items: center; }
        .nav-links a {
          color: #c3cce0; text-decoration: none; font-size: .92rem; font-weight: 500;
          font-family: 'Space Grotesk', sans-serif; transition: color .2s ease;
        }
        .nav-links a:hover { color: #fff; }
        .nav-cta {
          font-family: 'Space Grotesk', sans-serif; font-size: .88rem; font-weight: 600; color: #fff;
          background: linear-gradient(100deg,#3B82F6,#8B5CF6); padding: 11px 22px; border-radius: 11px;
          text-decoration: none; white-space: nowrap; transition: transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 4px 20px rgba(99,102,241,.3);
        }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,.5); }
        .nav-burger { display: none; flex-direction: column; gap: 6px; background: none; border: 0; padding: 10px;
          position: relative; z-index: 101; }
        .nav-burger span { width: 26px; height: 2.5px; background: #fff; border-radius: 2px; transition: transform .3s ease, opacity .2s ease; }
        .nav-burger.x span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
        .nav-burger.x span:nth-child(2) { opacity: 0; }
        .nav-burger.x span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }

        .nav-mobile {
          position: fixed; inset: 0; z-index: 99; background: rgba(7,11,22,.97);
          backdrop-filter: blur(20px); display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 30px; opacity: 0; pointer-events: none; transition: opacity .3s ease;
        }
        .nav-mobile.open { opacity: 1; pointer-events: auto; }
        .nav-mobile ul { list-style: none; display: flex; flex-direction: column; gap: 26px; text-align: center; }
        .nav-mobile ul a { color: #fff; text-decoration: none; font-family: 'Zodiak', serif; font-size: 1.9rem; }
        .nav-mobile-close {
          position: absolute; top: 22px; right: 22px; width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.2); background: rgba(255,255,255,.06); color: #fff;
          font-size: 1.25rem; display: flex; align-items: center; justify-content: center; }
        .nav-mobile-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 1.05rem; color: #fff;
          background: #25D366; padding: 16px 34px; border-radius: 12px; text-decoration: none;
          box-shadow: 0 8px 30px rgba(37,211,102,.32);
        }
        .nav-mobile-cta svg { flex-shrink: 0; }

        @media (max-width: 880px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger { display: flex; }
          .nav-logo img { height: 36px; }
        }
      `}</style>
    </header>
  );
}

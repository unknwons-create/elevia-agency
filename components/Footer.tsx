import Image from "next/image";

const nav = [
  ["Réalisations", "#realisations"],
  ["Nos packs", "#packs"],
  ["Pourquoi nous", "#pourquoi"],
  ["Avis clients", "#avis"],
];
const contact = [
  ["WhatsApp", "https://wa.me/33688740242"],
  ["Instagram", "https://www.instagram.com/elevia_agence"],
  ["Snapchat", "https://www.snapchat.com/add/elevia_agency"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ft-brand">
          <Image src="/images/logo-target.png" alt="Target Agency" width={150} height={62} />
          <p>Sites e-commerce, vitrines & identité de marque clé en main. On crée des sites qui font décoller votre activité.</p>
        </div>
        <div className="ft-cols">
          <div>
            <span className="ft-h font-label">Navigation</span>
            <ul>{nav.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
          </div>
          <div>
            <span className="ft-h font-label">Contact</span>
            <ul>{contact.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer">{l}</a></li>)}</ul>
          </div>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© {year} Target Agency. Tous droits réservés.</span>
        <a href="/mentions-legales">Mentions légales</a>
      </div>
      <style>{`
        .ft { border-top: 1px solid rgba(255,255,255,.08); padding: 56px 24px 30px; background: rgba(7,11,22,.6); }
        .ft-in { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .ft-brand { max-width: 340px; }
        .ft-brand img { height: 44px; width: auto; margin-bottom: 16px; }
        .ft-brand p { color: #aeb8d0; font-size: .9rem; line-height: 1.6; }
        .ft-cols { display: flex; gap: 60px; flex-wrap: wrap; }
        .ft-h { display: block; font-size: .7rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #8B5CF6; margin-bottom: 16px; }
        .ft-cols ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
        .ft-cols a { color: #aeb8d0; font-size: .9rem; text-decoration: none; transition: color .2s ease; }
        .ft-cols a:hover { color: #fff; }
        .ft-bottom { max-width: 1280px; margin: 40px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.06);
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        .ft-bottom span, .ft-bottom a { color: rgba(174,184,208,.6); font-size: .82rem; text-decoration: none; }
        .ft-bottom a:hover { color: #aeb8d0; }
      `}</style>
    </footer>
  );
}

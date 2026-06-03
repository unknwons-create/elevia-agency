export default function MentionsLegales() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        fontFamily: "'Satoshi', sans-serif",
        color: "#d4d4d4",
        lineHeight: 1.7,
      }}
    >
      <h1
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "40px",
          letterSpacing: "-0.02em",
        }}
      >
        Mentions légales
      </h1>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#f0a500",
            marginBottom: "12px",
          }}
        >
          Éditeur du site
        </h2>
        <p>
          Target Agency
          <br />
          Contact : elevia_agence (Instagram) / elevia_agency (Snapchat)
          <br />
          Téléphone : 06.88.74.02.42
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#f0a500",
            marginBottom: "12px",
          }}
        >
          Hébergement
        </h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, États-Unis.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#f0a500",
            marginBottom: "12px",
          }}
        >
          Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          logos, graphismes) est protégé par le droit d&apos;auteur. Toute
          reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#f0a500",
            marginBottom: "12px",
          }}
        >
          Données personnelles
        </h2>
        <p>
          Ce site ne collecte aucune donnée personnelle sans votre consentement.
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données. Pour exercer ces
          droits, contactez-nous via WhatsApp au 06.88.74.02.42.
        </p>
      </section>

      <a
        href="/"
        style={{
          color: "#f0a500",
          textDecoration: "none",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Retour à l&apos;accueil
      </a>
    </main>
  );
}

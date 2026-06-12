"use client";
import { useState } from "react";

const designs = [
  {
    name: "Pirate Power",
    designer: "Name, Age, Place",
    details:
      "A bold and classic pirate-style patch with skull and crossbones detailing.",
    price: "$5",
    emoji: "🏴‍☠️",
    bg: "#1a1a2e",
    accent: "#6C63FF",
  },
  {
    name: "Galaxy Vision",
    designer: "Name, Age, Place",
    details:
      "Explore the universe with this space-themed patch, featuring swirling nebulas and stars.",
    price: "$5",
    emoji: "🌌",
    bg: "#0d1b2a",
    accent: "#3B9EFF",
  },
  {
    name: "Superhero Shield",
    designer: "Name, Age, Place",
    details: "Feel like a hero every day with this bold shield design.",
    price: "$5",
    emoji: "🦸",
    bg: "#1b2838",
    accent: "#FF6B4A",
  },
  {
    name: "Animal Friends",
    designer: "Name, Age, Place",
    details: "Friendly and adorable animals make this patch fun for everyone.",
    price: "$5",
    emoji: "🐾",
    bg: "#1a2e1a",
    accent: "#4CAF82",
  },
  {
    name: "Sports Star",
    designer: "Name, Age, Place",
    details:
      "For active kids who love sports — bold, energetic, and ready to play.",
    price: "$5",
    emoji: "⚡",
    bg: "#2e1a00",
    accent: "#FFB347",
  },
  {
    name: "Rainbow Spark",
    designer: "Name, Age, Place",
    details: "A colorful and vibrant patch bursting with rainbow energy.",
    price: "$5",
    emoji: "🌈",
    bg: "#1e0a2e",
    accent: "#FF6B9D",
  },
  {
    name: "Mystic Moon",
    designer: "Name, Age, Place",
    details: "A night sky theme with crescent moon and scattered stars.",
    price: "$5",
    emoji: "🌙",
    bg: "#0a0a1a",
    accent: "#B8A9FF",
  },
  {
    name: "Jungle Safari",
    designer: "Name, Age, Place",
    details:
      "Animals and plants from the jungle come alive on this adventure patch.",
    price: "$5",
    emoji: "🌿",
    bg: "#0d1f0d",
    accent: "#7DC97D",
  },
  {
    name: "Candy Land",
    designer: "Name, Age, Place",
    details:
      "Sweet treats and fun candy designs make patching a little sweeter.",
    price: "$5",
    emoji: "🍭",
    bg: "#2e0a1a",
    accent: "#FF85A2",
  },
];

export default function EyePatchShop() {
  const [selected, setSelected] = useState(null);
  const [liked, setLiked] = useState({});
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLike = (name) =>
    setLiked((prev) => ({ ...prev, [name]: !prev[name] }));
  const navigate = (p) => {
    setPage(p);
    setSelected(null);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,700&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #FAFAF7;
          --surface: #FFFFFF;
          --surface2: #F0EDE6;
          --border: #E8E3DA;
          --accent: #FF6B4A;
          --accent-light: #FFF0ED;
          --text: #1A1A2E;
          --muted: #7A7570;
          --radius: 20px;
        }

        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; }

        /* HEADER */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 48px;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(250,250,247,0.92);
          backdrop-filter: blur(16px);
          z-index: 100;
        }

        .logo {
          font-family: 'Fraunces', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          cursor: pointer;
          letter-spacing: -0.3px;
        }

        .logo em { color: var(--accent); font-style: italic; }

        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .submit-btn {
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.15s, opacity 0.15s;
          letter-spacing: -0.1px;
        }
        .submit-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* HAMBURGER */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 10px;
        }

        .hamburger span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nav-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 6px;
          min-width: 160px;
          z-index: 200;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          background: none;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s;
        }
        .nav-link:hover { background: var(--surface2); }
        .nav-link.active { color: var(--accent); font-weight: 600; }

        /* HERO */
        .hero {
          padding: 80px 48px 56px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-left {}

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 100px;
          letter-spacing: 0.3px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .hero h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }

        .hero h1 em { color: var(--accent); font-style: italic; }

        .hero-desc {
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 420px;
          margin-bottom: 32px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--text);
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
        }
        .hero-cta:hover { opacity: 0.85; transform: translateY(-1px); }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* DECORATIVE PATCH PREVIEW */
        .patch-preview {
          position: relative;
          width: 340px;
          height: 340px;
        }

        .patch-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid var(--border);
        }

        .floating-patch {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          font-size: 2.4rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* SECTION LABEL */
        .section-header {
          padding: 0 48px 28px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .section-header h2 {
          font-family: 'Fraunces', serif;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .section-header span {
          color: var(--muted);
          font-size: 0.9rem;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 16px;
          padding: 0 48px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          border-color: #d0cbc2;
        }

        .card-image {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface2);
          position: relative;
        }

        /* The eye patch shape */
        .patch-shape {
          width: 120px;
          height: 80px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.8rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15), inset 0 -2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .patch-shape::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          border-radius: inherit;
          border: 1.5px solid rgba(255,255,255,0.15);
        }

        .card-body { padding: 20px; }

        .card-name {
          font-family: 'Fraunces', serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.2px;
          margin-bottom: 4px;
        }

        .card-designer {
          color: var(--muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-price {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text);
        }

        .view-btn {
          background: var(--accent-light);
          color: var(--accent);
          border: none;
          padding: 7px 14px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }
        .view-btn:hover { background: #ffddd6; }

        /* DETAIL */
        .detail {
          min-height: 80vh;
          padding: 48px;
          max-width: 820px;
          margin: 0 auto;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 9px 16px;
          border-radius: 100px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 40px;
          transition: border-color 0.2s, background 0.2s;
        }
        .back-btn:hover { background: var(--surface2); border-color: #ccc; }

        .detail-image {
          height: 300px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface2);
          margin-bottom: 40px;
          border: 1px solid var(--border);
        }

        .detail-patch {
          width: 200px;
          height: 133px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.2), inset 0 -4px 12px rgba(0,0,0,0.1);
          position: relative;
        }

        .detail-patch::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: inherit;
          border: 2px solid rgba(255,255,255,0.18);
        }

        .detail-name {
          font-family: 'Fraunces', serif;
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -1px;
          margin-bottom: 6px;
        }

        .detail-designer {
          color: var(--muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 16px;
        }

        .detail-desc {
          color: #5A5550;
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 520px;
        }

        .detail-price {
          font-family: 'Fraunces', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 28px;
        }

        .detail-actions { display: flex; gap: 12px; }

        .like-btn {
          flex: 0 0 auto;
          padding: 14px 24px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .like-btn.liked { border-color: #ffb3b3; background: #fff5f5; color: #e05555; }
        .like-btn:hover:not(.liked) { background: var(--surface2); }

        .buy-btn {
          flex: 1;
          padding: 14px 24px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
          background: var(--accent);
          color: #fff;
          transition: opacity 0.2s, transform 0.15s;
          letter-spacing: -0.1px;
        }
        .buy-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* ABOUT */
        .about {
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 48px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-bottom: 18px;
        }

        .about h1 {
          font-family: 'Fraunces', serif;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -1px;
          margin-bottom: 48px;
          line-height: 1.1;
        }

        .about h1 em { color: var(--accent); font-style: italic; }

        .about-section {
          padding: 0 0 36px 0;
          border-bottom: 1px solid var(--border);
          margin-bottom: 36px;
        }

        .about-section:last-child { border-bottom: none; }

        .about-section h2 {
          font-family: 'Fraunces', serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.2px;
        }

        .about-section p {
          color: #5A5550;
          line-height: 1.7;
          font-size: 1rem;
        }

        .owner-card {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
        }

        .owner-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-light);
          flex-shrink: 0;
        }

        .about-submit-card {
          background: var(--accent);
          border-radius: var(--radius);
          padding: 32px;
          color: #fff;
        }

        .about-submit-card h2 { font-family: 'Fraunces', serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 10px; color: #fff; }
        .about-submit-card p { color: rgba(255,255,255,0.85); line-height: 1.65; margin-bottom: 20px; }

        .submit-btn-white {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          color: var(--accent);
          border: none;
          padding: 10px 20px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
        }
        .submit-btn-white:hover { opacity: 0.9; transform: translateY(-1px); }

        /* STATS BAR */
        .stats-bar {
          background: var(--text);
          padding: 20px 48px;
          display: flex;
          gap: 48px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
          color: #fff;
        }

        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          display: block;
        }

        .stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* RESPONSIVE */
        @media (max-width: 780px) {
          .header { padding: 16px 20px; }
          .hero { grid-template-columns: 1fr; padding: 40px 20px 36px; gap: 32px; }
          .hero-right { display: none; }
          .section-header { padding: 0 20px 20px; }
          .grid { padding: 0 20px 48px; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
          .detail { padding: 28px 20px; }
          .about { padding: 40px 20px; }
          .stats-bar { padding: 20px; gap: 28px; }
        }
      `}</style>

      <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* HEADER */}
        <div className="header">
          <div className="logo" onClick={() => navigate("home")}>
            Design Your <em>Patch</em>
          </div>
          <div className="header-right">
            <a
              href="https://forms.gle/g8EQw3CH5ojZdubE9"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn"
            >
              ✍️ Submit Your Design
            </a>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
            {menuOpen && (
              <div className="nav-dropdown">
                <button
                  className={`nav-link ${page === "home" ? "active" : ""}`}
                  onClick={() => navigate("home")}
                >
                  🏠 Home
                </button>
                <button
                  className={`nav-link ${page === "about" ? "active" : ""}`}
                  onClick={() => navigate("about")}
                >
                  👋 About Us
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ABOUT PAGE */}
        {page === "about" && (
          <div className="about">
            <div className="about-eyebrow">Our Story</div>
            <h1>
              About Design Your <em>Patch</em>
            </h1>

            <div className="about-section">
              <h2>Who We Are</h2>
              <p>
                DYP is a shop built around the idea that kids who wear eye
                patches deserve something fun. Every design on this website was
                either drawn by a kid, or thought up by a kid.
              </p>
            </div>

            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                We believe that wearing a patch shouldn't feel like a chore. By
                putting kids in charge of the designs, wearing a patch becomes a
                way to express yourself — to show off your style, not something
                embarrassing. And every purchase supports the young designer
                behind the patch.
              </p>
            </div>

            <div className="about-section">
              <div className="owner-card">
                <img src="/me.jpg" alt="Zane as a kid" />
                <div>
                  <h2>Meet the Owner 👋</h2>
                  <p>
                    Hi! I'm Zane. I wore an eye patch for 8 years as a kid. In
                    that time, I never wore one to school — I was afraid to look
                    funny. I want to fix that experience for anyone I can.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-submit-card">
              <h2>Want to Submit a Design?</h2>
              <p>
                Do you have an idea? We'd love to feature your work and share it
                with kids around the world.
              </p>
              <a
                href="https://forms.gle/g8EQw3CH5ojZdubE9"
                target="_blank"
                rel="noopener noreferrer"
                className="submit-btn-white"
              >
                Submit a Design ✍️
              </a>
            </div>
          </div>
        )}

        {/* DETAIL VIEW */}
        {page === "home" && selected && (
          <div className="detail">
            <button className="back-btn" onClick={() => setSelected(null)}>
              ← All Designs
            </button>
            <div className="detail-image">
              <div
                className="detail-patch"
                style={{
                  background: `linear-gradient(145deg, ${selected.accent}, ${selected.bg})`,
                }}
              >
                {selected.emoji}
              </div>
            </div>
            <div className="detail-name">{selected.name}</div>
            <div className="detail-designer">
              Designed by {selected.designer}
            </div>
            <p className="detail-desc">{selected.details}</p>
            <div className="detail-price">{selected.price}</div>
            <div className="detail-actions">
              <button
                className={`like-btn ${liked[selected.name] ? "liked" : ""}`}
                onClick={() => toggleLike(selected.name)}
              >
                {liked[selected.name] ? "❤️ Liked" : "🤍 Like"}
              </button>
              <button
                className="buy-btn"
                onClick={() => alert("Add your payment link here!")}
              >
                🛒 Buy Now — {selected.price}
              </button>
            </div>
          </div>
        )}

        {/* HOME GRID */}
        {page === "home" && !selected && (
          <>
            {/* HERO */}
            <div className="hero">
              <div className="hero-left">
                <div className="hero-eyebrow">✦ Kid-designed patches</div>
                <h1>
                  Wear it with
                  <br />
                  <em>pride.</em>
                </h1>
                <p className="hero-desc">
                  Eye patches designed by real kids, for real kids. Every design
                  supports a young artist — and makes patching something to look
                  forward to.
                </p>
                <button
                  className="hero-cta"
                  onClick={() =>
                    document
                      .querySelector(".grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Browse the collection →
                </button>
              </div>
              <div className="hero-right">
                <div className="patch-preview">
                  {/* Decorative floating patch shapes */}
                  <div
                    className="floating-patch"
                    style={{
                      width: 130,
                      height: 87,
                      background: "linear-gradient(145deg, #6C63FF, #1a1a2e)",
                      top: 30,
                      left: 20,
                      animationDelay: "0s",
                    }}
                  >
                    🏴‍☠️
                  </div>
                  <div
                    className="floating-patch"
                    style={{
                      width: 110,
                      height: 73,
                      background: "linear-gradient(145deg, #FF6B4A, #2e1a00)",
                      top: 120,
                      left: 170,
                      animationDelay: "0.8s",
                      fontSize: "2rem",
                    }}
                  >
                    🌈
                  </div>
                  <div
                    className="floating-patch"
                    style={{
                      width: 100,
                      height: 67,
                      background: "linear-gradient(145deg, #3B9EFF, #0d1b2a)",
                      top: 220,
                      left: 50,
                      animationDelay: "1.6s",
                      fontSize: "1.8rem",
                    }}
                  >
                    🌙
                  </div>
                  <div
                    className="floating-patch"
                    style={{
                      width: 90,
                      height: 60,
                      background: "linear-gradient(145deg, #4CAF82, #0d1f0d)",
                      top: 200,
                      left: 220,
                      animationDelay: "0.4s",
                      fontSize: "1.6rem",
                    }}
                  >
                    🐾
                  </div>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="stats-bar">
              <div className="stat">
                <span className="stat-num">9</span>
                <span className="stat-label">Designs</span>
              </div>
              <div className="stat">
                <span className="stat-num">$5</span>
                <span className="stat-label">Each</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Kid-designed</span>
              </div>
            </div>

            {/* GRID */}
            <div style={{ paddingTop: 48 }}>
              <div className="section-header">
                <h2>The Collection</h2>
                <span>{designs.length} designs</span>
              </div>
              <div className="grid">
                {designs.map((design, i) => (
                  <div
                    className="card"
                    key={i}
                    onClick={() => setSelected(design)}
                  >
                    <div className="card-image">
                      <div
                        className="patch-shape"
                        style={{
                          background: `linear-gradient(145deg, ${design.accent}, ${design.bg})`,
                        }}
                      >
                        {design.emoji}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-name">{design.name}</div>
                      <div className="card-designer">By {design.designer}</div>
                      <div className="card-footer">
                        <span className="card-price">{design.price}</span>
                        <button className="view-btn">View →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

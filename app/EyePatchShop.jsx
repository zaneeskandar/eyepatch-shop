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
    color: "#1a1a2e",
  },
  {
    name: "Galaxy Vision",
    designer: "Name, Age, Place",
    details:
      "Explore the universe with this space-themed patch, featuring swirling nebulas and stars.",
    price: "$5",
    emoji: "🌌",
    color: "#0d1b2a",
  },
  {
    name: "Superhero Shield",
    designer: "Name, Age, Place",
    details: "Feel like a hero every day with this bold shield design.",
    price: "$5",
    emoji: "🦸",
    color: "#1b2838",
  },
  {
    name: "Animal Friends",
    designer: "Name, Age, Place",
    details: "Friendly and adorable animals make this patch fun for everyone.",
    price: "$5",
    emoji: "🐾",
    color: "#1a2e1a",
  },
  {
    name: "Sports Star",
    designer: "Name, Age, Place",
    details:
      "For active kids who love sports — bold, energetic, and ready to play.",
    price: "$5",
    emoji: "⚡",
    color: "#2e1a00",
  },
  {
    name: "Rainbow Spark",
    designer: "Name, Age, Place",
    details: "A colorful and vibrant patch bursting with rainbow energy.",
    price: "$5",
    emoji: "🌈",
    color: "#1e0a2e",
  },
  {
    name: "Mystic Moon",
    designer: "Name, Age, Place",
    details: "A night sky theme with crescent moon and scattered stars.",
    price: "$5",
    emoji: "🌙",
    color: "#0a0a1a",
  },
  {
    name: "Jungle Safari",
    designer: "Name, Age, Place",
    details:
      "Animals and plants from the jungle come alive on this adventure patch.",
    price: "$5",
    emoji: "🌿",
    color: "#0d1f0d",
  },
  {
    name: "Candy Land",
    designer: "Name, Age, Place",
    details:
      "Sweet treats and fun candy designs make patching a little sweeter.",
    price: "$5",
    emoji: "🍭",
    color: "#2e0a1a",
  },
];

export default function EyePatchShop() {
  const [selected, setSelected] = useState(null);
  const [liked, setLiked] = useState({});
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLike = (name) => {
    setLiked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const navigate = (p) => {
    setPage(p);
    setSelected(null);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Quicksand:wght@500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #1b2a3b;
          --surface: #2e3f52;
          --border: rgba(255,255,255,0.09);
          --accent: #c06b45;
          --accent2: #d4855e;
          --text: #e8d5b0;
          --muted: #8fa3b8;
          --radius: 16px;
        }

        body { background: var(--bg); color: var(--text); font-family: 'Nunito', sans-serif; }

        .shop {
          min-height: 100vh;
          background: var(--bg);
          background-image: radial-gradient(ellipse at 20% 20%, rgba(192,107,69,0.07) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 80%, rgba(232,213,176,0.04) 0%, transparent 50%);
        }

        /* HEADER */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 40px;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(27,42,59,0.92);
          backdrop-filter: blur(12px);
          z-index: 100;
        }

        .logo {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent2);
        }

        .logo span { color: var(--text); }

        /* HAMBURGER */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border: none;
          background: none;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* NAV DROPDOWN */
        .nav-dropdown {
          position: absolute;
          top: 100%;
          right: 40px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 8px;
          min-width: 160px;
          z-index: 200;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          background: none;
          color: var(--text);
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }

        .nav-link:hover { background: rgba(255,255,255,0.07); }
        .nav-link.active { color: var(--accent2); }

        /* ABOUT PAGE */
        .about {
          max-width: 700px;
          margin: 0 auto;
          padding: 60px 40px;
        }

        .about h1 {
          font-family: 'Quicksand', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .about h1 em { color: var(--accent2); font-style: normal; }

        .about-subtitle {
          color: var(--muted);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 40px;
        }

        .about-section {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          margin-bottom: 20px;
        }

        .about-section h2 {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent2);
          margin-bottom: 12px;
        }

        .about-section p {
          color: #c8bfaa;
          line-height: 1.75;
          font-size: 1rem;
        }

        .submit-btn {
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s, transform 0.1s;
        }

        .submit-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .submit-btn:active { transform: translateY(0); }

        /* HERO */
        .hero {
          text-align: center;
          padding: 64px 24px 48px;
        }

        .hero h1 {
          font-family: 'Quicksand', sans-serif;
          font-size: clamp(2.4rem, 8vw, 5rem);
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .hero h1 em { color: var(--accent); font-style: normal; }

        .hero p {
          color: var(--muted);
          font-size: 1.1rem;
          max-width: 480px;
          margin: 0 auto;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding: 0 40px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(192,107,69,0.4);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }

        .card-image {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          position: relative;
          overflow: hidden;
        }

        .card-image::after {
          content: 'Add Your Image';
          position: absolute;
          bottom: 8px;
          right: 10px;
          font-size: 0.65rem;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .card-body { padding: 18px; }

        .card-name {
          font-family: 'Quicksand', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .card-designer {
          color: var(--muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-price {
          font-weight: 600;
          color: var(--accent);
          font-size: 1.1rem;
        }

        .view-btn {
          background: rgba(192,107,69,0.12);
          color: var(--accent2);
          border: 1px solid rgba(192,107,69,0.3);
          padding: 6px 14px;
          border-radius: 6px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .view-btn:hover { background: rgba(192,107,69,0.22); }

        /* DETAIL VIEW */
        .detail {
          min-height: 100vh;
          background: var(--bg);
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .back-btn {
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          margin-bottom: 32px;
          transition: border-color 0.2s;
        }

        .back-btn:hover { border-color: var(--accent); color: var(--accent); }

        .detail-image {
          height: 320px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          margin-bottom: 32px;
          border: 1px solid var(--border);
          position: relative;
        }

        .detail-image .placeholder-label {
          position: absolute;
          bottom: 16px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .detail-name {
          font-family: 'Quicksand', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .detail-designer {
          color: var(--muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .detail-desc {
          color: #bbb;
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .detail-price {
          font-size: 1.8rem;
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          color: var(--accent2);
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .detail-actions { display: flex; gap: 12px; }

        .like-btn {
          flex: 1;
          padding: 14px;
          border-radius: 10px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          transition: border-color 0.2s, background 0.2s;
        }

        .like-btn.liked {
          border-color: var(--accent);
          background: rgba(192,107,69,0.15);
          color: var(--accent2);
        }

        .like-btn:hover { border-color: var(--accent); }

        .buy-btn {
          flex: 2;
          padding: 14px;
          border-radius: 10px;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          background: var(--accent);
          color: #fff;
          transition: opacity 0.2s;
        }

        .buy-btn:hover { opacity: 0.85; }

        @media (max-width: 600px) {
          .header { padding: 20px; }
          .grid { padding: 0 16px 40px; }
          .detail { padding: 24px 20px; }
          .hero { padding: 40px 20px 32px; }
        }
      `}</style>

      <div className="shop">
        {/* SHARED HEADER */}
        <div
          className="header"
          style={{ position: "sticky", top: 0, zIndex: 100 }}
        >
          <div
            className="logo"
            onClick={() => navigate("home")}
            style={{ cursor: "pointer" }}
          >
            Eye<span>Patch</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              position: "relative",
            }}
          >
            <a
              href="https://forms.gle/g8EQw3CH5ojZdubE9"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn"
            >
              Submit Your Design ✍️
            </a>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
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
            <h1>
              About <em>Design Your Patch</em>
            </h1>
            <p className="about-subtitle">Enjoy the Patch</p>
            <div className="about-section">
              <h2>Who We Are</h2>
              <p>
                DYP (Design Your Patch) is a shop built around the idea that
                kids who wear eye patches deserve something fun. Every design on
                this website was either drawn by a kid, or thought up by a kid.
              </p>
            </div>
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                We believe that wearing a patch shouldn't feel like a chore. By
                putting kids in charge of the designs, wearing a patch becomes a
                way to express yourself, to show off your style, not something
                embarassing. And every purchase supports the young designer
                behind the patch.
              </p>
            </div>
            <div
              className="about-section"
              style={{ display: "flex", gap: "24px", alignItems: "center" }}
            >
              <img
                src="/me.jpg"
                alt="Owner as a kid"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid var(--accent2)",
                  flexShrink: 0,
                }}
              />
              <div>
                <h2>Meet the Owner 👋</h2>
                <p>
                  Hi! I'm Zane. I wore an eye patch for 8 years as a kid. In
                  that time, I never wore one to school, or anywhere beyond my
                  house, because I was afraid to look funny. I want to fix that
                  experience for anyone I can!
                </p>
              </div>
            </div>
            <div className="about-section">
              <h2>Want to Submit a Design?</h2>
              <p>
                Do you have an idea for a design? We'd love to feature your
                work! Hit the "Submit Your Design" button at the top of the page
                to share an idea with us.
              </p>
            </div>
          </div>
        )}

        {/* HOME: DETAIL VIEW */}
        {page === "home" && selected && (
          <div className="detail">
            <button className="back-btn" onClick={() => setSelected(null)}>
              ← Back to Designs
            </button>

            <div
              className="detail-image"
              style={{
                background: `linear-gradient(135deg, ${selected.color}, #1b2a3b)`,
              }}
            >
              {selected.emoji}
              <span className="placeholder-label">Replace with your image</span>
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
                {liked[selected.name] ? "❤️ Liked!" : "🤍 Like"}
              </button>
              {/* Replace href with your payment link e.g. Stripe, Gumroad */}
              <button
                className="buy-btn"
                onClick={() => alert("Add your payment link here!")}
              >
                🛒 Buy Now — {selected.price}
              </button>
            </div>
          </div>
        )}

        {/* HOME: GRID VIEW */}
        {page === "home" && !selected && (
          <>
            <div className="hero">
              <h1>
                Kid-designed
                <br />
                <em>Eye Patches</em>
              </h1>
              <p>
                Every patch is designed by a real kid. Browse the collection and
                find your favorite.
              </p>
            </div>

            <div className="grid">
              {designs.map((design, i) => (
                <div
                  className="card"
                  key={i}
                  onClick={() => setSelected(design)}
                >
                  <div
                    className="card-image"
                    style={{
                      background: `linear-gradient(135deg, ${design.color}, #1b2a3b)`,
                    }}
                  >
                    {design.emoji}
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
          </>
        )}
      </div>
    </>
  );
}

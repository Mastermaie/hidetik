// src/App.js
import React, { useState } from "react";

const APPS = [
  {
    id: "ytshorts",
    name: "YT Shorts",
    subtitle: "appears as official YouTube app in Screen Time",
    icon: "/ytshorts.png",
    url:
      "itms-services://?action=download-manifest&url=https://dist.appcircle.io/profile/ea87a7e8-39e5-4fed-ae63-7497c02b9770/appVersions/d3bb9123-ee16-4556-ae4a-70051e6c9eb0/download/qMX3dyEcOpqFgqN660M6fMaHjq40z4",
    size: "120 MB",
    rating: 5.0,
  },
  {
    id: "spotify",
    name: "Spotify",
    subtitle: "coming soon",
    icon: "/spotify.png",
    url: "https://hidetik.silaspuma.com",
    size: "120 MB",
    rating: 4.8,
  },
  {
    id: "applemusic",
    name: "Apple Music",
    subtitle: "coming soon",
    icon: "/applemusic.png",
    url: "https://hidetik.silaspuma.com",
    size: "120 MB",
    rating: 4.7,
  },
  {
    id: "sora",
    name: "Sora",
    subtitle: "coming soon",
    icon: "/sora.png",
    url: "https://hidetik.silaspuma.com",
    size: "120 MB",
    rating: 4.5,
  },
  {
    id: "freeform",
    name: "Freeform",
    subtitle: "coming soon",
    icon: "/freeform.png",
    url: "https://addlater.com",
    size: "120 MB",
    rating: 4.2,
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = APPS.filter((a) =>
    (a.name + " " + a.subtitle).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-root">
      <style>{`
        :root{
          --bg: #000000;
          --card: #111111;
          --muted: #aaa;
          --glass: rgba(255,255,255,0.04);
          --accent: linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%);
        }
        *{box-sizing:border-box}
        body,html,#root{height:100%}
        .app-root{
          min-height:100vh;
          background: var(--bg);
          color: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding:32px;
        }
        .container{ max-width:1100px; margin:0 auto; }
        header{ display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:28px; }
        .brand{
          display:flex; gap:12px; align-items:center;
        }
        .logo{
          width:56px; height:56px; border-radius:12px; background:var(--accent);
          display:grid; place-items:center; overflow:hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }
        .logo img{width:100%; height:100%; object-fit:cover;}
        h1{ font-size:20px; margin:0; letter-spacing:-0.2px; }
        .subtitle{ font-size:12px; color:var(--muted); margin-top:2px; }

        .search{
          margin-left:auto; display:flex; align-items:center; gap:8px;
        }
        .search input{
          background:var(--glass); border:1px solid rgba(255,255,255,0.04);
          padding:10px 12px; border-radius:12px; min-width:280px; color:inherit;
          outline:none; transition:box-shadow .15s;
        }
        .search input:focus{ box-shadow: 0 6px 24px rgba(254,44,85,0.3) }

        .grid{ display:grid; gap:18px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }

        .card{
          background: var(--card);
          border:1px solid rgba(255,255,255,0.04);
          padding:18px; border-radius:16px;
          display:flex; flex-direction:column; align-items:center; gap:12px;
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .card:hover{ transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.6) }

        .icon{
          width:86px; height:86px; border-radius:18px; background:rgba(255,255,255,0.03);
          display:grid; place-items:center; overflow:hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.6);
        }
        .icon img{ width:72px; height:72px; object-fit:contain; }

        .app-name{ font-weight:600; margin:0; font-size:15px; text-align:center; }
        .app-sub{ font-size:13px; color:var(--muted); text-align:center; margin-top:4px; }

        .meta{ display:flex; gap:10px; margin-top:8px; align-items:center; color:var(--muted); font-size:13px; }

        .cta-row{ display:flex; gap:10px; width:100%; margin-top:8px; }
        .btn{
          flex:1; padding:10px 12px; background:#1a1a1a;
          border-radius:12px; border:1px solid rgba(255,255,255,0.03);
          color:#fff; text-decoration:none; display:inline-flex; justify-content:center; align-items:center; gap:8px;
        }
        .btn.primary{
          background: var(--accent);
          color:#000; font-weight:600;
        }

        footer{ margin-top:26px; color:var(--muted); text-align:center; font-size:13px; }

        .modal-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,0.6); display:grid; place-items:center; z-index:60; }
        .modal{ background: #0d0d0d; border-radius:14px; width:92%; max-width:720px; padding:18px; border:1px solid rgba(255,255,255,0.04); }
        .modal-head{ display:flex; gap:12px; align-items:center; }
        .close-btn{ margin-left:auto; background:transparent; border:none; color:var(--muted); cursor:pointer; font-size:16px; }
        @media (max-width:520px){
          .search input{ min-width:140px }
        }
      `}</style>

      <div className="container">
        <header>
          <div className="brand">
            <div className="logo" aria-hidden>
              <img src="/tiktok.png" alt="TikTok Logo" />
            </div>
            <div>
              <h1>HideTik</h1>
              <div className="subtitle">Disguise TikTok as any app!</div>
            </div>
          </div>

          <div className="search" role="search" aria-label="Search apps">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search apps..."
              aria-label="Search apps"
            />
          </div>
        </header>

        <main>
          <div className="grid" role="list">
            {filtered.map((app) => (
              <article key={app.id} className="card" role="listitem">
                <div className="icon">
                  <img src={app.icon} alt={`${app.name} icon`} />
                </div>

                <div style={{ width: "100%" }}>
                  <h3 className="app-name">{app.name}</h3>
                  <div className="app-sub">{app.subtitle}</div>

                  <div className="meta" style={{ justifyContent: "center" }}>
                    <div>⭐ {app.rating}</div>
                    <div>•</div>
                    <div>{app.size}</div>
                  </div>

                  <div className="cta-row">
                    <a
                      className="btn primary"
                      href={app.url}
                      onClick={(e) => {
                        if (!app.url.startsWith("itms-services://")) {
                          e.preventDefault();
                          window.open(app.url, "_blank", "noopener");
                        }
                      }}
                    >
                      Get
                    </a>

                    <button
                      className="btn"
                      onClick={() => setSelected(app)}
                      type="button"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <footer>
          Tap <strong>Get</strong> to install! Requires App Store to be enabled (sorry conner)
        </footer>
      </div>

      {selected && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-head">
              <div style={{ width:72, height:72, borderRadius:14, overflow:"hidden", background:"rgba(255,255,255,0.02)" }}>
                <img src={selected.icon} alt="" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
              </div>
              <div>
                <h2 style={{ margin:0 }}>{selected.name}</h2>
                <div style={{ color:"var(--muted)", marginTop:6 }}>{selected.subtitle}</div>
                <div style={{ color:"var(--muted)", marginTop:6, fontSize:13 }}>
                  Rating: {selected.rating} • Size: {selected.size}
                </div>
              </div>
              <button className="close-btn" onClick={() => setSelected(null)}>✕</button>
            </div>

            <div style={{ marginTop:12, color:"var(--muted)" }}>
              <p style={{ marginTop:0 }}>
                Clicking <strong>Get</strong> will install the app using this URL:
              </p>
              <p style={{ marginTop:8 }}>
                <code style={{ background:"rgba(255,255,255,0.02)", padding:"4px 8px", borderRadius:6 }}>
                  {selected.url}
                </code>
              </p>
            </div>

            <div style={{ marginTop:14, display:"flex", gap:10, justifyContent:"flex-end" }}>
              <a
                className="btn primary"
                href={selected.url}
                onClick={(e) => {
                  if (!selected.url.startsWith("itms-services://")) {
                    e.preventDefault();
                    window.open(selected.url, "_blank", "noopener");
                  }
                }}
              >
                Get
              </a>
              <button className="btn" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

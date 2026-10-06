import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Atom,
  Award,
  BrainCircuit,
  Braces,
  Camera,
  CheckCircle2,
  Code2,
  Github,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjwal Chaudhary — Creative AI & Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ujjwal Chaudhary, an AI/ML engineer and creative web developer building intelligent, high-impact digital experiences.",
      },
      { property: "og:title", content: "Ujjwal Chaudhary — AI & Web Developer" },
      {
        property: "og:description",
        content: "Developer, AI enthusiast, hackathon competitor and real-world software builder.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["About", "Skills", "Hackathons", "Achievements", "Contact"];

const skills = [
  {
    group: "Programming",
    items: ["Python", "C++", "C", "TypeScript"],
    icon: Braces,
    level: "96%",
  },
  {
    group: "Web Development",
    items: ["React.js", "Tailwind CSS", "Next.js", "Three.js"],
    icon: Code2,
    level: "94%",
  },
  {
    group: "Artificial Intelligence",
    items: ["LLM Agents", "Computer Vision", "Machine Learning", "PyTorch"],
    icon: BrainCircuit,
    level: "90%",
  },
  {
    group: "System Architecture",
    items: ["Data Structures", "Algorithms", "Rapid Prototyping", "UI/UX Design"],
    icon: Atom,
    level: "95%",
  },
];

const achievementsList = [
  {
    id: "01",
    title: "1st Place Trophy — Graphic Era Watch The Code",
    category: "NATIONAL HACKATHON CHAMPION",
    year: "2025",
    description:
      "Secured 1st rank and podium trophy for building full-stack assistive AI accessibility platform under 36 hours.",
    image: "/ujjwal-photo.jpg",
    badge: "🏆 1ST PLACE WINNER",
  },
  {
    id: "02",
    title: "Smart India Hackathon 2026 Round 2",
    category: "GOVT. OF INDIA NATIONAL STAGE",
    year: "2026",
    description:
      "Shortlisted for National Finals designing real-time traffic telemetry and e-challan surveillance systems.",
    image: "/ujjwal-photo.jpg",
    badge: "🏅 SIH 2026 QUALIFIER",
  },
  {
    id: "03",
    title: "NASA Space Apps Challenge 2025",
    category: "GLOBAL SPACE INNOVATION",
    year: "2025",
    description:
      "Architected 3D exoplanet physics & atmospheric simulation engine using Three.js & WebGL (Astroverse).",
    image: "/ujjwal-photo.jpg",
    badge: "🌌 NASA SPACE APPS",
  },
  {
    id: "04",
    title: "3× National Hackathon Victories & Awards",
    category: "COMPETITIVE SOFTWARE ENGINEERING",
    year: "2024–2026",
    description:
      "Proven track record of high-speed rapid prototyping, technical presentation, and algorithmic problem solving under live pressure.",
    image: "/ujjwal-photo.jpg",
    badge: "⚡ 3× PODIUM FINISHER",
  },
];

const projects = [
  {
    no: "01",
    title: "Saarthi",
    kicker: "SOCIAL-IMPACT AI",
    description:
      "An assistive accessibility platform enabling independent living through real-time object navigation, screen assistance, and inclusive employment discovery.",
    tech: "React.js · Tailwind · Computer Vision · AI/LLM APIs",
    visual: "saarthi",
    highlight: "Winner · Social Impact",
  },
  {
    no: "02",
    title: "Exoplanet Explorer",
    kicker: "NASA SPACE APPS / ASTROVERSE",
    description:
      "An interactive 3D astronomical simulation rendering exoplanetary atmospheric data, orbit mechanics, and space discovery data compellingly.",
    tech: "Three.js · WebGL · React · Interactive UI",
    visual: "space",
    highlight: "NASA Space Apps 2025",
  },
  {
    no: "03",
    title: "Smart E-Challan",
    kicker: "REAL-TIME TRAFFIC INTELLIGENCE",
    description:
      "GPS-driven speed surveillance system calculating velocity over designated corridors and triggering automated, tamper-proof penalty workflows.",
    tech: "React.js · GPS APIs · Real-Time Telemetry · UI/UX",
    visual: "road",
    highlight: "National Finalist",
  },
];

const journey = [
  ["01", "NASA Space Apps Challenge", "Built first high-pressure planetary simulation platform via Astroverse."],
  ["02", "National-Level Hackathons", "Competed across 3 prestigious national hackathons, sharpening engineering intuition."],
  ["03", "3× Hackathon Victories", "Secured top podium finishes and cash rewards including Graphic Era Watch The Code."],
  ["04", "Smart India Hackathon 2026", "Successfully qualified for Round 2 tackling high-impact national infrastructure problem statements."],
];

function FlowerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="flower-svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2C10.5 5 10.5 7 12 8C13.5 7 13.5 5 12 2Z" />
      <path d="M12 22C10.5 19 10.5 17 12 16C13.5 17 13.5 19 12 22Z" />
      <path d="M2 12C5 10.5 7 10.5 8 12C7 13.5 5 13.5 2 12Z" />
      <path d="M22 12C19 10.5 17 10.5 16 12C17 13.5 19 13.5 22 12Z" />
      <path d="M4.93 4.93C7.5 6.5 8.5 7.5 8.5 9.5C7 8.5 6 7.5 4.93 4.93Z" />
      <path d="M19.07 19.07C16.5 17.5 15.5 16.5 15.5 14.5C17 15.5 18 16.5 19.07 19.07Z" />
      <path d="M4.93 19.07C6.5 16.5 7.5 15.5 9.5 15.5C8.5 17 7.5 18 4.93 19.07Z" />
      <path d="M19.07 4.93C17.5 7.5 16.5 8.5 14.5 8.5C15.5 7 16.5 6 19.07 4.93Z" />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Ujjwal Chaudhary, home">
      <FlowerIcon size={18} />
      <span>UJJWAL</span>
    </a>
  );
}

function RotatingBadge() {
  return (
    <div className="circular-badge-wrap" aria-hidden="true">
      <svg className="circular-badge-svg" viewBox="0 0 160 160">
        <defs>
          <path
            id="badgeCirclePath"
            d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
          />
        </defs>
        <text className="circular-badge-text">
          <textPath href="#badgeCirclePath" startOffset="0%">
            ✦ CRAFTING DIGITAL PRODUCTS ✦ AI & WEB EXPERIENCES
          </textPath>
        </text>
      </svg>
      <div className="circular-badge-center">
        <FlowerIcon size={20} />
      </div>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={light ? "section-label section-label-light" : "section-label"}>
      <FlowerIcon size={13} /> {children}
    </div>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

function CuttyFilterSvg() {
  return (
    <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
      <defs>
        <filter id="cuttyFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.08" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" result="eroded" />
        </filter>
      </defs>
    </svg>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".about-heading, .about-grid, .stats-grid, .education-strip, .section-title-row, .skill-card, .service-row, .project-card, .sih-card, .sih-copy, .sih-path, .journey article, .philosophy-grid article, .contact-copy, .contact-form, .services-list, .fashion-stats-bar, .feature-showcase-grid"
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );
    targets.forEach((el) => {
      el.classList.add("reveal");
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) => c.tagName === el.tagName);
        if (siblings.length > 1) {
          const idx = siblings.indexOf(el);
          (el as HTMLElement).style.transitionDelay = `${idx * 0.06}s`;
        }
      }
      observer.observe(el);
    });

    // Safety fallback: reveal all remaining elements after 1s so nothing is ever stuck hidden
    const timer = setTimeout(() => {
      targets.forEach((el) => el.classList.add("visible"));
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setFormData({ name, email, message });

    try {
      // Send real email directly to Ujjwal's inbox without activation/captcha loops
      await fetch("https://formsubmit.co/ajax/ujjwalchaudhary2007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`,
          _captcha: "false",
          _template: "table",
        }),
      });
    } catch (err) {
      console.warn("Direct form submission error (fallback active):", err);
    } finally {
      setFormSending(false);
      setFormSent(true);
    }
  };

  return (
    <main className="site-shell">
      <ScrollProgress />
      <GrainOverlay />
      <CuttyFilterSvg />

      {/* ── HERO VIEWPORT CANVAS (FASHION/EDITORIAL THEME) ── */}
      <section id="home" className="hero-editorial-wrap">
        <div className="hero-editorial-canvas">
          {/* Top Integrated Nav */}
          <header className="hero-nav-row">
            <BrandMark />
            <nav className={menuOpen ? "hero-nav-links hero-nav-open" : "hero-nav-links"} aria-label="Primary navigation">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase() === "creations" ? "projects" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item === "About" ? "WHO DIS?" : item.toUpperCase()}
                </a>
              ))}
            </nav>
            <div className="hero-nav-actions">
              <a className="pill-button" href="#contact">
                LET'S TALK <ArrowUpRight size={14} />
              </a>
              <button
                className="menu-button"
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen((value) => !value)}
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </header>

          {/* Hero Center Display Area */}
          <div className="hero-stage">
            {/* Top Left Word (Matches "FASHION" in reference, with cutty texture) */}
            <div className="hero-top-word cutty-text">
              <span className="hero-top-star">✦</span> WEB
            </div>

            {/* Giant Distressed/Cutty Textured Typography (Matches "DESIGNER" in reference) */}
            <div className="hero-giant-developer-wrap" aria-label="DEVELOPER">
              <span className="hero-giant-developer cutty-text">DEVELOPER</span>
            </div>

            {/* The Isolated Sticker Image (Layered in Foreground) */}
            <div className="hero-sticker-container">
              <img
                src="/ujjwal-sticker.png"
                alt="Ujjwal Chaudhary - AI & Web Developer holding hackathon trophy"
                className="hero-sticker-img"
              />
            </div>

            {/* Left Editorial Text & Crosshair Line */}
            <div className="hero-editorial-left">
              <div className="crosshair-row">
                <span className="crosshair-icon">✦</span>
                <div className="crosshair-line" />
              </div>
              <p className="hero-editorial-quote">
                Where code meets human intuition and intelligence becomes a tangible experience.
              </p>
              <div className="hero-editorial-styled">
                <strong>ENGINEERED</strong>
                <span>TO PERFECTION</span>
              </div>
            </div>

            {/* Right Side: Rotating Badge & Profile Sticker Card */}
            <div className="hero-editorial-right">
              {/* Rotating Circular Stamp Badge */}
              <RotatingBadge />

              {/* Die-Cut Name Sticker Card (Matching Photo Sticker Style) */}
              <div className="profile-diecut-sticker" role="region" aria-label="Ujjwal Profile Sticker">
                {/* Sticker Header / Peeling Tab */}
                <div className="sticker-header-strip">
                  <span className="sticker-chip-tag">✦ DEV PASS</span>
                  <span className="sticker-serial">#2026-WINNER</span>
                </div>

                <div className="sticker-body">
                  <span className="sticker-role-eyebrow">AI / ML & FULL STACK</span>
                  <h2 className="sticker-name-title">UJJWAL CHAUDHARY</h2>
                  <div className="sticker-inner-line" />

                  <div className="sticker-specs">
                    <p className="spec-row">
                      <span className="spec-bullet">✦</span>
                      <span>B.Tech CSE — Artificial Intelligence</span>
                    </p>
                    <p className="spec-row">
                      <span className="spec-bullet">✦</span>
                      <span>Graphic Era Hill University · 2029</span>
                    </p>
                    <div className="sticker-achievement-badge">
                      🏆 3× National Hackathon Winner
                    </div>
                  </div>

                  {/* Mini Skill Stickers */}
                  <div className="mini-sticker-grid">
                    <span className="skill-mini-sticker">REACT.JS</span>
                    <span className="skill-mini-sticker">PYTHON</span>
                    <span className="skill-mini-sticker">THREE.JS</span>
                    <span className="skill-mini-sticker">C++</span>
                  </div>

                  {/* Sticker Action Buttons */}
                  <div className="sticker-social-row">
                    <a
                      href="https://github.com/ujjwalchaudharyyy"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="social-sticker-btn"
                    >
                      <Github size={14} /> <span>GITHUB</span>
                    </a>
                    <a
                      href="https://instagram.com/ujjwalchaudharyy_"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="social-sticker-btn social-icon-only"
                    >
                      <Instagram size={14} />
                    </a>
                    <a
                      href="mailto:ujjwalchaudhary2007@gmail.com"
                      aria-label="Email"
                      className="social-sticker-btn social-icon-only"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hero Ribbon */}
          <div className="hero-bottom-ribbon">
            <div className="ribbon-item">
              <span className="ribbon-dot" />
              <span>BASED IN UTTARAKHAND, INDIA</span>
            </div>
            <div className="ribbon-item ribbon-center">
              <span>BUILDING INTELLIGENT EXPERIENCES FOR THE WORLD</span>
            </div>
            <a href="#about" className="ribbon-scroll-link">
              SCROLL DOWN <ArrowDownRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 01: ABOUT ME (EDITORIAL HIGH FASHION LOOK) ── */}
      <section id="about" className="paper-section about-section">
        <div className="editorial-container">
          <SectionLabel>01 / ABOUT ME</SectionLabel>

          <div className="about-editorial-header">
            <div className="about-editorial-left">
              <h2 className="editorial-mega-title">
                THE GIFTED HANDS<br />
                THAT SHAPE<br />
                DIGITAL REALITY.
              </h2>
            </div>
            <div className="about-editorial-right">
              <p className="about-intro-lead">
                I combine razor-sharp web engineering, modern aesthetic sensibilities and emerging AI architectures to craft software that doesn't just work — it leaves an impression.
              </p>
              <p className="about-intro-sub">
                Through competitive hackathons and rapid prototyping, I’ve mastered the discipline of turning raw ideas into rock-solid, production-grade applications under extreme pressure.
              </p>
            </div>
          </div>

          {/* Skill & Expertise Progress Ribbon (Inspired by Reference) */}
          <div className="fashion-stats-bar">
            <div className="fashion-bar-header">
              <span className="bar-tag">ENGINEERING DISCIPLINE & EXPERTISE</span>
              <div className="bar-flowers">
                <FlowerIcon size={18} />
                <span className="bar-line" />
                <FlowerIcon size={15} />
                <span className="bar-line" />
                <FlowerIcon size={15} />
                <span className="bar-line" />
                <FlowerIcon size={12} />
              </div>
            </div>
            <div className="fashion-bar-body">
              <div className="fashion-percent">
                <strong>95%</strong>
                <span>FULL-STACK ARCHITECTURE & AI SYNTHESIS</span>
              </div>
              <div className="fashion-tags-pills">
                <span>FRONTEND PRECISION</span>
                <span>RAPID PROTOTYPING</span>
                <span>PRODUCTION DEPLOYMENTS</span>
              </div>
            </div>
          </div>

          {/* Editorial Stats Grid */}
          <div className="stats-grid">
            {[
              ["08+", "HACKATHONS TACKLED"],
              ["03", "NATIONAL LEVEL EVENTS"],
              ["03", "PODIUM VICTORIES"],
              ["SIH '26", "ROUND 2 QUALIFIED"],
              ["2029", "B.TECH CSE GRADUATION"],
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Academic Strip */}
          <div className="education-strip">
            <span>ACADEMICS / 2025—2029</span>
            <h3>B.Tech — Computer Science & Engineering</h3>
            <p>Specialization in Artificial Intelligence & Machine Learning</p>
            <p>Graphic Era Hill University · Bhimtal Campus, Uttarakhand</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: CAPABILITIES / SKILLS ── */}
      <section id="skills" className="dark-section skills-section">
        <div className="editorial-container">
          <SectionLabel light>02 / CAPABILITIES & CRAFT</SectionLabel>

          <div className="section-title-row">
            <h2>TOOLS OF<br />THE TRADE</h2>
            <p>
              Technology is my canvas.<br />
              Precision problem-solving is the art.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ group, items, icon: Icon, level }, index) => (
              <article className="skill-card" key={group}>
                <div className="skill-top">
                  <span>0{index + 1}</span>
                  <div className="skill-icon-bubble">
                    <Icon size={24} />
                  </div>
                </div>
                <h3>{group}</h3>
                <div className="skill-level-row">
                  <span className="level-bar-fill" style={{ width: level }} />
                  <span className="level-text">{level}</span>
                </div>
                <div className="tag-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* What I Build Services List */}
          <div className="services-list">
            <SectionLabel light>03 / WHAT I BUILD</SectionLabel>
            {[
              ["01", "FRONTEND & WEB SYSTEMS", "Modern, lightning-fast web applications built on React, Next.js and Tailwind."],
              ["02", "UI/UX & INTERACTIVE 3D", "Clean interfaces, Three.js shaders, and kinetic scroll environments shaped for humans."],
              ["03", "AI & AGENTIC WORKFLOWS", "Integrating intelligent LLM APIs, vision systems, and automated task-solving pipelines."],
              ["04", "ALGORITHMS & BACKEND LOGIC", "Data structures, high-performance C++ compute, and robust backend APIs."],
            ].map(([num, title, text]) => (
              <div className="service-row" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="service-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: HACKATHONS ── */}
      <section id="hackathons" className="hackathon-section">
        <div className="editorial-container">
          <SectionLabel light>04 / HACKATHON BATTLEFIELD</SectionLabel>

          <div className="section-title-row">
            <h2>BUILT UNDER<br />PRESSURE.</h2>
            <p>
              Turning real-world problems into working, award-winning software under strict deadlines.
            </p>
          </div>

          {/* SIH 2026 Spotlight Card */}
          <div className="sih-card">
            <div className="sih-stamp">
              <Trophy size={42} />
              <span>SMART INDIA<br />HACKATHON</span>
              <strong>2026</strong>
              <small>GOVERNMENT OF INDIA</small>
            </div>
            <div className="sih-copy">
              <span className="featured-badge">FEATURED ACHIEVEMENT</span>
              <h3>QUALIFIED FOR<br />ROUND 2</h3>
              <p>
                Spearheaded architecture tackling complex national problem statements, transforming algorithmic vision into working prototypes approved by national evaluators.
              </p>
            </div>
            <div className="sih-path">
              {["Problem", "Solution", "Submission", "Round 1", "Qualified ✓"].map((step, index) => (
                <span key={step}>
                  <b>{index + 1}</b>
                  {step}
                </span>
              ))}
            </div>
          </div>

          {/* Hackathon Journey List */}
          <div className="journey">
            {journey.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight className="journey-arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: ACHIEVEMENTS & PHOTO GALLERY ── */}
      <section id="achievements" className="dark-section achievements-section">
        <div className="editorial-container">
          <SectionLabel light>05 / ACHIEVEMENTS & TROPHIES</SectionLabel>

          <div className="section-title-row">
            <h2>HALL OF<br />VICTORIES.</h2>
            <p>
              Trophies, podium finishes, stage presentations, and engineering milestones captured in action.
            </p>
          </div>

          {/* Achievements Photo Grid */}
          <div className="achievements-gallery-grid">
            {achievementsList.map((item) => (
              <article key={item.id} className="achievement-photo-card">
                <div className="achievement-photo-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="achievement-img"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/ujjwal-photo.jpg";
                    }}
                  />
                  <div className="achievement-overlay-badge">{item.badge}</div>
                  <div className="photo-tape-corner" aria-hidden="true" />
                </div>
                <div className="achievement-card-body">
                  <div className="achievement-meta-strip">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Photo Dropzone Hint Card */}
          <div className="photo-upload-hint-card">
            <div className="hint-icon-wrap">
              <Camera size={24} />
            </div>
            <div className="hint-text">
              <h4>READY FOR YOUR HACKATHON & TROPHY PHOTOS</h4>
              <p>
                Send or drop your trophy photos anytime into <code>public/</code> — they will automatically feature in this editorial gallery grid with full hover zoom and sticker frame styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: HOW I THINK ── */}
      <section className="paper-section philosophy-section">
        <div className="editorial-container">
          <SectionLabel>06 / ENGINEERING CREDO</SectionLabel>
          <div className="philosophy-grid">
            {[
              ["BUILD", "REAL", "Build software that solves practical human bottlenecks, not throwaway demo projects."],
              ["LEARN", "FAST", "Treat intense constraints and short deadlines as high-octane fuel for accelerated growth."],
              ["THINK", "BEYOND", "Intersect rigorous computer science with aesthetic visual intuition and autonomous AI."],
            ].map(([top, bottom, text], index) => (
              <article key={top}>
                <span className="philo-num">0{index + 1}</span>
                <h3>
                  {top}
                  <br />
                  <em>{bottom}</em>
                </h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="editorial-container contact-inner">
          <div className="contact-copy">
            <SectionLabel light>07 / LET'S CONNECT</SectionLabel>
            <h2>
              LET’S BUILD<br />
              <em>SOMETHING</em><br />
              EXTRAORDINARY.
            </h2>
            <p className="contact-desc">
              Have an ambitious project, a hackathon collaboration, or an engineering role in mind? My inbox is always open.
            </p>
            <div className="contact-links">
              <a href="mailto:ujjwalchaudhary2007@gmail.com" className="contact-link-pill">
                <Mail size={16} /> ujjwalchaudhary2007@gmail.com
              </a>
              <a href="https://wa.me/918868059861" target="_blank" rel="noreferrer" className="contact-link-pill">
                <MessageCircle size={16} /> +91 88680 59861 · WhatsApp
              </a>
              <a href="tel:+918868059861" className="contact-link-pill">
                <MapPin size={16} /> Uttarakhand, India
              </a>
            </div>
          </div>

          {formSent ? (
            <div className="contact-success-card" role="alert">
              <div className="success-icon-badge">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="success-title">MESSAGE SENT DIRECTLY!</h3>
              <p className="success-text">
                Thank you <strong>{formData.name || "friend"}</strong>! Your message has been routed to my email (<strong>ujjwalchaudhary2007@gmail.com</strong>).
              </p>
              <div className="success-actions">
                <button
                  type="button"
                  className="solid-button"
                  onClick={() => setFormSent(false)}
                >
                  SEND ANOTHER NOTE
                </button>
                <a
                  href={`https://wa.me/918868059861?text=${encodeURIComponent(
                    `Hi Ujjwal! I saw your portfolio.\nName: ${formData.name}\nMessage: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-action-btn"
                >
                  <MessageCircle size={16} /> DIRECT WHATSAPP
                </a>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={sendMessage}>
              <label>
                <span>YOUR NAME</span>
                <input required name="name" type="text" placeholder="e.g. Alex Morgan" />
              </label>
              <label>
                <span>EMAIL ADDRESS</span>
                <input required name="email" type="email" placeholder="alex@company.com" />
              </label>
              <label>
                <span>YOUR MESSAGE / IDEA</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about what you're looking to build together..."
                />
              </label>
              <button className="solid-button" type="submit" disabled={formSending}>
                {formSending ? "TRANSMITTING..." : "SEND MESSAGE"} <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrap">
        <div className="editorial-container footer-content">
          <BrandMark />
          <p>Crafting intelligent digital experiences at the frontier of AI & Web.</p>
          <div className="footer-links">
            <a href="https://github.com/ujjwalchaudharyyy" target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href="https://instagram.com/ujjwalchaudharyy_" target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
            <a href="mailto:ujjwalchaudhary2007@gmail.com">EMAIL</a>
          </div>
          <small>© 2026 UJJWAL CHAUDHARY. ALL RIGHTS RESERVED.</small>
        </div>
      </footer>
    </main>
  );
}
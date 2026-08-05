import Image from "next/image";
import profileImage from "../../public/kunal-profil.jpeg";
const projects = [
  {
    number: "01",
    title: "Maprahari",
    type: "Mobile application",
    description:
      "A focused police job preparation app designed to make study material easier to access and navigate.",
    tags: ["Mobile UX", "Structured content", "Problem solving"],
  },
  {
    number: "02",
    title: "Kharcha — Expense Tracker",
    type: "Flutter application",
    description:
      "A practical finance app for recording transactions, understanding balances, and working with real data flows.",
    tags: ["Flutter", "Firebase", "Supabase", "SQLite"],
  },
  {
    number: "03",
    title: "E-commerce & Python Labs",
    type: "Learning projects",
    description:
      "Hands-on experiments across e-commerce flows, databases, and simple Python games that strengthened my debugging habits.",
    tags: ["SQL", "Python", "Java", "APIs"],
  },
];

const fitPoints = [
  {
    number: "01",
    title: "Listen first",
    body: "I translate customer explanations into clear technical symptoms before acting.",
  },
  {
    number: "02",
    title: "Troubleshoot methodically",
    body: "I isolate LAN, Wi-Fi, router, ONU, internet, and IPTV issues step by step.",
  },
  {
    number: "03",
    title: "Document clearly",
    body: "I log each interaction and outcome so the next person has useful context.",
  },
  {
    number: "04",
    title: "Escalate responsibly",
    body: "I know when to resolve, when to ask, and when to involve a higher technical team.",
  },
];

const tools = [
  "Ameyo",
  "CSupport",
  "Google Workspace",
  "Microsoft Office",
  "Search Console",
  "Nagios",
  "ebill",
  "retail-billing",
  "nettv dashboard",
];

const skills = [
  "Technical Support",
  "Flutter",
  "Kotlin",
  "SQL",
  "Java",
  "Firebase",
  "Supabase",
  "SQLite",
  "Mobile Development",
  "AI-assisted workflows",
  "On-page SEO",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kunal Nepali home">
          KN<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href="mailto:kunalnepali123456@gmail.com"
        >
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Open to technical support opportunities
          </div>

          <h1>
            I turn technical problems into <em>clear answers.</em>
          </h1>

          <p className="hero-intro">
            I&apos;m Kunal Nepali — a CSIT student and L1 support
            professional in Lalitpur, helping customers solve internet, IPTV,
            LAN, Wi-Fi, router, and ONU issues with patience and precision.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <span>↓</span>
            </a>

            <a
              className="text-link"
              href="mailto:kunalnepali123456@gmail.com"
            >
              kunalnepali123456@gmail.com <span>↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Candidate snapshot">
          <div className="status-row">
            <span>Candidate snapshot</span>
            <span className="available">Available</span>
          </div>

          <div className="profile-image">
 <Image
  src={profileImage}
  alt="Kunal Nepali"
  priority
  sizes="(max-width: 850px) 100vw, 360px"
/>
</div>

          <div>
            <p className="label">Currently</p>
            <h2>L1 Communication CSR</h2>
            <p>Kalash Services · WorldLink process</p>
          </div>

          <div className="card-grid">
            <div>
              <span>Based in</span>
              <strong>Lalitpur, Nepal</strong>
            </div>

            <div>
              <span>Education</span>
              <strong>BSc. CSIT · VIII Sem</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Core strengths">
        <div className="shell signals">
          <span>Customer empathy</span>
          <i>+</i>
          <span>Technical troubleshooting</span>
          <i>+</i>
          <span>Clear Ticketing</span>
          <i>+</i>
          <span>Curious learner</span>
          <i>+</i>
          <span>Proper Documentation</span>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading">
          <p className="kicker">01 / Experience</p>

          <h2>Support grounded in real conversations.</h2>

          <p>
            I already work where people and technology meet — listening
            carefully, diagnosing issues, setting expectations, and keeping
            customers informed.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <div className="experience-top">
              <div>
                <p className="overline">Current role</p>
                <h3>Customer Support Representative</h3>
                <p>WorldLink Process · Kalash Services</p>
              </div>

              <span>2026 — Present</span>
            </div>

            <ul>
              <li>
                <span>01</span>
                Provide L1 technical support for internet and IPTV customers
                through inbound calls.
              </li>
              <li>
                <span>02</span>
                Diagnose LAN, Wi-Fi, router, and ONU connectivity issues.
              </li>
              <li>
                <span>03</span>
                Log and track issues in CSupport and handle calls using Ameyo.
              </li>
              <li>
                <span>04</span>
                Escalate complex cases with clear context for higher-level
                teams.
              </li>
            </ul>
          </article>

          <aside className="toolbox">
            <p className="overline">Tools I work with</p>

            <div className="tool-list">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <p className="tool-note">
              Also experienced with on-page SEO and content optimization —
              bringing accuracy, structure, and attention to detail beyond
              support calls.
            </p>
          </aside>
        </div>
      </section>

      <section className="fit-section">
        <div className="shell fit-grid">
          <div className="fit-intro">
            <p className="kicker light">Why Veda / Role fit</p>

            <h2>Ready to help users feel confident with software.</h2>

            <p>
              Veda needs someone who can learn a product deeply, guide clients
              clearly, document accurately, and build trust. That is the
              direction I&apos;m already growing in.
            </p>
          </div>

          <div className="fit-list">
            {fitPoints.map((point) => (
              <article key={point.number}>
                <span>{point.number}</span>

                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="projects-head">
          <div>
            <p className="kicker">02 / Selected work</p>
            <h2>
              Built to learn.
              <br />
              Built to be useful.
            </h2>
          </div>

          <p>
            Projects that show how I think through users, data, interfaces,
            and everyday problems.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <a
          className="github-link"
          href="https://github.com/KunalNepali"
          target="_blank"
          rel="noreferrer"
        >
          See my code on GitHub <span>↗</span>
        </a>
      </section>

      <section className="skills-section shell">
        <div>
          <p className="kicker">03 / Learning edge</p>
          <h2>Curious across support and development.</h2>
        </div>

        <div className="skill-cloud" aria-label="Skills and interests">
          {skills.map((skill, index) => (
            <span className={index < 4 ? "highlight" : ""} key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="kicker light">Let&apos;s connect</p>

          <h2>Have a problem worth solving?</h2>

          <p>
            I&apos;d love to bring my customer support experience, technical
            curiosity, and learning mindset to your team.
          </p>

          <a
            className="button bright"
            href="mailto:kunalnepali123456@gmail.com"
          >
            Start a conversation <span>↗</span>
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/kunal-nepali-b52300259/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/KunalNepali"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="tel:+9779860357158">+977 9860357158 ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <span>© 2026 Kunal Nepali</span>
          <span>Designed with clarity · Built with curiosity</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

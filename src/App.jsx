const navItems = [
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "coding",
  "contact",
];

const skills = {
  "Languages": ["Python", "Java", "JavaScript"],
  "Frameworks": ["Django", "Node.js", "Express.js", "React.js"],
  "Databases": ["SQL", "MongoDB"],
  "Concepts": ["REST APIs", "OOP", "Data Structures", "Machine Learning", "Data Cleaning", "EDA", "LLM", "RAG"],
};


const projects = [
  {
    title: "AgroTech",
    stack: "Django, React.js, Python (ML), Weather API",
    impact:
      "Engineered a smart agriculture platform for crop planning, disease diagnosis, and market price forecasting with weather-assisted recommendations.",
    highlights: [
      "Built end-to-end backend APIs and integrated them with a responsive React frontend.",
      "Added ML-backed price prediction and lifecycle tracking to support data-driven farm decisions.",
    ],
    link: "https://github.com/Tirth-Patel22/AgroTech",
  },
  {
    title: "CampusConnect",
    stack: "Django, React.js, Tailwind, Machine Learning",
    impact:
      "Developed a campus service platform that centralizes student essentials such as PG/hostel listings, tiffin options, tutors, and community reviews.",
    highlights: [
      "Implemented personalized dashboards, bookmarks, and advanced search to improve discovery.",
      "Applied Random Forest for pricing and Logistic Regression for review sentiment insights.",
    ],
    link: "https://github.com/Tirth-Patel22/CampusConnect",
  },
  {
    title: "Bank Management System",
    stack: "Java, SQL, JDBC",
    impact:
      "Created a reliable CLI-based banking system for account, customer, and loan operations with persistent SQL-backed records.",
    highlights: [
      "Implemented secure core transaction flows: deposit, withdrawal, and transfer.",
      "Designed modular service logic with auto-generated account IDs and structured data access.",
    ],
    link: "https://github.com/Tirth-Patel22/Bank-Management-System",
  },
  {
    title: "SenseTrade-AI",
    stack: "Python, AI/ML",
    impact:
      "Built a hybrid AI financial intelligence project focused on stock movement prediction and signal interpretation.",
    highlights: [
      "Combined analytical workflows and predictive modeling for market movement analysis.",
      "Demonstrated practical application of AI in time-sensitive, data-heavy decision contexts.",
    ],
    link: "https://github.com/Tirth-Patel22/SenseTrade-AI",
  },
];

const achievements = [
  "LeetCode: 169+ problems solved.",
  "GitHub: 10+ repositories across full-stack and AI/ML projects.",
  "Academic Excellence: SPI 9.92.",
  "Exploratory Data Analysis for Machine Learning - IBM (2025).",
  "Introduction to HTML, CSS & JavaScript - IBM (2024).",
  "Data Structures in Java - University of Pennsylvania (2024).",
  "Introduction to Java - LearnQuest (2023).",
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 animate-rise">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-heading text-lg font-bold text-white">Tirth Patel</a>
          <ul className="hidden gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a className="capitalize transition hover:text-accent" href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="home">
        <section className="section pt-20 md:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="animate-rise">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Scalable Data Systems + Applied AI Engineer</p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                Building intelligent, reliable web products from data to deployment.
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
                I am Tirth Patel, a high-performance engineer focused on scalable data systems and applied AI.
                I build robust backend architectures with Python, Django, and SQL, and deliver end-to-end products with practical ML and RAG-based LLM integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px]">View Projects</a>
                <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent">Contact Me</a>
              </div>
            </div>
            <div className="card animate-rise p-6 md:p-7" aria-label="Quick profile highlights">
              <h3 className="font-heading text-xl text-white">Quick Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>B.E. Computer Engineering, LJ Institute (Expected 2027)</li>
                <li>SPI: 9.92</li>
                <li>LeetCode: 169+ solved</li>
                <li>GitHub: 10+ public repositories</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle
            eyebrow="About Me"
            title="Focused on scalable systems and practical AI"
            subtitle="I am currently pursuing B.E. in Computer Engineering and actively seeking internship opportunities in backend engineering, AI/ML, and full-stack development."
          />
          <div className="card p-6 text-slate-300 md:p-8">
            I specialize in building high-throughput backend systems, clean REST API layers, and data-driven applications.
            My focus is on transforming complex datasets into actionable insights through predictive modeling, EDA, and production-minded engineering.
            I am actively seeking internship opportunities where I can contribute to AI/ML and backend-focused product teams.
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle eyebrow="Skills" title="Technology stack aligned with modern product engineering" />
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className="card p-6">
                <h3 className="font-heading text-lg text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-full border border-cyan-300/25 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle eyebrow="Projects" title="Selected work across full-stack, AI, and backend engineering" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl text-white">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline">GitHub</a>
                </div>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">{project.stack}</p>
                <p className="mt-4 text-sm text-slate-300">{project.impact}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h}>- {h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle eyebrow="Experience" title="Hands-on experience through project-led development" />
          <div className="space-y-4 border-l border-white/15 pl-6">
            <article className="relative card p-5 before:absolute before:-left-[31px] before:top-7 before:h-3 before:w-3 before:rounded-full before:bg-accent">
              <h3 className="font-heading text-lg text-white">Full-Stack Project Development</h3>
              <p className="mt-2 text-sm text-slate-300">
                Built and delivered end-to-end applications across backend APIs, frontend systems, data workflows, and ML feature integration.
              </p>
            </article>
            <article className="relative card p-5 before:absolute before:-left-[31px] before:top-7 before:h-3 before:w-3 before:rounded-full before:bg-accent">
              <h3 className="font-heading text-lg text-white">Backend & Data Engineering Practice</h3>
              <p className="mt-2 text-sm text-slate-300">
                Implemented reliable SQL-backed architectures, structured transaction systems, and scalable backend components for data-intensive use cases.
              </p>
            </article>
          </div>
        </section>

        <section id="achievements" className="section">
          <SectionTitle eyebrow="Achievements & Certifications" title="Strong academic and technical growth trajectory" />
          <div className="card p-6 md:p-7">
            <ul className="space-y-3 text-sm text-slate-300">
              {achievements.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="coding" className="section">
          <SectionTitle eyebrow="Coding Profiles" title="Consistent coding practice and open-source visibility" />
          <div className="grid gap-5 md:grid-cols-3">
            <a className="card p-6 transition hover:-translate-y-1 hover:shadow-glow" href="https://github.com/Tirth-Patel22" target="_blank" rel="noreferrer">
              <h3 className="font-heading text-lg text-white">GitHub</h3>
              <p className="mt-3 text-sm text-slate-300">10+ repositories across full-stack and AI/ML projects.</p>
            </a>
            <a className="card p-6 transition hover:-translate-y-1 hover:shadow-glow" href="https://leetcode.com/u/gGydRYx7Ez/" target="_blank" rel="noreferrer">
              <h3 className="font-heading text-lg text-white">LeetCode</h3>
              <p className="mt-3 text-sm text-slate-300">169+ solved problems with consistent DSA practice.</p>
            </a>
            <a className="card p-6 transition hover:-translate-y-1 hover:shadow-glow" href="https://www.linkedin.com/in/tirth-patel22" target="_blank" rel="noreferrer">
              <h3 className="font-heading text-lg text-white">LinkedIn</h3>
              <p className="mt-3 text-sm text-slate-300">Professional profile, certifications, and internship-ready visibility.</p>
            </a>
          </div>
        </section>

        <section id="contact" className="section pb-24">
          <SectionTitle eyebrow="Contact" title="Letâ€™s build something impactful together" />
          <div className="card p-6 md:p-8">
            <p className="max-w-2xl text-slate-300">
              I am open to internships and entry-level opportunities in backend, AI/ML, and full-stack development roles.
              If your team is building data-driven products and values ownership, I would love to contribute.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a className="rounded-lg border border-white/15 px-4 py-2 hover:border-accent hover:text-accent" href="mailto:mavanitp2006@gmail.com">mavanitp2006@gmail.com</a>
              <a className="rounded-lg border border-white/15 px-4 py-2 hover:border-accent hover:text-accent" href="tel:+919313568134">+91 9313568134</a>
              <span className="rounded-lg border border-white/15 px-4 py-2 text-slate-300">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        <p>Â© {new Date().getFullYear()} Tirth Patel. Built with React and Tailwind CSS.</p>
      </footer>
    </>
  );
}
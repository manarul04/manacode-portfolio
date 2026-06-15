import './App.css'

function App() {
  const services = [
    'Mobile App Development',
    'Web Platform Engineering',
    'UI/UX Product Design',
    'Cloud & API Integration',
  ]

  const projects = [
    { value: '25+', label: 'digital products shipped' },
    { value: '12', label: 'business domains served' },
    { value: '99%', label: 'delivery transparency' },
  ]

  const stacks = ['React', 'Next.js', 'Laravel', 'Node.js', 'Flutter', 'Kotlin', 'Swift', 'AWS']

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Manacode home">
          <span>MC</span>
          Manacode
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">App Developer Company</p>
          <h1>Build apps that launch faster, scale cleaner, and feel premium.</h1>
          <p className="hero-copy">
            Manacode helps founders and businesses design, build, and ship modern web,
            mobile, backend, and cloud products from idea to production.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Start Project</a>
            <a className="button secondary" href="#services">Explore Services</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Manacode delivery dashboard preview">
          <div className="card-topbar">
            <span></span><span></span><span></span>
          </div>
          <div className="metric-card">
            <p>Delivery Sprint</p>
            <strong>92%</strong>
            <div className="progress"><span></span></div>
          </div>
          <div className="code-panel">
            <span>deploy.production()</span>
            <span>status: live</span>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Company highlights">
        {projects.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Full-cycle product development for serious digital teams.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>Strategy, architecture, development, testing, and launch support in one focused workflow.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="work">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>Clean process. Clear milestones. Production-ready output.</h2>
        </div>
        <div className="process-list">
          <p><strong>01 Discover</strong> — product scope, user flow, and technical plan.</p>
          <p><strong>02 Design</strong> — polished interface and validated experience.</p>
          <p><strong>03 Develop</strong> — scalable codebase, API, mobile, web, and cloud setup.</p>
          <p><strong>04 Launch</strong> — deployment, monitoring, documentation, and handover.</p>
        </div>
      </section>

      <section className="section stack-section">
        <p className="eyebrow">Flexible stack</p>
        <div className="stack-list">
          {stacks.map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <section className="cta" id="contact">
        <p className="eyebrow">Ready to build?</p>
        <h2>Tell Manacode about your app idea.</h2>
        <p>From MVP to enterprise platform, we can shape technical direction and ship clean execution.</p>
        <a className="button primary" href="mailto:hello@manacode.dev">hello@manacode.dev</a>
      </section>
    </main>
  )
}

export default App

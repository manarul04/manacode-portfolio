import './App.css'

function App() {
  const services = [
    'Pengembangan Aplikasi Mobile',
    'Pengembangan Website & Dashboard',
    'Desain Produk UI/UX',
    'Integrasi API, Cloud, dan Otomasi',
  ]

  const projects = [
    { value: '25+', label: 'produk digital siap rilis' },
    { value: '12', label: 'bidang bisnis terbantu' },
    { value: '99%', label: 'proses kerja transparan' },
  ]

  const stacks = ['React', 'Next.js', 'Laravel', 'Node.js', 'Flutter', 'Kotlin', 'Swift', 'AWS']

  return (
    <main>
      <nav className="nav" aria-label="Navigasi utama">
        <a className="brand" href="#top" aria-label="Beranda Manacode">
          <span>MC</span>
          Manacode
        </a>
        <div className="nav-links">
          <a href="#services">Layanan</a>
          <a href="#work">Proses</a>
          <a href="#contact">Kontak</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">Perusahaan Developer Apps</p>
          <h1>Buat aplikasi yang rapi, cepat rilis, dan siap berkembang.</h1>
          <p className="hero-copy">
            Manacode membantu bisnis merancang, membangun, dan meluncurkan website,
            aplikasi mobile, backend, serta sistem cloud dari ide sampai produksi.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://wa.me/6285878534229">Konsultasi via WhatsApp</a>
            <a className="button secondary" href="#services">Lihat Layanan</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Pratinjau alur kerja Manacode">
          <div className="card-topbar">
            <span></span><span></span><span></span>
          </div>
          <div className="metric-card">
            <p>Progres Sprint</p>
            <strong>92%</strong>
            <div className="progress"><span></span></div>
          </div>
          <div className="code-panel">
            <span>rilis.produksi()</span>
            <span>status: online</span>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Ringkasan perusahaan">
        {projects.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Yang kami kerjakan</p>
          <h2>Pengembangan produk digital end-to-end untuk bisnis yang serius bertumbuh.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>Strategi, arsitektur, desain, development, testing, dan dukungan rilis dalam alur kerja yang jelas.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="work">
        <div>
          <p className="eyebrow">Cara kerja</p>
          <h2>Proses tenang, milestone jelas, hasil siap dipakai.</h2>
        </div>
        <div className="process-list">
          <p><strong>01 Pemetaan</strong> — ruang lingkup produk, alur pengguna, dan rencana teknis.</p>
          <p><strong>02 Desain</strong> — tampilan bersih, mudah dipakai, dan sesuai kebutuhan bisnis.</p>
          <p><strong>03 Development</strong> — codebase scalable, API, mobile, web, dan cloud setup.</p>
          <p><strong>04 Rilis</strong> — deployment, monitoring, dokumentasi, dan serah terima.</p>
        </div>
      </section>

      <section className="section stack-section">
        <p className="eyebrow">Tech stack fleksibel</p>
        <div className="stack-list">
          {stacks.map((stack) => <span key={stack}>{stack}</span>)}
        </div>
      </section>

      <section className="cta" id="contact">
        <p className="eyebrow">Siap mulai?</p>
        <h2>Ceritakan ide aplikasi Anda ke Manacode.</h2>
        <p>Dari MVP sampai platform bisnis, kami bantu susun arah teknis dan eksekusi yang bersih.</p>
        <a className="button primary" href="https://wa.me/6285878534229">WhatsApp 0858-7853-4229</a>
      </section>
    </main>
  )
}

export default App

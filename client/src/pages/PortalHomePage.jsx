import '../Portal.css'

const plannedSteps = [
  {
    title: 'Report',
    description: 'Residents share a local challenge and the context around it.',
  },
  {
    title: 'Review',
    description: 'Relevant teams assess the need and identify useful expertise.',
  },
  {
    title: 'Develop',
    description: 'Universities and partners shape a practical response together.',
  },
  {
    title: 'Test',
    description: 'Promising ideas are piloted, evaluated, and prepared for use.',
  },
]

const audiences = [
  {
    title: 'Residents',
    description: 'Bring forward issues affecting your neighbourhood or community.',
  },
  {
    title: 'Universities',
    description: 'Connect student and faculty expertise to local challenges.',
  },
  {
    title: 'Industry and CSR',
    description: 'Contribute mentorship, funding, prototyping, or pilot support.',
  },
  {
    title: 'Public teams',
    description: 'Review local needs and follow proposed responses across districts.',
  },
]

function PortalBrand() {
  return (
    <a className="portal-brand" href="/" aria-label="Samadhan home">
      <span className="portal-brand-mark" aria-hidden="true">S</span>
      <span className="portal-brand-copy">
        <strong>Samadhan</strong>
        <span>Community innovation portal</span>
      </span>
    </a>
  )
}

function PortalHomePage() {
  return (
    <div className="portal-page">
      <header className="portal-header">
        <PortalBrand />

        <nav className="portal-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#who-its-for">Who it serves</a>
          <a href="/privacy-policy">Privacy</a>
        </nav>

        <a className="portal-button portal-button-outline" href="/login">Log in</a>
      </header>

      <main>
        <aside className="preview-notice" aria-label="Preview site status">
          <strong>Preview site</strong>
          <span>Sign-in, reporting, and live dashboard data are not connected.</span>
        </aside>

        <section className="portal-hero" aria-labelledby="portal-title">
          <div className="portal-hero-copy">
            <p className="portal-kicker">Samadhan · Jharkhand</p>
            <h1 id="portal-title">Community problems. Practical responses.</h1>
            <p className="portal-lede">
              A shared space for residents, universities, industry, and public teams to shape
              solutions across Jharkhand.
            </p>
            <div className="portal-hero-actions">
              <a className="portal-button portal-button-primary" href="#availability">
                Check reporting status
              </a>
              <a className="portal-text-link" href="#how-it-works">How it works</a>
            </div>
          </div>

          <figure className="portal-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85"
              alt="Volunteer at a community event, photographed from behind."
              fetchPriority="high"
            />
            <figcaption>Illustrative stock photo. This is not a Samadhan program image.</figcaption>
          </figure>
        </section>

        <section className="portal-section workflow-section" id="how-it-works">
          <div className="section-heading">
            <h2>A planned path from issue to solution</h2>
            <p>
              Samadhan is being developed to connect local knowledge with research and delivery
              partners.
            </p>
          </div>
          <ol className="workflow-list">
            {plannedSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="portal-section audiences-section" id="who-its-for">
          <div className="section-heading">
            <h2>Built around the people closest to the work</h2>
            <p>Different perspectives help turn a reported need into a tested response.</p>
          </div>
          <div className="audience-list">
            {audiences.map((audience) => (
              <article key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="availability-section" id="availability" aria-labelledby="availability-title">
          <div>
            <h2 id="availability-title">Online reporting is not available yet</h2>
            <p>
              This preview cannot receive or save reports. Please do not enter personal or sensitive
              information here.
            </p>
          </div>
          <button className="portal-button portal-button-disabled" type="button" disabled>
            Submissions unavailable
          </button>
        </section>

        <section className="dashboard-status" aria-labelledby="dashboard-title">
          <div>
            <h2 id="dashboard-title">District activity</h2>
            <p>Live reports and outcome data will appear here after a verified data source is connected.</p>
          </div>
          <span className="status-label">No live data</span>
        </section>
      </main>

      <footer className="portal-footer">
        <PortalBrand />
        <p>Local needs, shared expertise, practical solutions.</p>
        <a href="/privacy-policy">Privacy policy</a>
      </footer>
    </div>
  )
}

export default PortalHomePage

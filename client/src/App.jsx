import './App.css'
import PortalHomePage from './pages/PortalHomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'

const stats = [
  { label: 'Problems reported', value: '12,480', change: '+18%' },
  { label: 'Solutions approved', value: '2,146', change: '+12%' },
  { label: 'Active universities', value: '24', change: '+4' },
  { label: 'Funding mobilized', value: '₹3.9Cr', change: '+22%' },
]

const categories = ['Water', 'Agriculture', 'Education', 'Healthcare', 'Energy', 'Sanitation']

const roleCards = [
  {
    title: 'Citizen',
    description: 'Report local issues with photos, voice notes, and GPS location.',
    points: ['Instant problem submission', 'Track status updates', 'Get community visibility'],
  },
  {
    title: 'University',
    description: 'Receive matched challenges and assemble student-faculty solution teams.',
    points: ['AI-assisted routing', 'Proposal tracking', 'Mentor assignment'],
  },
  {
    title: 'Industry',
    description: 'Support problem-solving through CSR, incubation, mentorship, and pilots.',
    points: ['Explore challenges', 'Fund promising ideas', 'Deploy real solutions'],
  },
]

const challengeList = [
  { title: 'Water logging on rural access road', district: 'Ranchi', score: 92, status: 'Assigned' },
  { title: 'Smart irrigation advisory for paddy fields', district: 'Hazaribagh', score: 87, status: 'In review' },
  { title: 'Digital attendance for tribal schools', district: 'Khunti', score: 81, status: 'Proposal drafted' },
  { title: 'Solar micro-grid feasibility', district: 'Dumka', score: 76, status: 'Funding pending' },
]

const roadmap = [
  'Citizen submits photo, video, or voice report',
  'AI classifies issue, estimates urgency, and removes duplicates',
  'University team reviews the best-fit challenge and proposes a solution',
  'Industry or CSR supports funding, prototyping, and deployment',
  'Government dashboard tracks district-wide impact and outcomes',
]

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (currentPath === '/login') return <LoginPage />
  if (currentPath === '/privacy-policy') return <PrivacyPolicyPage />
  if (currentPath !== '/') return <NotFoundPage />
  if (currentPath === '/') return <PortalHomePage />

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <p className="brand-name">Samadhan</p>
            <span className="brand-tag">Jharkhand innovation portal</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#workflow">Workflow</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#roles">Roles</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost" href="/login">Log in</a>
          <button className="btn btn-primary" type="button">Report issue</button>
        </div>
      </header>

      <aside className="preview-disclosure" aria-label="Preview data notice">
        <strong>Preview environment</strong>
        <span>Reports, metrics, and routing examples are illustrative, not live portal data.</span>
      </aside>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">From community problems to campus solutions</span>
            <h1>Turn local challenges into actionable campus innovation.</h1>
            <p>
              Samadhan connects citizens, universities, industry partners, and government teams
              through a single platform for problem reporting, AI triage, solution design, and impact
              tracking.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" type="button">Submit a problem</button>
              <button className="btn btn-secondary" type="button">Explore live dashboard</button>
            </div>

            <div className="mini-trust">
              <span>24 universities</span>
              <span>18 districts</span>
              <span>1.2k active users</span>
            </div>
          </div>

          <div className="hero-panel" aria-label="Problem summary panel">
            <div className="panel-header">
              <span className="status-dot" />
              <span>Live issue intake</span>
            </div>

            <div className="report-card">
              <div className="report-meta">
                <span className="tag success">Open</span>
                <span>Ranchi • 2 hrs ago</span>
              </div>
              <h3>Drainage overflow near the market square</h3>
              <p>Blocked storm drain causing flood risk for students and pedestrians.</p>

              <div className="chip-row">
                {categories.slice(0, 3).map((category) => (
                  <span key={category} className="chip">
                    {category}
                  </span>
                ))}
              </div>

              <div className="progress-wrap">
                <div className="progress-label">
                  <span>AI urgency score</span>
                  <strong>92%</strong>
                </div>
                <div className="progress-bar">
                  <span style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid" aria-label="Platform impact metrics">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <strong>{stat.value}</strong>
              <em>{stat.change} this quarter</em>
            </article>
          ))}
        </section>

        <section id="solutions" className="portal-layout">
          <div className="report-form card">
            <div className="section-title">
              <span className="section-kicker">Citizen portal</span>
              <h2>Report a community challenge</h2>
            </div>

            <form className="problem-form">
              <label>
                Problem title
                <input type="text" defaultValue="Broken water supply line near school" />
              </label>

              <div className="double-field">
                <label>
                  District
                  <input type="text" defaultValue="East Singhbhum" />
                </label>
                <label>
                  Priority
                  <select defaultValue="High">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </label>
              </div>

              <label>
                Description
                <textarea rows="4" defaultValue="Water supply has been interrupted for 3 days, affecting 250 households and the local school. Residents need urgent intervention." />
              </label>

              <div className="file-picker">
                <span>Upload evidence</span>
                <button type="button">Add photo / video</button>
              </div>

              <div className="chip-row">
                {categories.map((category) => (
                  <span key={category} className="chip active">
                    {category}
                  </span>
                ))}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Submit for routing
              </button>
            </form>
          </div>

          <div className="solution-preview card">
            <div className="section-title">
              <span className="section-kicker">AI triage</span>
              <h2>Suggested response</h2>
            </div>

            <div className="preview-stack">
              <div className="preview-box">
                <span className="box-label">Detected category</span>
                <strong>Water & sanitation</strong>
              </div>

              <div className="preview-box">
                <span className="box-label">Best-fit university</span>
                <strong>BIT Mesra • Civil Engineering</strong>
              </div>

              <div className="preview-box">
                <span className="box-label">Recommended team</span>
                <strong>2 students + 1 mentor</strong>
              </div>

              <div className="preview-box highlight">
                <span className="box-label">Funding route</span>
                <strong>CSR partner shortlist ready</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="workflow-section card">
          <div className="section-title">
            <span className="section-kicker">How it works</span>
            <h2>One platform, six connected steps</h2>
          </div>

          <div className="timeline">
            {roadmap.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="roles" className="roles-section">
          <div className="section-title narrow">
            <span className="section-kicker">Role-based access</span>
            <h2>Built for every stakeholder</h2>
          </div>

          <div className="role-grid">
            {roleCards.map((role) => (
              <article key={role.title} className="role-card card">
                <div className="role-icon">{role.title.slice(0, 1)}</div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="dashboard" className="dashboard-section">
          <div className="dashboard-header section-title">
            <span className="section-kicker">Government dashboard</span>
            <h2>District impact snapshot</h2>
          </div>

          <div className="dashboard-grid">
            <div className="card challenge-panel">
              <h3>Open challenges</h3>
              <ul className="challenge-list">
                {challengeList.map((challenge) => (
                  <li key={challenge.title}>
                    <div>
                      <strong>{challenge.title}</strong>
                      <span>{challenge.district}</span>
                    </div>
                    <div className="challenge-meta">
                      <span className="score-pill">{challenge.score}</span>
                      <em>{challenge.status}</em>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card analytics-panel">
              <h3>Live analytics</h3>
              <div className="chart-bars" aria-label="Bar chart">
                <span style={{ height: '40%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '50%' }} />
                <span style={{ height: '82%' }} />
                <span style={{ height: '70%' }} />
                <span style={{ height: '92%' }} />
              </div>
              <div className="analytics-legend">
                <span><i className="dot cyan" /> Problems</span>
                <span><i className="dot purple" /> Solutions</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Samadhan</strong>
          <span>Building resilient local innovation ecosystems.</span>
        </div>
        <div className="footer-actions">
          <a href="/privacy-policy">Privacy policy</a>
          <button className="btn btn-primary" type="button">Join as partner</button>
        </div>
      </footer>
    </div>
  )
}

export default App

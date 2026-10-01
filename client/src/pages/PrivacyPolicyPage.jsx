function PrivacyPolicyPage() {
  return (
    <main className="document-page">
      <header className="account-header">
        <a className="brand-wrap" href="/" aria-label="Samadhan home">
          <span className="brand-mark">S</span>
          <span>
            <span className="brand-name">Samadhan</span>
            <span className="brand-tag">Jharkhand innovation portal</span>
          </span>
        </a>
        <a className="account-home-link" href="/">Back to home</a>
      </header>

      <article className="document-content">
        <span className="section-kicker">Privacy</span>
        <h1>Privacy policy</h1>
        <p className="document-updated">Last updated: October 1, 2026</p>
        <p>
          This page describes the current Samadhan frontend. The project is in development and
          does not currently connect to an account, reporting, or data-storage service. The
          information below describes this implementation, not a promise about a future live service.
        </p>

        <h2>Information you enter</h2>
        <p>
          The sign-in form is a visual interface only. Submitting it does not send or store your
          email address or password. The problem-reporting controls on the home page are also not
          connected to a submission service. Do not enter real personal or sensitive information
          into this development site.
        </p>

        <h2>Demonstration content</h2>
        <p>
          Sample challenges, metrics, and response suggestions displayed on the home page are
          illustrative content in the frontend. They are not live reports or verified program
          results.
        </p>

        <h2>When the service is connected</h2>
        <p>
          Before accepting real accounts or reports, the service operator must update this policy
          with its legal identity and contact details, the information collected, purposes and legal
          basis for use, service providers and sharing, retention periods, security practices, and
          the choices and rights available to people using the service. Hosting providers may also
          process technical request data; their practices should be documented before launch.
        </p>

        <h2>Contact</h2>
        <p>
          This development version does not identify a privacy contact. Contact details for the
          responsible Samadhan operator must be added before this policy is used for a live service.
        </p>

        <a className="document-back-link" href="/">Return to Samadhan</a>
      </article>
    </main>
  )
}

export default PrivacyPolicyPage

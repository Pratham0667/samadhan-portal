function NotFoundPage() {
  return (
    <main className="not-found-page">
      <a className="brand-wrap" href="/" aria-label="Samadhan home">
        <span className="brand-mark">S</span>
        <span>
          <span className="brand-name">Samadhan</span>
          <span className="brand-tag">Jharkhand innovation portal</span>
        </span>
      </a>
      <section className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>We can’t find that page.</h1>
        <p>The address may be incorrect, or the page may have moved.</p>
        <a className="btn btn-primary" href="/">Return to home</a>
      </section>
    </main>
  )
}

export default NotFoundPage

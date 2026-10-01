import { useState } from 'react'

function LoginPage() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Sign-in is not connected yet. Your credentials were not sent.')
  }

  return (
    <main className="account-page">
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

      <section className="account-content" aria-labelledby="login-title">
        <span className="section-kicker">Account access</span>
        <h1 id="login-title">Welcome back</h1>
        <p className="account-intro">Sign in to continue to your Samadhan account.</p>

        <form className="account-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.org"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />

          <button className="btn btn-primary" type="submit">Sign in</button>
          <p className="form-notice" aria-live="polite">{notice}</p>
        </form>
        <a className="account-privacy-link" href="/privacy-policy">Privacy policy</a>
      </section>
    </main>
  )
}

export default LoginPage

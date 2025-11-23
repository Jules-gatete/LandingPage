import './policy.css'

export default function Policy() {
  return (
    <section className="policy" id="policy">
      <div className="policy__inner">
        <header className="policy__header">
          <span className="policy__eyebrow">End-User License · Privacy</span>
          <h2 className="policy__title">End-User License & Privacy Policy Agreement</h2>
          <p className="policy__lead">
            We protect the privacy of every household that trusts UmutiSafe. Review the essentials of our
            End-User License Agreement (EULA) and Privacy Policy to understand how we safeguard your data
            and deliver responsible medicine disposal guidance.
          </p>
        </header>

        <div className="policy__grid">
          <article className="policy__card" aria-labelledby="policy-license">
            <h3 id="policy-license">Key EULA Highlights</h3>
            <ul>
              <li>UmutiSafe is licensed for personal and community health worker use only.</li>
              <li>Do not redistribute guidance or imagery without permission from UmutiSafe.</li>
              <li>Use the app responsibly and follow local regulations when disposing of medicines.</li>
              <li>Report suspected misuse so we can keep disposal instructions accurate and safe.</li>
            </ul>
          </article>

          <article className="policy__card" aria-labelledby="policy-privacy">
            <h3 id="policy-privacy">Privacy Commitments</h3>
            <ul>
              <li>No sale of personal data—ever.</li>
              <li>Images are encrypted in transit and anonymized before training our detection models.</li>
              <li>Location details are only used to route you to the closest certified disposal options.</li>
              <li>Contact data is retained solely for support and mission-critical updates.</li>
            </ul>
          </article>
        </div>

        <div className="policy__cta">
          <a className="policy__btn" href="#footer">Download Full Agreement (PDF)</a>
          <p className="policy__note">Questions about consent or data processing? Reach us through the support form above.</p>
        </div>
      </div>
    </section>
  )
}

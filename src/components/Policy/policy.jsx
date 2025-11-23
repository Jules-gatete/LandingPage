import './policy.css'

const fullPolicyPdf = new URL(
  '../../assets/UmutiSafe Privacy Policy & End‑User License Agreement (EULA).pdf',
  import.meta.url
).href

export default function Policy() {
  return (
    <section className="policy" id="policy">
      <div className="policy__inner">
        <header className="policy__header">
          <span className="policy__eyebrow">End-User License · Privacy</span>
          <h2 className="policy__title">End-User License & Privacy Policy Agreement</h2>
          <p className="policy__lead">
            Your safety, privacy, and trust matter to us. UmutiSafe provides medicine classification and
            disposal guidance while ensuring all user data is handled responsibly, ethically, and in full 
            compliance with Rwanda’s Data Protection Law and FDA disposal guidelines.
          </p>
        </header>

        <div className="policy__grid">
          <article className="policy__card" aria-labelledby="policy-license">
            <h3 id="policy-license">Key EULA Highlights</h3>
            <ul>
              <li>UmutiSafe is licensed for personal household use and Community Health Worker (CHW) support only.</li>
              <li>Guidance provided by UmutiSafe follows Rwanda FDA disposal standards and must be used responsibly.</li>
              <li>Do not redistribute system content, disposal rules, or internal logic without written permission.</li>
              <li>Always seek CHW assistance when home disposal is not feasible or when medicines require supervised handling.</li>
            </ul>
          </article>

          <article className="policy__card" aria-labelledby="policy-privacy">
            <h3 id="policy-privacy">Privacy Commitments</h3>
            <ul>
              <li>We never sell, trade, or share personal data with third-party advertisers.</li>
              <li>UmutiSafe does <em>not</em> store uploaded images; any image processed for OCR is deleted immediately after use.</li>
              <li>Location or contact details are used only—with your explicit consent—when requesting CHW pickup support.</li>
              <li>Data minimization: only essential information is processed to classify medicines and provide safe disposal guidance.</li>
            </ul>
          </article>
        </div>

        <div className="policy__cta">
          <a
            className="policy__btn"
            href={fullPolicyPdf}
            download="UmutiSafe-Privacy-Policy.pdf"
            type="application/pdf"
          >
            Download Full Agreement (PDF)
          </a>
          <p className="policy__note">
            Need clarity about consent, privacy, or CHW disposal procedures? Contact us through the support form.
          </p>
        </div>
      </div>
    </section>
  )
}

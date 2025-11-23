import './contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrap">

        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__subtitle">
          Questions, feedback, or partnership ideas? Send us a message and we’ll reply within one business day.
        </p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
          <div className="contact__fields">
            
            <label className="contact__field">
              <span className="visually-hidden">Email</span>
              <input
                type="email"
                placeholder="Your email address"
                required
              />
            </label>

            <label className="contact__field">
              <span className="visually-hidden">Name</span>
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </label>

          </div>

          <button className="contact__submit" type="submit">
            Send Message
          </button>
        </form>
      </div>

      {/* Info Band */}
      <div className="contact__info-band">
        <div className="contact__info-inner">

          <div className="contact__info-item">
            <div className="contact__icon">💊</div>
            <h4>ABOUT UMUTISAFE</h4>
            <p>
              Guidance for safe household medicine disposal.<br />
              Supporting healthier homes & communities.
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__icon">📞</div>
            <h4>SUPPORT HOTLINE</h4>
            <p>
              +250 788 000 000<br />
              Mon–Fri, 8:00 AM – 5:00 PM
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__icon">🌍</div>
            <h4>LOCATION</h4>
            <p>
              Kigali, Rwanda<br />
              Community Health Innovation Hub
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

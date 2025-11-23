import './service.css'

export default function Service({ imageSrc }) {
  return (
    <section className="service" id="how-it-works">
      <div className="service__inner">

        <div className="service__copy">
          <p className="service__eyebrow">How UmutiSafe guides every household</p>
          <h2 className="service__title">Scan, learn, and dispose medicines with confidence.</h2>
          <p className="service__lead">
            The UmutiSafe assistant walks users through a focused, three-step flow that keeps unused and expired
            medicines out of landfills, latrines, and waterways.
          </p>

          <div className="service__grid">
            <div className="service__item">
              <h3>1. Capture</h3>
              <p>Snap a photo or type the medicine name to identify the drug category in seconds.</p>
            </div>
            <div className="service__item">
              <h3>2. Learn</h3>
              <p>Get a concise disposal instruction based on Rwanda FDA recommendations for that category.</p>
            </div>
            <div className="service__item">
              <h3>3. Dispose or Request Help</h3>
              <p>Follow the step-by-step guide or notify a nearby Community Health Worker for collection.</p>
            </div>
          </div>
        </div>

        <div className="service__visual">
          <img src={imageSrc || '/hero.jpg'} alt="Preview of the UmutiSafe guidance flow" />
        </div>

      </div>
    </section>
  )
}

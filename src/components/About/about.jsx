import React from 'react'
import './about.css'

export default function About({ imageSrc }) {
  return (
    <section className="about" id="about">
      <div className="about__inner">

        <div className="about__text">
          <h2 className="about__title">Helping Rwandan households dispose medicines safely.</h2>

          <p className="about__lead">
            Unused tablets and syrups pile up fast. Many end up in pit latrines, open fires, or kitchen
            cabinets—putting children, water sources, and communities at risk.
          </p>

          <ul className="about__list">
            <li>Computer vision or manual search to identify any medicine.</li>
            <li>Clear disposal steps matched to Rwanda FDA guidance.</li>
            <li>Optional handoff to Community Health Workers for pickup.</li>
          </ul>

        </div>

        <div className="about__visual">
          <img 
            src={imageSrc || '/about.jpg'} 
            alt="UmutiSafe About Section Visual"
          />
        </div>

      </div>
    </section>
  )
}

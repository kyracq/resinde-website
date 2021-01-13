import React from "react"
import heroStyles from "./hero.module.css"
import tw from "twin.macro"

const HeroSection = props => (
  <section className={heroStyles.hero}>
    <div className={heroStyles.content}>
      <h1 className={heroStyles.h1}>We are ResInDe.</h1>
      <p>
        A group at Princeton University focused on Research, Innovation, and
        Design. As a team of designers and developers, our mission is to drive
        impactful user experience solutions through user research and digital
        implementation.
      </p>
    </div>
    <a href={props.goTo}>
      <div className={heroStyles.arrow}></div>
    </a>
  </section>
)

export default HeroSection

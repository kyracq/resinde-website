import React from "react"
import heroStyles from "./hero.module.css"

export default function Hero(props) {
  return (
    <section className={heroStyles.hero}>
      <div>
          <h1 className={heroStyles.h1}>We are ResInDe.</h1>
          <p>A group at Princeton University focused on Research, Innovation, and Design. As a team of designers and developers, our mission is to drive impactful user experience solutions through user research and digital implementation.</p>
      </div>
      <a href={props.onClick}><button type="button">Down</button></a>
        <i className="arrow"></i>
    </section>
  )
}
import React, { useState, useEffect } from "react"
import { styled } from "twin.macro"

const CursorDiv = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform;

  ${props => (props.hidden ? `opacity: 0;` : null)}
  ${props =>
    props.clicked
      ? `background-color: black;
     transform: translate(-50%, -50%) scale(0.9);
    `
      : null}
      ${props =>
    props.linkHovered
      ? `background-color: black;
         transform: translate(-50%, -50%) scale(1.25);
        `
      : null}
  background-color: ${props => (props.clicked ? `black;` : `none;`)};
`

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  if (typeof navigator !== "undefined" && isMobile()) return null

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = event => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  return (
    <CursorDiv
      clicked={clicked}
      linkHovered={linkHovered}
      hidden={hidden}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default Cursor

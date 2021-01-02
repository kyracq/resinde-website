import React, { useState, useEffect } from "react"
import { styled } from "twin.macro"

const FollowDiv = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 100%;
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  opacity: ${props => (props.hidden ? 0 : 1)};
  transform: ${props => {
    if (props.linkHovered) return `translate(-50%, -50%) scale(1.25)`
    else if (props.clicked) return `translate(-50%, -50%) scale(0.9)`
    else return `translate(-50%, -50%)`
  }};
  transition: all 200ms ease-out;
`

const CursorDiv = styled.div`
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.hidden ? 0 : 1)};
`

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", event => {
        if (hidden) {
          setHidden(false)
        }
        setPosition({ x: event.clientX, y: event.clientY })
      })
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", event => {
        if (hidden) {
          setHidden(false)
        }
        setPosition({ x: event.clientX, y: event.clientY })
      })
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [hidden])

  if (typeof navigator !== "undefined" && isMobile()) return null

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
    <div>
      <FollowDiv
        clicked={clicked}
        linkHovered={linkHovered}
        hidden={hidden}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <CursorDiv
        hidden={hidden}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  )
}

export default Cursor

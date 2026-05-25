"use client"

import { useEffect, useState } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        setIsPointer(
          computedStyle.cursor === "pointer" ||
            hoveredElement.tagName === "A" ||
            hoveredElement.tagName === "BUTTON"
        )
      }
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position.x, position.y])

  // Only show on non-touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-foreground transition-all duration-300 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* Trailing cursor */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-500 ease-out ${
          isHidden ? "opacity-0" : "opacity-30"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border border-foreground transition-all duration-300 ${
            isPointer ? "scale-150 opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (hover: hover) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}

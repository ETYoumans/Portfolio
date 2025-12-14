import "./css/about.css"
import Info from "./info.json"
import React, { useEffect, useRef, useState } from 'react'
const statements = Info.about

function clamp(v, min, max) { return Math.min(Math.max(v, min), max) }

function About() {
    const ref = useRef(null)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        function updateOpacity() {
            const rect = el.getBoundingClientRect()
            const vh = window.innerHeight || 1
            const visibleTop = clamp(rect.top, 0, vh)
            const visibleBottom = clamp(rect.bottom, 0, vh)
            const visible = Math.max(0, visibleBottom - visibleTop)
            const visibleRatio = clamp(visible / Math.min(vh, rect.height || vh), 0, 1)
            const centerY = rect.top + rect.height / 2
            const viewportCenter = vh / 2
            const distFromCenter = Math.abs(centerY - viewportCenter)
            const centerFalloff = clamp(1 - distFromCenter / (vh * 0.6), 0, 1)

            const target = clamp(visibleRatio * centerFalloff, 0, 1)
            setOpacity(target)
        }

        updateOpacity()
        window.addEventListener('scroll', updateOpacity, { passive: true })
        window.addEventListener('resize', updateOpacity)
        return () => {
            window.removeEventListener('scroll', updateOpacity)
            window.removeEventListener('resize', updateOpacity)
        }
    }, [])

    return(
        <div ref={ref} className="about" style={{ opacity }}>
            {statements.map((text, index) => (
                <h2 key={index} className="about-line">
                    {text}
                </h2>
            ))}
        </div>
    )
}

export default About
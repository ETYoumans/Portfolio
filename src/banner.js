import './css/banner.css'
import Info from "./info.json"
import React, { useEffect, useState } from 'react'

function Banner() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    function onScroll() {
      const viewportHeight = window.innerHeight || 1
      const y = window.scrollY || 0
      const ratio = Math.min(Math.max(y / viewportHeight, 0), 1)
      setOpacity(1 - ratio)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="banner" style={{ opacity }}>
      <div className="banner-content">
        <h1 className="banner-name">{Info.basics.name}</h1>
        <h2 className="banner-tagline">{Info.basics.title}</h2>
        <p className="banner-buzzwords">{Info.basics.subtitle}</p>
      </div>
    </section>
  );
}



export default Banner;

import './hero.css'
import './heroAnimation.css'
// import logo2 from './../../assets/TB-logo1.svg'
import vid from '../../assets/vid.mp4'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'


export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLHeadingElement | null>(null)
  const videoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      new SplitType(titleRef.current, {
        types: 'lines',
        lineClass: 'line'
      })
      new SplitType(subtitleRef.current, {
        types: 'lines',
        lineClass: 'line'
      })

      const allLines = document.querySelectorAll('.line')
      allLines.forEach((line, index) => {
        line.classList.add('line-hidden')
        setTimeout(() => {
          line.classList.add('line-visible')
        }, index * 100)
      })
    }

    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current?.classList.add('revealed')
      }, 100)
    }
  }, [])

  return (
    <section className="heroSection">
      <div ref={videoRef} className="video-container">
        <video className="video1" src={vid} autoPlay playsInline loop muted />
        <div className="video-overlay"></div>

        {/* curtains for the horizontal reveal */}
        <div className="curtain top-curtain"></div>
        <div className="curtain bottom-curtain"></div>
      </div>

      <div className="titles">
        <h1 ref={titleRef} className="tball-title">TRITON BALL</h1>
        <h4 ref={subtitleRef} className="subtitle">Where data meets the game.</h4>
      </div>

      {/* <img className="hero-logo" src={logo2} alt="Triton Ball Logo" /> */}
    </section>
  )
}

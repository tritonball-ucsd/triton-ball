import './hero.css'
import logo2 from './../../assets/TB-logo1.svg'




export default function Hero() {
  return (
    <section className='heroSection'>
        <div className="titles">
            <h1 className='tball-title'>TRITON BALL</h1>
            <h4 className='subtitle'>Where data meets the game.</h4>
        </div>
        <img className='hero-logo' src={logo2} alt="" />
    </section>
  )
}

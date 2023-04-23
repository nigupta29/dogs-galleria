import { Link } from 'react-router-dom'
import './HeroSection.css'

export default function HeroSection() {
  const img1URl =
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  const img2URl =
    'https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80'
  const img3URl =
    'https://images.unsplash.com/photo-1550256076-d0200980e4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  return (
    <section className="hero-container">
      <article className="text-section">
        <nav className="navigation">
          <i className="icon bi bi-arrow-left"></i>
          <ul>
            <a href="#">
              <i className="icon bi bi-github"></i>
            </a>
            <a href="#">
              <i className="icon bi bi-twitter"></i>
            </a>
          </ul>
        </nav>

        <div className="heading">
          <h1>Dogs Galleria</h1>
          <p>
            Get inspired by our gallery of adorable dogs and fall in love with
            their cuteness. Wag your tail along with us!
          </p>
          <Link to={'/discover'} className="btn-browse">
            Browse
          </Link>
        </div>
      </article>
      <div className="image-section">
        <img src={img1URl} alt="Card Dog 1 Display" loading="lazy" />
        <img src={img2URl} alt="Card Dog 2 Display" loading="lazy" />
        <img src={img3URl} alt="Card Dog 3 Display" loading="lazy" />
      </div>
    </section>
  )
}

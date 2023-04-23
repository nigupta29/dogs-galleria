import { Link } from 'react-router-dom'

function Landing() {
  const img1URl =
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  const img2URl =
    'https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80'
  const img3URl =
    'https://images.unsplash.com/photo-1550256076-d0200980e4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

  return (
    <section className="hero-container">
      <article className="text-section">
        <nav>
          <i className="icon bi bi-arrow-left"></i>
          <ul>
            <i className="icon bi bi-github"></i>
            <i className="icon bi bi-twitter"></i>
          </ul>
        </nav>

        <div className="heading">
          <h1>Dogs Galleria</h1>
          <p>
            Looking for some furry inspiration? Our dogs gallery app has got you
            covered. Get ready to wag your tail and fall in love with our
            collection of canine cuteness.
          </p>
          <Link to={'/discover'}>Browse</Link>
        </div>
      </article>
      <div className="image-section">
        <div>
          <img className="img1" src={img1URl} alt="Card Dog 1 Display" />
        </div>
        <div>
          <img className="img2" src={img2URl} alt="Card Dog 1 Display" />
        </div>
        <div>
          <img className="img3" src={img3URl} alt="Card Dog 1 Display" />
        </div>
      </div>
    </section>
  )
}

export default Landing

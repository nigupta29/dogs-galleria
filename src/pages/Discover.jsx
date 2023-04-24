import { Link } from 'react-router-dom'
import DogsList from '../components/dogs/DogsList'

function Discover() {
  return (
    <div className="discover">
      <div className="headline">
        <h3>Discover</h3>
        <p>
          Explore the diversity of man&apos;s best friend. Discover the world of
          dog breeds with us!
        </p>
        <Link to={'/'} className="btn">
          Back To Home
        </Link>
      </div>
      <DogsList />
    </div>
  )
}

export default Discover

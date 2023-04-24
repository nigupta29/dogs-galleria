import { breedData } from '../../libs/data'
import './DogsList.css'

function DogsList() {
  return (
    <div className="card-container">
      {breedData?.map(({ id, breed_name, img_src }) => (
        <div key={id} className="card">
          <img src={img_src} alt={`${breed_name}'s Photo`} loading="lazy" />
          <h3 className="text">{breed_name}</h3>
        </div>
      ))}
    </div>
  )
}

export default DogsList

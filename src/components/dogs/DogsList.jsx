import { breedData } from '../../libs/data'

function DogsList() {
  return (
    <div>
      {breedData.length}
      {breedData?.map(({ id, breed_name, img_src }) => (
        <div key={id}>
          <h3>{breed_name}</h3>
          <img src={img_src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default DogsList

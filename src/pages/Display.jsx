import { useParams } from 'react-router-dom'

function Display() {
  const { breed } = useParams()
  return <div>Display : {breed.toLowerCase()}</div>
}

export default Display

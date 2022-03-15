
import { useJsApiLoader } from '@react-google-maps/api'
import Map from './Map/Map';

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

  const defaultCenter = {
    lat: 56.9335,
    lng: 24.2886
  };

const libraries = ['places']

function ApiMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
      })

    return (
        <div>
            {isLoaded ? <Map center={defaultCenter}/> : <h2>Loading...</h2>}
        </div>
    )
}

export default ApiMap
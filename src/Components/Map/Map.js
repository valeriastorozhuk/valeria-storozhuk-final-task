import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '600px',
    height: '600px'
    
  };


  
function Map({center}) {
    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined
      }, [])

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
               
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
            </GoogleMap>
        </div>
    )
}

export default Map
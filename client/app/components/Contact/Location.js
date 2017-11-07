import React from 'react';

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const Location = withScriptjs(withGoogleMap((props) => (
    <div>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 33.272439, lng: -111.792799 }}
        >
            <Marker position={{ lat: 33.272439, lng: -111.792799 }}/>
        </GoogleMap>
    </div>
)));

export default Location;
import React , {useEffect , useState} from 'react';
import GoogleMaps from './../GoogleMaps/GoogleMaps';
import * as api from "./../../utliti/api"

const MapWrapper = () => {
    const [coordinates , setCoordinates] = useState([]);
    const [center , setCenter] = useState(null);

    useEffect(() => {

        getCoordinates()

    } , [])
    


    async function getCoordinates() {
        try {
        
            let lat = "",
            long = ""

            navigator.geolocation.getCurrentPosition( async (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude

                console.log(lat , long)

                const {data} = await api.gymList(lat , long)

                setCenter({lat , lng:long})

                console.log(data)

                setCoordinates(data.data)

            },  err => console.log(err));
        }catch (error) {
            console.log(error.response)
        }
    }

   if(coordinates.length <= 0) return null

    return (
            <GoogleMaps coordinates={coordinates}  center = {center}/>
        
    );
};

export default MapWrapper;
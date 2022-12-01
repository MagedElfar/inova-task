import React , {useEffect , useState} from 'react';
import { GoogleMap, useJsApiLoader , Marker , InfoWindow} from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import style from "./GoogleMaps.module.css";
import Review from '../reveiw/Review';

const containerStyle = {
  width: '100%',
  height: '100vh'
};


//AIzaSyD84-x2KOPr2up6OB37Hq1LEtjq50RfH-w

const GoogleMaps = ({coordinates , center}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD84-x2KOPr2up6OB37Hq1LEtjq50RfH-w"

    })

    const [activeMarker, setActiveMarker] = useState(null);
    const [map, setMap] = React.useState(null)

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
        return;
        }
        setActiveMarker(marker);
    };
    

    const onLoad = React.useCallback(function callback(map) {

        const bounds = new window.google.maps.LatLngBounds();
        coordinates.forEach((item) => bounds.extend({ lat: +item.lat, lng: +item.long }));
        map.fitBounds(bounds);

        // bounds.extend(center);
        // map.setZoom(10)

        
        setMap(map)
    }, [coordinates])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    

    if(!isLoaded) return null;
    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            zoom = {20}
            onUnmount={onUnmount}     
        >
            <Marker
                    icon={{
                        //path: google.maps.SymbolPath.CIRCLE,
                        url: "/images/markerRed.svg",
                        // scale: 2,
                    }}
                    position={center}
                >
                </Marker>
            {
                coordinates.map((item , index) => {
                    return(
                    <Marker
                        icon={{
                            //path: google.maps.SymbolPath.CIRCLE,
                            url: "/images/marker.svg",
                           // scale: 2,
                        }}
                        key={item.id}
                        position={{ lat: +item.lat, lng: +item.long }}
                        onClick={() => handleActiveMarker(item.id)}
                    >
                        {activeMarker === item.id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <Link to = {`/gyms/${item.id}/info`} className="text-decoration-none">
                            <div className='d-flex'>
                                <div className={`col-4 ${style.img}`}>
                                    <img src={item.logo_img_url} />
                                </div>
                                <div className='col-8 ps-4'>
                                    <div className = {style.title}>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className={`${style.location} d-flex align-items-start`}>
                                        <img src="/images/location.svg" />
                                        <p>{item.address}</p>
                                    </div>
                                    <div className={`${style.rate} d-flex `}>
                                        <Review rate={item.rate} />
                                    </div>
                                </div>
                                
                            </div>
                            </Link>

                        </InfoWindow>
                        ) : null}
                    </Marker>
                    )
                })
            }
        </GoogleMap>
    );
};

export default GoogleMaps
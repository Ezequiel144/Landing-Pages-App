import  googleMapStyle from './GoogleMapFooter.module.css';
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api';

export default function GoogleMapFooter(){
    const center = {
        lat: -3.745,
        lng: -38523
    }

    // eslint-disable-next-line no-unused-vars
    /* const { idLoaded } = useJsApiLoader({
        id: 'script-loader',
        googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDN42pU_35M_oblKgpWAIRCDcv_M7quYq8&callback=initMap"
    }) */

    return (
        <div  className={googleMapStyle.contentMap}>
            <GoogleMap
                googleMapsApiKey={'AIzaSyDN42pU_35M_oblKgpWAIRCDcv_M7quYq8'}
                center={center}
                zoom={10}
                mapContainerClassName={googleMapStyle.container}
            />
        </div>
    )
}
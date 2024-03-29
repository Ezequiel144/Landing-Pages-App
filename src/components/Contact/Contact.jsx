import contactStyle from './Contact.module.css';
import Formulary from '../Formulary/Formulary';
import map from '../../assets/img/map.png'
/* import GoogleMap from '../GoogleMapFooter/GoogleMapFooter'; */

export default function Contact(){
    return(
        <div className={contactStyle.contentContact}>
            <section className={contactStyle.contentTextFormulary}>
                <div className={contactStyle.contentText}>
                    <h1 className={contactStyle.title}>Get in touch</h1>
                    <p className={contactStyle.p}>
                        Consectetur adiposcing elt, sed do eiusmod tempor
                        incididunt ut labore et dolor. consectetur adiposcing elit,
                    </p>
                </div>
                <Formulary />
            </section>
            <section className={contactStyle.contentMap}>
                <img className={contactStyle.imageMap} src={map} alt="map" />
                {/* <GoogleMap /> */}
            </section>
        </div>
    )
}
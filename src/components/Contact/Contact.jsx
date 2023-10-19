import contactStyle from './Contact.module.css';
import map from '../../assets/img/map.png';

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
                formulario
            </section>
            <section>
                <img src={map} alt="map" />
            </section>
        </div>
    )
}
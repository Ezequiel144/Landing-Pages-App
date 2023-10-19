import Contact from '../Contact/Contact';
import footerStyle from './Footer.module.css';

export default function Footer(){
    return(
        <div className={footerStyle.contentFooter}>
            <Contact />
            <section>
                info de footer
            </section>
        </div>
    )
}
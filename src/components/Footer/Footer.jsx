import Contact from '../Contact/Contact';
import footerStyle from './Footer.module.css';
import iconBe from '../../assets/icons-footer/behance.png';
import iconFace from '../../assets/icons-footer/facebook.png';
import iconTwitter from '../../assets/icons-footer/gorjeo.png';

export default function Footer(){
    return(
        <div className={footerStyle.contentFooter}>
            <Contact />
            <section className={footerStyle.contentSocial}>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconFace} alt="facebook" />
                </div>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconTwitter} alt="facebook" />
                </div>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconBe} alt="facebook" />
                </div>
            </section>
            <section className={footerStyle.contentCopy}>
                <p className={footerStyle.text}>
                    Copy © 2023 - Todos los derechos reservados | Diseñado y desarrollado por: <a href="#" className={footerStyle.autor}>Ezequiel Garcia</a>
                </p>
            </section>
        </div>
    )
}
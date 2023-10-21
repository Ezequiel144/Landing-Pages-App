import Contact from '../Contact/Contact';
import footerStyle from './Footer.module.css';
import iconFace from '../../assets/icons-footer/facebook.png';

export default function Footer(){
    return(
        <div className={footerStyle.contentFooter}>
            <Contact />
            <section className={footerStyle.contentSocial}>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconFace} alt="facebook" />
                </div>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconFace} alt="facebook" />
                </div>
                <div className={footerStyle.contentIcons}>
                    <img className={footerStyle.icon} src={iconFace} alt="facebook" />
                </div>
            </section>
        </div>
    )
}
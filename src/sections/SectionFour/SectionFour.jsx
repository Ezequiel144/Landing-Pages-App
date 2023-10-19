import sectionFourStyle from './SectionFour.module.css';
import ButtonDownload from '../../components/ButtoDownload/ButtonDownload';
import imageFour from '../../assets/img-sec4/celusinsalidadepantallarecortado.png';
import iconComment from '../../assets/icon-sec4/conversacion.png'

export default function SectionFour(){
    return(
        <div className={sectionFourStyle.contentPagesMainThree}>
            <section className={sectionFourStyle.sectionTwo}>
                <img className={sectionFourStyle.image} src={imageFour} alt="imgSec3" />
            </section>
            <section className={sectionFourStyle.sectionOne}>
                <div className={sectionFourStyle.iconConfig}>
                    <img className={sectionFourStyle.icon} src={iconComment} alt="iconConfig" />
                </div>
                <h1 className={sectionFourStyle.title}>Best for organize and customize easily</h1>
                <p className={sectionFourStyle.subtitle}>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolor.Consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore
                </p>
                <div className={sectionFourStyle.contentButton}>
                    <ButtonDownload title={"Download"}/>
                </div>
            </section>
        </div>
    )
}
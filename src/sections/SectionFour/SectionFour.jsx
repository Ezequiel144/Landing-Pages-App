/* eslint-disable react/prop-types */
import sectionFourStyle from './SectionFour.module.css';
import ButtonDownload from '../../components/ButtoDownload/ButtonDownload';
import imageFour from '../../assets/img-sec4/celudefrenteDos.png';
import iconComment from '../../assets/icon-sec4/conversacion.png'

export default function SectionFour({dataAosDuration,dataAosDownRight,dataAosDownLeft}){
    return(
        <div className={sectionFourStyle.contentPagesMainThree}>
            <section data-aos={dataAosDownRight} data-aos-duration={dataAosDuration} className={sectionFourStyle.sectionTwo}>
                <img className={sectionFourStyle.image} src={imageFour} alt="imgSec3" />
            </section>
            <section data-aos={dataAosDownLeft} data-aos-duration={dataAosDuration} className={sectionFourStyle.sectionOne}>
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
/* eslint-disable react/prop-types */
import ButtonDownload from '../../components/ButtoDownload/ButtonDownload'
import sectionThreeStyle from './SectionThree.module.css'
import imageThree from '../../assets/img-sec3/celuinclinadoMain2.png'
import iconConfig from '../../assets/icon-sec3/configuraciones.png'

export default function SectionThree({dataAosDuration,dataAosUpRight,dataAosUpLeft}){
    return(
        <div className={sectionThreeStyle.contentPagesMainThree}>
            <section data-aos={dataAosUpRight} data-aos-duration={dataAosDuration} className={sectionThreeStyle.sectionOne}>
                <div className={sectionThreeStyle.iconConfig}>
                    <img className={sectionThreeStyle.icon} src={iconConfig} alt="iconConfig" />
                </div>
                <h1 className={sectionThreeStyle.title}>Best for organize and customize easily</h1>
                <p className={sectionThreeStyle.subtitle}>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolor.Consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore
                </p>
                <div className={sectionThreeStyle.contentButton}>
                    <ButtonDownload title={"Download"}/>
                </div>
            </section>
            <section data-aos={dataAosUpLeft} data-aos-duration={dataAosDuration} className={sectionThreeStyle.sectionTwo}>
                <img className={sectionThreeStyle.image} src={imageThree} alt="imgSec3" />
            </section>
        </div>
    )
}
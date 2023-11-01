/* eslint-disable react/prop-types */
/* import CarouselComp from '../../components/Carousel/CarouselComp';*/
import CarouselTwo from '../../components/CarouselTwo/CarouselTwo';
import sectionSixStyle from './SectionSix.module.css';


export default function SectionSix({dataAosLeft,dataAosDuration}){
    return(
        <div id='screesshots' className={sectionSixStyle.contentPagesMainSix}>
            <section data-aos={dataAosLeft} data-aos-duration={dataAosDuration} className={sectionSixStyle.contentText}>
                <h1 className={sectionSixStyle.title}>Teeno Screenshot</h1>
                <p className={sectionSixStyle.p}>
                    Consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
                </p>
            </section>
            <section data-aos={dataAosLeft} data-aos-duration={dataAosDuration} className={sectionSixStyle.contentCarousel}>
                <CarouselTwo />
            </section>
        </div>
    )
}
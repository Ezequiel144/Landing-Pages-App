/* import CarouselComp from '../../components/Carousel/CarouselComp';*/import CarouselThree from '../../components/CarouselThree/CarouselThree';
import CarouselTwo from '../../components/CarouselTwo/CarouselTwo';
/* import CarouselTwo from '../../components/CarouselTwo/CarouselTwo';*/import sectionSixStyle from './SectionSix.module.css';


export default function SectionSix(){
    return(
        <div className={sectionSixStyle.contentPagesMainSix}>
            <section className={sectionSixStyle.contentText}>
                <h1 className={sectionSixStyle.title}>Teeno Screenshot</h1>
                <p className={sectionSixStyle.p}>
                    Consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
                </p>
            </section>
            <section className={sectionSixStyle.contentCarousel}>
                {/* <CarouselThree /> */}
                <CarouselTwo />
            </section>
        </div>
    )
}
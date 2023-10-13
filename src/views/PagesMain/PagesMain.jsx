import pagesMainStyle from './PagesMain.module.css';
import imgCeluMain from '../../assets/img/celu2.png';
import Button from '../../components/Button/Button';
import imagenGoogle from '../../assets/icons/google-play.png'
import imagenApp from '../../assets/icons/logotipo-de-apple.png'
import SectionTwo from '../../sections/SectionTwo/SectionTwo';
import SectionThree from '../../sections/SectionThree/SectionThree';
import SectionFour from '../../sections/SectionFour/SectionFour';
import SectionFive from '../../sections/SectionFive/SectionFive';
import Video from '../../components/Video/Video';
import SectionSix from '../../sections/SectionSix/SectionSix';
import SectionSeven from '../../sections/SectionSeven/SectionSeven';


export default function PagesMain(){
    return(
        <div className={pagesMainStyle.contentAll}>
            <div className={pagesMainStyle.contentPagesMain}>
                {/* <section className={pagesMainStyle.sectionOne}> */}
                    <section className={pagesMainStyle.contentText}>
                        <h1 className={pagesMainStyle.title}>Landing page for showcase app</h1>
                        <h4 className={pagesMainStyle.subtitle}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolo.</h4>
                        <article className={pagesMainStyle.contentButton}>
                            <Button title={"App Store"} image={imagenApp}/>
                            <Button title={"Google Play"} image={imagenGoogle}/>
                        </article>
                    </section>
                {/* </section > */}
                <section className={pagesMainStyle.sectionTwo}>
                    <img className={pagesMainStyle.imageCelu} src={imgCeluMain} alt="imgenCelular"/>
                </section>
            </div>
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Video />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </div>
    )
}
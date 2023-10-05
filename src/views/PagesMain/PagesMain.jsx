import pagesMainStyle from './PagesMain.module.css';
import imgCeluMain from '../../assets/img/celu2.png';
import Button from '../../components/Button/Button';
import imagenGoogle from '../../assets/icons/google-play.png'
import imagenApp from '../../assets/icons/logotipo-de-apple.png'
import SectionTwo from '../../sections/SectionTwo/SectionTwo';


export default function PagesMain(){
    return(
        <>
            <div className={pagesMainStyle.contentPagesMain}>
                <section className={pagesMainStyle.sectionOne}>
                    <article className={pagesMainStyle.contentText}>
                        <h1 className={pagesMainStyle.title}>Landing page for showcase app</h1>
                        <h4 className={pagesMainStyle.subtitle}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolo.</h4>
                        <article className={pagesMainStyle.contentButton}>
                            <Button title={"App Store"} image={imagenApp}/>
                            <Button title={"Google Play"} image={imagenGoogle}/>
                        </article>
                    </article>
                </section >
                <section className={pagesMainStyle.sectionTwo}>
                    <img className={pagesMainStyle.imageCelu} src={imgCeluMain} alt="imgenCelular"/>
                </section>
            </div>
            <SectionTwo />
        </>
    )
}
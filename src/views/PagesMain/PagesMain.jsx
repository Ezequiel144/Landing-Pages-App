import pagesMainStyle from './PagesMain.module.css';
import imgCeluMain from '../../assets/img/celular1.png';
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
import SectionEight from '../../sections/SectionEight/SectionEight';
import SectionNine from '../../sections/SectionNine/SectionNine';
import Sidebar from '../../components/SideBar/Sidebar';
import { useContext } from 'react';
import { providerSidebar } from '../../context/SidebarContext';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PagesMain(){
    
    AOS.init();

    const {actionSidebar} = useContext(providerSidebar);

    const varAction = actionSidebar ? "flex" : "none";
    const varSide = actionSidebar ? "0" : "-40%"; 

    return(
        <div className={pagesMainStyle.contentAll}>
            <div id='home' className={pagesMainStyle.contentPagesMain}>
                {/* <section className={pagesMainStyle.sectionOne}> */}
                    <section data-aos='fade-right' data-aos-duration='1200' className={pagesMainStyle.contentText}>
                        <h1 className={pagesMainStyle.title}>Landing page for showcase app</h1>
                        <h4 className={pagesMainStyle.subtitle}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolo.</h4>
                        <article className={pagesMainStyle.contentButton}>
                            <Button title={"App Store"} image={imagenApp}/>
                            <Button title={"Google Play"} image={imagenGoogle}/>
                        </article>
                    </section>
                {/* </section > */}
                <section data-aos='fade-left' data-aos-duration='1200' className={pagesMainStyle.sectionTwo}>
                    <img className={pagesMainStyle.imageCelu} src={imgCeluMain} alt="imgenCelular"/>
                </section>
            </div>
            <Sidebar 
                varSide={varSide} 
                action={varAction}
            />
            <SectionTwo 
                dataAosRight='fade-right' 
                dataAosLeft='fade-left' 
                dataAosDuration='1200'
            />
            <SectionThree 
                dataAosUpRight='fade-up-right'
                dataAosUpLeft='fade-up-left'
                dataAosDuration='1200'
            />
            <SectionFour 
                dataAosDownRight='fade-down-right'
                dataAosDownLeft='fade-down-left'
                dataAosDuration='1200'
            />
            <Video 
                dataAosZoom='zoom-out'
                dataAosDelay='500'
            />
            <SectionFive 
                dataAosRight='fade-right'
                dataAosDuration='1200'
            />
            <SectionSix 
                dataAosLeft='fade-left' 
                dataAosDuration='1200'
            />
            <SectionSeven 
                dataAosFlipUp='flip-up'
                dataAosFlipDown='flip-down'
                dataAosDuration='1200'
            />
            <SectionEight 
                dataAosZoom='zoom-in'
                dataAosDuration='1200'
            />
            <SectionNine 
                dataAosZoom='zoom-in'
                dataAosDuration='1200'
            />
        </div>
    )
}
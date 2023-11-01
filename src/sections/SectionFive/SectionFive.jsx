/* eslint-disable react/prop-types */
import CardInfo from '../../components/CardInfo/CardInfo';
import sectionFiveStyle from './SectionFive.module.css';
import infoToCards from '../../data/dataCardInfo';

export default function SectionFive({dataAosRight,dataAosDuration}){
    return(
        <div id='features' className={sectionFiveStyle.contentPagesMainFive}>
            <section data-aos={dataAosRight} data-aos-duration={dataAosDuration} className={sectionFiveStyle.contentText}>
                <h1 className={sectionFiveStyle.title}>Features of Teeno</h1>
                <p className={sectionFiveStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, sc
                </p>
            </section>
            <section data-aos={dataAosRight} data-aos-duration={dataAosDuration} className={sectionFiveStyle.cardsInfo}>
                {
                    infoToCards.map(info => {
                        return(
                            <CardInfo
                                key={info.id} 
                                image = {info.image}
                                title = {info.title}
                                description={info.description}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}
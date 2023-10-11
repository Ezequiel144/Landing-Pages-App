import CardInfo from '../../components/CardInfo/CardInfo';
import sectionFiveStyle from './SectionFive.module.css';
import infoToCards from '../../data/dataCardInfo';

export default function SectionFive(){
    return(
        <div className={sectionFiveStyle.contentPagesMainFive}>
            <section className={sectionFiveStyle.contentText}>
                <h1 className={sectionFiveStyle.title}>Features of Teeno</h1>
                <p className={sectionFiveStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, sc
                </p>
            </section>
            <section className={sectionFiveStyle.cardsInfo}>
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
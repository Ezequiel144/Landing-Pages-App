/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardTestimont from '../../components/CardTestimont/CardTestimont'
import sectionSevenStyle from './SectionSeven.module.css'
import testimont from '../../data/dataTestimont'


export default function SectionSeven({dataAosFlipUp,dataAosFlipDown,dataAosDuration}){
    return(
        <div className={sectionSevenStyle.contentPagesMainSeven}>
            <section data-aos={dataAosFlipUp} data-aos-duration={dataAosDuration} className={sectionSevenStyle.contentText}>
                <h1 className={sectionSevenStyle.title}>What Teeno Users Say</h1>
                <p className={sectionSevenStyle.description}>
                    Consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
                </p>
            </section>
            <section data-aos={dataAosFlipDown} data-aos-duration={dataAosDuration} className={sectionSevenStyle.contentTestimont}>
                {
                    testimont.map(item => {
                        return <CardTestimont
                            key={item.id}
                            testimont={item.testimont}
                            imgPerfil={item.perfilImg}
                            name={item.name}
                            text={item.text}
                        />
                    })
                }
                
            </section>
        </div>
    )
}
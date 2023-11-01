/* eslint-disable react/prop-types */
import listDataCuadro from '../../data/data.js';
import Cuadro from '../../components/Cuadro/Cuadro';
import sectionTwoStyle from './Section.module.css';

export default function SectionTwo({dataAosRight,dataAosLeft,dataAosDuration}){
    return(
        <div className={sectionTwoStyle.contentPagesMainTwo}>
                {/* <section className={sectionTwoStyle.sectionOne}> */}
                    <article data-aos={dataAosRight} data-aos-duration={dataAosDuration} className={sectionTwoStyle.contentCuadro}>
                        {
                            listDataCuadro?.map(data => {
                                return(
                                    <Cuadro
                                        id={data.id}
                                        key={data.id}
                                        title={data.title}
                                        subtitle={data.subtitle}
                                        image={data.image}
                                    />
                                )
                            })
                        }
                    </article>
                {/* </section> */}
                {/* <section className={sectionTwoStyle.sectionTwo}> */}
                    <article data-aos={dataAosLeft} data-aos-duration={dataAosDuration} className={sectionTwoStyle.contentText}>
                        <h1 className={sectionTwoStyle.titleTwo}>User love teeno to make cool landing page</h1>
                        <h4 className={sectionTwoStyle.subtitleTwo}>
                            Consectetur adipiscing elit,send do eiusmod tempor incididunt ut labore et dolor.
                            consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.Ut enim.
                        </h4>
                    </article>
                {/* </section> */}
        </div>
    )
}
/* eslint-disable react/prop-types */
import sectionEightStyle from './SectionEight.module.css';
import CardPrice from '../../components/CardPrice/CardPrice';
import prices from '../../data/dataPrice';

export default function SectionEight({dataAosDuration,dataAosZoom}){
    return(
        <div id='plans' className={sectionEightStyle.contentPagesMainEight}>
            <section data-aos={dataAosZoom} data-aos-duration={dataAosDuration} className={sectionEightStyle.contentText}>
                <h1 className={sectionEightStyle.title}>Pricing Plans</h1>
                <p className={sectionEightStyle.text}>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
                </p>
            </section>
            <section  data-aos={dataAosZoom} data-aos-duration={dataAosDuration} className={sectionEightStyle.cards}>
                {prices.map(item => {
                    return <CardPrice
                                id={item.id} 
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                itemOne={item.itemOne}
                                itemTwo={item.itemTwo}
                                itemThree={item.itemThree}
                                itemFour={item.itemFour}
                        />
                })}
            </section>
        </div>
    )
}
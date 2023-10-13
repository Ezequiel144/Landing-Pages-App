import './CaruoselJs';
import './CarouselThree.css';

// eslint-disable-next-line react/prop-types
function CardCarousel({image,alt}){
    return(
        <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
                <img className='image' src={image} alt={alt}/>
            </div>
        </div>

    )
}

export default function CarouselThree(){
    return(
        <section id="tranding">
            <div className="container">
                <div className="swiper tranding-slider">
                    <div className="swiper-wrapper">
                        <CardCarousel image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"} alt={1}/>
                        <CardCarousel image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"} alt={2}/>
                        <CardCarousel image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"} alt={3}/>
                    </div>

                    <div className="tranding-slider-control">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
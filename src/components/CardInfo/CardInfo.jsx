import cardInfoStyle from './CardInfo.module.css'


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function CardInfo({image,title,description}){
    return(
        <div className={cardInfoStyle.contentCardInfo}>
            <section className={cardInfoStyle.contentIconImage}>
                <div className={cardInfoStyle.contentImage}>
                    <img className={cardInfoStyle.image} src={image} alt={title} />
                </div>
            </section>
            <section className={cardInfoStyle.contentText}>
                <h2 className={cardInfoStyle.title}>{title}</h2>
                <p className={cardInfoStyle.description}>{description}</p>
            </section>
        </div>
    )
}
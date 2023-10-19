/* eslint-disable react/prop-types */
import ButtonDownload from '../ButtoDownload/ButtonDownload';
import cardPriceStyle from './CardPrice.module.css';

// eslint-disable-next-line no-unused-vars
export default function CardPrice({id,title,price,itemOne,itemTwo,itemThree,itemFour}){

    const itemStyle = id === 2 ? (
        <div className={cardPriceStyle.contentCardPrice} style={{background: "rgb(168,115,241) linear-gradient(168deg, rgba(168,115,241,1) 22%, rgba(101,125,251,1) 72%)"}}>
            <h1 className={cardPriceStyle.title} style={{color: "var(--var-color-one)"}}>{title}</h1>
            <h3 className={cardPriceStyle.price} style={{color: "var(--var-color-one)"}}>${price}<span style={{color: "var(--var-color-one)"}} className={cardPriceStyle.priceText}> / Month</span></h3>
            <ul className={cardPriceStyle.list} style={{color: "var(--var-color-one)"}}>
                <li className={cardPriceStyle.item}>{itemOne}</li>
                <li className={cardPriceStyle.item}>{itemTwo}</li>
                <li className={cardPriceStyle.item}>{itemThree}</li>
                <li className={cardPriceStyle.item}>{itemFour}</li>
            </ul>
            <ButtonDownload title={"Get Started "}/>
        </div>
    ) : (
        <div className={cardPriceStyle.contentCardPrice}>
            <h1 className={cardPriceStyle.title}>{title}</h1>
            <h3 className={cardPriceStyle.price}>${price}<span className={cardPriceStyle.priceText}> / Month</span></h3>
            <ul className={cardPriceStyle.list}>
                <li className={cardPriceStyle.item}>{itemOne}</li>
                <li className={cardPriceStyle.item}>{itemTwo}</li>
                <li className={cardPriceStyle.item}>{itemThree}</li>
                <li className={cardPriceStyle.item}>{itemFour}</li>
            </ul>
            <ButtonDownload title={"Get Started "}/>
        </div>
    )
    
    return itemStyle
}
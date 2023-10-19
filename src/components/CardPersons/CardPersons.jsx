/* eslint-disable react/prop-types */
import cardPersonsStyle from './CardPersons.module.css';
import facebook from '../../assets/icons-sec9/facebook.png';
import twitterX from '../../assets/icons-sec9/gorjeo.png';
import behance from '../../assets/icons-sec9/behance.png';

// eslint-disable-next-line no-unused-vars
export default function CardPersons({imagePerfil,name,profetion,twitter,be,face}){
    return(
        <div className={cardPersonsStyle.contentCardPersons}>
            <section className={cardPersonsStyle.contentPerfil}>
                <img className={cardPersonsStyle.imagePerfil} src={imagePerfil} alt="Image Perfil"/>
                <div className={cardPersonsStyle.contentTextPerfil}>
                    <h4 className={cardPersonsStyle.name}>{name}</h4>
                    <p className={cardPersonsStyle.profetion}>{profetion}</p>
                </div>
            </section>
            <section className={cardPersonsStyle.SocialNetworks}>
                <a href={face}>
                    <img className={cardPersonsStyle.icons} src={facebook} alt="face" />
                </a>
                <a href={twitter}>
                    <img className={cardPersonsStyle.icons} src={twitterX} alt="twitter" />
                </a>
                <a href={be}>
                    <img className={cardPersonsStyle.icons} src={behance} alt="Be" />
                </a>
            </section>
        </div>
    )
}
import buttonStyle from './Button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({title,image}){
    return(
        <button className={buttonStyle.button}>
            <img className={buttonStyle.image} src={image} alt="img"/>
            {title}
        </button>
    )
}
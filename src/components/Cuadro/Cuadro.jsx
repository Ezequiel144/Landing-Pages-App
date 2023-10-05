import cuadroStyle from './Cuadro.module.css';

// eslint-disable-next-line react/prop-types
export default function Cuadro({id,title,subtitle,image}){
    const cuadroOne = (
        <div className={cuadroStyle.contentInfo} style={{'align-self': 'start'}}>
            <img className={cuadroStyle.image} src={image} alt={title} />
            <h1 className={cuadroStyle.title}>{title}</h1>
            <h5 className={cuadroStyle.subtitle}>{subtitle}</h5>
        </div>
    )

    const cuadroTwo = (
        <div className={cuadroStyle.contentInfo} style={{'align-self': 'end'}}>
            <img className={cuadroStyle.image} src={image} alt={title} />
            <h1 className={cuadroStyle.title}>{title}</h1>
            <h5 className={cuadroStyle.subtitle}>{subtitle}</h5>
        </div>
    )
    
    return(
        id != 2 && id != 4 ?  cuadroOne : cuadroTwo 
    )
} 
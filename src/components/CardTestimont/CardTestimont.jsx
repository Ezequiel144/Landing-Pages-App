import testimontStyle from './CardTestimont.module.css';

// eslint-disable-next-line react/prop-types
export default function CardTestimont({testimont,imgPerfil,name,text}){
    return(
        <div className={testimontStyle.contentCardTestimont}>
            <section className={testimontStyle.contentText}>
                <p className={testimontStyle.testimont}>{testimont}</p>
            </section>
            <section className={testimontStyle.contentPerfil}>
                <div className={testimontStyle.contentimagePerfil}>
                    <img className={testimontStyle.imagePerfil} src={imgPerfil} alt={name} />
                </div>
                <div className={testimontStyle.contentTextPerfil}>
                    <h4 className={testimontStyle.namePerfil}>{name}</h4>
                    <p className={testimontStyle.text}>{text}</p>
                </div>
            </section>
        </div>
    )

}
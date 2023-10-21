import formularyStyle from './Formulary.module.css';

export default function Formulary(){
    return(
        <div className={formularyStyle.contentForm}>
            <form action="" className={formularyStyle.form}>
                <div className={formularyStyle.contentInputs}>
                    <input className={formularyStyle.input} type="text" placeholder='Your Name' alt="name" />
                    <input className={formularyStyle.input} type="email" placeholder='Your Email' alt="email" />
                </div>
                <textarea className={formularyStyle.textarea} name="messege" placeholder='Messege' id="sms" cols="30" rows="10"></textarea>
                <input className={formularyStyle.submit} type="submit" value={"Submit Now"} aria-controls='none'/>
            </form>
        </div>
    )
}
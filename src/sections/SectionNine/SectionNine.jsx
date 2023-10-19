import sectionNineStyle from './SectionNine.module.css';
import CardPersons from '../../components/CardPersons/CardPersons';
import persons from '../../data/dataPersons';


export default function SectionNine(){
    return(
        <div className={sectionNineStyle.contentPagesMainNine}>
            <section className={sectionNineStyle.contentText}>
                <h1 className={sectionNineStyle.title}>Meet Teeno Team</h1>
                <p className={sectionNineStyle.decription}>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
                </p>
            </section>
            <section className={sectionNineStyle.contentCards}>
                {
                    persons.map(item => {
                        return <CardPersons
                                key={item.id}
                                imagePerfil={item.imgPerfil} 
                                name={item.name}
                                profetion={item.profetion}
                                face={item.face}
                                twitter={item.twitter}
                                be={item.be}
                            />
                    })
                }
                
            </section>
        </div>
    )
}
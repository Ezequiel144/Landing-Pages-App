import sidebarStyle from './Sidebar.module.css';
import { useContext } from 'react';
import { providerSidebar } from '../../context/SidebarContext';
import ButtonDownload from '../ButtoDownload/ButtonDownload';
import imagenclose from "../../assets/img/cerrar.png";

// eslint-disable-next-line react/prop-types
export default function Sidebar({varSide,action}){

    const {setActionSidebar} = useContext(providerSidebar);

    return(
        <div className={sidebarStyle.contentSidebar} style={{display: action,right:varSide}}>
            
            <section className={sidebarStyle.contentMenu}>
                <h1 className={sidebarStyle.menu}>menu</h1>
                <img className={sidebarStyle.close} onClick={()=>setActionSidebar(false)} src={imagenclose}/>
            </section>
            <ul className={sidebarStyle.contentLi}>
                    <a href='#home' className={sidebarStyle.li}>Home</a>
                    <a href='#overview' className={sidebarStyle.li}>Overview</a>
                    <a href='#features' className={sidebarStyle.li}>Features</a>
                    <a href='#screesshots' className={sidebarStyle.li}>Screesshots</a>
                    <a href='#plans' className={sidebarStyle.li}>Plans</a>
            </ul>
            <div className={sidebarStyle.contentButton}>
                <ButtonDownload 
                    title="Download"
                />
            </div>
        </div>
    )
}
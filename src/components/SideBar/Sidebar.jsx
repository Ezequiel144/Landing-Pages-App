import sidebarStyle from './Sidebar.module.css';
import { useContext } from 'react';
import { providerSidebar } from '../../context/SidebarContext';
import ButtonDownload from '../ButtoDownload/ButtonDownload';
import imagenclose from "../../assets/img/cerrar.png";

// eslint-disable-next-line react/prop-types
export default function Sidebar({varSide,/* action */}){

    const {actionSidebar,setActionSidebar} = useContext(providerSidebar);

    const varStyle = actionSidebar ? {right:varSide} : {right: "-100%"}

    return(
        <div className={sidebarStyle.contentSidebar} /* style={{display: action,right:varSide}} */ style={varStyle}>
            
            <section className={sidebarStyle.contentMenu}>
                <h1 className={sidebarStyle.menu}>menu</h1>
                <img className={sidebarStyle.close} onClick={()=>setActionSidebar(false)} src={imagenclose}/>
            </section>
            <ul className={sidebarStyle.contentLi}>
                    <a href='#home' className={sidebarStyle.li} onClick={() => setActionSidebar(false)}>Home</a>
                    <a href='#overview' className={sidebarStyle.li} onClick={() => setActionSidebar(false)}>Overview</a>
                    <a href='#features' className={sidebarStyle.li} onClick={() => setActionSidebar(false)}>Features</a>
                    <a href='#screesshots' className={sidebarStyle.li} onClick={() => setActionSidebar(false)}>Screesshots</a>
                    <a href='#plans' className={sidebarStyle.li} onClick={() => setActionSidebar(false)}>Plans</a>
            </ul>
            <div className={sidebarStyle.contentButton}>
                <ButtonDownload 
                    title="Download"
                />
            </div>
        </div>
    )
}
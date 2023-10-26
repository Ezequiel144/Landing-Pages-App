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
                <li className={sidebarStyle.li}>Home</li>
                <li className={sidebarStyle.li}>Overview</li>
                <li className={sidebarStyle.li}>Features</li>
                <li className={sidebarStyle.li}>Screesshots</li>
                <li className={sidebarStyle.li}>blog</li>
            </ul>
            <ButtonDownload 
                title="Download"
            />
        </div>
    )
}
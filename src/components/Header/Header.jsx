import headerStyle from './Header.module.css';
import logo from '../../assets/img/logo2.png';
import ButtonDownload from '../ButtoDownload/ButtonDownload';
import menu from '../../assets/icons/menu.png'
import { useContext, useState } from 'react';
import { providerSidebar } from '../../context/SidebarContext';
import { useEffect } from 'react';

export default function Header(){

    const [isActive,setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
    },[]);
    
    const {actionSidebar,setActionSidebar} = useContext(providerSidebar);

    const moveHeaderStyle = isActive ? {background: "#a873f1", transition: "0.3s all"} : {background:"transparent",transition: "0.3s all"};



    return(
        <header className={headerStyle.header} style={moveHeaderStyle}>
            <div className={headerStyle.contentAll}> 
                <div className={headerStyle.contentLogo}>
                    <img className={headerStyle.logo} src={logo} alt="logo" />
                </div>
                <div className={headerStyle.contentTwo}>
                    <div className={headerStyle.contentUl}>
                        <ul className={headerStyle.contentLi}>
                            <a href='#home' className={headerStyle.li}>Home</a>
                            <a href='#overview' className={headerStyle.li}>Overview</a>
                            <a href='#features' className={headerStyle.li}>Features</a>
                            <a href='#screesshots' className={headerStyle.li}>Screesshots</a>
                            <a href='#plans' className={headerStyle.li}>Plans</a>
                        </ul>
                    </div>
                    <img className={headerStyle.menu} src={menu} alt="menu" onClick={() => setActionSidebar(!actionSidebar)}/>
                    <div className={headerStyle.contentButton}>
                        <ButtonDownload title={"Download"}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
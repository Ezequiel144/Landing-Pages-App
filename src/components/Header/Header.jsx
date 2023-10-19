import headerStyle from './Header.module.css';
import logo from '../../assets/img/logo2.png';
import ButtonDownload from '../ButtoDownload/ButtonDownload';
import menu from '../../assets/icons/menu.png'

export default function Header(){
    return(
        <header className={headerStyle.header}>
            <div className={headerStyle.contentAll}> 
                <div className={headerStyle.contentLogo}>
                    <img className={headerStyle.logo} src={logo} alt="logo" />
                </div>
                <div className={headerStyle.contentTwo}>
                    <div className={headerStyle.contentUl}>
                        <ul className={headerStyle.contentLi}>
                            <li className={headerStyle.li}>Home</li>
                            <li className={headerStyle.li}>Overview</li>
                            <li className={headerStyle.li}>Features</li>
                            <li className={headerStyle.li}>Screesshots</li>
                            <li className={headerStyle.li}>blog</li>
                        </ul>
                    </div>
                    <img className={headerStyle.menu} src={menu} alt="menu" />
                    <div className={headerStyle.contentButton}>
                        <ButtonDownload title={"Download"}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
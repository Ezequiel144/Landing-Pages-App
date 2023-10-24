import sidebarStyle from './Sidebar.module.css';

// eslint-disable-next-line react/prop-types
export default function Sidebar({varSide,action}){
    return(
        <div className={sidebarStyle.contentSidebar} style={{display: action,right:varSide}}>
            
            <section>
                <h1>menu</h1>
                <p>X</p>
            </section>
            <ul className={sidebarStyle.contentLi}>
                <li className={sidebarStyle.li}>Home</li>
                <li className={sidebarStyle.li}>Overview</li>
                <li className={sidebarStyle.li}>Features</li>
                <li className={sidebarStyle.li}>Screesshots</li>
                <li className={sidebarStyle.li}>blog</li>
            </ul>
        </div>
    )
}
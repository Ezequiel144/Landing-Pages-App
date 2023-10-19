import downloadStyle from './ButtonDownload.module.css';

// eslint-disable-next-line react/prop-types
export default function ButtonDownload({title}){
    return <button className={downloadStyle.button}>{title}</button>
}
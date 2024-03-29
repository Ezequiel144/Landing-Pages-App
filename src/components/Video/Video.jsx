import videoStyle from './Video.module.css';

export default function Video({dataAosZoom}){
    return(
        <iframe /* data-aos={dataAosZoom} */ className={videoStyle.video} src="https://www.youtube.com/embed/iBvfhAuSdUQ?si=9d1Lf7xVM6fczVvv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
    )
}
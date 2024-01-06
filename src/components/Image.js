import React from "react";
import Fade from 'react-reveal/Fade';



const Image = ({source, caption, border}) => {

    return (
    <Fade>
    <div className="image-wrapper">
        <img className={border ? "page-image border" : "page-image"} src={source}></img>
        <figcaption>{caption}</figcaption>
    </div>    
    </Fade>          
     );
    }
    
export default Image;
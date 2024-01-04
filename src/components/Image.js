import React from "react";



const Image = ({source, caption, border}) => {

    return (
    <div className="image-wrapper">
        <img className={border ? "page-image border" : "page-image"} src={source}></img>
        <figcaption>{caption}</figcaption>
    </div>          
     );
    }
    
export default Image;
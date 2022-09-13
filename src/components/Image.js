import React from "react";



const Image = ({source, caption}) => {

    return (
    <div className="image-wrapper">
        <img className="page-image" src={source}></img>
        <figcaption>{caption}</figcaption>
    </div>          
     );
    }
    
export default Image;
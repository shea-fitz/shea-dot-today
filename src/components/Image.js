import React from "react";



const Image = ({source, caption}) => {

    return (
    <div>
        <img src={source}></img>
        <figcaption>{caption}</figcaption>
    </div>          
     );
    }
    
export default Image;
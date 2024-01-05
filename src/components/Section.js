import React from "react";
import ReactHtmlParser from 'react-html-parser';


import Image from "./Image";
import Details from "./Details";


const Section = ({title, hero, contents, intention, milestone, favorite, alt1, alt2, favImg}) => {

      const parsedContent = ReactHtmlParser(contents);
    
    
    return (
    <div className="section">
       <h2>{title}</h2>

        <Image
        source={hero}
        border={true}
        />

        <p class="paragraph">{parsedContent}</p>

            {alt1 ? <Image
                source={alt1}
                border={true}
                />
             : ''}            

            {alt2 ? <Image
                source={alt2}
                border={true}
                />
             : ''}

        <Details
            intention={intention}
            milestone={milestone}
            favorite={favorite}
        />

        {favImg ? <Image
                source={favImg}
                border={true}
                />
             : ''}  
      
    </div>
     );
    }
    
export default Section;
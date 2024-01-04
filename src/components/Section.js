import React from "react";

import Image from "./Image";
import Details from "./Details";


const Section = ({title, hero, contents, intention, milestone, favorite, alt1, alt2}) => {

    const formattedContent = contents.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br />
        </React.Fragment>
      ));
    
    
    return (
    <div className="section">
       <h2>{title}</h2>

        <Image
        source={hero}
        border={true}
        />

        <p class="paragraph">{formattedContent}</p>

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
      
    </div>
     );
    }
    
export default Section;
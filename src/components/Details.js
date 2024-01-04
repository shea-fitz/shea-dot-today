import React from "react";

const Details = ({intention, milestone, favorite}) => {

    return (
        <div className="details">
        <div className="detail-column">
        <h3 className="reset-margin">Intentions</h3>
        {intention}

        </div>

        <div className="detail-column">
        <h3 className="reset-margin">Milestones</h3>
        {milestone}

        </div>

        <div className="detail-column">
        <h3 className="reset-margin">Favorite Feature</h3>
        {favorite}
        </div>

        </div>        
     );
    }
    
export default Details;
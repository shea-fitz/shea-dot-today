import React from "react";

const Details = ({intention, milestone, favorite}) => {

    const hasMultipleIntentions = intention.includes(',');
    const hasMultipleMilestones = milestone.includes(',');

    return (
        <div className="details">
        <div className="detail-column">
        <h3 className="reset-margin">Intentions</h3>
        {hasMultipleIntentions ? (
          <ul>
            {intention.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        ) : (
          intention
        )}

        </div>

        <div className="detail-column">
        <h3 className="reset-margin">Milestones</h3>
        {hasMultipleMilestones ? (
          <ul>
            {milestone.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        ) : (
          milestone
        )}

        </div>

        <div className="detail-column">
        <h3 className="reset-margin">Favorite Feature</h3>
        {favorite}
        </div>

        </div>        
     );
    }
    
export default Details;
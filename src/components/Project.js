import React from 'react';

const Project = ({cover, title, year, type, description}) => {

return (
        <div className="proj-container">
            <div className="proj-img-container">
                <img className="cover" src={cover}/>
            </div>
            <div className="proj-content">
                <div className="space-between">
                    <div className="proj-title">{title}</div>
                    <div className="proj-year">[{year}]</div>
                </div>
                <div className="proj-desc">{description}</div>
                <div className="proj-type">{type}</div>
                {/* <div className="proj-context">{context}</div> */}
            </div>
        </div>   
 );
}

export default Project;
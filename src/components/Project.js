import React from 'react';
import client from '../icons/client.svg';
import personal from '../icons/personal.svg';

const Project = ({cover, title, year, type, description, context}) => {

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
                <div>
                    <div className="proj-desc">{description}</div>
                <div className="space-between">
                    <div className="proj-type">{type}</div>
                    <img className="icon proj-context" src={context==='personal' ? personal : client}></img>
                </div>
                   
                </div>
                
                {/* <div className="proj-context">{context}</div> */}
            </div>
        </div>   
 );
}

export default Project;
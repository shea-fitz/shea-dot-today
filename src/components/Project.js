import React from 'react';
import client from '../icons/client.svg';
import personal from '../icons/personal.svg';
import { Link } from "react-router-dom";


const Project = ({cover, title, year, type, description, context, link, target}) => {

return (
    <div className="proj-container">

        <a href={link} target={target} className={link && target==='_blank' ? 'project-link out' : link && target==='_self' ? 'none' : 'no-link'}>

            <div className="proj-img-container">
                <img className="cover" src={cover}/>
            </div>

            <div className='proj-content'>
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
            </div> 
        </a> 

        <Link to={link} target={target} className={link && target==='_self' ? 'project-link pointer' : 'none'}>
            <div className="proj-img-container">
                    <img className="cover" src={cover}/>
                </div>

                <div className='proj-content'>
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
                </div> 
        </Link>



    </div>         
 );
}

export default Project;
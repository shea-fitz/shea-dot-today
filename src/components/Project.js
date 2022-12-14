import React, { useState } from 'react';
import client from '../icons/client.svg';
import personal from '../icons/personal.svg';
import { Link } from "react-router-dom";
import out from '../icons/out.svg'


const Project = ({cover, caseStudy, title, year, type, description, context, link, target}) => {

    const [blur, setBlur] = useState(true);

return (
    <div className="proj-container" onMouseEnter={() => setBlur(!blur)} onMouseLeave={() => setBlur(!blur)}>
        <a href={link} target={target} className={link && target==='_blank' ? 'project-link out' : link && target==='_self' ? 'none' : 'no-link'}>

            <div className="proj-img-container">
                <img className={blur ? 'cover' : 'cover-hover'}  src={cover}/>
            </div>

            <div className='proj-content'>
                <div className="space-between">
                    <div className="proj-title">{title}<img className={link && target==='_blank' ? "icon out-icon" : 'none'} src={out}/></div>
                <div>
                    <div className="proj-year">[{year}]</div>
                </div>
                    
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
                    <img className={blur ? 'cover' : 'cover-hover'} src={cover}/>
                </div>

                <div className='proj-content'>
                    <div className="space-between">
                        <div className="proj-title">{title}</div>
                        <div className="proj-year">[{year}]</div>
                    </div>

                    <div>
                        <div className="proj-desc">{description}</div>
                        <div className="space-between">
                        <div className="pills">
                            <div className={caseStudy ? 'case-study' : 'none'}>Case Study</div>
                            <div className="proj-type">{type}</div>
                        </div>
                            
                            <img className="icon proj-context" src={context==='personal' ? personal : client}></img>
                        </div>
                    </div> 
                </div> 
        </Link>
    </div>         
 );
}

export default Project;
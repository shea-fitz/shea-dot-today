import React from 'react';
import { writing } from '../data/writing';

const Writing = ({title, source, link, year}) => {
return (
    <div className="space-around">
        <div>
            <a href={link} target="_blank" className="writing-link">{title}</a>, {source}
        </div>
        <div>
            {year}
        </div>
    </div>
       
 );
}

export default Writing;
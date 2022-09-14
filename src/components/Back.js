import React from "react";
import { Link } from 'react-router-dom';
import back from '../icons/back.svg';




const Back = () => {

    return (
    <div>
            <Link to='/' className="back"><img src={back} className="icon"/>home</Link>

    </div>          
     );
    }
    
export default Back;
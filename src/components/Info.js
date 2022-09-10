import React from 'react';
import arena from '../icons/arena.svg';
import mail from '../icons/mail.svg';

const Info = () => {

return (
<div className="info">
    <p>Shea Fitzpatrick is a designer with an intuition for visual systems and understated narratives. Shea works as a product designer at Giant Machines, a software agency that focuses on social impact and furthering computer science education. </p>

    <span className="contact"><img className="icon" src={arena}></img> <a href="https://are.na/shea" target="_blank" className="contact-link">are.na/shea</a></span>
    <span className="contact"><img className="icon" src={mail}></img> sheafitz10@gmail.com</span>
</div>          
 );
}

export default Info;
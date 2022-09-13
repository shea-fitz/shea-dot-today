import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
  
const People = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Two People in a Room Over Time'
              type='Illustration, Exhibition'
              year='Summer 2019'
            />

        <p className="paragraph">
        <i>Two People in a Room Over Time</i> is a sequential series of prints inspired by "a big room with not enough furniture." <i>Two People in a Room Over Time</i> was developed as a member of <a href="http://crit.nyc/" target="_blank">Crit</a> and exhibited as a series of 4-color Risograph prints at <a href="https://www.oncanal.nyc/" target="_blank">Wallplay's ON CANAL Experience</a> .
        </p>

        </div>
    </div>
  );
};
  
export default People;
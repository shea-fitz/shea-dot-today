import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Back from '../components/Back';

  
const TBrand = () => {
  return (
    <Fade>
    <div className="page-wrapper">

    <div className="back-button">
    <Back/>
    </div>


        <div className="page-content">
          <PageHeader
              title='T Brand Studio'
              type='Design'
              year='2026'
            />

        <h3>Client</h3>

        <p className="paragraph">
        TBD
        </p>


        <h3>Ask</h3>

        <p className="paragraph">
        TBD
        </p>

        <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            TBD
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Collaborators</h3>
            TBD
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Tools</h3>
            TBD
        </div>



        </div>


        <h3>Process</h3>

        <p className="paragraph last-p">
        TBD
        </p>

        <h3>Logo</h3>

        <p className="paragraph last-p">
        TBD
        </p>

        <h3>Result</h3>

        <p className="paragraph">
        TBD
        </p>

        </div>
      
    </div>
    </Fade>
  );
};
  
export default TBrand;

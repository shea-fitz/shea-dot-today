import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
  
const Atlas = () => {
  return (
    <div className="page-wrapper">
        <Back/>

        <div className="page-content">
          <PageHeader
              title='Altana Atlas'
              type='Product Design'
              year='Winter 2022'
            />



        <h3>Client</h3>
        <p className="paragraph"><a href="https://altana.ai/" target="_blank">Altana</a> is seeking to create a single source of truth on global supply chain. I was embedded in an Altana team while a Product Designer at <a href="https://www.giantmachines.com/" target="_blank">Giant Machines</a>.</p>

        <h3>Ask</h3>

        <p className="paragraph">I worked on a number of search features and graphing tools for the Altana Atlas.</p>
        
        <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            <p>3 months</p>
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Team</h3>
              Myself (Product Designer) <br/>
              Technical Product Manager <br/>
              Software Engineers <br/>

          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Tools</h3>
            Figma, ReGraph
        </div>


        </div>
      
    </div>

  </div>
      
  );
};
  
export default Atlas;
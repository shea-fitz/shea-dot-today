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
              title='Atlas'
              type='Product Design'
              year='Winter 2022'
            />



         <h3>Coming Soon</h3>
        <p className="paragraph">While a Product Designer at <a href="https://www.giantmachines.com/" target="_blank">Giant Machines</a>, I was embedded in a client team and worked on a number of search features and network visualization tools for an AI-driven supply chain database.</p>


        {/* <h3>Ask</h3> */}

        {/* <p className="paragraph"></p> */}
        
        {/* <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            3 months
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
        </div> */}



        </div>
      
    </div>
      
  );
};
  
export default Atlas;
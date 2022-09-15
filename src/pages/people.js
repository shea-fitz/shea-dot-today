import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import { useEffect, useState } from 'react';
import axios from 'axios';

import display from '../media/people/010.jpg';

  
const People = () => {
  const [images, setImg] = useState(null);

  useEffect(() => {
    axios.get('https://api.are.na/v2/channels/two-people-in-a-room-over-time-2019-6xgt2jc2_dm').then(res => {
      setImg(res.data.contents);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="page-wrapper">
        <Back/>

        <div className="page-content">
          <PageHeader
              title='Two People in a Room Over Time'
              type='Illustration, Exhibition'
              year='Summer 2019'
            />

        <p className="paragraph">
        <i>Two People in a Room Over Time</i> is a sequential series of prints inspired by "a big room with not enough furniture." <i>Two People in a Room Over Time</i> was developed as a member of <a href="http://crit.nyc/" target="_blank">Crit</a> and exhibited as a series of 4-color Risograph prints at <a href="https://www.oncanal.nyc/" target="_blank">Wallplay's ON CANAL Experience</a> .
        </p>

        <div className="image-gallery">
          {images && images.map(el => {
                return (<div className="column-half"><Image key={el.key} source={el.image.original.url}/></div>)
              })}  
        </div>

       <Image source={display} caption='Gallery display'/>

        </div>
    </div>
  );
};
  
export default People;
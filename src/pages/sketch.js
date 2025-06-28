import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import { useEffect, useState } from 'react';
import axios from 'axios';
  
const Sketch = () => {
  const [images, setImg] = useState(null);

  useEffect(() => {
    axios.get('https://api.are.na/v2/channels/website-gallery-2').then(res => {
      setImg(res.data.contents);
    }).catch(err => console.log(err));
  }, []);

  return (
    <Fade>
    <div className="page-wrapper">
           <div className="back-button">
    <Back/>
    </div>

        <div className="page-content">
          <PageHeader
              title='Ink Drawings'
              type='Illustration'
              year='2021 - 2024'
            />

        <p className="paragraph">

          
        </p>

         <div className="image-gallery">
          {images && images.map(el => {
                return (<div className="column-third"><Image key={el.key} source={el.image.original.url}/></div>)
              })}  
        </div>

        </div>
    </div>
    </Fade>
  );
};
  
export default Sketch;
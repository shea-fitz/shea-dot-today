import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
  
const Sketch = () => {
  const [images, setImg] = useState(null);

  useEffect(() => {
    axios.get('https://api.are.na/v2/channels/website-gallery-siuqv3hfpny').then(res => {
      setImg(res.data.contents);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Digital Drawings'
              type='Illustration, Animation'
              year='2018 - 2020'
            />

        <p className="paragraph">

          
        </p>

         <div className="image-gallery">
          {images && images.map(el => {
                return (<div className="column"><Image key={el.key} source={el.image.original.url}/></div>)
              })}  
        </div>

        </div>
    </div>
  );
};
  
export default Sketch;
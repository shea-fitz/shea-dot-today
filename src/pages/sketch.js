import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import { Link } from 'react-router-dom';

import {drawings} from '../data/drawings';

  
const Sketch = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Digital Drawings'
              type='Illustration, Animation'
              year='2018 - 2020'
            />


            <div className="image-gallery">
            {drawings.map(drawing => (
              <div className="column">
                <Image
                    source={drawing.source}
                  />
              </div>
                ))}     
            </div>

        </div>
    </div>
  );
};
  
export default Sketch;
import React from 'react';
import { Roulette } from './style.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../../Medias/imgs/consultoria-1.jpg';
import image2 from '../../Medias/imgs/consultoria-2.png';
import image3 from '../../Medias/imgs/consultoria-3.jpg';
import image4 from '../../Medias/imgs/consultoria-4.jpg';
import image5 from '../../Medias/imgs/consultoria-5.jpg';

export default function() {

  return (
    <React.Fragment>
      <Roulette>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg"/>
          <img src={image2} className="sliderimg"/>
          <img src={image3} className="sliderimg"/>
          <img src={image4} className="sliderimg"/>
        </AliceCarousel>
      </Roulette>
    </React.Fragment>
  )
}

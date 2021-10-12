import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import VolumeBanner from '../../components/VolumeBanner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => ( 
    <div className="fit carousel-wrapper" >
        <Carousel showThumbs={false} infiniteLoop autoPlay showArrows={false} showIndicators={false} showStatus={false}>
            <VolumeBanner />
            <VolumeBanner />
            <VolumeBanner />
            <VolumeBanner />
        </Carousel>
    </div>
);
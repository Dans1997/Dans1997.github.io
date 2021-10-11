import React from 'react';
import VolumeBanner from './VolumeBanner';
import '../css/discover.css'

const Discover = () => (
    <div>
        <span className='discover-text'> Discover New Books </span>
        <span className='link-right'> More </span>
        <VolumeBanner />
    </div>
);

export default Discover;
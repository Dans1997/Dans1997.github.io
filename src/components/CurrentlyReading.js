import React from 'react';
import '../css/currentlyreading.css';

const CurrentlyReading = () => (
    <div>
        <span className='text'> Currently Reading </span>
        <span className='link'> All </span>
        <div className='background-image' />
        <img className='currently-reading-cover' src={require('../images//volume_cover.png').default} alt=''/>
        <span className='current-volume-title'> Originals </span>
        <span className='volume-author'> by Adam Grant </span>
        <img className='chapter-icon' src={require('../images//chapter-icon.png').default} alt=''/>
        <span className='chapter-text'> Chapter <span className='red-text'> 2 </span> of 9 </span>
        <img className='red-rectangle' src={require('../images//red-rectangle.png').default} alt=''/>
        <img className='currently-reading-fingerprint' src={require('../images//round_fingerprint.png').default} alt=''/>
        <img className='currently-reading-bluecircle' src={require('../images//blue_circle.png').default} alt=''/>
    </div>
);

export default CurrentlyReading;
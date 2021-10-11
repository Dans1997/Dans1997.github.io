import React from 'react';
import '../css/currentlyreading.css';

const CurrentlyReading = () => (
    <div>
        <span className='text'> Currently Reading </span>
        <span className='link'> All </span>
        <div className='background-image' />
        <img className='currently-reading-cover' src={require('../../public/volume_cover.png')} alt=''/>
        <span className='current-volume-title'> Originals </span>
        <span className='volume-author'> by Adam Grant </span>
        <img className='chapter-icon' src={require('../../public/chapter-icon.png')} alt=''/>
        <span className='chapter-text'> Chapter <span className='red-text'> 2 </span> of 9 </span>
        <img className='red-rectangle' src={require('../../public/red-rectangle.png')} alt=''/>
        <img className='currently-reading-fingerprint' src={require('../../public/round_fingerprint.png')} alt=''/>
        <img className='currently-reading-bluecircle' src={require('../../public/blue_circle.png')} alt=''/>
    </div>
);

export default CurrentlyReading;
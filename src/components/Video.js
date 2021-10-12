import React from 'react';
import '../css/video.css';

export const Video = () => (
    <div className='flexbox column wrap'>
        <img className='video-cover' src={require('../images//video-cover.png').default} alt=''/>
        <div className='flexbox wrap'>
            <span className='video-title'> Don't Make Me Think </span>
            <div className='flexbox column'>
                <span className='video-text'> Jesse Showalter </span>
                <span className='video-text'> 5K Views </span>
                <span className='video-text'> 1 Week Ago </span>
            </div>
        </div>
    </div>
);
import React from 'react';
import '../css/video.css';

export const Video = () => (
    <div className='video-parent'>
        <img className='video-cover' src={require('../images//video-cover.png').default} alt=''/>
        <span className='video-title'> Don't Make Me Think </span>
        <span className='video-creator'> Jesse Showalter </span>
        <span className='video-views'> 5K Views </span>
        <span className='video-date'> 1 Week Ago </span>
    </div>
);
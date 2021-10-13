import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/currentlyreading.css';

const CurrentlyReading = () => {
    const history = useHistory();

    function onClick(e)
    {
        e.preventDefault();
        history.push('/details/rISmCgAAQBAJ');
    }

    return (
        <div className='fit'>
            <div className='flexbox row'>
                <span className='home-section-title'> Currently Reading </span>
                <span className='link-text'> All </span>
            </div>

            <div className='currently-reading-container'>
                <div className='flexbox fit column currently-reading-info'>
                    <div className='background-image' />    
                    <button className='cover-button' onClick={onClick}>
                        <img className='currently-reading-cover' src={require('../images/originals-cover.png').default} alt=''/>
                    </button>   
                    <span className='current-volume-title'> Originals </span>
                    <span className='volume-author'> by Adam Grant </span>
                    
                    <div className='flexbox row fit current-chapter-container'>
                        <img className='chapter-icon' src={require('../images/chapter-icon.png').default} alt=''/>
                        <span className='chapter-text'> Chapter <span className='red-text'> 2 </span> of 9 </span>
                    </div>
        
                    <img className='red-rectangle' src={require('../images/red-rectangle.png').default} alt=''/>
                    <img className='currently-reading-fingerprint' src={require('../images/round_fingerprint.png').default} alt=''/>
                    <img className='currently-reading-bluecircle' src={require('../images/blue_circle.png').default} alt=''/>
                </div>
            </div>
        </div>
    );  
};

export default CurrentlyReading;
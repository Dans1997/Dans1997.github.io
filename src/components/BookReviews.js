import React from 'react';
import { Video } from './Video';

const BookReviews = () => (
    <div className='fit'>
        <div className='flexbox row'>
            <span className='home-section-title'> Reviews of The Day </span>
            <span className='link-text'> All </span>
        </div>
        <Video />
    </div>
);

export default BookReviews;
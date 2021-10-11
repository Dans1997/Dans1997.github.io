import React from 'react';
import '../css/bookreviews.css' 
import { Video } from './Video';

const BookReviews = () => (
    <div>
        <span className='review-text'> Reviews of The Day </span>
        <span className='reviews-link'> All Videos </span>
        <Video />
    </div>
);

export default BookReviews;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import Discover from './Discover';
import CurrentlyReading from './CurrentlyReading';
import BookReviews from './BookReviews';
import Footer from './Footer';
import { selectUsername } from '../features/login/loginSlice'

const Home = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div> Hi, {useSelector(selectUsername)}! :P </div> 
            <Discover />
            <CurrentlyReading />
            <BookReviews />
            <Footer />
        </div> 
    )
}

export default Home;
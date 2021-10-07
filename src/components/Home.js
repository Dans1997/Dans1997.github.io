import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Discover from './Discover';
import CurrentlyReading from './CurrentlyReading';
import BookReviews from './BookReviews';
import Footer from './Footer';

const Home = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div> Hi, UserName! :P </div> 
            <Discover />
            <CurrentlyReading />
            <BookReviews />
            <Footer />
        </div> 
    )
}

export default Home;
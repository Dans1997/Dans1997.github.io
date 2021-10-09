import React from 'react';
import { useSelector} from 'react-redux';

import SearchBar from '../features/search/searchBar';
import Discover from './Discover';
import CurrentlyReading from './CurrentlyReading';
import BookReviews from './BookReviews';
import Footer from './Footer';

import { selectUsername } from '../features/login/loginSlice';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <div> Hi {useSelector(selectUsername) ? `, ${useSelector(selectUsername)}!` : null} :P </div> 
            <Discover />
            <CurrentlyReading />
            <BookReviews />
            <Footer />
        </div> 
    )
}

export default Home;
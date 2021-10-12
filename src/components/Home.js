import React from 'react';
import { useSelector} from 'react-redux';
import SearchBar from '../features/search/searchBar';
import Discover from './Discover';
import CurrentlyReading from './CurrentlyReading';
import BookReviews from './BookReviews';
import Footer from './Footer';
import Carousel from '../features/carousel/Carousel';
import { selectUsername } from '../features/login/loginSlice';
import '../css/home.css';

const UserText = () =>
{
    const username = useSelector(selectUsername);
    if (username) return <span>Hi, <span className='red-text'> {username} </span> </span>;
    else return <span> Hi! </span>;
}

export default () => (
    <div>
        <div className='container'>
            <SearchBar searchOnInput={false}/>
            <div className='home-section-title'> 
                {UserText()}
                <img src={require('../images/hand-emoji.png').default} alt=''/>
            </div> 
            <Discover />
            <Carousel />
            <CurrentlyReading />
            <BookReviews />
        </div> 
        <Footer />
    </div>
)
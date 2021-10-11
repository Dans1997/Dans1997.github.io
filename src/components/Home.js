import React from 'react';
import { useSelector} from 'react-redux';
import SearchBar from '../features/search/searchBar';
import Discover from './Discover';
import CurrentlyReading from './CurrentlyReading';
import BookReviews from './BookReviews';
import Footer from './Footer';
import { selectUsername } from '../features/login/loginSlice';
import '../css/home.css';

const userText = () =>
{
    const username = useSelector(selectUsername);
    if (username) return <span>Hi, <span className='red-text'> {username} </span> </span>;
    else return <span> Hi! </span>;
}

export default () => (
    <div>
        <SearchBar searchOnInput={false}/>
        <div className='user-text'> 
            {userText()}
            <img src={require('../../public/hand-emoji.png')} alt=''/>
        </div> 
        <Discover />
        <CurrentlyReading />
        <BookReviews />
        <Footer />
    </div> 
)
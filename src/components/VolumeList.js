import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'; 
import { selectAllVolumes } from '../features/search/searchSlice';
import '../css/volumelist.css';


const Volume = (book) =>
{
    const history = useHistory();
    const volumeCover = require('../images//volume_cover.png').default;
    return (
        <button className='volume-button flexbox column' key={book.id} onClick={(e) => history.push(`/details/${book.id}`)}>
            <img className='cover' src={volumeCover} alt='?'/>
            <span className='title'>{book.volumeInfo.title}</span> <br />
            <span className='author'>by {book.volumeInfo.authors || '-'}</span>
        </button>
    );
}

export default () => {
    const books = useSelector(selectAllVolumes);
    const status = useSelector(state => state.search.status);
    console.log(books)
    
    return (
        <>
            {status === 'loading' && <div className='spinner'><ClipLoader loading={status === 'loading'} size={15}/></div>}
            <div className='list flexbox row wrap'>
                { status === 'succeeded' && books && <>{books.map((book) => Volume(book))}</>}
            </div>
        </>
    );
}
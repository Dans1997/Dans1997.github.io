import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'; 
import { selectAllVolumes, getVolumes } from '../features/search/searchSlice';
import '../css/volumelist.css';


const volume = (book) =>
{
    const history = useHistory();
    const volumeCover = require('../../public/volume_cover.png');
    return (
        <button className='volume-button' key={book.id} onClick={(e) => history.push(`/details/${book.id}`)}>
            <img className='cover' src={volumeCover} alt='?'/>
            <span className='title'>{book.volumeInfo.title}</span> <br />
            <span className='author'>by {book.volumeInfo.authors || '-'}</span>
        </button>
    );
}

export default () => {
    const dispatch = useDispatch();
    const books = useSelector(selectAllVolumes);
    const status = useSelector(state => state.search.status);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getVolumes());
        }
    }, [status, dispatch])

    return (
        <div>
            <div className='spinner'><ClipLoader loading={status === 'loading'} size={15}/></div>
            { status === 'succeeded' && <div className='volume-grid'>
                {books && books.map((book) => volume(book))}
            </div> }
        </div>
    );
}
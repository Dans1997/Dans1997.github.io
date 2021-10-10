import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'; 
import { selectAllVolumes, getVolumes } from '../features/search/searchSlice';

const VolumeList = () => {
    const history = useHistory();
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
            <ClipLoader loading={status === 'loading'} size={15} />
            <ul>
                {books && books.map((book) => (
                    <button key={book.id} onClick={(e) => history.push(`/details/${book.id}`)}><li>{book.volumeInfo.title}</li></button>     
                ))}
            </ul>
        </div>
    );
}

export default VolumeList;
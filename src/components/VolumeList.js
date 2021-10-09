import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader'; 
import { selectAllVolumes, getVolumes } from '../features/search/searchSlice';

const VolumeList = () => {
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
                    <li key={book.id}>{book.volumeInfo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default VolumeList;
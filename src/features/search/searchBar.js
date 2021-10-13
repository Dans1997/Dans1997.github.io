import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetVolumes, getVolumes } from './searchSlice';
import '../../css/searchbar.css';

const SearchBar = ({searchOnInput}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = new URLSearchParams(window.location).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    useEffect(() => {      
        const delayDebounceFn = setTimeout(() => {
            if (searchOnInput === true && searchQuery != '') {
                dispatch(resetVolumes());
                dispatch(getVolumes(searchQuery));
                history.push(`/search?s=${searchQuery}`);
            }
        }, 1000);
    
        return () => clearTimeout(delayDebounceFn)
    }, [searchQuery])

    function onSubmit(e) {
        e.preventDefault();
        dispatch(resetVolumes());
        if (searchQuery)
        {
            dispatch(getVolumes(searchQuery));
            history.push(`/search?s=${searchQuery}`);
        }
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
            <div className='rectangle'>
                <img className='search-icon' src={require('../../images/search-icon.png').default} alt=''/>
                <input
                    className='rectangle'
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    name="s"
                    placeholder="Search for a book here!"
                >
                </input>
            </div>
        </form>
    );
};

export default SearchBar;

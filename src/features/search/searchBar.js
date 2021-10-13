import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getVolumes } from './searchSlice';
import '../../css/searchbar.css';

const SearchBar = ({searchOnInput}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = new URLSearchParams(window.location).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const searchIcon = require('../../images/search-icon.png').default;

    function onInput(e) {
        e.preventDefault();
        setSearchQuery(e.target.value);
        if (searchOnInput === true)
        {
            console.log(e.target.value)
            dispatch(getVolumes(e.target.value));
            history.push(`/search?s=${e.target.value}`);
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (searchQuery)
        {
            dispatch(getVolumes(searchQuery));
            history.push(`/search?s=${searchQuery}`);
        }
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
            <div className='rectangle'>
                <img className='search-icon' src={searchIcon} alt=''/>
                <input
                    className='rectangle'
                    value={searchQuery}
                    onInput={onInput}
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

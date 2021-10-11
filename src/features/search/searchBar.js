import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getVolumes } from './searchSlice'
import '../../css/searchbar.css'

const SearchBar = ({searchOnInput}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = new URLSearchParams(window.location).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const searchIcon = require('../../../public/search-icon.png');

    function onInput(e) {
        e.preventDefault();
        setSearchQuery(e.target.value);
        if (searchOnInput === true)
        {
            dispatch(getVolumes(searchQuery));
            history.push(`/search?s=${searchQuery}`);
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
        <div>
            <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
                <img className='search-icon' src={searchIcon} />
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
            </form>
        </div>
    );
};

export default SearchBar;

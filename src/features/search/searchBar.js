import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getVolumes } from './searchSlice'

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    function onSubmit(e) {
        e.preventDefault();
        history.push(`/search?s=${searchQuery}`);
        dispatch(getVolumes(searchQuery));
    };

    return (
        <div>
            <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search: </span>
                </label>
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search books"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;

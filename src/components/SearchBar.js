import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`/search?s=${searchQuery}`)
        e.preventDefault()
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

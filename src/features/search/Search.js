import React from 'react';
import { useHistory } from 'react-router-dom';
import VolumeList from '../../components/VolumeList';
import SearchBar from './searchBar';

const Search = () => {
    const history = useHistory();

    return (
        <div>
            <button className="button" aria-label="Login" onClick={() => history.push("/home")}> Back </button>
            <SearchBar />
            <VolumeList />
        </div>
    );
};
  
export default Search;
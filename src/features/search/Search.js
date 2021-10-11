import React from 'react';
import BackButton from '../../components/BackButton';
import VolumeList from '../../components/VolumeList';
import SearchBar from './searchBar';

const Search = () => {
    return (
        <div>
            <BackButton />
            <SearchBar searchOnInput={true}/>
            <VolumeList />
        </div>
    );
};
  
export default Search;
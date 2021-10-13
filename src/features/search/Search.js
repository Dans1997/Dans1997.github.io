import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/Footer';
import VolumeList from '../../components/VolumeList';
import SearchBar from './searchBar';
import { getVolumes, loadMore } from './searchSlice';

const Search = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.search.status);
    const query = window.location.search.split('=')[1];

    function load(e)
    {
        e.preventDefault();
        dispatch(loadMore(10));
        dispatch(getVolumes(query));
    }

    return (
        <>
            <SearchBar searchOnInput={true}/>
            <VolumeList />

            {status === 'succeeded' && query != "" &&
            <div className='flexbox row load-more-container'>
                <button className='load-more-button' onClick={load}> Load More </button>
            </div>}

            <Footer />
        </>
    );
};
  
export default Search;
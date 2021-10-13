import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { fetchVolumes } from '../../api/googleapi';

// Async Volume Fetching 
export const getVolumes = createAsyncThunk('search/getVolumes', async (query, {getState}) => {
    return await fetchVolumes(query, getState().search.startIndex);
})

export const slice = createSlice({
    name: 'search',
    initialState: {
        volumes: [],
        startIndex: 0,
        status: 'idle' | 'loading' | 'succeeded' | 'failed',
        error: null
    },
    reducers: {   
        resetVolumes:
        {
            reducer(state)
            {
                state.volumes = []; 
                state.startIndex = 0; 
            }
        },   
        loadMore:
        {
            reducer(state, action)
            {
                state.startIndex += action.payload;           
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getVolumes.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getVolumes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (action.payload && action.payload.length > 0) state.volumes = _.uniq(state.volumes.concat(action.payload));
                else state.volumes = action.payload;
            })
            .addCase(getVolumes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { resetVolumes, loadMore } = slice.actions;


// Search result selectors
export const selectAllVolumes = state => state.search.volumes;
export const selectStartIndex = state => state.search.startIndex;
  
export default slice.reducer;
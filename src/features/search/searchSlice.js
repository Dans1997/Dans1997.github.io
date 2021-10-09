import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVolumes } from '../../api/googleapi';

// Async Volume Fetching 
export const getVolumes = createAsyncThunk('search/getVolumes', async (query) => {
    return await fetchVolumes(query);
})

export const slice = createSlice({
    name: 'search',
    initialState: {
        volumes: [],
        status: 'idle' | 'loading' | 'succeeded' | 'failed',
        error: null
    },
    reducers: {
        volumesLoaded: {
            reducer(state, action) {
                state.volumes.push(action.payload);
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
                state.volumes = action.payload;
            })
            .addCase(getVolumes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { volumesLoaded } = slice.actions;


// Search result selectors
export const selectAllVolumes = state => state.search.volumes;
export const selectVolumeByID = (state, volumeId) => state.search.volumes.find(v => v.id === volumeId);
  
export default slice.reducer;
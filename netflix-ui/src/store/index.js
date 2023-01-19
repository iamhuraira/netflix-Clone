import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api_Key, TMBD_BASE_URL } from '../utils/constants';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};
export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const data = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${Api_Key}`);
    console.log(data);
 });

const NetlixSlice = createSlice({
    name: 'netflix',
    initialState,
    extraReducers: (builder) => { 
        builder.addCase(getGenres.fulfilled, (state, action) => { 
            state.genres = action.payload;
            state.genresLoaded = true;
        });   
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetlixSlice.reducer,
    }
});
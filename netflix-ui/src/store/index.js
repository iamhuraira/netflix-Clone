import { async } from '@firebase/util';
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api_Key, TMBD_BASE_URL } from '../utils/constants';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};
export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const {data: {genres},} = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${Api_Key}`);
    return genres;
});
const getRawData = (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i<10; i++) {
 }
export const fetchMovies = createAsyncThunk('netflix/trending', async ({ type }, thunkApi) => {
    const { netflix: { genres }, } = thunkApi.getState();
    return getRawData(`${TMBD_BASE_URL}/trending/${type}/week?api_key=${Api_Key}` , genres, true);
 })

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



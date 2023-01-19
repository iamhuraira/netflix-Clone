import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

const NetlixSlice = createSlice({
    name: 'netflix',
    initialState,
    extraReducers: (builder) => { },
});

export const store = configureStore({
    reducer: {
        netflix: NetlixSlice.reducer,
    }
});
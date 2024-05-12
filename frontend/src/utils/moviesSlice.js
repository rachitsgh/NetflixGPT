import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies:[],
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    airingTodayShows:[],
    trailerVideo:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
    addAiringTodayShows:(state,action)=>{
      state.airingTodayShows=action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addAiringTodayShows } = moviesSlice.actions;

export default moviesSlice.reducer;

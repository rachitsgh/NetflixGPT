import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  return (
    <div>
      <Header/>
      {showGptSearch?<GPTSearch/>:
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      }
      {/* 
        MainContainer
          - video background
          - video tittle
        Secondary Container
          - MovieList * N
            - cards * N
      */}
    </div>
  )
}

export default Browse
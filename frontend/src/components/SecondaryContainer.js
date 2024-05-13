import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function SecondaryContainer() {
  // usePopularMovies();
  const movies = useSelector(store=>store.movies)
  // console.log(movies.nowPlayingMovies)
  return (
    <div className=' bg-black'>
      <div className='-mt-52 z-50 relative'>
        <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Up Coming Movies"} movies={movies.upcomingMovies}/>
      </div>
      {/* 
        MovieList - Popular
          MovieCard * n
        MovieList - Now Playing
        MovieList - Horror
        MovieList - trending
      */}

    </div>
  )
}

export default SecondaryContainer
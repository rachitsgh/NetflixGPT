import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function SecondaryContainer() {
  const movies = useSelector(store=>store.movies)
  // console.log(movies)
  return (
    <div>
      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies}/>
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
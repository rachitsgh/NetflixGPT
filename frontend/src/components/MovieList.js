import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    // console.log(movies)
    // const movieTitle=movies[4].title;
    // const poster_path=movies[4].poster_path;
  return (
    <div className='px-6'>
      <h1 className='text-white text-3xl py-2'>{title}</h1>
        <div className='flex overflow-x-scroll space-x-4 py-2'>
            <div className='flex shrink-0'>
                {/* {console.log(movies)} */}
                {movies.map((movie)=> <MovieCard key={movie?.id} Movie_title={movie?.title} poster_path={movie?.poster_path}/>)}
                {/* poster_path={poster_path} */}
                {/* /> */}
            </div>
        </div>
    </div>
  )

}

export default MovieList
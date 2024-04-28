import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    console.log(movies)
    // const movieTitle=movies[4].title;
    // const poster_path=movies[4].poster_path;
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>
                {/* {console.log(movies)} */}
                <MovieCard movies={movies}/>
                {/* poster_path={poster_path} */}
                {/* /> */}
            </div>
        </div>
    </div>
  )
}

export default MovieList
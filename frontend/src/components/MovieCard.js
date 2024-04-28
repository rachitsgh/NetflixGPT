import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

function MovieCard({movies}) {
  console.log(movies);
  console.log(movies[0])
  return (
    <div>
      {/* <img alt={movies[0].title} */}
      {/* // src={IMG_CDN_URL+movies[0].poster_path}/> */}
    </div>
  )
}

export default MovieCard
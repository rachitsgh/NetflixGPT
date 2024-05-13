import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

function MovieCard({Movie_title,poster_path}) {
  // console.log(movies);
  // console.log(movies[0]?.title)
  if(!poster_path) return null
  return (
    <div className='w-48 pr-4'>
      <img alt={Movie_title}
      src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
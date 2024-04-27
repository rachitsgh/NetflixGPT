import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

function VideoBackGround({movieId}) {
  // const [trailerID,setTrailerID]=useState(null);
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  useMovieTrailer(movieId);
  return (
    
    <div className='w-screen '>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&loop=1&controls=0&mute=1"} title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround
import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'
import useVideoTrailer from '../hooks/useMovieTrailer'

function MainContainer() {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    // useVideoTrailer()
    // console.log(movies)
    if(movies.length===0) return;

    const mainMovie =movies[1];
    const {id,original_title,overview}=mainMovie;
    // console.log(mainMovie)
   
  return (
    <div className='relative'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer
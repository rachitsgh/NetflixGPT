import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


function GPTMovieSuggetions() {
  const{movieNames,movieResults}= useSelector(store=>store.gpt);

  if(!movieNames) return null;
  return (
    <div className=' text-white opacity-90 min-h-screen bg-black p-4 my-52 mx-10 '>
       <div>
          {movieNames.map((movieName,index)=>
            
            <MovieList 
            key={movieName} 
            title={movieName} 
            movies={movieResults[index]}/>
          )}
       </div>
    </div>
  )
}

export default GPTMovieSuggetions
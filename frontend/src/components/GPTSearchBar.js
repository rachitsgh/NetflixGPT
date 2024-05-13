import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai'
import { API_options } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

function GPTSearchBar() {
    const langKey = useSelector(store=>store.config.lang)
    // console.log(langKey);
    const searchText=useRef(null);
    const dispatch = useDispatch();


    const searchMovieTmdb = async(movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_options);
      const json= await data.json();

      return json.results;

    }

    const handleGptSearchClick=async()=>{
        // console.log(searchText.current.value)
        // Make an API Call to Open AI
        const getQuery = "Act as a Movie Recommendation System and suggest some movies for the Query :"+searchText.current.value +"only give the name of most 5 relevant Movies,comma seperated like the example result given ahead. Example Result: Gadar,sholay,don,dangal,spiderman.";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'assistant', content:getQuery }],
            model: 'gpt-3.5-turbo',
          });
        //   if(!getResults.choices) 

          // console.log(gptResults.choices?.[0]?.message.content);
          const gptMovies=gptResults.choices?.[0]?.message.content.split(",");

          // For each Movie ,search on TMDB API
          const promiseArray = gptMovies.map(movie=>searchMovieTmdb(movie))
          //[promise,promise,promise,promise,promise]
          const tmdbResults= await Promise.all(promiseArray)
          
          // The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
          // console.log(tmdbResults)
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    
        }
  return (
    <div className='pt-[]'>
        <form onSubmit={e=>e.preventDefault()} className='flex align-middle justify-center  relative top-40 pt-[25%]k'>
            <input
            ref={searchText}
            type='text'className='p-4 m-4 opacity-85 border-black bg-black w-1/2  text-white' placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button onClick={handleGptSearchClick} className='mt-5 py-2 h-12 px-4 bg-red-700 text-white rounded-lg '>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar
import { useDispatch, useSelector } from "react-redux"
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { UseSelector } from "react-redux";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();
    //fetch the data from API and update store
  

    //Memoization 
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options);
    const json=await data.json()
    // console.log("hello"+json.results);
    dispatch(addNowPlayingMovies(json.results))
    
  } 
  useEffect(()=>{
    nowPlayingMovies.length==0 &&getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;
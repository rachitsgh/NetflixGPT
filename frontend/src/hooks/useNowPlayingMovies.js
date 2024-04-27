import { useDispatch } from "react-redux"
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();
    //fetch the data from API and update store
  
    const getNowPlayingMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options);
    const json=await data.json()
    dispatch(addNowPlayingMovies(json.results))
    // console.log(json);
  } 
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;
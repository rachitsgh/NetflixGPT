import { useDispatch } from "react-redux"
import { API_options } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const usePopularMovies =()=>{
    const dispatch = useDispatch();
    //fetch the data from API and update store

    const popularMovies=useSelector(store=>store.movies.popularMovies)
  
    const getPopularMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_options);
    const json=await data.json()
    // console.log("hello"+json.results);
    dispatch(addPopularMovies(json.results))
    
  } 
  useEffect(()=>{
    popularMovies.length==0 &&getPopularMovies();
  },[])
}

export default usePopularMovies;
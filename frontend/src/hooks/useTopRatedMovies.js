import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const useTopRatedMovies=()=>{
    const dispatch=useDispatch();

    const topRatedMovies=useSelector(store=>store.movies.topRatedMovies)


    const getTopRatedMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_options);
        const json=await data.json()
        // console.log("hello"+json.results);
        dispatch(addTopRatedMovies(json.results))

    }
    useEffect(()=>
    topRatedMovies.length==0 && getTopRatedMovies,[])

}

export default useTopRatedMovies;
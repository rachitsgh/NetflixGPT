import { useEffect} from "react";
import { API_options } from "../utils/constant";
import {useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieID)=>{
    // fetch trai;er Video and updating the trailer video store
  const dispatch = useDispatch();
  const getVideoTrailer = async()=>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US',
         API_options)
      const json=await data.json();
      const filteredData = json.results.filter(x=>x.type==="Trailer");
      const trailer = filteredData.length? filteredData[0]:json.results[0];
    //   console.log(trailer?.key);
      // setTrailerID(trailer?.key);
      dispatch(addTrailerVideo(trailer));
      
  }
  useEffect(()=>{
      getVideoTrailer();
  },[])

}

export default useMovieTrailer;
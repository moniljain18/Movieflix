import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { now_playing_movie,options } from "../utils/constant";


const useNowPlayingMovie = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(now_playing_movie, options);
      dispatch(getNowPlayingMovies(res.data.results ));
    } catch (error) {
      console.log(error)
    }
  }
 export default useNowPlayingMovie; 
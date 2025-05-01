import axios from "axios";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_rated_Movie, options } from "../utils/constant";


const useTopratedmovie = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error)
    }
}
export default useTopratedmovie; 
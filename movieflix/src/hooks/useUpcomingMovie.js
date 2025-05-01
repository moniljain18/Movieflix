import axios from "axios";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/movieSlice";
import { upcoming_Movie, options } from "../utils/constant";


const useUpcomingmovie = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(upcoming_Movie, options);
        dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error)
    }
}
export default useUpcomingmovie; 
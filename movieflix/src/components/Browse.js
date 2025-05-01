import React, { useEffect } from 'react'
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Maincontainer from './Maincontainer';
import Moviecontainer from './Moviecontainer';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularmovie from '../hooks/usePopularMovies';
import useUpcomingmovie from '../hooks/useUpcomingMovie';
import useTopratedmovie from '../hooks/useTopratedmovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();
  const dispatch  = useDispatch();

  //my customized hooks 
  useNowPlayingMovie();
  usePopularmovie();
  useUpcomingmovie();
  useTopratedmovie();
 

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  
  },[]);

  return (
    <div>
      <Header />
      <div>
        {
          toggle ?<SearchMovie/>:(
          <>
            <Maincontainer/>
            <Moviecontainer/>
          
          </>

          )
         
        }
     
      </div>
    </div>
  )
}

export default Browse;
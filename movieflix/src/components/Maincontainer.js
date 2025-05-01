import React from 'react'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
  const movie  = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return;//react early return 

  const {overview, id, title} = movie[4];

  return (
    <div>
       <Videotitle title={title} overview={overview} />
       <Videobackground movieId={id}/>
        </div>
  )
}

export default Maincontainer
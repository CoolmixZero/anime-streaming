"use client"

import ReactPlayer from 'react-player'
import ControlsContainer from './ControlsContainer';

interface AnimePlayerProps {
  url: string;
}

const AnimePlayer = ({url}: AnimePlayerProps) => {
  return (
    <div className='relative'>
      <ReactPlayer 
        url={url} 
        controls
        playing
        // width="70%"
        // height="70%"
      />
      {/* <ControlsContainer /> */}
    </div>
  )
}

export default AnimePlayer
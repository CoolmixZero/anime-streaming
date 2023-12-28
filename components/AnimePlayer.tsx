"use client"

import ReactPlayer from 'react-player'

interface AnimePlayerProps {
  url: string;
}

const AnimePlayer = ({url}: AnimePlayerProps) => {
  return (
      <ReactPlayer 
        url={url} 
        controls
        playing
        width="70%"
        height="70%"
      />
  )
}

export default AnimePlayer
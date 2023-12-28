"use client"

import ReactPlayer from 'react-player'

interface AnimePlayerProps {
  url: string;
}

const AnimePlayer = ({url}: AnimePlayerProps) => {
  return (
      <ReactPlayer 
        url={url} 
        controls={true}
        playing={true}
        width='100vh'
        height='100vh'
      />
  )
}

export default AnimePlayer
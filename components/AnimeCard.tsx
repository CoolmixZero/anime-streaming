"use client"

import Image from 'next/image'
import AnimeCardFooter from './AnimeCardFooter'
import { SubtitlesIcon } from 'lucide-react'

interface AnimeCardProps {
  anime: IAnime
}

const AnimeCard = ({anime} : AnimeCardProps) => {
  const image_url = anime.images.jpg.large_image_url;
  return (
    <div className="flex flex-col justify-between">
      {image_url && (
        // make images the same size
        <div className="relative w-48 h-64">
          <Image src={image_url} alt={anime.title} sizes='10vh' fill/>
          <div className="absolute bottom-0 ml-3 mb-1 flex items-center justify-center px-3 py-1 bg-green-500 rounded-lg text-xs">
              {/* Like a subtitles icon */}
              <SubtitlesIcon className="w-4 h-4 mr-1" />
              {/* <div className='font-light text-muted-foreground bg-black/50'>
                CC
              </div> */}
              <p className="">{anime.episodes}</p>
          </div>
        </div>  
        
      )}
      <AnimeCardFooter anime={anime} />
    </div>
  )
}

export default AnimeCard
"use client"

import Image from 'next/image'
import AnimeCardFooter from './AnimeCardFooter'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface AnimeCardProps {
  anime: IAnime
}

const AnimeCard = ({anime} : AnimeCardProps) => {
  const { resolvedTheme } = useTheme();
  const image_url = anime.images.jpg.large_image_url;
  
  const titleId = anime.title.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '-').toLowerCase();
  return (
    <Link href={`/${titleId}.${anime.mal_id}`} className="flex flex-col justify-between w-52">
      {image_url && (
        // make images the same size
        <div className="relative w-48 h-64">
          <Image src={image_url} alt={anime.title} sizes='100vh' fill/>
          <div className="absolute bottom-0 ml-3 mb-1 flex items-center justify-center px-2 py-1 bg-green-500 rounded-lg text-xs">
            {/* Like a subtitles icon */}
            <Image src={resolvedTheme === 'dark' ? "cc_dark.svg" : "cc.svg"} alt="cc" width={16} height={16} className="flex-1 h-fit mr-1" />
            <p className="flex-1 font-bold">{anime.episodes}</p>
          </div>
        </div>  
        
      )}
      <AnimeCardFooter anime={anime} />
    </Link>
  )
}

export default AnimeCard
"use client"

import { IAnime } from "@/app/types/type"

interface AnimeCardFooterProps {
  anime: IAnime
}

const AnimeCardFooter = ({anime}: AnimeCardFooterProps) => {
  return (
    <div className="w-full p-2">
      {(anime.title_english.length > 16 ? (
          <>{anime.title_english}</>
        ) : (
          <>{anime.title_english}</>
        ))}
    </div>
  )
}

export default AnimeCardFooter
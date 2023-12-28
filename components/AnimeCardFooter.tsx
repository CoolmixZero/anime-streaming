"use client"

interface AnimeCardFooterProps {
  anime: IAnime
}

const AnimeCardFooter = ({anime}: AnimeCardFooterProps) => {
  return (
    <div className="w-full p-2">
      {(anime.title.length > 16 ? (
          <>{anime.title}</>
        ) : (
          <>{anime.title}</>
        ))}
    </div>
  )
}

export default AnimeCardFooter
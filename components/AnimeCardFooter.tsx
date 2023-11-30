"use client"

interface AnimeCardFooterProps {
  anime: IAnime
}

const AnimeCardFooter = ({anime}: AnimeCardFooterProps) => {
  return (
    <div className="w-full p-4 bg-secondary">
      AnimeCardFooter
    </div>
  )
}

export default AnimeCardFooter
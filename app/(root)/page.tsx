import AnimeCard from '@/components/AnimeCard';
import  getAnimeInfo from '../actions/consumet/getAnimeInfo'
import { getAnimes } from '../actions/getAnimes';

export default async function Home() {
  const data = await getAnimes();
  // const data: any = await getAnimeInfo();

  console.log(data)
  return (
    <main className='flex flex-col items-center justify-center px-12 py-6'>
      <h1 className='text-4xl font-bold'>Top animes</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 justify-center py-4'>
        {data?.data?.map((anime: any) => (
          <div key={anime.mal_id} className='w-full h-full'>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </section>
    </main>
  )
}

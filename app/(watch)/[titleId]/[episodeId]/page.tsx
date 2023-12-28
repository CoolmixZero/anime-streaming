"use client"

import { useEffect, useState } from 'react';
import getAnimeEpisode from '@/app/actions/consumet/getAnimeEpisode';
import AnimePlayer from '@/components/AnimePlayer';

interface EpisodePageProps {
  params: {
    titleId: string;
    episodeId: string;
  };
}

const EpisodePage = ({ params }: EpisodePageProps) => {
  const [episode, setEpisode] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const episodeId = params.episodeId.split('%3D')[1];
        const titleId = params.titleId.split('.')[0].replace('-', ' ');
        const data = await getAnimeEpisode(titleId, Number(episodeId));
        setEpisode(data);
      } catch (error) {
        console.error('Error fetching episode:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.episodeId, params.titleId]);

  if (!episode) {
    return <div>Loading...</div>; // You might want to add a loading state
  }

  return (
    <div className='flex flex-col md:flex-row py-4 px-12'>
      <AnimePlayer url={episode.sources[1].url} />
    </div>
  );
};

export default EpisodePage;

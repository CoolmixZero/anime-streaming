"use client"

import { useEffect, useState } from 'react';
import getAnimeEpisode from '@/app/actions/consumet/getAnimeEpisode';
import AnimePlayer from '../_components/AnimePlayer';

interface EpisodePageProps {
  params: {
    titleId: string;
    episodeId: string;
  };
}

const EpisodePage = ({ params }: EpisodePageProps) => {
  const [videoSource, setVideoSource] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const episodeId = params.episodeId.split('%3D')[1];
  const titleId = params.titleId.split('.')[0].replace(/-/g, ' ');


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAnimeEpisode(titleId, Number(episodeId));
        setVideoSource(data);
      } catch (error) {
        console.error('Error fetching episode:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [titleId, episodeId]);

  if (!videoSource || loading) {
    return <div>Loading...</div>; // You might want to add a loading state
  }

  console.log(videoSource);

  return (
    <div className='flex flex-col md:flex-row py-4 px-12'>
      <AnimePlayer url={videoSource.url} />
    </div>
  );
};

export default EpisodePage;

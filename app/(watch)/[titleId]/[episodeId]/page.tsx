import getAnimeEpisode from "@/app/actions/consumet/getAnimeEpisode";
import { getAnimeEpisodeById } from "@/app/actions/getAnimeEpisodeById";
import AnimePlayer from "@/components/AnimePlayer";

interface EpisodePageProps {
  params: {
    titleId: string;
    episodeId: string;
  };
};

const EpisodePage = async ({params}: EpisodePageProps) => {
  const episodeId = params.episodeId.split("%3D")[1];
  const titleId = params.titleId.split('.')[0].replace("-", " ");
  const episode: any = await getAnimeEpisode(titleId, Number(episodeId));
  console.log(episode)
  // console.log(episode.sources[0].url)
  return (
    <div>
      <AnimePlayer url={episode.sources[1].url} />
    </div>
  )
}

export default EpisodePage
import getAnimeInfo from "@/app/actions/consumet/getAnimeInfo";
import { getAnimeById } from "@/app/actions/getAnimeById";
import { getAnimeEpisodes } from "@/app/actions/getAnimeEpisodes";
import { EpisodesMenu } from "@/components/EpisodesMenu";
import Image from "next/image";
import { Fragment } from "react";
 

interface TitlePageProps {
  params: {
    titleId: string;
  };
};

const TitlePage = async ({
  params
}: TitlePageProps) => {
  
  const titleId = params.titleId.split(".")[0];
  const mal_id = params.titleId.split(".")[1];

  const animeInfo: any = await getAnimeInfo(titleId.replace(/-/g, ' '));
  const animeListInfo: any = await getAnimeById(mal_id);
  console.log(animeListInfo);
  // const episodes = await getAnimeEpisodes(params.titleId);
  // console.log(animeInfo)
  // console.log(animeInfo)
  return (
    <div className="flex flex-col md:flex-row py-4 px-12 justify-between">
      <section className="flex items-start justify-start space-x-6">
        <Image src={animeInfo.image} alt={animeInfo.title} width={300} height={150}/>
        <div className="flex flex-col items-start justify-start w-96">
          <h1 className="text-3xl font-bold leading-tight">
            {animeListInfo.data.title}
          </h1>
          <h3 className="text-lg text-muted-foreground">
            {animeListInfo.data.title_english}
          </h3>
          <p className="text-sm mt-4">
            {animeListInfo.data.synopsis.split('\n').map((paragraph: string, index: number) => (
              paragraph !== "[Written by MAL Rewrite]" ? (
                <Fragment key={index}>
                  {paragraph}
                  <br />
                </Fragment>
              ) : null
            ))}
          </p>
        </div>
      </section>
      <EpisodesMenu title={animeInfo.title} episodes={animeInfo.episodes} />
    </div>
  )
}

export default TitlePage
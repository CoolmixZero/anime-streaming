"use client"

import getAnimeInfo from "@/app/actions/consumet/getAnimeInfo";
import { getAnimeById } from "@/app/actions/getAnimeById";
import { EpisodesMenu } from "@/components/EpisodesMenu";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface TitlePageProps {
  params: {
    titleId: string;
  };
};

const TitlePage = ({ params }: TitlePageProps) => {
  const [animeInfo, setAnimeInfo] = useState<any | null>(null);
  const [animeListInfo, setAnimeListInfo] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const titleId = params.titleId.split('.')[0];
        const mal_id = params.titleId.split('.')[1];

        const animeInfoData = await getAnimeInfo(titleId.replace(/-/g, ' '));
        const animeListInfoData = await getAnimeById(mal_id);

        setAnimeInfo(animeInfoData);
        setAnimeListInfo(animeListInfoData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.titleId]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any loading component
  }

  return (
    <div className="flex flex-col md:flex-row space-x-6 py-4 px-12">
      <EpisodesMenu title={animeInfo.title} episodes={animeInfo.episodes} />
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
    </div>
  )
}

export default TitlePage
"use server"

import { ANIME } from '@consumet/extensions';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';


export default async function getAnimeEpisode(animeTitle: string, episodeNumber: number) {
  try {
    // Create a new instance of AnimeSaturn provider 
    const animeProvider = new ANIME.AnimePahe();

    // get the available streaming servers for the first episode
    // const streamingServers = await animeProvider.fetchEpisodeSources("frieren-beyond-journeys-end-18542$episode$107259$both");
    const res = await animeProvider.search(animeTitle);
    const data1 = await animeProvider.fetchAnimeInfo(res.results[0].id);
    const data = await animeProvider.fetchEpisodeSources(data1.episodes![episodeNumber - 1].id);
    // console.log(results);

    console.log(data);

    return data;
  } catch (error) {
    return [];
  }
}


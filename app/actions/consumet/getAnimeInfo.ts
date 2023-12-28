"use server"

import { ANIME } from '@consumet/extensions';

export default async function getAnimeInfo(title: string) {
  try {
    // Create a new instance of AnimeSaturn provider 
    const animeProvider = new ANIME.AnimePahe();
    console.log(title)
    const results = await animeProvider.search(title); 

    // Get the first anime info
    const firstAnime = results.results[0].id;
    const animeInfo = await animeProvider.fetchAnimeInfo(firstAnime);

    // Check if animeInfo.episodes is defined before proceeding
    if (!animeInfo.episodes || animeInfo.episodes.length === 0) {
      return [];
    }
    // get the available streaming servers for the first episode
    // const streamingServers = await animeProvider.fetchEpisodeServers(animeInfo.episodes[0].id);

    return animeInfo;
  } catch (error) {
    return [];
  }
}


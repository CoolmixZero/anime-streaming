"use server"

import { ANIME } from '@consumet/extensions';

export default async function getAnimeInfo() {
  try {
    // Create a new instance of AnimeSaturn provider 
    const animeProvider = new ANIME.AnimeSaturn();

    const results = await animeProvider.search("One Piece"); 

    // Get the first anime info
    const firstAnime = results.results[0];
    const animeInfo = await animeProvider.fetchAnimeInfo(firstAnime.id);

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


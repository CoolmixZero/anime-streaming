"use server"

import { ANIME } from '@consumet/extensions';

export default async function getAnimeEpisode(episodeId: string) {
  try {
    // Create a new instance of AnimeSaturn provider 
    const animeProvider = new ANIME.AnimeSaturn();

    // get the available streaming servers for the first episode
    const streamingServers = await animeProvider.fetchEpisodeServers(episodeId);

    return streamingServers;
  } catch (error) {
    return [];
  }
}


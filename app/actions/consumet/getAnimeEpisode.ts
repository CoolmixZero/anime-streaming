"use server";

import { ANIME } from "@consumet/extensions";

export default async function getAnimeEpisode(
  animeTitle: string,
  episodeNumber: number
) {
  // Create a new instance of AnimeSaturn provider
  const animeProvider = new ANIME.Gogoanime;

  // Search for the anime
  const searchResponse = await animeProvider.search(animeTitle);
  if (searchResponse.results.length === 0) return -1;

  // Get the anime id
  const animeId = searchResponse.results[0].id;

  // Get the episode id
  const episodeIdResponse = await animeProvider.fetchAnimeInfo(animeId);
  const animeEpisodeId = episodeIdResponse.episodes![episodeNumber - 1]?.id;

  if (animeEpisodeId === undefined) return -1;

  // Get the episode sources
  const data = await animeProvider.fetchEpisodeSources(animeEpisodeId);

  // looking for the best resolution
  for (let i = 0; i < Object.keys(data.sources).length; i++) {
    if (data.sources[i].quality == "1080p") {
      console.log("Playing episode in " + data.sources[i].quality);
      return data.sources[i];
    }
  }

  for (let i = 0; i < Object.keys(data.sources).length; i++) {
    if (data.sources[i].quality == "720p") {
      console.log("Playing episode in " + data.sources[i].quality);
      return data.sources[i];
    }
  }

  for (let i = 0; i < Object.keys(data.sources).length; i++) {
    if (data.sources[i].quality == "default") {
      console.log("Playing episode in " + data.sources[i].quality);
      return data.sources[i];
    }
  }

  return data.sources[0];
}

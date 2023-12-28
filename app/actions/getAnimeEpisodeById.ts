"use server"

import axios from 'axios';

export const getAnimeEpisodeById = async (titleId: number, episodeId: number | string) => {
  try {
    // console.log(`https://api.jikan.moe/v4/anime/${titleId}/episodes/${episodeId}`)
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${titleId}/episodes/${episodeId}`);
    return response.data;
  } catch (error) {
    return [];
  }
}
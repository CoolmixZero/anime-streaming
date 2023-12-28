"use server"

import axios from 'axios';

export const getAnimeEpisodes = async (titleId: number) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${titleId}/episodes`);
    return response.data;
  } catch (error) {
    return [];
  }
}
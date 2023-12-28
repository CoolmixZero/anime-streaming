"use server"

import axios from 'axios';

export const getAnimeById = async (titleId: string) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${titleId}`);
    return response.data;
  } catch (error) {
    return [];
  }
}
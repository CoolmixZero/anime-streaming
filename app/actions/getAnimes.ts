"use server"

import axios from 'axios';

export const getAnimes = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime?limit=25');
    return response.data;
  } catch (error) {
    return [];
  }
}
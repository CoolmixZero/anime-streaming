export interface IAnime {
    mal_id: number;
    url: string;
    images: {
      jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        },
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      }
    };
    trailer: {};
    approved: boolean;
    titles: [];
    title: string,
    title_english: string;
    title_japanese: string;
    title_synonyms: [];
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {},
    duration: string;
    rating: string,
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: {};
    producers: [];
    licensors: [];
    studios: [];
    genres: [];
    explicit_genres: [];
    themes: [];
    demographics: [];
}
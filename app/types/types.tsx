export interface MovieDetails {
  // adult: boolean;
  // backdrop_path: '/e7jIX02GiSwsgkU5lMpeKjwq2Zc.jpg';
  // belongs_to_collection: null;
  // budget: 78000000;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  // homepage: string;
  id: number;
  // imdb_id: string;
  // origin_country: [string;];
  // original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  poster_path: string;
  // production_companies: [
  //   {
  //     id: number;
  //     logo_path: string;
  //     name: string;
  //     origin_country: string;
  //   },
  // ];
  // production_countries: [
  //   {
  //     iso_3166_1: string;
  //     name: string;
  //   },
  // ];
  release_date: string;
  // revenue: number;
  runtime: number;
  // spoken_languages: [
  //   {
  //     english_name: string;
  //     iso_639_1: string;
  //     name: string;
  //   },
  // ];
  // status: 'Released';
  // tagline: 'When the streets have gone to Hell, have faith in the devil.';
  title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
}
export interface MovieSearch {
  // adult: boolean;
  // backdrop_path: string;
  // genre_ids: [];
  id: number;
  // original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
}

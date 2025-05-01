export const API_END_POINT = "http://localhost:8085/api/v1/user/";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzhmZmY2MTBiM2VmZWJlZGNjMjkzZGZlN2ZmZTlmNSIsIm5iZiI6MTcyNDE3NzI5Ny43MDU5ODgsInN1YiI6IjY2YzRkOWJiYWY0MGM4M2E0MTVlOWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2luKf7Mlpu8RdgKOBY0ScIKYQd7Bl6EoNbgXCHxIUWo'
    }
  };
  export const now_playing_movie = "https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
  export const Top_rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
  export const upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
  export const banner_url = "https://image.tmdb.org/t/p/w500";
  export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";
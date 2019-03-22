import gql from "graphql-tag";

export const getMovies = gql`
  {
    movies(rating: 8.5, limit: 50) {
      id
      title
      medium_cover_image
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      medium_cover_image
      title
      rating
      description_intro
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;

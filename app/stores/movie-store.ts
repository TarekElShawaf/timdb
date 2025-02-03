import { createStore } from "zustand/vanilla";

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};
export type CrewMember = {
  id: number;
  job: string;
  name: string;
  profile_path: string;
};
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits?: {
    cast: CastMember[];
    crew: CrewMember[];
  };
};

export type MovieState = {
  favorites: Movie[];
};

export type MovieActions = {
  fetchFavorites: () => void;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: Number) => void;
};

export type MovieStore = MovieState & MovieActions;

export const defaultInitState: MovieState = {
  favorites: [],
};

export const createMovieStore = (initState: MovieState = defaultInitState) => {
  return createStore<MovieStore>()((set) => ({
    ...initState,
    fetchFavorites: () =>
      set(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
        console.log("I AM HERE IN FAVORITES");
        return { favorites: favorites };
      }),
    addFavorite: (movie: Movie) =>
      set((state) => {
        // Prevent duplicates in the favorites list
        const isAlreadyFavorite = state.favorites.some(
          (fav) => fav.id === movie.id
        );
        if (isAlreadyFavorite) return state;
        const newState = [...state.favorites, movie];
        localStorage.setItem("favorites", JSON.stringify(newState));
        return { favorites: newState };
      }),

    // Remove a movie from the favorites list by ID
    removeFavorite: (movieId: Number) =>
      set((state) => {
        const newState = state.favorites.filter(
          (movie) => movie.id !== movieId
        );
        localStorage.setItem("favorites", JSON.stringify(newState));
        return { favorites: newState };
      }),
  }));
};

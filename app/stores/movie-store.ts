import { createStore } from "zustand/vanilla";

export type Movie = {
  imdbID: string;
  Title: string;
  Actors: string;
  Director: string;
  Poster: string;
  Plot: string;
  Rated: string;
  Released: string;
  imdbRating: string;
  Year: string;
};

export type MovieState = {
  movie: Movie | null;
  favorites: Movie[];
};

export type MovieActions = {
  setMovie: (movie: Movie | null) => void;
  clearMovieState: () => void;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: string) => void;
};

export type MovieStore = MovieState & MovieActions;

export const defaultInitState: MovieState = {
  movie: null,
  favorites: JSON.parse(localStorage.getItem("favorites") ?? "[]"),
};

export const createMovieStore = (initState: MovieState = defaultInitState) => {
  return createStore<MovieStore>()((set) => ({
    ...initState,
    setMovie: (movie: Movie | null) => set(() => ({ movie })),
    clearMovieState: () => set(() => ({ movie: null })),
    addFavorite: (movie: Movie) =>
      set((state) => {
        // Prevent duplicates in the favorites list
        const isAlreadyFavorite = state.favorites.some(
          (fav) => fav.imdbID === movie.imdbID
        );
        if (isAlreadyFavorite) return state;
        const newState = [...state.favorites, movie];
        localStorage.setItem("favorites", JSON.stringify(newState));
        return { favorites: newState };
      }),

    // Remove a movie from the favorites list by ID
    removeFavorite: (movieId: string) =>
      set((state) => {
        const newState = state.favorites.filter(
          (movie) => movie.imdbID !== movieId
        );
        localStorage.setItem("favorites", JSON.stringify(newState));
        return { favorites: newState };
      }),
  }));
};

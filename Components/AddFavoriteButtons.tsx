"use client";

import { Movie } from "@/app/stores/movie-store";
import { useMovieStore } from "@/app/providers/movie-store-provider";
import { useEffect } from "react";

export default function AddFavoriteButton({ movie }: { movie: Movie }) {
  const { favorites, addFavorite, removeFavorite, fetchFavorites } =
    useMovieStore((state) => state);
  useEffect(() => {
    fetchFavorites();
  }, []);
  const isFavorite = favorites.find(
    (focusedMovie) => focusedMovie.id === movie.id
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavoriteToggle}
      aria-label={
        isFavorite
          ? `Remove ${movie.title} from favorites`
          : `Add ${movie.title} to favorites`
      }
      className={`favorite-button ${isFavorite ? "remove" : "add"}`}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

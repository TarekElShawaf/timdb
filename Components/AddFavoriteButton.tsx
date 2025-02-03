"use client";

import { Movie } from "@/app/stores/movie-store";
import { useMovieStore } from "@/app/providers/movie-store-provider";
import { useEffect, useState } from "react";
import "@/css/favorites.css";
export default function AddFavoriteButton({ movie }: { movie: Movie }) {
  const [showPopup, setShowPopup] = useState(false);

  const { favorites, addFavorite, removeFavorite, fetchFavorites } =
    useMovieStore((state) => state);
  useEffect(() => {
    fetchFavorites();
  }, []);
  const isFavorite = favorites.find(
    (focusedMovie) => focusedMovie.id === movie.id
  );

  const handleFavoriteToggle = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <>
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
      {showPopup && isFavorite && (
        <div className="popup-message">{movie.title} added to favorites</div>
      )}
      {showPopup && !isFavorite && (
        <div className="popup-message">
          {movie.title} removed from favorites
        </div>
      )}
    </>
  );
}

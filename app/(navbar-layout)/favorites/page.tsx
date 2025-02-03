"use client";
import { useMovieStore } from "@/app/providers/movie-store-provider";
import "@/css/favorites.css";
import MoviesGrid from "@/Components/MoviesGrid";
import { useEffect } from "react";
export default function Favorites() {
  const { favorites, fetchFavorites } = useMovieStore((state) => state);
  useEffect(() => {
    fetchFavorites();
  }, []);
  if (!favorites)
    throw new Error(
      "An error occured while getting your favorites, please try again!"
    );
  return (
    <div>
      <div className="grid-title">
        <h2>Your Favorite Movies</h2>
      </div>
      {favorites.length > 0 ? (
        <MoviesGrid movies={favorites}></MoviesGrid>
      ) : (
        <p className="no-favorites">
          You haven't added any movies to your favorites yet!
        </p>
      )}
    </div>
  );
}

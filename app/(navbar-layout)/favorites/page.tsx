"use client";
import { useMovieStore } from "@/app/providers/movie-store-provider";
import Link from "next/link";
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
      <Link href="/home-page" className="back-home">
        <span>&lt; Back to Home Page</span>
      </Link>
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

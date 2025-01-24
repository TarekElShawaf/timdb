"use client";
import { useMovieStore } from "@/providers/movie-store-provider";
import Link from "next/link";
import Image from "next/image";
import "../css/favorites.css";
const Favorites = () => {
  const { favorites } = useMovieStore((state) => state);

  return (
    <div>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <div className="movie-item">
                <div className="image-container">
                  <Image
                    src={movie.Poster}
                    alt={movie.Title}
                    width={300}
                    height={450}
                    className="movie-poster"
                  />
                </div>
                <h3 className="movie-title">{movie.Title}</h3>
                <p className="movie-year">{movie.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-favorites">No favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;

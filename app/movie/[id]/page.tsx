"use client";
import { useMovieStore } from "@/providers/movie-store-provider";
import { useParams } from "next/navigation";
import { getMovieByID } from "@/lib/api";
import Image from "next/image";
import "../../css/moviedetails.css";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/loading";
const MovieDetails = () => {
  const { id } = useParams<Record<string, string>>();
  const { movie, favorites, setMovie, addFavorite, removeFavorite } =
    useMovieStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);

  const checkIfMovieExists = async () => {
    if (id != movie?.imdbID) {
      setLoading(true);
      let movieToBeDisplayed = await getMovieByID(id);
      setMovie(movieToBeDisplayed);
      setLoading(false);
    }
  };
  useEffect(() => {
    checkIfMovieExists();
  }, []);

  const isFavorite = favorites.some(
    (favMovie) => favMovie.imdbID === movie?.imdbID
  );

  const handleFavoriteToggle = () => {
    if (movie) {
      if (isFavorite) {
        removeFavorite(movie?.imdbID);
      } else {
        addFavorite(movie);
      }
    }
  };

  const clearSearch = () => {
    setMovie(null);
  };

  return loading ? (
    <Loading />
  ) : (
    <div
      className="movieDetailsContainer"
      style={{
        backgroundImage: `url(${movie?.Poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "#fff",
        opacity: 0.7,
      }}
    >
      <main>
        <Link href="/" className="back-home" onClick={clearSearch}>
          <span>&lt; Back to Home Page</span>
        </Link>
        <article className="movie-details">
          <section className="movie-info">
            <header>
              <h1 className="movie-title" aria-label="Movie Title">
                {movie?.Title}
              </h1>
              <p className="movie-rated" aria-label="Movie Rating">
                Rated: {movie?.Rated}
              </p>
            </header>

            <section className="movie-description">
              <h2>Plot</h2>
              <p>{movie?.Plot}</p>

              <h2>Actors</h2>
              <p>{movie?.Actors}</p>

              <h2>Director</h2>
              <p>{movie?.Director}</p>

              <h2>Released</h2>
              <p>{movie?.Released}</p>

              <h2>IMDb Rating</h2>
              <p>{movie?.imdbRating}</p>
            </section>

            <button
              type="button"
              onClick={handleFavoriteToggle}
              aria-label={
                isFavorite
                  ? `Remove ${movie?.Title} from favorites`
                  : `Add ${movie?.Title} to favorites`
              }
              className={`favorite-button ${isFavorite ? "remove" : "add"}`}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </section>

          <section className="movie-poster">
            <figure>
              {movie?.Poster ? (
                <Image
                  src={movie.Poster}
                  alt={`${movie?.Title} Movie Poster`}
                  width={500}
                  height={750}
                  className="poster-image"
                />
              ) : (
                <div className="placeholder">No Poster Available</div> // Fallback content or image
              )}
              <figcaption>Movie Poster</figcaption>
            </figure>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MovieDetails;

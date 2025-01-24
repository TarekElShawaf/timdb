"use client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import "../css/searchresults.css";
import { useMovieStore } from "@/providers/movie-store-provider";
import Image from "next/image";
import Link from "next/link";
import "../css/favorites.css";
import { staticMovies } from "./staticMovies"; // Import static data

export default function SearchResults() {
  const { movie } = useMovieStore((state) => state);
  console.log(movie);

  return (
    <>
      {movie ? (
        <Link
          href={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          className="searched-movie"
        >
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
      ) : (
        <div className="movie-grid">
          {staticMovies.map((movie) => (
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
      )}
    </>
  );
}

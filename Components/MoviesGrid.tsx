import { Movie } from "@/app/stores/movie-store";
import Link from "next/link";
import Image from "next/image";
import { getYear, imagePath } from "@/lib/formatMovieAttributes";
import "@/css/movies-grid.css";
export default function MoviesGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="movie-item">
            <div className="image-container">
              {movie.poster_path ? (
                <Image
                  src={imagePath(movie.poster_path)}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="movie-poster"
                />
              ) : (
                <p>No poster found</p>
              )}
            </div>
            <h3 className="movie-title">{movie.title}</h3>
            <div className="movie-card-info">
              {movie.release_date ? (
                <p className="movie-year">{getYear(movie.release_date)}</p>
              ) : (
                <p className="movie-year">Unspecified date</p>
              )}
              <div className="movie-card-rating" aria-label="Movie Rating">
                {movie.vote_average > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <Image
                      src="/yellow-star.png"
                      alt={"Rating Icon"}
                      width={18}
                      height={18}
                    ></Image>
                    <p>{(movie.vote_average / 2).toFixed(1)}/5</p>
                  </div>
                ) : (
                  <p>Not Rated</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

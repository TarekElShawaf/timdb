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
                <p>No poster found</p> // Fallback message when no poster is available
              )}
            </div>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{getYear(movie.release_date)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

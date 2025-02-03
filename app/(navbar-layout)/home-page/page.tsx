import { Movie } from "@/app/stores/movie-store";
import { discoverMovies } from "@/lib/api";
import MoviesGrid from "@/Components/MoviesGrid";
import SearchBar from "@/Components/SearchBar";
export default async function HomePage() {
  const movies: Movie[] = await discoverMovies();
  if (!movies) {
    throw new Error("Failed to retrieve movies");
  }
  return (
    <div>
      <SearchBar></SearchBar>
      <MoviesGrid movies={movies}></MoviesGrid>
    </div>
  );
}

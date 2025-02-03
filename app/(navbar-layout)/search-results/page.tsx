import { searchMovie } from "@/lib/api";
import MoviesGrid from "@/Components/MoviesGrid";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query } = await searchParams;
  if (!query)
    throw new Error("The search you provided isn't valid, please try again!");
  const movies = await searchMovie(query);

  return (
    <div>
      {movies ? (
        <MoviesGrid movies={movies}></MoviesGrid>
      ) : (
        <p>No movies that match "{query}" found </p>
      )}
    </div>
  );
}

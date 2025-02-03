import { searchMovie } from "@/lib/api";
import MoviesGrid from "@/Components/MoviesGrid";
import "@/css/home.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results | TIMDB",
  description: "Search for movies you are interested to know more about",
};

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
      <div className="grid-title">
        <h3>Search results for "{query}"</h3>
      </div>
      {movies && movies.length > 0 ? (
        <MoviesGrid movies={movies}></MoviesGrid>
      ) : (
        <div className="grid-title">
          <h3>No movies that match "{query}" found</h3>
        </div>
      )}
    </div>
  );
}

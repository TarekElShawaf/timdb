import { Movie } from "@/app/stores/movie-store";
import { discoverMovies } from "@/lib/api";
import MoviesGrid from "@/Components/MoviesGrid";
import "@/css/home.css";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  weight: "700",
  subsets: ["latin"],
});
export default async function HomePage() {
  const movies: Movie[] = await discoverMovies();
  if (!movies) {
    throw new Error("Failed to retrieve movies");
  }
  return (
    <div>
      <div className="landing-image">
        <h2
          style={{
            marginBottom: "7%",
            fontFamily: manrope.style.fontFamily,
            fontSize: "2.5rem",
          }}
        >
          Explore our wide variety of movies!
        </h2>
      </div>
      <div className="grid-title">
        <h2>Most Popular Movies</h2>
      </div>
      <div>
        <MoviesGrid movies={movies}></MoviesGrid>
      </div>
    </div>
  );
}

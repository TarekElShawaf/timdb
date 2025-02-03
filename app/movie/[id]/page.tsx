import Image from "next/image";
import Link from "next/link";
import "@/css/movie-details.css";
import { Movie } from "@/app/stores/movie-store";
import AddFavoriteButton from "@/Components/AddFavoriteButton";
import { movieDetails } from "@/lib/api";
import {
  formatGenres,
  formatTime,
  getYear,
  imagePath,
} from "@/lib/formatMovieAttributes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Details | TIMDB",
  description:
    "Find out all the details related to a movie you are interested in",
};

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  if (!id) throw new Error("Movie id isn't valid, please try again.");
  const movie: Movie = await movieDetails(parseInt(id));
  const director = movie.credits?.crew.find(
    (member) => member.job === "Director"
  );
  return (
    <div
      className="movie-details-container"
      style={{
        backgroundImage: `url(${imagePath(movie.backdrop_path)})`,
      }}
    >
      <main>
        <Link scroll={false} href="/home-page" className="back-home-button">
          <span>&lt; Back to Home Page</span>
        </Link>
        <article className="movie-details">
          <section className="movie-info">
            <header>
              <h1 className="movie-details-title" aria-label="Movie Title">
                {movie.title}
              </h1>
              <div className="movie-rated" aria-label="Movie Rating">
                {movie.vote_average > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src="/yellow-star.png"
                      alt={"Rating Icon"}
                      width={23}
                      height={23}
                    ></Image>
                    <p style={{ alignSelf: "end" }}>
                      {(movie.vote_average / 2).toFixed(1)}/5
                    </p>
                  </div>
                ) : (
                  "Not Rated"
                )}
              </div>
            </header>

            <section className="movie-description">
              <p className="movie-plot">{movie.overview}</p>
              <section className="movie-details-info">
                <div>
                  <h2>Released</h2>
                  <p>{getYear(movie.release_date)}</p>
                </div>
                <div>
                  <h2>Duration</h2>
                  <p>{formatTime(movie.runtime)}</p>
                </div>
                <div>
                  <h2>Genre</h2>
                  <p>{formatGenres(movie.genres)}</p>
                </div>
              </section>
              <h3>Cast:</h3>
              <div className="movie-cast">
                {movie.credits?.cast.map(
                  (member) =>
                    member.profile_path && (
                      <div key={member.id} className="cast-member-container">
                        <div className="cast-member-image">
                          <Image
                            src={imagePath(member.profile_path)}
                            alt={member.name}
                            width={80}
                            height={80}
                          />
                        </div>
                        <p className="cast-member-name">{member.name}</p>
                        <p className="cast-member-character">
                          {member.character}
                        </p>
                      </div>
                    )
                )}
              </div>

              <h2 style={{ margin: "14px 0" }}>Director</h2>
              <div className="director-container">
                {director ? (
                  <>
                    <div>
                      <Image
                        src={imagePath(director.profile_path)}
                        alt={director.name}
                        width={100}
                        height={100}
                        style={{ borderRadius: "100%" }}
                      />
                    </div>
                    <p>{director.name}</p>
                  </>
                ) : (
                  <p>Director not available</p>
                )}
              </div>
            </section>
            <section className="movie-details-favorite">
              <AddFavoriteButton movie={movie}></AddFavoriteButton>
            </section>
          </section>

          <section className="movie-details-poster">
            <figure>
              {movie.poster_path ? (
                <Image
                  src={imagePath(movie.poster_path)}
                  alt={`${movie.title} Movie Poster`}
                  width={500}
                  height={750}
                  className="poster-image"
                />
              ) : (
                <div className="placeholder">No Poster Available</div>
              )}
            </figure>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MovieDetails;

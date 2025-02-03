import Image from "next/image";
import Link from "next/link";
import "@/css/moviedetails.css";
import { Movie } from "@/app/stores/movie-store";
import AddFavoriteButton from "@/Components/AddFavoriteButtons";
import { movieDetails } from "@/lib/api";
import { getYear, imagePath } from "@/lib/formatMovieAttributes";
const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  if (!id) throw new Error("Movie id isn't valid, please try again.");
  const movie: Movie = await movieDetails(parseInt(id));
  const director = movie.credits?.crew.find(
    (member) => member.job === "Director"
  );
  return (
    <div
      className="movieDetailsContainer"
      style={{
        backgroundImage: `url(${imagePath(movie.backdrop_path)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "#fff",
        opacity: 0.7,
      }}
    >
      <main>
        <Link scroll={false} href="/home-page" className="back-home">
          <span>&lt; Back to Home Page</span>
        </Link>
        <article className="movie-details">
          <section className="movie-info">
            <header>
              <h1 className="movie-title" aria-label="Movie Title">
                {movie.title}
              </h1>
              <p className="movie-rated" aria-label="Movie Rating">
                {movie.vote_average > 0
                  ? `Rated: ${(movie.vote_average / 2).toFixed(1)}/5`
                  : "Not Rated"}
              </p>
            </header>

            <section className="movie-description">
              <h2>Plot</h2>
              <p className="movie-plot">{movie.overview}</p>

              <h3>Cast:</h3>
              <div className="movie-cast">
                {movie.credits?.cast.map(
                  (member) =>
                    member.profile_path && (
                      <div
                        key={member.id}
                        style={{
                          textAlign: "center",
                          margin: "10px",
                          width: "100px", // Adjust this to control the size of each member
                        }}
                      >
                        <div
                          style={{
                            width: "90px", // Width of the circular image
                            height: "60px", // Height of the circular image
                            borderRadius: "50%", // Make the image circular
                            overflow: "hidden",
                            marginBottom: "5px",
                          }}
                        >
                          <Image
                            src={imagePath(member.profile_path)}
                            alt={member.name}
                            width={60}
                            height={60}
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

              <h2>Director</h2>
              <div className="director-container">
                {director ? (
                  <>
                    <div>
                      <Image
                        src={imagePath(director.profile_path)}
                        alt={director.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p>{director.name}</p>
                  </>
                ) : (
                  <p>Director not available</p>
                )}
              </div>

              <h2>Released</h2>
              <p>{getYear(movie.release_date)}</p>
            </section>

            <AddFavoriteButton movie={movie}></AddFavoriteButton>
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
              <figcaption>Movie Poster</figcaption>
            </figure>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MovieDetails;

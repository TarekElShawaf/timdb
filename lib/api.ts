//Authorization options (The most secure approach is adding the api keys to a .env file however for this implementation, I left them in the code for the reviewer to test my applicaton)
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTA5MmU4YWY4YjA0YjAxNzkyMDRlZGM4Y2JkMDYwMCIsIm5iZiI6MTczODE1NzgxMS41MTMsInN1YiI6IjY3OWEyZWYzMDI4YTQyMjM4MDI3YTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hf20pFVPzNXWgDRYXB3qhl0vPk-EectVPTwF429cymc",
  },
};
//Discover popular movies to be displayed in home page
export const discoverMovies = async () => {
  let res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc",
    options
  );
  if (!res.ok) throw new Error("Failed to retrieve movies");
  const result = await res.json();
  return result.results;
};
//Search for a particular movie using the query that the user searches for
export const searchMovie = async (title: string) => {
  let res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
    options
  );
  if (!res.ok) throw new Error("Movie not found");
  const result = await res.json();
  return result.results;
};
//Get details to a specific movies using its id
export const movieDetails = async (id: Number) => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,recommendations&language=en-US`,
    options
  );
  if (!res.ok) throw new Error("Recommendations not found for this movie");
  const result = await res.json();
  return result;
};
//Find similar movies to a movie that the user is interested in using that movie's id
export const recommendedMovies = async (id: Number) => {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
    options
  );
  if (!res.ok) throw new Error("Recommendations not found for this movie");
  res = await res.json();
  return res;
};

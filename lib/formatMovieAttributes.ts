import { Genre } from "@/app/stores/movie-store";

//This function is to add the base URL to the poster-path and backdrop-path attributes as they aren't supported by default within the api I'm using
export const imagePath = (path: string) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};
export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};
export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};
export const formatGenres = (genres: Genre[] | undefined) => {
  let genreString;
  if (genres != undefined)
    genreString = genres.map((genre) => genre.name).join(" | ");
  if (genreString == "" || genreString == "" || genreString == undefined)
    genreString = "No genres specified";
  return genreString;
};

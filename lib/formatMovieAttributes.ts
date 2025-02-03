//This function is to add the base URL to the poster-path and backdrop-path attributes as they aren't supported by default within the api I'm using
export const imagePath = (path: string) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};
export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};

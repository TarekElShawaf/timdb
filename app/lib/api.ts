export const getMovieByTitle = async(title:string) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=d39fe911&t=${title}`);
    if (!response.ok) throw new Error ("Failed to retrieve movie")
    const movie = await response.json()
    console.log("Function: ",movie)
    return movie
}
export const getMovieByID = async (id:string) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=d39fe911&i=${id}`);
    if (!response.ok) throw new Error ("Failed to retrieve movie")
    const movie = await response.json()
    return movie
}

import "./css/home.css";

import NavBar from "@/Components/NavBar";
import SearchResults from "@/Components/SearchResults";
import SearchBar from "./Components/SearchBar";

export default async function Home() {
  return (
    <>
      <nav className="navContainer">
        <NavBar></NavBar>
      </nav>
      <div>
        <SearchBar></SearchBar>
      </div>
      <article className="movieContainer">
        <SearchResults></SearchResults>
      </article>
    </>
  );
}

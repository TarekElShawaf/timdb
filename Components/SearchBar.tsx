import Form from "next/form";
import "../css/searchbar.css";
const SearchBar = () => {
  return (
    <>
      <Form action="/search-results" scroll={false} className="searchBar">
        <div className="searchWrapper">
          <input
            name="query"
            className="searchInput"
            placeholder="Search for a movie"
          ></input>
          <div>
            <button type="submit" className="searchButton">
              Search
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default SearchBar;

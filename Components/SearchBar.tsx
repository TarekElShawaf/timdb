import Form from "next/form";
import "../css/search-bar.css";
import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <Form action="/search-results" scroll={false} className="searchBar">
        <div className="searchWrapper">
          <Image
            src="/Search.png"
            alt={"Search icon"}
            width={20}
            height={20}
          ></Image>
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

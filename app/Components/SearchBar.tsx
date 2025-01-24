"use client";
import Form from "next/form";
import "../css/searchbar.css";
import { getMovieByTitle } from "@/lib/api";
import { FormEvent, useEffect, useState } from "react";

import { useMovieStore } from "@/providers/movie-store-provider";

const SearchBar = () => {
  const { setMovie } = useMovieStore((state) => state);
  const [search, setSearch] = useState("");
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (search == "") {
      setMovie(null);
    } else {
      let res = await getMovieByTitle(search);
      setMovie(res);
    }
  };

  useEffect(() => {
    if (search == "") {
      setMovie(null);
    }
  }, []);
  return (
    <>
      <Form
        action="/"
        scroll={false}
        onSubmit={handleSearch}
        className="searchBar"
      >
        <div className="searchWrapper">
          <input
            name="query"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
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

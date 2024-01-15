import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleSearch(searchText);
  // };

  // const selectCoin = (coin) => {
  //   setCoinSearch(coin);
  //   setSearchText("");
  //   setSearchData();
  // };

  return (
    <>
      <form
        className="w-96 relative flex items-center
    ml-7 font-nunito
    "
        // onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200
        placeholder:text-gray-100 pl-2
        required outline-0 border border-transparent 
        focus:border-cyan
         "
          placeholder="search here..."
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul
          className="absolute top-11 right-0 py-2 w-full h-96 rounded overflow-x-hidden
      bg-gray-200 bg-opacity-60 backdrop-blur-md"
        >
          {searchData ? (
            searchData.map((coin) => {
              return <li>{coin.id}</li>;
            })
          ) : (
            <h2>Please wait...</h2>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;

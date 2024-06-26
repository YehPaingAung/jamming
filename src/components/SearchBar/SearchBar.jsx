import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [searchData, setSearchData] = useState("");

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
    setSearchData("");
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={handleSearchChange}
        value={searchData}
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </button>
    </form>
  );
};

import React, { useCallback, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  useEffect(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div>
      <button onClick={search} className={styles.searchIcon} disabled>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        className={styles.searchBox}
        placeholder="Enter A Song Title"
        type="text"
        onChange={handleTermChange}
      />
    </div>
  );
};

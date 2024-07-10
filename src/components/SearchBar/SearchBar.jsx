import React, { useCallback, useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div>
      <input
        placeholder="Enter A Song Title"
        type="text"
        onChange={handleTermChange}
      />
      <button onClick={search}>SearchButton</button>
    </div>
  );
};

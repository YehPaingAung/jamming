import React from "react";
import "./App.css";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchBarResults } from "./components/SearchBarResults/SearchBarResults";

export const App = () => {
  return (
    <div className="App container">
      <SearchBar />
      <SearchBarResults />
    </div>
  );
};

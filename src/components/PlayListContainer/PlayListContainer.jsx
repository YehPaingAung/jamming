import React, { useState } from "react";

export const PlayListContainer = ({ playListContainer, setPlayListName }) => {
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setPlayListName(e.target.value);
  };

  const handleClick = () => {
    setDisabled(false);
  };
  return (
    <div>
      <h1>Your PlayLists</h1>
      {playListContainer.map((playList, index) => (
        <div key={index}>
          <input
            type="text"
            value={playList.name}
            disabled={disabled}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Edit</button>
        </div>
      ))}
    </div>
  );
};

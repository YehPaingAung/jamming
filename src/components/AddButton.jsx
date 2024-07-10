import React from "react";

export const AddButton = ({ track, onAddTrack }) => {
  const handleClick = () => {
    if (!track) return;
    onAddTrack(track);
  };
  return <button onClick={handleClick}>+</button>;
};

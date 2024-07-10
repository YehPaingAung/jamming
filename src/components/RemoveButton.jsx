import React from "react";

export const RemoveButton = ({ onRemoveTrack, track }) => {
  const handleClick = () => {
    onRemoveTrack(track.id);
  };
  return <button onClick={handleClick}>-</button>;
};

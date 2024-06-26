import React from "react";

export const AddButton = ({ onRemoveTrack }) => {
  return (
    <div>
      <button onClick={onRemoveTrack}>
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
  );
};

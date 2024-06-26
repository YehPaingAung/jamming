import React from "react";

export const AddButton = ({ onAddTrack }) => {
  return (
    <div>
      <button onClick={onAddTrack}>
        <i class="fa-solid fa-plus plus-icon"></i>
      </button>
    </div>
  );
};

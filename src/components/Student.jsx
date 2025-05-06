import React from "react";

function Student({ name, id, present, onToggle }) {
  // TODO 5: Add an onClick to the button to trigger onToggle with student id

  const handleClickListener = () => {
    onToggle(id);
  };

  return (
    <div>
      <span>{name}</span>

      <button onClick={handleClickListener}>
        {present ? "Mark Absent" : "Mark Present"}
      </button>
    </div>
  );
}

export default Student;

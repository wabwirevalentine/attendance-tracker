import React from 'react';

function Student({ student, onToggle }) {
  // TODO 5: Add an onClick to the button to trigger onToggle with student id

  return (
    <div>
      <span>{student.name}</span>
      <button>
        {student.present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  );
}

export default Student;

import { use, useState } from "react";
import StudentList from "./StudentList";

// const [testStudent, setTestStudent] = useState([initialStudents]);
// const [present, isPresent] = useState("");

// TODO 1: Add a resetAttendance function to mark all students as absent
const resetAttendance = () => {
  console.log("Reset button clicked");

  // setTestStudent([initialStudents]);
  //we need to reset initialStudents to false
};

function App() {
  const initialStudents = [
    { id: 1, name: "Alice", present: false },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: false },
    { id: 4, name: "Diana", present: false },
  ];
  const [students, setStudent] = useState(initialStudents);

  // TODO 2: Create a toggleAttendance function and pass it to StudentList
  const toggleAttendance = (id) => {
    setStudent((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <div className="container">
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <button onClick={resetAttendance}>Reset Attendance</button>
      <br />
      <StudentList students={students} onToggle={toggleAttendance} />
    </div>
  );
}

export default App;

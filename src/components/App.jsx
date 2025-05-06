import StudentList from './StudentList';

// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];

  // TODO 2: Create a toggleAttendance function and pass it to StudentList

  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <StudentList />
    </div>
  );
}

export default App;

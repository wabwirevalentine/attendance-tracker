import Student from "./Student";

function StudentList({ students, onToggle }) {
  // console.log("students-> " + JSON.stringify(students));
  // console.log(students[0]);
  console.log("students in StudentList:", students);

  //const studentComponents= students.map((s, index)=> <li key={index}>{s}</li>)

  return (
    <div>
      {/* {students.map((student) => (
        
        <Student
          key={student.id}
          name={student.name}
          id={student.id}
          present={student.present}
          onToggle={onToggle}
        />
      ))} */}

      {students.map((student, index) => (
        <Student
          key={student.id || index}
          name={student.name}
          id={student.id}
          present={student.present}
          onToggle={onToggle}
        />
      ))}

      {/* TODO 4: Map through students and render Student components --- Harriet left on right wil absent/present*/}
    </div>
  );
}

export default StudentList;

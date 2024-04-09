interface Student {
    id: number;
    name: string;
    class: string;
  }
  
  function studentsClass(students: Student[], className: string): Student[] {
    let filteredStudents = students.filter((student) => 
        {student.class === className});
    return filteredStudents;
  }
  

  let students: Student[] = [
    {
      id: 1,
      name: "hi",
      class: "2A"
    },
    {
      id: 2,
      name: "hoa",
      class: "2B"
    },
    {
      id: 3,
      name: "hồng",
      class: "2B"
    }
  ];
  
  let className = "2B";
  let filteredStudents = studentsClass(students, className);
  console.log(filteredStudents);
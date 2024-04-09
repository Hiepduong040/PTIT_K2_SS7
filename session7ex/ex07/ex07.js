"use strict";
function studentsClass(students, className) {
    let filteredStudents = students.filter((student) => { student.class === className; });
    return filteredStudents;
}
let students = [
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

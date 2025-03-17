import React from "react";
import data from "../../teacher-student.json";
const GET_ALL_TEACHERS = "GETALLTEACHERS";
const GET_ALL_STUDENTS = "GETALLSTUDENTS";
const GET_STUDENTS_BY_TEACHER = "GETSTUDENTS";
const tasks = (req, res) => {
  const { methodType, teacherId } = req.query;
  switch (methodType) {
    case GET_ALL_TEACHERS:
      res.status(200).json(data.teachers);
      break;

    case GET_ALL_STUDENTS:
      res.status(200).json(data.students);
      break;

    case GET_STUDENTS_BY_TEACHER:
      const studentsByTeacher = data.students.filter((student) =>
        student.teachers.includes(Number(teacherId))
      );

      if (studentsByTeacher.length > 0) {
        res.status(200).json(studentsByTeacher);
      } else {
        res.status(404).json({ message: "No students found" });
      }
      break;

    default:
      res.status(405).json({ message: "Invalid methodType provided" });
  }
};

export default tasks;

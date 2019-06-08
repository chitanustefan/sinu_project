package sinu.service.interfaces;

import sinu.model.Student;

import java.util.List;

public interface IStudentService {

    List<Student> getAllStudents();
    Student saveStudent(Student student);
    Student updateStudent(Integer id, Student student);
    void deleteStudent(Integer id);
}

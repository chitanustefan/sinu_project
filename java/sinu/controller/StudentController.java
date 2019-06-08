package sinu.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sinu.model.Grade;
import sinu.model.Student;
import sinu.model.User;
import sinu.service.StudentService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {


    @Autowired
    StudentService studentService = new StudentService();

    @GetMapping("{idUser}/profesor")
    public List<Student> getAllStudents(@PathVariable("idUser") int idUser){
        List<Student> list = studentService.getAllStudents();
        return list;

    }


    @PostMapping("/register")
    public Student regiter(@RequestBody Student student) {
        //System.out.println("Nume Student: " + student.getName());
        student.setRole("student");
        System.out.println("Grupa: " + student.getGrupa());
        System.out.println("Adress: " + student.getAdress());
        System.out.println("Phone: " + student.getTelefon());
       // Student s = new Student("name", "email", "telefon", "password", "role", "nrMatricol", "grupa");
        studentService.saveStudent(student);
        return student;
    }

}

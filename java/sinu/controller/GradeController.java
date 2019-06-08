package sinu.controller;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import sinu.model.Grade;
import sinu.model.Profesor;
import sinu.model.Student;
import sinu.model.User;
import sinu.service.GradeService;
import sinu.service.ProfesorService;
import sinu.service.StudentService;
import sinu.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GradeController {

    @Autowired
    private GradeService gradeService = new GradeService();
    private ProfesorService profesorService = new ProfesorService();
    private StudentService studentService = new StudentService();

    @GetMapping("{idUser}/student")
    public List<Grade> getAllGrades(@PathVariable("idUser") int idUser){

        List<Grade> list = gradeService.getStudGrades(idUser);
        return list;

//        List<Grade> list = gradeService.getAllGrades();
//        List<Grade> finaList = new ArrayList<>();
//        for(Grade g: list){
//            if(g.getIdStudent()== idUser){
//                finaList.add(g);
//                System.out.println("Stud: " + g.getIdStudent() + " Grade: " + g.getGrade());
//            }
//        }
//        return finaList;

    }

    @PostMapping("{idUser}/profesor")
    public Grade addGrade(@PathVariable int idUser, @RequestBody Grade grade){
        //System.out.println("idUser "+ idUser + " idStudent: " + grade.getStudent() + " Grade: " + grade.getGrade());
        //gradeService.getMaterie(grade);
//        List<Profesor> profList = new ArrayList<>();
//        profList = profesorService.getAllProfesors();
//        for(Profesor p : profList){
//            if (p.getIdUser() == idUser){
//                grade.setIdMaterie(p.getIdMaterie());
//                grade.setMaterie(p.getMaterie());
//            }
//        }

        gradeService.saveGrade(grade);
        return grade;

    }

    @GetMapping("{idUser}/admin/export")
    public void exportCSV(HttpServletResponse response, @PathVariable int idUser) throws Exception{

        String filename = "grades.csv";
        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        StatefulBeanToCsv<Grade> writer = new StatefulBeanToCsvBuilder<Grade>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withQuotechar(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();
        writer.write(gradeService.getAllGrades());
        System.out.println("EXPORTED");
    }

}

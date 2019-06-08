package sinu.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sinu.model.Grade;
import sinu.model.Profesor;
import sinu.model.Student;
import sinu.service.ProfesorService;
import sinu.service.StudentService;
import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfesorController {

    @Autowired
    ProfesorService profesorService = new ProfesorService();

    @GetMapping(value = "{idUser}/profesor/getprof")
    public Profesor getProfesorById(@PathVariable("idUser") int idUser){
        Profesor x = new Profesor();
        List<Profesor> list = profesorService.getAllProfesors();
        for(Profesor p : list){
            if (p.getIdUser() == idUser)
                //System.out.println(p.getIdMaterie() + "  " + p.getMaterie());
                return p;
        }
        return x;

    }

    @PostMapping(value = "{idUser}/admin/editprof")
    public Profesor editProf(@PathVariable int idUser, @RequestBody Profesor profesor){

       // System.out.println(profesor.getName());
        Profesor p = profesorService.updateProfesor(profesor.getIdUser(), profesor);
        return p;
    }

    @GetMapping(value = "{idUser}/admin/getprof/{idProf}")
    public Profesor getProfById(@PathVariable int idUser, @PathVariable int idProf){
        List<Profesor> list = profesorService.getAllProfesors();
        for(Profesor p : list){
            if (p.getIdUser() == idProf) {
                System.out.println(idProf);
                return p;
            }
        }
        return new Profesor();

    }

    @GetMapping(value = "{idUser}/admin")
    public List<Profesor> getAllProfesors(@PathVariable("idUser") int idUser){
        List<Profesor> list = profesorService.getAllProfesors();
        return list;

    }

    @DeleteMapping(value = "{idUser}/admin/deleteprof/{idProf}")
    public Profesor deleteProf(@PathVariable int idUser, @PathVariable int idProf) {
        System.out.println(idProf);
        profesorService.deleteProfesor(idProf);
        return new Profesor();
    }

    @PostMapping(value = "{idUser}/admin/addprof")
    public Profesor addProfesor(@PathVariable int idUser, @RequestBody Profesor profesor){
           //System.out.println(profesor.getName());
        switch (profesor.getMaterie()){

            case "Analiza": profesor.setIdMaterie(1);
                            break;
            case "Procesare Imagini": profesor.setIdMaterie(2);
                                      break;
            case "Calcul Numeric": profesor.setIdMaterie(3);
                                   break;
             case "POO": profesor.setIdMaterie(4);
                          break;
             case "Inteligenta Artificiala": profesor.setIdMaterie(5);
                                            break;
        }
        profesor.setRole("profesor");
        profesorService.saveProfesor(profesor);
        return profesor;

    }

}

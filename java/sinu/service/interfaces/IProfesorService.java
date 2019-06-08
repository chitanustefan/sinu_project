package sinu.service.interfaces;

import sinu.model.Profesor;
import sinu.model.Student;

import java.util.List;

public interface IProfesorService {

    List<Profesor> getAllProfesors();
    Profesor saveProfesor(Profesor profesor);
    Profesor updateProfesor(Integer id, Profesor profesor);
    void deleteProfesor(Integer id);
}

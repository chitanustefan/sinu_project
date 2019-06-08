package sinu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sinu.model.Profesor;
import sinu.repository.ProfesorRepository;
import sinu.service.interfaces.IProfesorService;

import java.util.List;
import java.util.Optional;


@Service
public class ProfesorService implements IProfesorService {

    @Autowired
    private ProfesorRepository profesorRepository;

    public Profesor login(String email, String password){
        List<Profesor> userS = profesorRepository.findAll();
        for(Profesor u: userS)
            if(u.getEmail().equals(email) && u.getEmail().equals(password)){
                return u;
            }
        return null;
    }

    @Override
    public List<Profesor> getAllProfesors() {
        List<Profesor> result = profesorRepository.findAll();
        return result;
    }

    @Override
    public Profesor saveProfesor(Profesor profesor) {
        Profesor savedProf = this.profesorRepository.save(profesor);
        return savedProf;
    }

    @Override
    @Transactional
    public Profesor updateProfesor(Integer id, Profesor profesor) {
        System.out.println(profesor);
        Profesor result = profesorRepository.save(profesor);
        System.out.println(result.getName());
        return result;
    }

    @Override
    public void deleteProfesor(Integer id) {
        profesorRepository.deleteById(id);

    }
}

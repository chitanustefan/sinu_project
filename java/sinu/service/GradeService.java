package sinu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sinu.model.Grade;
import sinu.model.Profesor;
import sinu.repository.GradeRepository;
import sinu.repository.ProfesorRepository;
import sinu.service.interfaces.IGradeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class GradeService implements IGradeService {

    @Autowired
    private GradeRepository gradeRepository;

    private ProfesorService profesorService = new ProfesorService();

    @Override
    public List<Grade> getAllGrades() {
        List<Grade> result = gradeRepository.findAll();
        return result;
    }

    public List<Grade> getStudGrades(int idStudent){
       // System.out.println("getStudGrades");
        List<Grade> allGrades = gradeRepository.findAll();
        List<Grade> studGrades = new ArrayList<>();
        for (Grade grade : allGrades){
           // System.out.println("we have grades for student" + idStudent);
            if (grade.getIdStudent() == idStudent){
                //System.out.println("grade: " + grade.getGrade());
                studGrades.add(grade);
            }
        }
        return studGrades;
    }

    @Override
    public Grade saveGrade(Grade grade) {
        Grade savedGrade = this.gradeRepository.save(grade);
        return savedGrade;
    }

    @Override
    @Transactional
    public Grade updateGrade(Integer id, Grade grade) {
        Optional<Grade> optionalGrade = gradeRepository.findById(id);
        Grade result = optionalGrade.orElse(grade);
        return result;
    }

    @Override
    public void deleteGrade(Integer id) {
        gradeRepository.deleteById(id);

    }
}

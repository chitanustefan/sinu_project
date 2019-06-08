package sinu.service.interfaces;

import sinu.model.Grade;
import sinu.model.Student;

import java.util.List;

public interface IGradeService {

    List<Grade> getAllGrades();
    Grade saveGrade(Grade grade);
    Grade updateGrade(Integer id, Grade grade);
    void deleteGrade(Integer id);

}

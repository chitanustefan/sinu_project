package sinu.model;

import javax.persistence.*;


@Entity
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idGrade;

    @Column
    private int grade;

    @Column
    private int idMaterie;

    @Column
    private String materie;

    private int idStudent;

    private int idProfesor;

    public Grade(){}

    public Grade(int grade, int idMaterie, String materie, int idStudent, int idProfesor) {
        this.grade = grade;
        this.idMaterie = idMaterie;
        this.materie = materie;
        this.idStudent = idStudent;
        this.idProfesor = idProfesor;
    }

    public int getIdGrade() {
        return idGrade;
    }

    public void setIdGrade(int idGrade) {
        this.idGrade = idGrade;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public int getIdMaterie() {
        return idMaterie;
    }

    public void setIdMaterie(int idMaterie) {
        this.idMaterie = idMaterie;
    }

    public String getMaterie() {
        return materie;
    }

    public void setMaterie(String materie) {
        this.materie = materie;
    }

    public int getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(int idStudent) {
        this.idStudent = idStudent;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }
}

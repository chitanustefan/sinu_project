package sinu.model;

import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "student")
@PrimaryKeyJoinColumn(name = "id_student")
public class Student extends User{


    @Column
    private String grupa;

    public Student() {
    }

    public Student(String grupa) {
        this.grupa = grupa;
    }

    public Student(String name, String adress, String email, String telefon, String password, String role, String grupa) {
        super(name, adress, email, telefon, password, role);
        this.grupa = grupa;
    }


    public String getGrupa() {
        return grupa;
    }

    public void setGrupa(String grupa) {
        this.grupa = grupa;
    }
}
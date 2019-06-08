package sinu.model;

import javax.persistence.*;

@Entity
@Table(name = "profesor")
@PrimaryKeyJoinColumn(name = "id_profesor")
public class Profesor extends User {


    @Column
    private int idMaterie;

    @Column
    private String materie;

    public Profesor(){ }

    public Profesor(int idMaterie, String materie) {
        this.idMaterie = idMaterie;
        this.materie = materie;
    }

    public Profesor(String name, String adress, String email, String telefon, String password, String role, int idMaterie, String materie) {
        super(name, adress, email, telefon, password, role);
        this.idMaterie = idMaterie;
        this.materie = materie;
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
}


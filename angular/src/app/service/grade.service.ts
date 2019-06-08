import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from '../model/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private urlbasic = '//localhost:8080';
  grade: Grade;

  constructor(private http: HttpClient) { this.grade = new Grade();}

  addGrade(grade: Grade): Observable<any>{
    const idUser = grade.idProfesor;
    const url = `${this.urlbasic}/${idUser}/profesor/`;
    console.log("ID: " + grade.idStudent + " Grade: " + grade.grade + " Prof: " + grade.idProfesor + " USER " + idUser);
    //grade.idProfesor.idProfesor = +idUser;
    //console.log(grade.idProfesor.idProfesor);
    //grade.idProfesor.idProfesor = grade.idProfesor;
    console.log(typeof(grade.idProfesor));
    return this.http.post<Grade>(url, grade);
  }

  exportCSV(idUser: number){
    const url = `//localhost:8080/${idUser}/admin/export`;
    // this.grade.materie = materie;
    // this.grade.idMaterie = +grupa;
    // console.log("Materie " + this.grade.materie + " Grupa " + this.grade.idMaterie);
    console.log("sa");
    //return this.http.get(url);

  }
}

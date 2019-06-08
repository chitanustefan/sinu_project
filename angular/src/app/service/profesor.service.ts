import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlbasic = '//localhost:8080';

  constructor(private http: HttpClient) { }

  public getProfesorById(idUser: number): Observable<any> {
    const url = `${this.urlbasic}/${idUser}/profesor/getprof`;
    return this.http.get(url);
  }

  public getProfById(idUser: number, idProf: number): Observable<any> {
    const url = `${this.urlbasic}/${idUser}/admin/getprof/${idProf}`;
    return this.http.get(url);
  }

  public getAllProfesors(idUser: number): Observable<any> {
    const url = `${this.urlbasic}/${idUser}/admin/`;
    return this.http.get(url);
  }

  public editProf(idUser: number, profesor: Profesor): Observable<Profesor>{
    console.log(profesor);
    const url = `${this.urlbasic}/${idUser}/admin/editprof`;
    return this.http.post<Profesor>(url, profesor);
  }


  public register(profesor: Profesor, idUser: number): Observable<Profesor>{
    //const idUser = profesor.idProfesor;
    const url = `${this.urlbasic}/${idUser}/admin/addprof`;
    return this.http.post<Profesor>(url, profesor);
  }

  public deleteProf(idProf: number, idUser: number): Observable<Profesor>{
    //const idUser = profesor.idProfesor;
    console.log("Prof: " + idProf + " User: " + idUser);
    const url = `${this.urlbasic}/${idUser}/admin/deleteprof/${idProf}`;
    return this.http.delete<any>(url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlbasic = '//localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllStudents(idUser: number): Observable<any> {
    const url = `${this.urlbasic}/${idUser}/profesor/`;
    return this.http.get(url);
  }

  public getAllGrades(idUser: number): Observable<any> {
    const url = `${this.urlbasic}/${idUser}/student/`;
    return this.http.get(url);
  }
}

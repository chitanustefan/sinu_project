import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private usersUrlLog: string;
  private usersUrlReg: string;

  constructor(private http: HttpClient) {
    this.usersUrlLog = 'http://localhost:8080/login';
    this.usersUrlReg = 'http://localhost:8080/register';
   }

  public login(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrlLog, user);
  }

  public register(student: Student): Observable<Student>{
    return this.http.post<Student>(this.usersUrlReg, student);
  }
}

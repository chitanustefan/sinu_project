import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student: Student;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginserviceService) {
    this.student = new Student(); }

    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.register(this.student).subscribe(x => {this.student = x;
    if(this.student.role === "student") {
      this.router.navigate(['/login']);
    } }
    );
}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}

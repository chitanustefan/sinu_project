import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginserviceService) {
    this.user = new User(); }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user).subscribe(x => {this.user = x;
                                                       if (this.user.role === 'student') {
      this.router.navigate(['/' + this.user.idUser + '/student']);
    } else if (this.user.role === 'profesor') {
      this.router.navigate(['/' + this.user.idUser + '/profesor']);
         } else if (this.user.role === 'admin') {
      this.router.navigate(['/' + this.user.idUser + '/admin']);
                }
     }
    );
}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}

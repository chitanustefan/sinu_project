import { Component, OnInit } from '@angular/core';
import { Profesor } from '../model/profesor';
import { ProfesorService } from '../service/profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-regprof',
  templateUrl: './regprof.component.html',
  styleUrls: ['./regprof.component.css']
})
export class RegprofComponent implements OnInit {

  profesor: Profesor;
  idUser: number;

  constructor(private route: ActivatedRoute, private router: Router, private profesorService: ProfesorService,){
    this.profesor = new Profesor(); }

    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.idUser = urlParams.idUser;
    });
    console.log(this.idUser);
  }

  onSubmit() {
     this.profesorService.register(this.profesor, this.idUser).subscribe(x => {this.profesor = x;
                                                                               this.router.navigate(['../'], { relativeTo: this.route }); } );
}

getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}

}

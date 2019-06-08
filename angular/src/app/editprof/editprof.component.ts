import { Component, OnInit, Inject } from '@angular/core';
import { Profesor } from '../model/profesor';
import { ProfesorService } from '../service/profesor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editprof',
  templateUrl: './editprof.component.html',
  styleUrls: ['./editprof.component.css']
})
export class EditprofComponent implements OnInit {

  idUser: number;
  profesor: Profesor;
  name: string;
  telefon: string;
  adress: string;
  materie: string;
  password: string;

  hide = true;
  email = new FormControl('' , [Validators.required, Validators.email]);

  constructor(private profesorService: ProfesorService,
              public dialogRef: MatDialogRef<EditprofComponent>,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: Profesor) { }

  ngOnInit() {
    this.profesorService.getProfById(4, this.data.idProfesor).subscribe(x => {
       this.data = x; this.name = x.name; this.materie = x.materie;
       this.email.setValue(x.email); this.telefon = x.telefon; this.adress = x.adress;
       this.password = x.password;});
  }

  onSubmit(){
    this.data.name = this.name;
    this.data.email = this.email.value;
    this.data.telefon = this.telefon;
    this.data.adress = this.adress;
    this.data.materie = this.materie;
    this.data.password = this.password;
    this.profesorService.editProf(4, this.data).subscribe(x => {this.profesor = x;});
    window.location.reload();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}

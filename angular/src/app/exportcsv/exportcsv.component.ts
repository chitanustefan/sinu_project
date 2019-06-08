import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Grade } from '../model/grade';
import { GradeService } from '../service/grade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exportcsv',
  templateUrl: './exportcsv.component.html',
  styleUrls: ['./exportcsv.component.css']
})
export class ExportcsvComponent implements OnInit {

  grupa: string;
  materie: string;
  grade: Grade;
  grade2: any;
  idUser: number;

  constructor(
    private gradeService: GradeService,
    public dialogRef: MatDialogRef<ExportcsvComponent>,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: Grade
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.idUser = urlParams.idUser;
    });
  }

  onClick(grupa: string, materie: string){
    //console.log("Grupa: " + grupa + " Materie: " + materie);
   // this.grade.materie = materie;
    //this.grade.idMaterie = +grupa;
   // console.log("idUSER: "+ this.data.idProfesor);
   // this.gradeService.exportCSV(grupa, materie, this.data.idProfesor).subscribe(x=>{ this.grade2 = x;});
  }

}

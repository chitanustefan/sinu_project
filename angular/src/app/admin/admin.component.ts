import {MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Profesor } from '../model/profesor';
import { StudentService } from '../service/student.service';
import { ProfesorService } from '../service/profesor.service';
import { RegprofComponent } from '../regprof/regprof.component';
import { ExportcsvComponent } from '../exportcsv/exportcsv.component';
import { EditprofComponent } from '../editprof/editprof.component';
import { GradeService } from '../service/grade.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  profesors: Profesor[];
  list: MatTableDataSource<any>;
  idUser: number;
  idProf: number;
  profesor: Profesor;
  profesor2: Profesor;
  profesorToEdit: Profesor;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private profesorService: ProfesorService,
    private dialog: MatDialog,
    private gradeService: GradeService
  ) { 
    this.profesor = new Profesor();
  }



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'email', 'materie','actions'];
    private name: string;

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.idProf = urlParams.idUser;
    });
    this.profesorService.getAllProfesors(this.idProf).subscribe(
      response => {this.profesors = response; this.list = new MatTableDataSource(response);
                   this.list.paginator = this.paginator; }
      );
  }

  applyFilter(filterValue: string) {
    this.list.filter = filterValue.trim().toLowerCase();

    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
  }

  addColumn(): void {
    this.route.params.forEach((urlParams) => {
      this.idUser = urlParams.idUser;
    });
    this.router.navigate(['/' + this.idUser + '/admin/addprof']);

  }

  expCSV(): void{
    window.location.href ='//localhost:8080/4/admin/export';
  }

  onDelete(idProf: number){
    this.profesor.idProfesor = idProf;
    console.log(this.profesor.idProfesor);
    if(confirm('Are you sure to delete this record ?')){
    this.profesorService.deleteProf(idProf, this.idProf).subscribe(x => {this.profesor2 = x;});
    window.location.reload();
    }
  }
  
  onEdit(idProf: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditprofComponent, {
      data: { idProfesor: idProf}});
    }

}

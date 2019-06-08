import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { GradedialogComponent } from '../gradedialog/gradedialog.component'
import {MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfesorComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private dialog: MatDialog
  ) { }

  students: Student[];
  list: MatTableDataSource<any>;
  grade: number;
  idStudent: number;
  idProf: number;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'email', 'grupa','actions'];
  expandedElement: Student | null;

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.idProf = urlParams.idUser;
    });
    this.studentService.getAllStudents(this.idProf).subscribe(
      response => {this.students = response; this.list = new MatTableDataSource(response);
                   this.list.paginator = this.paginator; }
      );
  }

  applyFilter(filterValue: string) {
    this.list.filter = filterValue.trim().toLowerCase();

    if (this.list.paginator) {
      this.list.paginator.firstPage();
    }
  }

  openDialog(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //console.log(typeof(this.idProf));
    this.dialog.open(GradedialogComponent, {
      data: {idStudent: id, grade: 0, idProfesor: +this.idProf}
    });
  }


}

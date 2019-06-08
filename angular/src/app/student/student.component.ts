import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import {MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { Grade } from '../model/grade';
import { Message } from '@stomp/stompjs';
import { StompState } from '@stomp/ng2-stompjs';
import { MessageService } from '../service/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  grades: Grade[];
  list: MatTableDataSource<any>;
  idStud: number;


  WEBSOCKET_URL = 'ws://@localhost:8080/socket';
  EXAMPLE_URL = '/server-receiver';

  private messagingService: MessageService;
  messageHistory = [];
  state = 'NOT CONNECTED';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) { 
    this.messagingService = new MessageService(this.WEBSOCKET_URL, this.EXAMPLE_URL);

        // Subscribe to its stream (to listen on messages)
        this.messagingService.stream().subscribe((message: Message) => {
          this.messageHistory.unshift(message.body);
          console.log(message);
          this.snackBar.open("Ai primit o nota!", "OK:(", {
            duration: 2000,
          });
        });
    
        // Subscribe to its state (to know its connected or not)
        this.messagingService.state().subscribe((state: StompState) => {
          this.state = StompState[state];
        });
   }

  private stompClient;
  displayedColumns: string[] = ['materie', 'grade'];

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.idStud = urlParams.idUser;
    });
    this.studentService.getAllGrades(this.idStud).subscribe(
      response => {this.grades = response; this.list = new MatTableDataSource(response);
                   this.list.paginator = this.paginator; }
      );
  }

}

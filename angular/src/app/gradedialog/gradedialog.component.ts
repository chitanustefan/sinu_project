import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Grade } from '../model/grade';
import { GradeService } from '../service/grade.service';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../service/profesor.service';
import { Profesor } from '../model/profesor';
import { StompService, StompConfig, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-gradedialog',
  templateUrl: './gradedialog.component.html',
  styleUrls: ['./gradedialog.component.css']
})
export class GradedialogComponent implements OnInit {

   WEBSOCKET_URL = 'ws://@localhost:8080/socket';
   EXAMPLE_URL = '/topic/server-broadcaster';

  private messagingService: MessageService;

  messageHistory = [];
  state = 'NOT CONNECTED';

  constructor(private gradeService: GradeService,
              private profesorService: ProfesorService,
              public dialogRef: MatDialogRef<GradedialogComponent>,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: Grade
              )  {
                    // Instantiate a messagingService
    this.messagingService = new MessageService(this.WEBSOCKET_URL, this.EXAMPLE_URL);

    // Subscribe to its stream (to listen on messages)
    this.messagingService.stream().subscribe((message: Message) => {
      this.messageHistory.unshift(message.body);
      console.log(message);
    });

    // Subscribe to its state (to know its connected or not)
    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });
              }

  private gradeObj: Grade;
  private idProf: number;
  private prof: Profesor;

  ngOnInit() {
  }

  onClick(idStudent: number, grade: number, idProfesor: number) {
    this.data.grade = +this.data.grade;
    this.profesorService.getProfesorById(idProfesor).subscribe(x => {this.data.materie = x.materie; this.data.idMaterie = x.idMaterie; 
      this.gradeService.addGrade(this.data).subscribe(response =>{this.gradeObj = response; });});
      this.messagingService.send("/server-receiver", {
        text: "This is cool"
      });
    }

}

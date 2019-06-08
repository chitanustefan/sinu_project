import {MatButtonModule, MatToolbarModule, MatCheckboxModule,
        MatFormFieldModule, MatInputModule, MatIconModule,
        MatTableModule, MatPaginatorModule, MatDialogModule,
        MatGridListModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule ],
})

export class MaterialModule { }
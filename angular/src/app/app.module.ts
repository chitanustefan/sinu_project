import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { GradedialogComponent } from './gradedialog/gradedialog.component';
import { AdminComponent } from './admin/admin.component';
import { RegprofComponent } from './regprof/regprof.component';
import { ExportcsvComponent } from './exportcsv/exportcsv.component';
import { EditprofComponent } from './editprof/editprof.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    RegisterComponent,
    ProfesorComponent,
    GradedialogComponent,
    AdminComponent,
    RegprofComponent,
    ExportcsvComponent,
    EditprofComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[GradedialogComponent, ExportcsvComponent,EditprofComponent]
})
export class AppModule { }

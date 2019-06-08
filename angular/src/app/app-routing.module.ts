import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AdminComponent } from './admin/admin.component';
import { RegprofComponent } from './regprof/regprof.component';
 
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: ':idUser/student', component: StudentComponent },
  {path: ':idUser/profesor', component: ProfesorComponent },
  {path: ':idUser/admin', component: AdminComponent },
  {path: ':idUser/admin/addprof', component: RegprofComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

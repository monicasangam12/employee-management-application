import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { EmployersComponent } from './employers/employers';
import { AddEmployerComponent } from './add-employer/add-employer';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage';
import { EmployeesComponent } from './employees/employees';
import { SearchEmployeeSkills } from './search-employee-skills/search-employee-skills';

export const routes: Routes =  [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'add-employee', component: AddEmployerComponent},
  { path: 'add-employer', component: AddEmployerComponent},
  { path: 'search-employees-skill', component: SearchEmployeeSkills} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

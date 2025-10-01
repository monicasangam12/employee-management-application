import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { LoginComponent } from './login/login';
import { EmployeesComponent } from './employees/employees';
import { SearchEmployeesSkillComponent } from './search-employees-skill/search-employees-skill';
import { AddEmployeeComponent } from './add-employee/add-employee';



export const routes: Routes =  [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee/:id', component: AddEmployeeComponent},
  { path: 'search-employees-skill', component: SearchEmployeesSkillComponent} 
];

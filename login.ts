import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeService } from '../employee-service';
import { V } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  employeeData!: EmployeeService;
  private apiUrl = 'https://localhost:8080/employees';

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
       username: ['', Validators.required],
       password: ['', Validators.required]
    });

    console.log(this.loginForm);

    this.employeeData = new EmployeeService(httpClient);

    this.employeeData.getEmployeeDetails({id: 1, name: "Jane Smith", position: "Javascript Programmer", username: "janesmith", password: "lovingsmallkittens", salary: 110000});
    this.employeeData.getEmployeeById(1);
    this.employeeData.postEmployeeDetails({id: 1, name: "John Doe", position: "UI Developer"});
    this.employeeData.updateEmployeeDetails(1, { name: 'Jane Smith', position: 'Senior Developer' });
    this.employeeData.deleteEmployee(1);
  }

  loginEmployee(){
    this.employeeData.getEmployeeDetails({id: 1, name: "Jane Smith", position: "Javascript Programmer", username: "janesmith", password: "lovingsmallkittens", salary: 110000});
      const user = this.employeeData.getEmployeeById(1);
      if (user) {
        console.log("Login Successful");
        console.log(this.username + " logged in.");

        this.router.navigateByUrl("homepage");
        console.log("Navigation successful");
       
      } else {
      
        console.log("Invalid credentials");
      }
    }
  }

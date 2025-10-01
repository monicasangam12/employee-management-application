import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  providers: [EmployeeService],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployeeComponent implements OnInit {
  @Input() id!: number;
  employeeForm!: FormGroup;

  router: any;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService){
    this.employeeForm = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      position: [''],
      salary: [''],
      rating: ['']
    });
    console.log(this.employeeForm);
    console.log ("Add Employee Component Loaded mode =", this.id);
  }
  ngOnInit() {
    // The 'id' property is automatically set by the router
    console.log('mode ID:', this.id);
  }

  addEmployee(employee: Employee){ 
    //patch the  form values
    this.employeeForm.patchValue({
      name: employee.name,
      username: employee.username,
      password: employee.password,
      position: employee.position,
      salary: employee.salary,
      rating: employee.rating
    });
    console.log(employee);
    console.log("Add Employee Clicked");
  }

  onSubmit(){
      if(this.employeeForm.valid){
        console.log("Form Submitted Successfully value",this.employeeForm.value);
        console.log("Form Submitted Successfully value",this.employeeForm.value.name);

        this.employeeService.postEmployeeDetails(this.employeeForm.value).subscribe({
          next: (response: Employee) => {
            console.log(response);
            console.log("Employee registered successfully", response);
            this.router.navigate(['/employees']);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            console.error("Error during registration", error);
          }
        });
      }
      else{
        console.log("Registration form is not valid");
      }
  
    }
}


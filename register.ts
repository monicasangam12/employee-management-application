import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  employeeForm!: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.employeeForm);
  }

  registerEmployee(employeeForm: FormGroup) {
      employeeForm.addControl("firstName", employeeForm.value.firstName);
      console.log("First Name: " + employeeForm.value.firstName);
      employeeForm.addControl("lastName", employeeForm.value.lastName);
      console.log("First Name: " + employeeForm.value.firstName);
      employeeForm.addControl("email", employeeForm.value.email);
      console.log("Email: " + employeeForm.value.email);
      employeeForm.addControl("username", employeeForm.value.username);
      console.log("Username: " + employeeForm.value.username);
      employeeForm.addControl("password", employeeForm.value.password);
      console.log("Password: " + employeeForm.value.password);

  }



}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  employeeForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router){
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
     if(employeeForm.value == true){
        this.router.navigateByUrl("employees");
     }
     else{
      this.router.navigateByUrl("login");
     }
  }



}

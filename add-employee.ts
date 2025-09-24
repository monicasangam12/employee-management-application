import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../employee';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
    employeeForm!: FormGroup;

    constructor(private fb: FormBuilder){
      this.employeeForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      console.log(this.employeeForm);
    }

    addEmployee(employeeForm: FormGroup){
       const employee = new Employee(1, "", "", 0, "", "");
       console.log(employee);
       console.log("Add Employer Clicked");
    }
}

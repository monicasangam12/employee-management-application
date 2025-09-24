import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployersComponent } from '../employers/employers';
import { Component } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-add-employer',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-employer.html',
  styleUrl: './add-employer.css'
})
export class AddEmployerComponent {
  employerForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.employerForm = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
      position: [''],
      salary: ['']
    });
    console.log(this.employerForm.setValue({
      name: 'John Doe',
      username: 'johndoe',
      password: 'password123',
      position: 'Full Stack Java Developer',
      salary: 170000
    },
    {
      onlySelf: true
    }));
    console.log(this.employerForm.value);
  }

    addEmployer(){ 
      const employer = new Employee(1, "", "", 10, "", "");
      console.log(employer);
      console.log("Add Employer Clicked");
    }
}

import { Component, TemplateRef } from '@angular/core';
import { Employee } from '../../employee';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const employeeData: Employee[] = [
  {
    id: 1, name: "John Doe", username: "johndoe", password: "password123", salary: 100000, position: "JavaScript Developer" 
  },
  {
    id: 2, name: "Jane Smith", username: "janesmith", password: "lovingsmallkittens", salary: 150000, position: "UI Developer" 
  },
  {
    id: 3, name: "Samskhi Sundasweri", username: "samskhisundasweri", password: "monsjda", salary: 200000, position: "Angular Developer" 
  }
];

@Component({
  selector: 'app-employees',
  imports: [MatTableModule, HttpClientModule],
  providers: [TemplateRef],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'password', 'salary', 'position'];
  dataSource = employeeData;
  $newEmployee!: Employee;
  employeeData!: MatTableDataSource<Employee>;

  constructor(private httpClient: HttpClient){
    console.log(this.dataSource);
  }

  editRow(employee: Employee) {
    
  }

  addRow() {
    
  }

}

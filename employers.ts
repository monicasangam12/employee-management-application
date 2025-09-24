import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employers',
  imports: [MatTableModule],
  templateUrl: './employers.html',
  styleUrl: './employers.css'
})
export class EmployersComponent {
  $newEmployer!: Employee;
  dataSource!: MatTableDataSource<Employee>;
  displayedColumns: MatTableModule = ['id', 'email', 'name', 'password', 'position', 'salary', 'username'];

  editRow(employee: Employee) {
    
  }

  addRow() {
  
  }

}

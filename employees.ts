import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Employee } from '../../employee';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { EmployeeService } from '../employee-service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButton } from "@angular/material/button";
import { Router } from '@angular/router';
import { AddEmployeeService } from '../addEmployee.service';
// import { RegistrationService } from '../registration.service';

const COLUMNS_SCHEMA = [
  {
      key: "isEdit",
      type: "checkbox",
      label: "Select"
  },
  {
      key: "id",
      type: "number",
      label: "Id"
  },
  {
      key: "name",
      type: "text",
      label: "Name"
  },
  {
    key: "position",
    type: "text",
    label: "Position"
},
  {
      key: "salary",
      type: "number",
      label: "Salary"
  },
  {
    key: "username",
    type: "text",
    label: "Username"
  },
  { 
    key: "password",
    type: "password",
    label: "Password"
  }

];

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatTableModule, MatPaginatorModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, HttpClientModule, MatCheckboxModule, MatButton],
  providers: [EmployeeService, HttpClientModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
    $newEmployee!: Employee;
    employees: Employee[] = [];
    columnsSchema: any = COLUMNS_SCHEMA;
    displayedColumns: string[] = COLUMNS_SCHEMA.map((col: { key: any; }) => {   return col.key });
    dataSource = new MatTableDataSource<Employee>(this.employees);
    selection = new SelectionModel<Employee>(true, []);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    employeeForm: FormGroup;
    //sorting data for table
    @ViewChild(MatSort)sort: MatSort = new MatSort;

    
     constructor(private fb: FormBuilder, private employeeService: EmployeeService, private http: HttpClient, private router: Router)  {
      this.employeeService.getData().subscribe((data: Employee[]) => {
        this.employees = data;
        let newEmployees: Employee[] = [];
        
        for (let emp of this.employees) {
          let newEmp = {
            id: emp.id,
            name: emp.name,
            position: emp.position,
            salary: emp.salary,
            username: emp.username,
            password: emp.password,
            rating: emp.rating,
            isEdit: false
          }
          newEmployees.push(newEmp);
        }
        console.log("Employees Data from Service in Constructor:", newEmployees);

        this.dataSource.data = newEmployees;
        console.log("Fetched Employees Data:", this.dataSource.data);
        this.dataSource.paginator = this.paginator; 
      });
        this.employeeForm = this.fb.group({
            select: [ { checked: false }],
            id: [this.dataSource.data.values().next().value?.id || 0],
            name: [this.dataSource.data.values().next().value?.name || ''],
            position: [this.dataSource.data.values().next().value?.position || ''],
            salary: [this.dataSource.data.values().next().value?.salary || 0],
            username: [this.dataSource.data.values().next().value?.username || ''],
            password: [this.dataSource.data.values().next().value?.password || ''],
            rating: [this.dataSource.data.values().next().value?.rating || 0],
            isEdit: [false]
        });
        console.log(this.employeeForm);
    }

    ngOnInit() {
        this.employeeService.getData().subscribe(data => {
          this.employees = data;
          console.log("Employees Data from Service:", this.employees);
        });

        this.employeeForm = this.fb.group({
          rows: this.fb.array([
            {
              select: [false],
              name: [this.dataSource.data.values().next().value?.name || ''],
              username: [this.dataSource.data.values().next().value?.username || ''],
              position: [this.dataSource.data.values().next().value?.position || ''],
              salary: [this.dataSource.data.values().next().value?.salary || 0],
              password: [this.dataSource.data.values().next().value?.password || ''],
              id: [this.dataSource.data.values().next().value?.id || 0],
              rating: [this.dataSource.data.values().next().value?.rating || 0],
              isEdit: [false]
            },
            {
              select: [true],
              name: [this.dataSource.data.values().next().value?.name || ''],
              username: [this.dataSource.data.values().next().value?.username || ''],
              position: [this.dataSource.data.values().next().value?.position || ''],
              salary: [this.dataSource.data.values().next().value?.salary || 0],
              password: [this.dataSource.data.values().next().value?.password || ''],
              id: [this.dataSource.data.values().next().value?.id || 0],
              rating: [this.dataSource.data.values().next().value?.rating || 0],
              isEdit: [false]
            },
            {
              select: [true],
              name: [this.dataSource.data.values().next().value?.name || ''],
              username: [this.dataSource.data.values().next().value?.username || ''],
              position: [this.dataSource.data.values().next().value?.position || ''],
              salary: [this.dataSource.data.values().next().value?.salary || 0],
              password: [this.dataSource.data.values().next().value?.password || ''],
              id: [this.dataSource.data.values().next().value?.id || 0],
              rating: [this.dataSource.data.values().next().value?.rating || 0],
              isEdit: [false]
            },
            {
              select: [false],
              name: [this.dataSource.data.values().next().value?.name || ''],
              username: [this.dataSource.data.values().next().value?.username || ''],
              position: [this.dataSource.data.values().next().value?.position || ''],
              salary: [this.dataSource.data.values().next().value?.salary || 0],
              password: [this.dataSource.data.values().next().value?.password || ''],
              id: [this.dataSource.data.values().next().value?.id || 0],
              rating: [this.dataSource.data.values().next().value?.rating || 0],
              isEdit: [false]
            }
          ]) 
        });
        console.log("Employee Form Group:", this.employeeForm);

        this.employees.forEach(emp => this.addTableRow(emp as unknown as Employee));
        console.log("Form Array after adding employees:", this.getRows().value);
 }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  checkedOrUnchecked(row: Employee) {
    if (row && row.isEdit === true) {
       this.selection.toggle(row);
       console.log("Unchecked Rows:", this.selection.selected);
    } else {
      this.selection.toggle(row);
      console.log("Checked Rows:", this.selection.selected);
    }
  }

  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`; 
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length; // Assuming 'dataSource' is your MatTableDataSource
    return numSelected === numRows;
  }

  getRows(): FormArray {
        return this.employeeForm.get('rows') as FormArray;
  }

  addTableRow(data: Employee): void {
        const selectedEmployee = this.selection.selected[0];
        const rowFormGroup = this.fb.group({
          select: [false],
          name: [selectedEmployee ? selectedEmployee.name : '', Validators.required],
          username: [selectedEmployee ? selectedEmployee.username : '', [Validators.required, Validators.email]],
          position: [selectedEmployee ? selectedEmployee.position : '', Validators.required],
          salary: [selectedEmployee ? selectedEmployee.salary : 0, [Validators.required, Validators.min(0)]],
          password: [selectedEmployee ? selectedEmployee.password : '', Validators.required],
          id: [selectedEmployee ? selectedEmployee.id : 0, [Validators.required, Validators.min(0)]],
          rating: [selectedEmployee ? selectedEmployee.rating : 0, [Validators.required, Validators.min(0)]],
          isEdit: [selectedEmployee ? selectedEmployee.isEdit : false]
        });
        this.getRows().push(rowFormGroup);
      }


      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }

    addRow(mode:number){
        if(mode==0){
          this.router.navigateByUrl('/add-employee');
          console.log("Add Row");
        }
        if(mode==1){
          console.log("Edit Row");
          console.log("Edit Row ID:", this.selection.selected[0].id);
          //patch the form with selected row data
              
          if(this.selection.selected.length==0){
            alert("Please select a row to edit");
            this.selection.toggle(this.selection.selected[0]);
            this.employeeForm.patchValue({
              id: this.selection.selected[0]?.id || 0,
              name: this.selection.selected[0]?.name || '',
              position: this.selection.selected[0]?.position || '',
              salary: this.selection.selected[0]?.salary || 0,
              username: this.selection.selected[0]?.username || '',
              password: this.selection.selected[0]?.password || '',
              rating: this.selection.selected[0]?.rating || 0,
              isEdit: this.selection.selected[0]?.isEdit || false
            });
            console.log("Patched Employee Form:", this.employeeForm.value);
            alert("Row has been selected");
            this.selection.changed.subscribe(s => { 
              console.log("Selection changed:", s);
            });
            return;
          }
          if(this.selection.selected.length>1){
            alert("Please select only one row to edit");
            return;
          }
          if(this.selection.selected[0].id==undefined || this.selection.selected[0].id==0){
            alert("Selected row has invalid ID");
            return;
          }
          console.log("Navigating to Edit Employee component with employee ID:", this.selection.selected[0].id);
          // this.$newEmployee = this.selection.selected[0];
          // console.log("Selected Employee for Edit:", this.$newEmployee);
          // this.router.navigateByUrl('/edit-employee');
        
          return;
        }
    }

    editRow(){
          console.log("Edit an employee id from employee table:  ", this.selection.selected[0].id);
          if(this.selection.selected.length>0){
          console.log("Selected Employee for Edit:", this.selection.selected[0]);
          this.employeeService.getEmployeeById(1)
            .subscribe((employee: Employee |  undefined) => {
              if (employee) {
                console.log("Employee fetched by ID:", employee.id);
                this.$newEmployee = employee;
                console.log("Navigating to Edit Employee component with employee:", employee);
                this.router.navigateByUrl('/edit-employee');
              } else {
                console.log("Employee not found.");
              }
            });
          }
          else
            console.log("no selection");
    }

    deleteRow(){
      if(this.selection.selected.length>0){
      console.log("Deleted an employee id from employee table:  ", this.selection.selected[0].id);
      this.employeeService.deleteEmployee(this.selection.selected[0].id);
      }
      else
        console.log("no selection")
    }

    cancel(){
        this.employees.forEach(emp => emp.isEdit = false);
        console.log("Edit Cancelled");
    }

    onSubmit(){
        this.employees.push(this.$newEmployee);
        console.log("New Employee Added:", this.$newEmployee);
    }
}
      

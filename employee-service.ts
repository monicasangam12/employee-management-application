import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../employee";
import { Observable } from "rxjs";
import { EmployeesComponent } from "./employees/employees";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
     private apiUrl = 'http://localhost:8080/employees';
      employees!: Employee;
     constructor(private httpClient: HttpClient){}

    getEmployeeDetails(data:Employee): Observable<any> {
        return this.httpClient.post(this.apiUrl, data);
    };

    getEmployeeById(id: number) {
        return this.httpClient.get(this.apiUrl);
    }

    postEmployeeDetails(employee: { id: number, name: string, position: string }) {
        return this.httpClient.post(this.apiUrl, employee);
        console.log('Employee details posted:', employee);
    }

    updateEmployeeDetails(id: number, updatedInfo: { name?: string, position?: string }) {
        return this.httpClient.put(this.apiUrl, this.employees);
        console.log(`Employee with ID ${id} updated with:`, updatedInfo);
    }

    deleteEmployee(id: number) {
        this.httpClient.delete(this.apiUrl);
        console.log(`Employee with ID ${id} deleted`);
    }
}
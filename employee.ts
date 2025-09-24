export class Employee{
    id: number;
    name: string
    position: string;
    username: string;
    password: string;
    salary: number;

    constructor(id: number, name: string, position: string, salary: number, username: string, password: string){
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.username = username;
        this.password = password;
    }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Employee{
    constructor(
        public empId: number,
        public name: string,
        public designation: string,
        public salary: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClient: HttpClient) {
    }

    getEmployees(){
        return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
    }

    public deleteEmployee(id: number){
        return this.httpClient.delete('http://localhost:8080/employees/' + id);
    }

    public createEmployee(employee: Employee){
        return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
    }
}

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
        console.log('test');
        let username = 'username';
        let password = 'password';
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.httpClient.get<Employee[]>('http://localhost:8080/employees', {headers});
    }

    public deleteEmployee(id: number){
        let username = 'username';
        let password = 'password';
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.httpClient.delete('http://localhost:8080/employees/' + id, {headers});
    }

    public createEmployee(employee: Employee){
        let username = 'username';
        let password = 'password';
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.httpClient.post<Employee>('http://localhost:8080/employees', employee, {headers});
    }
}

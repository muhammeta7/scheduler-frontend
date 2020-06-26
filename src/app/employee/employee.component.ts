import {Component, OnInit} from '@angular/core';
import {Employee, HttpClientService} from '../services/http-client.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    employees: Employee[];

    constructor(private httpClientService: HttpClientService) {
    }

    ngOnInit() {
        this.httpClientService.getEmployees().subscribe(
            response => this.handleSuccessfulResponse(response)
        );
        console.log('Heyyy');
    }

    handleSuccessfulResponse(response) {
        this.employees = response;
    }

    deleteEmployee(employee: Employee): void {
        this.httpClientService.deleteEmployee(employee.empId)
            .subscribe(data => {
                this.employees = this.employees.filter(u => u !== employee);
            });
    }
}

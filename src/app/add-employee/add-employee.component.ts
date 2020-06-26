import { Component, OnInit } from '@angular/core';
import {Employee, HttpClientService} from '../services/http-client.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee(null,'','',"");

  constructor(
      private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert('Employee created successfully.');
        });
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.scss']
})
export class FormtestComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthenticationService) {}

  ngOnInit() {
  }

  checkLogin() {
    (this.loginService.authenticate(this.username, this.password).subscribe(
            data => {
              this.router.navigate(['employees']);
              this.invalidLogin = false;
            },
            error => {
              this.invalidLogin = true;

            }
        )
    );
  }

  goToSignUpPage(){
    this.router.navigate(['register']);
  }

}

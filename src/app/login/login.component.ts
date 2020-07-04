import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

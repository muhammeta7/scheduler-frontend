import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username = 'username';
    password = 'password';
    invalidLogin = false;

    constructor(private router: Router, private loginService: AuthenticationService) {}

    ngOnInit() {
    }

    checkLogin() {
        // @ts-ignore
        if (this.loginService.authenticate(this.username, this.password)) {
            this.router.navigate(['']);
            this.invalidLogin = false;
        } else {
            this.invalidLogin = true;
        }
    }
}

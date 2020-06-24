import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {
    }

    authenticate(username, password) {
        if (username === 'muhammeta7' && password === 'password') {
            sessionStorage.setItem('username', username);
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    }

    logOut() {
        sessionStorage.removeItem('username');
    }
}

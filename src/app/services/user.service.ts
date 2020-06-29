import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../sign-up/model/user';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private CREATE_USER_URL = 'http://localhost:8080/register';

    constructor(private http: HttpClient) {
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.CREATE_USER_URL, user);
    }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from './model/user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
    users: User[] = [];

    userModel: User = {
      id: null,
      name: '',
      email: '',
      username: '',
      password: '',
    };

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(){}

    createUser(){
      this.userService.createUser(this.userModel).subscribe(
          (res) => {
            if (this.users.includes(res)){
              alert('User already exists');
            } else{
              this.users.push(res);
              console.log(this.users);
              this.router.navigate(['/login']);
            }
          },
          (error) => {
            alert('An error has occurred while creating user');
          }
      );
    }
}

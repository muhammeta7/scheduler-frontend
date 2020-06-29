import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
    {path: 'employees', component: EmployeeComponent, canActivate: [AuthGuardService]},
    {path: 'addemployee', component: AddEmployeeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

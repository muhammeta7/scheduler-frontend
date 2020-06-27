import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthHttpInterceptorService} from './services/auth-http-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EmployeeComponent,
        LogoutComponent,
        AddEmployeeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService , multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [
        PublicComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PagesModule { }

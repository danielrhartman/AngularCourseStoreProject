import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    BsNavbarComponent
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class CoreModule { }

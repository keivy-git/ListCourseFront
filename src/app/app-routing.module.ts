import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './auth/user/list/list.component';


const routes: Routes = [
 {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
 },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contactform',
    component: ContactFormComponent
  },
  { path: 'list',
    component: ListComponent
  }


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './auth/user/list/list.component';
import { CouponComponent } from './main/coupon/coupon.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfilComponent } from './auth/profil/profil.component';
import { AuthGuardService } from './shared/service/auth-guard.service';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'profil', component: ProfilComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'contactform', component: ContactFormComponent
  },
  {
    path: 'list', component: ListComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'coupon', component: CouponComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

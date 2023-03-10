import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthService, AuthGuard ]
})
export class AppRoutingModule { }

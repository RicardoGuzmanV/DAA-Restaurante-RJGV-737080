import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { ResListComponent } from './res-list/res-list.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', redirectTo: 'admin/login' },
  { path: 'admin',  children: [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'reslist', component: ResListComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthService, AuthGuard ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { MovieComponent } from './MyComponents/movie/movie.component';
import { DetailsComponent } from './MyComponents/details/details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie', component: MovieComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: `details`, component: DetailsComponent},
  {path:``, component: LoginComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

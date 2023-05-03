import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//{AM} -> modulos que importamos
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// (BA)
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'home', component: HomePageComponent},
  // (BA)
  {path:'administrador', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
// (BA)
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

//MODULOS ANGULAR MATERIAL (BA)
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    LoginFormComponent,
    HomeComponent,
    AdminComponent,
    AdminPageComponent,
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //(BA)
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { RecaptchaModule } from 'ng-recaptcha';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
*https://github.com/valor-software/ng2-file-upload
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AltaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RecaptchaModule.forRoot(),
    //BrowserAnimationsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

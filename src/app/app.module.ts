import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MenuCipComponent } from './components/cip-menu/menu.cip.component';
import { LoginCipComponent } from './components/cip-login/login.cip.component';
import { DatosPersonalesCipComponent } from './components/cip-datos-personales/datos.personales.cip.component';
import { AyudaCipComponent } from './components/cip-ayuda/ayuda.cip.component';
@NgModule({
  declarations: [
    AppComponent, MenuCipComponent, LoginCipComponent, DatosPersonalesCipComponent, AyudaCipComponent
  ],
  imports: [
    BrowserModule,  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

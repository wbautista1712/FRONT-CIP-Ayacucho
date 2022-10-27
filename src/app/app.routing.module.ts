import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AyudaCipComponent } from './components/cip-ayuda/ayuda.cip.component'
import { DatosPersonalesCipComponent } from './components/cip-datos-personales/datos.personales.cip.component'
import { LoginCipComponent } from './components/cip-login/login.cip.component'
import { MenuCipComponent } from './components/cip-menu/menu.cip.component'
import { PagoCipComponent } from './components/cip-pago/pago.cip.component'
import { RecuperarCipComponent } from './components/cip-recuperar/recuperar.cip.component'
import { SoporteTecnicoCipComponent } from './components/cip-soporte-tecnico/soporte.tecnico.cip.component'
import { TerminoCondicionCipComponent } from './components/cip-termino-condicion/termino.condicion.cip.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginCipComponent },
  {
    path: 'menu',
    component: MenuCipComponent,
    children: [
      { path: 'ayuda', component: AyudaCipComponent },
      { path: 'datosPersonales', component: DatosPersonalesCipComponent },
      { path: 'pago', component: PagoCipComponent },
      { path: 'soporteTecnico', component: SoporteTecnicoCipComponent },
      { path: 'terminoCondicion', component: TerminoCondicionCipComponent }
    ],
  },
  { path: 'recuperar', component: RecuperarCipComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

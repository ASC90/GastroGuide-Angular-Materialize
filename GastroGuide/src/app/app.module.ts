import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
// ngModel
import { FormsModule } from '@angular/forms';
// Form select multiple
import { MaterializeDirective } from "angular2-materialize";




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CondicionesLegalesComponent } from './condiciones-legales/condiciones-legales.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';
import { HomeresComponent } from './homeres/homeres.component';
import { RegistroRestauranteComponent } from './registro-restaurante/registro-restaurante.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteMenuComponent } from './restaurante-menu/restaurante-menu.component';
import { RestauranteOpinionesComponent } from './restaurante-opiniones/restaurante-opiniones.component';
import { RestaurantePromocionesComponent } from './restaurante-promociones/restaurante-promociones.component';
import { RestauranteRecetasComponent } from './restaurante-recetas/restaurante-recetas.component';
import { RestauranteVideosComponent } from './restaurante-videos/restaurante-videos.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'condiciones-legales', component: CondicionesLegalesComponent },
  { path: 'filtrar', component: FiltrarComponent },
  { path: 'loginSingup', component: LoginSingupComponent },
  { path: 'homeres', component: HomeresComponent },
  { path: 'restaurante/:id', component: RestauranteComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CondicionesLegalesComponent,
    AvisoLegalComponent,
    HomeComponent,
    BuscadorComponent,
    MaterializeDirective,
    FiltrarComponent,
    LoginSingupComponent,
    HomeresComponent,
    RegistroRestauranteComponent,
    RestauranteComponent,
    RestauranteMenuComponent,
    RestauranteOpinionesComponent,
    RestaurantePromocionesComponent,
    RestauranteRecetasComponent,
    RestauranteVideosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

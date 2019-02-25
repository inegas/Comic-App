import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios




// Rutas
import { app_routing } from './app/app.routes';





// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/components/shared/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { HeroesComponent } from './app/components/heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

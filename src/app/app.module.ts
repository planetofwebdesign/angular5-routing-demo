import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutes } from './app.routing';
import { StartWarsHeroesComponent } from './start-wars-heroes/start-wars-heroes.component';

import { StarWarsHerosService } from './services/star-wars-heros.service';
import { StarWarsHeroDetailComponent } from './star-wars-hero-detail/star-wars-hero-detail.component';
import { StartWarsHerosResolverService } from './resolvers/star-wars-heros-resolver.service';
import { StartWarsHerosDetailsResolverService } from './resolvers/star-wars-hero-details-resolver.service';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StartWarsHeroesComponent,
    StarWarsHeroDetailComponent
],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    StarWarsHerosService,
    StartWarsHerosResolverService,
    StartWarsHerosDetailsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

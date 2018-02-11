import { Routes, RouterModule } from '@angular/router';
import { StartWarsHeroesComponent } from './start-wars-heroes/start-wars-heroes.component';
import { StarWarsHeroDetailComponent } from './star-wars-hero-detail/star-wars-hero-detail.component';
import { StartWarsHerosResolverService } from './resolvers/star-wars-heros-resolver.service';
import { StartWarsHerosDetailsResolverService } from './resolvers/star-wars-hero-details-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/heros' },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: StartWarsHeroesComponent,
        resolve: {
         'heros': StartWarsHerosResolverService
        },
        children: [
          {
            path: ':id',
            component: StarWarsHeroDetailComponent,
            resolve: {
             'hero': StartWarsHerosDetailsResolverService
            }
          }
        ]
      }

    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);

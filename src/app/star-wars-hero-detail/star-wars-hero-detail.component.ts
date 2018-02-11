import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, NavigationEnd, Router, ActivationStart } from '@angular/router';
import { StarWarsHerosService } from '../services/star-wars-heros.service';
// import 'rxjs/add/operator/mergeMap';

import { mergeMap } from 'rxjs/operators/mergeMap';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-star-wars-hero-detail',
  templateUrl: './star-wars-hero-detail.component.html',
  styleUrls: ['./star-wars-hero-detail.component.css']
})
export class StarWarsHeroDetailComponent implements OnInit {

  hero: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private starWarsHeroService: StarWarsHerosService
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.pipe(
      mergeMap((params: ParamMap) => this.starWarsHeroService.getHero(params.get('id')))
    ).subscribe(hero => this.hero = hero);

    // this.activatedRoute.data.pipe(
    //   pluck('hero')
    // ).subscribe((hero: any) => this.hero = hero);

    // const self = this;
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.starWarsHeroService.getHero(id).subscribe(hero => this.hero = hero);

    // this.router.events
    //   .subscribe((event) => {
    //     let id = self.activatedRoute.snapshot.paramMap.get('id');
    //     if (event instanceof NavigationEnd) {
    //       const id = this.activatedRoute.snapshot.paramMap.get('id');
    //       console.log('NavigationEnd:', event);
    //     } else if ( event instanceof ActivationStart) {
    //       const id = this.activatedRoute.snapshot.paramMap.get('id');
    //     }
    //   });
  }

}

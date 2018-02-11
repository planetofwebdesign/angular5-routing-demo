import { Component, OnInit } from '@angular/core';
import { StarWarsHerosService } from '../services/star-wars-heros.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { take, pluck } from 'rxjs/operators';
@Component({
  selector: 'app-start-wars-heroes',
  templateUrl: './start-wars-heroes.component.html',
  styleUrls: ['./start-wars-heroes.component.css']
})
export class StartWarsHeroesComponent implements OnInit {

  heros: any[];
  constructor(
    private starWarsHerosService: StarWarsHerosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      pluck('heros')
    ).subscribe((heros: any[]) => this.heros = heros);

    //  this.starWarsHerosService.getHeros().subscribe((heros: any[]) => this.heros = heros);
  }

}

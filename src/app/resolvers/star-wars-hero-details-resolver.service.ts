import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StarWarsHerosService } from '../services/star-wars-heros.service';


@Injectable()
export class StartWarsHerosDetailsResolverService implements Resolve<any> {

    constructor(private service: StarWarsHerosService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.paramMap.get('id');
        return this.service.getHero(id);

    }
}

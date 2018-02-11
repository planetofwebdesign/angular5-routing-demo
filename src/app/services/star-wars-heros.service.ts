import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class StarWarsHerosService {

    constructor(private http: HttpClient) { }


    getHeros(): Observable<any> {
        // debugger;

        const url = `https://swapi.co/api/people/`;
        return this.http.get(url).pipe(
            map((data: any) => data.results));
    }

    getHero(id: string): Observable<any> {
        const url = `https://swapi.co/api/people/${id}/`;
        return this.http.get(url);
    }

}

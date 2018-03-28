import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  constructor(private http: Http){}

  getPeople() {
    return this.http.get('assets/generated.json')
    .map(response => response.json())
  }

}

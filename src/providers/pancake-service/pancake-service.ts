import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Pancakes } from '../../models/pancakes';


@Injectable()
export class PancakeService {
  pancakes: Pancakes;

  constructor(public http: Http) {
 
  }

  viewDetails(id) {

    return new Promise(resolve => {
      this.http.get('./assets/mocks/'+id+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.pancakes = data;
          resolve(this.pancakes);
        });
    });
  }

}

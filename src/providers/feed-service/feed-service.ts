import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Pancakes } from '../../models/pancakes';

@Injectable()
export class FeedService {

  feeds: Pancakes[];

  constructor(private http: Http) {

  }

  load() {
    if (this.feeds) {
      return Promise.resolve(this.feeds);
    }

    return new Promise(resolve => {
      this.http.get('./assets/mocks/feed.json')
        .map(res => res.json())
        .subscribe(data => {
          this.feeds = data;
          resolve(this.feeds);
        });
    });
  }

}

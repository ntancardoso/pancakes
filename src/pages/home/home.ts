import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pancakes } from '../../models/pancakes';
import { FeedService } from '../../providers/feed-service/feed-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ FeedService ]
})
export class HomePage {

  feeds: Pancakes[];

  constructor(public navCtrl: NavController, public feedService: FeedService) {
    this.loadFeeds();
  }

  loadFeeds(){
    this.feedService.load()
    .then(data => {
      this.feeds = data;
    });
  }

}

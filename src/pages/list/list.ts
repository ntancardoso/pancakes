import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';

//import { Pancakes } from '../../models/pancakes';
import { PancakeService } from '../../providers/pancake-service/pancake-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  pancakes;
  title: string = "My List";
  total:any = 784.00;

  constructor(public pancakeService: PancakeService) {
    this.loadList();
  }

  loadList(){
    let id = Math.floor((Math.random() * 3) + 1);
    this.pancakeService.viewDetails(id)
    .then(data => {
      //this.pancakeList = data['pancakes'];
      this.pancakes = data;
      this.title = data['title'];
    });
  }


  slideChanged() {
    this.total = Math.floor((Math.random() * 999) + 80).toFixed(2);
  }
}

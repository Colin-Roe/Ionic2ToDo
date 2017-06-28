import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title;
  description;

  constructor(public navParams: NavParams) {
  }

  //When we push this page we will pass in the data of the item that was clicked, 
  //and then we just set the title and description to that of the item using NavParams.
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}

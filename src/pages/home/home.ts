import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'; //This will allow us to create a Modal using that page, as we do in the addItem function
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
    });
  }

  ionViewDidLoad(){
 
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);

    //onDidDismiss listener will grab the item that is being passed back and then save it using the saveItem function
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}

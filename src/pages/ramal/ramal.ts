import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { rooms } from "../../suport_class/room_cdt";
import { companys_pctec } from "../../suport_class/companys_pctec";
import { ramalDetailsPage } from "./ramalDetails"

import { FormControl } from '@angular/forms';
import { Data } from '../../providers/data';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-ramal',
  templateUrl: 'ramal.html'
})
export class RamalPage 
{
  public ramais_list: Array<any>;
  public pctec_list: Array<any>;

  isAndroid: boolean = false;
  flagRamal: string = "ramal";

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform, public dataService: Data) {
    this.ramais_list = rooms;
    this.pctec_list = companys_pctec;
    this.isAndroid = platform.is('android');
    this.searchControl = new FormControl();
    

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RamalPage');
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(100).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }

  openMenu(i: number)
  {
    console.log('number i = ' + i);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Detalhes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: this.ramais_list[i].phone,
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'call' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
            text: this.ramais_list[i].mail,
            icon: !this.platform.is('ios') ? 'mail' : null,
            handler: () => {
              console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }

  openMenuPctec(i: number)
  {
    console.log(this.pctec_list[i].mail);
    //let actionText = this.generateActionSheet(this.pctec_list[i]);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Detalhes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: this.pctec_list[i].phone,
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'call' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: this.pctec_list[i].mail[0],
          icon: !this.platform.is('ios') ? 'mail' : null,
          handler: () => {
            console.log('Share clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(ramalDetailsPage, { item: item });
  }

  onSearchInput(){
    this.searching = true;
  }
  setFilteredItems(){
    this.items = this.dataService.filterItems(this.searchTerm);
  }
}

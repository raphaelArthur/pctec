import { Component } from '@angular/core';
import { NavParams, ActionSheetController, Platform } from 'ionic-angular';

@Component({
    selector: 'detail-ramal',
  templateUrl: 'ramal_details.html'
})

export class ramalDetailsPage 
{
  public item;

  constructor(params: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform)
  {
    this.item = params.data.item;
  }

  openMenuPctec(people: any)
  {
    //console.log(this.item[i].mail);
    //let actionText = this.generateActionSheet(this.pctec_list[i]);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Detalhes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: people[1],
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'call' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
}
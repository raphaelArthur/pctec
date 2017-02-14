import { Component } from '@angular/core';
import { NavParams, ActionSheetController, Platform } from 'ionic-angular';

@Component({
    selector: 'detail-companies',
  templateUrl: 'companies_details.html'
})

export class companiesDetailsPage 
{
  public company;

  constructor(params: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform)
  {
    this.company = params.data.item;
  }

  openMenuPctec(company: any)
  {
    //console.log(this.item[i].mail);
    //let actionText = this.generateActionSheet(this.pctec_list[i]);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Detalhes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: company.fantasyName,
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
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { companys_pctec } from "../../suport_class/companys_pctec";
import { companiesDetailsPage } from "./companies_details"

@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html'
})
export class CompaniesPage {

  public pctec_list: Array<any>;

  isAndroid: boolean = false;
  flagRamal: string = "ramal";

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform) {
    this.pctec_list = companys_pctec;
    this.isAndroid = platform.is('android');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompaniesPage');
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(companiesDetailsPage, { item: item });
  }

}

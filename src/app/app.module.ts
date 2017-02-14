import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { RamalPage } from '../pages/ramal/ramal';
import { CompaniesPage } from '../pages/companies/companies';
import { companiesDetailsPage } from '../pages/companies/companies_details';
import { ramalDetailsPage } from '../pages/ramal/ramalDetails';

import { FlashCardComponent } from '../components/flash-card/flash-card';

import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    RamalPage,
    ramalDetailsPage,
    CompaniesPage,
    companiesDetailsPage,
    FlashCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    RamalPage,
    ramalDetailsPage,
    CompaniesPage,
    companiesDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Data
    ]
})
export class AppModule {}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { rooms } from "../suport_class/room_cdt";

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {
    this.items = rooms;
  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}

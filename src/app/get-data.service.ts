import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GetDataService {
    
    private offset = 40;
    public serviceEvent : any;
    public checkDataAvail = true;

    constructor(private http:Http) {
        this.serviceEvent = new EventEmitter();
    }

    // To emit service call event when scroll bar is reaching bottom of page
    emitServiceCallEvent(){
        this.serviceEvent.emit(true);
    }

    // Servcie call on scroll
    serviceCallOnScroll(){
      this.offset = this.offset + 40;
    }

    // Default service call
    getNewsData() {
        return this.http.get('https://rio.quintype.io/api/v1/stories?limit=40&offset='+this.offset);
    } 

}

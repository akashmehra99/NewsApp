import { Directive, NgZone } from '@angular/core';
import { GetDataService } from './get-data.service';
@Directive({
  selector: '[appScrollChecker]'
})
export class ScrollCheckerDirective {

  private statusCheck : boolean = false;

  constructor(private service: GetDataService, private lc: NgZone) { 

    window.onscroll = () => {
      this.statusCheck = false;
      if ((window.innerHeight + window.scrollY) > (document.body.offsetHeight-1)) {
          this.statusCheck = true;
      }
      lc.run(() => {          
        if(this.statusCheck){
          this.service.emitServiceCallEvent();
        }
      });
    };
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent  {

  @ViewChild('tabset') tabset: TabsetComponent;
  // @ViewChild('first') first: TabDirective;
  // @ViewChild('second') second: TabDirective;

  // ngAfterViewInit(){
  //   console.log(this.tabset.tabs);
  // }

  ngOnInit(): void {
  }

}

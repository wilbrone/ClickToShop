import { Component, OnInit, HostBinding } from '@angular/core';
import {  trigger, state, style, animate, transition, group } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // animation triggers go here
    trigger('myInsertRemoveTrigger', [
      state('in', style({
        transform: 'translateX(0)', opacity: 0
      })),

      transition('void => *', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        group([
          animate('3s ease', style({
            transform: 'translateX(0)',
          })),
          animate('3s ease', style({ opacity: 1 })),
        ]),
      ]),
      // transition(':leave', [
      //   animate('100ms', style({ opacity: 0 }))
      // ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isShown = true;
  isSeen = true;
  isView = true;

  constructor() { }

  ngOnInit(): void {
  }

}

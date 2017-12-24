import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

const fadeInAnimation =
// trigger name for attaching this animation to an element using the [@triggerName] syntax
trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

        // css styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('.10s', style({ opacity: 1 }))
    ]),
]);




@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  animations:[fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

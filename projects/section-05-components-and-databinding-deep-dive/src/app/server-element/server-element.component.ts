import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated              // Default so does not need to be added. Angular adds unique attributes to selectors for View Encapsulation
  // encapsulation: ViewEncapsulation.None               // Turn off View Encapsulation (no unique attributes added)
  // encapsulation: ViewEncapsulation.ShadowDom          // uses the native Shadow DOM for the same functionality as 'Emulated' 
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }
}
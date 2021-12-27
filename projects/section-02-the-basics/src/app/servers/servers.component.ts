import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //select creating your own element
  // selector: '[app-servers]',  //select by CSS attribute
  // selector: '.app-servers',  //select by class
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

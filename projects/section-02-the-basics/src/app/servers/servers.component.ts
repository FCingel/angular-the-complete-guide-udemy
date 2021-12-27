import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //select creating your own element
  // selector: '[app-servers]',  //select by CSS attribute
  // selector: '.app-servers',  //select by class
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  //Works but if it does not try the commented code above and below
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;      
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = <HTMLInputElement>event.target.value;
  // }

}
